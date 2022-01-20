use tantivy::schema::{Field, IndexRecordOption, Schema, TextFieldIndexing, TextOptions, STORED};

pub struct Fields {
    pub slug: Field,
    pub title: Field,
    pub content: Field,
}

pub fn create_schema_and_fields() -> (Schema, Fields) {
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

    (schema, fields)
}
