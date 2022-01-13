#/bin/sh -ex

cargo run --bin ssg -- render
docker build -t kodai-vision/server .
