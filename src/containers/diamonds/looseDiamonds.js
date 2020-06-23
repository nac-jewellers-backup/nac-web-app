import React from "react";
import styles from "./style";
import Slideshow from "components/Carousel/carosul";
import Header from "components/SilverComponents/Header";
import { Grid, Typography, Hidden } from "@material-ui/core";
import { diamondsData } from "mappers/dummydata/diamonds";
import Story from "components/story";
import DiamondShpae from "components/diamonds/diamondShape";
import DiamondSelect from "components/diamonds/select";
import DiamondRange from "components/diamonds/range";
import DiamondList from "components/diamonds/list";

export default function Diamonds(props) {
  const classes = styles();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const slider = React.createRef();
  //  const handleRange=(age)=>{
  //    [name]=age
  //  }
  // const

  return (
    <Grid container xs={12}>
      <Header />

      <Grid item xs={12}>
     

        <Hidden smDown>
          {diamondsData.carouselTop.setting.arrowsImg && (
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
          dataCarousel={diamondsData.carouselTop.setting}
        >
          {diamondsData.carouselTop.data.map((val, index) => (
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
      <Grid container xs={12} >
        <Story
          heading={diamondsData.data.heading}
          para={diamondsData.data.para}
        />
      </Grid>
      <Grid container className={classes.dataCon} xs={11} lg={9}>
        <DiamondShpae value={diamondsData} />
        <DiamondSelect
        //  handleRange={handleRange()}
        />
        <DiamondRange value={diamondsData} />
      </Grid>
      <Grid container className={classes.dataCon} xs={11} lg={9}>
        <Grid item style={{ float: "left", display: "flex" }}>
          <Typography>
            Here are some of our best solitaires handpicked for you
          </Typography>
        </Grid>
        <Grid item style={{ float: "right", display: "flex" }}>
          <Typography>Showing 1 of 55,649 results</Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.dataCon} xs={11} lg={9}>
        <DiamondList />
      </Grid>
    </Grid>
  );
}
