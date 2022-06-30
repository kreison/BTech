import { createProductReducer } from "./reducers/createProductReducer";
const { combineReducers } = require("redux");



export const rootReducer = combineReducers({
    products: createProductReducer
})