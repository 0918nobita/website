use std::{fs, path::PathBuf};

use serde::Serialize;
use tinytemplate::TinyTemplate;

use super::articles::Articles;

#[derive(Serialize)]
struct ArticleContext {
    title: String,
    desc: String,
}

#[derive(Serialize)]
struct Context {
    articles: Vec<ArticleContext>,
}

pub fn subcommand_render(src: &PathBuf, dest: &PathBuf) -> anyhow::Result<()> {
    let mut tt = TinyTemplate::new();
    let text = include_str!("../template/articles.html");
    tt.add_template("articles", &text)?;

    let articles = Articles::new(src.clone())?;
    let mut article_contexts = Vec::<ArticleContext>::new();
    for article in articles {
        let article = article?;
        article_contexts.push(ArticleContext {
            title: article.title,
            desc: article.desc,
        });
    }
    let context = Context {
        articles: article_contexts,
    };

    let rendered = tt.render("articles", &context)?;

    fs::create_dir_all(&dest)?;
    fs::write(dest.join("articles.html"), rendered)?;

    Ok(())
}
