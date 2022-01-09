use std::{fs, path::Path};

use tantivy::{
    collector::TopDocs,
    doc,
    query::QueryParser,
    schema::{Schema, STORED, TEXT},
    Index,
};

fn main() {
    if Path::new("index").exists() {
        fs::remove_dir_all("index").unwrap();
    }

    fs::create_dir("index").unwrap();

    let mut schema_builder = Schema::builder();
    let title = schema_builder.add_text_field("title", TEXT | STORED);
    let body = schema_builder.add_text_field("body", TEXT);
    let schema = schema_builder.build();

    let index =
        Index::create_in_dir("./index", schema.clone()).expect("Failed to create index schema");

    let mut index_writer = index
        .writer(100_000_000)
        .expect("Failed to create index writer");
    index_writer.add_document(doc!(
        title => "foo",
        body => "content 1",
    ));
    index_writer.add_document(doc!(
        title => "bar",
        body => "content 2",
    ));
    index_writer
        .commit()
        .expect("Failed to add document indices");

    let searcher = index
        .reader()
        .expect("Failed to create index reader")
        .searcher();
    let query = QueryParser::for_index(&index, vec![title, body])
        .parse_query("content")
        .expect("Failed to parse query");
    let results = searcher
        .search(&query, &TopDocs::with_limit(10))
        .expect("Failed to search documents");

    for (_score, doc_addr) in results {
        let retrieved = searcher
            .doc(doc_addr)
            .expect("Failed to retrieve document info");
        println!("{}", schema.to_json(&retrieved))
    }
}
