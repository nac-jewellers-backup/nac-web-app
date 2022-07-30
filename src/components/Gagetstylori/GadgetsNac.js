import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Slideshow } from "components";
import React from "react";
import { Certified } from "./Certified";
import { Diversestyles } from "./Diversestyles-pink";
import { Easyreturns } from "./Easyreturns-pink";
import { Fromthehouseofnac } from "./Fromthehouseofnac-pink.js";
import { Hypoallergenic } from "./Hypoallergenic-pink";
import "./index.css";
import { Securepayments } from "./Securepayments-pink";

const useStyles = makeStyles((theme) => ({
  typo: {
    margin: "0 0 10px",
    color: "#2F348B",
    fontSize: "11px",
    marginBottom: 0,
    // textAlign: "center",
    fontFamily: "Roboto",
  },
  mainsource: {
    width: "20%",

    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  silverSvg: {
    "& svg": {
      fill: theme.palette.secondary.main,
    },
  },
  collectionSection: {
    // "& svg":{
    fill: `${theme.palette.secondary.main} !important`,
    // }
  },
}));

export default function PaperSheet(props) {
  const classes = useStyles();
  const ArrowLeft = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArrowLeftIcon
        className={`${className} ${classes.collectionSection}`}
        onClick={onClick}
        style={{ ...style }}
      />
    );
  };
  const ArrowRight = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArrowRightIcon
        className={`${className} ${classes.collectionSection}`}
        onClick={onClick}
        style={{ ...style }}
      />
    );
  };
  const dataCarouselcollections = {
    arrows: true,
    dots: false,
    autoplay: true,
    infinite: true,
    accessibility: true,
    speed: 2500,
    // fade: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  // "#D91965"
  return (
    <Grid container spacing={2}>
      <Hidden smDown>
        {props.dadgetdata.map((val) => {
          return (
            <Grid item xs={2}>
              <img
                src={val.img}
                alt="img"
                loading="lazy"
                height="100px"
                width="100px"
                style={{ objectFit: "contain" }}
              />
            </Grid>
          );
        })}
      </Hidden>

      <Hidden smUp>
        <Slideshow
          // sliderRef={this.slider}
          class="subslider-carousel"
          dataCarousel={dataCarouselcollections}
        >
          {props.dadgetdata.map((val) => {
            return (
              <Grid item xs={5}>
                <img
                  src={val.img}
                  alt="img"
                  loading="lazy"
                  width="100px"
                  style={{
                    objectFit: "contain",
                    marginLeft: "12px",
                    padding: "20px",
                    height: "100px",
                  }}
                />
              </Grid>
            );
          })}
          {/* <Grid
            item
            xs={4}
            className={`silverSvg ${classes.mainsource} ${isSilver ? classes.silverSvg : ""
              }`}
          >
            <Certified color={color} />
          </Grid>
          <Grid item xs={4} className={classes.mainsource}>
            <Diversestyles color={color} />
          </Grid>
          <Grid item xs={4} className={classes.mainsource}>
            {!isSilver ? (
              <Easyreturns color={color} />
            ) : (
              <Hypoallergenic color={color} />
            )}
          </Grid>
          <Grid item xs={4} className={classes.mainsource}>
            <Fromthehouseofnac color={color} />
          </Grid>
          <Grid item xs={4} className={classes.mainsource}>
            <Securepayments color={color} />
          </Grid> */}
        </Slideshow>
      </Hidden>
    </Grid>
  );
}
export function PaperSheetProduct(props) {
  const isSilver = props.isSilver ? true : false;
  const color = "#33346d";
  const classes = useStyles();

  // const ArrowLeft = (props) => {
  //   const { className, style, onClick } = props;
  //   return (
  //     <ArrowLeftIcon
  //       className={`${className} ${classes.collectionSection}`}
  //       onClick={onClick}
  //       style={{ ...style }}
  //     />
  //   );
  // };
  // const ArrowRight = (props) => {
  //   const { className, style, onClick } = props;
  //   return (
  //     <ArrowRightIcon
  //       className={`${className} ${classes.collectionSection}`}
  //       onClick={onClick}
  //       style={{ ...style }}
  //     />
  //   );
  // };
 

  // "#D91965"
  return (
    <>
      <Hidden smDown>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={4}
            sm={3}
            lg={2}
            className={`silverSvg ${classes.mainsource} ${
              isSilver ? classes.silverSvg : ""
            }`}
          >
            <Certified color={color} />
          </Grid>
          <Grid item xs={4} sm={3} lg={2} className={classes.mainsource}>
            <Diversestyles color={color} />
          </Grid>
          <Grid item xs={4} sm={3} lg={2} className={classes.mainsource}>
            {!isSilver ? (
              <Easyreturns color={color} />
            ) : (
              <Hypoallergenic color={color} />
            )}
          </Grid>
          <Grid item xs={4} sm={3} lg={2} className={classes.mainsource}>
            <Fromthehouseofnac color={color} />
          </Grid>
          <Grid item xs={4} sm={3} lg={2} className={classes.mainsource}>
            <Securepayments color={color} />
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={4}
            sm={3}
            lg={2}
            className={`silverSvg ${classes.mainsource} ${
              isSilver ? classes.silverSvg : ""
            }`}
          >
            <Certified color={color} />
          </Grid>
          <Grid item xs={4} sm={3} lg={2} className={classes.mainsource}>
            <Diversestyles color={color} />
          </Grid>
          <Grid item xs={4} sm={3} lg={2} className={classes.mainsource}>
            {!isSilver ? (
              <Easyreturns color={color} />
            ) : (
              <Hypoallergenic color={color} />
            )}
          </Grid>
          <Grid item xs={4} sm={3} lg={2} className={classes.mainsource}>
            <Fromthehouseofnac color={color} />
          </Grid>
          <Grid item xs={4} sm={3} lg={2} className={classes.mainsource}>
            <Securepayments color={color} />
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
}
