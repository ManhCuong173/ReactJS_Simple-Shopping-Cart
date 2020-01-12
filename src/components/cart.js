import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cartItem = this.props.children[0];
    let cartResult = this.props.children[1];
    return (
      <section className="section">
        <div className="table-responsive">
          <table className="table product-table">
            <thead>
              <tr>
                <th></th>
                <th>Sản Phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng Cộng</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItem}
              {cartResult}
            </tbody>
          </table>
        </div>
      </section>
    );

  }

}

export default Cart;
