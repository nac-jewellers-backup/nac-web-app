import React, { Component } from "react";
import ProductDetail from "containers/productDetail";
import { ProductDetailProvider } from "context";
import { withRouter } from "react-router-dom";
import { CartProvider } from "context";

class Stylori extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let productId = window.location.search.replace("?", "");        
    return (
      <>      
        <ProductDetailProvider productId={productId}>
          <CartProvider>
            <ProductDetail />
          </CartProvider>
        </ProductDetailProvider>
      </>
    );
  }
}
export default withRouter(Stylori);
