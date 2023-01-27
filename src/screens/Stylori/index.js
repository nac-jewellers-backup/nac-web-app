import React, { Component } from "react";
import { FilterOptionsProvider } from "context";
import ProductListing from "containers/ProductListing";
import { CartProvider } from "context";
import { ALLCDNPAGES } from "queries/cdnPages";
import { API_URL } from "../../config";
import CdnPages from "screens/CdnPages";

export default class Stylori extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cmspage: false,
      // window.location.pathname.split("-")[1]
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ALLCDNPAGES,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const dataRecieved = data.data.allCdns.nodes;
        const pages = dataRecieved?.map((val) => val.page);
        const isCdnPage = pages.includes(window.location.pathname.split("/")[1]);
        this.setState({
          ...this.state,
          cmspage: isCdnPage,
        });
      });
  }

  render() {
    // const fadeImages = [
    //   'https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg',
    //   'https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg',
    //   'https://assets-cdn.stylori.com/images/megamenu/ear-jacket.jpg'
    // ];

    // const dataCarousel = {
    //   dots: false,
    //   infinite: true,
    //   autoplay: true,
    //   speed: 1000,
    //   fade: true,
    //   arrows: false
    // }
    return this.state.cmspage ? (
      <CdnPages {...this.props} />
    ) : (
      <FilterOptionsProvider>
        <CartProvider>
          <ProductListing />
        </CartProvider>
      </FilterOptionsProvider>
    );
  }
}
