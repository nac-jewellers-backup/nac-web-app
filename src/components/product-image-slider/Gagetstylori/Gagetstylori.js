import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  typo: {
    margin: "0 0 10px",
    color: "#2F348B",
    fontSize: "11px",
    marginBottom: 0,
    // textAlign: "center",
    fontFamily: "notoSerif-regular",
  },
  mainsource: {
    width: "20%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item className={classes.mainsource}>
        <img
          style={{ width: "70%", height: "100%" }}
          loading="lazy" alt='...'
          src={
            "https://assets.stylori.com/images/Static+Pages/Other+Pages/fromthehouseofnac-pink.svg"
          }
        />
      </Grid>
      <Grid item className={classes.mainsource}>
        <img
          style={{ width: "70%", height: "100%" }}
          loading="lazy" alt='...'
          src={
            "https://assets.stylori.com/images/Static%20Pages/Other%20Pages/certifiedjewellery-pink.svg"
          }
        />
      </Grid>
      <Grid item className={classes.mainsource}>
        <img
          style={{ width: "70%", height: "100%" }}
          loading="lazy" alt='...'
          src={
            "https://assets.stylori.com/images/Static+Pages/Other+Pages/securepayments-pink.svg"
          }
        />
      </Grid>
      <Grid item className={classes.mainsource}>
        <img
          style={{ width: "70%", height: "100%" }}
          loading="lazy" alt='...'
          src={
            "https://assets.stylori.com/images/Static+Pages/Other+Pages/diversestyles-pink.svg"
          }
        />
      </Grid>
      <Grid item className={classes.mainsource}>
        <img
          style={{ width: "70%", height: "100%" }}
          loading="lazy" alt='...'
          src={
            "https://assets.stylori.com/images/Static+Pages/Other+Pages/easyreturns-pink.svg"
          }
        />
      </Grid>
    </Grid>
  );
}
