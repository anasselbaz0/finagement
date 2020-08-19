export const ADD_EXERCISE = 'ADD_EXERCISE';
export const ADD_EXERCISE_SUCCESS = 'ADD_EXERCISE_SUCCESS';
export const ADD_EXERCISE_FAIL = 'ADD_EXERCISE_FAIL';


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
