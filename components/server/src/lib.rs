use actix_files::Files;
use actix_web::{
    dev::Server,
    http::{header, ContentEncoding},
    middleware::{Compress, Logger},
    web, App, HttpRequest, HttpResponse, HttpServer,
};
use openssl::ssl::{SslAcceptor, SslFiletype, SslMethod};
use serde::Deserialize;

fn default_www_root() -> String {
    "./public".to_owned()
}

fn default_certificate_path() -> String {
    "localhost.pem".to_owned()
}

fn default_private_key_path() -> String {
    "localhost-key.pem".to_owned()
}

#[derive(Deserialize)]
pub struct Config {
    #[serde(default = "default_www_root")]
    www_root: String,

    #[serde(default = "default_certificate_path")]
    certificate_path: String,

    #[serde(default = "default_private_key_path")]
    private_key_path: String,
}

pub fn http_server(http_addr: &str) -> Server {
    HttpServer::new(|| {
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
    .workers(2)
    .bind(http_addr)
    .unwrap_or_else(|_| panic!("Failed to bind {}", http_addr))
    .run()
}

pub fn https_server(https_addr: &str, config: Config) -> Server {
    let Config {
        www_root,
        certificate_path,
        private_key_path,
    } = config;

    let mut ssl = SslAcceptor::mozilla_intermediate(SslMethod::tls()).unwrap();
    ssl.set_certificate_chain_file(certificate_path).unwrap();
    ssl.set_private_key_file(private_key_path, SslFiletype::PEM)
        .unwrap();

    HttpServer::new(move || {
        App::new()
            .wrap(Compress::new(ContentEncoding::Br))
            .wrap(Logger::default())
            .service(Files::new("/", www_root.clone()).index_file("index.html"))
            .default_service(web::route().to(|| {
                HttpResponse::NotFound()
                    .content_type("text/html")
                    .body(include_str!("./404.html"))
            }))
    })
    .bind_openssl(https_addr, ssl)
    .unwrap_or_else(|_| panic!("Failed to bind {}", https_addr))
    .run()
}
