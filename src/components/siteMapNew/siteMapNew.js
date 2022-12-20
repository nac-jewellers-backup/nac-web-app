import { Box, Grid, Typography } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/SilverComponents/Header";
import React from "react";

const useStyles = makeStyles((theme) => ({
  siteMapBox: {
    width: "80%",
    margin: "5% auto",
    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "93%",
    },
  },
  heading: {
    color: "#1f1e24",
    fontSize: "28px",
    marginBottom: "25px",
    fontWeight: "500",
  },
  categoryList: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    "& div": {
      width: "23%",
      margin: "auto",
      borderRadius: "12px",
      margin: "0px 0px 40px 0",
      paddingBottom: "15px",
      boxShadow: "0 4px 6px 0 rgb(83 83 83 / 20%)",
      [theme.breakpoints.down("sm")]: {
        width: "23%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "47%",
      },
      "& p": {
        listStyle: "none",
        marginBottom: "4px",
        [theme.breakpoints.down("xs")]: {
          marginBottom: "0px",
        },
        "& a": {
          color: "#231535",
          textDecoration: "none",
          fontSize: "14px",
          lineHeight: "25px",
          padding: "0 10px 0 10px",
          margin: "0 0 0 10px",
          display: "block",
          [theme.breakpoints.down("sm")]: {
            fontSize: "13px",
            padding: "0 6px 0 6px",
            margin: "0 0 0 7px",
          },
          [theme.breakpoints.down("xs")]: {
            fontSize: "12px",
            padding: "0 0px 0 9px",
            margin: "0",
          },
          "&:hover": {
            color: '#600fc6'
          }
        },
      },
    },
  },
  subHeading: {
    display: "block",
    textAlign: "center",
    padding: "8px",
    background: "#2F348B",
    borderRadius: "12px 12px 0 0",
    marginBottom: "30px !important",
    fontSize: "19px !important",
    fontWeight: "550",
    color: "#fff !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px !important",
    },
  },
}));

const SiteMapNew = (props) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Box className={classes.siteMapBox}>
        <h2 className={classes.heading}>Site Index</h2>
        <div style={{ display: "flex" }}>
          <Grid container className={classes.categoryList}>
            {props?.value?.map((e) => {
              return (
                <Grid Item lg={2.9} md={2.9} sm={2.9} xs={5.5}>
                  <Typography className={classes.subHeading}>
                    {e?.categoryHeading}
                  </Typography>
                  {e?.categoryList?.map((val) => {
                    return (
                      <Typography>
                        <a href={val.url}>{val.name}</a>
                      </Typography>
                    );
                  })}
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Box>
      <Footer />
    </Grid>
  );
};

export default SiteMapNew;
