module Main exposing (main)

import Browser exposing (sandbox)
import Html exposing (Html, button, div, form, h2, input, label, p, text)
import Html.Attributes exposing (for, id, placeholder, style, type_)
import Html.Events exposing (onClick, onInput)


main : Program () Model Msg
main =
    sandbox { init = init, update = update, view = view }


type alias Model =
    { count : Int
    , content : String
    , name : String
    , password : String
    , passwordAgain : String
    }


init : Model
init =
    { count = 0
    , content = ""
    , name = ""
    , password = ""
    , passwordAgain = ""
    }


type Msg
    = Increment
    | Decrement
    | Reset
    | Change String
    | Name String
    | Password String
    | PasswordAgain String


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

        Name name ->
            { model | name = name }

        Password password ->
            { model | password = password }

        PasswordAgain password ->
            { model | passwordAgain = password }


view : Model -> Html Msg
view model =
    div []
        [ h2 [] [ text "Counter" ]
        , p [] [ text <| String.fromInt model.count ]
        , button [ onClick Increment ] [ text "+" ]
        , button [ onClick Decrement ] [ text "-" ]
        , button [ onClick Reset ] [ text "reset" ]
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
