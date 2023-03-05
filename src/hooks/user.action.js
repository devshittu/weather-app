import { LS_PARAMS_USER_LOGIN_STATUS } from "../helpers/constants";

export function getData(){
    const data = localStorage.getItem(LS_PARAMS_USER_LOGIN_STATUS);
    return (data !== null) ? JSON.parse(data) : null;
}

export function removeData(){
    localStorage.removeItem(LS_PARAMS_USER_LOGIN_STATUS)
}

export function setData(data){

    localStorage.setItem(
        LS_PARAMS_USER_LOGIN_STATUS,
        JSON.stringify(!!data)
    );
}
