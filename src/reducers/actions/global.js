import * as constAction from '@constants/action';

export const actModal = ()=>{
    return {
        type:constAction.MODAL_OPEN
    };
}

export const actLoadingScreen = ()=>{
    return {
        type:constAction.LOADING_SCREEN
    };
}

export const actGetProvince = ()=>{
    return {
        type:constAction.GET_PROVINCE
    }
}

export const actSetProvince = (province)=>{
    return {
        type:constAction.SET_PROVINCE,
        payload:{
            province
        }
    }
}