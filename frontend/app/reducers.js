/**
 * Combine all reducers in this file and export the combined reducers.
 */

import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import history from 'utils/history';
import globalReducer from 'containers/App/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import authReducer from "./state/auth/reducer";
import exercisesReducer from "./state/exercises/reducer";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {
    auth: authReducer,
    exercises: exercisesReducer,
}) {
    const rootReducer = combineReducers({
        global: globalReducer,
        language: languageProviderReducer,
        router: connectRouter(history),
        ...injectedReducers,
    });

    return rootReducer;
}
