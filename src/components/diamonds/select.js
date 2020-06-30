import React, { useState } from "react";
import styles from "./style";
import { Grid, Typography } from "@material-ui/core";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Sliders from "./slider";
export default function DiamondSelect(props) {
  const [state, setState] = useState({});
  const classes = styles();

  return (
    <Grid container className={classes.dimaondSelectContainer}>
      <Grid lg={5} xs={12} className={classes.algin} style={{ margin: "auto" }}>
        <Grid item className={classes.containers} xs={12}>
          <Grid item className={classes.numEffect}>
            2
          </Grid>
          <Typography className={classes.text}>Select Price Range</Typography>
        </Grid>

        <Sliders />
      </Grid>
      <Grid lg={5} xs={12} className={classes.algin} style={{ margin: "auto" }}>
        <Grid item className={classes.containers} xs={12}>
          <Grid item className={classes.numEffect}>
            3
          </Grid>
          <Typography className={classes.text}>Select Carat Range</Typography>
        </Grid>

        <Sliders />
      </Grid>
    </Grid>
  );
}
