import validate from "validate.js";

export default function validateForm(params,rule) {
    var result = validate(params,rule,{fullMessages : false});
    if(result){
        return result;
    }
    return false;
}