import { Box, Button, Grid, Hidden, MenuItem, Select } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionActions from "@material-ui/core/AccordionActions";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import { CartContext } from "context";
import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { IoPricetagsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { API_URL } from "../../config";
import ProductList from "../../screens/Checkout/orderSummary/promocode";
import Buynowbutton from "../Buynow/buynowbutton";
import Pricing from "../Pricing/index";
import "./Cart.css";
import styles from "./style";
import WishlistButton from "./Wishlistadd";
class Checkoutcard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: true,
      shipby_arr: [],
      expanded: false,
      open: true,
      expend: true,
      quantity: [],
      userid: " ",
      productid: " ",
      generatedSku: " ",
    };
  }

  async componentDidMount() {
    let skuId_arr = this.props?.data;
    let shipby_arr_object = [];
    let quantityArr = [];
    for (var i = 0; i < skuId_arr.length; i++) {
      let params = {
        sku_id: skuId_arr[i]?.generatedSku,
        current_datetime: new Date(),
      };
      await axios.post(`${API_URL}/getshippingdate`, params).then((res) => {
        let productShipBy = res?.data?.shipping_date;
        let dateObj = "";
        let shipByDate = "";
        if (productShipBy) {
          dateObj = new Date(productShipBy);
          shipByDate = `Ships by ${dateObj.getUTCDate()} ${dateObj.toLocaleString(
            "default",
            {
              month: "long",
            }
          )} ${dateObj.getUTCFullYear()}`;
        }

        shipby_arr_object.push({
          shipby: shipByDate,
          skuId: skuId_arr[i]?.generatedSku,
        });
      });
      this.setState({
        ...this.state.shipby_arr,
        shipby_arr: shipby_arr_object,
      });
    }
    let local_storage = JSON.parse(localStorage.getItem("quantity"));

    this.props.data.map((data, index) => {
      let QtyArr = [];
      for (let i = 1; i <= this.props.data[index].maxOrderQty; i++) {
        QtyArr.push(i);
      }
      quantityArr.push({
        generateSku: data.generatedSku,
        Qty: local_storage[data.generatedSku] ?? 1,
        QtyArr: QtyArr,
      });
    });

    this.setState({
      ...this.state.quantity,
      quantity: quantityArr,
    });
  }

  handleCartQuantity = (skuId) => {
    const filters =
      this.props.filters &&
      this.props.filters.quantity &&
      Object.keys(this.props.filters.quantity).length > 0
        ? true
        : false;
    if (filters) return this.props.filters.quantity[skuId];
    else return JSON.parse(localStorage.getItem("quantity"))[skuId];
  };
  handleDeleteLocalStorage = (e) => {
    var local_storage = JSON.parse(localStorage.getItem("cartDetails"));

    var _localStorageQuantity = JSON.parse(localStorage.getItem("quantity"));

    // var currentValue = e.target.id
    var currentValue =
      e.target.id && e.target.id.length > 0 ? e.target.id : e.currentTarget.id;

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

          var cartId = JSON.parse(localStorage.getItem("cartDetails")).cart_id;
          var userId = JSON.parse(localStorage.getItem("cartDetails")).user_id;
          var localstorage = JSON.stringify({
            cart_id: `${cartId}`,
            user_id: `${userId}`,
            products: a,
          });
          delete _localStorageQuantity[currentValue];
          localStorage.setItem(
            "quantity",
            JSON.stringify(_localStorageQuantity)
          );
          localStorage.setItem("cartDetails", localstorage);
          window.location.reload();
        });
    } else {
      var _products = JSON.parse(
        localStorage.getItem("cartDetails")
      ).products.filter((val) => {
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
    }
    var redirect_url;
    redirect_url = data.map(
      (val) =>
        "/jewellery" +
        "/" +
        val.productType +
        "/" +
        val.materialName +
        "/" +
        val.prdheader +
        "/" +
        val.generatedSku
    );
    return alert(JSON.stringify(redirect_url));
  };
  onChangeQuantity = (e, skuId, index) => {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.quantity[index].Qty = e.target.value;
    this.setState(stateCopy);

    let local_storage = JSON.parse(localStorage.getItem("quantity"));

    local_storage[skuId] = e.target.value;
    localStorage.setItem("quantity", JSON.stringify(local_storage));
  };
  row = (props) => {
    const dataCarousel = {
      slidesToShow: 1,
      arrows: false,
    };
    const handleChange = (panel) => (event, isExpanded) => {
      this.setState({
        expanded: isExpanded ? panel : false,
      });
    };

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

    const { expand } = this.state;
    return (
      <div style={{ marginTop: "10px" }}>
        {this.props.checkoutpage ? (
          <>
            <Grid container direction="row">
              <Hidden smDown>
                <Grid item xs={12}>
                  {this.props.data.map((dataval) =>
                    dataval.productsDetails.map((val) => (
                      <div
                        style={{
                          outline: "none",
                        }}
                        className={classes.cart}
                      >
                        <Grid
                          container
                          spacing={12}
                          xs={12}
                          className={classes.cardpad}
                          style={{
                            borderBottom: "1.3px solid #C1C1C1",
                          }}
                        >
                          <Grid
                            item
                            xs={3}
                            sm={3}
                            style={{
                              display: "flex",
                              alignContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <>
                              {window.location.pathname !== "/checkout" ? (
                                <NavLink
                                  to={dataval?.skuUrl}
                                  style={{ textDecoration: "none" }}
                                >
                                  <div
                                    style={{
                                      border: "1px solid #D2D3D4",
                                      display: "inline-block",
                                    }}
                                  >
                                    <img
                                      style={{
                                        objectFit: "contain",
                                      }}
                                      alt="img"
                                      src={dataval?.fadeImages[0]?.imageUrl}
                                    ></img>
                                  </div>
                                </NavLink>
                              ) : (
                                <div
                                  style={{
                                    border: "1px solid #D2D3D4",
                                    display: "inline-block",
                                  }}
                                  className={classes.cardimg}
                                >
                                  <img
                                    style={{
                                      objectFit: "contain",
                                    }}
                                    alt="img"
                                    height="100%"
                                    width="100%"
                                    src={dataval?.fadeImages[0]?.imageUrl}
                                  ></img>
                                </div>
                              )}
                            </>
                          </Grid>
                          <Grid item xs={5} sm={7} style={{ padding: "13px" }}>
                            {window.location.pathname !== "/checkout" ? (
                              <NavLink
                                to={dataval.skuUrl}
                                style={{ textDecoration: "none" }}
                              >
                                <span
                                  style={{
                                    color: "gray",
                                    textTransform: "capitalize",
                                   
                                  }}
                                >
                                  {val.pro_header}
                                </span>
                              </NavLink>
                            ) : (
                              <span
                                style={{
                                  color: "gray",
                                  textTransform: "capitalize",
                                }}
                                className={classes.cardtitle}
                              >
                                {val.pro_header}
                              </span>
                            )}
                            <Grid container spacing={12}>
                              <Grid item xs={12}>
                                <div>
                                  {this.state.shipby_arr.map((val) => (
                                    <>
                                      {val.skuId === dataval.generatedSku ? (
                                        <Typography
                                          className={classes.cardtitle}
                                        >
                                          {val.shipby}
                                        </Typography>
                                      ) : (
                                        ""
                                      )}
                                    </>
                                  ))}
                                </div>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4} sm={2} lg={1}>
                            {window.location.pathname == "/checkout" ? (
                              <div>
                                <br />

                                {dataval.dataCard1.map((val) => {
                                  return (
                                    <>
                                      <Pricing
                                        detail={dataval}
                                        offerDiscount={
                                          val.discount
                                            ? `${val.discount}% - OFF`
                                            : null
                                        }
                                        price={
                                          val.offerPrice *
                                          (JSON.parse(
                                            localStorage.getItem("quantity")
                                          )[val.generatedSku] ?? 1)
                                        }
                                        offerPrice={
                                          val.price *
                                          (JSON.parse(
                                            localStorage.getItem("quantity")
                                          )[val.generatedSku] ?? 1)
                                        }
                                        checkoutpage={true}
                                        quantity={this.state.quantity}
                                      ></Pricing>
                                    </>
                                  );
                                })}
                              </div>
                            ) : (
                              ""
                            )}
                          </Grid>
                        </Grid>
                      </div>
                    ))
                  )}
                </Grid>
                <Grid item xs={12}>
                  {this.subtotalsCheckout(props)}
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Accordion
                  defaultExpanded
                  elevation={3}
                  style={{
                    border: "0px",
                    outline: "0px",
                    borderRadius: "0px",
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <div>
                      <Typography className={classes.cartheader} noWrap>
                        Hide order summery :{this.subtotalsHead(this.props)}
                      </Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container>
                      <Grid item xs={12}>
                        {this.props.data.map((dataval) =>
                          dataval.productsDetails.map((val) => (
                            <div
                              style={{
                                outline: "none",
                              }}
                              className={classes.cart}
                            >
                              <Grid
                                container
                                spacing={12}
                                xs={12}
                                className={classes.cardpad}
                                style={{
                                  borderBottom: "1.3px solid #C1C1C1",
                                }}
                              >
                                <Grid
                                  item
                                  xs={3}
                                  style={{
                                    display: "flex",
                                    alignContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <>
                                    {window.location.pathname !==
                                    "/checkout" ? (
                                      <NavLink
                                        to={dataval?.skuUrl}
                                        style={{ textDecoration: "none" }}
                                      >
                                        <img
                                          style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                          }}
                                          alt="img"
                                          src={dataval?.fadeImages[0]?.imageUrl}
                                        ></img>
                                      </NavLink>
                                    ) : (
                                      <img
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          objectFit: "contain",
                                        }}
                                        alt="img"
                                        src={dataval?.fadeImages[0]?.imageUrl}
                                        className={classes.cardimg}
                                      ></img>
                                    )}
                                  </>
                                </Grid>
                                <Grid
                                  item
                                  xs={6}
                                  sm={6}
                                  style={{ padding: "12px" }}
                                >
                                  {window.location.pathname !== "/checkout" ? (
                                    <NavLink
                                      to={dataval.skuUrl}
                                      style={{ textDecoration: "none" }}
                                    >
                                      <span
                                        style={{
                                          color: "gray",
                                          textTransform: "capitalize",
                                        }}
                                      >
                                        {val.pro_header}
                                      </span>
                                    </NavLink>
                                  ) : (
                                    <span
                                      style={{
                                        color: "gray",
                                        textTransform: "capitalize",
                                      }}
                                      className={classes.cardtitle}
                                    >
                                      {val.pro_header}
                                    </span>
                                  )}
                                  <Grid container spacing={12}>
                                    <Grid item xs={12}>
                                      <div>
                                        {this.state.shipby_arr.map((val) => (
                                          <>
                                            {val.skuId ===
                                            dataval.generatedSku ? (
                                              <Typography
                                                className={classes.cardtitle}
                                              >
                                                {val.shipby}
                                              </Typography>
                                            ) : (
                                              ""
                                            )}
                                          </>
                                        ))}
                                      </div>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid item xs={3} sm={3} lg={3}>
                                  {window.location.pathname == "/checkout" ? (
                                    <div>
                                      <br />

                                      {dataval.dataCard1.map((val) => {
                                        return (
                                          <>
                                            <Pricing
                                              detail={dataval}
                                              offerDiscount={
                                                val.discount
                                                  ? `${val.discount}% - OFF`
                                                  : null
                                              }
                                              price={
                                                val.offerPrice *
                                                (JSON.parse(
                                                  localStorage.getItem(
                                                    "quantity"
                                                  )
                                                )[val.generatedSku] ?? 1)
                                              }
                                              offerPrice={
                                                val.price *
                                                (JSON.parse(
                                                  localStorage.getItem(
                                                    "quantity"
                                                  )
                                                )[val.generatedSku] ?? 1)
                                              }
                                              checkoutpage={true}
                                              quantity={this.state.quantity}
                                            ></Pricing>
                                          </>
                                        );
                                      })}
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </Grid>
                              </Grid>
                            </div>
                          ))
                        )}
                      </Grid>
                      <Grid item xs={12}>
                        {this.subtotalsCheckout(props)}
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                  <AccordionActions></AccordionActions>
                </Accordion>
              </Hidden>
            </Grid>
          </>
        ) : (
          <>
            <Grid container direction="row">
              <Grid item xs={12} lg={6}>
                <div
                  className={
                    window.location.pathname !== "/account-shoppingcart"
                      ? classes.padding1
                      : classes.padding1acc
                  }
                >
                  <Grid container direction="row">
                    <Grid item xs={12}>
                      <Hidden smDown>
                        <br />
                        <br />
                      </Hidden>

                      <Box display="flex" flexDirection="row">
                        <Box>
                          <img
                            className={classes.img}
                            src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+160.svg"
                            alt="title images"
                          />
                        </Box>
                        <Box className={classes.title}>SHOPPING CART</Box>
                        <Box>
                          <img
                            className={classes.img}
                            src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+159.svg"
                            alt="title images"
                          />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                  <div
                    style={{
                      borderBottom: "1.3px solid #C1C1C1",
                      paddingBottom: "6px",
                      marginTop: "20px",
                    }}
                  >
                    <Typography className={classes.cartheader} noWrap>
                      Total({this.props.data.length}&nbsp;Items)&nbsp;:&nbsp;
                      {this.subtotalsHead(this.props)}
                    </Typography>
                  </div>
                  {this.props.data.map((dataval, index) =>
                    dataval.productsDetails.map((val) => (
                      <div
                        style={{
                          outline: "none",
                        }}
                        className={classes.cart}
                      >
                        {window.location.pathname == "/account-shoppingcart" ? (
                          <Grid
                            container
                            spacing={12}
                            xs={12}
                            style={{
                              borderBottom: "1.3px solid #C1C1C1",
                              paddingBottom: "10px",
                            }}
                          >
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
                                  <NavLink
                                    to={dataval?.skuUrl}
                                    style={{ textDecoration: "none" }}
                                  >
                                    <center>
                                      <div
                                        style={{
                                          border: "1px solid #D2D3D4",
                                        }}
                                      >
                                        <img
                                          style={{ width: "70%" }}
                                          src={dataval?.fadeImages[0]?.imageUrl}
                                        ></img>
                                      </div>
                                    </center>
                                  </NavLink>
                                ) : (
                                  <center>
                                    <div
                                      style={{
                                        border: "1px solid #D2D3D4",
                                      }}
                                    >
                                      <img
                                        style={{ width: "50%" }}
                                        src={dataval?.fadeImages[0]?.imageUrl}
                                      ></img>
                                    </div>
                                  </center>
                                )}
                              </>
                            </Grid>
                            <Grid
                              item
                              xs={5}
                              sm={7}
                              lg={9}
                              style={{ padding: "13px" }}
                            >
                              {window.location.pathname !== "/checkout" ? (
                                <NavLink
                                  to={dataval.skuUrl}
                                  style={{ textDecoration: "none" }}
                                >
                                  <span
                                    style={{
                                      color: "gray",
                                      textTransform: "capitalize",
                                     
                                    }}
                                  >
                                    {val.pro_header}
                                  </span>
                                </NavLink>
                              ) : (
                                <h3 className={`title ${classes.normalfonts2}`}>
                                  {val.pro_header}
                                </h3>
                              )}
                              <Grid
                                container
                                spacing={12}
                                style={
                                  {
                                    // marginTop: "15px",
                                  }
                                }
                              >
                                <Grid item xs={12}>
                                  <Grid container spacing={12}>
                                    <Grid container xs={12} direction="row">
                                      {dataval.maxOrderQty === 1 ? (
                                        <Grid container>
                                          <Grid item xs={5}>
                                            <Typography
                                              className={`subhesder ${classes.normalfonts}`}
                                            >
                                              Quantity :
                                            </Typography>
                                          </Grid>
                                          <Grid item xs={7}>
                                            <Typography
                                              className={`subhesder ${classes.normalfonts}`}
                                            >
                                              {dataval.maxOrderQty}
                                            </Typography>
                                          </Grid>
                                        </Grid>
                                      ) : (
                                        <>
                                          <Grid item>
                                            <Typography
                                              className={`subhesder ${classes.normalfonts}`}
                                            >
                                              Quantity :
                                            </Typography>
                                          </Grid>
                                          <Grid item>
                                            <Select
                                              labelId="demo-simple-select-label"
                                              id="demo-simple-select"
                                              variant="standard"
                                              value={
                                                this?.state?.quantity[index]
                                                  ?.Qty ?? 1
                                              }
                                              onChange={(e) =>
                                                this.onChangeQuantity(
                                                  e,
                                                  this.state.quantity[index]
                                                    .generateSku,
                                                  index
                                                )
                                              }
                                              color="secondary"
                                            >
                                              {this?.state?.quantity[
                                                index
                                              ]?.QtyArr?.map((data) => (
                                                <MenuItem value={data}>
                                                  {data}
                                                </MenuItem>
                                              ))}
                                            </Select>
                                          </Grid>
                                        </>
                                      )}
                                    </Grid>
                                  </Grid>
                                  <div>
                                    {this.state.shipby_arr.map((val) => (
                                      <>
                                        {val.skuId === dataval.generatedSku ? (
                                          <Typography
                                            className={`subhesder ${classes.normalfonts}`}
                                          >
                                            {val.shipby}
                                          </Typography>
                                        ) : (
                                          ""
                                        )}
                                      </>
                                    ))}
                                    {dataval.dataCard1.map((val) => {
                                      return (
                                        <>
                                          <Pricing
                                            detail={dataval}
                                            offerDiscount={
                                              val.discount
                                                ? `${val.discount}% - OFF`
                                                : null
                                            }
                                            price={
                                              val.offerPrice *
                                              (JSON.parse(
                                                localStorage.getItem("quantity")
                                              )[val.generatedSku] ?? 1)
                                            }
                                            offerPrice={
                                              val.price *
                                              (JSON.parse(
                                                localStorage.getItem("quantity")
                                              )[val.generatedSku] ?? 1)
                                            }
                                            quantity={this.state.quantity}
                                          ></Pricing>
                                        </>
                                      );
                                    })}
                                  </div>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={4} sm={2} lg={12}>
                              <Grid container>
                                <Grid item xs={5}>
                                  {window.location.pathname !== "/checkout" ? (
                                    <div>
                                      <Button
                                        id={dataval.generatedSku}
                                        onClick={(event) =>
                                          this.handleDeleteLocalStorage(event)
                                        }
                                        variant="contained"
                                        style={{
                                          color: "gray",
                                          width: "96%",
                                          border: "2px solid #C1C1C1",
                                          backgroundColor: "white",
                                          borderRadius: "0px",
                                          boxShadow: "none",
                                          paddingRight: "40px",
                                          paddingLeft: "40px",
                                        }}
                                      >
                                        Remove
                                      </Button>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </Grid>
                                <Grid item xs={7}>
                                  {window.location.pathname !== "/checkout" ? (
                                    <div>
                                      <WishlistButton
                                        sku={dataval.generatedSku}
                                        productId={dataval.productId}
                                      />

                                      {/* 
                               {console.log(dataval.isActive)} */}
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
                          </Grid>
                        ) : (
                          <Grid
                            container
                            spacing={12}
                            xs={12}
                            style={{
                              borderBottom: "1.3px solid #C1C1C1",
                              padding: "8px",
                            }}
                          >
                            <Grid
                              item
                              xs={3}
                              sm={2}
                              style={{
                                display: "flex",
                                alignContent: "center",
                                alignItems: "center",
                                padding: "1px",
                              }}
                            >
                              <>
                                {window.location.pathname !== "/checkout" ? (
                                  <NavLink
                                    to={dataval?.skuUrl}
                                    style={{ textDecoration: "none" }}
                                  >
                                    <center>
                                      <div
                                        style={{
                                          border: "1px solid #D2D3D4",
                                        }}
                                      >
                                        <img
                                          style={{ width: "70%" }}
                                          src={dataval?.fadeImages[0]?.imageUrl}
                                        ></img>
                                      </div>
                                    </center>
                                  </NavLink>
                                ) : (
                                  <center>
                                    <div
                                      style={{
                                        border: "1px solid #D2D3D4",
                                      }}
                                    >
                                      <img
                                        style={{ width: "50%" }}
                                        src={dataval?.fadeImages[0]?.imageUrl}
                                      ></img>
                                    </div>
                                  </center>
                                )}
                              </>
                            </Grid>
                            <Grid
                              item
                              xs={5}
                              sm={7}
                              lg={6}
                              style={{ padding: "13px" }}
                            >
                              {window.location.pathname !== "/checkout" ? (
                                <NavLink
                                  to={dataval.skuUrl}
                                  style={{ textDecoration: "none" }}
                                >
                                  <span
                                    style={{
                                      color: "gray",
                                      textTransform: "capitalize",
                                      fontSize:"21.1px"
                                    }}
                                  >
                                    {val.pro_header}
                                  </span>
                                </NavLink>
                              ) : (
                                <h3 className={`title ${classes.normalfonts}`}>
                                  {val.pro_header}
                                </h3>
                              )}
                              <Grid
                                container
                                spacing={12}
                                style={
                                  {
                                    // marginTop: "15px",
                                  }
                                }
                              >
                                <Grid item xs={12}>
                                  <Grid container spacing={12}>
                                    <Grid container xs={12} direction="row">
                                      {dataval.maxOrderQty === 1 ? (
                                        <Grid container>
                                          <Grid item xs={4}>
                                            <Typography
                                              className={`subhesder ${classes.normalfonts}`}
                                            >
                                              Quantity :
                                            </Typography>
                                          </Grid>
                                          <Grid item xs={7}>
                                            <Typography
                                              className={`subhesder ${classes.normalfonts}`}
                                            >
                                              {dataval.maxOrderQty}
                                            </Typography>
                                          </Grid>
                                        </Grid>
                                      ) : (
                                        <>
                                          <Grid item>
                                                <Typography
                                                  
                                              className={`subhesder ${classes.normalfonts}`}
                                            >
                                              Quantity :
                                            </Typography>
                                          </Grid>
                                          <Grid item>
                                            <Select
                                              labelId="demo-simple-select-label"
                                              id="demo-simple-select"
                                              variant="standard"
                                              value={
                                                this?.state?.quantity[index]
                                                  ?.Qty ?? 1
                                              }
                                              onChange={(e) =>
                                                this.onChangeQuantity(
                                                  e,
                                                  this.state.quantity[index]
                                                    .generateSku,
                                                  index
                                                )
                                              }
                                              color="secondary"
                                            >
                                              {this?.state?.quantity[
                                                index
                                              ]?.QtyArr?.map((data) => (
                                                <MenuItem value={data}>
                                                  {data}
                                                </MenuItem>
                                              ))}
                                            </Select>
                                          </Grid>
                                        </>
                                      )}
                                    </Grid>
                                  </Grid>
                                  <div>
                                    {this.state.shipby_arr.map((val) => (
                                      <>
                                        {val.skuId === dataval.generatedSku ? (
                                          <Typography
                                            className={`subhesder ${classes.normalfonts}`}
                                          >
                                            {val.shipby}
                                          </Typography>
                                        ) : (
                                          ""
                                        )}
                                      </>
                                    ))}
                                    {dataval.dataCard1.map((val) => {
                                      return (
                                        <>
                                          <Pricing
                                            detail={dataval}
                                            offerDiscount={
                                              val.discount
                                                ? `${val.discount}% - OFF`
                                                : null
                                            }
                                            price={
                                              val.offerPrice *
                                              (JSON.parse(
                                                localStorage.getItem("quantity")
                                              )[val.generatedSku] ?? 1)
                                            }
                                            offerPrice={
                                              val.price *
                                              (JSON.parse(
                                                localStorage.getItem("quantity")
                                              )[val.generatedSku] ?? 1)
                                            }
                                            quantity={this.state.quantity}
                                          ></Pricing>
                                        </>
                                      );
                                    })}
                                  </div>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item xs={4} sm={2} lg={4}>
                              {window.location.pathname !== "/checkout" ? (
                                <div>
                                  <br />

                                  <Button
                                    id={dataval.generatedSku}
                                    onClick={(event) =>
                                      this.handleDeleteLocalStorage(event)
                                    }
                                    variant="contained"
                                      style={{
                                        fontSize:"20.01px",
                                      color: "gray",
                                      width: "95%",
                                      border: "2px solid #C1C1C1",
                                      backgroundColor: "white",
                                      borderRadius: "0px",
                                      boxShadow: "none",
                                      paddingRight: "40px",
                                      paddingLeft: "40px",
                                    }}
                                  >
                                    Remove
                                  </Button>
                                  <WishlistButton
                                    sku={dataval.generatedSku}
                                    productId={dataval.productId}
                                  />

                                  {/* 
                                 {console.log(dataval.isActive)} */}
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
                        )}
                      </div>
                    ))
                  )}
                  <br />
                    <Button
                     style={{fontSize:"22.41px"}}
                    startIcon={<AiFillCaretLeft />}
                    className="backhomepagebtn"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/";
                    }}
                  >
                    Go back to Homepage
                  </Button>
                  <br />
                  <br />
                  <br />
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                lg={6}
                style={{
                  backgroundColor: "rgb(224, 225, 225)",
                  height: "100%",
                }}
              >
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    style={{
                      width:
                        window.location.pathname == "/cart" ? "50%" : "100%",
                      position:
                        window.location.pathname == "/cart"
                          ? "fixed"
                          : "relative",
                      backgroundColor: "rgb(224, 225, 225)",
                      zIndex: 999,
                    }}
                  >
                    <div
                      className={
                        window.location.pathname == "/account-shoppingcart"
                          ? " "
                          : classes.padding
                      }
                    >
                      <Hidden smDown>
                        <div className={classes.paddingCart1}>
                          <br />
                          <Grid container>
                            <Grid item xs={12}>
                              <div>{this.applycoupon()}</div>
                            </Grid>
                          </Grid>
                        </div>
                      </Hidden>
                      <div className={classes.paddingCart}>
                        {this.subtotals(props)}
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    );
  };
  rowsm = (props) => {
    const dataCarousel = {
      slidesToShow: 1,
      arrows: false,
    };
    const handleChange = (panel) => (event, isExpanded) => {
      this.setState({
        expanded: isExpanded ? panel : false,
      });
    };

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

    const { expand } = this.state;
    return (
      <div style={{ marginTop: "10px" }}>
        <>
          <Grid container direction="row">
            <Grid item xs={12}>
              <div className={classes.paddingsm}>
                <br />
                {window.location.pathname === "/cart" ? (
                  <Grid container direction="row">
                    <Grid item xs={12}>
                      <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="center"
                      >
                        <Box>
                          <img
                            className={classes.img}
                            src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+160.svg"
                            alt="title images"
                          />
                        </Box>
                        <Box className={classes.title}>SHOPPING CART</Box>
                        <Box>
                          <img
                            className={classes.img}
                            src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+159.svg"
                            alt="title images"
                          />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                ) : (
                  " "
                )}
                <div
                  style={{
                    borderBottom: "1.3px solid #C1C1C1",
                    paddingBottom: "6px",
                    marginTop: "10px",
                  }}
                >
                  <Typography className={classes.cartheader} noWrap>
                    Total({this.props.data.length}&nbsp;Items)&nbsp;:&nbsp;
                    {this.subtotalsHead(this.props)}
                  </Typography>
                </div>
                <br />
                {this.props.data.map((dataval, index) =>
                  dataval.productsDetails.map((val) => (
                    <div className={classes.cardmap}>
                      <Grid
                        container
                        spacing={3}
                        style={{
                          paddingTop: "20px",
                          paddingBottom: "20px",
                          borderBottom: "1px solid #C1C1C1",
                        }}
                      >
                        <Grid xs={4}>
                          {window.location.pathname !== "/checkout" ? (
                            <NavLink
                              to={dataval?.skuUrl}
                              style={{ textDecoration: "none" }}
                            >
                              <img
                                width="100%"
                                alt="images"
                                style={{
                                  border: "1px solid #D2D3D4",
                                  objectFit: "cover",
                                }}
                                src={dataval?.fadeImages[0]?.imageUrl}
                              ></img>
                            </NavLink>
                          ) : (
                            <img
                              width="100%"
                              alt="img"
                              style={{
                                border: "1px solid #D2D3D4",
                                objectFit: "cover",
                              }}
                              src={dataval?.fadeImages[0]?.imageUrl}
                            ></img>
                          )}
                        </Grid>
                        <Grid xs={8}>
                          <div className={classes.details}>
                            {window.location.pathname !== "/checkout" ? (
                              <NavLink
                                to={`jewellery/${dataval.productType}/${dataval.materialName[0]}/${val.pro_header}?skuId=${dataval.generatedSku}`}
                                style={{
                                  textDecoration: "none",
                                  textTransform: "capitalize",
                                }}
                              >
                                <span
                                  style={{
                                    color: "gray",
                                    fontSize: "0.9rem",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {val.pro_header}
                                </span>
                              </NavLink>
                            ) : (
                              <span
                                style={{
                                  color: "gray",
                                  fontSize: "0.9rem",
                                  textTransform: "capitalize",
                                }}
                              >
                                {val.pro_header}
                              </span>
                            )}

                            <Grid container style={{ marginTop: "4px" }}>
                              <Grid item xs={12} lg={6}>
                                {dataval.maxOrderQty === 1 ? (
                                  <Grid container>
                                    <Grid item xs={4}>
                                      <Typography
                                        className={`subhesder ${classes.normalfonts}`}
                                      >
                                        Quantity :
                                      </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                      <Typography
                                        className={`subhesder ${classes.normalfonts}`}
                                      >
                                        {dataval.maxOrderQty}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                ) : (
                                  <>
                                    <Grid container>
                                      <Grid item xs={4}>
                                        <Typography
                                          className={`subhesder ${classes.normalfonts}`}
                                        >
                                          Quantity :
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={4}>
                                        <Select
                                          style={{ marginBottom: "10px" }}
                                          labelId="demo-simple-select-label"
                                          id="demo-simple-select"
                                          variant="standard"
                                          value={
                                            this?.state?.quantity[index]?.Qty ??
                                            1
                                          }
                                          onChange={(e) =>
                                            this.onChangeQuantity(
                                              e,
                                              this.state.quantity[index]
                                                .generateSku,
                                              index
                                            )
                                          }
                                          color="secondary"
                                        >
                                          {this?.state?.quantity[
                                            index
                                          ]?.QtyArr?.map((data) => (
                                            <MenuItem value={data}>
                                              {data}
                                            </MenuItem>
                                          ))}
                                        </Select>
                                      </Grid>
                                    </Grid>
                                  </>
                                )}
                              </Grid>
                            </Grid>
                            {dataval.dataCard1.map((val) => (
                              <Pricing
                                detail={dataval}
                                offerDiscount={
                                  val.discount ? `${val.discount}% - OFF` : null
                                }
                                price={
                                  val.offerPrice *
                                  (JSON.parse(localStorage.getItem("quantity"))[
                                    val.generatedSku
                                  ] ?? 1)
                                }
                                offerPrice={
                                  val.price *
                                  (JSON.parse(localStorage.getItem("quantity"))[
                                    val.generatedSku
                                  ] ?? 1)
                                }
                                quantity={this.state.quantity}
                              ></Pricing>
                            ))}
                          </div>{" "}
                        </Grid>

                        <Grid container spacing={2}>
                          <Grid item xs={5} sm={6}>
                            <Button
                              id={dataval.generatedSku}
                              onClick={(event) =>
                                this.handleDeleteLocalStorage(event)
                              }
                              variant="contained"
                              style={{
                               
                                color: "gray",
                                border: "2px solid #C1C1C1",
                                backgroundColor: "white",
                                width: "100%",
                                borderRadius: "0px",
                                marginTop: "10px",
                                boxShadow: "none",
                                paddingRight: "24px",
                                paddingLeft: "24px",
                              }}
                            >
                              Remove
                            </Button>
                          </Grid>
                          <Grid item xs={7} sm={6}>
                            <WishlistButton
                              sku={dataval.generatedSku}
                              productId={dataval.productId}
                            />
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
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  ))
                )}
              </div>
            </Grid>
          </Grid>
        </>
      </div>
    );
  };
  applycoupon = (props) => {
    const { expanded } = this.state;
    const { classes } = this.props;
    return (
      <Accordion
        //defaultExpanded
        elevation={3}
        style={{
          border: "0px",
          outline: "0px",
          borderRadius: "0px",
        }}
      >
        <AccordionSummary
          expandIcon={
            expanded ? (
              <AiFillCaretLeft fontSize="18px" />
            ) : (
              <AiFillCaretRight fontSize="18px" />
            )
          }
        >
          <Hidden smDown>
          <Typography
            className={classes.cartheader}
            noWrap
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "21.1px",
            }}
          >
            <IoPricetagsOutline color="#2F348B" fontSize="18px" />
            &nbsp;&nbsp;&nbsp;<b>Apply Coupon</b>
            </Typography>
          </Hidden>
          <Hidden mdUp>
          <Typography
            className={classes.cartheader}
            noWrap
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "16px",
            }}
          >
            <IoPricetagsOutline color="#2F348B" fontSize="18px" />
            &nbsp;&nbsp;&nbsp;<b>Apply Coupon</b>
            </Typography>
            </Hidden>
        </AccordionSummary>
        <AccordionDetails>
          <ProductList />
        </AccordionDetails>
        <AccordionActions></AccordionActions>
      </Accordion>
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
                cartpage={true}
              />
            </div>
          </div>
        )}
      </div>
    );
  };
  subtotals = (props, quantity) => {
    var discounted_price = this.props.cartFilters.discounted_price
      ? this.props.cartFilters.discounted_price
      : "";
    const dataCard1 = this.props.data
      .map((val) => {
        return (
          val.dataCard1[0].offerPrice *
          (JSON.parse(localStorage.getItem("quantity"))[val.generatedSku] ?? 1)
        );
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
          _data.dataCard1[0].price *
            (JSON.parse(localStorage.getItem("quantity"))[_data.generatedSku] ??
              1) -
          _data.dataCard1[0].offerPrice *
            (JSON.parse(localStorage.getItem("quantity"))[_data.generatedSku] ??
              1)
        );
      })
      .reduce(myFunc);
    let path = window.location.pathname.split("/").pop();
    const { classes } = this.props;

    return (
      <div style={{ marginTop: "15px" }}>
        <Grid container spacing={12}>
          <Grid item xs={12}>
            <div
              style={{
                borderTop: "1.3px solid #C1C1C1",
                paddingBottom: "10px",
                paddingTop: "17px",
                marginTop: "25px",
                color: "gray",
                fontSize:"23px"
              }}
            >
              <b>Order Summery</b>
            </div>
            <Hidden mdUp>
              <div>
                <div>{this.applycoupon()}</div>
                <br />
              </div>
            </Hidden>
            <Grid container>
              <Grid xs={6}>
                <Typography className={`subhesder ${classes.normalfonts1}`}>
                  Subtotal
                </Typography>
                {yousave !== 0 || props.cartFilters.tax_price ? (
                  <Typography className={`subhesder ${classes.normalfonts1}`}>
                    You Saved
                  </Typography>
                ) : null}

                {props.cartFilters.tax_price ? (
                  <Typography className={`subhesder ${classes.normalfonts1}`}>
                    {props.cartFilters.coupon_type}
                  </Typography>
                ) : (
                  ""
                )}
                <Typography className={`subhesder ${classes.normalfonts1}`}>
                  Coupon Prize
                </Typography>
                <Typography className={`subhesder ${classes.normalfonts1}`}>
                  Delivery Charge
                  <br />
                  (Standred)
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography className={`subhesder ${classes.normalfonts1}`}>
                  <span style={{ float: "right" }}>
                    {props.cartFilters.gross_amount
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                          minimumFractionDigits: 0,
                        }).format(Math.round(props.cartFilters.gross_amount))
                      : new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                          minimumFractionDigits: 0,
                        }).format(Math.round(dataCard1))}
                  </span>
                </Typography>
                {yousave !== 0 || props.cartFilters.tax_price ? (
                  <Typography className={`subhesder ${classes.normalfonts1}`}>
                    <span style={{ float: "right" }}>
                      {props.cartFilters.tax_price
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            minimumFractionDigits: 0,
                          }).format(
                            Math.round(yousave + props.cartFilters.tax_price)
                          )
                        : new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            minimumFractionDigits: 0,
                          }).format(Math.round(yousave))}{" "}
                    </span>
                  </Typography>
                ) : null}

                {props.cartFilters.tax_price ? (
                  <Typography className={`subhesder ${classes.normalfonts1}`}>
                    <span style={{ float: "right" }}>
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0,
                      }).format(Math.round(props.cartFilters.tax_price))}
                    </span>
                  </Typography>
                ) : null}
                <Typography className={`subhesder ${classes.normalfonts1}`}>
                  <span style={{ float: "right" }}>
                    {props.shipping_charge ??
                      new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0,
                      }).format(Math.round(props.shipping_charge))}
                  </span>
                </Typography>
              </Grid>
            </Grid>
            <br />

            <Grid
              container
              style={{ borderTop: "1px solid #C1C1C1", padding: "10px" }}
            >
              <Grid xs={6}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    color: "#2F348A",
                  }}
                  className={classes.totalcost}
                >
                  TOTAL&nbsp;COST
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    color: "#2F348A",
                    float: "right",
                  }}
                  className={classes.totalcost}
                >
                  {props.cartFilters.discounted_amount
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0,
                      }).format(Math.round(props.cartFilters.discounted_amount))
                    : new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0,
                      }).format(Math.round(dataCard1 - discounted_price))}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container style={{ backgroundColor: "transparent" }}>
          {path == "checkout" ? (
            ""
          ) : (
            <>
              <Grid xs={12} style={{ backgroundColor: "transparent" }}>
                {/* <NavLink to="/jewellery">
                  <div className="btn-plain" style={{ backgroundColor: "transparent" }}>
                    {" "}
                    Continue shopping
                  </div>
                </NavLink> */}
              </Grid>
            </>
          )}
          <Grid xs={12}>{this.checkoutbutton()}</Grid>
        </Grid>
      </div>
    );
  };
  subtotalsCheckout = (props) => {
    var discounted_price = this.props.cartFilters.discounted_price
      ? this.props.cartFilters.discounted_price
      : "";
    const dataCard1 = this.props.data
      .map((val) => {
        return (
          val.dataCard1[0].offerPrice *
          (JSON.parse(localStorage.getItem("quantity"))[val.generatedSku] ?? 1)
        );
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
          _data.dataCard1[0].price *
            (JSON.parse(localStorage.getItem("quantity"))[_data.generatedSku] ??
              1) -
          _data.dataCard1[0].offerPrice *
            (JSON.parse(localStorage.getItem("quantity"))[_data.generatedSku] ??
              1)
        );
      })
      .reduce(myFunc);
    let path = window.location.pathname.split("/").pop();
    const { classes } = this.props;

    return (
      <div style={{ marginTop: "15px" }}>
        <Grid container spacing={12}>
          <Grid item xs={12}>
            <Grid container>
              <Grid xs={6}>
                <Typography className={`subhesder ${classes.normalfonts2}`}>
                  SUBTOTAL
                </Typography>
                <br />
                <br />
                {yousave !== 0 || props.cartFilters.tax_price ? (
                  <Typography className={`subhesder ${classes.normalfonts2}`}>
                    CART DISCOUNT
                  </Typography>
                ) : null}

                {props.cartFilters.tax_price ? (
                  <Typography className={`subhesder ${classes.normalfonts2}`}>
                    {props.cartFilters.coupon_type}
                  </Typography>
                ) : (
                  ""
                )}

                <Typography className={`subhesder ${classes.normalfonts2}`}>
                  SHIPPING CHARGES(Standred)
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography className={`subhesder ${classes.normalfonts2}`}>
                  <span style={{ float: "right" }}>
                    {props.cartFilters.gross_amount
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                          minimumFractionDigits: 0,
                        }).format(Math.round(props.cartFilters.gross_amount))
                      : new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                          minimumFractionDigits: 0,
                        }).format(Math.round(dataCard1))}
                  </span>
                </Typography>
                <br />
                <br />
                {yousave !== 0 || props.cartFilters.tax_price ? (
                  <Typography className={`subhesder ${classes.normalfonts2}`}>
                    <span style={{ float: "right" }}>
                      {props.cartFilters.tax_price
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            minimumFractionDigits: 0,
                          }).format(
                            Math.round(yousave + props.cartFilters.tax_price)
                          )
                        : new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            minimumFractionDigits: 0,
                          }).format(Math.round(yousave))}
                    </span>
                  </Typography>
                ) : null}

                {props.cartFilters.tax_price ? (
                  <Typography className={`subhesder ${classes.normalfonts2}`}>
                    <span style={{ float: "right" }}>
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0,
                      }).format(Math.round(props.cartFilters.tax_price))}
                    </span>
                  </Typography>
                ) : null}
                <Typography className={`subhesder ${classes.normalfonts2}`}>
                  <span style={{ float: "right" }}>
                    {props.shipping_charge ??
                      new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0,
                      }).format(Math.round(props.shipping_charge))}
                  </span>
                </Typography>
              </Grid>
            </Grid>
            <br />

            <Grid
              container
              style={{ borderTop: "1px solid #C1C1C1", padding: "10px" }}
            >
              <Grid xs={6}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    color: "#2F348A",
                  }}
                  className={classes.totalcost}
                >
                  TOTAL&nbsp;COST
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    color: "#2F348A",
                    float: "right",
                  }}
                  className={classes.totalcost}
                >
                  {props.cartFilters.discounted_amount
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0,
                      }).format(Math.round(props.cartFilters.discounted_amount))
                    : new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0,
                      }).format(Math.round(dataCard1 - discounted_price))}
                </Typography>
              </Grid>
            </Grid>
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
  subtotalsHead = (props) => {
    var discounted_price = this.props.cartFilters.discounted_price
      ? this.props.cartFilters.discounted_price
      : "";
    const dataCard1 = this.props.data
      .map((val) => {
        return (
          val.dataCard1[0].offerPrice *
          (JSON.parse(localStorage.getItem("quantity"))[val.generatedSku] ?? 1)
        );
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

    const { classes } = this.props;

    return (
      <>
        {new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
          minimumFractionDigits: 0,
        }).format(
          props.cartFilters.discounted_amount
            ? Math.round(props.cartFilters.discounted_amount)
            : Math.round(dataCard1 - discounted_price)
        )}
      </>
    );
  };
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
          {window.location.pathname === "/cart" ||
          window.location.pathname === "/checkout" ? (
            <>{this.row(this.props)}</>
          ) : (
            <>{this.row(this.props)}</>
          )}
        </Hidden>
        {window.location.pathname == "/checkout" ? (
          <Hidden mdUp>
            {window.location.pathname === "/cart" ||
            window.location.pathname === "/checkout" ? (
              <>{this.row(this.props)}</>
            ) : (
              <>{this.row(this.props)}</>
            )}
          </Hidden>
        ) : (
          <Hidden mdUp>
            {/* <CardSmallScreen
              data={this.props.data}
              handleDeleteLocalStorage={(event) =>
                this.handleDeleteLocalStorage(event)
              }
              checkoutbutton={this.checkoutbutton()}
              totalcost={this.subtotals}
              quantity={this.state.quantity}
              subtotaldata={this.props}
            /> */}
            {this.rowsm(this.props)}
            <div>{this.subtotals(this.props, this.state.quantity)}</div>
            <br />
            <Button
              startIcon={<AiFillCaretLeft />}
              className="apply-b"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/";
              }}
            >
              Go back to Homepage
            </Button>
            <br />
            <br />
          </Hidden>
        )}
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
      .catch((err) => {});
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
