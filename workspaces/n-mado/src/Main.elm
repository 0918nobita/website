module Main exposing (main)

import Browser exposing (sandbox)
import Html exposing (Html, button, div, h2, p, text)
import Html.Events exposing (onClick)


main : Program () Model Msg
main =
    sandbox { init = init, update = update, view = view }


type alias Model =
    Int


init : Model
init =
    0


type Msg
    = Increment
    | Decrement
    | Reset


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            model + 1

        Decrement ->
            model - 1

        Reset ->
            0


view : Model -> Html Msg
view model =
    div []
        [ h2 [] [ text "Counter" ]
        , p [] [ text <| String.fromInt model ]
        , button [ onClick Increment ] [ text "+" ]
        , button [ onClick Decrement ] [ text "-" ]
        , button [ onClick Reset ] [ text "reset" ]
        ]
