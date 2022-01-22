import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { schoolyearReducer } from './schoolyearReducer';

export const rootReducer = combineReducers({
    user: userReducer,
    defYear: schoolyearReducer,
});