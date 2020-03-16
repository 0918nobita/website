module Reverser exposing (Model, Msg, init, update, view)

import Html exposing (Html, div, h2, input, p, text)
import Html.Attributes exposing (placeholder)
import Html.Events exposing (onInput)


type alias Model =
    String


init : Model
init =
    ""


type Msg
    = Change String


update : Msg -> Model -> Model
update (Change newContent) _ =
    newContent


view : Model -> Html Msg
view model =
    div
        []
        [ h2 [] [ text "Text Reverser" ]
        , input [ onInput Change, placeholder "Text to reverse" ] []
        , p [] [ text <| "Result: " ++ String.reverse model ]
        ]
