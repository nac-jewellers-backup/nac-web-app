import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const ProfileUseStyles = makeStyles((theme) => ({
  profileRoot: {
    padding: "70px 100px "
  },
  profile: {
    width: "100%",
    height: "300px"
  },
  profileChild: {
    textAlign: "center"
  },
  border: {
    border: "4px solid #b1812c",
    padding: "7px",
    height: "100%",
    margin: '10px'
  },
  profileName: {
    color: theme.palette.gold.main,
    fontStyle: "italic",
    fontSize: "19px",
    fontWeight: "700"
  },
  role: {
    color: "#6e6f71",
    fontSize: "19px",
    fontWeight: "700",
  }
}))

const ImageCardRow = (props) => {

  const classes = ProfileUseStyles()
  return (
    <Grid container className={classes.profileRoot}>
      {props.data[1].imageCard.map((e, i) => {
        return (
          <Grid item lg={4} md={4} sm={12} className={classes.profileChild}>
            <Box className={classes.profileDiv}>
              <Box className={classes.border} >
                <img src={e?.img} alt='profile' className={classes.profile} ></img>
              </Box>
            </Box>
            <Typography className={classes.profileName}>{e?.name}</Typography>
            <Typography className={classes.role}>{e?.role}</Typography>
          </Grid >
        )
      })}
    </Grid>
  );
};

export default ImageCardRow;
