import React, { Component } from 'react';

class CartItem extends Component {
  constructor(props) {
    super(props)
  }

  removeItem(item) {
    let { removeItem } = this.props
    removeItem(item);
  }

  modifyAmountItem(item, specify) {
    let { modifyAmountItem } = this.props;
    modifyAmountItem(item, specify)
  }

  render() {
    let { item } = this.props;
    return (
      <tr>
        <th scope="row">
          <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
            alt={ item.name } className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong> { item.name } </strong>
          </h5>
        </td>
        <td> { item.price }$</td>
        <td className="center-on-small-only">
          <span className="qty">{ item.quantity } </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick = { () => this.modifyAmountItem(item, 'Down') }>
              <a>—</a>
            </label>
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick = { () => this.modifyAmountItem(item, 'Up') }>
              <a>+</a>
            </label>
          </div>
        </td>
        <td> { this.props.subtotal } $</td>
        <td>
          <button type="button" className="btn btn-sm btn-primary " onClick = { () => this.removeItem(item) }>
            X
          </button>
        </td>
      </tr>
    );
  }

}

export default CartItem;
