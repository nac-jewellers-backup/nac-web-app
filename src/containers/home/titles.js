import { Box, Grid } from "@material-ui/core";
import React from "react";
import styles from "./titlestyle";

export const Title = (props) => {
  const classes = styles();
  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Box>
            <img
              className={classes.img}
              src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+160.svg"
              alt="title images"
            />
          </Box>
          <Box className={classes.title} marginTop={1}>
            {props.title.toUpperCase()}
          </Box>
          <Box>
            <img
              className={classes.img}
              src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+159.svg"
              alt="title images"
            />
          </Box>
        </Box>
      </Grid>
      {/* <Grid item xs={1}>
        <img
          src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+160.svg"
          alt="title images"
        />
      </Grid>
      <Grid item xs={10} className={classes.title}>
        {props.title.toUpperCase()}
      </Grid>
      <Grid item xs={1}>
        <img
          src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+159.svg"
          alt="title images"
        />
      </Grid> */}
    </Grid>
  );
};
