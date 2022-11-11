import { Button, Card, Hidden, Typography } from "@material-ui/core";
import React from "react";
import CustomCardStyles from "./style";

const CustomCard = (props) => {
  const classes = CustomCardStyles();
  return (
    <>
      {/* TITLE */}

      <div className={classes.title}>
        <Typography>Current Openings</Typography>
      </div>
      <Hidden xsDown>
        {props?.data?.map((e) => {
          return (
            <Card className={classes.cardSection}>
              <div className={classes.firstLayer}>
                <div className={classes.left}>
                  <div className={classes.role}>
                    <Typography>{e?.job_Role}</Typography>
                  </div>
                  <div className={classes.location}>
                    <Typography>{e?.location}</Typography>
                  </div>
                </div>
                <div className={classes.right}>
                  <Button onClick={() => props?.handleClick(e)}>
                    {e?.button_Text}
                  </Button>
                </div>
              </div>
              <div className={classes.secondLayer}>
                <Typography>{e?.description}</Typography>
              </div>
            </Card>
          );
        })}
      </Hidden>

      {/* MOBILE SCREEN */}

      <Hidden smUp>
        {props?.data?.map((val) => {
          return (
            <Card className={classes.cardMobile}>
              <div className={classes.roleLayer}>
                <div className={classes.roleMobile}>
                  <Typography>{val?.job_Role}</Typography>
                </div>
                <div className={classes.locationMobile}>
                  <Typography>{val?.location}</Typography>
                </div>
              </div>
              <div className={classes.textLayer}>
                <Typography>{val?.description}</Typography>
              </div>
              <div className={classes.buttonLayer}>
                <div
                  onClick={() => props?.handleClick(val)}
                  className={classes.buttonMobile}
                >
                  Apply Now
                </div>
              </div>
            </Card>
          );
        })}
      </Hidden>
    </>
  );
};

export default CustomCard;
