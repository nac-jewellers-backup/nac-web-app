import { Typography } from "@material-ui/core";
import CustomForm from "components/customForm/customForm";
import React from "react";
import CCustomApplicationStyles from "./style";


const CustomApplication = (props) => {
  const classes = CCustomApplicationStyles();
  return (
    <div className={classes.mainGroup}>
      <div className={classes.headingGroup}>
        <div className={classes.role}>
          <Typography>{props.location?.state?.job_Role}</Typography>
        </div>
        <div className={classes.location}>
          <Typography>{props.location?.state?.location}  {props.location?.state?.job_type}</Typography>
        </div>
        <div className={classes.secondLayer}>
          <Typography>{props.location?.state?.description}</Typography>
        </div>
      </div>

      <div className={classes.customForm}>
        <CustomForm />
      </div>
    </div >
  );
};

export default CustomApplication;
