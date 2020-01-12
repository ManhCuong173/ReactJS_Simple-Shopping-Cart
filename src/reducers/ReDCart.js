import * as types from './../constants/ActionTypes'
let data = JSON.parse(localStorage.getItem('CART'));
let initialState = data ? data : [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.CART_INITIAL_CART: return [...state];
    case types.CART_ADD_TO_CART:
      state.push(action.item);
      return [...state]
    case types.CART_UPDATE_CURRENT_ITEM:
      state.forEach(elem => {
        if(elem.id === action.item.id ) elem.quantity = action.item.quantity
      }); 
      return [...state]
    case types.CART_REMOVE_ITEM:
      state.splice(action.index, 1);
      return [...state];
    case types.CART_SPECIFY_AMOUNT_ITEM:
      state.forEach(element => {
        if(element.id === action.item.id) {
          if(action.specify === 'Up') ++element.quantity;
          else {
            --element.quantity; 
            if(element.quantity < 0 ) element.quantity = 0
          }
        }
      });
      return [...state]
    default: return [...state]; 
  }
}

export default cart