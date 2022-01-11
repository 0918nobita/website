extern crate search;

use std::env;
use tantivy::schema::{IndexRecordOption, Schema, TextFieldIndexing, TextOptions, STORED};

use search::{index::subcommand_index, search::subcommand_search, Fields, SubCommand};

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
        SubCommand::Index => subcommand_index(&schema, &fields)?,
        SubCommand::Search(query) => {
            subcommand_search(&schema, &fields, &query)?;
        }
    }

    Ok(())
}
