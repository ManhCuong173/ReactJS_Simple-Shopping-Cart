import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/products';
import Product from '../components/product'
import PropTypes from 'prop-types'
import {  action_thunk_Cart_Add_And_Update } from './../actions/index'


class ProductsContainer extends Component {

  render() {
    let products  = this.props.products.map((element, index) => {
      return <Product
              key = { index }
              item = { element}
              addToCart = { this.props.addToCart }
            />
    })
    return (
      <Products>
        { products }
      </Products>
    );
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired
}

ProductsContainer.defaultProps = {
  products: []
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(action_thunk_Cart_Add_And_Update(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
