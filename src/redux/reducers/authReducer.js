import { UPDATE_AUTH } from "../types/auth"

const initialState = {
    isLoading: false,
    error: false,
    isVerify: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_AUTH:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}