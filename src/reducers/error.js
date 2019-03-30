import * as constAction from '@constants/action';

const initState = {
    error: false,
    message: ""
};

export const error = (state = initState, action) => {

    switch (action.type) {

        case constAction.ERROR_CONNECTION:
            return Object.assign({}, state, {
                error: true,
                message: "Không thể kết nối mạng. Xin hãy thử lại"
            });
        case constAction.LOGIN_WRONG_PASSWORD:
            return Object.assign({}, state, {
                error: true,
                message: "Bạn đã nhập sai mật khẩu. Xin hãy thử lại"
            });
        case constAction.LOGIN_USER_NOT_EXIST:

            return Object.assign({}, state, {
                error: true,
                message: "Tài khoản không tồn tại. Xin hãy thử lại"
            });
        case constAction.LOGIN_USER_EXISTED:
            return Object.assign({}, state, {
                error: true,
                message: "Thông tin tài khoản đã tồn tại."
            });
        case constAction.INACTIVE_USER:
            return Object.assign({}, state, {
                error: true,
                message: "Tài khoản chưa được kích hoạt"
            });
        case constAction.REMOVE_ERROR:
            return Object.assign({}, state, {
                error: false,
                message: ""
            });
        default:
            return state;
    }
};