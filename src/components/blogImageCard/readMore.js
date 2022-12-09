import { Button, Grid, Typography } from "@material-ui/core";
import { BannerComponent } from "components/BannerComponent";
import React from "react";
import parse from "html-react-parser";
import BlogImageCardStyles from "./style";

const ReadMore = (props) => {
  console.log("propsssssssssss", props);
  const classes = BlogImageCardStyles();
  return (
    <div>
      <div>
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
          <Typography>{parse(props?.data?.header_Bottom)}</Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.text1}>
          <Typography>{parse(props?.data?.description_1)}</Typography>
        </div>
      </div>

      <div>
        <BannerComponent
          custom
          banners={props?.data?.second_Image?.banners}
          dataCarousel={
            props?.data?.second_Image?.banners.length > 1
              ? "multiple"
              : "single"
          }
        />
      </div>
      <div className={classes.content2}>
        <div className={classes.text1}>
          <Typography>{parse(props?.data?.description_2)}</Typography>
        </div>
      </div>
      <Grid
        direction={
          props?.data?.third_Image?.align === "left" ? "row" : "row-reverse"
        }
        container
        spacing={4}
        style={{ marginTop: "30px" }}
      >
        <Grid item xs={12} sm={12} md={6}>
          <div className={classes.leftImage}>
            <img
              className={classes.leftImg}
              src={props?.data?.third_Image?.image}
              alt="jewell"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className={classes.rightContent}>
            <Typography>{parse(props?.data?.description_3)}</Typography>
          </div>
        </Grid>
      </Grid>
      <Grid>
        <div className={classes.bottomText}>
          <Typography>{props?.data?.end_Text}</Typography>
        </div>
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
