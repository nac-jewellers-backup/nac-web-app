import { Grid } from "@material-ui/core";
import { CommonTitle } from "components";
import CommonContent from "components/commonContent/commonContent";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import { privacyData } from "mappers/dummydata/privacyPolicyData";
import React from "react";
import PrivacyPolicyStyles from "./style";

const PrivacyPolicy = () => {
  const classes = PrivacyPolicyStyles();
  React.useEffect(() => {
    let hashedLocation = window.location.hash.replace("#", "");
    if (hashedLocation) {
      let elmnt = document.getElementById(hashedLocation);
      elmnt.scrollIntoView();
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.mainTag}>
          <Header />
        </div>
        <div className={classes.commonTitle}>
          <CommonTitle title="Privacy Policy" />
        </div>
        <div>
          <CommonContent data={privacyData} />
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </Grid>
    </Grid>
  );
};

export default PrivacyPolicy;
