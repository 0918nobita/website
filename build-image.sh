#/bin/sh -ex

cargo run --bin ssg -- render
docker build -t kodai-blog/server .
