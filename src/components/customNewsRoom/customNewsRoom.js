import { Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import CustomNewsRoomStyles from "./style";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const CustomNewsRoom = (props) => {
  console.log("logs", props);
  const classes = CustomNewsRoomStyles();
  return (
    <div className={classes.main}>
      <Grid container spacing={3}>
        {props?.value?.map((val) => {
          return (
            <>
              <Grid item xs={12} md={6} lg={4}>
                <Card className={classes.cardSection}>
                  <div className={classes.imageSection}>
                    <img src={val?.img} alt="NAC Jewellers" />
                  </div>
                  <div className={classes.description}>
                    <Typography>{val?.description}</Typography>
                  </div>
                  <div className={classes.buttonText}>
                    <Typography>
                      {val?.button_text}
                      <ArrowForwardIcon />
                    </Typography>
                  </div>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
    </div>
  );
};

export default CustomNewsRoom;
