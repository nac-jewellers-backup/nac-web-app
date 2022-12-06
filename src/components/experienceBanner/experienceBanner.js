import { Grid, Hidden } from "@material-ui/core";
import React from "react";
import ExperienceBannerStyles from "./style";

const ExperienceBanner = (props) => {
  const classes = ExperienceBannerStyles();
  return (
    <>
      <Hidden xsDown>
        {props?.value.map((e) => {
          return (
            <Grid container>
              <Grid item xs={12}>
                <div className={classes.bannerImage}>
                  <img src={e?.web} alt="banner" />
                </div>
              </Grid>
            </Grid>
          );
        })}
      </Hidden>

      {/* MOBILE SCREEN */}

      <Hidden smUp>
        {props?.value.map((val) => {
          return (
            <Grid container>
              <Grid item xs={12}>
                <div className={classes.mobileBanner}>
                  <img src={val?.mobile} alt="banner" />
                </div>
              </Grid>
            </Grid>
          );
        })}
      </Hidden>
    </>
  );
};

export default ExperienceBanner;
