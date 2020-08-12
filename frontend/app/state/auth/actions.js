/**
 UI
 **/

export const OPEN_LOGIN = 'OPEN_LOGIN';
export const OPEN_SIGNUP = 'OPEN_SIGNUP';
export const SET_LOGIN_USERNAME = 'SET_LOGIN_EMAIL';
export const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';
export const SET_SIGNUP_EMAIL = 'SET_SIGNUP_EMAIL';
export const SET_SIGNUP_PASSWORD = 'SET_SIGNUP_PASSWORD';
export const SET_SIGNUP_USERNAME = 'SET_SIGNUP_EMAIL_CONFIRMATION';
export const SET_SIGNUP_PASSWORD_CONFIRMATION = 'SET_SIGNUP_PASSWORD_CONFIRMATION';
export const RESET_FORMS = 'RESET_FORMS';

export function openLogin() {
    return {
        type: OPEN_LOGIN,
    }
}

export function openSignUp() {
    return {
        type: OPEN_SIGNUP,
    }
}

export function setLoginUsername(username) {
    return {
        type: SET_LOGIN_USERNAME,
        payload: username,
    }
}

export function setLoginPassword(password) {
    return {
        type: SET_LOGIN_PASSWORD,
        payload: password,
    }
}



export function setSignUpEmail(email) {
    return {
        type: SET_SIGNUP_EMAIL,
        payload: email,
    }
}

export function setSignUpPassword(password) {
    return {
        type: SET_SIGNUP_PASSWORD,
        payload: password,
    }
}

export function setSignUpUsername(username) {
    return {
        type: SET_SIGNUP_USERNAME,
        payload: username,
    }
}

export function setSignUpPasswordConfirmation(password) {
    return {
        type: SET_SIGNUP_PASSWORD_CONFIRMATION,
        payload: password,
    }
}


/**
 Authentication
 **/

export const TRY_LOGIN = 'TRY_LOGIN';
export const TRY_SIGNUP = 'TRY_SIGNUP';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export function tryLogin(username, password) {
    return {
        type: TRY_LOGIN,
        payload: {
            username,
            password
        },
    }
}

export function loginSuccess(user, token) {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            user,
            token
        }
    }
}

export function loginFail() {
    return {
        type: LOGIN_FAIL,
    }
}




export function trySignUp(signUpRequest) {
    return {
        type: TRY_SIGNUP,
        payload: signUpRequest,
    }
}

export function signUpSuccess() {
    return {
        type: SIGNUP_SUCCESS,
    }
}

export function signUpFail() {
    return {
        type: SIGNUP_FAIL,
    }
}



export function resetForms() {
    return {
        type: RESET_FORMS,
    }
}