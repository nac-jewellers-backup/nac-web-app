import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./titlestyle";

export const Title = (props) => {
  const classes = styles();
  return (
    <Grid container direction="row">
      <Grid item>
        <img
          src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+160.svg"
          alt="title images"
        />
      </Grid>
      <Grid item xs={12} className={classes.title}>
        {props.title.toUpperCase()}
      </Grid>
      <Grid item>
        <img
          src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+159.svg"
          alt="title images"
        />
      </Grid>
    </Grid>
  );
};
