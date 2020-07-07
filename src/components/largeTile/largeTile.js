import React from "react";
import { Typography, Grid, Hidden } from "@material-ui/core";
import styles from "./largeTileStyle";
import Slideshow from "components/Carousel/carosul";
import { NavLink, Link } from "react-router-dom";

export default function LargeTile(props) {
  const classes = styles();
  const [state, setstate] = React.useState({
    showLess: true,
    loading: false,
    count: "",
  });
  const handleReadMore = () => {
    setstate({ showLess: !state.showLess });
  };
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const slider = React.createRef();

  return (
    <Grid item xs={12} lg={6} sm={6} md={6} className={classes.paddings}>
      {props.tag === "normal" ? (
        <>
          <Grid>
            {props.setting1.arrowsImg && (
              <Grid container>
                <Grid
                  item
                  onClick={previous}
                  className={classes.preButton}
                ></Grid>
                <Grid item onClick={next} className={classes.nextButton}></Grid>
              </Grid>
            )}
            <Slideshow
              style={{ width: "100%" }}
              dataCarousel={props.setting1}
              sliderRef={slider}
            >
              <Link to="/rudramadeviBlog">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={props.img}
                />
              </Link>
            </Slideshow>
          </Grid>
          <Typography variant="h6" className={classes.heading}>
            {props.heading}
          </Typography>
          <Typography className={classes.para}>{props.para}</Typography>
          {props.store && (
            <Grid item xs={12} className={classes.anchorMain}>
              <a className={classes.anchor}>
                {/* <Grid className={classes.algins}>
                                    <Typography className={classes.anchor}>{props.store}</Typography>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAMAAAAliK2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRFqKio8fHxREREGRkZYWFh4uLijIyMNjY2////EoUdpQAAAAl0Uk5T//////////8AU094EgAAADpJREFUeNpUzdsKADAIAlBt1///4jkLxoLwYA9h1+BhooCGOqW8V1lLBlcYjOCFU8gUulMY/H8dAQYArKoCrGXO+aEAAAAASUVORK5CYII=" />

                                </Grid> */}
                <Grid></Grid>
              </a>
            </Grid>
          )}
        </>
      ) : (
        ""
      )}

      {props.tag === "picture" ? (
        <>
          {state.showLess === true ? (
            <>
              <Grid>
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
                <Slideshow
                  style={{ width: "100%" }}
                  dataCarousel={props.setting1}
                  sliderRef={slider}
                >
                  <img
                    onClick={handleReadMore}
                    style={{ width: "100%", height: "100%" }}
                    src={props.img}
                  />
                </Slideshow>
              </Grid>
              <Typography variant="h6" className={classes.heading}>
                {props.heading}
              </Typography>
              <Typography className={classes.para}>{props.para}</Typography>
              {props.store && (
                <Grid item xs={12} className={classes.anchorMain}>
                  <a className={classes.anchor}>
                    {/* <Grid className={classes.algins}> */}
                    {/* <Typography onClick={handleReadMore} className={classes.anchor}>{props.store}</Typography> */}
                    {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAMAAAAliK2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRFqKio8fHxREREGRkZYWFh4uLijIyMNjY2////EoUdpQAAAAl0Uk5T//////////8AU094EgAAADpJREFUeNpUzdsKADAIAlBt1///4jkLxoLwYA9h1+BhooCGOqW8V1lLBlcYjOCFU8gUulMY/H8dAQYArKoCrGXO+aEAAAAASUVORK5CYII=" /> */}

                    {/* </Grid> */}
                    <Grid></Grid>
                  </a>
                </Grid>
              )}
            </>
          ) : (
            <>
              {/* {alert(state.showLess)} */}

              <Grid>
                <Grid container>
                  <Grid
                    item
                    onClick={previous}
                    className={classes.preButtonsPPP}
                  ></Grid>
                  <Grid
                    item
                    onClick={next}
                    className={classes.nextButtons}
                  ></Grid>
                </Grid>
                <>
                  <Slideshow
                    style={{ width: "100%" }}
                    dataCarousel={props.setting2}
                    sliderRef={slider}
                  >
                    {props.imgPics.map((val, index) => (
                      <Grid container key={index}>
                        <img
                          onClick={handleReadMore}
                          style={{ width: "100%", height: "100%" }}
                          src={val.img}
                        />
                      </Grid>
                    ))}
                  </Slideshow>
                </>
              </Grid>
              <Typography variant="h6" className={classes.heading}>
                {props.heading}
              </Typography>
              <Typography className={classes.para}>{props.para}</Typography>
              {props.store && (
                <Grid item xs={12} className={classes.anchorMain}>
                  <a className={classes.anchor}>
                    {/* <Grid className={classes.algins}> */}
                    {/* <Typography onClick={handleReadMore} className={classes.anchor}>{props.store}</Typography> */}
                    {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAMAAAAliK2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRFqKio8fHxREREGRkZYWFh4uLijIyMNjY2////EoUdpQAAAAl0Uk5T//////////8AU094EgAAADpJREFUeNpUzdsKADAIAlBt1///4jkLxoLwYA9h1+BhooCGOqW8V1lLBlcYjOCFU8gUulMY/H8dAQYArKoCrGXO+aEAAAAASUVORK5CYII=" /> */}

                    {/* </Grid> */}
                    <Grid></Grid>
                  </a>
                </Grid>
              )}
            </>
          )}
        </>
      ) : (
        ""
      )}
      {props.tag === "video" ? (
        <>
          {state.showLess === true ? (
            <>
              <Grid>
                {props.setting1.arrowsImg && (
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
                <Slideshow
                  style={{ width: "100%" }}
                  dataCarousel={props.setting1}
                  sliderRef={slider}
                >
                  <img
                    onClick={handleReadMore}
                    style={{ width: "100%", height: "100%" }}
                    src={props.img}
                  />
                  <>
                    {" "}
                    <img
                      onClick={handleReadMore}
                      className={classes.youtubeImg}
                      src={props.youtubeImg}
                    />{" "}
                  </>
                </Slideshow>
              </Grid>
              <Typography variant="h6" className={classes.heading}>
                {props.heading}
              </Typography>
              <Typography className={classes.para}>{props.para}</Typography>
              {props.store && (
                <Grid item xs={12} className={classes.anchorMain}>
                  <a className={classes.anchor}>
                    {/* <Grid className={classes.algins}> */}
                    {/* <Typography onClick={handleReadMore} className={classes.anchor}>{props.store}</Typography> */}
                    {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAMAAAAliK2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRFqKio8fHxREREGRkZYWFh4uLijIyMNjY2////EoUdpQAAAAl0Uk5T//////////8AU094EgAAADpJREFUeNpUzdsKADAIAlBt1///4jkLxoLwYA9h1+BhooCGOqW8V1lLBlcYjOCFU8gUulMY/H8dAQYArKoCrGXO+aEAAAAASUVORK5CYII=" /> */}

                    {/* </Grid> */}
                    <Grid></Grid>
                  </a>
                </Grid>
              )}
            </>
          ) : (
            <>
              {window.location.pathname === "/collectionpage" ? (
                <>
                  {" "}
                  {/* {window.innerWidth > 0 && window.innerWidth <= 320 && ( */}
                    <Grid style={{ display: "block" }}>
                    
                        <Slideshow
                  style={{ width: "100%" }}
                  dataCarousel={props.setting1}
                  sliderRef={slider}
                >
                   <iframe
                        width="100%"
                        height="350px"
                        title="video"
                        src={props.url}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                </Slideshow>
                    </Grid>
                  
                
                  {/* )}{" "} */}
                </>
              ) : (
                <>
                  {window.innerWidth > 0 && window.innerWidth <= 600 && (
                    <Grid style={{ display: "block" }}>
                      <iframe
                        width="100%"
                        height="201"
                        src={props.url}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </Grid>
                  )}
                  {window.innerWidth > 601 && window.innerWidth <= 960 && (
                    <Grid style={{ display: "block" }}>
                      <iframe
                        width="100%"
                        height="214"
                        src={props.url}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </Grid>
                  )}
                  {window.innerWidth > 961 && window.innerWidth <= 1280 && (
                    <Grid style={{ display: "block" }}>
                      <iframe
                        width="100%"
                        height="273"
                        src={props.url}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </Grid>
                  )}
                  {window.innerWidth > 1281 && window.innerWidth <= 1920 && (
                    <Grid item style={{ display: "block" }} contained>
                      <iframe
                        width="100%"
                        height="372"
                        src={props.url}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </Grid>
                  )}
                  {window.innerWidth > 1921 && window.innerWidth > 1922 && (
                    <Grid style={{ display: "block" }}>
                      <iframe
                        width="100%"
                        height="400"
                        src={props.url}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </Grid>
                  )}{" "}
                </>
              )}

              <Typography variant="h6" className={classes.heading}>
                {props.heading}
              </Typography>
              <Typography className={classes.para}>{props.para}</Typography>
              {props.store && (
                <Grid item xs={12} className={classes.anchorMain}>
                  <a className={classes.anchor}>
                    {/* <Grid className={classes.algins}>
                                                <Typography onClick={handleReadMore} className={classes.anchor}>Hide Video</Typography>
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAMAAAAliK2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRFqKio8fHxREREGRkZYWFh4uLijIyMNjY2////EoUdpQAAAAl0Uk5T//////////8AU094EgAAADpJREFUeNpUzdsKADAIAlBt1///4jkLxoLwYA9h1+BhooCGOqW8V1lLBlcYjOCFU8gUulMY/H8dAQYArKoCrGXO+aEAAAAASUVORK5CYII=" />

                                            </Grid> */}
                    <Grid></Grid>
                  </a>
                </Grid>
              )}
            </>
          )}
        </>
      ) : (
        ""
      )}
    </Grid>
  );
}
