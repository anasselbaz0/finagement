import {
    ADD_EXERCISE,
    ADD_EXERCISE_FAIL,
    ADD_EXERCISE_SUCCESS,
    GET_EXERCISES_BY_USER_ID, GET_EXERCISES_BY_USER_ID_FAIL,
    GET_EXERCISES_BY_USER_ID_SUCCESS
} from "./actions";

export const initialState = {
    loading: false,
    exercises: [],
    error: '',
};

export default function exercisesReducer(state = initialState, action) {
    switch (action.type) {
        // ************************ Add exercise ************************
        case ADD_EXERCISE: {
            return {
                ...state,
                loading: true,
            };
        }
        case ADD_EXERCISE_SUCCESS: {
            return {
                ...state,
                loading: false,
            };
        }
        case ADD_EXERCISE_FAIL: {
            return {
                ...state,
                loading: false,
            };
        }
        // ************************ Get exercises by user id ************************
        case GET_EXERCISES_BY_USER_ID: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_EXERCISES_BY_USER_ID_SUCCESS: {
            return {
                ...state,
                loading: false,
                exercises: action.payload,
            };
        }
        case GET_EXERCISES_BY_USER_ID_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        default:
            return state;
    }
}
