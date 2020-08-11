import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    OPEN_LOGIN,
    OPEN_SIGNUP,
    SET_LOGIN_EMAIL,
    SET_LOGIN_PASSWORD,
    SET_SIGNUP_EMAIL, SET_SIGNUP_EMAIL_CONFIRMATION,
    SET_SIGNUP_PASSWORD, SET_SIGNUP_PASSWORD_CONFIRMATION, TRY_LOGIN
} from "./actions";

const initialState = {
    loginOpened: true,
    signUpOpened: false,
    login: {
        email: '',
        password: '',
        loading: false,
    },
    signUp: {
        email: '',
        password: '',
        emailConfirmation: '',
        passwordConfirmation: '',
        loading: false,
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
                    ...state.signUp,
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
                    ...state.signUp,
                    passwordConfirmation: action.payload
                },
            };
        }
        case TRY_LOGIN: {
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: true,
                },
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                login: {
                    ...state.login,
                    loggedIn: true,
                    loading: false,
                },
            };
        }
        case LOGIN_FAIL: {
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: false,
                },
            };
        }
        default:
            return state;
    }
}
