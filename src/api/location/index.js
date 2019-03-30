import ApiLocation from './location';

export const apiGetWard = (district) => {
    return ApiLocation.GetWard(district).then(res => res.data);
};

export const apiGetDistrict = (province) => {
    return ApiLocation.GetDistrict(province).then(res => res.data);
};

export const apiGetProvince = () => {
    return ApiLocation.GetProvince().then(res => res.data);
};