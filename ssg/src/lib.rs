mod articles;
pub mod index;
pub mod render;
pub mod search;

use std::path::PathBuf;

use anyhow::{bail, Context};
use tantivy::schema::Field;

pub struct RenderOption {
    pub src: PathBuf,
    pub dest: PathBuf,
}

pub enum SubCommand {
    Index(String),
    Search(String),
    Render(RenderOption),
}

impl SubCommand {
    pub fn parse_args(args: &[String]) -> anyhow::Result<SubCommand> {
        let subcommand = args.first().context("subcommand is not specified")?;
        if subcommand == "index" {
            let src = args.get(1).context("source directory is not specified")?;
            Ok(SubCommand::Index(src.clone()))
        } else if subcommand == "search" {
            let query = args.get(1).context("query is not specified")?;
            Ok(SubCommand::Search(query.clone()))
        } else if subcommand == "render" {
            let src = args.get(1).context("source directory is not specified")?;
            let dest = args
                .get(2)
                .context("destination directory is not specified")?;
            Ok(SubCommand::Render(RenderOption {
                src: PathBuf::from(src.clone()),
                dest: PathBuf::from(dest.clone()),
            }))
        } else {
            bail!("invalid subcommand")
        }
    }
}

pub struct Fields {
    pub slug: Field,
    pub title: Field,
    pub content: Field,
}
