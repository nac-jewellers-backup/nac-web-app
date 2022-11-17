import { Box, Grid, Typography } from "@material-ui/core";
import LeftArrow from "assets/leftArrow";
import RightArrow from "assets/rightArrow";
import React from "react";
import CollectionHeaderStyles from "./style";

const CollectionHeader = (props) => {
  const classes = CollectionHeaderStyles();

  return (
    <div className={classes.main}>
      {props?.value?.map((val) => {
        return (
          <>
            <Grid container direction="row" style={{ overflow: "hidden" }}>
              <Grid item xs={12}>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  className={
                    props?.styleProps
                      ? classes.customStyleHeader
                      : classes.mainTitle
                  }
                >
                  <Box>
                    <LeftArrow className={classes.leftArrow} />
                  </Box>
                  <Box>
                    <Typography
                      className={
                        props?.styleProps ? classes.customTitle : classes.title
                      }
                    >
                      {val?.title.toUpperCase()}
                    </Typography>
                  </Box>
                  <Box>
                    <RightArrow className={classes.rightArrow} />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.content}>
                  <Typography>{val?.description}</Typography>
                </div>
              </Grid>
            </Grid>
          </>
        );
      })}
    </div>
  );
};

export default CollectionHeader;
