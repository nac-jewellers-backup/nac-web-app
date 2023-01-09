import { Container, Hidden, Grid } from "@material-ui/core";
import { ImgMediaCard } from "components/ProductCard/Card";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import Slideshow from "../Carousel/carosul";

const useStyles = makeStyles((theme) => ({
  cardEdit: {
    width: "89%",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  collectionSection: {
    fill: "#2E348A",
    fontSize: "45px",
  },
}));

const SlideImgMediaCard = (props) => {
  const { listProduct } = props

  const classes = useStyles();
  const ArrowLeft = (props) => {
    const { className, onClick } = props;
    return (
      <ArrowLeftIcon
        className={`${className} ${classes.collectionSection}`}
        onClick={onClick}
        style={{ left: "-60px" }}
      />
    );
  };
  const ArrowRight = (props) => {
    const { className, onClick } = props;
    return (
      <ArrowRightIcon
        className={`${className} ${classes.collectionSection}`}
        onClick={onClick}
        style={{ right: "-60px" }}
      />
    );
  };
  const dataCarouselcollections = {
    arrows: true,
    dots: false,
    autoplay: false,
    infinite: false,
    accessibility: true,
    // speed: 2500,
    // fade: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };
  const dataCarouselcollectionsSm = {
    arrows: true,
    dots: false,
    autoplay: true,
    infinite: true,
    accessibility: true,
    speed: 2500,
    // fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };
  return (
    <Grid style={{ width: "100%" }}>
      <Hidden smDown>
        <Container className={classes.cardEdit} style={{ paddingTop: 8 }}>
          <Slideshow
            class="subslider-carousel"
            dataCarousel={dataCarouselcollections}
          >
            {listProduct?.map((val) => {
              return (
                <ImgMediaCard data={val} cardSize="auto" hoverText={true} />
              );
            })}
          </Slideshow>
        </Container>
      </Hidden>
      <Hidden mdUp>
        <Container>
          <Slideshow
            class="subslider-carousel"
            dataCarousel={dataCarouselcollectionsSm}
          >
            {props?.listProduct?.map((val) => {
              return (
                <ImgMediaCard data={val} cardSize="auto" hoverText={true} />
              );
            })}
          </Slideshow>
        </Container>
      </Hidden>
    </Grid>
  );
};

export default SlideImgMediaCard;
