import { all, call, put, takeLatest,select } from 'redux-saga/effects';
import { AsyncStorage } from "react-native";
import * as constAction from '@constants/action';
import * as constApi from '@constants/api';
import { actSetUser } from '@reducers/actions/auth';
import { actError } from '@reducers/actions/error';
import { actLoadingScreen } from '@reducers/actions/global';
import { apiLogin, apiCheckLogin, apiLogout } from '@api/auth';
import NavigationService from '@navigator/NavigationService';

export function* authRoot() {
    yield all([
        takeLatest(constAction.LOGIN, login),
        takeLatest(constAction.LOGOUT, logout),
        takeLatest(constAction.TOKEN_EXPIRE, tokenExpire),
        takeLatest(constAction.CHECK_LOGIN, checkLogin),
    ]);
}

export function* checkLogin(action) {
    // yield call(async function(){
    //     await AsyncStorage.removeItem('user');
    // });
    const payload = action.payload;
    const callback = payload.callback;
    try {
        const user = yield call(async function () {
            // await AsyncStorage.removeItem('cart');
            var user = await AsyncStorage.getItem('user');
            if (user != null) {
                return JSON.parse(user);
            } else
                return null;
        });

        console.log(user)
        if (user != null) {
            const resp = yield call(apiCheckLogin, user.access_token );

            if (resp.status == constApi.API_SUCCESS) {
                yield put(actSetUser({"access_token":user.access_token}));
                callback(1);
            }else{
                yield call(async function () {
                    await AsyncStorage.removeItem('user');
                });
                yield put(actSetUser({
                    access_token: ""
                }));
                callback(0);
            }
        }else{
            callback(0);
        }
        
    } catch (error) {
        // console.log(error);
        if (error.response != undefined) {

        } else {
            yield put(actError(constAction.ERROR_CONNECTION));
        }
        callback(0);
    }
}

export function* tokenExpire(){
    yield put(actSetUser({
        access_token: ""
    }));

    yield call(async function () {
        await AsyncStorage.removeItem('user');
    });

    NavigationService.navigate('Gateway',null,true);

}

export function* logout(action) {
    const callback = action.payload.callback;
    const user = (yield select((state) => state.auth)).user;

    yield put(actLoadingScreen());
    try {
        const jwt = user.access_token;
        const resp = yield call(apiLogout, jwt);

        if (resp.status == constApi.API_SUCCESS) {
            yield put(actSetUser({
                access_token: ""
            }));

            yield call(async function () {
                await AsyncStorage.removeItem('user');
            });
            callback(1);
        }
        
    } catch (error) {
        console.log(error);
        if (error.response != undefined) {

        } else {
            
            yield put(actError(constAction.ERROR_CONNECTION));
        }
    } finally {
        yield put(actLoadingScreen());
    }
}

export function* login(action) {
    const data = action.payload.data;
    const callback = action.payload.callback;

    yield put(actLoadingScreen());
    try {
        const resp = yield call(apiLogin, data);

        // console.log(resp);
        if (resp.status == constApi.API_SUCCESS) {
            yield put(actSetUser({"access_token":resp.data.access_token}));
            yield call(async function () {
                return await AsyncStorage.setItem('user', JSON.stringify({"access_token":resp.data.access_token}));
            });
        }

        callback(1);
    } catch (error) {
        console.log(error);
        if (error.response != undefined) {
            const data = error.response.data;
            // console.log(data);
            yield put(actError(data.message));
        } else {
            console.log(error);
            yield put(actError(constAction.ERROR_CONNECTION));
        }
    } finally {
        yield put(actLoadingScreen());
    }
}