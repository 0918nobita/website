port module Main exposing (activeUsers, cache, main)

import Browser exposing (element)
import Counter
import Form
import GetText
import Html exposing (Html, div, h2, li, text)
import Html.Keyed exposing (ul)
import Json.Encode as E
import ParseJson
import Reverser


main : Program (List String) Model Msg
main =
    element
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }


type alias Model =
    { counter : Counter.Model
    , reverser : Reverser.Model
    , form : Form.Model
    , getText : GetText.Model
    , parseJson : ParseJson.Model
    , list : List String
    }


init : List String -> ( Model, Cmd Msg )
init list =
    let
        ( getTextModel, getTextCmd ) =
            GetText.init ()
    in
    let
        ( parseJsonModel, parseJsonCmd ) =
            ParseJson.init ()
    in
    ( { counter = Counter.init
      , reverser = Reverser.init
      , form = Form.init
      , getText = getTextModel
      , parseJson = parseJsonModel
      , list = list
      }
    , Cmd.batch
        [ Cmd.map GetTextMsg getTextCmd
        , Cmd.map ParseJsonMsg parseJsonCmd
        , cache (E.int 100)
        ]
    )


type Msg
    = CounterMsg Counter.Msg
    | ReverserMsg Reverser.Msg
    | FormMsg Form.Msg
    | GetTextMsg GetText.Msg
    | ParseJsonMsg ParseJson.Msg
    | Received (List String)


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

        GetTextMsg getTextMsg ->
            let
                ( newModel, cmd ) =
                    GetText.update getTextMsg model.getText
            in
            ( { model | getText = newModel }, Cmd.map GetTextMsg cmd )

        ParseJsonMsg parseJsonMsg ->
            let
                ( newModel, cmd ) =
                    ParseJson.update parseJsonMsg model.parseJson
            in
            ( { model | parseJson = newModel }, Cmd.map ParseJsonMsg cmd )

        Received list ->
            ( { model | list = list }, Cmd.none )


port cache : E.Value -> Cmd msg


port activeUsers : (List String -> msg) -> Sub msg


subscriptions : Model -> Sub Msg
subscriptions _ =
    activeUsers Received


view : Model -> Html Msg
view model =
    div []
        [ Counter.view model.counter |> Html.map CounterMsg
        , Reverser.view model.reverser |> Html.map ReverserMsg
        , Form.view model.form |> Html.map FormMsg
        , GetText.view model.getText |> Html.map GetTextMsg
        , ParseJson.view model.parseJson |> Html.map ParseJsonMsg
        , h2 [] [ text "List" ]
        , ul []
            (model.list |> List.map (\x -> ( x, li [] [ text x ] )))
        ]
