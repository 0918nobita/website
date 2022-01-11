use lindera_tantivy::tokenizer::LinderaTokenizer;
use tantivy::{collector::TopDocs, query::QueryParser, schema::Schema, Index};

use super::Fields;

pub fn subcommand_search(schema: &Schema, fields: &Fields, query: &str) -> anyhow::Result<()> {
    let index = Index::open_in_dir("./index")?;
    index
        .tokenizers()
        .register("lang_ja", LinderaTokenizer::new()?);

    let searcher = index.reader()?.searcher();
    let query =
        QueryParser::for_index(&index, vec![fields.title, fields.body]).parse_query(&query)?;
    let results = searcher.search(&query, &TopDocs::with_limit(10))?;

    for (_score, doc_addr) in results {
        let retrieved = searcher.doc(doc_addr)?;
        println!("(Hit) {}", schema.to_json(&retrieved))
    }

    Ok(())
}
