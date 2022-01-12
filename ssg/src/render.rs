use std::{fs, path::PathBuf};

use serde::Serialize;
use tera::{Tera, Context};

use super::articles::Articles;

#[derive(Serialize, Clone)]
struct ArticleContext {
    title: String,
    desc: String,
    html_content: String,
}

#[derive(Serialize)]
struct ArticleListContext {
    articles: Vec<ArticleContext>,
}

pub fn subcommand_render(src: &PathBuf, dest: &PathBuf) -> anyhow::Result<()> {
    let tera = Tera::new("templates/**/*")?;

    let articles = Articles::new(src.clone())?;
    let mut article_contexts = Vec::<ArticleContext>::new();

    for article in articles {
        let article = article?;
        let ctx = ArticleContext {
            title: article.title,
            desc: article.desc,
            html_content: article.html_content,
        };

        article_contexts.push(ctx.clone());

        let rendered = tera.render("article.html", &Context::from_serialize(&ctx)?)?;
        fs::write(dest.join(&article.slug).with_extension("html"), rendered)?;
    }

    let context = ArticleListContext {
        articles: article_contexts,
    };

    let rendered = tera.render("article_list.html", &Context::from_serialize(&context)?)?;
    fs::create_dir_all(&dest)?;
    fs::write(dest.join("article_list.html"), rendered)?;

    Ok(())
}
