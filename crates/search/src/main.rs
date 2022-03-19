extern crate search;

use std::path::PathBuf;

use clap::Parser;

use search::{index::subcommand_index, search::subcommand_search};

#[derive(Parser)]
enum SubCommand {
    /// 記事を全文検索用にインデックスする
    Index {
        #[clap(short = 'i', long = "input", default_value = "articles")]
        /// 記事を保管しているディレクトリ
        src: PathBuf,
    },
    /// 記事に対して全文検索を実行する
    Search {
        /// 検索ワード
        query: String,
    },
}

fn main() -> anyhow::Result<()> {
    let cmd = SubCommand::parse();

    match cmd {
        SubCommand::Index { src } => subcommand_index(&src)?,
        SubCommand::Search { query } => subcommand_search(&query)?,
    }

    Ok(())
}
