import { Typography } from "@material-ui/core";
import CustomBanner from "components/customBanner/customBanner";
import CustomForm from "components/customForm/customForm";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import { customBannerData } from "mappers/dummydata";
import React from "react";
import CCustomApplicationStyles from "./style";

const CustomApplication = (props) => {
  const classes = CCustomApplicationStyles();
  return (
    <div className={classes.mainGroup}>
      <div className={classes.headingGroup}>
        <div className={classes.role}>
          <Typography>{props?.data.job_Role}</Typography>
        </div>
        <div className={classes.location}>
          <Typography>{props?.data?.location}</Typography>
        </div>
        <div className={classes.secondLayer}>
          <Typography>{props?.data?.description}</Typography>
        </div>
      </div>
      {/* CUSTOM FORM */}

      <div className={classes.customForm}>
        <CustomForm handleClick={props?.handleClick} />
      </div>
    </div>
  );
};

export default CustomApplication;
