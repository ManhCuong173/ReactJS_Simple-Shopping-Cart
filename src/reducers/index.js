import { combineReducers } from 'redux'
import products from './ReDProduct'
import cart from './ReDCart'
import message from './ReDMessage'

let myReducers = combineReducers({
  products,
  cart,
  message
})

export default myReducers