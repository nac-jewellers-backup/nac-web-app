import { Container, Grid, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { API_URL } from "config";
import { CartContext } from "context";
import React from "react";
import { NavLink } from "react-router-dom";
import Buynowbutton from "../Buynow/buynowbutton";
import Pricing from "../Pricing/index";
import "./Cart.css";
import CardSmallScreen from "./CartCardSmallScreen.js";
import styles from "./style";

class Checkoutcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: true,
    };
  }
  handleCartQuantity = (skuId) => {
    const filters =
      this.props.filters && this.props.filters.quantity && Object.keys(this.props.filters.quantity).length > 0 ? true : false;
    if (filters) return this.props.filters.quantity[skuId];
    else return JSON.parse(localStorage.getItem("quantity"))[skuId];
  };
  handleDeleteLocalStorage = (e) => {
    var local_storage = JSON.parse(localStorage.getItem("cartDetails"));

    var _localStorageQuantity = JSON.parse(localStorage.getItem("quantity"));

    // var currentValue = e.target.id
    var currentValue = e.target.id && e.target.id.length > 0 ? e.target.id : e.currentTarget.id;

    // console.clear()

    var a = local_storage.products.filter((val) => {
      if (currentValue !== val.sku_id) {
        return val;
      }
    });

    function status(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    }

    function json(response) {
      return response.json();
    }
    if (JSON.parse(localStorage.getItem("cart_id"))) {
      let cart_id = JSON.parse(localStorage.getItem("cart_id")).cart_id;
      let bodyVariableRemoveCartItem = {
        cart_id: cart_id,
        product_id: currentValue,
      };
      fetch(`${API_URL}/removecartitem`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...bodyVariableRemoveCartItem,
        }),
      })
        .then(status)
        .then(json)
        .then((val) => {
          sessionStorage.removeItem("updatedProduct");
          alert(val.message);
          var cartId = JSON.parse(localStorage.getItem("cartDetails")).cart_id;
          var userId = JSON.parse(localStorage.getItem("cartDetails")).user_id;
          var localstorage = JSON.stringify({
            cart_id: `${cartId}`,
            user_id: `${userId}`,
            products: a,
          });
          delete _localStorageQuantity[currentValue];
          localStorage.setItem("quantity", JSON.stringify(_localStorageQuantity));
          localStorage.setItem("cartDetails", localstorage);
          window.location.reload();
        });
    } else {
      var _products = JSON.parse(localStorage.getItem("cartDetails")).products.filter((val) => {
        if (val.sku_id !== currentValue) return val;
      });
      var cartId = JSON.parse(localStorage.getItem("cartDetails")).cart_id;
      var userId = JSON.parse(localStorage.getItem("cartDetails")).user_id;
      var _obj = { cart_id: cartId, user_id: userId, products: _products };
      if (_products.length > 0) {
        localStorage.setItem("cartDetails", JSON.stringify(_obj));
        delete _localStorageQuantity[currentValue];
        localStorage.setItem("quantity", JSON.stringify(_localStorageQuantity));
        alert("You removed this product successfully");
        window.location.reload();
      } else {
        localStorage.removeItem("cartDetails", _products);
        // localStorage.removeItem('quantity')
        alert("You removed this product successfully");
        window.location.reload();
      }
    }
  };
  handlereloadcart = (val) => {
    const data = this.props.data;
    if (val.skuId == undefined) {
      console.log("error");
    }
    var redirect_url;
    redirect_url = data.map(
      (val) => "/jewellery" + "/" + val.productType + "/" + val.materialName + "/" + val.prdheader + "/" + val.generatedSku
    );
    return alert(JSON.stringify(redirect_url));
  };
  row = (props) => {
    //let { productShipBy } = state;
    const dataCarousel = {
      slidesToShow: 1,
      arrows: false,
    };
    let dateObj = "";
    let shipByDate = "";
    if (this.state.productShipBy) {
      dateObj = new Date(this.state.productShipBy);
      shipByDate = `Ships by ${dateObj.getUTCDate()} ${dateObj.toLocaleString(
        "default",
        {
          month: "long",
        }
      )} ${dateObj.getUTCFullYear()}`;
    }
    const { classes, data } = this.props;
    const { productsDetails, fadeImages, dataCard1 } = this.props.data;
    const filter_image = (imges__val, name, details) => {
      var image_urls;
      const width = window.innerWidth;
      if (imges__val.imageUrl && imges__val.imageUrl.length > 0) {
        return imges__val.imageUrl;
      }
    };
    const checkMaterial = (material) => {
      let _data = material.map((val) => val.toLowerCase());
      if (_data.indexOf("silver") > -1) return false;
      else return true;
    };

    return (
      <div style={{ marginTop: "10px" }}>
        <Grid container>
          <Grid xs={12} />
          <Grid xs={12}>{this.checkoutbutton()}</Grid>
        </Grid>
        <br />
        {this.props.data.map((dataval) =>
          dataval.productsDetails.map((val) => (
            <div
              style={{
                outline: "none",
                marginBottom: "25px",
                boxShadow: "1px 2px 13px 7px #DEDADA",
                padding: "10px",
              }}
              className={classes.cart}
            >
              <Grid container spacing={12} xs={12}>
                <Grid
                  item
                  xs={3}
                  sm={3}
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    padding: "1px",
                  }}
                >
                  <>
                    {window.location.pathname !== "/checkout" ? (
                      <NavLink to={dataval?.skuUrl} style={{ textDecoration: "none" }}>
                        <center>
                          <img style={{ width: "70%" }} src={dataval?.fadeImages[0]?.imageUrl}></img>
                        </center>
                      </NavLink>
                    ) : (
                      <center>
                        <img style={{ width: "50%" }} src={dataval?.fadeImages[0]?.imageUrl}></img>
                      </center>
                    )}
                  </>
                </Grid>

                <Grid item xs={5} sm={7} lg={6} style={{ padding: "13px" }}>
                  {window.location.pathname !== "/checkout" ? (
                    <NavLink to={dataval.skuUrl} style={{ textDecoration: "none" }}>
                      <h3 className={`title ${classes.normalfonts}`}>{val.pro_header}</h3>
                    </NavLink>
                  ) : (
                    <h3 className={`title ${classes.normalfonts}`}>{val.pro_header}</h3>
                  )}
                  <Grid container spacing={12} style={{ marginTop: "15px" }}>
                    <Grid item xs={8}>
                      {val.namedetail !== undefined &&
                        val.namedetail.map((val) => {
                          return (
                            <>
                              {val.name || val.detail ? (
                                <Grid container spacing={12}>
                                  <Grid item xs={6}>
                                    <Typography className={`subhesder ${classes.normalfonts}`}>{val.name}</Typography>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Typography className={`subhesder ${classes.normalfonts}`}>{val.details}</Typography>
                                  </Grid>
                                </Grid>
                              ) : null}
                            </>
                          );
                        })}
                    </Grid>

                    <Grid item xs={4}>
                      <Typography
                        className={`subhesder ${classes.normalfonts}`}
                      >
                        {shipByDate}
                      </Typography>
                      {/* : ""} */}

                      {window.location.pathname !== "/checkout" ? (
                        <div>
                          <span
                            className="highlighter"
                            className={`subhesder hov ${classes.normalfonts}`}
                            id={dataval.generatedSku}
                            onClick={(event) => this.handleDeleteLocalStorage(event)}
                          >
                            <i class="fa fa-trash"></i>
                            &nbsp;Remove
                          </span>
                          <span>&nbsp;</span>

                          {console.log(dataval.isActive)}
                          {!dataval.isActive ? (
                            <span
                              style={{
                                backgroundColor: "red",
                                fontSize: "10px",
                                color: "white",
                                padding: "2px 4px",
                                borderRadius: "2px",
                              }}
                            >
                              Sold Out
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      ) : (
                        ""
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} sm={2} lg={3}>
                  <div style={{ marginTop: "15%" }}>
                    {dataval.dataCard1.map((val) => {
                      return (
                        <Pricing
                          detail={dataval}
                          offerDiscount={val.discount ? `${val.discount}% - OFF` : null}
                          price={val.price}
                          offerPrice={val.offerPrice}
                        ></Pricing>
                      );
                    })}
                  </div>
                </Grid>
              </Grid>
            </div>
          ))
        )}
        {this.subtotals(props)}
      </div>
    );
  };
  checkoutbutton = () => {
    const { classes } = this.props;
    let productIsActive = this.props.data[0].isActive ?? "";
    let productURL;
    this.props.data.map((val) => {
      if (val.isActive == false) {
        productIsActive = val.isActive;
        productURL = val.skuUrl;
      }
    });
    let path = window.location.pathname.split("/").pop();
    return (
      <div>
        {path == "checkout" ? (
          ""
        ) : (
          <div className="ckeckout-top">
            <div
              style={{ textDecoration: "none" }}
              onClick={() => {
                // window.location.reload()
                if (productIsActive) {
                  localStorage.removeItem("bil_isactive");
                  localStorage.removeItem("ship_isactive");
                  localStorage.setItem("panel", 1);
                  localStorage.removeItem("select_addres");
                  window.location.href = "/checkout";
                }
              }}
            >
              <Buynowbutton
             productURL={productURL}
             productIsActive={productIsActive ?? ""}
             class={`chckout-page-buynow ${classes.buttons}`}
              />
            </div>
          </div>
        )}
      </div>
    );
  };
  subtotals = (props) => {
    var discounted_price = this.props.cartFilters.discounted_price ? this.props.cartFilters.discounted_price : "";
    const dataCard1 = this.props.data
      .map((val) => {
        return val.dataCard1[0].offerPrice * JSON.parse(localStorage.getItem("quantity"))[val.generatedSku];
      })
      .reduce(myFunc);
    function myFunc(total, num) {
      var cart_price;
      if (discounted_price.length > 0) {
        var a = Math.round(total + num);
        cart_price = a - discounted_price;
      } else {
        cart_price = Math.round(total + num);
      }
      return cart_price;
    }
    var yousave = this.props.data
      .map((_data) => {
        return (
          _data.dataCard1[0].price * JSON.parse(localStorage.getItem("quantity"))[_data.generatedSku] -
          _data.dataCard1[0].offerPrice * JSON.parse(localStorage.getItem("quantity"))[_data.generatedSku]
        );
      })
      .reduce(myFunc);
    let path = window.location.pathname.split("/").pop();
    const { classes } = this.props;
    return (
      <div style={{ marginTop: "10px" }}>
        <Grid container spacing={12}>
          <Grid item xs={6} />
          <Grid item xs={6}>
            <Grid container>
              <Grid xs={7}>
                <Typography className={`subhesder ${classes.normalfonts}`}>Subtotal</Typography>
                {yousave !== 0 || props.cartFilters.tax_price ? (
                  <Typography className={`subhesder ${classes.normalfonts}`}>You Saved</Typography>
                ) : null}

                {props.cartFilters.tax_price ? (
                  <Typography className={`subhesder ${classes.normalfonts}`}>{props.cartFilters.coupon_type}</Typography>
                ) : (
                  ""
                )}
                <Typography className={`subhesder ${classes.normalfonts}`}>Shipping</Typography>
                <Typography className={`subhesder-totsl-size ${classes.normalfonts}`}>Grand Total</Typography>
              </Grid>
              <Grid xs={5}>
                <Typography className={`subhesder ${classes.normalfonts}`}>
                  {props.cartFilters.gross_amount ? Math.round(props.cartFilters.gross_amount) : Math.round(dataCard1)}
                </Typography>
                {yousave !== 0 || props.cartFilters.tax_price ? (
                  <Typography className={`subhesder ${classes.normalfonts}`}>
                    {props.cartFilters.tax_price ? Math.round(yousave) + props.cartFilters.tax_price : Math.round(yousave)}
                  </Typography>
                ) : null}

                {props.cartFilters.tax_price ? (
                  <Typography className={`subhesder ${classes.normalfonts}`}>{props.cartFilters.tax_price}</Typography>
                ) : null}
                <Typography className={`subhesder ${classes.normalfonts}`}>{props.shipping_charge} </Typography>
                <Typography className={`subhesder-totsl-size ${classes.normalfonts}`}>
                  {props.cartFilters.discounted_amount
                    ? Math.round(props.cartFilters.discounted_amount)
                    : Math.round(dataCard1 - discounted_price)}
                </Typography>
              </Grid>
            </Grid>
            {/* // )}  */}
          </Grid>
        </Grid>
        <Grid container>
          {path == "checkout" ? (
            ""
          ) : (
            <>
              <Grid xs={12}>
                <NavLink to="/jewellery">
                  <div className="btn-plain"> Continue shopping</div>
                </NavLink>
              </Grid>
            </>
          )}
          <Grid xs={12}>{this.checkoutbutton()}</Grid>
        </Grid>
      </div>
    );
  };
  componentDidMount() {
    let sku_id = this.props?.data[0]?.generatedSku;
    let params = {
      sku_id: sku_id,
      current_datetime: new Date(),
    };
    axios
      .post(`${API_URL}/getshippingdate`, params)
      .then((res) => {
        this.setState({ productShipBy: res?.data?.shipping_date });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const dataCarousel = {
      slidesToShow: 1,
      arrows: false,
    };
    var data = this.props.data;

    const { classes } = this.props;
    let path = window.location.pathname.split("/").pop();

    return (
      <Grid>
        <Hidden smDown>
          {window.location.pathname === "/cart" || window.location.pathname === "/checkout" ? (
            <Container>{this.row(this.props)}</Container>
          ) : (
            <>{this.row(this.props)}</>
          )}
        </Hidden>
        <Hidden mdUp>
          <CardSmallScreen
            data={this.props.data}
            handleDeleteLocalStorage={(event) => this.handleDeleteLocalStorage(event)}
            checkoutbutton={this.checkoutbutton()}
          />
          {this.subtotals(this.props)}
        </Hidden>
      </Grid>
    );
  }
}
const Components = (props) => {
  const [ShippingCharge, setShippingCharge] = React.useState(0);
  React.useEffect(() => {
    fetch(`${API_URL}/getshippingcharge`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: localStorage.getItem("cart_id"),
      method: "POST",
    })
      .then(async (response) => response.json())
      .then((val) => {
        if (val) setShippingCharge(val.shipping_charge);
      })
      .catch((err) => {
        console.log(err, ": in shipping charge API");
      });
  }, []);

  let {
    CartCtx: { cartFilters },
  } = React.useContext(CartContext);
  let content;

  content = (
    <Checkoutcard
      {...props}
      cartFilters={cartFilters}
      shipping_charge={ShippingCharge}
      isdatafromstate={props.isStateFilterContextQty}
    />
  );
  return content;
};
export default withStyles(styles)(Components);
