import { types } from "../types";
const initialState = {
    product: []
}

export const hitsProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.HITS_PRODUCT:
            return { ...state, product: action.payload }

        default:
            return state;
    }
}