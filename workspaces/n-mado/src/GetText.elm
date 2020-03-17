module GetText exposing (Model, Msg, init, update, view)

import Html exposing (Html, text, textarea)
import Html.Attributes exposing (cols, readonly, rows, style)
import Http


type Model
    = Failure
    | Loading
    | Success String


init : () -> ( Model, Cmd Msg )
init _ =
    ( Loading
    , Http.get
        { url = "https://elm-lang.org/assets/public-opinion.txt"
        , expect = Http.expectString GotText
        }
    )


type Msg
    = GotText (Result Http.Error String)


update : Msg -> Model -> ( Model, Cmd Msg )
update (GotText result) _ =
    case result of
        Ok fullText ->
            ( Success fullText, Cmd.none )

        Err _ ->
            ( Failure, Cmd.none )


view : Model -> Html Msg
view model =
    textarea [ readonly True, rows 25, cols 100, style "margin" "10px", style "padding" "10px" ]
        [ case model of
            Failure ->
                text "Failure"

            Loading ->
                text "Loading..."

            Success fullText ->
                text fullText
        ]
