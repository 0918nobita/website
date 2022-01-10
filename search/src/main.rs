use std::{env, fs, path::Path};

use lindera_tantivy::tokenizer::LinderaTokenizer;
use pulldown_cmark::{html, Event, Options, Parser};
use tantivy::{
    collector::TopDocs,
    doc,
    query::QueryParser,
    schema::{IndexRecordOption, Schema, TextFieldIndexing, TextOptions},
    Index,
};

fn extract_text_content(event: &Event) -> Option<String> {
    match event {
        Event::Start(_)
        | Event::End(_)
        | Event::FootnoteReference(_)
        | Event::SoftBreak
        | Event::HardBreak
        | Event::Rule
        | Event::TaskListMarker(_) => None,
        Event::Text(text) | Event::Code(text) | Event::Html(text) => {
            Some(text.clone().trim().to_string())
        }
    }
}

fn main() {
    let query = env::args().nth(1).unwrap_or("Rust".to_owned());

    let md_str = r#"# サンプル記事

Rust[^1] でポートフォリオサイト兼ブログを開発しています。

[^1]: プログラミング言語
"#;
    let events: Vec<Event> = Parser::new_ext(md_str, Options::ENABLE_FOOTNOTES).collect();

    let mut html_buf = String::new();
    html::push_html(&mut html_buf, events.clone().into_iter());
    println!("HTML:\n{}", html_buf);

    let text = events
        .iter()
        .filter_map(extract_text_content)
        .collect::<Vec<_>>()
        .join(" ");
    println!("Text: {}", text);

    if Path::new("index").exists() {
        fs::remove_dir_all("index").unwrap();
    }

    fs::create_dir("index").unwrap();

    let mut schema_builder = Schema::builder();
    let title = schema_builder.add_text_field(
        "title",
        TextOptions::default()
            .set_indexing_options(
                TextFieldIndexing::default()
                    .set_tokenizer("lang_ja")
                    .set_index_option(IndexRecordOption::WithFreqsAndPositions),
            )
            .set_stored(),
    );
    let body = schema_builder.add_text_field(
        "body",
        TextOptions::default().set_indexing_options(
            TextFieldIndexing::default()
                .set_tokenizer("lang_ja")
                .set_index_option(IndexRecordOption::WithFreqsAndPositions),
        ),
    );
    let schema = schema_builder.build();

    let index =
        Index::create_in_dir("./index", schema.clone()).expect("Failed to create index schema");
    index
        .tokenizers()
        .register("lang_ja", LinderaTokenizer::new().unwrap());

    let mut index_writer = index
        .writer(100_000_000)
        .expect("Failed to create index writer");
    index_writer.add_document(doc!(
        title => "Title",
        body => text,
    ));
    index_writer
        .commit()
        .expect("Failed to add document indices");

    let searcher = index
        .reader()
        .expect("Failed to create index reader")
        .searcher();
    let query = QueryParser::for_index(&index, vec![title, body])
        .parse_query(&query)
        .expect("Failed to parse query");
    let results = searcher
        .search(&query, &TopDocs::with_limit(10))
        .expect("Failed to search documents");

    for (_score, doc_addr) in results {
        let retrieved = searcher
            .doc(doc_addr)
            .expect("Failed to retrieve document info");
        println!("(Hit) {}", schema.to_json(&retrieved))
    }
}
