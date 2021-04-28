import React from "react";
import { Grid, Typography, Button, Link } from "@material-ui/core";
import { DigitalMarketingPage } from "mappers/dummydata/savingNac";
import Header from "components/SilverComponents/Header";
import styles from "./digitalmarketingStyle";
import Footer from "../../components/Footer/Footer";
import Slideshow from "components/Carousel/carosul";
export default function DigitalMarketing(props) {
  const classes = styles();

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Header />
      </Grid>

      <Grid item xs={12} style={{marginTop:"10px"}}>
        <Slideshow dataCarousel={DigitalMarketingPage.carouselTop.setting}>
          {DigitalMarketingPage.carouselTop.data.map((val, index) => (
            <Grid container key={index}>
              <img src={val.img} style={{ width: "100%", height: "100%" }} />
            </Grid>
          ))}
        </Slideshow>
      </Grid>

      <Grid
        xs={10}
        sm={10}
        md={10}
        lg={10}
        xl={10}
        className={classes.heading}
        container
      >
        <Grid xs={12} sm={12} md={12} lg={12} xl={12} item>
          <Typography className={classes.titlePage}>
            {DigitalMarketingPage.heading}
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          container
          direction="row"
          className={classes.contentPart}
          spacing={3}
        >
          <Grid xs={12} sm={12} md={6} lg={6} xl={6} item>
            {" "}
            <Typography className={classes.headings}>
              {DigitalMarketingPage.jobBreifHeading}
            </Typography>
            <Typography className={classes.content}>
              {DigitalMarketingPage.jobBreifContent}
            </Typography>
            <Typography className={classes.headings}>
              {DigitalMarketingPage.resposibilitiesHeading}
            </Typography>
            {}
            {DigitalMarketingPage.resposibilitiesContent.map((val, index) => (
              <Typography
                key={index}
                className={classes.content}
                style={{ display: "list-item" }}
              >
                {val.content}
              </Typography>
            ))}
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={6} xl={6} item>
            <Typography className={classes.headings}>
              {DigitalMarketingPage.requirementHeading}
            </Typography>
            <Typography className={classes.content}>
              {DigitalMarketingPage.requirementContent}
            </Typography>
            <hr className={classes.hrTag} />
            <Button className={classes.button}>
              <Link
                href="mailto:info@nacjewellers.com"
                className={classes.link}
              >
                Apply to this role
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}
