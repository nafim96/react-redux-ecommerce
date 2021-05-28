import { combineReducers } from 'redux'
import { detailProductReducer, productsReducer } from './products_reducers'

const reducers = combineReducers({
    totalProducts: productsReducer,
    singleProduct: detailProductReducer
})

export default reducers