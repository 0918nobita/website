module Main exposing (main)

import Browser exposing (sandbox)
import Html exposing (Html, button, div, h2, input, p, text)
import Html.Attributes exposing (placeholder)
import Html.Events exposing (onClick, onInput)


main : Program () Model Msg
main =
    sandbox { init = init, update = update, view = view }


type alias Model =
    { count : Int
    , content : String
    }


init : Model
init =
    { count = 0, content = "" }


type Msg
    = Increment
    | Decrement
    | Reset
    | Change String


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            { model | count = model.count + 1 }

        Decrement ->
            { model | count = model.count - 1 }

        Reset ->
            { model | count = 0 }

        Change newContent ->
            { model | content = newContent }


view : Model -> Html Msg
view model =
    div []
        [ div []
            [ h2 [] [ text "Counter" ]
            , p [] [ text <| String.fromInt model.count ]
            , button [ onClick Increment ] [ text "+" ]
            , button [ onClick Decrement ] [ text "-" ]
            , button [ onClick Reset ] [ text "reset" ]
            ]
        , div []
            [ h2 [] [ text "Text Reverser" ]
            , input [ onInput Change, placeholder "Text to reverse" ] []
            , p [] [ text <| "Result: " ++ String.reverse model.content ]
            ]
        ]
