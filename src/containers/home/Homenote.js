import { Typography } from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F9E3BF",
    padding: 20,
  },
  hr: {
    border: "1px solid #CBA561",
    width: "5rem",
  },
  content: {
    textAlign: "center",
    color: "#6E6E71",
    fontSize: 6.97,
  },
}));
const CardTheme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 13,
      fontWeight: "bold",
      fontFamily: "adobe-clean, sans-serif",
    },
  },
});

export default function Homenote(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={CardTheme}>
      <div className={classes.root}>
        <hr className={classes.hr}></hr>
        <div className={classes.content}>
          <Typography>
            In 1973, Shri N. Anjaneyalu Chetty started a jewellery shop in
            Mylapore
            <br />
            hoping to find loyal patrons. What began as a small store was soon a
            <br />
            flourishing business and NAC became a household name in Mylapore!
          </Typography>
        </div>
        <hr className={classes.hr}></hr>
      </div>
    </ThemeProvider>
  );
}
