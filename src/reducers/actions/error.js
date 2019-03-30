import * as constAction from '@constants/action';

export const actError = (error_type=null)=>{
    switch(error_type){
        case constAction.ERROR_CONNECTION : 
            return {type:constAction.ERROR_CONNECTION};
        case constAction.LOGIN_WRONG_PASSWORD:
            return {type:constAction.LOGIN_WRONG_PASSWORD};
        case constAction.LOGIN_USER_NOT_EXIST:
            return {type:constAction.LOGIN_USER_NOT_EXIST};
        case constAction.LOGIN_USER_EXISTED:
            return {type:constAction.LOGIN_USER_EXISTED};
        case constAction.INACTIVE_USER:
            return {type:constAction.INACTIVE_USER};
        case null:
        default:
            return {type:constAction.REMOVE_ERROR};
    }
}