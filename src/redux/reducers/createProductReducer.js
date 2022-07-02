import { dataProduct } from "../../data/productData/ProductData";
import { types } from "../types";

const initialState = {
    products: dataProduct
}

export const createProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_PRODUCT:
            return { ...state, products: [...state.products, action.payload] }

        default:
            return state;
    }
}