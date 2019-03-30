import { all, call, put, takeLatest,select } from 'redux-saga/effects';
import * as constAction from '@constants/action';
import * as constApi from '@constants/api';
import { apiGetProvince } from '@api/location';
import {actSetProvince} from '@reducers/actions/global';

export function* globalRoot() {
    yield all([
        takeLatest(constAction.GET_PROVINCE, getProvince),

    ]);
}

export function* getProvince(){
    try{
        const resp = yield call(apiGetProvince);
        if(resp.status == constApi.API_SUCCESS){
            var temp = [
                {key:"",label:"Chọn tỉnh/thành"}
            ];
            var arr_province = [...temp,...resp.data]

            yield put(actSetProvince(arr_province));
        }
    }catch(error){
        console.log(error);
    }
}