extern crate server;

use actix_rt::System;
use futures::future;
use server::{http_server, https_server, Config};

fn main() -> anyhow::Result<()> {
    env_logger::init();

    let config: Config = envy::from_env()?;

    let sys_runner = System::new();
    let _ = sys_runner.block_on(async move {
        let http_addr = "[::]:80";
        let http = http_server(http_addr);

        let https_addr = "[::]:443";
        let https = https_server(https_addr, config);

        future::try_join(http, https).await
    });

    Ok(())
}
