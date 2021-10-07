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
// import "../../components/Checkout/Cart.css";
import "./accounts.css";
const order_id = localStorage.getItem("order_id")
  ? JSON.parse(localStorage.getItem("order_id"))
  : "";
var img_res;
var img_res_X_2 = null;
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
    ReactPixel.track("Purchase", {
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

  // changePanel = (panel, mailId) => {
  //     this.setState({
  //         expanded: panel,
  //     })
  // }
  // const dataCard1 = this.props.data.map(val => { return val.dataCard1[0].offerPrice }).reduce(myFunc);

  calculatetotal = (arr) => {
    var a;
    var dis_price;
    var _val =
      arr.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.filter(
        (val) => {
          if (val.transSkuListByProductSku) return val;
        }
      );
    if (_val.length > 0) {
      a =
        // arr.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes
        _val
          .filter((val) => {
            if (val.transSkuListByProductSku) return val;
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

    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(Math.round(a));
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
    // allorderdata.data.allOrders
    var check_img;
    var ppp;
    if (paymentsuccess) {
      var metalColor_ = metal;
      var cnt = imgs.imageUrl.split("/");
      var cnt_b = cnt[2].split("-");
      var cnt_c = cnt_b[1];

      // if (sku === cart.transSkuListByProductSku.generatedSku) {
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
        var url_construct = url_split.join().replace(/\,/g, "/");
        // var img_url = `${baseUi}${url_construct}`
        ppp = `${CDN_URL}${url_construct}`;
        // alert(this.state.check_img)
      }
      // }

      // return inside[0]

      // var outside = ppp.filter(val => (val !== undefined && val !== null))
      // alert(ppp)
      return ppp;
    } else {
      if (
        this.props &&
        this.props.allorderdata &&
        this.props.allorderdata.allorderdata &&
        this.props.allorderdata.allorderdata.nodes.length > 0
      ) {
        // allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes && allorderdata.allorderdata.nodes.length > 0
        var vera = this.props.allorderdata.allorderdata.nodes.map((val) => {
          if (val !== undefined && val !== null) {
            var inside =
              val.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.map(
                (cart) => {
                  if (cart !== undefined && cart !== null) {
                    if (cart !== undefined && cart !== null) {
                      var metalColor_ = metal;
                      var cnt =
                        imgs[0].transSkuListByProductSku.productListByProductId.productImagesByProductId.nodes[0].imageUrl.split(
                          "/"
                        );
                      var cnt_b = cnt[2].split("-");
                      var cnt_c = cnt_b[1];

                      // if (sku === cart.transSkuListByProductSku.generatedSku) {
                      var browser_type = JSON.parse(
                        localStorage.getItem("browserDetails")
                      );

                      if ((metalColor_ && metalColor_[0]) === cnt_c[1]) {
                        check_img = true;

                        var resolution = 500;
                        var _resolutions =
                          width < 960
                            ? `${resolution * 2}X${resolution * 2}`
                            : `${resolution}X${resolution}`;
                        var url_split =
                          imgs &&
                          imgs[0].transSkuListByProductSku.productListByProductId.productImagesByProductId.nodes[0].imageUrl.split(
                            "/"
                          );
                        var extension_split =
                          url_split && url_split[url_split.length - 1];
                        var browser_type_append =
                          extension_split &&
                          extension_split
                            .split(".")[0]
                            .concat(
                              `${browser_type && browser_type.browser_type}`
                            );
                        url_split[url_split && url_split.length - 1] =
                          browser_type_append;
                        url_split.splice(2, 0, _resolutions);
                        var url_construct = url_split
                          .join()
                          .replace(/\,/g, "/");
                        // var img_url = `${baseUi}${url_construct}`
                        ppp = `${CDN_URL}${url_construct}`;
                        // alert(this.state.check_img)
                      }
                      // }
                    }
                  }
                }
              );
            // return inside[0]
          }
        });
        // var outside = ppp.filter(val => (val !== undefined && val !== null))
        // alert(ppp)
        return ppp;
      }
    }
  };

  render() {
    let gut_lg = localStorage.getItem("gut_lg")
      ? JSON.parse(localStorage.getItem("gut_lg"))
      : {};
    const { expanded, mailId, expandedlimit } = this.state;
    const { allorderdata } = this.props;

    const expanded_ = expanded.map((val) => {
      return val;
    });
    // var check_img = null
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
        {/* allorderdata.nodes */}
        {this.props.location.pathname.split("-")[0] === "/account" ? (
          <div className="pt-sm checkout-ovralldiv-media">
            {allorderdata &&
            allorderdata.allorderdata &&
            allorderdata.allorderdata.nodes &&
            allorderdata.allorderdata.nodes.length > 0 ? (
              <div style={{ marginTop: "20px", boxShadow: "none" }}>
                {/* {localStorage.setItem("a__r_c", allorderdata && allorderdata.allorderdata && allorderdata.allorderdata.nodes.length)} */}
                {allDatas().map((val, index) => {
                  return (
                    <ExpansionPanel
                      square
                      // expanded={expanded.map(val=>val===index)}
                      // onChange={this.handleChange(index)}
                      style={{
                        boxShadow: "none",
                        boxShadow: "rgb(242, 242, 242) 4px 10px 20px 5px",
                      }}
                      key={index}
                      style={{ marginBottom: "10px" }}
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
                          {/* {val.shoppingCartByCartId.cartAddressesByCartId.nodes.map(addreses => ( */}
                          <div style={{ width: "100%", marginBottom: "10px" }}>
                            <Grid container spacing={12} lg={12} xs={12}>
                              <Grid
                                item
                                sm={6}
                                lg={6}
                                xs={12}
                                className="order_addres"
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
                                {/* <div></div> */}
                              </Grid>
                            </Grid>
                          </div>
                          {/* ))} */}
                          <div style={{ float: "right", fontSize: "18px" }}>
                            Grand Total&nbsp;
                            <span
                              style={{ color: "#ed1165", fontSize: "18px" }}
                            >
                              {new Intl.NumberFormat("en-IN", {
                                style: "currency",
                                currency: "INR",
                                minimumFractionDigits: 0,
                              }).format(
                                Math.round(
                                  val.shoppingCartByCartId.discountedPrice
                                )
                              )}
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
                                                  alt=""
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

                                          {/* : ""} */}

                                          {/* : ""} */}
                                          {/* {cart.transSkuListByProductSku.generatedSku.length > 0 ? */}
                                          {/* : ""} */}

                                          {/* {cart.transSkuListByProductSku&&cart.transSkuListByProductSku.purity&&cart.transSkuListByProductSku.purity.length > 0 ? */}
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
                                                  .productType == "Kada"
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
                                          {/* Ring Size */}
                                        </Grid>
                                        {/*  */}
                                        {/*  */}
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
                                        style={{ padding: "16px" }}
                                      >
                                        <Grid container spacing={12} lg={12}>
                                          <Typography className="subhesder">
                                            Quantity 1
                                          </Typography>
                                          <Typography className="subhesder">
                                            <img
                                              alt=""
                                              src="https://assets.stylori.com/images/static/icon-ship.png"
                                            />{" "}
                                            <a>
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
                            <div style={{ float: "right", fontSize: "18px" }}>
                              Grand Total&nbsp;
                              <span
                                style={{ color: "#ed1165", fontSize: "18px" }}
                              >
                                {new Intl.NumberFormat("en-IN", {
                                  style: "currency",
                                  currency: "INR",
                                  minimumFractionDigits: 0,
                                }).format(
                                  Math.round(
                                    val.shoppingCartByCartId.discountedPrice
                                  )
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* {val.paymentStatus} */}
                        {/* {JSON.stringify(this.props.allorderdata)} */}
                        {/* changePanel */}
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  );
                })}
              </div>
            ) : (
              <div style={{ textAlign: "center", color: "#394578" }}>
                No orders yet
              </div>
            )}
          </div>
        ) : (
          <div
            className="pt-sm checkout-ovralldiv-media"
            style={{ margin: "auto" }}
          >
            {allorderdata &&
            allorderdata.data &&
            allorderdata.data.allOrders.nodes.length > 0 ? (
              <Container style={{ overflow: "hidden" }}>
                {allorderdata &&
                  allorderdata.data &&
                  allorderdata.data.allOrders.nodes.map((val) => {
                    return (
                      <div>
                        <div style={{ marginTop: "20px", boxShadow: "none" }}>
                          <div>
                            {val &&
                              val.shoppingCartByCartId &&
                              val.shoppingCartByCartId
                                .shoppingCartItemsByShoppingCartId &&
                              val.shoppingCartByCartId.shoppingCartItemsByShoppingCartId.nodes.map(
                                (cart) => {
                                  if (cart && cart.transSkuListByProductSku)
                                    return (
                                      <>
                                        <Grid container spacing={6}>
                                          <Grid
                                            item
                                            xs={12}
                                            lg={6}
                                            style={{ color: "gray" }}
                                          >
                                            {/* ORDER SUMMERY */}
                                            <b style={{ display: "block" }}>
                                              Order Summery
                                            </b>
                                            <br />

                                            <div className="rootdiv1">
                                              <div className="cardpadding">
                                                <div className="cardpadding1">
                                                  <Grid
                                                    container
                                                    spacing={3}
                                                    style={{
                                                      overflow: "hidden",
                                                      outline: "none",
                                                      color: "gray",
                                                      borderBottom:
                                                        "1px solid #c1c1c1",
                                                    }}
                                                  >
                                                    <Grid item lg={3} xs={3}>
                                                      {cart &&
                                                        cart.transSkuListByProductSku &&
                                                        cart.transSkuListByProductSku.productListByProductId.productImagesByProductId.nodes.map(
                                                          (imgs) =>
                                                            this.ImageUrl(
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
                                                            ) ? (
                                                              <div className="viewport-img-border ">
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
                                                                  alt=""
                                                                />
                                                              </div>
                                                            ) : (
                                                              <div className="viewport-img-border">
                                                                <img
                                                                  className="viewport-img"
                                                                  src="https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/StyloriSilver+nemonic.png"
                                                                  alt=""
                                                                />
                                                              </div>
                                                            )
                                                        )}
                                                    </Grid>
                                                    <Grid item lg={6} xs={6}>
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
                                                        alignItems: "center",
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
                                                          offerDiscount={
                                                            "25% - OFF"
                                                          }
                                                          success={true}
                                                        />
                                                      ) : (
                                                        <Pricing
                                                          offerPrice={
                                                            cart
                                                              .transSkuListByProductSku
                                                              .markupPrice
                                                          }
                                                          success={true}
                                                        />
                                                      )}
                                                      <br />
                                                    </Grid>
                                                  </Grid>
                                                </div>
                                              </div>
                                            </div>
                                            {/* ORDER DETAILS */}
                                            <Hidden smDown>
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
                                                        borderBottom:
                                                          "1px solid #c1c1c1",
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
                                                              val &&
                                                                val.createdAt
                                                            ).format(
                                                              "Do MMMM YYYY"
                                                            )}
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
                                            <br />
                                            <Grid
                                              container
                                              style={{
                                                overflow: "hidden",
                                                outline: "none",
                                                color: "gray",
                                                borderBottom:
                                                  "1px solid #c1c1c1",
                                              }}
                                            >
                                              <Grid item xs={6}>
                                                <div>
                                                  <Typography className="data1">
                                                    SUBTOTAL
                                                  </Typography>

                                                  <Typography className="data1">
                                                    DISCOUNT&nbsp;CART
                                                  </Typography>
                                                  <Typography className="data1">
                                                    SHIPPING&nbsp;CHARGES(Standard)
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
                                                    TOTAL
                                                  </Typography>

                                                  <Typography
                                                    className="data1"
                                                    style={{
                                                      textAlign: "right",
                                                    }}
                                                  >
                                                    DISCOUNT
                                                  </Typography>
                                                  <Typography
                                                    className="data1"
                                                    style={{
                                                      textAlign: "right",
                                                    }}
                                                  >
                                                    SHIPPING
                                                  </Typography>
                                                </div>
                                                <br />
                                              </Grid>
                                            </Grid>
                                            {/*  TOTAL COST */}
                                            <Grid container>
                                              <Grid
                                                item
                                                xs={6}
                                                style={{
                                                  color: "#2F348A",
                                                }}
                                              >
                                                <Typography variant="body1">
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
                                                  style={{ float: "right" }}
                                                >
                                                  <b>
                                                    {new Intl.NumberFormat(
                                                      "en-IN",
                                                      {
                                                        style: "currency",
                                                        currency: "INR",
                                                        minimumFractionDigits: 0,
                                                      }
                                                    ).format(
                                                      Math.round(
                                                        val.shoppingCartByCartId
                                                          .discountedPrice
                                                      )
                                                    )}
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
                                          >
                                            {/* SHIP To */}
                                            <b style={{ display: "block" }}>
                                              Ship To
                                            </b>
                                            <br />
                                            <div
                                              style={{
                                                backgroundColor: "#F3F3F3",
                                                color: "gray",
                                                boxShadow:
                                                  "4px 5px 3px #888888",
                                                padding: "10px 0px",
                                              }}
                                            >
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
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0] &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0]
                                                                .firstname}
                                                            &nbsp;
                                                            {val.shoppingCartByCartId &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0] &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0]
                                                                .lastname}
                                                          </div>

                                                          <div>
                                                            {" "}
                                                            {val.shoppingCartByCartId &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0] &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0]
                                                                .addressline1}
                                                          </div>

                                                          <div>
                                                            {" "}
                                                            {val.shoppingCartByCartId &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0] &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0].city +
                                                                "-"}
                                                            {val.shoppingCartByCartId &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0] &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0]
                                                                .pincode}
                                                          </div>
                                                        </Typography>
                                                      </div>
                                                    </Grid>
                                                  </Grid>
                                                </div>
                                              </div>
                                            </div>
                                            <br />
                                            {/* Bill To */}
                                            <b style={{ display: "block" }}>
                                              Bill To
                                            </b>
                                            <br />
                                            <div
                                              style={{
                                                backgroundColor: "#F3F3F3",
                                                color: "gray",
                                                boxShadow:
                                                  "4px 5px 3px #888888",
                                                padding: "10px 0px",
                                              }}
                                            >
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
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0] &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0]
                                                                .firstname}
                                                            &nbsp;
                                                            {val.shoppingCartByCartId &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0] &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0]
                                                                .lastname}
                                                          </div>

                                                          <div>
                                                            {" "}
                                                            {val.shoppingCartByCartId &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0] &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0]
                                                                .addressline1}
                                                          </div>

                                                          <div>
                                                            {" "}
                                                            {val.shoppingCartByCartId &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0] &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0].city +
                                                                "-"}
                                                            {val.shoppingCartByCartId &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0] &&
                                                              val
                                                                .shoppingCartByCartId
                                                                .cartAddressesByCartId
                                                                .nodes[0]
                                                                .pincode}
                                                          </div>
                                                        </Typography>
                                                      </div>
                                                    </Grid>
                                                  </Grid>
                                                </div>
                                              </div>
                                            </div>
                                            <br />
                                            {/* Buttons */}
                                            <Button
                                              className="continue-to"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                window.location.href =
                                                  "/jewellery";
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
                                                localStorage.removeItem(
                                                  "a__c_t"
                                                );
                                                localStorage.removeItem(
                                                  "panel"
                                                );
                                                localStorage.removeItem(
                                                  "order_id"
                                                );
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
                                                this.props.history.push(
                                                  "/home"
                                                );
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
                                      </>
                                    );
                                }
                              )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </Container>
            ) : (
              <div style={{ textAlign: "center", color: "#394578" }}>
                No orders yet
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}

export default withRouter(Allorders);
{
  /* <div style={{ float: "right", fontSize: "13px", lineHeight: "1.5" }} >
                                                            Sub Total&nbsp;{this.calculatetotal(val)}
                                                            {val.shoppingCartByCartId.discount !== null ? 
                                                            <div className={`data`}>REGISTRATION : &nbsp;{val.shoppingCartByCartId.discount}</div>
                                                                : ""}
                                                            Shipping&nbsp;FREE<br />
                                                            Shipping Insurance&nbsp;FREE<br />
                                                            <div style={{ float: "right", fontSize: "18px" }} >Grand Total&nbsp;<span style={{ color: '#ed1165', fontSize: "18px" }}>

                                                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(val.shoppingCartByCartId.discountedPrice))}
                                                            </span>
                                                            </div>
                                                        </div> */
}

{
  /* <Grid container spacing={12} lg={12} className="classGrid">
  <Typography
    style={{
      color: "gray",
      fontWeight: "600px",
      textTransform: "capitalize",
    }}
  >
    {cart.transSkuListByProductSku.productListByProductId.productName}
  </Typography>

  <Grid item lg={6} sm={6}>
    <Typography className="subhesder">
      {cart.transSkuListByProductSku.generatedSku !== undefined &&
        (cart.transSkuListByProductSku.generatedSku !== null
          ? "Product Code"
          : null)}
    </Typography>
    <Typography className="subhesder">
      {cart.transSkuListByProductSku &&
      cart.transSkuListByProductSku.purity &&
      cart.transSkuListByProductSku.purity !== undefined &&
      (cart.transSkuListByProductSku &&
        cart.transSkuListByProductSku.purity &&
        cart.transSkuListByProductSku.purity !== null) > 0
        ? "Metal"
        : null}
    </Typography>
    <Typography className="subhesder">
      {cart.transSkuListByProductSku.skuWeight !== undefined &&
      cart.transSkuListByProductSku.skuWeight !== null
        ? cart.transSkuListByProductSku.productListByProductId.productType ==
          "Kada"
          ? "Weight (Gm)"
          : "Gold Weight (Gm)"
        : null}
    </Typography>
   

    <Typography className="subhesder">
      {cart.transSkuListByProductSku &&
      cart.transSkuListByProductSku.productListByProductId &&
      cart.transSkuListByProductSku.productListByProductId
        .productDiamondsByProductSku &&
      cart.transSkuListByProductSku.productListByProductId
        .productDiamondsByProductSku.nodes &&
      cart.transSkuListByProductSku.productListByProductId
        .productDiamondsByProductSku.nodes[0] &&
      cart.transSkuListByProductSku.productListByProductId
        .productDiamondsByProductSku.nodes[0].stoneWeight !== undefined &&
      cart.transSkuListByProductSku &&
      cart.transSkuListByProductSku.productListByProductId &&
      cart.transSkuListByProductSku.productListByProductId
        .productDiamondsByProductSku &&
      cart.transSkuListByProductSku.productListByProductId
        .productDiamondsByProductSku.nodes &&
      cart.transSkuListByProductSku.productListByProductId
        .productDiamondsByProductSku.nodes[0] &&
      cart.transSkuListByProductSku.productListByProductId
        .productDiamondsByProductSku.nodes[0].stoneWeight !== null
        ? "Diamond Weight"
        : null}{" "}
    </Typography>

    <Typography className="subhesder">
      {cart.transSkuListByProductSku &&
      cart.transSkuListByProductSku.skuSize !== undefined &&
      cart.transSkuListByProductSku &&
      cart.transSkuListByProductSku.skuSize !== null &&
      cart.transSkuListByProductSku &&
      cart.transSkuListByProductSku.skuSize.length > 0
        ? "Size"
        : null}
    </Typography>
  </Grid>
  <Grid item lg={6} sm={6}>
    <Typography className="subhesder">
      {cart.transSkuListByProductSku.generatedSku}
    </Typography>

    <Typography className="subhesder">
      {cart.transSkuListByProductSku.purity + ""}
      {cart.transSkuListByProductSku.metalColor}
    </Typography>
    <Typography className="subhesder">
      {cart.transSkuListByProductSku.skuWeight + " " + "GM"}
    </Typography>
    <Typography className="subhesder">
      {cart.transSkuListByProductSku &&
        cart.transSkuListByProductSku.productListByProductId &&
        cart.transSkuListByProductSku.productListByProductId
          .productDiamondsByProductSku &&
        cart.transSkuListByProductSku.productListByProductId
          .productDiamondsByProductSku.nodes &&
        cart.transSkuListByProductSku.productListByProductId
          .productDiamondsByProductSku.nodes[0] &&
        cart.transSkuListByProductSku.productListByProductId
          .productDiamondsByProductSku.nodes[0].stoneWeight +
          " " +
          "CT"}
    </Typography>

    <Typography className="subhesder">
      {cart.transSkuListByProductSku.skuSize}
    </Typography>
  </Grid>
</Grid>; */
}
