import { types } from "../types";

const initialState = {
    
}

export const calcReducer = (state = initialState, action) => {
    switch(action.type){
        case types.HANDLE_GOOD:
            return {...state, goods: [...action.payload]}
        default:
            return state
    }
}