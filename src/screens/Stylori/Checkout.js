import React, { Component } from "react";
import Chckoutindex from "../Checkout";

import { ProductDetailProvider } from "context";
export default class Checkout extends Component {
  componentDidMount() {
    localStorage.setItem("navfblogin", false);
  }

  render() {
    return (
      <div>
        <ProductDetailProvider>
          <Chckoutindex />
        </ProductDetailProvider>
      </div>
    );
  }
}
