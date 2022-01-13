use actix_files::Files;
use actix_rt::System;
use actix_web::{
    http::{header, ContentEncoding},
    middleware::{Compress, Logger},
    web, App, HttpRequest, HttpResponse, HttpServer,
};
use futures::future;
use openssl::ssl::{SslAcceptor, SslFiletype, SslMethod};

fn main() -> anyhow::Result<()> {
    env_logger::init();

    let mut ssl = SslAcceptor::mozilla_intermediate(SslMethod::tls())?;
    ssl.set_private_key_file("localhost-key.pem", SslFiletype::PEM)?;
    ssl.set_certificate_chain_file("localhost.pem")?;

    let mut sys_runner = System::new("web-server");
    let _ = sys_runner.block_on(async {
        let http_addr = "0.0.0.0:80";
        let http = HttpServer::new(|| {
            App::new()
                .wrap(Logger::default())
                .default_service(web::route().to(|req: HttpRequest| {
                    let host = req.connection_info().host().to_owned();
                    let uri = req.uri();
                    let url = format!("https://{}{}", host, uri);
                    HttpResponse::TemporaryRedirect()
                        .header(header::LOCATION, url)
                        .finish()
                        .into_body()
                }))
        })
        .bind(http_addr)
        .expect(&format!("Failed to bind {}", http_addr))
        .run();

        let https_addr = "0.0.0.0:443";
        let https = HttpServer::new(|| {
            App::new()
                .wrap(Compress::new(ContentEncoding::Br))
                .wrap(Logger::default())
                .service(Files::new("/", "./public").index_file("index.html"))
                .default_service(web::route().to(|| {
                    HttpResponse::NotFound()
                        .content_type("text/html")
                        .body(include_str!("./404.html"))
                }))
        })
        .bind_openssl(https_addr, ssl)
        .expect(&format!("Failed to bind {}", https_addr))
        .run();

        future::try_join(http, https).await
    });

    Ok(())
}
