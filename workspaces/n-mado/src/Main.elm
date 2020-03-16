module Main exposing (main)

import Browser exposing (sandbox)
import Counter
import Html exposing (Html, div, form, h2, input, label, p, text)
import Html.Attributes exposing (for, id, placeholder, style, type_)
import Html.Events exposing (onInput)


main : Program () Model Msg
main =
    sandbox { init = init, update = update, view = view }


type alias Model =
    { counter : Counter.Model
    , content : String
    , name : String
    , password : String
    , passwordAgain : String
    }


init : Model
init =
    { counter = Counter.init
    , content = ""
    , name = ""
    , password = ""
    , passwordAgain = ""
    }


type Msg
    = CounterMsg Counter.Msg
    | Change String
    | Name String
    | Password String
    | PasswordAgain String


update : Msg -> Model -> Model
update msg model =
    case msg of
        CounterMsg counterMsg ->
            let
                newCounterModel =
                    Counter.update counterMsg model.counter
            in
            { model | counter = newCounterModel }

        Change newContent ->
            { model | content = newContent }

        Name name ->
            { model | name = name }

        Password password ->
            { model | password = password }

        PasswordAgain password ->
            { model | passwordAgain = password }


view : Model -> Html Msg
view model =
    div []
        [ Counter.view model.counter |> Html.map CounterMsg
        , h2 [] [ text "Text Reverser" ]
        , input [ onInput Change, placeholder "Text to reverse" ] []
        , p [] [ text <| "Result: " ++ String.reverse model.content ]
        , h2 [] [ text "Form" ]
        , form []
            [ viewInput NameForm
            , viewInput PasswordForm
            , viewInput PasswordAgainForm
            , viewValidation model
            ]
        ]


type FormKind
    = NameForm
    | PasswordForm
    | PasswordAgainForm


viewInput : FormKind -> Html Msg
viewInput formKind =
    case formKind of
        NameForm ->
            div []
                [ label [ for "name" ] [ text "Name" ]
                , input
                    [ id "name"
                    , type_ "text"
                    , onInput Name
                    ]
                    []
                ]

        PasswordForm ->
            div []
                [ label [ for "password" ] [ text "Password" ]
                , input
                    [ id "password"
                    , type_ "password"
                    , onInput Password
                    ]
                    []
                ]

        PasswordAgainForm ->
            div []
                [ label [ for "passwordAgain" ] [ text "Password (Again)" ]
                , input
                    [ id "passwordAgain"
                    , type_ "password"
                    , onInput PasswordAgain
                    ]
                    []
                ]


viewValidation : Model -> Html msg
viewValidation model =
    if model.passwordAgain /= "" then
        if model.password == model.passwordAgain then
            div [ style "color" "green" ] [ text "OK" ]

        else
            div [ style "color" "red" ] [ text "Passwords do not match!" ]

    else
        div [] []
