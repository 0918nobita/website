module Counter exposing (Model, Msg, init, update, view)

import Html exposing (Html, button, div, h2, p, text)
import Html.Events exposing (onClick)
import Html.Lazy exposing (lazy)


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
view =
    lazy counter


counter : Int -> Html Msg
counter count =
    div
        []
        [ h2 [] [ text "Counter" ]
        , p [] [ text <| String.fromInt count ]
        , button [ onClick Increment ] [ text "+" ]
        , button [ onClick Decrement ] [ text "-" ]
        , button [ onClick Reset ] [ text "reset" ]
        ]
