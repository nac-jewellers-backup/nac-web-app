import { Button, Grid, Typography } from "@material-ui/core";
import { YoungOnes } from "mappers/dummydata/collectionNac";
import React from "react";
import Slideshow from "../../components/carousal/carousal";
import styles from "./featuredProductStyle";

export default function FeaturedProduct(props) {
  const classes = styles();
  const slider = React.createRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  return (
    <Slideshow dataCarousel={YoungOnes.setting} sliderRef={slider}>
      {YoungOnes &&
        YoungOnes.carousel &&
        YoungOnes.carousel.map((val) => (
          <>
            <Grid container>
              <Grid
                xs={3}
                sm={3}
                md={3}
                lg={3}
                xl={3}
                className={classes.arrowIconLeft}
              >
                <i class="fa fa-angle-left" onClick={() => previous()}></i>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                className={classes.testimonialRight}
              >
                <Grid
                  item
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <img className={classes.imgcoin} src={val.img} />
                </Grid>
                <Typography className={classes.subTitle}>
                  {val.imageTitle}
                </Typography>
                <Grid item xs={12} style={{ padding: "0px 15px " }}>
                  <Typography className={classes.carouselPara}>
                    {/* <i class="fa fa-inr" aria-hidden="true" ></i> */}
                    {val.para}
                  </Typography>
                </Grid>
                <Grid
                  item
                  style={{ textAlign: "center", padding: "0px 15px 10px 15px" }}
                >
                  <a style={{ textDecoration: "none" }} href={val.navigateUrl}>
                    <Button
                      type="button"
                      className={classes.button}
                      style={{ fontSize: "13px" }}
                    >
                      <img
                        style={{ width: "25px", paddingRight: "10px" }}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPtJREFUeNrslsENwyAMRRPUezMCI2SEjpIROkJGyQgZod2AbpBMUDoBtSV6qQyyTUA9FOkfgMDD5gPpQwhdq2K6hqUp7CT8fgBdQCPIgW4gXyMyBGygOdbnWB/ZM6BBGLIgD5q+2qfYbjnz9Ew3YhQWNBF9S0zl9ag04j6tib6Fm8pcZLjas8J0r2gkEQw7egUsOc5k0rYrj9Mjjhft2aaEealBxgJY8uyZzE1RAhskMCu5hog0WinMKWFOA9NG1knPmfaMfUBParzhrqqW9dG290LgTtm/1ktN2t8krip3QCotNzJfCKPtT7yoazimzNqX+v/f+DuwtwADANT/7nBFmURtAAAAAElFTkSuQmCC"
                      />
                      {val.buttonName}
                    </Button>
                  </a>
                </Grid>
              </Grid>
              <Grid
                xs={3}
                sm={3}
                md={3}
                lg={3}
                xl={3}
                className={classes.arrowIconRight}
              >
                <i class="fa fa-angle-right" onClick={() => next()}></i>
              </Grid>
            </Grid>
          </>
        ))}
    </Slideshow>
  );
}
