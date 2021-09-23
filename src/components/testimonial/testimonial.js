// import './Testimony.css';
import { Grid } from "@material-ui/core";
import React from "react";
import { Testimonial } from "../../mappers/dummydata/homeNac";
import Testimonycarosol from "./testimonialcarosel";

export default function Testimony(props) {
  return (
    <Grid Container style={{ width: "100%" }}>
      <Testimonycarosol
        carosolData={props.customerreview}
        dataCarousel={Testimonial.setting}
      />
    </Grid>
  );
}
