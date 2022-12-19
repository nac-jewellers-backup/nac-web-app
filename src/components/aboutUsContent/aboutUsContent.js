import { Typography } from "@material-ui/core";
import React from "react";
import NewAboutUsStyles from "./style";

const AboutUsContent = (props) => {
  const classes = NewAboutUsStyles();
  return (
    <div className={classes.contentText}>
      {props?.data.map((e) => {
        return (
          <div className={classes.aboutContent}>
            <Typography className={classes.abouttext}>{e?.para}</Typography>
          </div>
        );
      })}
    </div>
  );
};

export default AboutUsContent;
