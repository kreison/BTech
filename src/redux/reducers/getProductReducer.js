import { types } from "../types";

const initialState = {
    product: [],
    totalSumm: 0,
}

export const getProductReducer = (state = initialState, action) => {
    switch(action.type){
        case types.GET_PRODUCT_ACTION:
            return {...state, product: action.payload}
        case types.DELETE_PRODUCT_ACTION:
            return {...state, product: action.payload}
        case types.INCREASE_COUNT_ACTION:
            return {...state, product: action.payload}
        case types.GET_TOTALSUMM_ACTION:
            return {...state, totalSumm: action.payload}
        default:
            return state
    }
}