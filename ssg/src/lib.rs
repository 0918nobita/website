mod articles;
pub mod index;
pub mod render;
pub mod search;

use tantivy::schema::Field;

pub struct Fields {
    pub slug: Field,
    pub title: Field,
    pub content: Field,
}
