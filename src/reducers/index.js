import { combineReducers } from 'redux';
import { global } from '@reducers/global';
import { auth } from '@reducers/auth';
import { error } from '@reducers/error';

const rootReducer = combineReducers({
    global,
    auth,
    error
});

export default rootReducer;