import { call, put, select, takeLatest } from 'redux-saga/effects';
import {loginFail, loginSuccess, signUpFail, signUpSuccess, TRY_LOGIN} from "./actions";
import {API, postRequest} from "../../utils/request";


// ************************** LOGIN **************************

export function* login(action) {
  const requestURL = `http://localhost:8080/auth/signin`;
  try {
    const user = yield call(postRequest, requestURL, action.payload);
    yield put(loginSuccess(user));
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