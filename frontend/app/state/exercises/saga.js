import {call, put, select, takeLatest} from 'redux-saga/effects';
import {API, postRequest} from "../../utils/request";
import {addExerciseFail, addExerciseSuccess, getExercisesByUserIdFail, getExercisesByUserIdSuccess} from "./actions";

export function* addExercise(action) {
    const requestURL = `${API}/exercises/add`;
    try {
        const response = yield call(postRequest, requestURL, action.payload.exercise, action.payload.token);
        yield put(addExerciseSuccess())
    } catch (err) {
        yield put(addExerciseFail(err))
    }
}

export function* getExercisesByUserId(action) {
    const requestURL = `${API}/exercises`;
    try {
        const exercises = yield call(postRequest, requestURL, action.payload.userId, action.payload.token);
        yield put(getExercisesByUserIdSuccess(exercises))
    } catch (err) {
        yield put(getExercisesByUserIdFail(err))
    }
}