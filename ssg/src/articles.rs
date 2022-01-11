use std::{fs, path::PathBuf};

use anyhow::Context;
use pulldown_cmark::{Event, Options, Parser};
use serde::Deserialize;
use yaml_front_matter::{Document, YamlFrontMatter};

#[derive(Deserialize)]
struct Metadata {
    title: String,
    desc: String,
}

fn extract_metadata_and_content(markdown: &str) -> anyhow::Result<Document<Metadata>> {
    YamlFrontMatter::parse::<Metadata>(markdown)
        .map_err(|_| anyhow::Error::msg("Failed to parse YAML Front Matter"))
}

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

fn extract_content(markdown: &str) -> String {
    Parser::new_ext(markdown, Options::all())
        .filter_map(|event| extract_content_from_event(&event))
        .collect::<Vec<_>>()
        .join(" ")
}

#[derive(Debug)]
pub struct Article {
    pub slug: String,
    pub title: String,
    pub desc: String,
    pub content: String,
}

pub struct Articles {
    read_dir: Box<dyn Iterator<Item = PathBuf>>,
}

impl Articles {
    pub fn new(path: PathBuf) -> anyhow::Result<Self> {
        let read_dir = Box::new(
            fs::read_dir(path)?
                .filter_map(|r| r.ok())
                .map(|entry| entry.path()),
        );
        Ok(Articles { read_dir })
    }
}

impl Iterator for Articles {
    type Item = anyhow::Result<Article>;

    fn next(&mut self) -> Option<Self::Item> {
        fn read_article(path_buf: PathBuf) -> anyhow::Result<Article> {
            let markdown = fs::read_to_string(&path_buf)?;
            let slug = path_buf
                .file_stem()
                .and_then(|os_str| os_str.to_str())
                .context("Failed to convert &OsStr to &str")?;
            let doc = extract_metadata_and_content(&markdown)?;
            Ok(Article {
                slug: slug.to_string(),
                title: doc.metadata.title,
                desc: doc.metadata.desc,
                content: extract_content(&doc.content),
            })
        }
        self.read_dir.next().map(read_article)
    }
}
