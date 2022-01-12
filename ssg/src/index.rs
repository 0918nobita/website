use std::{
    fs,
    path::{Path, PathBuf},
};

use anyhow::Context;
use lindera_tantivy::tokenizer::LinderaTokenizer;
use tantivy::{doc, schema::Schema, Index};

use super::{articles::Articles, Fields};

fn init_index_dir() -> anyhow::Result<()> {
    if Path::new("index").exists() {
        fs::remove_dir_all("index")?;
    }

    fs::create_dir("index").context("Failed to create index dir")
}

pub fn subcommand_index(src: &PathBuf, schema: &Schema, fields: &Fields) -> anyhow::Result<()> {
    init_index_dir()?;

    let index = Index::create_in_dir("./index", schema.clone())?;
    index
        .tokenizers()
        .register("lang_ja", LinderaTokenizer::new()?);

    let mut index_writer = index.writer(100_000_000)?;

    let articles = Articles::new(src.clone())?;
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
