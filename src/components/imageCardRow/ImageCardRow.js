import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const CardUseStyles = makeStyles((theme) => ({
  profileRoot: {
    padding: "60px 100px ",
    marginBottom: "30px",
    [theme.breakpoints.down("md")]: {
      padding: "30px 50px !important",
      display: "flex",
      marginBottom: "10px",

    },
    [theme.breakpoints.down("xs")]: {
      padding: "20px 10px !important",
      display: "block",

    },
  },
  profile: {
    width: "100%",
  },
  profileChild: {
    textAlign: "center",
    margin: "10px",
    backgroundColor: "#f4f4f4",
    boxShadow: "5px 6px 5px #a5a4a5",
    [theme.breakpoints.down("md")]: {
      padding: "40px 0px !important",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0px !important",
    },
  },
  border: {
    height: "100%",
  },
  descr: {
    color: theme.palette.gold.main,
    // fontStyle: "italic",
    fontFamily:"notoSerif-italic !important",
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "8px",
    paddingTop: "28px",
    letterSpacing:"1px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
      fontWeight: "700",
      paddingTop: "15px",

    },

  },
  readMoreText:{
    fontFamily:"notoSerif-italic !important",
  },
  readmore: {
    color: "#6e6f71",
    textDecoration: "none",
    fontStyle: "italic",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "40px",

    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      paddingBottom: "20px",

    },
  }
}))


const ImageCardRow = (props) => {
  console.log("card", props)
  const classes = CardUseStyles()
  return (
    <Grid container className={classes.profileRoot}>
      {props.data.map((e, i) => {
        return (
          <Grid item lg={4} md={4} sm={12} >
            <Box className={classes.profileChild}>
              <Box >
                <Box className={classes.border} >
                  <img src={e?.image} alt='profile' className={classes.profile} ></img>
                </Box>
              </Box>
              <Box  >
                <Typography className={classes.descr}>{e?.descr}</Typography>
                <Link className={classes.readmore} to={e?.url}><Typography className={classes.readMoreText}>{e?.readmore}</Typography> <ArrowForwardIcon style={{ paddingLeft: 10 }} /></Link>
              </Box>
            </Box>
          </Grid >
        )
      })}
    </Grid>
  );
};

export default ImageCardRow;
