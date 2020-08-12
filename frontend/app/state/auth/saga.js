import {call, put, select, takeLatest} from 'redux-saga/effects';
import {loginFail, loginSuccess, signUpFail, signUpSuccess, TRY_LOGIN} from "./actions";
import {API, postRequest} from "../../utils/request";
import {User} from "../../components/Auth/Model";


// ************************** LOGIN **************************

export function* login(action) {
    const requestURL = `${API}/auth/signin`;
    try {
        const response = yield call(postRequest, requestURL, action.payload);
        if (response.id) {
            const user = new User(
                response.id,
                response.username,
                response.email,
                response.roles
            );
            const token = `${response.tokenType} ${response.accessToken}`
            yield put(loginSuccess(user, token));
        } else {
            yield put(loginFail());
        }
    } catch (err) {
        yield put(loginFail());
    }
}


// ************************** SIGNUP **************************

export function* signUp(action) {
    const requestURL = `${API}/auth/signup`;
    try {
        yield call(postRequest, requestURL, action.payload);
        yield put(signUpSuccess());
    } catch (err) {
        yield put(signUpFail());
    }
}