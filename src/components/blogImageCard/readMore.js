import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import BlogImageCardStyles from "./style";

const ReadMore = (props) => {
  console.log("propsssssssssss", props);
  const classes = BlogImageCardStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div className="topImage">
            <img
              className={classes.jewellImg}
              src={props?.data?.image}
              alt="Nac Jewell"
            />
          </div>
          <div className={classes.heading}>
            <div className={classes.title}>
              <Typography>{props?.data?.header}</Typography>
            </div>
            <div className={classes.subText}>
              <Typography>{props?.data?.header_Bottom}</Typography>
            </div>
          </div>
          <div className={classes.content}>
            <div className={classes.text1}>
              <Typography>{props?.data?.description_1}</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="centerImage">
            <img
              className={classes.jewellImg2}
              src={props?.data?.second_Image}
              alt="Nac Jewell"
            />
          </div>
          <div className={classes.content2}>
            <div className={classes.text1}>
              <Typography>{props?.data?.description_2}</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginTop: "30px" }}>
        <Grid item xs={12} sm={12} md={6}>
          <div className={classes.leftImage}>
            <img
              style={{ width: "100%" }}
              className={classes.leftImg}
              src={props?.data?.third_Image}
              alt="jewell"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className={classes.rightContent}>
            <Typography>{props?.data?.description_3}</Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.bottomText}>
            <Typography>{props?.data?.end_Text}</Typography>
          </div>
        </Grid>
      </Grid>
      <div className={classes.backBtn}>
        <Button onClick={props?.buttonClick} variant="outlined">
          Back
        </Button>
      </div>
    </div>
  );
};

export default ReadMore;
