extern crate ssg;

use std::path::PathBuf;

use clap::Parser;

use ssg::{index::subcommand_index, render::subcommand_render, search::subcommand_search};

#[derive(Parser)]
/// 静的サイト生成用 CLI ツール
enum SubCommand {
    /// 記事を HTML 文書に書き出す
    Render {
        #[clap(short = 'i', long = "input", default_value = "articles")]
        /// 記事を保管しているディレクトリ
        src: PathBuf,

        #[clap(short = 'o', long = "output", default_value = "dest")]
        /// 書き出し先のディレクトリ
        dest: PathBuf,
    },
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
        SubCommand::Render { src, dest } => subcommand_render(&src, &dest)?,
        SubCommand::Index { src } => subcommand_index(&src)?,
        SubCommand::Search { query } => subcommand_search(&query)?,
    }

    Ok(())
}
