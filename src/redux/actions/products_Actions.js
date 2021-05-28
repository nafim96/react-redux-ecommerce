import { ActionTypes } from '../constants/action_types'

const setProducts = products => {
    return ({
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    })
}

const detailProduct = product => {
    return ({
        type: ActionTypes.DETAIL_PRODUCT,
        payload: product
    })
}

const removeDetailProduct = () => {
    return ({
        type: ActionTypes.REMOVE_DETAIL_PRODUCT
    })
}

export { setProducts, detailProduct, removeDetailProduct }