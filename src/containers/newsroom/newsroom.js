import React from "react";
import { Grid,Hidden } from "@material-ui/core";
import Header from "components/SilverComponents/Header";
import CardIndexPage from "components/card/index";
import styles from "../savings/savingsstyle";
import Slideshow from "components/Carousel/carosul";
import {
  IndexTemplePage,
  IndexAdvertisingPage,
  IndexNewsRoomPage,
} from "mappers/dummydata/savingNac";
import Footer from "components/Footer/Footer";

export default function Newsroom(props) {
    const classes = styles();
    const next = () => {
      slider.current.slickNext();
    };
    const previous = () => {
      slider.current.slickPrev();
    };
    const slider = React.createRef();

  const values = () => {
    if (props.match.path === "/newsroom") {
      return IndexNewsRoomPage;
    } else if (props.match.path === "/advertising") {
      return IndexAdvertisingPage;
    } else if (props.match.path === "/temple-work") {
      return IndexTemplePage;
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
        {IndexNewsRoomPage.carouselTop.setting.arrowsImg && (
          <Grid container>
            <Grid item onClick={previous} className={classes.preButton}></Grid>
            <Grid item onClick={next} className={classes.nextButton}></Grid>
          </Grid>
        )}
        {/* </Hidden> */}
       <Hidden smDown>
       <Slideshow
          dataCarousel={IndexNewsRoomPage.carouselTops.setting}
          sliderRef={slider}
        >
          {IndexNewsRoomPage.carouselTops.data.map((val, index) => (
            <Grid container key={index} className={classes.headContent}>
              <img src={val.img} className={classes.mainCarosel} />
            </Grid>
          ))}
        </Slideshow>
       </Hidden>
       <Hidden smUp>
       <Slideshow
          dataCarousel={IndexNewsRoomPage.carouselTops.setting}
          sliderRef={slider}
        >
          {IndexNewsRoomPage.carouselTops.data.map((val, index) => (
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
