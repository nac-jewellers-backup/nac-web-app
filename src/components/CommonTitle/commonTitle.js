import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import ArrowLeft from "../../assets/arrowleft";
import ArrowRight from "../../assets/arrowright";
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
          className={classes.mainTitle}
        >
          <Box>
            <ArrowRight className={classes.rightArrow} />
          </Box>
          <Box>
            <Typography
              className={classes.title}
              style={{ fontStyle: "italic", fontSize: props?.fontSize }}
            >
              {props.title.toUpperCase()}
            </Typography>
          </Box>
          <Box>
            <ArrowLeft className={classes.leftArrow} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CommonTitle;
