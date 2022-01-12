extern crate ssg;

use std::path::PathBuf;

use structopt::StructOpt;
use tantivy::schema::{IndexRecordOption, Schema, TextFieldIndexing, TextOptions, STORED};

use ssg::{index::subcommand_index, render::subcommand_render, search::subcommand_search, Fields};

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

    let mut schema_builder = Schema::builder();
    let slug = schema_builder.add_text_field("slug", STORED);
    let title = schema_builder.add_text_field(
        "title",
        TextOptions::default()
            .set_indexing_options(
                TextFieldIndexing::default()
                    .set_tokenizer("lang_ja")
                    .set_index_option(IndexRecordOption::WithFreqsAndPositions),
            )
            .set_stored(),
    );
    let content = schema_builder.add_text_field(
        "content",
        TextOptions::default().set_indexing_options(
            TextFieldIndexing::default()
                .set_tokenizer("lang_ja")
                .set_index_option(IndexRecordOption::WithFreqsAndPositions),
        ),
    );
    let schema = schema_builder.build();

    let fields = Fields {
        slug,
        title,
        content,
    };

    match opt {
        Opt::Index { src } => subcommand_index(&src, &schema, &fields)?,
        Opt::Search { query } => subcommand_search(&schema, &fields, &query)?,
        Opt::Render { src, dest } => subcommand_render(&src, &dest)?,
    }

    Ok(())
}
