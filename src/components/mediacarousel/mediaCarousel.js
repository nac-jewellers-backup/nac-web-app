import React, { useState } from "react";
import { Typography, Grid, Hidden, Button, Link } from "@material-ui/core";
import styles from "./mediaCarouselStyle";
import Slideshow from "../Carousel/carosul";
import dialog from "../dialog/dialog";
import DialogBox from "../dialog/dialog";
import { isCompositeType } from "graphql";
import index from "postcss-normalize";
export default function MediaCarousel(props) {
  debugger
  const classes = styles();
  let propsValue = props.value;
  debugger
  console.log(propsValue.data);
  const [ButtonCondition, setButtonCondition] = useState(true)
  const [isMoreContent, MoreContent] = useState(true);
  const [isMoreCompound, MoreCompound] = useState(3);
  function toggleIsTruncated() {
    MoreContent(!isMoreContent);
  }
  function toggleIsCompound() {
    MoreCompound((isMoreCompound) => isMoreCompound + 3);
    if (propsValue.data.length <= isMoreCompound + 3) {
      setButtonCondition(false);
    }
  }
  const [state, setstate] = React.useState({
    showLess: true,
    loading: false,
    count: "",
    dialog: false,
  });
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
      state,
    });
  };
  const dataCarousel = {
    arrows: false,
    dots: false,
    infinite: true,
    accessibility: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Grid container>
      {props.value &&
        props.value.data.slice(0, isMoreCompound).map((val, index) => (
          <>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              {/* <Hidden smDown> */}
              {props.value.setting.arrowsImg && (
                <Grid container>
                  <Grid
                    item
                    onClick={previous}
                    className={classes.preButton}
                  ></Grid>
                  <Grid
                    item
                    onClick={next}
                    className={classes.nextButton}
                  ></Grid>
                </Grid>
              )}
              {/* </Hidden> */}
              <Grid container className={classes.containerHead}>
                <Grid
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  xl={6}
                  className={classes.imageGrid}
                >
                  <Slideshow dataCarousel={props.setting1} sliderRef={slider} collectionhome={props.collectionhome}>
                    {window.location.pathname === "/collectionhome" ? (
                      ""
                    ) : (
                      <img src={val.img} className={classes.imgClass} />
                    )}
                    {window.location.pathname === "/collectionhome" ? (
                      <Slideshow
                        class="subslider-carousel"
                        dataCarousel={dataCarousel}
                        hoverlist={val.imageContent}
                        hover={true}
                        imagecra={true}
                        collectionhome={props.collectionhome}
                      ></Slideshow>
                    ) : (
                      ""
                    )}
                  </Slideshow>
                </Grid>
                {/*------------------------ image ended--------------------------- */}
                {/* {isMoreCompound === true ? props.slice(2) : ""} */}
                <Grid
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  xl={6}
                  className={classes.contentPart}
                >
                  <Typography variant="h6" className={classes.heading}>
                    {val.heading}
                  </Typography>

                  <Typography className={classes.para}>
                    {isMoreContent === true
                      ? `${val.para.slice(0, 350)}...`
                      : val.para}
                    {/* {props.para} */}
                  </Typography>

                  <a
                    onClick={toggleIsTruncated}
                    className={classes.ToggleButton}
                  >
                    {" "}
                    {isMoreContent ? "Read More" : "Read Less"}
                  </a>

                  {window.location.pathname === "/collectionhome" ? (
                    ""
                  ) : (
                    <>
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
                          md={
                            window.location.pathname === "/savingscheme" ? 4 : 6
                          }
                          className={classes.padding}
                        >
                          <Typography className={classes.contentHeading}>
                            {val.averageInvestmentHeading}
                          </Typography>
                          <Typography className={classes.averageInvestment}>
                            {val.averageInvestment}
                          </Typography>
                        </Grid>
                        <Grid
                          xs={12}
                          sm={12}
                          md={
                            window.location.pathname === "/savingscheme" ? 4 : 6
                          }
                          className={classes.padding}
                        >
                          <Typography className={classes.contentHeading}>
                            {val.durationHeading}
                          </Typography>
                          <Typography className={classes.averageInvestment}>
                            {val.duration}
                          </Typography>
                        </Grid>
                        {window.location.pathname === "/savingscheme" ? (
                          <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Typography className={classes.contentHeading}>
                              {val.redeemableHeading}
                            </Typography>
                            <Typography className={classes.averageInvestment}>
                              {val.redeemable}
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
                      </Grid>{" "}
                    </>
                  )}

                  {window.location.pathname === "/collectionhome" ? (
                    ""
                  ) : (
                    <>
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
                                {val.joinNow}&nbsp;{" "}
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAMAAAAliK2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRFqKio8fHxREREGRkZYWFh4uLijIyMNjY2////EoUdpQAAAAl0Uk5T//////////8AU094EgAAADpJREFUeNpUzdsKADAIAlBt1///4jkLxoLwYA9h1+BhooCGOqW8V1lLBlcYjOCFU8gUulMY/H8dAQYArKoCrGXO+aEAAAAASUVORK5CYII=" />
                              </a>
                            </Typography>
                          </Grid>
                        ) : (
                          <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Typography className={classes.padding}>
                              <a
                                className={classes.contentHeadingLinks}
                                href={val.link}
                              >
                                {val.joinNow}&nbsp;{" "}
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAMAAAAliK2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRFqKio8fHxREREGRkZYWFh4uLijIyMNjY2////EoUdpQAAAAl0Uk5T//////////8AU094EgAAADpJREFUeNpUzdsKADAIAlBt1///4jkLxoLwYA9h1+BhooCGOqW8V1lLBlcYjOCFU8gUulMY/H8dAQYArKoCrGXO+aEAAAAASUVORK5CYII=" />
                              </a>
                            </Typography>
                          </Grid>
                        )}

                        {window.location.pathname === "/savingscheme" ? (
                          <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Typography>
                              <a
                                href={val.link}
                                className={classes.contentHeadingLinks}
                              >
                                {val.payNow}&nbsp;{" "}
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
                    </>
                  )}
                </Grid>
              </Grid>
            </Grid>

            <DialogBox
              dialog={state.dialog}
              openDialog_CLOSE={setstate}
              img={props.img}
              heading={props.heading}
            />
          </>
        ))}
      {ButtonCondition ? (
        <Grid className={classes.GridButtonMoreCollection}>
          <a onClick={toggleIsCompound} className={classes.buttonLink}>
            <div>See More Collections&nbsp;&nbsp;</div>
            <div className={classes.imgGridMoreCollection}>
              <img
                className={classes.MoreCollectionImg}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAMAAAAliK2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRFqKio8fHxREREGRkZYWFh4uLijIyMNjY2////EoUdpQAAAAl0Uk5T//////////8AU094EgAAADpJREFUeNpUzdsKADAIAlBt1///4jkLxoLwYA9h1+BhooCGOqW8V1lLBlcYjOCFU8gUulMY/H8dAQYArKoCrGXO+aEAAAAASUVORK5CYII="
              ></img>
            </div>{" "}
          </a>
        </Grid>
      ) : (
        <Grid className={classes.GridButtonMoreCollection}>
        <a onClick={toggleIsCompound} className={classes.buttonLinkNoMoreproducts}>
          <div>No More Collections</div>
        </a>
      </Grid>
      )}
    </Grid>
  );
}
