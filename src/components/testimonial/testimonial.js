// import './Testimony.css';
import { Grid } from "@material-ui/core";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Slideshow from "components/Carousel/carosul";
import React from "react";
import { Testimonial } from "../../mappers/dummydata/homeNac";
import Testimonycarosol from "./testimonialcarosel";

export default function Testimony(props) {
  const dataCarouselcollections = {
    arrows: true,
    dots: false,
    autoplay: false,
    infinite: false,
    accessibility: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <ArrowLeftIcon color="secondary" />,
    nextArrow: <ArrowRightIcon color="secondary" />,
  };
  return (
    <Grid Container style={{ width: "100%" }}>
      {
        props.bridal ?
          <Grid container>
            <Slideshow
              class="subslider-carousel"
              dataCarousel={dataCarouselcollections}
            >

            </Slideshow>

          </Grid>
          :
          <Testimonycarosol
            bridal={props.bridal}
            carosolData={props.customerreview}
            dataCarousel={Testimonial.setting}
          />
      }

    </Grid>
  );
}
