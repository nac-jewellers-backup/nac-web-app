import React from "react";
import { Grid,Hidden } from "@material-ui/core";
import Header from "components/SilverComponents/Header";
import CardIndexPage from "components/card/index";
import styles from "../savings/savingsstyle";
import Slideshow from "components/Carousel/carosul";
// import {IndexTemplePage , IndexAdvertisingPage } from 'mappers/dummydata/savingNac';
import {
  IndexTemplePage,
  IndexAdvertisingPage,
  IndexNewsRoomPage,
} from "mappers/dummydata/savingNac";
import Footer from "components/Footer/Footer";
// import { IndexAdvertisingPage } from 'mappers/dummydata/savingNac';

export default function Advertising(props) {
    const classes = styles();

    const next = () => {
      slider.current.slickNext();
    };
    const previous = () => {
      slider.current.slickPrev();
    };
    const slider = React.createRef();

  const values = () => {
    if (props.match.path === "/temple-work") {
      return IndexTemplePage;
    } else if (props.match.path === "/advertising") {
      return IndexAdvertisingPage;
    } else if (props.match.path === "/news-room") {
      return IndexNewsRoomPage;
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
        {IndexAdvertisingPage.carouselTop.setting.arrowsImg && (
          <Grid container>
            <Grid item onClick={previous} className={classes.preButton}></Grid>
            <Grid item onClick={next} className={classes.nextButton}></Grid>
          </Grid>
        )}
        {/* </Hidden> */}
       <Hidden smDown>
       <Slideshow
          dataCarousel={IndexAdvertisingPage.carouselTops.setting}
          sliderRef={slider}
        >
          {IndexAdvertisingPage.carouselTops.data.map((val, index) => (
            <Grid container key={index} className={classes.headContent}>
              <img src={val.img} className={classes.mainCarosel} />
            </Grid>
          ))}
        </Slideshow>
       </Hidden>
       <Hidden smUp>
       <Slideshow
          dataCarousel={IndexAdvertisingPage.carouselTops.setting}
          sliderRef={slider}
        >
          {IndexAdvertisingPage.carouselTops.data.map((val, index) => (
            <Grid container key={index} className={classes.headContent}>
              <img src={val.mobileImg} className={classes.mainCarosel} />
            </Grid>
          ))}
        </Slideshow>
       </Hidden>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <CardIndexPage value={values()} />
      </Grid>
      <Footer />
    </Grid>
  );
}
