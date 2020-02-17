import React from "react";
import { Grid } from "@material-ui/core";
import Slideshow from "components/Carousel/carosul";
import MediaCarousel from "../../components/mediacarousel/index";
import Header from "components/SilverComponents/Header";
import styles from "containers/savings/savingsstyle";
import { IndexSavingPage } from "mappers/dummydata/savingNac";
import { IndexExperiencePage } from "mappers/dummydata/savingNac";
import { IndexCollectionHomePage } from "mappers/dummydata/savingNac";

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
    } else if (props.match.path === "/experiences") {
      return IndexExperiencePage;
    } else if (props.match.path === "/collectionhome") {
      return IndexCollectionHomePage;
    }
  };
  return (
    <Grid container>
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
        {IndexSavingPage.setting.arrowsImg && (
          <Grid container>
            <Grid item onClick={previous} className={classes.preButton}></Grid>
            <Grid item onClick={next} className={classes.nextButton}></Grid>
          </Grid>
        )}
        {/* </Hidden> */}
        <Slideshow dataCarousel={values().setting} sliderRef={slider}>
          {values() &&
            values().carouselData &&
            values().carouselData.map((val, index) => (
              <Grid container key={index} className={classes.headContent}>
                <img src={val.img} className={classes.mainCarosel} />
              </Grid>
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
    </Grid>
  );
}
