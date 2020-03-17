module Main exposing (main)

import Browser exposing (element)
import Counter
import Form
import Html exposing (Html, div, text, textarea)
import Html.Attributes exposing (cols, readonly, rows, style)
import Http
import Reverser


main : Program () Model Msg
main =
    element
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }


type State
    = Failure
    | Loading
    | Success String


type alias Model =
    { counter : Counter.Model
    , reverser : Reverser.Model
    , form : Form.Model
    , state : State
    }


init : () -> ( Model, Cmd Msg )
init _ =
    ( { counter = Counter.init
      , reverser = Reverser.init
      , form = Form.init
      , state = Loading
      }
    , Http.get
        { url = "https://elm-lang.org/assets/public-opinion.txt"
        , expect = Http.expectString GotText
        }
    )


type Msg
    = CounterMsg Counter.Msg
    | ReverserMsg Reverser.Msg
    | FormMsg Form.Msg
    | GotText (Result Http.Error String)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        CounterMsg counterMsg ->
            let
                newCounterModel =
                    Counter.update counterMsg model.counter
            in
            ( { model | counter = newCounterModel }, Cmd.none )

        ReverserMsg reverserMsg ->
            let
                newReverserModel =
                    Reverser.update reverserMsg model.reverser
            in
            ( { model | reverser = newReverserModel }, Cmd.none )

        FormMsg formMsg ->
            let
                newFormModel =
                    Form.update formMsg model.form
            in
            ( { model | form = newFormModel }, Cmd.none )

        GotText result ->
            case result of
                Ok fullText ->
                    ( { model | state = Success fullText }, Cmd.none )

                Err _ ->
                    ( { model | state = Failure }, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none


view : Model -> Html Msg
view model =
    div []
        [ Counter.view model.counter |> Html.map CounterMsg
        , Reverser.view model.reverser |> Html.map ReverserMsg
        , Form.view model.form |> Html.map FormMsg
        , textarea [ readonly True, rows 25, cols 100, style "margin" "10px", style "padding" "10px" ]
            [ case model.state of
                Failure ->
                    text "Failure"

                Loading ->
                    text "Loading..."

                Success fullText ->
                    text fullText
            ]
        ]
