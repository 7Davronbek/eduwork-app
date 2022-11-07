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
    } catch(err) {
        console.log(err);
    }
}