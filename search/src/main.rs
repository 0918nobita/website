// use std::{fs, path::Path};

use pulldown_cmark::{html, Event, Options, Parser};
// use tantivy::{
//     collector::TopDocs,
//     doc,
//     query::QueryParser,
//     schema::{Schema, STORED, TEXT},
//     Index,
// };

fn main() {
    let md_str = r#"# サンプル記事

Rust[^1] でポートフォリオサイト兼ブログを開発しています。

[^1]: プログラミング言語
"#;
    let events = Parser::new_ext(md_str, Options::ENABLE_FOOTNOTES).collect::<Vec<_>>();

    for e in events.iter() {
        match e {
            Event::Start(ref _tag) => print!("start "),
            Event::End(ref _tag) => print!("end "),
            Event::Text(ref _text) => print!("text "),
            Event::Code(ref _text) => print!("code "),
            Event::FootnoteReference(ref _text) => print!("footnote "),
            _ => (),
        }
        println!("{:?}", e);
    }

    let mut html_buf = String::new();
    html::push_html(&mut html_buf, events.into_iter());
    print!("{}", html_buf);

    // if Path::new("index").exists() {
    //     fs::remove_dir_all("index").unwrap();
    // }

    // fs::create_dir("index").unwrap();

    // let mut schema_builder = Schema::builder();
    // let title = schema_builder.add_text_field("title", TEXT | STORED);
    // let body = schema_builder.add_text_field("body", TEXT);
    // let schema = schema_builder.build();

    // let index =
    //     Index::create_in_dir("./index", schema.clone()).expect("Failed to create index schema");

    // let mut index_writer = index
    //     .writer(100_000_000)
    //     .expect("Failed to create index writer");
    // index_writer.add_document(doc!(
    //     title => "foo",
    //     body => "content 1",
    // ));
    // index_writer.add_document(doc!(
    //     title => "bar",
    //     body => "content 2",
    // ));
    // index_writer
    //     .commit()
    //     .expect("Failed to add document indices");

    // let searcher = index
    //     .reader()
    //     .expect("Failed to create index reader")
    //     .searcher();
    // let query = QueryParser::for_index(&index, vec![title, body])
    //     .parse_query("content")
    //     .expect("Failed to parse query");
    // let results = searcher
    //     .search(&query, &TopDocs::with_limit(10))
    //     .expect("Failed to search documents");

    // for (_score, doc_addr) in results {
    //     let retrieved = searcher
    //         .doc(doc_addr)
    //         .expect("Failed to retrieve document info");
    //     println!("{}", schema.to_json(&retrieved))
    // }
}
