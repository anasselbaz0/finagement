import {takeLatest} from "redux-saga/effects";
import {TRY_LOGIN, TRY_SIGNUP} from "./state/auth/actions";
import {login, signUp} from "./state/auth/saga";
import {ADD_EXERCISE} from "./state/exercises/actions";
import {addExercise} from "./state/exercises/saga";


export default function* rootSaga() {
    yield takeLatest(TRY_LOGIN, login);
    yield takeLatest(TRY_SIGNUP, signUp);
    yield takeLatest(ADD_EXERCISE, addExercise);
}
