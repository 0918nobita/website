extern crate ssg;

use std::path::PathBuf;

use clap::Parser;
use ssg::subcommand_render;

#[derive(Parser)]
struct Opts {
    #[clap(short = 'i', long = "input", default_value = "articles")]
    /// 記事を保管しているディレクトリ
    src: PathBuf,

    #[clap(short = 'o', long = "output", default_value = "public")]
    /// 書き出し先のディレクトリ
    dest: PathBuf,
}

fn main() -> anyhow::Result<()> {
    let Opts { src, dest } = Opts::parse();
    subcommand_render(&src, &dest)
}
