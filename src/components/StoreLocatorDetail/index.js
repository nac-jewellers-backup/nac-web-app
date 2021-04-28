import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import styles from "./style";
import Header from "components/SilverComponents/Header";
import StoreDetails from "./storeDetails";
import Footer from "components/Footer/Footer";
import Slideshow from "components/Carousel/carosul";
import { storeLocationInfo } from "mappers/dummydata/storeLocationDetails";

export default function StoreLocationDetails(props) {
  const classes = styles();
  return (
    <Grid container>
      <Header />
      <Grid item xs={12} style={{marginTop:"10px"}}>
        <Slideshow dataCarousel={storeLocationInfo.carouselTop.setting}>
          {storeLocationInfo.carouselTop.data.map((val, index) => (
            <Grid container key={index}>
              <img src={val.img} style={{ width: "100%", height: "100%" }} />
            </Grid>
          ))}
        </Slideshow>
      </Grid>
      <Grid container xs={12}>
        <StoreDetails />
      </Grid>
      <Footer />
    </Grid>
  );
}
