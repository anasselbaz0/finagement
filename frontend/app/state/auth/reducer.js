import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    OPEN_LOGIN,
    OPEN_SIGNUP, RESET_FORMS,
    SET_LOGIN_PASSWORD,
    SET_LOGIN_USERNAME,
    SET_SIGNUP_EMAIL,
    SET_SIGNUP_PASSWORD,
    SET_SIGNUP_PASSWORD_CONFIRMATION,
    SET_SIGNUP_USERNAME, SIGNUP_FAIL, SIGNUP_SUCCESS,
    TRY_LOGIN, TRY_SIGNUP
} from "./actions";

export const initialState = {
    loginOpened: true,
    signUpOpened: false,
    login: {
        username: '',
        password: '',
        loading: false,
        success: false,
        fail: false,
    },
    signUp: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        loading: false,
        success: false,
        fail: false,
    },
    loggedIn: false,
    user: {},
    token: '',
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
        case SET_LOGIN_USERNAME: {
            return {
                ...state,
                login: {
                    ...state.login,
                    username: action.payload
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
        case SET_SIGNUP_USERNAME: {
            return {
                ...state,
                signUp: {
                    ...state.signUp,
                    username: action.payload
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
                    loading: false,
                    success: true,
                },
                loggedIn: true,
                user: action.payload.user,
                token: action.payload.token,
            };
        }
        case LOGIN_FAIL: {
            return {
                ...state,
                login: {
                    ...state.login,
                    loading: false,
                    fail: true,
                },
            };
        }


        // ******************** SIGNUP *********************

        case TRY_SIGNUP: {
            return {
                ...state,
                signUp: {
                    ...state.signUp,
                    loading: true,
                },
            };
        }
        case SIGNUP_SUCCESS: {
            return {
                ...state,
                signUp: {
                    ...state.signUp,
                    loading: false,
                    success: true,
                },
            };
        }
        case SIGNUP_FAIL: {
            return {
                ...state,
                signUp: {
                    ...state.signUp,
                    loading: false,
                    fail: true
                },
            };
        }
        case RESET_FORMS: {
            return {
                ...state,
                signUp: {
                    ...initialState.signUp
                },
                login: {
                    ...initialState.login
                },
            };
        }
        default:
            return state;
    }
}
