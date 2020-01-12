import  React, {Component } from 'react';
import Product from './product'
import { render } from '@testing-library/react';

class Products extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let products = this.props.children;

    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          { products }
        </div>
      </section>
    );
  }
}


export default Products;
