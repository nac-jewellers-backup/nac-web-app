import { Box, Grid, Typography } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/SilverComponents/Header";
import React from "react";

const useStyles = makeStyles((theme) => ({
  siteMapBox: {
    width: "80%",
    margin: "5% auto",
    height: "100%",
  },
  heading: {
    color: "#1f1e24",
    fontSize: "28px",
    marginBottom: "25px",
    fontWeight: "500",
  },
  gridItem: {
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 100px",
    },
  },
  categoryList: {
    height: "100%",
    borderRadius: "12px",
    paddingBottom: "20px",
    boxShadow: "0 4px 6px 0 rgb(83 83 83 / 20%)",
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
        "&:hover": {
          color: "#600fc6",
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
    <div className={classes.siteMapBox}>
      <h2 className={classes.heading}>Site Index</h2>
      <div>
        <Grid container spacing={4} style={{ height: "100%" }}>
          {props?.value?.map((e) => {
            return (
              <Grid
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}
                className={classes.gridItem}
              >
                <div className={classes.categoryList}>
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
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default SiteMapNew;