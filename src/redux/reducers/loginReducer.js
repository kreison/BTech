


const initialState = {
    email: "",
    password: "",
}

export const userReducer = (state = initialState, action)=>{
    switch (action.type){
        case "USER" :
            return {...state, email: action.payload}
        case "USERS" :
            return {...state, password: action.payload}
        default :
            return state
    }
}
