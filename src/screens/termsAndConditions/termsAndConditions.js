import { Grid } from "@material-ui/core";
import { CommonTitle } from "components";
import CommonContent from "components/commonContent/commonContent";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import { termsData } from "mappers/dummydata";
import React from "react";
import TermsAndConditionsStyles from "./style";

const TermsAndConditions = () => {
  const classes = TermsAndConditionsStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.mainTag}>
          <Header />
        </div>
        <div className={classes.commonTitle}>
          <CommonTitle fontSize="50px" title="Terms & Conditions" />
        </div>
        <div>
          <CommonContent data={termsData} />
        </div>
        <div>
          <Footer />
        </div>
      </Grid>
    </Grid>
  );
};

export default TermsAndConditions;
