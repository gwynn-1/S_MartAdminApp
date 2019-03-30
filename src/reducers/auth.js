import * as constAction from '@constants/action';

const initState = {
    user:{}
}

export const auth = (state = initState, action)  => {
    switch(action.type) {
        case constAction.USER_LOGIN:
            return loadLoginUser(action, state);
        // case constAction.ERROR_LOGIN:
        //     return loadLoginError(action, state);
        // case constAction.ERROR_SIGNUP:
        //     return loadSignupError(action, state);
        default:
			return state;
    }
};

const loadLoginUser = (action, state) => {
    // console.log(action.payload);
    return Object.assign({}, state, {
        user: action.payload.user
    });
}
