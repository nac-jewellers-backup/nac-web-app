import { Grid } from "@material-ui/core";

import Slideshow from "components/Carousel/carosul";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import Storelocator from "components/storelocator/storelocator";
import { storeLocatorData } from "mappers/dummydata/storeLocator";
import React from "react";
import style from "./style";

export default function Locator(props) {
  const classes = style();

  return (
    <Grid container xs={12} lg={12}>
      <Header />
      <Grid item xs={12}>
        <Slideshow dataCarousel={storeLocatorData.carouselTop.setting}>
          {storeLocatorData.carouselTop.data.map((val, index) => (
            <Grid container key={index}>
              <img
                src={val.img}
                style={{ width: "100%", height: "100%" }}
                alt="images"
                loading="lazy" 
              />
            </Grid>
          ))}
        </Slideshow>
      </Grid>
      <Grid container className={classes.mainWidths}>
        <Grid container className={classes.topPadding}>
          <Grid container xs={12} md={12} lg={12}>
            <Storelocator value={storeLocatorData} />
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}
