import * as types from './../constants/Messages'
let initialState = types.MSG_WELCOME


const products = (state = initialState, action) => {
  switch (action.type) {
    case types.MSG_WELCOME: return action.text
    case types.MSG_ADD_TO_CART_SUCCESS: return action.text
    case types.MSG_UPDATE_CART_SUCCESS: return action.text
    case types.MSG_DELETE_PRODUCT_IN_CART_SUCCESS: return action.text
    default: return [...state]; 
  }
}

export default products