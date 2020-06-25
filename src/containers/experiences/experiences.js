import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import Slideshow from "../../components/Carousel/carosul";
import {
  ExperiencePageNac,
  IndexExperiencePage,
} from "mappers/dummydata/savingNac";
// import MediaCarousel from "../../components/mediacarousel/index";
import MediaCarousel from "../../components/mediacarousel/mediaCarousel";
// import Header from "../../components/header/header";
import styles from "../savings/savingsstyle";
import Header from "components/SilverComponents/Header";
export default function Experience(props) {
  const classes = styles();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const slider = React.createRef();

  const values = () => {
    debugger
    if (props.match.path === "/experiences") {
      return IndexExperiencePage;
    }
  };
  return (
    <Grid container>
      <Header />

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Hidden smDown>
          {ExperiencePageNac.carouselTop.setting.arrowsImg && (
            <Grid container>
              <Grid
                item
                onClick={previous}
                className={classes.preButton}
              ></Grid>
              <Grid item onClick={next} className={classes.nextButton}></Grid>
            </Grid>
          )}
        </Hidden>
        <Slideshow
          sliderRef={slider}
          dataCarousel={ExperiencePageNac.carouselTop.setting}
        >
          {ExperiencePageNac.carouselTop.data.map((val, index) => (
            <>
              <Hidden smDown>
                <Grid container key={index} className={classes.headContent}>
                  <a href={val.navigateUrl} style={{ width: "100%" }}>
                    <img
                      src={val.img}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid container key={index} className={classes.headContent}>
                  <a href={val.navigateUrl}>
                    <img
                      src={val.mobileImg}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </Grid>
              </Hidden>
            </>
          ))}
        </Slideshow>

        {/* {ExperiencePageNac.carouselTop.setting.arrowsImg && (
          <Grid container>
            <Grid item onClick={previous} className={classes.preButton}></Grid>
            <Grid item onClick={next} className={classes.nextButton}></Grid>
          </Grid>
        )}
      
        <Slideshow
          dataCarousel={ExperiencePageNac.carouselTop.setting}
          sliderRef={slider}
        >
          {ExperiencePageNac.carouselTop.data.map((val, index) => (
            <Grid container key={index} className={classes.headContent}>
              <img src={val.img} className={classes.mainCarosel} />
            </Grid>
          ))}
        </Slideshow> */}
      </Grid>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12} container>
        <Grid
          xs={10}
          sm={10}
          md={10}
          lg={10}
          xl={10}
          container
          className={classes.gridTen}
        >
          <Grid item style={{ height: "40px", width: "100%" }}></Grid> 
          <MediaCarousel value={values()} />
        </Grid>
      </Grid>
    </Grid>
  );
}
