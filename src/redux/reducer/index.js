import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import cart from './cart'

const reducer = {
    routing: routerReducer,
    cart
}
export default combineReducers(reducer);