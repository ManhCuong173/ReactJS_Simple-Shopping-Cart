import * as types from './../constants/ActionTypes'
let data = JSON.parse(localStorage.getItem('PRODUCTS')).default;
let initialState = data ? data : [];


const products = (state = initialState, action) => {
  switch (action.type) {
    default: return [...state]; 
  }
}

export default products