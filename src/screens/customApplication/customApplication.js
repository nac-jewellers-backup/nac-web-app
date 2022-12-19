import { Typography } from "@material-ui/core";
import CustomBanner from "components/customBanner/customBanner";
import CustomForm from "components/customForm/customForm";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import { customBannerData } from "mappers/dummydata";
import React from "react";
import CCustomApplicationStyles from "./style";
import { useLocation } from "react-router-dom";


const CustomApplication = (props) => {
  const classes = CCustomApplicationStyles();

  const { state } = useLocation();

  return (
    <div className={classes.mainGroup}>
      <div className={classes.headingGroup}>
        <div className={classes.role}>
          <Typography>{state?.job_Role}</Typography>
        </div>
        <div className={classes.location}>
          <Typography>{state?.location}  {state?.job_type}</Typography>
        </div>
        <div className={classes.secondLayer}>
          <Typography>{state?.description}</Typography>
        </div>
      </div>

      <div className={classes.customForm}>
        <CustomForm />
      </div>
    </div >
  );
};

export default CustomApplication;
