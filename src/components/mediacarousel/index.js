import React from "react";
import { Grid } from "@material-ui/core";
import MediaCarousel from "./mediaCarousel";

export default function MediaCarousels(props) {
  // const classes = styles();

  return (
    <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
      {props.value &&
        props.value.data.map((val, index) => (
          <>
            <MediaCarousel key={index}
              img={val.img}
              heading={val.heading}
              para={val.para}
              setting={props.value.setting}
              setting1={props.value.setting1}
              setting2={props.value.setting2}
              averageInvestment={val.averageInvestment}
              duration={val.duration}
              redeemable={val.redeemable}
              averageInvestmentHeading={val.averageInvestmentHeading}
              durationHeading={val.durationHeading}
              redeemableHeading={val.redeemableHeading}
              joinNow={val.joinNow}
              payNow={val.payNow}
              link={val.link}
            />
          </>
        ))}
    </Grid>
  );
}
