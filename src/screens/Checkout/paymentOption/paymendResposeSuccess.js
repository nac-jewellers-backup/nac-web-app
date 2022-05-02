import { Box, Grid, Hidden, Typography } from "@material-ui/core";
import Allorders from "components/accounts/allorders";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import { CartContext } from "context";
import cart from "mappers/cart";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "../../../components/Checkout/Cart.css";
import { API_URL } from "../../../config";
import "../chckout.css";
import "./payment.css";
const order_id = localStorage.getItem("order_id")
  ? JSON.parse(localStorage.getItem("order_id"))
  : "";

var obj = {};
obj["order_id"] = order_id;

class PaymentResponseSuccess extends React.Component {
  makeFetch_resend_mail = async (props) => {
    await fetch(`${API_URL}/resendorderemail`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        return res.json();
      })
      .then((resdata) => {
        if (resdata.message !== undefined && resdata.message !== null) {
        }
        alert("Your mail has been Resending on successfully");
      })
      .catch((err) => {});
  };

  componentDidMount() {
    if (localStorage.getItem("gut_lg") && localStorage.getItem("user_id"))
      localStorage.removeItem("user_id");
  }

  render() {
    let gut_lg = localStorage.getItem("gut_lg")
      ? JSON.parse(localStorage.getItem("gut_lg"))
      : {};
    let email = localStorage.getItem("email")
      ? localStorage.getItem("email")
      : "";

    return (
      <>
        <Header wishlist={this.props.wishlistdata} paymentSucces={true} />
        <Grid container direction="row" style={{ overflow: "hidden" }}>
          <Grid item xs={12}>
            <Grid container direction="row">
              <Grid item xs={12}>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  marginTop={2}
                >
                  <Box>
                    <img
                      className="img"
                      src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+160.svg"
                      alt="title images"
                      loading="lazy"
                    />
                  </Box>
                  <Box>
                    <span className="titlecart">
                      &nbsp;A BIG THANK YOU!&nbsp;
                    </span>
                  </Box>
                  <Box>
                    <img
                      className="img"
                      src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+159.svg"
                      alt="title images"
                      loading="lazy" 
                    />
                  </Box>
                </Box>

                <Hidden mdUp>
                  <Typography
                    variant="subtitle2"
                    style={{
                      color: "gray",
                      textAlign: "center",
                    }}
                  >
                    Welcome to the <b>NAC</b> family! We’ll take it from here.
                    <br />
                    We’ve sent a confirmation email to <b>{email}</b>.
                  </Typography>
                </Hidden>
                <Hidden smDown>
                  <Typography
                    style={{
                      color: "gray",
                      textAlign: "center",
                      fontSize: "14px",
                    }}
                  >
                    Welcome to the <b>NAC</b> family! We’ll take it from here.
                    <br />
                    We’ve sent a confirmation email to <b>{email}</b>.
                  </Typography>
                </Hidden>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12}>
                <Hidden smDown>
                  <br />
                  <br />
                </Hidden>
                <Allorders
                  ShippingCharge={this.props.ShippingCharge}
                  allorderdata={this.props.allorderdata}
                  history={this.props.history}
                />
                <Hidden smDown>
                  <br />
                  <br />
                </Hidden>
              </Grid>

              <Footer />
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}
const Components = (props) => {
  let {
    CartCtx: { data, loading, error, allordersuccesful, wishlistdata },
  } = React.useContext(CartContext);

  let content, mapped;
  if (!loading && !error) {
    if (Object.keys(data).length !== 0) {
      mapped = cart(data);
    }
  }
  if (Object.keys(allordersuccesful).length === 0)
    content = (
      <div className="overall-loader">
        <div id="loading"></div>
      </div>
    );
  else
    content = (
      <PaymentResponseSuccess
        {...props}
        // ShippingCharge={ShippingCharge}
        data={mapped}
        allorderdata={allordersuccesful}
        wishlistdata={wishlistdata}
      />
    );
  return content;
};

export default withRouter(Components);
