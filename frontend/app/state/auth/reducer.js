import {
    OPEN_LOGIN,
    OPEN_SIGNUP,
    SET_LOGIN_EMAIL,
    SET_LOGIN_PASSWORD,
    SET_SIGNUP_EMAIL, SET_SIGNUP_EMAIL_CONFIRMATION,
    SET_SIGNUP_PASSWORD, SET_SIGNUP_PASSWORD_CONFIRMATION
} from "./actions";

const initialState = {
    loginOpened: true,
    signUpOpened: false,
    login: {
        email: '',
        password: '',
    },
    signUp: {
        email: '',
        password: '',
        emailConfirmation: '',
        passwordConfirmation: '',
    },
    loggedIn: false,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_LOGIN: {
            return {
                ...state,
                loginOpened: true,
                signUpOpened: false,
            };
        }
        case OPEN_SIGNUP: {
            return {
                ...state,
                loginOpened: false,
                signUpOpened: true,
            };
        }
        case SET_LOGIN_EMAIL: {
            return {
                ...state,
                login: {
                    ...state.login,
                    email: action.payload
                },
            };
        }
        case SET_LOGIN_PASSWORD: {
            return {
                ...state,
                login: {
                    ...state.login,
                    password: action.payload
                },
            };
        }
        case SET_SIGNUP_EMAIL: {
            return {
                ...state,
                signUp: {
                    ...state.signUp,
                    email: action.payload
                },
            };
        }
        case SET_SIGNUP_PASSWORD: {
            return {
                ...state,
                signUp: {
                    ...state.login,
                    password: action.payload
                },
            };
        }
        case SET_SIGNUP_EMAIL_CONFIRMATION: {
            return {
                ...state,
                signUp: {
                    ...state.signUp,
                    emailConfirmation: action.payload
                },
            };
        }
        case SET_SIGNUP_PASSWORD_CONFIRMATION: {
            return {
                ...state,
                signUp: {
                    ...state.login,
                    passwordConfirmation: action.payload
                },
            };
        }
        default:
            return state;
    }
}
