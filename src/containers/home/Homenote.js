import { Box, Typography } from "@material-ui/core";
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
    textAlign: "center",
  },
  hr: {
    border: "1px solid #CBA561",
    width: "5rem",
    padding: 0,
  },

  content: {
    textAlign: "center",
    color: "#6E6E71",

    fontFamily: "NotoSerif",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 15,
    },
  },
  img: {
    height: 40,
    width: 40,
  },
  flex: {
    display: "flex",
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
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Box marginBottom={-2}>
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+215.svg"
              alt="t
          opimage"
          loading="lazy"
              className={classes.img}
            />
          </Box>
          <Box>
            <hr className={classes.hr}></hr>
          </Box>
        </Box>

        <div className={classes.content}>
          <Typography className={classes.content}>{props.content}</Typography>
        </div>
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Box>
            <hr className={classes.hr}></hr>
          </Box>
          <Box marginTop={-1}>
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+53.svg"
              alt="t
               opimage"
               loading="lazy" 
              className={classes.img}
            />
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}
