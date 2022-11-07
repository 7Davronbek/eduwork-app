import axios from "axios";
import { API_PATH, USER } from "../../tools/constants";
import { UPDATE_AUTH } from "../types/auth"


export const updateAuth = state => {
    return {
        type: UPDATE_AUTH,
        payload: state
    }
}

export const test = () => async (dispatch) => {
    try {
        console.log('Test');
    } catch (err) {
        console.log(err);
    }
}

export const REGISTER = (phone, username, password) => async dispatch => {
    try {
        await axios.post(API_PATH + '/accounts/register/', { phone, username, password })
            .then((res) => {
                console.log(res);
                dispatch(updateAuth({ isVerify: true }))
                // nav('/Verify', { replace: true })
            })
            .catch((err) => {
                console.log(err);
            })
    } catch (err) {
        console.log(err);
    }
}

export const REGISTERVERIFY = (phone, code, password) => async dispatch => {
    try {
        await axios.post(API_PATH + '/accounts/verify-register/', { phone, code, password })
            .then((res) => {
                console.log(res);
                dispatch(updateAuth({ isVerify: false }))
            })
            .catch((err) => {
                console.log(err);
            })
    } catch (err) {
        console.log(err);
    }
}