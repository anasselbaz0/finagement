import {call, put, select, takeLatest} from 'redux-saga/effects';
import {API, postRequest} from "../../utils/request";
import {addExerciseFail, addExerciseSuccess} from "./actions";

export function* addExercise(action) {
    const requestURL = `${API}/exercises/add`;
    try {
        const response = yield call(postRequest, requestURL, action.payload.exercise, action.payload.token);
        yield put(addExerciseSuccess())
    } catch (err) {
        yield put(addExerciseFail(err))
    }
}

