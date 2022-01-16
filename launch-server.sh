#!/bin/sh -ex

RUST_LOG=info \
    WWW_ROOT="/home/kodai/kodai-blog/public" \
    CERTIFICATE_PATH="/etc/letsencrypt/live/kodai.blog/fullchain.pem" \
    PRIVATE_KEY_PATH="/etc/letsencrypt/live/kodai.blog/privkey.pem" \
    /home/kodai/kodai-blog/target/release/server
