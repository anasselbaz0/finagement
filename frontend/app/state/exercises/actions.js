export const ADD_EXERCISE = 'ADD_EXERCISE';
export const ADD_EXERCISE_SUCCESS = 'ADD_EXERCISE_SUCCESS';
export const ADD_EXERCISE_FAIL = 'ADD_EXERCISE_FAIL';

export const GET_EXERCISES_BY_USER_ID = 'GET_EXERCISES_BY_USER_ID';
export const GET_EXERCISES_BY_USER_ID_SUCCESS = 'GET_EXERCISES_BY_USER_ID_SUCCESS';
export const GET_EXERCISES_BY_USER_ID_FAIL = 'GET_EXERCISES_BY_USER_ID_FAIL';

export function addExercise(exercise, userId, token) {
    return {
        type: ADD_EXERCISE,
        payload: {
            exercise,
            token,
            userId
        },
    }
}
export function addExerciseSuccess() {
    return {
        type: ADD_EXERCISE_SUCCESS,
    }
}
export function addExerciseFail(err) {
    return {
        type: ADD_EXERCISE_FAIL,
        payload: err,
    }
}

export function getExercisesByUserId(userId, token) {
    return {
        type: GET_EXERCISES_BY_USER_ID,
        payload: {
            token,
            userId
        },
    }
}
export function getExercisesByUserIdSuccess(exercises) {
    return {
        type: GET_EXERCISES_BY_USER_ID_SUCCESS,
        payload: exercises,
    }
}
export function getExercisesByUserIdFail(err) {
    return {
        type: GET_EXERCISES_BY_USER_ID_FAIL,
        payload: err,
    }
}