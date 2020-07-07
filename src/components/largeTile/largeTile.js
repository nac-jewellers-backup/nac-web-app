import React from "react";
import { Typography, Grid, Hidden } from "@material-ui/core";
import styles from "./largeTileStyle";
import Slideshow from "components/Carousel/carosul";
import { NavLink, Link } from "react-router-dom";
import "./style.css";
export default function LargeTile(props) {
  const classes = styles();
  const [state, setstate] = React.useState({
    showLess: true,
    loading: false,
    count: "",
  });

  const [isMoreContent, MoreContent] = React.useState(true);
  function toggleIsTruncated() {
    MoreContent(!isMoreContent);
  }
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
      {/* ---------------------------------Normal --------------------------------------- */}
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
                {/* ----------------------------Normal collection Page ----------------------------------- */}
                {window.location.pathname === "/collectionpage" ? (
                  <>
                    {" "}
                    <img
                      onClick={handleReadMore}
                      style={{ width: "100%" }}
                      src={props.img}
                      className="iframeClass"
                    />
                    <></>
                  </>
                ) : (
                  <>
                    {/* ------------------------------------Normal other pages(non collection pages)----------------------- */}{" "}
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
                    </>{" "}
                  </>
                )}
              </Link>
            </Slideshow>
          </Grid>
          <Typography variant="h6" className={classes.heading}>
            {props.heading}
          </Typography>
          <Typography className={classes.para}>
            {isMoreContent === true
              ? `${props.para.slice(0, 130)}`
              : props.para}
            {/* {props.para} */}
            <br />
            <span onClick={toggleIsTruncated} className={classes.ToggleButton}>
              {" "}
              {isMoreContent ? "Read More" : "Read Less"}
            </span>
          </Typography>

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
      {/* ----------------------------------Picture Type  --------------------------------------- */}
      {props.tag === "picture" ? (
        <>
          {/* -------------------------------showless true --------------------------- */}
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
                  {/* ----------------------------Picture type C0llection Page --------------------------------- */}
                  {window.location.pathname === "/collectionpage" ? (
                    <>
                      {" "}
                      <img
                        onClick={handleReadMore}
                        style={{ width: "100%" }}
                        src={props.img}
                        className="iframeClass"
                      />
                      <></>
                    </>
                  ) : (
                    <>
                      {/* ------------------------------Picture type remaining pages */}
                      <img
                        onClick={handleReadMore}
                        style={{ width: "100%", height: "100%" }}
                        src={props.img}
                      />
                    </>
                  )}
                </Slideshow>
              </Grid>
              <Typography variant="h6" className={classes.heading}>
                {props.heading}
              </Typography>
              <Typography className={classes.para}>
                {isMoreContent === true
                  ? `${props.para.slice(0, 130)}`
                  : props.para}
                {/* {props.para} */}
                <br />
                <span
                  onClick={toggleIsTruncated}
                  className={classes.ToggleButton}
                >
                  {" "}
                  {isMoreContent ? "Read More" : "Read Less"}
                </span>
              </Typography>
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
              {/* ----------------------------Show Less False -------------------------------- */}
              {window.location.pathname === "/collectionpage" ? (
                ""
              ) : (
                <>
                  {" "}
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
                  <Typography className={classes.para}>
                    {isMoreContent === true
                      ? `${props.para.slice(0, 130)}`
                      : props.para}
                    {/* {props.para} */}
                    <br />
                    <span
                      onClick={toggleIsTruncated}
                      className={classes.ToggleButton}
                    >
                      {" "}
                      {isMoreContent ? "Read More" : "Read Less"}
                    </span>
                  </Typography>
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
              )}{" "}
            </>
          )}
        </>
      ) : (
        ""
      )}
      {/* ------------------------------Video  Type ------------------------------------- */}
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
                  {window.location.pathname === "/collectionpage" ? (
                    <>
                      {" "}
                      <img
                        onClick={handleReadMore}
                        style={{ width: "100%" }}
                        src={props.img}
                        className="iframeClass"
                      />
                      <>
                        {" "}
                        <img
                          onClick={handleReadMore}
                          className={classes.youtubeImg}
                          src={props.youtubeImg}
                        />{" "}
                      </>
                    </>
                  ) : (
                    <>
                      {" "}
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
                      </>{" "}
                    </>
                  )}
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
              <Typography className={classes.para}>
                {isMoreContent === true
                  ? `${props.para.slice(0, 130)}`
                  : props.para}
                {/* {props.para} */}
                <br />
                <span
                  onClick={toggleIsTruncated}
                  className={classes.ToggleButton}
                >
                  {" "}
                  {isMoreContent ? "Read More" : "Read Less"}
                </span>
              </Typography>
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
              {/* ---------------------------------------Video type collection page ------------------------------ */}
              {window.location.pathname === "/collectionpage" ? (
                <>
                  <Grid style={{ display: "block" }}>
                    <iframe
                      width="100%"
                      className="iframeClass"
                      src={props.url}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </Grid>
                  {/* {" "}
                  {window.innerWidth > 0 && window.innerWidth <= 320 && (
                    <Grid style={{ display: "block" }}>
                      <iframe
                        width="100%"
                        height="175"
                        src={props.url}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </Grid>
                  )}
                  {window.innerWidth > 321 && window.innerWidth <= 375 && (
                    <Grid style={{ display: "block" }}>
                      <iframe
                        width="100%"
                        height="210"
                        src={props.url}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </Grid>
                  )}
                  {window.innerWidth > 376 && window.innerWidth <= 425 && (
                    <Grid style={{ display: "block" }}>
                      <iframe
                        width="100%"
                        height="244"
                        src={props.url}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </Grid>
                  )}
                  {window.innerWidth > 426 && window.innerWidth <= 768 && (
                    <Grid item style={{ display: "block" }} contained>
                      <iframe
                        width="100%"
                        height="216"
                        src={props.url}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </Grid>
                  )}
                  {window.innerWidth > 769 && window.innerWidth <= 1024 && (
                    <Grid style={{ display: "block" }}>
                      <iframe
                        width="100%"
                        height="275"
                        src={props.url}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </Grid>
                  )}{" "}
                  {window.innerWidth > 1025 && window.innerWidth <= 1440 && (
                    <Grid style={{ display: "block" }}>
                      <iframe
                        width="100%"
                        height="334"
                        src={props.url}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </Grid>
                  )}
                  {window.innerWidth > 1441 && (
                    <Grid style={{ display: "block" }}>
                      <iframe
                        width="100%"
                        height="614"
                        src={props.url}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </Grid>
                  )}{" "} */}
                </>
              ) : (
                <>
                  {/* ---------------------------------------Video type non collection page ------------------------------- */}
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
              {/* --------------------------Video type content part--------------------------------- */}
              <Typography variant="h6" className={classes.heading}>
                {props.heading}
              </Typography>
              <Typography className={classes.para}>
                {isMoreContent === true
                  ? `${props.para.slice(0, 130)}`
                  : props.para}
                {/* {props.para} */}
                <br />
                <span
                  onClick={toggleIsTruncated}
                  className={classes.ToggleButton}
                >
                  {" "}
                  {isMoreContent ? "Read More" : "Read Less"}
                </span>
              </Typography>
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
