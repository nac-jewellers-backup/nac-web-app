// import './product-image-slider/loginRegisters.css'
import { Container, Grid, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import { CartContext, FilterOptionsContext } from "context";
import React from "react";
import { withRouter } from "react-router";
import Login from "screens/Checkout/loginRegister/login";

import styles from "./style";

const UserLogin = (props) => {
  return <LoginComponent {...props} />;
};

const LoginComponent = (props) => {
  localStorage.setItem("navfblogin", true);
  let {
    CartCtx: { wishlistdata },
  } = React.useContext(CartContext);
  let {
    FilterOptionsCtx: { cartcount },
    setloadingfilters,
  } = React.useContext(FilterOptionsContext);
  const { classes } = props;


  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid container>
      <Header wishlist={wishlistdata} cartcount={cartcount} />
      <Grid spacing={12} container>
        <Hidden mdUp>
          <Grid item xs={12}>
            <div>
              <img
                loading="lazy"
                alt="..."
                width="100%"
                height="380px"
                style={{
                  objectFit: "cover",
                  objectPosition: "40% 5%",
                }}
                src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/login+register/Group+72.png"
              />
            </div>
          </Grid>
        </Hidden>
        <Grid item xs={12} lg={6}>
          <Container>
            <div className={classes.root}>
              <Login />
            </div>
          </Container>{" "}
        </Grid>
        <Hidden smDown>
          <Grid item xs={12} lg={6}>
            <div>
              <img
                loading="lazy"
                alt="..."
                width="100%"
                height="600px"
                style={{
                  objectFit: "cover",
                  objectPosition: "40% 5%",
                }}
                src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/login+register/Group+72.png"
              />
            </div>
          </Grid>
        </Hidden>
      </Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(withRouter(UserLogin));
