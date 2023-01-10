import { Button, Hidden } from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router";
import "../product-image-slider/product-images.css";
// var valus = localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")).products[0].sku_id : ""
// let path = window.location.pathname.split('/').pop();
// const path = window.location.pathname !== "cart" || window.location.pathname!== "checkout"
class Buynowbutton extends React.Component {
  constructor(props) {
    super();
    this.state = {
      vals: 0,
    };
  }

  valus = (props) => {
    var valus_locl = localStorage.getItem("cartDetails")
      ? JSON.parse(localStorage.getItem("cartDetails")).products
      : "";

    // return valus_locl && valus_locl.map(val => {
    //     const vlx = this.props && this.props.sku
    //     if (vlx === val.sku_id) {
    //         vals = 1
    //         return vals
    //     } else {
    //         vals = 0
    //         return vals
    //     }

    // })
    if (valus_locl) {
      let productIds = valus_locl.map((val) => {
        return val.sku_id;
      });
      productIds.indexOf(props.sku) > -1
        ? this.setState({ vals: 1 })
        : this.setState({ vals: 0 });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.sku !== this.props.sku) this.valus(this.props);
  }
  componentDidMount() {
    this.valus(this.props);
  }

  render() {
    let productIsActive = this.props.productIsActive ?? "";
    const enquireLink = () => {
      if (!productIsActive) {
        if (this.props?.productURL) {
          window.open(
            `https://wa.me/919952625252?text=Hi - ${
              window.location.hostname + "/" + this.props.productURL ?? ""
            }`
          );
        } else {
          window.open(
            `https://wa.me/919952625252?text=Hi - ${window.location.href}`
          );
        }
      }
    };
    return (
      <div>
        <Button
          className={this.props.class}
          style={{ borderRadius: "5px", ...this.props.style }}
        >
          {window.location.pathname.split("/").pop() !== "cart" &&
          window.location.pathname.split("/").pop() !== "checkout" &&
          this.state.vals === 1 ? (
            <>
              {!this.props.withoutBag && productIsActive && (
                <i class="fa fa-shopping-bag buynow-icon"></i>
              )}
              {this.props.addtoCartToBuyNow ? (
                <>
                  <Hidden smDown>
                    <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                      {" "}
                      In Cart!
                    </span>
                  </Hidden>
                  <Hidden mdUp>
                    <span style={{ fontWeight: "bold", fontSize: "14px" }}>
                      {" "}
                      In Cart!
                    </span>
                  </Hidden>
                </>
              ) : (
                <>
                  {productIsActive ? (
                    <>
                      <Hidden smDown>
                        <span
                          style={{
                            fontSize: "20px",
                            fontFamily: "notoSerif-regular",
                            fontWeight: "bold",
                          }}
                        >
                          {" "}
                          In bag!
                        </span>
                      </Hidden>
                      <Hidden mdUp>
                        <span
                          style={{
                            fontWeight: "bold",
                            fontFamily: "notoSerif-regular",
                            fontSize: "14px",
                          }}
                        >
                          {" "}
                          In bag!
                        </span>
                      </Hidden>
                    </>
                  ) : (
                    <span
                      className={this.props.button}
                      style={{ fontSize: "1rem" }}
                      onClick={enquireLink}
                    >
                      Enquire now
                    </span>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              {/* {!this.props.withoutBag && !this.props.isSilver && !this.props.smallScreen && <i class="fa fa-shopping-bag buynow-icon"></i>} */}
              {
                this.props.addtoCartToBuyNow ? (
                  <>
                    <Hidden smDown>
                      <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                        {" "}
                        &nbsp;Add&nbsp;to&nbsp;Cart&nbsp;
                      </span>
                      <i class={`fa fa-shopping-cart`}></i>
                    </Hidden>
                    <Hidden mdUp>
                      <i class={`fa fa-shopping-cart`}></i>
                      <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                        {" "}
                        &nbsp;Add&nbsp;to&nbsp;Cart&nbsp;
                      </span>
                    </Hidden>

                    <span
                      style={{
                        fontWeight: "bolder",
                        fontSize: "16px ",
                      }}
                    >
                      {" "}
                    </span>
                  </>
                ) : (
                  <>
                    {productIsActive ? (
                      <>
                        <Hidden smDown>
                          <span
                            className={this.props.button}
                            style={{
                              fontWeight: "bolder",
                              fontSize: "18px",
                            }}
                          >
                            <b>
                              {" "}
                              {this.props.cartpage
                                ? "Checkout Securely"
                                : "Buy Now"}
                            </b>
                          </span>
                        </Hidden>
                        <Hidden mdUp>
                          <span
                            className={this.props.button}
                            style={{
                              fontWeight: "bolder",
                              fontSize: "16px",
                            }}
                          >
                            <b>
                              {" "}
                              {this.props.cartpage
                                ? "Checkout Securely"
                                : "Buy Now"}
                            </b>
                          </span>
                        </Hidden>
                      </>
                    ) : (
                      <span
                        className={this.props.button}
                        style={{ fontSize: "1rem" }}
                        // onClick={() => window.open("https://wa.me/919952625252?text=Hi")}
                        // href="https://wa.me/919952625252?text=Hi"
                        onClick={enquireLink}
                      >
                        Enquire now
                      </span>
                    )}
                  </>
                )
                // (
                //   <span className={this.props.button}>{productIsActive ? "Buy Now" : "Enquire now"}</span>
                // )
              }
            </>
          )}
        </Button>
      </div>
    );
  }
}
export default withRouter(Buynowbutton);
