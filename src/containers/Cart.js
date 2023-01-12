import { Button, Container, Grid, Hidden, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import CartCard from "components/Checkout/CartCard";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import { CartContext } from "context";
import cart from "mappers/cart";
import React from "react";
import ReactPixel from "react-facebook-pixel";
import "screens/screens.css";
import "screens/Stylori/index.css";
import styles from "../components/Checkout/style";
import "./index.css";

class Cart extends React.Component {
  componentDidMount() {
    ReactPixel.init("1464338023867789", {}, { debug: true, autoConfig: false });
    ReactPixel.fbq("track", "PageView");
    ReactPixel.fbq("track", "AddToCart");
  }
  render() {
    const { data, classes } = this.props;

    let path = window.location.pathname.split("/").pop();

    return (
      <Grid container>
        <Hidden smDown>
          <Header wishlist={this.props.wishlistdata} />

          <div className="cart-ovralldiv-media " style={{ marginTop: "-3%" }}>
            <Grid Container spacing={12}>
              {this.props.data.length > 0 ? (
                <Grid item xs={12}>
                  <CartCard data={data} />
                </Grid>
              ) : (
                <>
                  <div className="noproductsfound">
                    <Typography
                      variant="body1"
                      style={{
                        fontSize: "20px",
                        color: "gray",
                        fontWeight: "bold",
                      }}
                    >
                      There are no items in this cart.{" "}
                    </Typography>
                  </div>
                  <br />
                  <center>
                    <Button
                      color="secondary"
                      onClick={() => {
                        window.location.href = "/jewellery";
                      }}
                      style={{ fontWeight: "bold" }}
                      variant="contained"
                    >
                      Continue shopping
                    </Button>
                  </center>
                </>
              )}
            </Grid>
          </div>
        </Hidden>
        <Hidden mdUp>
          {path === "checkout" ? (
            ""
          ) : (
            <Grid container spacing={12}>
              <Header wishlist={this.props.wishlistdata} />
            </Grid>
          )}
          <Container>
            <Grid Container spacing={12}>
              {this.props.data.length > 0 ? (
                <Grid item xs={12}>
                  <CartCard data={data} />
                </Grid>
              ) : (
                <>
                  <div className="noproductsfound">
                    <Typography
                      variant="body1"
                      style={{
                        fontSize: "20px",
                        color: "gray",
                        fontWeight: "bold",
                      }}
                    >
                      There are no items in this cart.{" "}
                    </Typography>
                  </div>
                  <br />
                  <center>
                    <Button
                      color="secondary"
                      onClick={() => {
                        window.location.href = "/jewellery";
                      }}
                      style={{ fontWeight: "bold" }}
                      variant="contained"
                    >
                      Continue shopping
                    </Button>
                    <br />
                    <br />
                  </center>
                </>
              )}
            </Grid>
          </Container>
          <Grid Container>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
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
      wishlistdata,
      NewUser,
    },
  } = React.useContext(CartContext);

  let content, mapped;
  let _data = {};

  if (Object.keys(NewUser).length === 0) {
    _data = data;
  } else {
    _data = NewUser;
    mapped = cart(_data);
  }
  if (!loading && !error) {
    if (Object.keys(_data).length !== 0) {
      mapped = cart(_data);
    }
  }

  if (Object.keys(_data).length === 0)
    content = (
      <div className="overall-loader">
        <div id="loading"></div>
      </div>
    );
  else
    content = (
      <Cart
        {...props}
        data={mapped}
        allorderdata={allorderdata}
        wishlistdata={wishlistdata}
      />
    );

  return content;
};

export default withStyles(styles)(Components);
