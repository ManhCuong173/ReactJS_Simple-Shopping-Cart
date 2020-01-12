import React, { Component } from 'react';

class Product extends Component {

  addToCart = () => {
    this.props.addToCart(this.props.item)
  }

  render() {
    let starRatingArr = [];
    for(let index = 0; index < 5; index++) {
      if(index < this.props.item.rating) starRatingArr.push(<li  key = { index } ><i className='fa fa-star'></i></li>)   
      else  starRatingArr.push(<li key = { index }><i className='fa fa-star-o'></i></li>)   
    }
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
              className="img-fluid" alt={ this.props.item.name } />
            <a>
              <div className="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{ this.props.item.name }</a>
              </strong>
            </h4>
            <ul className="rating">
              { starRatingArr }
            </ul>
            <p className="card-text">
              { this.props.item.description } 
            </p>
            <div className="card-footer">
              <span className="left"> { this.props.item.price } $</span>
              <span className="right">
                <a 
                className="btn-floating blue-gradient" 
                data-original-title="Add to Cart"
                onClick = { this.addToCart }
                >
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
