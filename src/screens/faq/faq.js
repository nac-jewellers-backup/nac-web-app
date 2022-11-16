import { Grid } from "@material-ui/core";
import { CommonTitle } from "components";
import CommonContent from "components/commonContent/commonContent";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import { faqData } from "mappers/dummydata";
import React from "react";
import FaqStyles from "./style";

const FaqDetails = () => {
  React.useEffect(() => {
    let hashedLocation = window.location.hash.replace("#", "");
    if (hashedLocation) {
      let elmnt = document.getElementById(hashedLocation);
      elmnt.scrollIntoView();
    }
    window.scrollTo(0, 0);
  }, []);  const classes = FaqStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.mainTag}>
          <Header />
        </div>
        <div className={classes.commonTitle}>
          <CommonTitle title="FAQS" />
        </div>
        <div>
          <CommonContent faq data={faqData} />
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </Grid>
    </Grid>
  );
};

export default FaqDetails;
