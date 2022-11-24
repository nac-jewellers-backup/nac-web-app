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
          <CommonTitle title="Terms & Conditions" />
        </div>
        <div>
          <CommonContent data={termsData} subTitle="Terms & Conditions" />
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </Grid>
    </Grid>
  );
};

export default TermsAndConditions;
