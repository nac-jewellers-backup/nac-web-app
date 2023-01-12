// import './product-image-slider/loginRegisters.css'
import { Container, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import React from "react";
import Register from "screens/Checkout/loginRegister/register";
// import useRegister from './useregister';

// import SimpleSelect from '../../components/InputComponents/Select/Select'
import styles from "./style";

const UserRegister = (props) => {
  return <RegisterComponent {...props} />;
};

const RegisterComponent = (props) => {
  const { classes } = props;
  // const { values, handlers } = useRegister();
  return (
    <Grid container>
      <Header />
      <Grid spacing={12} container lg={12} style={{ padding: "3%" }}>
        <Grid item xs={6} lg={6}>
          <Container>
           
            <Register />
            <br />
            <div
              className={`${classes.normalfonts}`}
              style={{
                cursor: "pointer",
                fontSize: "14px",
                marginRight: "50%",
              }}
              onClick={() => {
                window.location.pathname = "/login";
              }}
            >
              Back to login
            </div>
          </Container>{" "}
        </Grid>
        <Grid item xs={6} lg={6}>
          <div>
            <img
              width="100%"
              height="420px"
              style={{
                objectFit: "cover",
                objectPosition: "40% 5%",
              }}
              loading="lazy"
              alt="..."
              src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/login+register/Group+72.png"
            />
          </div>
        </Grid>

        {/* </Grid> */}
        {/* </form>
                    </div> */}
        {/* </Grid> */}
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(UserRegister);
