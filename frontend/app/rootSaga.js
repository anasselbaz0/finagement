import {takeLatest} from "redux-saga/effects";
import {TRY_LOGIN} from "./state/auth/actions";
import {login} from "./state/auth/saga";


export default function* rootSaga() {
    yield takeLatest(TRY_LOGIN, login);
}
