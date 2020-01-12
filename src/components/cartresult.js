import React, { Component } from 'react';
import CartItem from './cartitem'

class CartResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { result } = this.props;
    return (
      <tr>
        <td colSpan="3"></td>
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong> {result} $</strong>
          </h4>
        </td>
        <td colSpan="3">
          <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
          <i className="fa fa-angle-right right"></i>
          </button>
        </td>
      </tr>
    );
  }

}

export default CartResult;
