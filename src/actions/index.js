import * as types from './../constants/ActionTypes'
import * as typesMessage from './../constants/Messages'
import * as data from './../initialData/data.json'
import { findIndex } from './../helpers/index';



export const action_cart_initial_cart = () => {
  return {
    type: types.CART_INITIAL_CART,
    text: typesMessage.MSG_CART_EMPTY,
    item: localStorage.setItem('PRODUCTS', JSON.stringify(data))
  }
}

export const action_cart_Add_To_Cart = (item) => {
  return {
    type: types.CART_ADD_TO_CART,
    item
  }
}

export const action_cart_Update_Current_Item = (item) => {
  return {
    type: types.CART_UPDATE_CURRENT_ITEM,
    item
  }
}

export const action_cart_Remove_Item = (index) => {
  return {
    type: types.CART_REMOVE_ITEM,
    index
  }
}

export const action_cart_Modify_Amount_Item_In_Cart = (item, specify) => {
  return {
    type: types.CART_SPECIFY_AMOUNT_ITEM,
    item,
    specify
  }
}


export const action_message_Welcome_To_Shop = () => {
  return {
    type: typesMessage.MSG_WELCOME,
    text: typesMessage.MSG_WELCOME
  }
}

export const action_message_Add_To_Cart = () => {
  return {
    type: typesMessage.MSG_ADD_TO_CART_SUCCESS,
    text: typesMessage.MSG_ADD_TO_CART_SUCCESS
  }
}

export const action_message_Update_Current_Item = () => {
  return {
    type: typesMessage.MSG_UPDATE_CART_SUCCESS,
    text: typesMessage.MSG_UPDATE_CART_SUCCESS
  }
}

export const action_message_Remove_Item = () => {
  return {
    type: typesMessage.MSG_DELETE_PRODUCT_IN_CART_SUCCESS,
    text: typesMessage.MSG_DELETE_PRODUCT_IN_CART_SUCCESS
  }
}

export const action_thunk_Cart_Add_And_Update = (item) => {
  return dispatch => {
    let data = JSON.parse(localStorage.getItem(
      'CART'
    )).default || JSON.parse(localStorage.getItem('CART')), isExisted = false;

    data.forEach((elem, index) => {
      if (elem.id === item.id) {
        elem.quantity += 1;
        isExisted = !isExisted;
        dispatch(action_cart_Update_Current_Item({id: elem.id, quantity: elem.quantity}));
        dispatch(action_message_Update_Current_Item());

        localStorage.setItem('CART', JSON.stringify(data));
        return;
      }
    });
    if (isExisted === false) {
      let copyItem = { ...item, quantity: 1 };
      data.push(copyItem);
      dispatch(action_cart_Add_To_Cart(copyItem));
      dispatch(action_message_Add_To_Cart());
      localStorage.setItem('CART', JSON.stringify(data));
    }
  }
}

export const action_thunk_Cart_Remove = (item) => {
  return dispatch => {
    let data = JSON.parse(localStorage.getItem(
      'CART'
    )).default || JSON.parse(localStorage.getItem('CART'));
    let index = findIndex(item, data);
    data.splice(index, 1);
    dispatch(action_cart_Remove_Item(index));
    dispatch(action_message_Remove_Item());
    localStorage.setItem('CART', JSON.stringify(data));
  }
}

export const action_thunk_Modify_Amount_Item = (item, specify) => {
  return dispatch => {
    let data = JSON.parse(localStorage.getItem(
      'CART'
    )).default || JSON.parse(localStorage.getItem('CART'));
    data.forEach(element => {
      if(element.id === item.id) {
        if(specify === 'Up') ++element.quantity;
        else --element.quantity; 
      }
    });
    localStorage.setItem('CART', JSON.stringify(data));
    dispatch(action_cart_Modify_Amount_Item_In_Cart(item, specify));
  }
}