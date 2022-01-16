# ポートフォリオサイト

actix-web を用いて開発している。

```bash
# 静的サイト生成
cargo run --bin ssg -- render

# 証明書の生成
mkcert -install
mkcert localhost

# Web サーバーのビルド・起動
cargo build --bin server
sudo RUST_LOG=info ./target/debug/server
```

## Docker を用いる場合

```bash
./build-image.sh
docker run -it --rm -p 80:80 -p 443:443 kodai-blog/server /bin/sh
```

## サイト内の記事検索

### インデックスの作成

```bash
cargo run --bin ssg -- index
```

### 全文検索の実行

```bash
cargo run --bin ssg -- search [検索ワード]
```

## サイト内検索用のコンポーネント

Svelte で実装しようと思っている。`/client` で作業中。

## VPS でのデーモンの設定

Ubuntu 20.04 を想定している。

```bash
sudo ./setup-service.sh
```
