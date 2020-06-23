import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import Slideshow from "components/Carousel/carosul";
import MediaCarousel from "../../components/mediacarousel/index";
import Header from "components/SilverComponents/Header";
import styles from "containers/savings/savingsstyle";
import {
  CollectionHomeNac,
  IndexCollectionHomePage,
} from "../../mappers/dummydata/savingNac";
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

  const dataCarousel = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    fade: false,
    dots: false,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const values = () => {
    if (props.match.path === "/collectionhome") {
      return IndexCollectionHomePage;
    }
  };

  return (
    <Grid container style={{ display: "block" }}>
      <Grid item>
        <Header />
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.bannerImg}
      >
        {/* <Hidden smDown> */}

        <Hidden smDown>
          {CollectionHomeNac.carouselTop.setting.arrowsImg && (
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
          dataCarousel={CollectionHomeNac.carouselTop.setting}
        >
          {CollectionHomeNac.carouselTop.data.map((val, index) => (
            <>
              <Hidden smDown>
                <Grid container key={index}>
                  <a href={val.navigateUrl} style={{ width: "100%" }}>
                    <img
                      src={val.img}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid container key={index}>
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
      <Grid>
        <Footer />
      </Grid>
    </Grid>
  );
}
