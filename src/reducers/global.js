import * as constAction from '@constants/action';

const initState ={
    s_modal:false,
    loadingScreen:false,
    province:[
        {key:"",label:"Chọn tỉnh/thành"}
    ]
};

export const global = (state = initState, action)  => {
    
    switch(action.type) {

        case constAction.MODAL_OPEN:
            return Object.assign({}, state, {...state,s_modal: !(state.s_modal)});
        case constAction.LOADING_SCREEN:
            return Object.assign({}, state, {...state,loadingScreen: !(state.loadingScreen)});
        case constAction.SET_PROVINCE:
            return Object.assign({}, state, {...state,province: action.payload.province});
        default:
			return state;
    }
};