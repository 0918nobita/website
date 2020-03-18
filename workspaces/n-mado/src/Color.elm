module Color exposing (Color, Msg, init, update, view)

import Html exposing (Html, button, div, h2, text)
import Html.Attributes exposing (style)
import Html.Events exposing (onClick)
import Random


type alias Color =
    { red : Int
    , green : Int
    , blue : Int
    }


init : Color
init =
    { red = 0, green = 0, blue = 0 }


type Msg
    = Roll
    | NewColor Color


update : Msg -> Color -> ( Color, Cmd Msg )
update msg color =
    case msg of
        Roll ->
            ( color, Random.generate NewColor colorGenerator )

        NewColor newColor ->
            ( newColor, Cmd.none )


view : Color -> Html Msg
view color =
    div []
        [ h2 [ style "color" (stringFromColor color) ] [ text "Random Color" ]
        , button [ onClick Roll ] [ text "Roll" ]
        ]


colorGenerator : Random.Generator Color
colorGenerator =
    Random.map3 Color
        (Random.int 0 255)
        (Random.int 0 255)
        (Random.int 0 255)


stringFromColor : Color -> String
stringFromColor { red, green, blue } =
    "rgb(" ++ String.fromInt red ++ "," ++ String.fromInt green ++ "," ++ String.fromInt blue ++ ")"
