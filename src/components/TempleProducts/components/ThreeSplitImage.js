import { Box, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import { CardUseStyles } from "./styles";
import line from "./../../../assets/Icons/line.svg";

const ThreeSplitImage = (props) => {
  const classes = CardUseStyles();
  return (
    <div className={classes.aboutChild} style={{ paddingTop: "0px" }}>
      <Grid
        direction={props?.total?.position === "right" ? "row" : "row-reverse"}
        container
      >
        <Grid item xs={12} md={5}>
          <Grid
            container
            direction={
              props?.total?.firstHeaderLow ? "column-reverse" : "column"
            }
          >
            <div style={{ width: "60%", margin: "auto" }}>
              <Typography className={classes.headerTempleName}>
                {props?.total?.firstHeader}
              </Typography>
              <Typography className={classes.weighTxt}>
                {props?.total?.firstWeigh}
              </Typography>
            </div>
            <Grid container>
              {props?.data?.twoSplit.map((val, i) => (
                <Grid item xs={6}>
                  <img
                    style={{ width: val?.width ? val?.width : "unset" }}
                    // className={classes.imageOfImageWithDescription}
                    src={val?.img}
                  ></img>
                  <Box className={classes.txtBox}>
                    <Typography className={classes.TempleName}>
                      {val?.text}
                    </Typography>
                    <Typography className={classes.weighTxt}>
                      {val?.weigh}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid
            container
            direction={
              props?.total?.secondHeaderLow ? "column-reverse" : "column"
            }
          >
            <div style={{ width: "60%", margin: "auto" }}>
              <Typography className={classes.headerTempleName}>
                {props?.total?.secondHeader}
              </Typography>
              <Typography className={classes.weighTxt}>
                {props?.total?.secondWeigh}
              </Typography>
            </div>
            <Grid container alignItems="baseline">
              {props?.data?.threeSplit.map((val, i) => (
                <Grid item xs={val?.grid}>
                  <img
                    style={{ width: val?.width ? val?.width : "unset" }}
                    // className={classes.imageOfImageWithDescription}
                    src={val?.img}
                  ></img>
                  {val?.multipleText?.length > 0 &&
                    <Grid container>
                   { val?.multipleText?.map((e, i) => (
                    <>
                      <Grid item xs={3} style={{maxWidth:"24%"}}>
                        <Typography className={classes.multipleTextTempleName} >
                          {e?.name}
                        </Typography>
                        <Typography className={classes.multipleTextweighTxt} >
                          {e?.weigh}
                        </Typography>
                        <Typography className={classes.multipleTextweighTxt}>
                          {e?.stone}
                        </Typography>
                      </Grid>
                      {val?.multipleText?.length - 1 !== i && <Divider orientation="vertical" flexItem />}
                      </>
                    ))}
                    </Grid>
                    }
                  <Box className={classes.txtBox}>
                    <Typography className={classes.TempleName}>
                      {val?.text}
                    </Typography>
                    <Typography className={classes.weighTxt}>
                      {val?.weigh}
                    </Typography>
                  </Box>
                </Grid>
              ))}
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

export default ThreeSplitImage;
