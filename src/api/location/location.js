import client from '@api/client';
import {
    API_BASE_URL
} from '@constants/api';

class ApiLocation {
    static GetWard(district) {
        return client.get(API_BASE_URL + "/api/location/get-ward?districtid="+district);
    }

    static GetDistrict(province) {
        return client.get(API_BASE_URL + "/api/location/get-district?provinceid="+province);
    }

    static GetProvince() {
        return client.get(API_BASE_URL + "/api/location/get-province");
    }
}

export default ApiLocation;