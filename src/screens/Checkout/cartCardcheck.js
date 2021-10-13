import {
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Hidden,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Header from "components/SilverComponents/Header";
import { useCheckForCod } from "hooks/CheckForCodHook";
import { CheckForCod } from "queries/productdetail";
import React from "react";
import ReactPixel from "react-facebook-pixel";
import { withRouter } from "react-router-dom";
import "../../components/Checkout/Cart.css";
import CartCard from "../../components/Checkout/CartCard";
import { CartContext, ProductDetailContext } from "../../context";
import cart from "../../mappers/cart";
import styles from "../Checkout/loginRegister/style";
import Addressform from "./addressDetails/addressForm";
import "./chckout.css";
import LoginRegisterIndex from "./loginRegister";
import ProductList from "./orderSummary/productList";
import PaymentIndex from "./paymentOption/paymentindex";
// import NeedHelp from "components/needHelp";
var adres = {};
var variab = {};
const CartCardCheck = (props) => {
  const {
    loading,
    error,
    data: CodData,
    makeRequestCod,
  } = useCheckForCod(CheckForCod, () => {}, {});
  let {
    CartCtx: { setCartFilters },
  } = React.useContext(CartContext);
  return (
    <Component
      {...props}
      CodData={CodData}
      makeRequestCod={makeRequestCod}
      setCartFilters={setCartFilters}
      isdatafromstate={props.isdatafromstate}
    />
  );
};

var obj_values = {};
class Component extends React.Component {
  state = {
    expanded:
      "panel" +
      (localStorage.getItem("panel") ? localStorage.getItem("panel") : 1),
    // expanded: 'panel2',
    // expandedlimit: localStorage.getItem("panel") ? localStorage.getItem("panel") : 1,
    // expandedlimit: 1,
    mailId: null,
    adres_details: null,
    expand: false,
    show: true,
  };
  componentDidMount() {
    ReactPixel.init("1464338023867789", {}, { debug: true, autoConfig: false });
    ReactPixel.fbq("track", "PageView");
    ReactPixel.track("InitiateCheckout");
  }

  handleChange = (panel) => (event) => {
    // alert(JSON.stringify(panel))

    // alert("va",JSON.stringify(panel))
    if (panel === 2) {
      adres["value"] = {};
      localStorage.removeItem("bil_isactive");
      localStorage.removeItem("ship_isactive");
      localStorage.removeItem("select_addres");
      obj_values["adres_details"] = {};
    }
    if (panel === 1) {
      adres["value"] = {};
      localStorage.removeItem("bil_isactive");
      localStorage.removeItem("ship_isactive");
      localStorage.removeItem("select_addres");
      obj_values["adres_details"] = {};
    }
    const { expanded } = this.state;
    // if (value && value.pincode && value.pincode.length > 2) {
    if (
      (localStorage.getItem("bil_isactive") ||
        localStorage.getItem("ship_isactive")) &&
      adres.value &&
      adres.value.pincode &&
      adres.value.pincode.length > 2 &&
      expanded === "panel" + panel
    ) {
      this.setState({
        expanded: "panel" + 3,
      });
      // }
      // window.location.reload()
    } else {
      if (expanded > "panel" + panel) {
        this.setState({
          expanded: "panel" + panel,
        });
      }
      if (
        (expanded === "panel3" || expanded === "panel4") &&
        "panel" + panel === "panel2"
      ) {
        localStorage.removeItem("bil_isactive");
        localStorage.removeItem("ship_isactive");
        localStorage.removeItem("select_addres");
        // return false
      }
    }
    if (Object.keys(adres.value).length <= 0) {
      if (panel === 1) {
        return localStorage.setItem("panel", 1);
      }
      if (panel === 2) {
        return localStorage.setItem("panel", 2);
      }
      localStorage.setItem("panel", 1);
    }
  };

  changePanel = (panel, adres_detail) => {
    console.log(panel);
    if (panel == 2) {
      adres["value"] = {};
      localStorage.removeItem("bil_isactive");
      localStorage.removeItem("ship_isactive");
      obj_values["adres_details"] = {};
      localStorage.removeItem("select_addres");
    }
    if (panel === 1) {
      adres["value"] = {};
      localStorage.removeItem("bil_isactive");
      localStorage.removeItem("ship_isactive");
      localStorage.removeItem("select_addres");
      obj_values["adres_details"] = {};
    }
    // if(!panel===null){
    localStorage.setItem("panel", panel);
    obj_values["adres_details"] = adres_detail;
    this.setState({
      expanded: "panel" + panel,
      expandedlimit: panel,
      // mailId: mailId ? mailId : this.state.mailId
    });
    // }

    if (Object.keys(adres.value).length <= 0 && obj_values.length <= 0) {
      if (panel === 1) {
        return localStorage.setItem("panel", 1);
      }
      if (panel === 3) {
        return localStorage.setItem("panel", 3);
      }
      localStorage.setItem("panel", 1);
    }
    // alert(JSON.stringify(obj_values))
  };
  changePanel1 = (panel, adres_detail) => {
    console.log(panel);
    this.setState({ show: false });
    if (panel === 3) {
      adres["value"] = {};
      localStorage.removeItem("bil_isactive");
      localStorage.removeItem("ship_isactive");
      obj_values["adres_details"] = {};
      localStorage.removeItem("select_addres");
    }
    if (panel === 1) {
      adres["value"] = {};
      localStorage.removeItem("bil_isactive");
      localStorage.removeItem("ship_isactive");
      localStorage.removeItem("select_addres");
      obj_values["adres_details"] = {};
    }
    // if(!panel===null){
    localStorage.setItem("panel", panel);
    obj_values["adres_details"] = adres_detail;
    this.setState({
      expanded: "panel" + panel,
      expandedlimit: panel,
      // mailId: mailId ? mailId : this.state.mailId
    });
    // }

    if (Object.keys(adres.value).length <= 0 && obj_values.length <= 0) {
      if (panel === 1) {
        return localStorage.setItem("panel", 1);
      }
      if (panel === 3) {
        return localStorage.setItem("panel", 3);
      }
      localStorage.setItem("panel", 1);
    }
    // alert(JSON.stringify(obj_values))
  };
  pincodeapi = () => {
    var obj_user = {};
    let user_id = localStorage.getItem("user_id")
      ? localStorage.getItem("user_id")
      : "";
    this.props.makeRequestCod(variab);
    obj_user["user_id"] = user_id;

    this.changePanel(3);
  };
  handleChangedown = (panel) => (event, isExpanded) => {
    console.log(panel);
    this.setState({
      expand: isExpanded ? panel : false,
    });
  };
  render() {
    const { expanded, mailId, expandedlimit } = this.state;
    const { classes, data } = this.props;
    const { breadcrumsdata, cartsubdata } = this.props.data;
    let email = localStorage.getItem("email")
      ? localStorage.getItem("email")
      : "";
    variab["pincode"] = adres.value && adres.value.pincode;

    const breadcrumsdata_static = [
      { title: "Shopping Bag" },
      { title: "Login/ Register" },
      { title: "Address Detail" },
      { title: "Payment Options" },
      { title: "Order Confirmation" },
    ];
    const cartsubdata_static = [
      {
        name: "100% Certified Jewellery",
        icon: "https://assets.stylori.com/images/static/icon-star.png",
      },
      {
        name: "Secure Payments",
        icon: "https://assets.stylori.com/images/static/icon-lock.png",
      },
      {
        name: "Free Insured Shipping",
        icon: "https://assets.stylori.com/images/static/icon-van.png",
      },
      {
        name: "25-Day Returns",
        icon: "https://assets.stylori.com/images/static/icon-return.png",
      },
    ];
    adres["value"] = localStorage.getItem("select_addres")
      ? JSON.parse(localStorage.getItem("select_addres"))
      : {};

    const enquireLink = () => {
      let ProductIsActiveUrl;
      this.props.data.map((val) => {
        if (val.isActive == false) {
          ProductIsActiveUrl = val.skuUrl;
        }
      });
      window.open(
        `https://wa.me/919952625252?text=Hi - ${
          window.location.hostname + "/" + ProductIsActiveUrl ?? ""
        }`
      );
    };

    let ProductIsActive = true;
    this.props.data.map((val) => {
      if (val.isActive == false) {
        ProductIsActive = false;
      }
    });
    return (
      <Grid>
        <Header wishlist={this.props.wishlistdata} />
        {/* <CustomSeparator
          arrowicon="cart-head-arrows"
          className={`breadcrums-header ${classes.normalcolorback}`}
          classsubhed={`breadcrums-sub ${classes.normalcolorback}`}
          list={`MuiBreadcrumbs-li ${classes.fontwhite}`}
          data={
            this.props.data.length > 0
              ? this.props.data[0].breadcrumsdata
              : breadcrumsdata_static
          }
          subdata={
            this.props.data.length > 0
              ? this.props.data[0].cartsubdata
              : cartsubdata_static
          }
          changePanel={this.changePanel}
        /> */}
        <div>
          <div>
            <Grid container style={{ overflow: "hidden", minHeight: "85vh" }}>
              <Hidden smDown>
                <Grid xs={12} lg={6}>
                  <div className={classes.padding}>
                    <ExpansionPanel
                      square
                      expanded={expanded === "panel1"}
                      onChange={this.handleChange(1)}
                      style={{
                        boxShadow: "none",
                      }}
                    >
                      <ExpansionPanelSummary
                        style={{
                          borderBottom: "1.3px solid #C1C1C1",
                        }}
                        expandIcon={<ExpandMoreIcon className="arrow-chek" />}
                        className="ckcut-main-body"
                      >
                        <Typography className="text-chck">
                          {" "}
                          1.&nbsp;&nbsp;LOGIN
                          <div className="ch-d-vl">{email}</div>
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <LoginRegisterIndex changePanel={this.changePanel} />
                      </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel
                      square
                      expanded={expanded === "panel2"}
                      onChange={this.handleChange(2)}
                      style={{
                        boxShadow: "none",
                      }}
                    >
                      <ExpansionPanelSummary
                        style={{
                          borderBottom: "1.3px solid #C1C1C1",
                        }}
                        expandIcon={<ExpandMoreIcon className="arrow-chek" />}
                        className="ckcut-main-body"
                      >
                        <Typography className="text-chck">
                          2.&nbsp;&nbsp;ADD A GIFT MESSAGE
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Grid container>
                          <Grid item xs={12} lg={12}>
                            <Hidden smDown>
                              <Grid container>
                                <Grid
                                  item
                                  xs={12}
                                  lg={12}
                                  className={classes.cart}
                                >
                                  <ProductList checkout={true} />
                                  <br />
                                </Grid>

                                <Grid xs={12} lg={7} />
                                <Grid xs={12} lg={4}>
                                  <div
                                    style={{
                                      float: "right",
                                      marginBottom: "5px",
                                    }}
                                  >
                                    {ProductIsActive ? (
                                      <Button
                                        onClick={() => this.pincodeapi()}
                                        className="summaryOrder-pay-btn"
                                      >
                                        Continue to Pay
                                      </Button>
                                    ) : (
                                      <Button
                                        className="summaryOrder-pay-btn"
                                        onClick={enquireLink}
                                      >
                                        Enquire Now
                                      </Button>
                                    )}
                                  </div>
                                </Grid>
                              </Grid>
                              <br />
                            </Hidden>
                          </Grid>

                          <Hidden mdUp>
                            <Grid container style={{ marginTop: "10px" }}>
                              <Grid xs={12} lg={7} />
                              <Grid xs={12} lg={4}>
                                <div
                                  style={{
                                    float: "right",
                                    marginBottom: "5px",
                                  }}
                                >
                                  {ProductIsActive ? (
                                    <Button
                                      onClick={() => this.pincodeapi()}
                                      className="summaryOrder-pay-btn"
                                    >
                                      Continue to Pay
                                    </Button>
                                  ) : (
                                    <Button
                                      className="summaryOrder-pay-btn"
                                      onClick={enquireLink}
                                    >
                                      Enquire Now
                                    </Button>
                                  )}
                                </div>
                              </Grid>
                            </Grid>
                            <br />
                          </Hidden>
                        </Grid>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel
                      square
                      expanded={expanded === "panel3"}
                      onChange={this.handleChange(3)}
                      style={{ boxShadow: "none" }}
                    >
                      <ExpansionPanelSummary
                        style={{
                          width: "100%",
                          overflow: "hidden",
                          borderBottom: "1.3px solid #C1C1C1",
                        }}
                        expandIcon={<ExpandMoreIcon className="arrow-chek" />}
                        className="ckcut-main-body"
                      >
                        <Typography className="text-chck">
                          3.&nbsp;&nbsp;DELIVERY/PICKUP INFORMATION
                          <div className="ch-d-vl">
                            {obj_values &&
                            obj_values.adres_details &&
                            obj_values.adres_details.firstname &&
                            obj_values.adres_details.firstname.length > 0
                              ? obj_values.adres_details &&
                                obj_values.adres_details.firstname
                              : adres.value && adres.value.firstname}
                            &nbsp;
                            {obj_values &&
                            obj_values.adres_details &&
                            obj_values.adres_details.firstname &&
                            obj_values.adres_details.firstname.length > 0
                              ? obj_values.adres_details &&
                                obj_values.adres_details.lastname
                              : adres.value && adres.value.lastname}
                            &nbsp;
                            {obj_values &&
                            obj_values.adres_details &&
                            obj_values.adres_details.firstname &&
                            obj_values.adres_details.firstname.length > 0
                              ? obj_values.adres_details &&
                                obj_values.adres_details.addressline1
                              : adres.value && adres.value.addressline1}
                            &nbsp;
                            {obj_values &&
                            obj_values.adres_details &&
                            obj_values.adres_details.firstname &&
                            obj_values.adres_details.firstname.length > 0
                              ? obj_values.adres_details &&
                                obj_values.adres_details.city
                              : adres.value && adres.value.city}
                            {obj_values &&
                            obj_values.adres_details &&
                            obj_values.adres_details.firstname &&
                            obj_values.adres_details.firstname.length > 0
                              ? obj_values.adres_details &&
                                obj_values.adres_details.state
                              : adres.value && adres.value.state}
                            &nbsp;
                            {obj_values &&
                            obj_values.adres_details &&
                            obj_values.adres_details.firstname &&
                            obj_values.adres_details.firstname.length > 0
                              ? obj_values.adres_details &&
                                obj_values.adres_details.pincode
                              : adres.value && adres.value.pincode}
                          </div>
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Grid container>
                          <Grid item xs={12} lg={12}>
                            <Grid container>
                              <Grid xs={12} lg={7} />
                              <Grid xs={12} lg={4}></Grid>
                            </Grid>

                            <Addressform
                              changePanel={this.changePanel}
                              changeaddress={this.changePanel1}
                            />
                          </Grid>
                        </Grid>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel
                      square
                      expanded={expanded === "panel4"}
                      onChange={this.handleChange(4)}
                      style={{
                        boxShadow: "none",
                      }}
                    >
                      <ExpansionPanelSummary
                        style={{
                          borderBottom: "1.3px solid #C1C1C1",
                        }}
                        expandIcon={<ExpandMoreIcon className="arrow-chek" />}
                        className="ckcut-main-body"
                      >
                        <Typography className="text-chck">
                          4.&nbsp;&nbsp;PAYMENT METHOD
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Grid container>
                          <Grid item xs={12}>
                            <PaymentIndex
                              data={data}
                              CodData={this.props.CodData}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <br />
                            <Typography
                              style={{
                                color: "gray",
                                paddingBottom: "10px",
                                paddingTop: "10px",
                              }}
                            >
                              <b> Gifting Messages&nbsp;&#38;&nbsp;Pakaging</b>
                            </Typography>
                            <ProductList order={true} checkout={true} />
                            <br />
                          </Grid>
                          <Grid item xs={12}>
                            <Typography
                              style={{
                                color: "gray",
                                paddingBottom: "10px",
                                paddingTop: "10px",
                              }}
                            >
                              <b>Shiping Address</b>
                            </Typography>
                            <Addressform
                              changePanel={this.changePanel}
                              changeaddress={this.changePanel1}
                              order={true}
                            />
                          </Grid>
                        </Grid>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </div>
                </Grid>
                <Grid
                  xs={12}
                  lg={6}
                  style={{ backgroundColor: "#F3F3F3", minHeight: "80vh" }}
                >
                  <Grid container>
                    <Grid item xs={12} lg={12}>
                      <div className={classes.padding}>
                        <Typography className="text-chck-bold">
                          <b>Order Summary</b>
                        </Typography>

                        <CartCard
                          data={data}
                          isStateFilterContextQty={this.props.isdatafromstate}
                          isdatafromstate={this.props.isdatafromstate}
                          checkoutpage={true}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid xs={12} lg={6}>
                  <Grid container>
                    <Grid item xs={12} lg={12}>
                      <div className={classes.hideorder}>
                        <CartCard
                          data={data}
                          isStateFilterContextQty={this.props.isdatafromstate}
                          isdatafromstate={this.props.isdatafromstate}
                          checkoutpage={true}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={12} lg={6} style={{ backgroundColor: "#F3F3F3" }}>
                  <div className={classes.padding}>
                    <ExpansionPanel
                      square
                      expanded={expanded === "panel1"}
                      onChange={this.handleChange(1)}
                      style={{
                        boxShadow: "none",
                        backgroundColor: "#F3F3F3",
                      }}
                    >
                      <ExpansionPanelSummary
                        style={{
                          borderBottom: "1.3px solid #C1C1C1",
                          backgroundColor: "#F3F3F3",
                        }}
                        expandIcon={<ExpandMoreIcon className="arrow-chek" />}
                      >
                        <Typography className="text-chck">
                          {" "}
                          1.&nbsp;&nbsp;LOGIN
                          <div className="ch-d-vl">{email}</div>
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails style={{ padding: "10px" }}>
                        <LoginRegisterIndex changePanel={this.changePanel} />
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel
                      square
                      expanded={expanded === "panel2"}
                      onChange={this.handleChange(2)}
                      style={{
                        boxShadow: "none",
                        backgroundColor: "#F3F3F3",
                      }}
                    >
                      <ExpansionPanelSummary
                        style={{
                          borderBottom: "1.3px solid #C1C1C1",
                          backgroundColor: "#F3F3F3",
                        }}
                        expandIcon={<ExpandMoreIcon className="arrow-chek" />}
                      >
                        <Typography className="text-chck">
                          2.&nbsp;&nbsp;ADD A GIFT MESSAGE
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Grid container>
                          <Grid item xs={12} lg={12}>
                            <Hidden smDown>
                              <Grid container>
                                <Grid xs={12} lg={7} />
                                <Grid xs={12} lg={4}>
                                  <div
                                    style={{
                                      float: "right",
                                      marginBottom: "5px",
                                    }}
                                  >
                                    {ProductIsActive ? (
                                      <Button
                                        onClick={() => this.pincodeapi()}
                                        className="summaryOrder-pay-btn"
                                      >
                                        Continue to Pay
                                      </Button>
                                    ) : (
                                      <Button
                                        className="summaryOrder-pay-btn"
                                        onClick={enquireLink}
                                      >
                                        Enquire Now
                                      </Button>
                                    )}
                                  </div>
                                </Grid>
                              </Grid>
                              <br />
                            </Hidden>
                          </Grid>
                          <Grid item xs={12} lg={12} className={classes.cart}>
                            <ProductList checkout={true} />
                          </Grid>
                          <Hidden mdUp>
                            <Grid container style={{ marginTop: "10px" }}>
                              <Grid xs={12} lg={7} />
                              <Grid xs={12} lg={4}>
                                <div
                                  style={{
                                    float: "right",
                                    marginBottom: "5px",
                                  }}
                                >
                                  {ProductIsActive ? (
                                    <Button
                                      onClick={() => this.pincodeapi()}
                                      className="summaryOrder-pay-btn"
                                    >
                                      Continue to Pay
                                    </Button>
                                  ) : (
                                    <Button
                                      className="summaryOrder-pay-btn"
                                      onClick={enquireLink}
                                    >
                                      Enquire Now
                                    </Button>
                                  )}
                                </div>
                              </Grid>
                            </Grid>
                            <br />
                          </Hidden>
                        </Grid>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel
                      square
                      expanded={expanded === "panel3"}
                      onChange={this.handleChange(3)}
                      style={{ boxShadow: "none", backgroundColor: "#F3F3F3" }}
                    >
                      <ExpansionPanelSummary
                        style={{
                          width: "100%",
                          overflow: "hidden",
                          borderBottom: "1.3px solid #C1C1C1",
                          backgroundColor: "#F3F3F3",
                        }}
                        expandIcon={<ExpandMoreIcon className="arrow-chek" />}
                      >
                        <Typography className="text-chck">
                          3.&nbsp;DELIVERY/PICKUP&nbsp;INFORMATION
                          <br />
                          <span className="ch-d-vl">
                            {obj_values &&
                            obj_values.adres_details &&
                            obj_values.adres_details.firstname &&
                            obj_values.adres_details.firstname.length > 0
                              ? obj_values.adres_details &&
                                obj_values.adres_details.firstname
                              : adres.value && adres.value.firstname}
                            &nbsp;
                            {obj_values &&
                            obj_values.adres_details &&
                            obj_values.adres_details.firstname &&
                            obj_values.adres_details.firstname.length > 0
                              ? obj_values.adres_details &&
                                obj_values.adres_details.lastname
                              : adres.value && adres.value.lastname}
                            &nbsp;
                            {obj_values &&
                            obj_values.adres_details &&
                            obj_values.adres_details.firstname &&
                            obj_values.adres_details.firstname.length > 0
                              ? obj_values.adres_details &&
                                obj_values.adres_details.addressline1
                              : adres.value && adres.value.addressline1}
                            &nbsp;
                            {obj_values &&
                            obj_values.adres_details &&
                            obj_values.adres_details.firstname &&
                            obj_values.adres_details.firstname.length > 0
                              ? obj_values.adres_details &&
                                obj_values.adres_details.city
                              : adres.value && adres.value.city}
                            {obj_values &&
                            obj_values.adres_details &&
                            obj_values.adres_details.firstname &&
                            obj_values.adres_details.firstname.length > 0
                              ? obj_values.adres_details &&
                                obj_values.adres_details.state
                              : adres.value && adres.value.state}
                            &nbsp;
                            {obj_values &&
                            obj_values.adres_details &&
                            obj_values.adres_details.firstname &&
                            obj_values.adres_details.firstname.length > 0
                              ? obj_values.adres_details &&
                                obj_values.adres_details.pincode
                              : adres.value && adres.value.pincode}
                          </span>
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Grid container>
                          <Grid item xs={12} lg={12}>
                            <Addressform
                              changePanel={this.changePanel}
                              changeaddress={this.changePanel1}
                            />
                          </Grid>
                        </Grid>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel
                      square
                      expanded={expanded === "panel4"}
                      onChange={this.handleChange(4)}
                      style={{
                        boxShadow: "none",
                        backgroundColor: "#F3F3F3",
                      }}
                    >
                      <ExpansionPanelSummary
                        style={{
                          borderBottom: "1.3px solid #C1C1C1",
                          backgroundColor: "#F3F3F3",
                        }}
                        expandIcon={<ExpandMoreIcon className="arrow-chek" />}
                      >
                        <Typography className="text-chck">
                          4.&nbsp;&nbsp;PAYMENT METHOD
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <PaymentIndex
                          data={data}
                          CodData={this.props.CodData}
                        />
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </div>
                </Grid>
              </Hidden>
            </Grid>
          </div>
        </div>
        {/* <NeedHelp /> */}
      </Grid>
    );
  }
}

const Components = (props) => {
  let {
    CartCtx: { data, loading, error, allorderdata, wishlistdata },
  } = React.useContext(CartContext);
  const {
    ProductDetailCtx: { filters },
    setFilters,
  } = React.useContext(ProductDetailContext);
  let content, mapped;
  if (!loading && !error) {
    if (Object.keys(data).length !== 0) {
      mapped = cart(data);
    }
  }
  const cartValueEmpty = () => {
    alert("Your cart is empty");
    props.history.push("/jewellery");
  };
  if (
    Object.keys(data).length === 0 ||
    data.data.allTransSkuLists.nodes.length === 0
  )
    content = <div className="overall-loader">{/* {cartValueEmpty() */}</div>;
  else
    content = (
      <CartCardCheck
        {...props}
        data={mapped}
        allorderdata={allorderdata}
        wishlistdata={wishlistdata}
        isdatafromstate={filters.quantity}
      />
    );

  if (Object.keys(data).length === 0 && data.constructor === Object)
    content = <div className="overall-loader"> {/* {cartValueEmpty()} */}</div>;
  else if (
    Object.keys(data).length > 0 &&
    data.constructor === Object &&
    data.data &&
    data.data.allTransSkuLists &&
    data.data.allTransSkuLists.nodes &&
    data.data.allTransSkuLists.nodes.length === 0
  ) {
    content = <div className="overall-loader"> {cartValueEmpty()} </div>;
  } else {
    content = (
      <CartCardCheck
        {...props}
        data={mapped}
        allorderdata={allorderdata}
        wishlistdata={wishlistdata}
        isdatafromstate={filters.quantity}
      />
    );
  }
  return content;
};

export default withRouter(withStyles(styles)(Components));
