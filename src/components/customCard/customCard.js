import { Button, Card, Hidden, Typography } from "@material-ui/core";
import React from "react";
import CustomCardStyles from "./style";

const CustomCard = (props) => {
  const classes = CustomCardStyles();

  return (
    <>
      {/* TITLE */}

      <div className={classes.title}>
        <Typography>{(props?.value.length > 0) ? "Current Openings" : "No Current Openings" }</Typography>
      </div>
      <Hidden xsDown>
        {props?.value?.map((e) => {
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
                  <Button disabled={true} onClick={() => props?.buttonClick(e)}>
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
        {props?.value?.map((val) => {
          return (
            <Card className={classes.cardMobile} style={{width:"100%"}}>
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
                <Button
                  onClick={() => props?.buttonClick(val)}
                  disabled={true}
                  className={classes.buttonMobile}
                >
                  {val?.button_Text}
                </Button>
              </div>
            </Card>
          );
        })}
      </Hidden>

      
      {/* VIEW MORE */}
      {(props?.value.length > 0) && (
        <Hidden xsDown>
          <div className={classes.viewMore}>
            <Button onClick={props?.handleRequest}>View More</Button>
          </div>
        </Hidden>
      )}

      {/* VIEW MORE MOBILE */}
      {(props?.value.length > 0) && (
        <Hidden smUp>
          <div className={classes.viewMoreMobile}>
            <div onClick={props?.handleRequest} className={classes.viewMoreButton}>
              View More
            </div>
          </div>
        </Hidden>
      )}
    </>
  );
};

export default CustomCard;
