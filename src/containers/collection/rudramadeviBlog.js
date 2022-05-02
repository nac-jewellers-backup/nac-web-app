import React from "react";
import Header from "components/SilverComponents/Header";
import { Typography, Grid, Hidden } from "@material-ui/core";
import styles from "./collectionPageStyle";
import Slideshow from "components/Carousel/carosul";
import { Rudramadevi } from "mappers/dummydata/collectionNac";
import Footer from "../../components/Footer/Footer";
export default function rudramadeviBlog(props) {
  const classes = styles();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const slider = React.createRef();

  return (
    <Grid container xs={12}>
      <Header />
      <>
        <Grid item xs={12}>
          <Grid
            item
            onClick={previous}
            className={classes.preButton}
            xs={12}
            lg={12}
          ></Grid>
          <Grid
            item
            xs={12}
            lg={12}
            onClick={next}
            className={classes.nextButton}
          ></Grid>
        </Grid>
        <Slideshow
          style={{ width: "100%" }}
          dataCarousel={Rudramadevi.carouselTop.setting}
          sliderRef={slider}
        >
          {Rudramadevi.carouselTop.data.map((val, index) => (
            <Grid container key={index}>
              <img src={val.img} className={classes.mainCarosel} loading="lazy" alt='...'/>
            </Grid>
          ))}
        </Slideshow>
      </>

      <Grid style={{ padding: "30px 0px" }} container>
        {/* <Grid item xs={12} className={classes.anchorMain}>
                <a className={classes.anchor}>
                    <Grid className={classes.algins}>
                        <Typography className={classes.anchor}>back to collection</Typography>

                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAMAAAAliK2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRFqKio8fHxREREGRkZYWFh4uLijIyMNjY2////EoUdpQAAAAl0Uk5T//////////8AU094EgAAADpJREFUeNpUzdsKADAIAlBt1///4jkLxoLwYA9h1+BhooCGOqW8V1lLBlcYjOCFU8gUulMY/H8dAQYArKoCrGXO+aEAAAAASUVORK5CYII=" />

                    </Grid>
                </a>
            </Grid> */}
        <Grid container className={classes.text} xs={12}>
          <Typography style={{ width: "100%", fontSize: "28px" }}>
            The Original Drawings from the NAC Team
          </Typography>
          <Typography
            style={{ width: "100%", color: "#5d5d5d", fontSize: "14px" }}
          >
            Staff Writer, May 6 2016, 14:23
          </Typography>
        </Grid>
        <Grid container className={classes.container} xs={10} lg={6}>
          <Typography
            dangerouslySetInnerHTML={{ __html: Rudramadevi.para }}
          ></Typography>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}
