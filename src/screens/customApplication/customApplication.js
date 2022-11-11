import { Typography } from "@material-ui/core";
import CustomBanner from "components/customBanner/customBanner";
import CustomForm from "components/customForm/customForm";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import { customBannerData } from "mappers/dummydata";
import React from "react";
import CCustomApplicationStyles from "./style";

const CustomApplication = () => {
  const classes = CCustomApplicationStyles();
  return (
    <div>
      {/* HEADER */}

      <div className={classes.mainTag}>
        <Header />
      </div>

      {/* CUSTOM BANNER */}

      <div className={classes.customBanner}>
        <CustomBanner data={customBannerData} />
      </div>

      {/* CUSTOM FORM */}

      <div className={classes.CustomForm}>
        <CustomForm />
      </div>

      {/* FOOTER */}

      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default CustomApplication;
