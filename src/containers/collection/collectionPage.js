import React from "react";
import { Typography, Grid, Hidden } from "@material-ui/core";
import styles from "./collectionPageStyle";
import Slideshow from "components/Carousel/carosul";
import { CollectionPageNac, YoungOnes } from "mappers/dummydata/collectionNac";
import Story from "components/story";
import LargeTiles from "components/largeTile/index";
// import FeaturedProduct from 'components/featuredProduct/index';
import SubListingCarousel from "components/subListingCarousel/subListingCarousel";
import Header from "components/SilverComponents/Header";
import Footer from "../../components/Footer/Footer";

export default function CollectionPage(props) {
  const classes = styles();
  const [state, setstate] = React.useState({
    loading: false,
    count: "",
  });
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
  return (
    <Grid
      container
      xs={12}
      lg={12}
      md={12}
      sm={12}
      spacing={12}
      style={{ width: "100%", display: "block" }}
    >
      <Grid xs={12}>
        <Header />
      </Grid>

      <Grid>
        <Hidden smDown>
          {CollectionPageNac.carouselTop.setting.arrowsImg && (
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
          dataCarousel={CollectionPageNac.carouselTop.setting}
        >
          {CollectionPageNac.carouselTop.data.map((val, index) => (
            <>
              <Hidden smDown>
                <Grid container key={index}>
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
                <Grid container key={index}>
                  <a href={val.navigateUrl}>
                    <img
                      src={val.mobileImg}
                      loading="lazy" alt='...'
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </Grid>
              </Hidden>
            </>
          ))}
        </Slideshow>
      </Grid>

      {/* {CollectionPageNac.carouselTop.setting.arrowsImg && (
        <Grid container>
          <Grid item onClick={previous} className={classes.preButton}></Grid>
          <Grid item onClick={next} className={classes.nextButton}></Grid>
        </Grid>
      )}

      <Slideshow
        style={{ width: "100%" }}
        dataCarousel={CollectionPageNac.carouselTop.setting}
        sliderRef={slider}
      >
        {CollectionPageNac.carouselTop.data.map((val, index) => (
          <Grid container key={index}>
            <img src={val.img} className={classes.mainCarosel} />
          </Grid>
        ))}
      </Slideshow> */}

      <Grid container>
        <Story
          heading={YoungOnes.data.heading}
          para={YoungOnes.data.para}
          // store={YoungOnes.data.store}
        />
      </Grid>
      <Grid container xs={12}>
        <LargeTiles />
      </Grid>
      <Grid container>
        {/* <FeaturedProduct /> */}
        <SubListingCarousel />
      </Grid>

      <Grid>
        <Footer />
      </Grid>
    </Grid>
  );
}
