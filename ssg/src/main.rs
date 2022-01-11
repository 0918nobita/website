extern crate ssg;

use std::env;

use tantivy::schema::{IndexRecordOption, Schema, TextFieldIndexing, TextOptions, STORED};

use ssg::{
    index::subcommand_index, render::subcommand_render, search::subcommand_search, Fields,
    SubCommand,
};

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

    match subcommand {
        SubCommand::Index(path) => subcommand_index(&path, &schema, &fields)?,
        SubCommand::Search(query) => subcommand_search(&schema, &fields, &query)?,
        SubCommand::Render(render_option) => subcommand_render(&render_option)?,
    }

    Ok(())
}
