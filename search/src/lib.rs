pub mod index;
pub mod search;

use anyhow::{bail, Context};
use tantivy::schema::Field;

pub enum SubCommand {
    Index,
    Search(String),
}

impl SubCommand {
    pub fn parse_args(args: &[String]) -> anyhow::Result<SubCommand> {
        let first = args.first().context("subcommand is not specified")?;
        if first == "index" {
            Ok(SubCommand::Index)
        } else if first == "search" {
            let second = args.get(1).context("query is not specified")?;
            Ok(SubCommand::Search(second.clone()))
        } else {
            bail!("invalid subcommand")
        }
    }
}

pub struct Fields {
    pub slug: Field,
    pub title: Field,
    pub body: Field,
}
