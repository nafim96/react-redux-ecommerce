import { ActionTypes } from "../constants/action_types"

const initial = {
    products: []
}

const productsReducer = (state = initial, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload }
        default:
            return state
    }
}

const detailProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.DETAIL_PRODUCT:
            return { ...state, product: payload }
        case ActionTypes.REMOVE_DETAIL_PRODUCT:
            return {}
        default:
            return state
    }
}

export { productsReducer, detailProductReducer }