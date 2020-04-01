#lang racket/base

(require (only-in racket/list
                  empty))

(require (only-in http/request
                  call/input-request
                  read-entity/bytes))

(display
  (call/input-request "1.1"
                      "GET"
                      "https://kodai.vision"
                      empty
                      read-entity/bytes))
