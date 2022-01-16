# Ansible を用いたプロビジョニング

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
ansible-playbook -i hosts playbook.yml -K
```
