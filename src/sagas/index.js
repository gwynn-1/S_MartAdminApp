import { fork, all } from 'redux-saga/effects';
import { authRoot } from '@sagas/auth';
import { globalRoot } from '@sagas/global';

function* rootSaga() {
    
    yield all([
        yield fork(authRoot),
        yield fork(globalRoot),
    ]);
}

export default rootSaga;