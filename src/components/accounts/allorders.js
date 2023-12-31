import {
  Button,
  Container,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Hidden,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { CDN_URL } from "config";
import moment from "moment";
import React from "react";
import ReactPixel from "react-facebook-pixel";
import { AiFillCaretLeft } from "react-icons/ai";
import { withRouter } from "react-router-dom";
import "../Checkout/Cart.css";
import Pricing from "../Pricing/index";
import "./accounts.css";
import CurrencyConversion from "utils/CurrencyConversion";
const width = window.innerWidth;
function myFunc(total, num) {
  return Math.round(total + num);
}
class Allorders extends React.Component {
  state = {
    expanded: [],
    check_img: null,
  };
  componentDidMount() {
    ReactPixel.init("1464338023867789", {}, { debug: true, autoConfig: false });
    ReactPixel.fbq("track", "PageView");
    window.location.href.includes("paymentsuccess") && ReactPixel.track("Purchase", {
      value:
        this.props?.allorderdata?.data?.allOrders?.nodes[0]
          ?.shoppingCartByCartId?.discountedPrice,
      currency: "INR",
    });
  }
  handleChange = (panel) => (event) => {
    const { expanded } = this.state;
    var valus = expanded === panel ? "" : panel;
    expanded.push(JSON.stringify(valus));
    this.setState({
      expanded,
    });
  };
  calculatesubtotal = (arr) => {
    var a;
    var dis_price;
    var b;
    var price;
    var _val =
      arr.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.filter(
        (val) => {
          if (val.transSkuListByProductSku) return val;
          return 0;
        }
      );
    if (_val.length > 0) {
      a = _val
        .filter((val) => {
          if (val.transSkuListByProductSku) return val;
          return 0;
        })
        .map((cart) => {
          if (
            (cart !== null || cart !== undefined) &&
            cart.transSkuListByProductSku
          ) {
            dis_price = cart.transSkuListByProductSku.markupPrice;
          }
          return dis_price;
        })
        .reduce(myFunc);
    }
    if (_val.length > 0) {
      b = _val
        .filter((val) => {
          if (val.transSkuListByProductSku) return val;
          return 0;
        })
        .map((cart) => {
          if (
            (cart !== null || cart !== undefined) &&
            cart.transSkuListByProductSku
          ) {
            price = cart.transSkuListByProductSku.discountPrice;
          }
          return price;
        })
        .reduce(myFunc);
    }

    return (
      <>
        <Grid
          container
          style={{
            overflow: "hidden",
            outline: "none",
            color: "gray",
            borderBottom: "1px solid #c1c1c1",
          }}
        >
          <Grid item xs={6}>
            <div>
              <Typography className="data1">SUBTOTAL</Typography>

              <Typography className="data1" style={{ marginTop: "6px" }}>
                DISCOUNT
              </Typography>
              <Typography className="data1">
                SHIPPING&nbsp;CHARGES (Standard)
              </Typography>
            </div>
            <br />
          </Grid>
          <Grid item xs={6}>
            <div>
              <Typography
                className="data1"
                style={{
                  textAlign: "right",
                }}
              >
                {
                  CurrencyConversion(Math.round(b))
                 
                }
              </Typography>

              <Typography
                className="data1"
                style={{
                  textAlign: "right",
                  marginTop: "7px",
                }}
              >
                {
                  CurrencyConversion(Math.round(b - a))
                 
                }
              </Typography>
              <Typography
                className="data1"
                style={{
                  textAlign: "right",
                }}
              >
                {
                  CurrencyConversion(
                    Math.round(
                      this?.props?.allorderdata?.data?.allOrders?.nodes[0]
                        ?.shoppingCartByCartId?.shippingCharge ?? 0
                    )
                  )
                
                }
              </Typography>
            </div>
            <br />
          </Grid>
        </Grid>
      </>
    );
  };

  calculatetotal = (arr) => {
    var a;
    var dis_price;
    var _val =
      arr.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.filter(
        (val) => {
          if (val.transSkuListByProductSku) return val;
          return 0;
        }
      );
    if (_val.length > 0) {
      a = _val
        .filter((val) => {
          if (val.transSkuListByProductSku) return val;
          return 0;
        })
        .map((cart) => {
          if (
            (cart !== null || cart !== undefined) &&
            cart.transSkuListByProductSku
          ) {
            dis_price = cart.transSkuListByProductSku.markupPrice;
          }
          return dis_price;
        })
        .reduce(myFunc);
    }

    return CurrencyConversion(Math.round(a));

   
  };
  generateShipsBy = (readytoship, vendorDeliveryTime) => {
    var isReadytoShip = readytoship;
    var numberOfDays = vendorDeliveryTime;
    var date = moment().format(" h a");
    if (isReadytoShip) {
      if (JSON.stringify(date) > " 1 pm") {
        return "Ships by" + " " + moment().add(1, "days").format("MMM Do YYYY");
      }
    } else {
      return (
        "Ships by" +
        " " +
        moment().add(numberOfDays, "days").format("MMM Do YYYY")
      );
    }
  };

  ImageUrl = (imgs, sku, metal, paymentsuccess) => {
    var check_img;
    var ppp;
    if (paymentsuccess) {
      var metalColor_ = metal;
      var cnt = imgs.imageUrl.split("/");
      var cnt_b = cnt[2].split("-");
      var cnt_c = cnt_b[1];

      var browser_type = JSON.parse(localStorage.getItem("browserDetails"));

      if ((metalColor_ && metalColor_[0]) === cnt_c[1]) {
        check_img = true;

        var resolution = 500;
        var _resolutions =
          width < 960
            ? `${resolution * 2}X${resolution * 2}`
            : `${resolution}X${resolution}`;
        var url_split = imgs && imgs.imageUrl.split("/");
        var extension_split = url_split && url_split[url_split.length - 1];
        var browser_type_append =
          extension_split &&
          extension_split
            .split(".")[0]
            .concat(`${browser_type && browser_type.browser_type}`);
        url_split[url_split && url_split.length - 1] = browser_type_append;
        url_split.splice(2, 0, _resolutions);
         // eslint-disable-next-line
        var url_construct = url_split.join().replace(/\,/g, "/");
        ppp = `${CDN_URL}${url_construct}`;
      }

      return ppp;
    } else {
      if (
        this.props &&
        this.props.allorderdata &&
        this.props.allorderdata.allorderdata &&
        this.props.allorderdata.allorderdata.nodes.length > 0
      ) {
        // var vera = this.props.allorderdata.allorderdata.nodes.map((val) => {
        //   if (val !== undefined && val !== null) {
        //     var inside =
        //       val.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.map(
        //         (cart) => {
        //           if (cart !== undefined && cart !== null) {
        //             if (cart !== undefined && cart !== null) {
        //               var metalColor_ = metal;
        //               var cnt =
        //                 imgs[0].transSkuListByProductSku.productListByProductId.productImagesByProductId.nodes[0].imageUrl.split(
        //                   "/"
        //                 );
        //               var cnt_b = cnt[2].split("-");
        //               var cnt_c = cnt_b[1];

        //               var browser_type = JSON.parse(
        //                 localStorage.getItem("browserDetails")
        //               );

        //               if ((metalColor_ && metalColor_[0]) === cnt_c[1]) {
        //                 check_img = true;

        //                 var resolution = 500;
        //                 var _resolutions =
        //                   width < 960
        //                     ? `${resolution * 2}X${resolution * 2}`
        //                     : `${resolution}X${resolution}`;
        //                 var url_split =
        //                   imgs &&
        //                   imgs[0].transSkuListByProductSku.productListByProductId.productImagesByProductId.nodes[0].imageUrl.split(
        //                     "/"
        //                   );
        //                 var extension_split =
        //                   url_split && url_split[url_split.length - 1];
        //                 var browser_type_append =
        //                   extension_split &&
        //                   extension_split
        //                     .split(".")[0]
        //                     .concat(
        //                       `${browser_type && browser_type.browser_type}`
        //                     );
        //                 url_split[url_split && url_split.length - 1] =
        //                   browser_type_append;
        //                 url_split.splice(2, 0, _resolutions);
        //                 var url_construct = url_split
        //                   .join()
        //                   .replace(/\,/g, "/");
        //                 ppp = `${CDN_URL}${url_construct}`;
        //               }
        //             }
        //           }
        //         }
        //       );
        //   }
        // });

        return ppp;
      }
    }
  };

  render() {
    let gut_lg = localStorage.getItem("gut_lg")
      ? JSON.parse(localStorage.getItem("gut_lg"))
      : {};
    const { expanded} = this.state;
    const { allorderdata } = this.props;

   
    const allDatas = () => {
      if (
        allorderdata &&
        allorderdata.allorderdata &&
        allorderdata.allorderdata.nodes &&
        allorderdata.allorderdata.nodes.length > 0
      ) {
        return allorderdata.allorderdata.nodes;
      }
    };
    const paymentsuccess = true;

    return (
      <>
        {this.props.location.pathname.split("-")[0] === "/account" ? (
          <div className="pt-sm checkout-ovralldiv-media">
            {allorderdata &&
            allorderdata.allorderdata &&
            allorderdata.allorderdata.nodes &&
            allorderdata.allorderdata.nodes.length > 0 ? (
              <div style={{ marginTop: "20px", boxShadow: "none" }}>
                {allDatas().map((val, index) => {
                  return (
                    <ExpansionPanel
                      square
                      style={{
                        marginBottom: "10px",
                        boxShadow: "rgb(242, 242, 242) 4px 10px 20px 5px",
                      }}
                      key={index}
                      
                    >
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon className="arrow-chek" />}
                        className="ckcut-main-body"
                      >
                        <Typography className="text-chck">
                          Order Number : <span>#{val.id}</span> &nbsp;|&nbsp;
                          Order Date :{" "}
                          {moment(val.createdAt).format("Do MMMM YYYY")}
                          <div style={{ float: "right" }}>
                            <Button className="bton_submit">
                              {val.paymentStatus}
                            </Button>{" "}
                          </div>
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <div className="address_details">
                          <div style={{ width: "100%", marginBottom: "10px" }}>
                            <Grid container spacing={12} lg={12} xs={12}>
                              <Grid
                                item
                                sm={6}
                                lg={6}
                                xs={12}
                                className="order_addres"
                                style={{ fontSize: "14px" }}
                              >
                                <div>
                                  {" "}
                                  <b>Order Number</b>:#{val.id}
                                </div>
                                <br />

                                <div>
                                  <b>Order Date </b> :{" "}
                                  {moment(val.createdAt).format("Do MMMM YYYY")}
                                </div>
                                <br />
                                <div>
                                  {" "}
                                  <b>Payment Method</b>: {val.paymentMode}
                                </div>
                              </Grid>
                              <Grid
                                item
                                sm={6}
                                lg={6}
                                xs={12}
                                className="order_addres_user"
                              >
                                <div>
                                  <b>Shipping Address :</b>
                                </div>
                                <br />
                                <div>
                                  {" "}
                                  {val.shoppingCartByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0] &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0].firstname}
                                  &nbsp;
                                  {val.shoppingCartByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0] &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0].lastname}
                                </div>
                                <br />
                                <div>
                                  {" "}
                                  {val.shoppingCartByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0] &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0]
                                      .addressline1}
                                </div>
                                <br />
                                <div>
                                  {" "}
                                  {val.shoppingCartByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0] &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0].city +
                                      "-"}
                                  {val.shoppingCartByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0] &&
                                    val.shoppingCartByCartId
                                      .cartAddressesByCartId.nodes[0].pincode}
                                </div>
                                <br />
                                <br />
                                {val.shoppingCartByCartId &&
                                val.shoppingCartByCartId.giftwrapsByCartId &&
                                val.shoppingCartByCartId.giftwrapsByCartId
                                  .nodes &&
                                val.shoppingCartByCartId.giftwrapsByCartId.nodes
                                  .length > 0 ? (
                                  <>
                                    <div>
                                      {" "}
                                      <b>Gift to</b> :
                                      {
                                        val.shoppingCartByCartId
                                          .giftwrapsByCartId.nodes[0].giftTo
                                      }
                                    </div>
                                    <br />
                                    <div>
                                      {" "}
                                      <b>Gift message</b> :
                                      {
                                        val.shoppingCartByCartId
                                          .giftwrapsByCartId.nodes[0].message
                                      }
                                    </div>
                                  </>
                                ) : null}
                              </Grid>
                            </Grid>
                          </div>
                          <div style={{ float: "right", fontSize: "16px" }}>
                            Grand Total&nbsp;
                            <span
                              style={{ color: "#ed1165", fontSize: "16px" }}
                            >
                              {
                                CurrencyConversion(
                                  Math.round(
                                    val.shoppingCartByCartId.discountedPrice
                                  )
                                )
                               
                              }
                            </span>
                          </div>
                          {val.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.map(
                            (cart) => {
                              return (
                                <>
                                  <br />
                                  <Grid
                                    container
                                    spacing={12}
                                    lg={12}
                                    style={{
                                      outline: "none",
                                      padding: " 10px",
                                      boxShadow: " 1px 2px 13px 7px #DEDADA",
                                      marginBottom: "20px",
                                      marginTop: "12px",
                                    }}
                                  >
                                    <Grid item lg={3} sm={4}>
                                      {cart &&
                                        cart.transSkuListByProductSku &&
                                        cart.transSkuListByProductSku.productListByProductId.productImagesByProductId.nodes.map(
                                          (imgs) =>
                                            this.ImageUrl(
                                              imgs,
                                              cart &&
                                                cart.transSkuListByProductSku &&
                                                cart.transSkuListByProductSku
                                                  .generatedSku,
                                              cart.transSkuListByProductSku
                                                .metalColor,
                                              paymentsuccess
                                            ) ? (
                                              <div className="wishlist_img">
                                                <img
                                                  className="viewport-img"
                                                  src={this.ImageUrl(
                                                    imgs,
                                                    cart &&
                                                      cart.transSkuListByProductSku &&
                                                      cart
                                                        .transSkuListByProductSku
                                                        .generatedSku,
                                                    cart
                                                      .transSkuListByProductSku
                                                      .metalColor,
                                                    paymentsuccess
                                                  )}
                                                  loading="lazy"
                                                  alt="..."
                                                />
                                              </div>
                                            ) : null
                                        )}
                                    </Grid>
                                    <Grid item lg={4} sm={4}>
                                      <Grid
                                        container
                                        spacing={12}
                                        lg={12}
                                        style={{ lineHeight: "20px" }}
                                      >
                                        <b style={{ width: "100%" }}>
                                          {" "}
                                          {cart &&
                                            cart.transSkuListByProductSku &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId
                                              .productName}
                                        </b>
                                        <Grid item lg={6} sm={6}>
                                          <Typography className="subhesder">
                                            {cart &&
                                              cart.transSkuListByProductSku &&
                                              cart.transSkuListByProductSku
                                                .generatedSku !== undefined &&
                                              (cart.transSkuListByProductSku
                                                .generatedSku !== null
                                                ? "Product Code"
                                                : null)}
                                          </Typography>

                                          <Typography className="subhesder">
                                            {cart.transSkuListByProductSku &&
                                            cart.transSkuListByProductSku
                                              .purity &&
                                            cart.transSkuListByProductSku
                                              .purity !== undefined &&
                                            (cart.transSkuListByProductSku &&
                                              cart.transSkuListByProductSku
                                                .purity &&
                                              cart.transSkuListByProductSku
                                                .purity !== null) > 0
                                              ? "Metal"
                                              : null}
                                          </Typography>
                                          <Typography className="subhesder">
                                            {cart &&
                                            cart.transSkuListByProductSku &&
                                            cart.transSkuListByProductSku
                                              .skuWeight !== undefined &&
                                            cart.transSkuListByProductSku
                                              .skuWeight !== null
                                              ? cart.transSkuListByProductSku
                                                  .productListByProductId
                                                  .productType === "Kada"
                                                ? "Weight (Gm)"
                                                : "Gold Weight (Gm)"
                                              : null}
                                          </Typography>
                                          <Typography className="subhesder">
                                            {cart.transSkuListByProductSku &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId
                                              .productDiamondsByProductSku &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId
                                              .productDiamondsByProductSku
                                              .nodes &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId
                                              .productDiamondsByProductSku
                                              .nodes[0] &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId
                                              .productDiamondsByProductSku
                                              .nodes[0].stoneWeight !==
                                              undefined &&
                                            cart.transSkuListByProductSku &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId
                                              .productDiamondsByProductSku &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId
                                              .productDiamondsByProductSku
                                              .nodes &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId
                                              .productDiamondsByProductSku
                                              .nodes[0] &&
                                            cart.transSkuListByProductSku
                                              .productListByProductId
                                              .productDiamondsByProductSku
                                              .nodes[0].stoneWeight !== null
                                              ? "Diamond Weight"
                                              : null}{" "}
                                          </Typography>
                                          {/* : ""} */}
                                          <Typography className="subhesder">
                                            {cart.transSkuListByProductSku &&
                                            cart.transSkuListByProductSku
                                              .skuSize !== undefined &&
                                            cart.transSkuListByProductSku &&
                                            cart.transSkuListByProductSku
                                              .skuSize !== null &&
                                            cart.transSkuListByProductSku &&
                                            cart.transSkuListByProductSku
                                              .skuSize.length > 0
                                              ? "Size"
                                              : null}
                                          </Typography>
                                        </Grid>

                                        <Grid item lg={6} sm={6}>
                                          <Typography className="subhesder">
                                            {cart &&
                                              cart.transSkuListByProductSku &&
                                              cart.transSkuListByProductSku
                                                .generatedSku}
                                          </Typography>

                                          <Typography className="subhesder">
                                            {cart &&
                                              cart.transSkuListByProductSku &&
                                              cart.transSkuListByProductSku
                                                .purity + ""}
                                            {cart &&
                                              cart.transSkuListByProductSku &&
                                              cart.transSkuListByProductSku
                                                .metalColor}
                                          </Typography>
                                          <Typography className="subhesder">
                                            {cart &&
                                              cart.transSkuListByProductSku &&
                                              cart.transSkuListByProductSku
                                                .skuWeight +
                                                " " +
                                                "GM"}
                                          </Typography>
                                          <Typography className="subhesder">
                                            {cart.transSkuListByProductSku &&
                                              cart.transSkuListByProductSku
                                                .productListByProductId &&
                                              cart.transSkuListByProductSku
                                                .productListByProductId
                                                .productDiamondsByProductSku &&
                                              cart.transSkuListByProductSku
                                                .productListByProductId
                                                .productDiamondsByProductSku
                                                .nodes &&
                                              cart.transSkuListByProductSku
                                                .productListByProductId
                                                .productDiamondsByProductSku
                                                .nodes[0] &&
                                              cart.transSkuListByProductSku
                                                .productListByProductId
                                                .productDiamondsByProductSku
                                                .nodes[0].stoneWeight +
                                                " " +
                                                "CT"}
                                          </Typography>
                                          <Typography className="subhesder">
                                            {cart &&
                                              cart.transSkuListByProductSku &&
                                              cart.transSkuListByProductSku
                                                .skuSize}
                                          </Typography>
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                    {cart && cart.transSkuListByProductSku && (
                                      <Grid
                                        item
                                        lg={2}
                                        sm={2}
                                        style={{ padding: "17px" }}
                                      >
                                        <Grid container spacing={12} lg={12}>
                                          <Typography className="subhesder">
                                            Quantity 1
                                          </Typography>
                                          <Typography className="subhesder">
                                            <img
                                              loading="lazy"
                                              alt="..."
                                              src="https://assets.stylori.com/images/static/icon-ship.png"
                                            />{" "}
                                            <a 
                                         
                                         rel="noopener noreferrer" >
                                              {this.generateShipsBy(
                                                cart.transSkuListByProductSku
                                                  .readytoship,
                                                cart.transSkuListByProductSku
                                                  .vendorDeliveryTime
                                              )}
                                            </a>
                                          </Typography>
                                        </Grid>
                                      </Grid>
                                    )}

                                    {cart && cart.transSkuListByProductSku && (
                                      <Grid
                                        style={{
                                          padding: "10px",
                                          justifyContent: "center",
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                        className="rups"
                                        item
                                        lg={3}
                                        sm={2}
                                      >
                                        {Math.round(cart.price) >
                                        Math.round(
                                          cart.transSkuListByProductSku
                                            .markupPrice
                                        ) ? (
                                          <Pricing
                                            price={
                                              cart.transSkuListByProductSku
                                                .markupPrice
                                            }
                                            offerPrice={
                                              cart.transSkuListByProductSku
                                                .markupPrice
                                            }
                                            offerDiscount={"25% - OFF"}
                                          ></Pricing>
                                        ) : (
                                          <Pricing
                                            offerPrice={
                                              cart.transSkuListByProductSku
                                                .markupPrice
                                            }
                                          ></Pricing>
                                        )}
                                        <br />
                                      </Grid>
                                    )}
                                  </Grid>
                                </>
                              );
                            }
                          )}

                          <div
                            style={{
                              float: "right",
                              fontSize: "13px",
                              lineHeight: "1.5",
                            }}
                          >
                            Sub Total&nbsp;{this.calculatetotal(val)}
                            <br />
                            {val.shoppingCartByCartId.discount ? (
                              <div class={`subhesder`}>
                                REGISTRATION&nbsp;
                                {val.shoppingCartByCartId.discount}
                              </div>
                            ) : null}
                            Shipping&nbsp;FREE
                            <br />
                            Shipping Insurance&nbsp;FREE
                            <br />
                            <div style={{ float: "right", fontSize: "16px" }}>
                              Grand Total&nbsp;
                              <span
                                style={{ color: "#ed1165", fontSize: "16px" }}
                              >
                                {
                                  CurrencyConversion(
                                    Math.round(
                                      val.shoppingCartByCartId.discountedPrice
                                    )
                                  )
                                
                                }
                              </span>
                            </div>
                          </div>
                        </div>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  );
                })}
              </div>
            ) : (
              <div style={{ textAlign: "center", color: "#2F348B" }}>
                No orders yet
              </div>
            )}
          </div>
        ) : (
          <div
            className="pt-sm checkout-ovralldiv-media"
            style={{ margin: "auto" }}
          >
            <Container>
              {allorderdata &&
              allorderdata.data &&
              allorderdata.data.allOrders.nodes.length > 0 ? (
                <>
                  {allorderdata &&
                    allorderdata.data &&
                    allorderdata.data.allOrders.nodes.map((val) => {
                      return (
                        <div>
                          <div style={{ marginTop: "20px", boxShadow: "none" }}>
                            <div>
                              <>
                                <Hidden smDown>
                                  <Grid container spacing={6}>
                                    <Grid
                                      item
                                      xs={12}
                                      lg={6}
                                      style={{ color: "gray" }}
                                    >
                                      <b
                                        style={{
                                          display: "block",
                                          fontSize: "16px",
                                        }}
                                      >
                                        Order Summary
                                      </b>
                                      <br />
                                      <div
                                        style={{ backgroundColor: "#f3f3f3" }}
                                      >
                                        {val &&
                                          val.shoppingCartByCartId &&
                                          val.shoppingCartByCartId
                                            .shoppingCartItemsByShoppingCartId &&
                                          val.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.map(
                                            (cart) => {
                                              if (
                                                cart &&
                                                cart.transSkuListByProductSku
                                              )
                                                return (
                                                  <>
                                                    <div className="rootdiv1">
                                                      <div className="cardpadding">
                                                        <div className="cardpadding1">
                                                          <Grid
                                                            container
                                                            style={{
                                                              overflow:
                                                                "hidden",
                                                              outline: "none",
                                                              color: "gray",
                                                            }}
                                                            alignItems="center"
                                                          >
                                                            <Grid
                                                              item
                                                              lg={3}
                                                              xs={3}
                                                            >
                                                              <div
                                                                className="viewport-img "
                                                                style={{
                                                                  border:
                                                                    "1px solid #C1C1C1",
                                                                }}
                                                              >
                                                                <img
                                                                  height="100%"
                                                                  width="100%"
                                                                  loading="lazy"
                                                                  alt="..."
                                                                  src={
                                                                    cart
                                                                      .transSkuListByProductSku
                                                                      .productListByProductId
                                                                      .productImagesByProductId
                                                                      .nodes[0]
                                                                      .imageUrl
                                                                      ? cart
                                                                          .transSkuListByProductSku
                                                                          .productListByProductId
                                                                          .productImagesByProductId
                                                                          .nodes[0]
                                                                          .imageUrl
                                                                      : "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/NAC+logo+mnemonic.png"
                                                                  }
                                                                />
                                                              </div>
                                                            </Grid>
                                                            <Grid
                                                              item
                                                              lg={6}
                                                              xs={6}
                                                            >
                                                              <div>
                                                                <Typography
                                                                  style={{
                                                                    fontSize:
                                                                      "14px",
                                                                  }}
                                                                >
                                                                  {
                                                                    cart
                                                                      .transSkuListByProductSku
                                                                      .productListByProductId
                                                                      .productName
                                                                  }
                                                                </Typography>
                                                                <Typography
                                                                  style={{
                                                                    fontSize:
                                                                      "14px",
                                                                  }}
                                                                >
                                                                  {
                                                                    cart
                                                                      .transSkuListByProductSku
                                                                      .generatedSku
                                                                  }
                                                                </Typography>
                                                                <Typography
                                                                  style={{
                                                                    fontSize:
                                                                      "14px",
                                                                  }}
                                                                >
                                                                  {this.generateShipsBy(
                                                                    cart
                                                                      .transSkuListByProductSku
                                                                      .readytoship,
                                                                    cart
                                                                      .transSkuListByProductSku
                                                                      .vendorDeliveryTime
                                                                  )}
                                                                </Typography>
                                                              </div>
                                                            </Grid>
                                                            <Grid
                                                              item
                                                              lg={3}
                                                              xs={3}
                                                              style={{
                                                                alignItems:
                                                                  "center",
                                                              }}
                                                            >
                                                              <Hidden smDown>
                                                                <br />
                                                                <br />
                                                              </Hidden>
                                                              {Math.round(
                                                                cart.discountPrice
                                                              ) >
                                                              Math.round(
                                                                cart
                                                                  .transSkuListByProductSku
                                                                  .markupPrice
                                                              ) ? (
                                                                <Pricing
                                                                  price={
                                                                    cart
                                                                      .transSkuListByProductSku
                                                                      .discountPrice
                                                                  }
                                                                  offerPrice={
                                                                    cart
                                                                      .transSkuListByProductSku
                                                                      .markupPrice
                                                                  }
                                                                  success={true}
                                                                />
                                                              ) : (
                                                                <Pricing
                                                                  successofferPrice={
                                                                    cart
                                                                      .transSkuListByProductSku
                                                                      .markupPrice
                                                                  }
                                                                  successprice={
                                                                    cart
                                                                      .transSkuListByProductSku
                                                                      .discountPrice
                                                                  }
                                                                  success={true}
                                                                />
                                                              )}
                                                              <br />
                                                            </Grid>
                                                          </Grid>
                                                        </div>
                                                        <div className="bordercard"></div>
                                                      </div>
                                                    </div>
                                                  </>
                                                );
                                                return 0;
                                            }
                                          
                                          )}
                                      </div>
                                      <Hidden smDown>
                                        <br />
                                        <br />
                                        <b
                                          style={{
                                            display: "block",
                                            fontSize: "16px",
                                          }}
                                        >
                                          Order Details
                                        </b>
                                        <br />
                                        <div className="rootdiv">
                                          <div className="cardpadding">
                                            <div className="cardpadding1">
                                              <Grid
                                                container
                                                spacing={3}
                                                style={{
                                                  color: "gray",
                                                  fontSize: "16px",
                                                }}
                                              >
                                                <Grid item lg={5} xs={4}>
                                                  <div>
                                                    <Typography className="data1">
                                                      ORDER&nbsp;NUMBER
                                                    </Typography>
                                                    <Typography
                                                      className="data1"
                                                      style={{
                                                        marginTop: "6px",
                                                      }}
                                                    >
                                                      ORDER&nbsp;PLACED&nbsp;ON
                                                    </Typography>
                                                    <Typography
                                                      className="data1"
                                                      style={{
                                                        marginTop: "6px",
                                                      }}
                                                    >
                                                      PAYMENT&nbsp;METHOD
                                                    </Typography>
                                                  </div>
                                                </Grid>
                                                <Grid
                                                  item
                                                  lg={7}
                                                  xs={8}
                                                  style={{
                                                    alignItems: "center",
                                                  }}
                                                >
                                                  <div>
                                                    <Typography
                                                      className="data1"
                                                      noWrap
                                                    >
                                                      #{val && val.id}
                                                    </Typography>
                                                    <Typography
                                                      className="data1"
                                                      style={{
                                                        marginTop: "6px",
                                                      }}
                                                    >
                                                      {moment(
                                                        val && val.createdAt
                                                      ).format("Do MMMM YYYY")}
                                                    </Typography>
                                                    <Typography
                                                      className="data1"
                                                      style={{
                                                        marginTop: "6px",
                                                      }}
                                                    >
                                                      {val.paymentMode}
                                                    </Typography>
                                                  </div>
                                                </Grid>
                                              </Grid>
                                            </div>
                                          </div>
                                        </div>
                                        <br />
                                      </Hidden>

                                      {/* SUB TOTAL */}
                                      <Hidden xsDown>
                                        <br />
                                      </Hidden>
                                      {this.calculatesubtotal(val)}
                                      {/*  TOTAL COST */}
                                      <Grid container>
                                        <Grid
                                          item
                                          xs={6}
                                          style={{
                                            color: "#2F348A",
                                          }}
                                        >
                                          <Typography
                                            variant="body1"
                                            style={{
                                              marginTop: "8px",
                                              fontSize: "16px",
                                            }}
                                          >
                                            <b> TOTAL&nbsp;COST</b>
                                          </Typography>
                                        </Grid>
                                        <Grid
                                          item
                                          xs={6}
                                          style={{
                                            color: "#2F348A",
                                          }}
                                        >
                                          <Typography
                                            variant="body1"
                                            style={{
                                              float: "right",
                                              marginTop: "8px",
                                              fontSize: "16px",
                                            }}
                                          >
                                            <b>
                                              {
                                                CurrencyConversion(
                                                  Math.round(
                                                    val.shoppingCartByCartId
                                                      .grossAmount
                                                  )
                                                )
                                              
                                              }
                                            </b>
                                          </Typography>
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      lg={6}
                                      style={{ color: "gray" }}
                                      className="fullgray"
                                    >
                                      <b
                                        style={{
                                          display: "block",
                                          fontSize: "16px",
                                        }}
                                      >
                                        Ship To
                                      </b>
                                      <br />
                                      <div className="ship">
                                        <div className="cardpadding">
                                          <div className="cardpadding1">
                                            <Grid
                                              container
                                              spacing={3}
                                              style={{
                                                overflow: "hidden",
                                                outline: "none",
                                                color: "gray",
                                              }}
                                            >
                                              <Grid item lg={6} xs={12}>
                                                <div>
                                                  <Typography
                                                    style={{
                                                      fontSize: "14px",
                                                      color: "gray",
                                                    }}
                                                  >
                                                    <div>
                                                      {" "}
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0].firstname}
                                                      &nbsp;
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0].lastname}
                                                    </div>

                                                    <div>
                                                      {" "}
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0]
                                                          .addressline1}
                                                    </div>

                                                    <div>
                                                      {" "}
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0].city + "-"}
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0].pincode}
                                                    </div>
                                                  </Typography>
                                                </div>
                                              </Grid>
                                            </Grid>
                                          </div>
                                        </div>
                                      </div>
                                      <br />
                                      <br />
                                      {/* Bill To */}
                                      <b
                                        style={{
                                          display: "block",
                                          fontSize: "16px",
                                        }}
                                      >
                                        Bill To
                                      </b>
                                      <br />
                                      <div className="ship">
                                        <div className="cardpadding">
                                          <div className="cardpadding1">
                                            <Grid
                                              container
                                              spacing={3}
                                              style={{
                                                overflow: "hidden",
                                                outline: "none",
                                                color: "gray",
                                              }}
                                            >
                                              <Grid item lg={6} xs={12}>
                                                <div className="address">
                                                  <Typography
                                                    style={{
                                                      fontSize: "14px",
                                                      color: "gray",
                                                    }}
                                                  >
                                                    <div>
                                                      {" "}
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0].firstname}
                                                      &nbsp;
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0].lastname}
                                                    </div>

                                                    <div>
                                                      {" "}
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0]
                                                          .addressline1}
                                                    </div>

                                                    <div>
                                                      {" "}
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0].city + "-"}
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0].pincode}
                                                    </div>
                                                  </Typography>
                                                </div>
                                              </Grid>
                                            </Grid>
                                          </div>
                                        </div>
                                      </div>
                                      <br />
                                      <Button
                                        className="continue-to"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          window.location.href = "/jewellery";
                                        }}
                                      >
                                        Continue To Shopping
                                      </Button>
                                      <br />
                                      <br />
                                      <Button
                                        startIcon={<AiFillCaretLeft />}
                                        className="apply-b"
                                        onClick={(e) => {
                                          localStorage.removeItem("a__c_t");
                                          localStorage.removeItem("panel");
                                          localStorage.removeItem("order_id");
                                          localStorage.removeItem(
                                            "cartDetails"
                                          );
                                          localStorage.removeItem(
                                            "ship_isactive"
                                          );
                                          localStorage.removeItem(
                                            "select_addres"
                                          );
                                          localStorage.removeItem(
                                            "bil_isactive"
                                          );
                                          if (gut_lg === true) {
                                            localStorage.clear();
                                          }
                                          this.props.history.push("/home");
                                        }}
                                      >
                                        Go back to Homepage
                                      </Button>
                                      <Hidden mdUp>
                                        <br />
                                        <br />
                                      </Hidden>
                                    </Grid>
                                  </Grid>
                                </Hidden>
                                <Hidden mdUp>
                                  <Grid container spacing={6}>
                                    <Grid
                                      item
                                      xs={12}
                                      lg={6}
                                      style={{ color: "gray" }}
                                    >
                                      {/* ORDER Summary */}
                                      <b style={{ display: "block" }}>
                                        Order Summary
                                      </b>
                                      <br />
                                      <div
                                        style={{ backgroundColor: "#f3f3f3" }}
                                      >
                                        {val &&
                                          val.shoppingCartByCartId &&
                                          val.shoppingCartByCartId
                                            .shoppingCartItemsByShoppingCartId &&
                                          val.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.map(
                                            (cart) => {
                                              if (
                                                cart &&
                                                cart.transSkuListByProductSku
                                              )
                                                return (
                                                  <>
                                                    <div className="rootdiv1">
                                                      <div className="cardpadding">
                                                        <div className="cardpadding1">
                                                          <Grid
                                                            container
                                                            spacing={3}
                                                            style={{
                                                              overflow:
                                                                "hidden",
                                                              outline: "none",
                                                              color: "gray",
                                                            }}
                                                          >
                                                            <Grid
                                                              item
                                                              lg={3}
                                                              xs={3}
                                                            >
                                                              <div
                                                                className="viewport-img "
                                                                style={{
                                                                  border:
                                                                    "1px solid #C1C1C1",
                                                                }}
                                                              >
                                                                <img
                                                                  loading="lazy"
                                                                  alt="..."
                                                                  height="100%"
                                                                  width="100%"
                                                                  src={
                                                                    cart
                                                                      .transSkuListByProductSku
                                                                      .productListByProductId
                                                                      .productImagesByProductId
                                                                      .nodes[0]
                                                                      .imageUrl
                                                                      ? cart
                                                                          .transSkuListByProductSku
                                                                          .productListByProductId
                                                                          .productImagesByProductId
                                                                          .nodes[0]
                                                                          .imageUrl
                                                                      : "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/NAC+logo+mnemonic.png"
                                                                  }
                                                                />
                                                              </div>
                                                            </Grid>
                                                            <Grid
                                                              item
                                                              lg={6}
                                                              xs={6}
                                                            >
                                                              <div>
                                                                <Hidden smDown>
                                                                  <br />
                                                                </Hidden>
                                                                <Typography className="data">
                                                                  {
                                                                    cart
                                                                      .transSkuListByProductSku
                                                                      .productListByProductId
                                                                      .productName
                                                                  }
                                                                </Typography>
                                                                <Typography className="data">
                                                                  {
                                                                    cart
                                                                      .transSkuListByProductSku
                                                                      .generatedSku
                                                                  }
                                                                </Typography>
                                                                <Typography className="data">
                                                                  {this.generateShipsBy(
                                                                    cart
                                                                      .transSkuListByProductSku
                                                                      .readytoship,
                                                                    cart
                                                                      .transSkuListByProductSku
                                                                      .vendorDeliveryTime
                                                                  )}
                                                                </Typography>
                                                              </div>
                                                            </Grid>
                                                            <Grid
                                                              item
                                                              lg={3}
                                                              xs={3}
                                                              style={{
                                                                alignItems:
                                                                  "center",
                                                              }}
                                                            >
                                                              <Hidden smDown>
                                                                <br />
                                                                <br />
                                                              </Hidden>
                                                              {Math.round(
                                                                cart.discountPrice
                                                              ) >
                                                              Math.round(
                                                                cart
                                                                  .transSkuListByProductSku
                                                                  .markupPrice
                                                              ) ? (
                                                                <Pricing
                                                                  price={
                                                                    cart
                                                                      .transSkuListByProductSku
                                                                      .discountPrice
                                                                  }
                                                                  offerPrice={
                                                                    cart
                                                                      .transSkuListByProductSku
                                                                      .markupPrice
                                                                  }
                                                                  success={true}
                                                                />
                                                              ) : (
                                                                <Pricing
                                                                  successofferPrice={
                                                                    cart
                                                                      .transSkuListByProductSku
                                                                      .markupPrice
                                                                  }
                                                                  successprice={
                                                                    cart
                                                                      .transSkuListByProductSku
                                                                      .discountPrice
                                                                  }
                                                                  success={true}
                                                                />
                                                              )}
                                                              <br />
                                                            </Grid>
                                                          </Grid>
                                                        </div>
                                                        <div className="bordercard"></div>
                                                      </div>
                                                    </div>
                                                  </>
                                                );
                                                return 0;
                                            }
                                           
                                          )}
                                      </div>
                                      <Hidden smDown>
                                        <br />
                                        <br />
                                        <b style={{ display: "block" }}>
                                          Order Details
                                        </b>
                                        <br />
                                        <div className="rootdiv">
                                          <div className="cardpadding">
                                            <div className="cardpadding1">
                                              <Grid
                                                container
                                                spacing={3}
                                                style={{
                                                  color: "gray",
                                                }}
                                              >
                                                <Grid item lg={4} xs={4}>
                                                  <div>
                                                    <Typography className="data1">
                                                      ORDER&nbsp;NUMBER
                                                    </Typography>
                                                    <Typography className="data1">
                                                      ORDER&nbsp;PLACED&nbsp;ON
                                                    </Typography>
                                                    <Typography className="data1">
                                                      PAYMENT&nbsp;METHOD
                                                    </Typography>
                                                  </div>
                                                </Grid>
                                                <Grid
                                                  item
                                                  lg={8}
                                                  xs={8}
                                                  style={{
                                                    alignItems: "center",
                                                  }}
                                                >
                                                  <div>
                                                    <Typography className="data1">
                                                      #{val && val.id}
                                                    </Typography>
                                                    <Typography className="data1">
                                                      {moment(
                                                        val && val.createdAt
                                                      ).format("Do MMMM YYYY")}
                                                    </Typography>
                                                    <Typography className="data1">
                                                      {val.paymentMode}
                                                    </Typography>
                                                  </div>
                                                </Grid>
                                              </Grid>
                                            </div>
                                          </div>
                                        </div>
                                        <br />
                                      </Hidden>

                                      {/* SUB TOTAL */}
                                      <Hidden xsDown>
                                        <br />
                                      </Hidden>
                                      {this.calculatesubtotal(val)}
                                      {/*  TOTAL COST */}
                                      <Grid container>
                                        <Grid
                                          item
                                          xs={6}
                                          style={{
                                            color: "#2F348A",
                                          }}
                                        >
                                          <Typography
                                            variant="body1"
                                            style={{ marginTop: "8px" }}
                                          >
                                            <b> TOTAL&nbsp;COST</b>
                                          </Typography>
                                        </Grid>
                                        <Grid
                                          item
                                          xs={6}
                                          style={{
                                            color: "#2F348A",
                                          }}
                                        >
                                          <Typography
                                            variant="body1"
                                            style={{
                                              float: "right",
                                              marginTop: "8px",
                                            }}
                                          >
                                            <b>
                                              {
                                                CurrencyConversion(
                                                  Math.round(
                                                    val.shoppingCartByCartId
                                                      .grossAmount
                                                  )
                                                )
                                              
                                              }
                                            </b>
                                          </Typography>
                                        </Grid>
                                      </Grid>
                                    </Grid>
                                    <Grid
                                      item
                                      xs={12}
                                      lg={6}
                                      style={{ color: "gray" }}
                                      className="fullgray"
                                    >
                                      <b style={{ display: "block" }}>
                                        Ship To
                                      </b>
                                      <br />
                                      <div className="ship">
                                        <div className="cardpadding">
                                          <div className="cardpadding1">
                                            <Grid
                                              container
                                              spacing={3}
                                              style={{
                                                overflow: "hidden",
                                                outline: "none",
                                                color: "gray",
                                              }}
                                            >
                                              <Grid item lg={6} xs={12}>
                                                <div className="address">
                                                  <Typography className="data">
                                                    <div>
                                                      {" "}
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0].firstname}
                                                      &nbsp;
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0].lastname}
                                                    </div>

                                                    <div>
                                                      {" "}
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0]
                                                          .addressline1}
                                                    </div>

                                                    <div>
                                                      {" "}
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0].city + "-"}
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0].pincode}
                                                    </div>
                                                  </Typography>
                                                </div>
                                              </Grid>
                                            </Grid>
                                          </div>
                                        </div>
                                      </div>
                                      <br />
                                      <br />
                                      <b style={{ display: "block" }}>
                                        Bill To
                                      </b>
                                      <br />
                                      <div className="ship">
                                        <div className="cardpadding">
                                          <div className="cardpadding1">
                                            <Grid
                                              container
                                              spacing={3}
                                              style={{
                                                overflow: "hidden",
                                                outline: "none",
                                                color: "gray",
                                              }}
                                            >
                                              <Grid item lg={6} xs={12}>
                                                <div className="address">
                                                  <Typography className="data">
                                                    <div>
                                                      {" "}
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0].firstname}
                                                      &nbsp;
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0].lastname}
                                                    </div>

                                                    <div>
                                                      {" "}
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0]
                                                          .addressline1}
                                                    </div>

                                                    <div>
                                                      {" "}
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0].city + "-"}
                                                      {val.shoppingCartByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0] &&
                                                        val.shoppingCartByCartId
                                                          .cartAddressesByCartId
                                                          .nodes[0].pincode}
                                                    </div>
                                                  </Typography>
                                                </div>
                                              </Grid>
                                            </Grid>
                                          </div>
                                        </div>
                                      </div>
                                      <br />
                                      <Button
                                        className="continue-to"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          window.location.href = "/jewellery";
                                        }}
                                      >
                                        Continue To Shopping
                                      </Button>
                                      <br />
                                      <br />
                                      <Button
                                        startIcon={<AiFillCaretLeft />}
                                        className="apply-b"
                                        onClick={(e) => {
                                          localStorage.removeItem("a__c_t");
                                          localStorage.removeItem("panel");
                                          localStorage.removeItem("order_id");
                                          localStorage.removeItem(
                                            "cartDetails"
                                          );
                                          localStorage.removeItem(
                                            "ship_isactive"
                                          );
                                          localStorage.removeItem(
                                            "select_addres"
                                          );
                                          localStorage.removeItem(
                                            "bil_isactive"
                                          );
                                          if (gut_lg === true) {
                                            localStorage.clear();
                                          }
                                          this.props.history.push("/home");
                                        }}
                                      >
                                        Go back to Homepage
                                      </Button>
                                      <Hidden mdUp>
                                        <br />
                                        <br />
                                      </Hidden>
                                    </Grid>
                                  </Grid>
                                </Hidden>
                              </>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </>
              ) : (
                <div style={{ textAlign: "center", color: "#2F348B" }}>
                  No orders yet
                </div>
              )}
            </Container>
          </div>
        )}
      </>
    );
  }
}

export default withRouter(Allorders);
