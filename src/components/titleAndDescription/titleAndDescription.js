import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import ArrowLeft from "../../assets/arrowleft";
import ArrowRight from "../../assets/arrowright";

const TitleAndDescription = (props) => {
  const classes = useStyles();
  const { title, description } = props;
  return (
    <Grid xs={12} className={classes.roots}>
      <div style={{ textAlign: "center" }}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <ArrowRight />
          </Box>
          <Typography className={classes.headings}>{title}</Typography>
          <Box>
            <ArrowLeft />
          </Box>
        </Box>
        <div
          style={{ textAlign: "center", margin: "auto" }}
          className={classes.subHeader}
        >
          {description}
        </div>
      </div>
    </Grid>
  );
};

export default TitleAndDescription;
