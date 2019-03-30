import client from '@api/client';
import {
    API_ADMIN_URL
} from '@constants/api';

class ApiAuth {
    static Login(body) {
        return client.post(API_ADMIN_URL + "/api/login",body);
    }

    static Logout(jwt){
        var config = {
            headers: {'Authorization': "Bearer " + jwt}
        };
        return client.post(API_ADMIN_URL + "/api/logout",{},config);
    }

    static CheckLogin(jwt){
        var config = {
            headers: {'Authorization': "Bearer " + jwt}
        };
        return client.get(API_ADMIN_URL + "/api/check-login",config);
    }
}

export default ApiAuth;