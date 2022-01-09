# サイト内検索機能について

Tantivy という、全文検索エンジンのライブラリの利用を検討している。

## 実行方法

```bash
cargo run
```

## Tantivy CLI を使用する場合

```bash
$ cargo install tantivy-cli

# インデックスのメタデータを生成する
$ mkdir -p index && tantivy new --index ./index
Creating new index 
First define its schema! 

New field name  ? title
Choose Field Type (Text/u64/i64/f64/Date/Facet/Bytes) ? Text
Should the field be stored (Y/N) ? Y
Should the field be indexed (Y/N) ? Y
Should the term be tokenized? (Y/N) ? Y
Should the term frequencies (per doc) be in the index (Y/N) ? N
Add another field (Y/N) ? Y

New field name  ? body
Choose Field Type (Text/u64/i64/f64/Date/Facet/Bytes) ? Text
Should the field be stored (Y/N) ? Y
Should the field be indexed (Y/N) ? Y
Should the term be tokenized? (Y/N) ? Y
Should the term frequencies (per doc) be in the index (Y/N) ? N
Add another field (Y/N) ? N

# インデックスを作成する
$ tantivy index --index ./index --file ./articles.json
Commit succeed, docstamp at 4
Waiting for merging threads
Terminated successfully!

# 全文検索を実行する
$ tantivy search --index ./index --query content
{"body":["content 1"],"title":["foo"]}
{"body":["content 2"],"title":["bar"]}

$ tantivy search --index ./index --query foo
{"body":["content 1"],"title":["foo"]}

$ tantivy search --index ./index --query bar
{"body":["content 2"],"title":["bar"]}
```
