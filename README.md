# ポートフォリオサイト

## サーバーサイド

actix-web を用いて開発している。

```bash
cd server
mkcert -install
mkcert localhost
cargo build
sudo RUST_LOG=info ./target/debug/server
```

## 静的サイト生成

ビルド時にインデックスも生成して、サイト内検索を実現したい。

### TinyTemplate を用いて HTML 文書を生成する

```bash
cargo run --bin ssg -- render
```

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
