import React, { Component } from 'react';
import Cart from './../components/cart'
import CartItem from './../components/cartitem';
import CartResult from './../components/cartresult';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import * as types from './../constants/Messages'
import {  action_thunk_Cart_Remove, action_cart_Modify_Amount_Item_In_Cart } from './../actions/index'

class CartContainer extends Component {

  showCartItem = (cart) => {
    let result = null;
    let { removeItem, modifyAmountItem } = this.props;
    if(cart.length > 0) result = cart.map((item, index) => {
      return <CartItem
              key = { index }
              item  = { item }
              index = { index }
              subtotal = { item.price * item.quantity }
              removeItem = { removeItem }
              modifyAmountItem = { modifyAmountItem }
              />
    })
    else result = <tr><td> { types.MSG_CART_EMPTY }</td></tr>
    return result;
  }

  showCartResult = (cart) => {
    let result = 0;
    if(cart.length > 0) {
      cart.forEach((element, index) => {
        result += element.price*element.quantity;
      });
    } 
    return <CartResult result = { result } />
  }

  render() {
    let { cart } = this.props
    return (
      <Cart> 
        { this.showCartItem(cart) }
        { this.showCartResult(cart) }
      </Cart>
    );
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
      })
    })
  ),
  showCartItem: PropTypes.func.isRequired,
  showCartResult: PropTypes.func.isRequired,
}



const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    removeItem: (item) => dispatch(action_thunk_Cart_Remove(item)),
    modifyAmountItem: (item, specify) => dispatch(action_cart_Modify_Amount_Item_In_Cart(item, specify))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
