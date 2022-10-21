import { Grid } from "@material-ui/core";
import { CommonTitle } from "components";
import CommonContent from "components/commonContent/commonContent";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import { privacyData } from "mappers/dummydata/privacyPolicyData";
import React from "react";
import PrivacyPolicyStyles from "./style";

const PrivacyPolicy = () => {
  console.log("privacyPolicy", privacyData);
  const classes = PrivacyPolicyStyles();
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
        <div>
          <Footer />
        </div>
      </Grid>
    </Grid>
  );
};

export default PrivacyPolicy;
