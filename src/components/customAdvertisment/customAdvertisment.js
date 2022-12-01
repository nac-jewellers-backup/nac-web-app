import { Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CustomAdvertisementStyles from "./style";
import { useHistory } from "react-router-dom";

const CustomAdvertisement = (props) => {
  let history = useHistory();
  const classes = CustomAdvertisementStyles();
  const handleRoute = (url) => {
    history.push(url);
  }
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
                    <Typography className={classes.italic_text}>{val?.italic_text}</Typography>
                  </div>
                  <div className={classes.buttonText} onClick={() => handleRoute(val?.url)} >
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

export default CustomAdvertisement;
