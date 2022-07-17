import { combineReducers } from "redux"
import { getProductReducer } from "../reducers/getProductReducer"
import { calcReducer } from "../reducers/calcReducer"
import { createProductReducer } from "../reducers/createProductReducer";
import { hitsProductReducer } from "../reducers/hitsReducers";
import {favoriteReducer} from '../favoriteReducer'
const {userReducer} = require("../reducers/loginReducer");


export const rootReducer = combineReducers({
    basket: getProductReducer,
    count: calcReducer,
    products: createProductReducer,
    hitsProduct: hitsProductReducer,
    favoriteReducer,
    userReducer
})