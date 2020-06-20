import React, { useState } from "react";
import { Typography, Grid, Hidden, Button } from "@material-ui/core";
import styles from "./mediaCarouselStyle";
import Slideshow from "../Carousel/carosul";
import dialog from "../dialog/dialog";
import DialogBox from "../dialog/dialog";
// import { IndexCollectionHomePage } from "../../mappers/dummydata/savingNac";
export default function MediaCarousel(props) {
  const classes = styles();

  const [isMoreContent, MoreContent] = useState(true);
  function toggleIsTruncated() {
    MoreContent(!isMoreContent);
  }
  const [state, setstate] = React.useState({
    showLess: true,
    loading: false,
    count: "",
    dialog: false,
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
      state,
    });
  };
  // const openDialog_CLOSE = () => {
  //   state["dialog"] = false
  //   setstate({
  //     ...state,
  //     state
  //   })
  // }
  // const datass = [...IndexCollectionHomePage.imageandlinks];
  const dataCarousel = {
    arrows: false,
    dots: false,
    infinite: true,
    accessibility: true,
    speed: 2500,
    // fade: true,
    slidesToShow: 1,

    slidesToScroll: 1,
  };
  // const sublistimage = [
  //   {
  //     img: "https://assets.stylori.com/product/SE0015/375X375/SE0015-1YW.webp",
  //     title: "product test ",
  //     // price: 55336,
  //     url: "jewellery/earrings/product-test ?sku_id=1002386",
  //   },
  //   {
  //     img: "https://assets.stylori.com/product/SE1612/1550X1550/SE1612-1Y.webp",
  //     title: "Monsoon Memories Diamond Earrings",
  //     // price: 59310,
  //     url:
  //       "jewellery/earrings/diamond/Monsoon-Memories-Diamond-Earrings?skuid=180760",
  //   },
  //   {
  //     img: "https://assets.stylori.com/product/SE1611/1550X1550/SE1611-1Y.webp",
  //     title: "Celadon Surprise Gold Earrings",
  //     price: 58083,
  //     url:
  //       "jewellery/earrings/diamond/Celadon-Surprise-Gold-Earrings?skuid=180429",
  //   },
  //   {
  //     img: "https://assets.stylori.com/product/SE1602/1550X1550/SE1602-1Y.webp",
  //     title: "Spirit of the Yuletide Gold Earrings",
  //     price: 56464,
  //     url:
  //       "jewellery/earrings/diamond/Spirit-of-the-Yuletide-Gold-Earrings?skuid=180407",
  //   },
  //   {
  //     img: "https://assets.stylori.com/product/SE1534/1550X1550/SE1534-1R.webp",
  //     title: "First Attraction Diamond Ear Jackets",
  //     price: 56736,
  //     url:
  //       "jewellery/earrings/diamond/First-Attraction-Diamond-Ear-Jackets?skuid=175850",
  //   },
  //   {
  //     img: "https://assets.stylori.com/product/SE1535/1550X1550/SE1535-1Y.webp",
  //     title: "Mushy Memories Diamond Ear Jackets",
  //     price: 57961,
  //     url:
  //       "jewellery/earrings/diamond/Mushy-Memories-Diamond-Ear-Jackets?skuid=175862",
  //   },
  //   {
  //     img: "https://assets.stylori.com/product/SE1527/1550X1550/SE1527-1W.webp",
  //     title: "First Sight Diamond Ear Jackets",
  //     price: 58207,
  //     url:
  //       "jewellery/earrings/diamond/First-Sight-Diamond-Ear-Jackets?skuid=175823",
  //   },
  //   {
  //     img: "https://assets.stylori.com/product/SE0394/1550X1550/SE0394-1Y.webp",
  //     title: "Dazzling Amethyst Drops Floral Earrings",
  //     price: 58189,
  //     url: "jewellery/earrings/diamond/Pourpre-Paisely?skuid=65823",
  //   },
  //   {
  //     img: "https://assets.stylori.com/product/SE1333/1550X1550/SE1333-1Y.webp",
  //     title: "Dazzling Diamond Leaves Earrings",
  //     price: 58191,
  //     url:
  //       "jewellery/earrings/diamond/Dazzling Diamond-Leaves-Earrings?skuid=169793",
  //   },
  //   {
  //     img: "https://assets.stylori.com/product/SE1351/1550X1550/SE1351-1W.webp",
  //     title: "Sparkling Floral Diamond Danglers",
  //     price: 61248,
  //     url:
  //       "jewellery/earrings/diamond/Sparkling Floral-Diamond-Danglers?skuid=169900",
  //   },
  //   {
  //     img: "https://assets.stylori.com/product/SE1507/1550X1550/SE1507-1R.webp",
  //     title: "Call of the Trinity Earrings",
  //     price: 55427,
  //     url:
  //       "jewellery/earrings/diamond/Call-of-the-Trinity-Earrings?skuid=172552",
  //   },
  //   {
  //     img: "https://assets.stylori.com/product/SE1368/1550X1550/SE1368-1Y.webp",
  //     title: "Stunning Paisley Diamond Earrings",
  //     price: 56087,
  //     url:
  //       "jewellery/earrings/diamond/Stunning Paisley-Diamond-Earrings?skuid=169960",
  //   },
  //   {
  //     img: "https://assets.stylori.com/product/SE1353/1550X1550/SE1353-1Y.webp",
  //     title: "Trendy Peacock Diamond Earrings",
  //     price: 56419,
  //     url:
  //       "jewellery/earrings/diamond/Trendy Peacock-Diamond-Earrings?skuid=169907",
  //   },
  //   {
  //     img: "https://assets.stylori.com/product/SE1350/1550X1550/SE1350-1Y.webp",
  //     title: "Stylish Curved Diamond Earrings",
  //     price: 58191,
  //     url:
  //       "jewellery/earrings/diamond/Stylish Curved-Diamond-Earrings?skuid=169896",
  //   },
  //   {
  //     img: "https://assets.stylori.com/product/SE1373/1550X1550/SE1373-1W.webp",
  //     title: "Glamorous Dewdrop Diamond Earrings",
  //     price: 54981,
  //     url:
  //       "jewellery/earrings/diamond/Glamorous-Dewdrop-Diamond-Earrings?skuid=169854",
  //   },
  //   {
  //     img: "https://assets.stylori.com/product/SE1339/1550X1550/SE1339-1W.webp",
  //     title: "Glamorous Teardrop Diamond Earrings",
  //     price: 53875,
  //     url:
  //       "jewellery/earrings/diamond/Glamorous Teardrop-Diamond-Earrings?skuid=169820",
  //   },
  // ];

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

        <Grid container className={classes.containerHead}>
         
            <Grid
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              className={classes.imageGrid}
            >
              <Slideshow dataCarousel={props.setting1} sliderRef={slider}>
                {window.location.pathname === "/collectionhome" ? (
                  ""
                ) : (
                  <img src={props.img} className={classes.imgClass} />
                )}
                {window.location.pathname === "/collectionhome" ? (
                  <Slideshow
                    class="subslider-carousel"
                    dataCarousel={dataCarousel}
                    hoverlist={props.datas}
                    hover={true}
                    imagecra={true}
                  ></Slideshow>
                ) : (
                  ""
                )}
              </Slideshow>
           
          </Grid>
          {/*------------------------ image ended--------------------------- */}

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

            <Typography className={classes.para}>
              {isMoreContent === true
                ? `${props.para.slice(0, 350)}...`
                : props.para}
              {/* {props.para} */}
            </Typography>

            <span onClick={toggleIsTruncated} className={classes.ToggleButton}>
              {" "}
              {isMoreContent ? "Read More" : "Read Less"}
            </span>
            <Grid xs={2} sm={2} md={1} lg={1} xl={1} className={classes.gridHr}>
              <hr className={classes.hrTag} />
            </Grid>

            {window.location.pathname === "/collectionhome" ? (
              ""
            ) : (
              <>
                <Grid
                  container
                  direction="row"
                  className={classes.contentDetails}
                >
                  <Grid
                    xs={12}
                    sm={12}
                    md={window.location.pathname === "/savingscheme" ? 4 : 6}
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
                    md={window.location.pathname === "/savingscheme" ? 4 : 6}
                    className={classes.padding}
                  >
                    <Typography className={classes.contentHeading}>
                      {props.durationHeading}
                    </Typography>
                    <Typography className={classes.averageInvestment}>
                      {props.duration}
                    </Typography>
                  </Grid>
                  {window.location.pathname === "/savingscheme" ? (
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
    </Grid>
  );
}
