/**
 UI
 **/

export const OPEN_LOGIN = 'OPEN_LOGIN';
export const OPEN_SIGNUP = 'OPEN_SIGNUP';
export const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL';
export const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';
export const SET_SIGNUP_EMAIL = 'SET_SIGNUP_EMAIL';
export const SET_SIGNUP_PASSWORD = 'SET_SIGNUP_PASSWORD';
export const SET_SIGNUP_EMAIL_CONFIRMATION = 'SET_SIGNUP_EMAIL_CONFIRMATION';
export const SET_SIGNUP_PASSWORD_CONFIRMATION = 'SET_SIGNUP_PASSWORD_CONFIRMATION';

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

export function setLoginEmail(email) {
    return {
        type: SET_LOGIN_EMAIL,
        payload: email,
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

export function setSignUpEmailConfirmation(email) {
    return {
        type: SET_SIGNUP_EMAIL_CONFIRMATION,
        payload: email,
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
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export function tryLogin(email, password) {
    return {
        type: TRY_LOGIN,
        payload: {
            email,
            password
        },
    }
}

export function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export function loginFail() {
    return {
        type: LOGIN_FAIL,
    }
}
