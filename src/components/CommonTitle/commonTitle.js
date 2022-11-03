import { Box, Grid, Typography } from "@material-ui/core";
import LeftArrow from "assets/leftArrow";
import RightArrow from "assets/rightArrow";
import React from "react";
import useStyles from "./styles";

const CommonTitle = (props) => {
  const classes = useStyles();
  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          className={props?.styleProps ? classes.customStyleHeader : classes.mainTitle}
        >
          <Box>
            <LeftArrow className={classes.leftArrow} />
          </Box>
          <Box>
            <Typography
              className={props?.styleProps ? classes.customTitle :classes.title}
              style={{ fontStyle: "italic" }}
            >
              {props.title.toUpperCase()}
            </Typography>
          </Box>
          <Box>
            <RightArrow className={classes.rightArrow} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CommonTitle;
