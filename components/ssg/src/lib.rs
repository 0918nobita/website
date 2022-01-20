use std::{collections::HashMap, fs, path::Path};

use article::Articles;
use serde::Serialize;
use tera::{Context, Error as TeraErr, Tera, Value};

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

fn filter_indent(s: &Value, args: &HashMap<String, Value>) -> Result<Value, TeraErr> {
    let s = s.as_str().ok_or_else(|| TeraErr::msg("expected string"))?;

    let count = args
        .get("count")
        .ok_or_else(|| TeraErr::msg("`count` arg is required but missing"))?
        .as_u64()
        .ok_or_else(|| TeraErr::msg("the value of `count` is invalid"))?;

    let sep = "\n".to_owned() + &" ".repeat(count as usize);
    Ok(Value::String(s.lines().collect::<Vec<_>>().join(&sep)))
}

pub fn subcommand_render(src: &Path, dest: &Path) -> anyhow::Result<()> {
    let mut tera = Tera::new("templates/**/*")?;
    tera.register_filter("indent", filter_indent);

    let articles = Articles::new(src.to_path_buf())?;
    let mut article_contexts = Vec::<ArticleContext>::new();

    let rendered = tera.render("index.html", &Context::default())?;
    fs::write(dest.join("index.html"), rendered)?;

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
