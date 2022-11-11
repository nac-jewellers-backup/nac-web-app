import { Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";
import CustomBannerStyles from "./style";

const CustomBanner = (props) => {
  const classes = CustomBannerStyles();
  return (
    <>
      <Hidden xsDown>
        {props?.data.map((e) => {
          return (
            <Grid container>
              <Grid item xs={12}>
                <div className={classes.bannerImage}>
                  <img src={e?.image} alt="banner" />
                </div>
                <div className={classes.group}>
                  <div className={classes.title}>
                    <Typography>{e?.title}</Typography>
                  </div>
                  <div className={classes.content}>
                    <Typography>{e?.content}</Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          );
        })}
      </Hidden>

      {/* MOBILE SCREEN */}

      <Hidden smUp>
        {props?.data.map((val) => {
          return (
            <Grid container>
              <Grid item xs={12}>
                <div className={classes.mobileBanner}>
                  <img src={val?.image_mobile} alt="banner" />
                </div>
                <div className={classes.titleGroup}>
                  <div className={classes.mobileTitle}>
                    <Typography>{val?.title}</Typography>
                  </div>
                  <div className={classes.mobileContent}>
                    <Typography>{val?.content}</Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          );
        })}
      </Hidden>
    </>
  );
};

export default CustomBanner;
