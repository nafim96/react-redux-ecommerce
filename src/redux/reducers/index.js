import { combineReducers } from 'redux'
import { detailProductReducer, productsReducer, userReducer } from './products_reducers'

const reducers = combineReducers({
    totalProducts: productsReducer,
    singleProduct: detailProductReducer,
    user: userReducer
})

export default reducers