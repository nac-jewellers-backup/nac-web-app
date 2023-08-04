import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { CardUseStyles } from "./styles";
import line from "./../../../assets/Icons/line.svg";

const TwoImageSplit = (props) => {
  const classes = CardUseStyles();

  return (
    <div className={classes.aboutChild} style={{ paddingTop: "0px" }}>
      <Grid container style={{ alignItems: "end" }}>
        <Grid item xs={12} md={6}>
          <Grid container alignItems="baseline">
            {props?.data?.firstData.map((val, i) => (
              <Grid item xs={6} style={{ textAlign: "center"  }}>
                <img
                  style={{ width: val?.width ? val?.width : "100%" }}
                  src={val?.img}
                ></img>
                <Box className={classes.txtBox}>
                  <Typography className={classes.TempleName}>
                    {val?.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <div style={{ width: "60%", margin: "auto" }}>
            <Typography className={classes.headerTempleName}>
              {props?.total?.firstHeader}
            </Typography>
            <Typography className={classes.weighTxt}>
              {props?.total?.firstWeigh}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: "center"  }}>
          <img style={{ width: "100%" }} src={props?.data?.secondData?.img} />
          <div style={{ width: "60%", margin: "auto" }}>
            <Typography className={classes.headerTempleName}>
              {props?.total?.secondHeader}
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div style={{ width: "100%" }}>
        <img src={line} style={{ width: "100%" }}></img>
      </div>
    </div>
  );
};

export default TwoImageSplit;
