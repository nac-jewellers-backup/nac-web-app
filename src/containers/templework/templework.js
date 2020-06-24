import React from "react";
import { Grid } from "@material-ui/core";
import Header from "components/SilverComponents/Header";
// import {IndexTemplePage , IndexAdvertisingPage } from 'mappers/dummydata/savingNac';
import styles from "../savings/savingsstyle";
import Slideshow from "components/Carousel/carosul";
import {
  IndexTemplePage,
  IndexAdvertisingPage,
  IndexNewsRoomPage
} from "mappers/dummydata/savingNac";
import CardIndexPage from "components/card/index";
import Footer from "components/Footer/Footer";
export default function Templework(props) {
  // const classes = styles();
  const classes = styles();
  const [state, setstate] = React.useState({
    loading: false,
    count: ""
  });
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
    <Grid container>
      <Grid item xs = {12}>
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
        {IndexTemplePage.carouselTop.setting.arrowsImg && (
          <Grid container>
            <Grid item onClick={previous} className={classes.preButton}></Grid>
            <Grid item onClick={next} className={classes.nextButton}></Grid>
          </Grid>
        )}
        {/* </Hidden> */}
        <Slideshow
          dataCarousel={IndexTemplePage.carouselTops.setting}
          sliderRef={slider}
        >
          {IndexTemplePage.carouselTops.data.map((val, index) => (
            <Grid container key={index} className={classes.headContent}>
              <img src={val.img} className={classes.mainCarosel} />
            </Grid>
          ))}
        </Slideshow>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
        <CardIndexPage value={values()} />
      </Grid>
      <Footer />
    </Grid>
  );
}
