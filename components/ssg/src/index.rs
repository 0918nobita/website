use std::{fs, path::Path};

use anyhow::Context;
use lindera_tantivy::tokenizer::LinderaTokenizer;
use tantivy::{doc, Index};

use super::{articles::Articles, schema::create_schema_and_fields};

fn init_index_dir() -> anyhow::Result<()> {
    if Path::new("index").exists() {
        fs::remove_dir_all("index")?;
    }

    fs::create_dir("index").context("Failed to create index dir")
}

pub fn subcommand_index(src: &Path) -> anyhow::Result<()> {
    let (schema, fields) = create_schema_and_fields();

    init_index_dir()?;

    let index = Index::create_in_dir("./index", schema)?;
    index
        .tokenizers()
        .register("lang_ja", LinderaTokenizer::new()?);

    let mut index_writer = index.writer(100_000_000)?;

    let articles = Articles::new(src.to_path_buf())?;
    for article in articles {
        let article = article?;
        index_writer.add_document(doc!(
            fields.slug => article.slug,
            fields.title => article.title,
            fields.content => article.content,
        ));
    }

    index_writer.commit()?;

    Ok(())
}
