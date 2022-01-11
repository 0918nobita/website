use std::{fs, path::Path};

use anyhow::Context;
use lindera_tantivy::tokenizer::LinderaTokenizer;
use pulldown_cmark::{Event, Options, Parser};
use tantivy::{doc, schema::Schema, Index};

use super::Fields;

fn extract_content_from_event(event: &Event) -> Option<String> {
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

fn extract_content_from_markdown(markdown: &str) -> String {
    Parser::new_ext(markdown, Options::all())
        .filter_map(|event| extract_content_from_event(&event))
        .collect::<Vec<_>>()
        .join(" ")
}

fn init_index_dir() -> anyhow::Result<()> {
    if Path::new("index").exists() {
        fs::remove_dir_all("index")?;
    }

    fs::create_dir("index").context("Failed to create index dir")
}

pub fn subcommand_index(schema: &Schema, fields: &Fields) -> anyhow::Result<()> {
    init_index_dir()?;

    let index = Index::create_in_dir("./index", schema.clone())?;
    index
        .tokenizers()
        .register("lang_ja", LinderaTokenizer::new()?);

    let mut index_writer = index.writer(100_000_000)?;

    let path_bufs = fs::read_dir("./articles")?
        .filter_map(|r| r.ok())
        .map(|entry| entry.path());

    for path_buf in path_bufs {
        let slug_val = path_buf
            .file_stem()
            .context("Failed to extract basename")?
            .to_str()
            .context("Failed to convert &OsStr to &str")?;
        let markdown = fs::read_to_string(path_buf.as_path())?;
        let body_val = extract_content_from_markdown(&markdown);
        index_writer.add_document(doc!(
            fields.slug => slug_val,
            fields.title => "Title",
            fields.body => body_val,
        ));
    }

    index_writer.commit()?;

    Ok(())
}
