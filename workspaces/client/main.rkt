#lang racket/base

(require (only-in json
                  bytes->jsexpr
                  jsexpr->string))

(require (only-in net/url-string
                  url->string))

(require (only-in net/url-structs
                  path/param
                  url))

(require (only-in racket/list
                  empty))

(require (only-in http/request
                  call/input-request
                  read-entity/bytes))

(define uri
  (url->string
    (url
      "https"
      #f
      "cdn.contentful.com"
      #f
      #t
      `(,(path/param "spaces" empty)
        ,(path/param (getenv "SPACE_ID") empty)
        ,(path/param "environments" empty)
        ,(path/param (getenv "ENV_ID") empty)
        ,(path/param "entries" empty))
      `((access_token . ,(getenv "ACCESS_TOKEN")))
      #f)))

(displayln
  (hash-ref
    (hash-ref
      (bytes->jsexpr
        (call/input-request
          "1.1"
          "GET"
          uri
          empty
          read-entity/bytes))
      'sys)
    'type))
