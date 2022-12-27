import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { CardUseStyles } from "./styles";
import line from "./../../../assets/Icons/line.svg";

const ImageWithDescription = (props) => {
  const classes = CardUseStyles();

  return (
    <Grid container className={classes.aboutChild} spacing={2}>
      {props?.data?.map((e, i) => (
        <Grid
          item
          lg={3}
          md={3}
          sm={6}
          xs={6}
          className={props?.custom ? classes.customGridBox : classes.GridBox}
        >
          <Box className={classes.TempleImg}>
            <img
              style={{ width: e?.width ? e?.width : "unset" }}
              src={e?.img}
            ></img>
          </Box>
          <Box className={classes.txtBox}>
            <Typography className={classes.TempleName}>{e?.text}</Typography>
            <Typography className={classes.weighTxt}>{e?.weigh}</Typography>
          </Box>
        </Grid>
      ))}
      <div style={{ width: "100%" }}>
        <img src={line} style={{ width: "100%" }}></img>
      </div>
    </Grid>
  );
};

export default ImageWithDescription;
