


const initialState = {
    email: "",
    password: "",
}

export const userReducer = (state = initialState, action)=>{
    switch (action.type){
        case "USER" :
            console.log(action.payload);
            return {...state, email: action.payload.email, password: action.payload.password}
        
        default :
            return state
    }
}
