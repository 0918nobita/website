module ParseJson exposing (Model, Msg, init, update, view)

import Html exposing (Html, button, div, h2, img, text)
import Html.Attributes exposing (src, style)
import Html.Events exposing (onClick)
import Http
import Json.Decode exposing (Decoder, field, string)


type Model
    = Failure
    | Loading
    | Success String


init : () -> ( Model, Cmd Msg )
init _ =
    ( Loading, getRandomCatGif )


type Msg
    = MorePlease
    | GotGif (Result Http.Error String)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg _ =
    case msg of
        MorePlease ->
            ( Loading, getRandomCatGif )

        GotGif result ->
            case result of
                Ok url ->
                    ( Success url, Cmd.none )

                Err _ ->
                    ( Failure, Cmd.none )


view : Model -> Html Msg
view model =
    div []
        [ h2 [] [ text "Random Cats" ]
        , viewGif model
        ]


viewGif : Model -> Html Msg
viewGif model =
    case model of
        Failure ->
            div []
                [ text "I could not load a random cat for some reason. "
                , button [ onClick MorePlease ] [ text "Try Again!" ]
                ]

        Loading ->
            text "Loading..."

        Success url ->
            div []
                [ button [ onClick MorePlease, style "display" "block" ] [ text "More Please!" ]
                , img [ src url ] []
                ]


getRandomCatGif : Cmd Msg
getRandomCatGif =
    Http.get
        { url = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cat"
        , expect = Http.expectJson GotGif gifDecoder
        }


gifDecoder : Decoder String
gifDecoder =
    field "data" (field "image_url" string)
