import React from "react";
import Header from "components/SilverComponents/Header";
import { Typography, Grid } from "@material-ui/core";
import styles from "./collectionPageStyle";
import Slideshow from "components/Carousel/carosul";
import { Rudramadevi } from "mappers/dummydata/collectionNac";
import Footer from "../../components/Footer/Footer";

export default function Blog(props) {
  const classes = styles();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const slider = React.createRef();

  return (
    <Grid container xs={12}>
      <Header />
      <>
        <Grid item xs={12}>
          <Grid
            item
            onClick={previous}
            className={classes.preButton}
            xs={12}
            lg={12}
          ></Grid>
          <Grid
            item
            xs={12}
            lg={12}
            onClick={next}
            className={classes.nextButton}
          ></Grid>
        </Grid>
        <Slideshow
          style={{ width: "100%" }}
          dataCarousel={Rudramadevi.carouselTop.setting}
          sliderRef={slider}
        >
          {Rudramadevi.carouselTop.data.map((val, index) => (
            <Grid container key={index}>
              <img src={val.img} className={classes.mainCarosel} alt="images" loading="lazy"/>
            </Grid>
          ))}
        </Slideshow>
      </>

      <Grid style={{ padding: "30px 0px" }} container>
        <Grid container className={classes.text} xs={12}>
          <Typography style={{ width: "100%", fontSize: "28px" }}>
            The Original Drawings from the NAC Team
          </Typography>
          <Typography
            style={{ width: "100%", color: "#5d5d5d", fontSize: "14px" }}
          >
            Staff Writer, May 6 2016, 14:23
          </Typography>
        </Grid>
        <Grid container className={classes.container} xs={10} lg={6}>
          <Typography
            dangerouslySetInnerHTML={{ __html: Rudramadevi.para }}
          ></Typography>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}
