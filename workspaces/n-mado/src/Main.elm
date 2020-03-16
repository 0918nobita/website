module Main exposing (main)

import Browser exposing (sandbox)
import Counter
import Form
import Html exposing (Html, div)
import Reverser


main : Program () Model Msg
main =
    sandbox { init = init, update = update, view = view }


type alias Model =
    { counter : Counter.Model
    , reverser : Reverser.Model
    , form : Form.Model
    }


init : Model
init =
    { counter = Counter.init
    , reverser = Reverser.init
    , form = Form.init
    }


type Msg
    = CounterMsg Counter.Msg
    | ReverserMsg Reverser.Msg
    | FormMsg Form.Msg


update : Msg -> Model -> Model
update msg model =
    case msg of
        CounterMsg counterMsg ->
            let
                newCounterModel =
                    Counter.update counterMsg model.counter
            in
            { model | counter = newCounterModel }

        ReverserMsg reverserMsg ->
            let
                newReverserModel =
                    Reverser.update reverserMsg model.reverser
            in
            { model | reverser = newReverserModel }

        FormMsg formMsg ->
            let
                newFormModel =
                    Form.update formMsg model.form
            in
            { model | form = newFormModel }


view : Model -> Html Msg
view model =
    div []
        [ Counter.view model.counter |> Html.map CounterMsg
        , Reverser.view model.reverser |> Html.map ReverserMsg
        , Form.view model.form |> Html.map FormMsg
        ]
