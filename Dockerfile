FROM rust:1.57.0 AS builder
WORKDIR /app
COPY ssg/ /app/ssg/
COPY server/ /app/server/
COPY Cargo.toml Cargo.lock /app/
RUN cargo build --bin server --release
RUN strip /app/target/release/server

FROM gcr.io/distroless/cc
WORKDIR /app
COPY public/ /app/public/
COPY ./*.pem /app/
COPY --from=builder /app/target/release/server /app
EXPOSE 80
EXPOSE 443
ENV RUST_LOG=info
ENTRYPOINT ["/app/server"]
