import React from "react";
import { Typography, Grid, Hidden } from "@material-ui/core";
import styles from "./mediaCarouselStyle";
import Slideshow from "../Carousel/carosul";
import dialog from "../dialog/dialog";
import DialogBox from "../dialog/dialog";

// import './index';

export default function MediaCarousel(props) {
  const classes = styles();
  const [state, setstate] = React.useState({
    showLess: true,
    loading: false,
    count: "",
    dialog: false
  });
  //   const handleReadMore = () => {
  //     setstate({ showLess: !state.showLess });
  //   };
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const slider = React.createRef();
  const openDialog = () => {
    state["dialog"] = true;
    setstate({
      ...state,
      state
    });
  };
  // const openDialog_CLOSE = () => {
  //   state["dialog"] = false
  //   setstate({
  //     ...state,
  //     state
  //   })
  // }
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        {/* <Hidden smDown> */}
        {props.setting1.arrowsImg && (
          <Grid container>
            <Grid item onClick={previous} className={classes.preButton}></Grid>
            <Grid item onClick={next} className={classes.nextButton}></Grid>
          </Grid>
        )}
        {/* </Hidden> */}
        <Slideshow dataCarousel={props.setting1} sliderRef={slider}>
          <Grid container direction="column" className={classes.containerHead}>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
              <img src={props.img} className={classes.imgClass} />
            </Grid>
            <Grid
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              className={classes.contentPart}
            >
              <Typography variant="h6" className={classes.heading}>
                {props.heading}
              </Typography>

              <Typography className={classes.para}>{props.para}</Typography>
              <Grid
                xs={2}
                sm={2}
                md={1}
                lg={1}
                xl={1}
                className={classes.gridHr}
              >
                <hr className={classes.hrTag} />
              </Grid>
              <Grid
                container
                direction="row"
                className={classes.contentDetails}
              >
                <Grid
                  xs={12}
                  sm={12}
                  md={window.location.pathname === "/savingscheme" || window.location.pathname === "/collectionhome" ? 4 : 6}
                  className={classes.padding}
                >
                  <Typography className={classes.contentHeading}>
                    {props.averageInvestmentHeading}
                  </Typography>
                  <Typography className={classes.averageInvestment}>
                    {props.averageInvestment}
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  sm={12}
                  md={window.location.pathname === "/savingscheme" || window.location.pathname === "/collectionhome" ? 4 : 6}
                  className={classes.padding}
                >
                  <Typography className={classes.contentHeading}>
                    {props.durationHeading}
                  </Typography>
                  <Typography className={classes.averageInvestment}>
                    {props.duration}
                  </Typography>
                </Grid>
                {window.location.pathname === "/savingscheme" || window.location.pathname === "/collectionhome" ? (
                  <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Typography className={classes.contentHeading}>
                      {props.redeemableHeading}
                    </Typography>
                    <Typography className={classes.averageInvestment}>
                      {props.redeemable}
                    </Typography>
                  </Grid>
                ) : (
                  ""
                )}
              </Grid>
              <Grid
                xs={2}
                sm={2}
                md={1}
                lg={1}
                xl={1}
                className={classes.gridHr}
              >
                <hr className={classes.hrTag} />
              </Grid>
              <Grid
                container
                direction="row"
                className={classes.contentDetails}
              >
                {window.location.pathname === "/experiences" ? (
                  <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Typography className={classes.padding}>
                      <a
                        className={classes.contentHeadingLinks}
                        onClick={() => openDialog()}
                      >
                        {props.joinNow}&nbsp;{" "}
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAMAAAAliK2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRFqKio8fHxREREGRkZYWFh4uLijIyMNjY2////EoUdpQAAAAl0Uk5T//////////8AU094EgAAADpJREFUeNpUzdsKADAIAlBt1///4jkLxoLwYA9h1+BhooCGOqW8V1lLBlcYjOCFU8gUulMY/H8dAQYArKoCrGXO+aEAAAAASUVORK5CYII=" />
                      </a>
                    </Typography>
                  </Grid>
                ) : (
                  <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Typography className={classes.padding}>
                      <a
                        className={classes.contentHeadingLinks}
                        href={props.link}
                      >
                        {props.joinNow}&nbsp;{" "}
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAMAAAAliK2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRFqKio8fHxREREGRkZYWFh4uLijIyMNjY2////EoUdpQAAAAl0Uk5T//////////8AU094EgAAADpJREFUeNpUzdsKADAIAlBt1///4jkLxoLwYA9h1+BhooCGOqW8V1lLBlcYjOCFU8gUulMY/H8dAQYArKoCrGXO+aEAAAAASUVORK5CYII=" />
                      </a>
                    </Typography>
                  </Grid>
                )}

                {window.location.pathname === "/savingscheme" ? (
                  <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Typography>
                      <a
                        href={props.link}
                        className={classes.contentHeadingLinks}
                      >
                        {props.payNow}&nbsp;{" "}
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAMAAAAliK2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRFqKio8fHxREREGRkZYWFh4uLijIyMNjY2////EoUdpQAAAAl0Uk5T//////////8AU094EgAAADpJREFUeNpUzdsKADAIAlBt1///4jkLxoLwYA9h1+BhooCGOqW8V1lLBlcYjOCFU8gUulMY/H8dAQYArKoCrGXO+aEAAAAASUVORK5CYII=" />
                      </a>
                    </Typography>{" "}
                  </Grid>
                ) : (
                  ""
                )}
              </Grid>
              <Grid
                xs={2}
                sm={2}
                md={1}
                lg={1}
                xl={1}
                className={classes.gridHr}
              >
                <hr className={classes.hrTag} />
              </Grid>
            </Grid>
          </Grid>
        </Slideshow>
      </Grid>
      <DialogBox
        dialog={state.dialog}
        openDialog_CLOSE={setstate}
        img={props.img}
        heading={props.heading}
      />
    </Grid>
  );
}
