extern crate ssg;

use std::{env, fs, path::Path};

use serde::Serialize;
use tantivy::schema::{IndexRecordOption, Schema, TextFieldIndexing, TextOptions, STORED};

use ssg::{index::subcommand_index, search::subcommand_search, Fields, SubCommand};
use tinytemplate::TinyTemplate;

#[derive(Serialize)]
struct ArticleContext {
    title: String,
}

#[derive(Serialize)]
struct Context {
    articles: Vec<ArticleContext>,
}

fn main() -> anyhow::Result<()> {
    let args = env::args().skip(1).collect::<Vec<_>>();
    let subcommand = SubCommand::parse_args(&args)?;

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
    let body = schema_builder.add_text_field(
        "body",
        TextOptions::default().set_indexing_options(
            TextFieldIndexing::default()
                .set_tokenizer("lang_ja")
                .set_index_option(IndexRecordOption::WithFreqsAndPositions),
        ),
    );
    let schema = schema_builder.build();

    let fields = Fields { slug, title, body };

    match subcommand {
        SubCommand::Index(path) => subcommand_index(&path, &schema, &fields)?,
        SubCommand::Search(query) => {
            subcommand_search(&schema, &fields, &query)?;
        }
        SubCommand::Render(dest_dir) => {
            let mut tt = TinyTemplate::new();
            let text = include_str!("../template/articles.html");
            tt.add_template("articles", &text)?;
            let context = Context {
                articles: vec![
                    ArticleContext {
                        title: "タイトル1".to_owned(),
                    },
                    ArticleContext {
                        title: "タイトル2".to_owned(),
                    },
                ],
            };
            let rendered = tt.render("articles", &context)?;
            let dest_dir = Path::new(&dest_dir);
            fs::create_dir_all(dest_dir)?;
            fs::write(dest_dir.join("articles.html"), rendered)?;
        }
    }

    Ok(())
}
