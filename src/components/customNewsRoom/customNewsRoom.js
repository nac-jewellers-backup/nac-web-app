import { Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import CustomNewsRoomStyles from "./style";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useHistory } from "react-router-dom";

const CustomNewsRoom = (props) => {
  const classes = CustomNewsRoomStyles();
  let history = useHistory();
  const handleRoute = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      history.push("/newsroom");
    }
  };
  return (
    <div className={classes.main}>
      <Grid container spacing={3}>
        {props?.value?.map((val) => { 
          if(val.url == ""){
            val.url="https://www.youtube.com/watch?v=4SGmIZ0GoNw"
          }
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
                  <div
                    className={classes.buttonText}
                    onClick={() => handleRoute(val?.url)}
                  >
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
