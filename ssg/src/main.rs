extern crate ssg;

use std::path::PathBuf;

use structopt::StructOpt;

use ssg::{index::subcommand_index, render::subcommand_render, search::subcommand_search};

#[derive(StructOpt)]
/// 静的サイト生成用 CLI ツール
enum Opt {
    /// 記事を HTML 文書に書き出す
    Render {
        #[structopt(short = "i", long = "input", default_value = "articles")]
        /// 記事を保管しているディレクトリ
        src: PathBuf,
        #[structopt(short = "o", long = "output", default_value = "dest")]
        /// 書き出し先のディレクトリ
        dest: PathBuf,
    },
    /// 記事を全文検索用にインデックスする
    Index {
        #[structopt(short = "i", long = "input", default_value = "articles")]
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
    let opt = Opt::from_args();

    match opt {
        Opt::Render { src, dest } => subcommand_render(&src, &dest)?,
        Opt::Index { src } => subcommand_index(&src)?,
        Opt::Search { query } => subcommand_search(&query)?,
    }

    Ok(())
}
