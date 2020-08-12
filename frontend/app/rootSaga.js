import {takeLatest} from "redux-saga/effects";
import {TRY_LOGIN, TRY_SIGNUP} from "./state/auth/actions";
import {login, signUp} from "./state/auth/saga";


export default function* rootSaga() {
    yield takeLatest(TRY_LOGIN, login);
    yield takeLatest(TRY_SIGNUP, signUp);
}
