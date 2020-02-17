import React from "react";
import { Grid } from "@material-ui/core";
import Slideshow from "../../components/carousal/carousal";
import { ExperiencePageNac } from "mappers/dummydata/savingNac";
import MediaCarousel from "../../components/mediacarousel/index";
// import Header from "../../components/header/header";
import styles from "../savings/savingsstyle";

export default function Experience(props) {
  const classes = styles();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const slider = React.createRef();
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
        {/* <Hidden smDown> */}
        {ExperiencePageNac.carouselTop.setting.arrowsImg && (
          <Grid container>
            <Grid item onClick={previous} className={classes.preButton}></Grid>
            <Grid item onClick={next} className={classes.nextButton}></Grid>
          </Grid>
        )}
        {/* </Hidden> */}
        <Slideshow
          dataCarousel={ExperiencePageNac.carouselTop.setting}
          sliderRef={slider}
        >
          {ExperiencePageNac.carouselTop.data.map((val, index) => (
            <Grid container key={index} className={classes.headContent}>
              <img src={val.img} className={classes.mainCarosel} />
            </Grid>
          ))}
        </Slideshow>
      </Grid>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12} container>
        <Grid xs={10} sm={10} md={10} lg={10} xl={10} container className={classes.gridTen}>
          <Grid item style={{ height: "40px", width: "100%" }}></Grid>
          <MediaCarousel />
        </Grid>
      </Grid>
    </Grid>
  );
}
