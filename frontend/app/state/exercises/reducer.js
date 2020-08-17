import {ADD_EXERCISE, ADD_EXERCISE_FAIL, ADD_EXERCISE_SUCCESS} from "./actions";

export const initialState = {
    loading: false,
};

export default function exercisesReducer(state = initialState, action) {
    switch (action.type) {
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
        default:
            return state;
    }
}
