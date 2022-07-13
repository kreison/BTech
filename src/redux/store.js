import { createProductReducer } from "./reducers/createProductReducer";
import { hitsProductReducer } from "./reducers/hitsReducers";
const { combineReducers } = require("redux");



export const rootReducer = combineReducers({
    products: createProductReducer,
    hitsProduct: hitsProductReducer
})