use actix_files::NamedFile;
use actix_rt::System;
use actix_web::{
    body::Body,
    dev::ServiceResponse,
    http,
    middleware::{
        self,
        errhandlers::{ErrorHandlerResponse, ErrorHandlers},
    },
    web, App, HttpResponse, HttpServer,
};
use openssl::ssl::{SslAcceptor, SslFiletype, SslMethod};

async fn index() -> actix_web::Result<NamedFile> {
    Ok(NamedFile::open("./public/index.html")?)
}

fn not_found<B>(srv_res: ServiceResponse<B>) -> actix_web::Result<ErrorHandlerResponse<Body>> {
    let body = include_str!("../public/404.html");
    let http_res = HttpResponse::NotFound()
        .content_type("text/html")
        .body(body);
    Ok(ErrorHandlerResponse::Response(
        srv_res.into_response(http_res),
    ))
}

fn main() {
    env_logger::init();

    let mut builder = SslAcceptor::mozilla_intermediate(SslMethod::tls()).unwrap();
    builder
        .set_private_key_file("localhost-key.pem", SslFiletype::PEM)
        .unwrap();
    builder.set_certificate_chain_file("localhost.pem").unwrap();

    let mut sys_runner = System::new("web-server");
    let _ = sys_runner.block_on(async {
        HttpServer::new(|| {
            App::new()
                .wrap(ErrorHandlers::new().handler(http::StatusCode::NOT_FOUND, not_found))
                .wrap(middleware::Logger::default())
                .route("/", web::get().to(index))
        })
        .bind_openssl("127.0.0.1:8080", builder)
        .unwrap()
        .run()
        .await
    });
}
