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

## Ansible を用いたプロビジョニング

`~/.ssh/config` に以下のように追記して、`kodai-blog` ホストを追加してください。

環境にあわせて、`[...]` の部分を適切な値で置き換えてください。

```text
Host kodai-blog
  HostName [xxx.xxx.xx.xx]
  port [N]
  IdentityFile [path to private key file]
  User [hoge]
```

その後、以下のコマンドを実行してください。

```bash
cd ansible
ansible-playbook -i hosts playbook.yml --ask-become-pass
```
