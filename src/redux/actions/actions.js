import { types } from "../types"


export const createProductAction = (product) => {
    return {
        type: types.CREATE_PRODUCT,
        payload: product
    }
}