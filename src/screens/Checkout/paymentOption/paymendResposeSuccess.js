import { Box, Grid, Hidden, Typography } from "@material-ui/core";
import Allorders from "components/accounts/allorders";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import { CartContext } from "context";
import cart from "mappers/cart";
import React from "react";
import { withRouter } from "react-router-dom";
import "../../../components/Checkout/Cart.css";
import { API_URL } from "../../../config";
import "../chckout.css";
import "./payment.css";
// import NeedHelp from "components/needHelp";
const order_id = localStorage.getItem("order_id")
  ? JSON.parse(localStorage.getItem("order_id"))
  : "";
const breadcrumsdata = [
  { title: "Shopping Bag" },
  { title: "Login/ Register" },
  { title: "Address Detail" },
  { title: "Payment Options" },
  { title: "Order Confirmation" },
];
const cartsubdata = [
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

var obj = {};
obj["order_id"] = order_id;

class PaymentResponseSuccess extends React.Component {
  makeFetch_resend_mail = async (props) => {
    await fetch(`${API_URL}/resendorderemail`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        // alert(
        //    'Order Placed Successfully'
        // )
        return res.json();
      })
      .then((resdata) => {
        if (resdata.message !== undefined && resdata.message !== null) {
          // alert(
          //    resdata && resdata.message
          // )
          // alert('success',"We sent activation mail. Please check your mail.")
        }
        alert("Your mail has been Resending on successfully");
      })
      .catch((err) => {
        // console.log(err)
      });
  };

  componentDidMount() {
    if (localStorage.getItem("gut_lg") && localStorage.getItem("user_id"))
      localStorage.removeItem("user_id");
  }

  render() {
    // alert(JSON.stringify(this.props.data))
    let gut_lg = localStorage.getItem("gut_lg")
      ? JSON.parse(localStorage.getItem("gut_lg"))
      : {};
    let email = localStorage.getItem("email")
      ? localStorage.getItem("email")
      : "";

    return (
      <>
        <Header wishlist={this.props.wishlistdata} paymentSucces={true} />
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
                />
              </Box>
              <Box>
                <span className="titlecart">A BIG THANK YOU!</span>

                <Typography
                  style={{
                    color: "gray",
                    textAlign: "center",
                    fontSize: "16px",
                  }}
                >
                  <Hidden smDown>
                    Welcome to the <b>NAC</b> family! We’ll take it from here.
                    <br />
                    We’ve sent a confirmation email to <b>{email}</b>.
                  </Hidden>
                </Typography>
              </Box>
              <Box>
                <img
                  className="img"
                  src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+159.svg"
                  alt="title images"
                />
              </Box>
            </Box>
            <Typography
              variant="subtitle2"
              style={{
                color: "gray",
                textAlign: "center",
              }}
            >
              <Hidden mdUp>
                Welcome to the <b>NAC</b> family! We’ll take it from here.
                <br />
                We’ve sent a confirmation email to <b>{email}</b>.
              </Hidden>
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Hidden smDown>
              <br />
              <br />
            </Hidden>
            <Allorders
              allorderdata={this.props.allorderdata}
              history={this.props.history}
            />
            <Hidden smDown>
              <br />
              <br />
            </Hidden>
          </Grid>
          {/* <NeedHelp /> */}
          <Footer />
        </Grid>
      </>
    );
  }
}
const Components = (props) => {
  let {
    CartCtx: {
      cartFilters,
      data,
      loading,
      error,
      allorderdata,
      allordersuccesful,
      wishlistdata,
    },
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
        data={mapped}
        allorderdata={allordersuccesful}
        wishlistdata={wishlistdata}
      />
    );
  return content;
};

export default withRouter(Components);
