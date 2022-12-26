import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { CardUseStyles } from "./styles";
import line from "./../../../assets/Icons/line.svg";

const TwoGridImages = (props) => {
  const classes = CardUseStyles();
  return (
    <div className={classes.aboutChild}>
      <Grid container >
        <Grid item xs={12} md={6}>
          <Grid container alignItems="center">
            <Grid item xs={7}>
              <div style={{ textAlign: "right" }}>
                <img
                  className={classes.multipleSimilarDiv}
                  src={props?.data?.image1}
                />
              </div>
            </Grid>
            <Grid item xs={5}>
              <Typography className={classes.TempleName}>
                {props.data?.header1}
              </Typography>
              <Typography className={classes.weighTxt}>
                {props.data?.subHeader1}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container alignItems="center">
            
            <Grid item xs={3}>
              <Typography className={classes.TempleName}>
                {props.data?.header2}
              </Typography>
              
            </Grid>
            <Grid item xs={9}>
              <div style={{ textAlign: "left" }}>
                <img
                  className={classes.multipleSimilarDiv}
                  src={props?.data?.image2}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
        
      </Grid>
      <div style={{ width: "100%" }}>
          <img src={line} style={{ width: "100%" }}></img>
        </div>
    </div>
  );
};

export default TwoGridImages;
