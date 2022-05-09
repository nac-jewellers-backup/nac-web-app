import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import Slideshow from "components/Carousel/carosul";
import { SavingPageNac } from "mappers/dummydata/savingNac";
import MediaCarousel from "../../components/mediacarousel/mediaCarousel";
import styles from "./savingsstyle";
import { IndexSavingPage } from "mappers/dummydata/savingNac";
import Footer from "../../components/Footer/Footer";
export default function Savings(props) {
  const classes = styles();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const slider = React.createRef();

  const values = () => {
    if (props.match.path === "/savingscheme") {
      return IndexSavingPage;
    }
  };
  return (
    <Grid container>
      {/* <Header /> */}

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.bannerImg}
      >
        <Hidden smDown>
          {SavingPageNac.carouselTop.setting.arrowsImg && (
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
          dataCarousel={SavingPageNac.carouselTop.setting}
        >
          {SavingPageNac.carouselTop.data.map((val, index) => (
            <>
              <Hidden smDown>
                <Grid container key={index} className={classes.headContent}>
                  <a href={val.navigateUrl} style={{ width: "100%" }}>
                    <img
                      src={val.img}
                      loading="lazy" alt='...'
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
                      loading="lazy" 
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </Grid>
              </Hidden>
            </>
          ))}
        </Slideshow>

        {/* <Hidden smDown> */}
        {/* {IndexSavingPage.setting.arrowsImg && (
          <Grid container>
            <Grid item onClick={previous} className={classes.preButton}></Grid>
            <Grid item onClick={next} className={classes.nextButton}></Grid>
          </Grid>
        )} */}
        {/* </Hidden> */}
        {/* <Slideshow dataCarousel={values().setting} sliderRef={slider}>
          {values() &&
            values().carouselData &&
            values().carouselData.map((val, index) => (
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
      <Footer />
    </Grid>
  );
}
