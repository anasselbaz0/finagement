import { call, put, select, takeLatest } from 'redux-saga/effects';
import {loginFail, loginSuccess, TRY_LOGIN} from "./actions";
import request from "../../utils/request";

export function* login(action) {
  console.log(33)
  const email = action.payload.email;
  const password = action.payload.password;
  const requestURL = `https://randomuser.me/api`;
  try {
    // Call our request helper (see 'utils/request')
    const user = yield call(request, requestURL);
    yield put(loginSuccess(user));
  } catch (err) {
    yield put(loginFail());
  }
}

