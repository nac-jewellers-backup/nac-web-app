import { Avatar, Box, Button, Grid, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import Buynowfixed from "components/SilverComponents/ProductDetail/buynowfixed";
import { CartContext } from "context";
import { ProductDetailContext } from "context/ProductDetailContext";
import { useCheckForCod } from "hooks/CheckForCodHook";
import PropTypes from "prop-types";
import { CheckForCod } from "queries/productdetail";
import React from "react";
import { withRouter } from "react-router";
import { API_URL } from "../../config";
import Buynowbutton from "../Buynow/buynowbutton";
import "./product-images.css";
import ProductPrice from "./productPrice";
import styles from "./style";
const inputsearch = (props, state, handleChanges, handleCodChange) => {
  const { data } = props;
  const { classes } = props;
  let { productShipBy } = state;
  let dateObj = "";
  let shipByDate = "";
  if (productShipBy) {
    dateObj = new Date(state.productShipBy);
    shipByDate = `Ships by ${dateObj.getUTCDate()} ${dateObj.toLocaleString(
      "default",
      {
        month: "long",
      }
    )} ${dateObj.getUTCFullYear()}`;
  }
  return (
    <div className={classes.searchCheck} style={{}}>
      {data[0]?.ProductContactNum?.map((val) => (
        <Grid container spacing={12}>
          <Grid item xs={7} md={4} lg={4} sm={7}>
            <input
              onkeyup="this.value=this.value.replace(/[^0-9]/g,'');"
              type="tel"
              placeholder="Enter Pincode"
              maxLength={6}
              className="pincode-cust buynow-search"
              value={state.values}
              onChange={(event) => {
                handleChanges(event);
              }}
              onKeyPress={(e) => {
                if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();
              }}
            />
          </Grid>
          <Grid
            item
            xs={5}
            lg={3}
            md={3}
            sm={5}
            style={{
              color: "#fff",
              boxShadow: "4px 5px 6px #BEBFBF ",
            }}
          >
            <Button
              style={{
                color: "#fff",
                boxShadow: "4px 5px 6px #BEBFBF !important",
              }}
              className={
                state.pincodeNotFound ||
                state.CheckForCodtitle === "COD Not Available"
                  ? "pincodeNotFound"
                  : state.CheckForCodtitle === "COD is Available"
                  ? "selectedGreen"
                  : "search-button"
              }
              onClick={() => {
                handleCodChange();
              }}
            >
              {state.pincodeNotFound ? (
                <>
                  <i
                    class="fa fa-close"
                    style={{ paddingRight: "3px" }}
                    aria-hidden="true"
                  ></i>{" "}
                  Pincode not found
                </>
              ) : state.CheckForCodtitle === "COD Not Available" ? (
                <>
                  <i
                    class="fa fa-close"
                    style={{ paddingRight: "3px" }}
                    aria-hidden="true"
                  ></i>{" "}
                  COD Not Available
                </>
              ) : state.CheckForCodtitle === "COD is Available" ? (
                <>
                  <i
                    class="fa fa-check"
                    style={{ paddingRight: "3px" }}
                    aria-hidden="true"
                  ></i>
                  {state.CheckForCodtitle}
                </>
              ) : (
                state.CheckForCodtitle.toUpperCase()
              )}
            </Button>
          </Grid>

          <Hidden smDown>
            <Grid
              container
              item
              justify="center"
              xs={12}
              sm={12}
              lg={5}
              md={5}
              className="content"
            >
              <b className={`ships-by ${classes.normalfonts}`}>
                <span
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    display: "flex",
                    alignContent: "center",
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  <i style={{ fontSize: "20px" }} class="fa fa-truck"></i>
                  &nbsp;&nbsp;{shipByDate}
                </span>
              </b>
            </Grid>
          </Hidden>
          {/* <label style={{ fontWeight: 'bold', color: 'rgba(185, 74, 72, 1)' }}>{(state.isRequired && 'Please fill out this field') || (state.pincodeNotFound && 'Pincode not found')}</label> */}
        </Grid>
      ))}
    </div>
  );
};

const Buydetails = (
  props,
  state,
  handleChanges,
  handleCodChange,
  canceldeletechecklist,
  deletechecklists,
  handleLocalStorage,
  deletechecklistsAddtoCart
) => {
  const { data } = props;
  const { classes } = props;
  const isactive = props?.data[0]?.isactive ?? "";
  return (
    <div>
      {data[0]?.ProductContactNum.map((val) => (
        <>
          <Grid container direction="column" spacing={12}>
            <Grid xs={12} md={5} lg={4} className={classes.buynowItem}>
              <div onClick={isactive ? deletechecklistsAddtoCart : ""}>
                {isactive ? (
                  <>
                    {" "}
                    <Buynowbutton
                      sku={data[0].skuId}
                      class={`buynow-button ${classes.AddtoCartbuttons}`}
                      button="buynow-btn-cont"
                      id="silverButton"
                      withoutBag={true}
                      addtoCartToBuyNow={true}
                      productIsActive={isactive ?? ""}
                      // onClick={}
                      // handleSuccess={deletechecklists}
                      onClick={isactive ? handleLocalStorage.bind(this) : ""}
                    />{" "}
                  </>
                ) : (
                  ""
                )}
              </div>
            </Grid>
            <Grid xs={12} md={5} lg={4} className={classes.buynowItem}>
              <div onClick={isactive ? deletechecklists : ""}>
                <Buynowbutton
                  sku={data[0].skuId}
                  class={`buynow-button ${classes.buttons}`}
                  button="buynow-btn-cont"
                  id="silverButton"
                  withoutBag={true}
                  productIsActive={isactive ?? ""}
                  // onClick={}
                  // handleSuccess={deletechecklists}
                  onClick={isactive ? handleLocalStorage.bind(this) : ""}
                />
              </div>
            </Grid>

            {/* <Grid item container alignContent="center" alignItems="center" xs={12} lg={8} style={{ padding: "0px 0px 0px 25px" }}>
                            <Grid>
                                <Grid item lg={12} xs={12} className={`buy-subheaders nd-hlp ${classes.normalfonts}`}>Need Help ?</Grid>
                            </Grid>
                            <Grid container >

                                <Grid item className={`buy-subheaders ${classes.normalfonts}`}>
                                    <Typography>
                                        <i class="fa fa-phone overall-icons" aria-hidden="true"></i>&nbsp;
                                    </Typography>
                                    <Typography className={classes.TypoListed}>
                                        {val.telephone}
                                    </Typography>
                                </Grid>

                                <Grid item className={`buy-subheaders ${classes.normalfonts}`}>
                                    <Typography>
                                        <i class="fa fa-whatsapp overall-icons" aria-hidden="true"></i>&nbsp;
                                </Typography>
                                    <Typography className={classes.TypoListed}>
                                        {val.phonenum}
                                    </Typography>
                                </Grid>

                                <Grid item style={{ cursor: "pointer !important" }} className={`buy-subheaders ${classes.normalfonts}`}>
                                    <Typography>
                                        <i class="fa fa-comments-o overall-icons" aria-hidden="true"></i>&nbsp;
                                    </Typography>
                                    <Typography className={classes.TypoListed}>
                                        {val.chat}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid> */}
          </Grid>
          {inputsearch(props, state, handleChanges, handleCodChange)}
        </>
      ))}
    </div>
  );
};

const PriceBuynow = (props) => {
  const {
    loading,
    error,
    data: CodData,
    makeRequestCod,
  } = useCheckForCod(CheckForCod, () => {}, {});
  const { ProductDetailCtx, setFilters } =
    React.useContext(ProductDetailContext);
  const { setCartFilters } = React.useContext(CartContext);

  return (
    <Component
      setCartFilters={setCartFilters}
      setFilters={setFilters}
      filters={ProductDetailCtx.filters}
      makeRequestCod={makeRequestCod}
      CodData={CodData}
      {...props}
    />
  );
};

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showimage:
        this.props &&
        this.props.data &&
        this.props.data.length > 0 &&
        this.props.data[0] &&
        this.props.data[0].fadeImages &&
        this.props.data[0].fadeImages.arrOfurls &&
        this.props.data[0].fadeImages.arrOfurls.length > 0 &&
        this.props.data[0].fadeImages.arrOfurls[0]
          ? this.props.data[0].fadeImages.arrOfurls[0]
          : [],
      open: false,
      values: "",
      pincodeValues: {},
      isShowDetailTab: 1,
      CheckForCodtitle: "Check for COD",
      isRequired: false,
      pincodeNotFound: false,
      modelOpen: false,
      productShipBy: "",
      ringSize:
        this.props &&
        this.props.data &&
        this.props.data[0] &&
        this.props.data[0].productsDetails &&
        this.props.data[0].productsDetails[0].namedetail &&
        this.props.data[0].productsDetails[0].namedetail[3] &&
        this.props.data[0].productsDetails[0].namedetail[3].details,
    };
  }
  valus = (valueId) => {
    var valus_locl = localStorage.getItem("cartDetails")
      ? JSON.parse(localStorage.getItem("cartDetails")).products
      : "";

    var vals;
    valus_locl &&
      valus_locl.map((val) => {
        const vlx = valueId && valueId;
        if (vlx === val.sku_id) {
          vals = 1;
          return false;
        } else {
          vals = 0;
        }
      });
    return vals;
  };
  componentDidMount() {
    let sku_id = this.props?.data[0]?.skuId;

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
        alert("error");
      });
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    var variab = {};
    variab["pincode"] = this.state.values;
    if (prevProps.CodData !== this.props.CodData) {
      // Here i have handeled the "check for COD" condition because the response is not setting to the props instantly
      if (this.props.CodData.data.allPincodeMasters.nodes.length > 0) {
        if (
          this.props.data[0].price >
          this.props.CodData.data.allPincodeMasters.nodes[0].maxCartvalue
        ) {
          this.setState({ CheckForCodtitle: "COD Not Available" });
        } else {
          this.setState({ CheckForCodtitle: "COD is Available" });
        }
      } else {
        this.setState({ pincodeNotFound: true });
      }
    }
  }

  openModel = () => {
    this.props.setCartFilters({
      skuId: this.props.data[0].skuId,
      qty: 1,
      price: this.props.data[0].offerPrice,
    });
    sessionStorage.setItem(
      "updatedProduct",
      JSON.stringify({
        skuId: this.props.data[0].skuId,
        qty: 1,
        price: this.props.data[0].offerPrice,
      })
    );
    //window.location.pathname = "/cart";
  };

  handleLocalStorage = () => {
    if (this.valus(this.props.data[0].skuId) === 1) {
      this.props.setCartFilters({
        skuId: this.props.data[0].skuId,
        qty: 1,
        price: this.props.data[0].offerPrice,
      });
      sessionStorage.setItem(
        "updatedProduct",
        JSON.stringify({
          sku_id: this.props.data[0].skuId,
          qty: 1,
          price: this.props.data[0].offerPrice,
        })
      );
      //window.location.pathname = "/cart";
    } else {
      this.setState({
        modelOpen: true,
      });
    }
  };

  canceldeletechecklist = () => {
    this.setState({
      modelOpen: false,
    });
  };

  deletechecklists = () => {
    this.props.setCartFilters({
      skuId: this.props.data[0].skuId,
      qty:
        this.props.quantity &&
        this.props.data &&
        this.props.quantity[this.props.data[0].skuId]
          ? this.props.quantity[this.props.data[0].skuId]
          : 1,
      price: this.props.data[0].offerPrice,
    });

    const _qty =
      this.props.quantity &&
      this.props.data &&
      this.props.quantity[this.props.data[0].skuId]
        ? this.props.quantity[this.props.data[0].skuId]
        : 1;
    this.props.setFilters({
      ...this.props.filters,
      quantity: _qty,
    });
    let localStorageQuantity = localStorage.getItem("quantity")
      ? JSON.parse(localStorage.getItem("quantity"))
      : null;
    if (!localStorageQuantity) {
      if (
        localStorageQuantity &&
        !localStorageQuantity[this.props.data[0].skuId]
      ) {
        let _obj = {};
        localStorageQuantity[this.props.data[0].skuId] = _qty;
        localStorage.setItem("quantity", JSON.stringify(localStorageQuantity));
        this.props.filters.quantity[this.props.data[0].skuId] = _qty;
      } else {
        let _obj = {};

        _obj[this.props.data[0].skuId] = _qty;
        localStorage.setItem("quantity", JSON.stringify(_obj));
        if (this.props.filters.quantity) {
          this.props.filters.quantity[this.props.data[0].skuId] = _qty ?? "";
        }
        // this.props && this.props.filters &&
      }
    } else {
      localStorageQuantity[this.props.data[0].skuId] = _qty;
      localStorage.setItem("quantity", JSON.stringify(localStorageQuantity));
      this.props.filters.quantity[this.props?.data[0]?.skuId] =
        localStorageQuantity[this.props?.data[0]?.skuId];
    }

    sessionStorage.setItem(
      "updatedProduct",
      JSON.stringify({
        sku_id: this.props.data[0].skuId,
        qty:
          this.props.quantity &&
          this.props.data &&
          this.props.quantity[this.props.data[0].skuId]
            ? this.props.quantity[this.props.data[0].skuId]
            : 1,
        price: this.props.data[0].offerPrice,
      })
    );

    window.location.pathname = "/cart";

    this.setState({
      modelOpen: false,
    });
  };
  deletechecklistsAddtoCart = () => {
    this.props.setCartFilters({
      skuId: this.props.data[0].skuId,
      qty:
        this.props.quantity &&
        this.props.data &&
        this.props.quantity[this.props.data[0].skuId]
          ? this.props.quantity[this.props.data[0].skuId]
          : 1,
      price: this.props.data[0].offerPrice,
    });

    const _qty =
      this.props.quantity &&
      this.props.data &&
      this.props.quantity[this.props.data[0].skuId]
        ? this.props.quantity[this.props.data[0].skuId]
        : 1;
    this.props.setFilters({
      ...this.props.filters,
      quantity: _qty,
    });
    let localStorageQuantity = localStorage.getItem("quantity")
      ? JSON.parse(localStorage.getItem("quantity"))
      : null;
    if (!localStorageQuantity) {
      if (
        localStorageQuantity &&
        !localStorageQuantity[this.props.data[0].skuId]
      ) {
        let _obj = {};
        localStorageQuantity[this.props.data[0].skuId] = _qty;
        localStorage.setItem("quantity", JSON.stringify(localStorageQuantity));
        this.props.filters.quantity[this.props.data[0].skuId] = _qty;
      } else {
        let _obj = {};

        _obj[this.props.data[0].skuId] = _qty;
        localStorage.setItem("quantity", JSON.stringify(_obj));
        if (this.props.filters.quantity) {
          this.props.filters.quantity[this.props.data[0].skuId] = _qty ?? "";
        }
        // this.props && this.props.filters &&
      }
    } else {
      localStorageQuantity[this.props.data[0].skuId] = _qty;
      localStorage.setItem("quantity", JSON.stringify(localStorageQuantity));
      this.props.filters.quantity[this.props?.data[0]?.skuId] =
        localStorageQuantity[this.props?.data[0]?.skuId];
    }

    sessionStorage.setItem(
      "updatedProduct",
      JSON.stringify({
        sku_id: this.props.data[0].skuId,
        qty:
          this.props.quantity &&
          this.props.data &&
          this.props.quantity[this.props.data[0].skuId]
            ? this.props.quantity[this.props.data[0].skuId]
            : 1,
        price: this.props.data[0].offerPrice,
      })
    );
    {
      alert("Added to cart!");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }

    this.setState({
      modelOpen: false,
    });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleChanges = (e) => {
    this.setState({
      values: e.target.value,
      CheckForCodtitle: "Check for COD",
      pincodeNotFound: false,
      isRequired: false,
    });
  };
  handleCodChange = () => {
    if (this.state.values) {
      this.setState({ isRequired: false });
      var variab = {};
      variab["pincode"] = this.state.values;
      if (
        Object.entries(variab).length !== 0 &&
        variab.constructor === Object
      ) {
        this.props.makeRequestCod(variab);
      } else {
        return {};
      }
    } else {
      this.setState({ isRequired: true });
    }
  };
  render() {
    let { showimage } = this.state;
    const { classes, data } = this.props;
    const isactive = this.props?.data[0]?.isactive ?? "";
    return (
      <div>
        <Hidden smDown>
          {Buydetails(
            this.props,
            this.state,
            this.handleChanges,
            this.handleCodChange,
            this.canceldeletechecklist,
            this.deletechecklists,
            this.handleLocalStorage,
            this.deletechecklistsAddtoCart
          )}
        </Hidden>

        <Hidden mdUp>
          <div style={{ marginTop: "25px" }}>
            <Grid container style={{ marginTop: "40x" }}>
              <Grid item xs={12}>
                <ProductPrice
                  data={this.props.data}
                  wishlist={this.props.wishlist}
                  pdpage={true}
                />
                <br />
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-around"
                >
                  {this.props &&
                    this.props.data &&
                    this.props.data.length > 0 &&
                    this.props.data[0] &&
                    this.props.data[0].productsDetails.length > 0 &&
                    this.props.data[0].productsDetails[0] &&
                    this.props.data[0].productsDetails[0].namedetail.length >
                      0 &&
                    this.props.data[0].productsDetails[0].namedetail[2] &&
                    this.props.data[0].productsDetails[0].namedetail[2]
                      .details && (
                      <Box padding="10px" textAlign="center">
                        <Avatar alt="NAC" style={{ padding: "10px" }}>
                          <img
                            src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+1015.svg"
                            alt="matel weight"
                            height="70px"
                          />
                        </Avatar>

                        <p
                          style={{
                            fontSize: 12,
                            color: "gray",
                          }}
                        >
                          Metal Weight
                          <br />
                          {this?.props?.data[0]?.Dimondweight ?? ""}gm
                        </p>
                      </Box>
                    )}

                  {this.props &&
                    this.props.data &&
                    this.props.data.length > 0 &&
                    this.props.data[0] &&
                    this.props.data[0].productsDetails.length > 0 &&
                    this.props.data[0].productsDetails[0] &&
                    this.props.data[0].productsDetails[0].namedetail.length >
                      0 &&
                    this.props.data[0].productsDetails[0].namedetail[1] &&
                    this.props.data[0].productsDetails[0].namedetail[1]
                      .details && (
                      <Box padding="10px" textAlign="center">
                        <Avatar alt="NAC" style={{ padding: "10px" }}>
                          <img
                            src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+1019.svg"
                            alt=" Metal Purity"
                            height="70px"
                          />
                        </Avatar>

                        <p
                          style={{
                            fontSize: 12,
                            color: "gray",
                          }}
                        >
                          Metal Purity
                          <br />
                          {this.props.data[0].productsDetails[0].namedetail[1]
                            .details ?? ""}
                        </p>
                      </Box>
                    )}
                  {this?.props?.data[0]?.dimondweight !== null ? (
                    <Box padding="10px" textAlign="center">
                      <Avatar alt="NAC" style={{ padding: "10px" }}>
                        <img
                          src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+1022.svg"
                          alt="Diamond Weight"
                          height="70px"
                        />
                      </Avatar>
                      <p
                        style={{
                          fontSize: 12,
                          color: "gray",
                        }}
                      >
                        Diamond Weight
                        <br />
                        {this?.props?.data[0]?.dimondweight ?? ""}&nbsp;Carat
                      </p>
                    </Box>
                  ) : (
                    ""
                  )}
                </Box>
              </Grid>
            </Grid>

            {/* <PriceTabs data={this.props.data} wishlist={this.props.wishlist} /> */}
            {inputsearch(
              this.props,
              this.state,
              this.handleChanges,
              this.handleCodChange
            )}
            <Buynowfixed
              deleteComment={this.deletechecklists}
              addtoCartToBuyNow={this.deletechecklistsAddtoCart}
              data={this.props.data}
              onClick={this.handleLocalStorage.bind(this)}
              productIsActive={isactive ?? ""}
            />
          </div>
        </Hidden>
      </div>
    );
  }
}
PriceBuynow.propTypes = {
  Buydetails: PropTypes.func,
};

export default withStyles(styles)(withRouter(PriceBuynow));
