import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Slideshow from "../../components/Carousel/carosul";
import Header from "../../components/SilverComponents/Header";
import Footer from "components/Footer/Footer";
import { SolitairesData } from "../../mappers/dummydata/solitairesData";
// import { fadeImagessublist } from "../../mappers/dummydata/solitairesData";
import styles from "../solitaires/solitairestyle";
import ProductModal from "../../components/SilverComponents/ProductModal";
export default function Solitaires(props) {
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
      <Grid container item xs={12}>
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
        {SolitairesData.setting.arrowsImg && (
          <Grid container>
            <Grid item onClick={previous} className={classes.preButton}></Grid>
            <Grid item onClick={next} className={classes.nextButton}></Grid>
          </Grid>
        )}
        {/* </Hidden> */}
        <Slideshow dataCarousel={SolitairesData.setting} sliderRef={slider}>
          {SolitairesData.carouselData.map((val, index) => (
            <Grid container key={index} className={classes.headContent}>
              <Typography className={classes.imageContent}>
                {SolitairesData.imageContent}
              </Typography>
              <img key={index} src={val.img} className={classes.mainCarosel} />
            </Grid>
          ))}
        </Slideshow>
      </Grid>
      <Grid container className={classes.contentPart}>
        <Grid item xs={10} sm={10} md={7} lg={7} xl={7}>
          <Grid>
            <Typography className={classes.heading}>
              {SolitairesData.heading}
            </Typography>
          </Grid>
          <Grid>
            <Typography className={classes.bodyContent}>
              {SolitairesData.bodyContent}
            </Typography>
          </Grid>
          <Grid className={classes.hrGrid} xs={3} sm={3} md={2} lg={2} xl={2}>
            <hr className={classes.hrTag}></hr>
          </Grid>
        </Grid>
        <ProductModal />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
