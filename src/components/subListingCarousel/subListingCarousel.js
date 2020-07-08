import {
  Container,
  Grid,
  Hidden,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { YoungOnes } from "mappers/dummydata/collectionNac";
//   import './product-images.css'
import Slideshow from "components/Carousel/carosul";
import styles from "./style";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
export default function Sublistcarousel(props) {
  const slider = React.createRef();
  const classes = styles();
  const [state, setstate] = React.useState({
    value: 0,
    valuse: 0,
    values: 0,
    expanded: null,
    expanded1: true,
  });

  const handle = (panel) => (event, expanded) => {
    setstate({
      expanded: expanded ? panel : false,
    });
  };
  const handle_recent_view = (panel1) => (event, expanded1) => {
    setstate({
      expanded1: !state.expanded1,
    });
  };

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  const limit = 4;
  const { expanded, expanded1 } = state;

  const mobiledataCarousel = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  const dataCarousel_ = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    fade: false,
    dots: false,
    autoplaySpeed: 4000,
    arrows: false,
  };
  const dataCarousel = {
    arrows: false,
    dots: false,
    infinite: true,
    accessibility: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  // this.state.dataToShow==="YouMayLike" ? data[0].fadeImageSublist : data[0].fadeImageSublistRecentlyViewed
  //   const productsubHead = [
  //     {
  //       name: "From the House of NAC",
  //       icon: "https://assets-cdn.stylori.com/images/static/sprite-images.png",
  //       class: "image1"
  //     },
  //     {
  //       name: "Certified Jewellery",
  //       icon: "https://assets-cdn.stylori.com/images/static/sprite-images.png",
  //       class: "image2"
  //     },
  //     {
  //       name: "Free Shipping",
  //       icon: "https://assets-cdn.stylori.com/images/static/sprite-images.png",
  //       class: "image3"
  //     },
  //     {
  //       name: "Diverse Styles",
  //       icon: "https://assets-cdn.stylori.com/images/static/sprite-images.png",
  //       class: "image4"
  //     },
  //     {
  //       name: "Easy Returns",
  //       icon: "https://assets-cdn.stylori.com/images/static/sprite-images.png",
  //       class: "image5"
  //     }
  //   ];
  return (
    <div style={{ width: "100%" }}>
      <Hidden smDown>
        <Typography
          variant="h5"
          className={classes.title}
          style={{ fontFamily: "notoSerif-regular !important" }}
        >
          {YoungOnes.carouselData.title}
        </Typography>

        <div className="back_img">
          <div className={classes.subCarouselHead}>
            <Container maxWidth="md">
              <Grid container style={{ width: "100%" }}>
                <Grid
                  item
                  style={{
                    width: "6%",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <ChevronLeftIcon
                    onClick={() => previous()}
                    className={classes.iconLeftcaro}
                  />
                </Grid>
                <Grid item style={{ width: "88%" }}>
                  <Slideshow
                    sliderRef={slider}
                    className={classes.subsliderCarousel}
                    hoverlist={YoungOnes && YoungOnes.subListingCarousel}
                    dataCarousel={dataCarousel}
                    hover={true}
                    imagecra={true}
                  >
                    {/* {YoungOnes.subListingCarousel.map((val)=>(
                                  <Typography style={{fontSize:"12px"}}>{val.paras}</Typography>
                              ))} */}
                  </Slideshow>
                </Grid>
                <Grid
                  item
                  style={{
                    width: "6%",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  {/* <img onClick={() => next()} className={classes.iconRightcaro} /> */}
                  <ChevronRightIcon
                    onClick={() => next()}
                    className={classes.iconRightcaro}
                  />
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
        <Grid item xs={12} className={classes.anchorMain}>
          <a className={classes.anchor} href="">
            <Grid className={classes.algins}>
              <Typography
                className={classes.anchor}
                style={{ fontFamily: "notoSerif-regular !important" }}
              >
                {YoungOnes.carouselData.link}
              </Typography>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAMAAAAliK2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRFqKio8fHxREREGRkZYWFh4uLijIyMNjY2////EoUdpQAAAAl0Uk5T//////////8AU094EgAAADpJREFUeNpUzdsKADAIAlBt1///4jkLxoLwYA9h1+BhooCGOqW8V1lLBlcYjOCFU8gUulMY/H8dAQYArKoCrGXO+aEAAAAASUVORK5CYII=" />
            </Grid>
            <Grid></Grid>
          </a>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Typography
          variant="h5"
          className={classes.title}
          style={{ fontFamily: "notoSerif-regular !important" }}
        >
          {YoungOnes.carouselData.title}
        </Typography>

        <Container style={{ padding: "5px 22px", marginTop: "20px" }}>
          <Grid
            style={{
              boxShadow:
                "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
              padding: "0 5px",
            }}
          >
            <Grid
              expandIcon={
                <span className="side-arrow-symbol">
                  <i class="fa fa-sort-up"></i>
                </span>
              }
            >
              <div style={{ width: "100%" }}>
                {/* <hr class="bottom-line border-line-"></hr> */}
              </div>
            </Grid>

            <Grid style={{ paddingTop: "5px" }}>
              <div style={{ width: "100%" }}>
                <Slideshow
                  hoverlist={YoungOnes && YoungOnes.subListingCarousel}
                  hover={true}
                ></Slideshow>
              </div>
            </Grid>
          </Grid>
          <br />
        </Container>
        <Grid item xs={12} className={classes.anchorMain}>
          <a className={classes.anchor} href="">
            <Grid className={classes.algins}>
              <Typography
                className={classes.anchor}
                style={{ fontFamily: "notoSerif-regular !important" }}
              >
                {YoungOnes.carouselData.link}
              </Typography>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAMAAAAliK2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRFqKio8fHxREREGRkZYWFh4uLijIyMNjY2////EoUdpQAAAAl0Uk5T//////////8AU094EgAAADpJREFUeNpUzdsKADAIAlBt1///4jkLxoLwYA9h1+BhooCGOqW8V1lLBlcYjOCFU8gUulMY/H8dAQYArKoCrGXO+aEAAAAASUVORK5CYII=" />
            </Grid>
            <Grid></Grid>
          </a>
        </Grid>
      </Hidden>
    </div>
  );
}
Sublistcarousel.propTypes = {
  handle: PropTypes.func,
};

//   export default Sublistcarousel;
