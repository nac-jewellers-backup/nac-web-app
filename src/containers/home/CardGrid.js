import { Box, Grid, Hidden } from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import React from "react";
import Homenote from "./Homenote";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "4px 4px 4px #bebfbf !important",
  },

  note: {
    height: "100%",
    backgroundColor: "#F9E3BF",
    marginLeft: 20,
    alignItems: "center",
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

export default function Card(props) {
  const classes = useStyles();


  return (
    <ThemeProvider theme={CardTheme}>
      <div>
        <Hidden smDown>
          <div className={classes.root}>
            <Grid container spacing={0}>
              <Grid item xs={4}>
                <Box
                  border={2}
                  borderColor="#BB8D57"
                  width="100%"
                  padding={1}
                  bgcolor="white"
                >
                  <img
                    src={props.data.image}
                    alt="coverimage"
                    style={{ objectFit: "contain" }}
                    height="100%"
                    width="100%"
                  />
                </Box>
              </Grid>
              <Grid item xs={8}>
                <div className={classes.note}>
                  <Homenote
                    content={
                      props?.data?.content ??
                      "N. Narayana Chetty makes a humble beginning at home: he designs and crafts gold jewellery by hand. What starts as a small group of interested customers, gradually grows into a loyal patronage"
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </Hidden>

        <Hidden mdUp>
          <Grid container>
            <Grid item xs={11} sm={7}>
              <div className={classes.root}>
                <Box
                  border={2}
                  borderColor="#BB8D57"
                  width="100%"
                  padding={1}
                  bgcolor="white"
                >
                  <img
                    src={props.data.image}
                    alt="coverimage"
                    style={{ objectFit: "contain" }}
                    height="100%"
                    width="100%"
                  />
                </Box>
              </div>
            </Grid>
          </Grid>
        </Hidden>
      </div>
    </ThemeProvider>
  );
}
