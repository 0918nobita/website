use actix_files::Files;
use actix_rt::System;
use actix_web::{
    dev::Service,
    http::{ContentEncoding, HeaderName, HeaderValue},
    middleware::{Compress, Logger},
    web, App, HttpResponse, HttpServer,
};
use log::info;
use openssl::ssl::{SslAcceptor, SslFiletype, SslMethod};

fn main() -> anyhow::Result<()> {
    env_logger::init();

    let mut ssl = SslAcceptor::mozilla_intermediate(SslMethod::tls())?;
    ssl.set_private_key_file("localhost-key.pem", SslFiletype::PEM)?;
    ssl.set_certificate_chain_file("localhost.pem")?;

    let mut sys_runner = System::new("web-server");
    let _ = sys_runner.block_on(async {
        HttpServer::new(|| {
            App::new()
                .wrap_fn(|req, srv| {
                    info!("Hi from middleware. You requested: {}", req.path());
                    let fut = srv.call(req);
                    async {
                        let mut res = fut.await?;
                        res.headers_mut().insert(
                            HeaderName::from_static("x-my-header"),
                            HeaderValue::from_static("test"),
                        );
                        Ok(res)
                    }
                })
                .wrap(Compress::new(ContentEncoding::Br))
                .wrap(Logger::default())
                .service(Files::new("/", "./public").index_file("index.html"))
                .default_service(web::route().to(|| {
                    HttpResponse::NotFound()
                        .content_type("text/html")
                        .body(include_str!("./404.html"))
                }))
        })
        .bind_openssl("127.0.0.1:8080", ssl)?
        .run()
        .await
    });
    Ok(())
}
