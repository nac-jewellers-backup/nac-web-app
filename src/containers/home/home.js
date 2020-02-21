import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Slideshow from 'components/Carousel/carosul';
import { homeNac, HomeCardData, StaticImage } from "mappers/dummydata/homeNac";
import { withRouter } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import { withStyles } from "@material-ui/core/styles";
import Story from "../../components/story";
import HomeCard from "../../components/homecard";
// import {styles} from './homestyle';
import Testimonial from '../../components/testimonial/testimonial'
import { storyData } from 'mappers/dummydata/homeNac';
import Header from 'components/SilverComponents/Header'
import Footer from 'components/Footer/Footer'

const styles = theme => ({
  preButton: {
    width: "35px!important",
    height: "42px!important",
    backgroundRepeat: "no-repeat !important",
    opacity: "1!important",
    backgroundImage:
      "url(https://alpha-assets.stylori.com/images/static/slider_icon.png)!important",
    backgroundPosition: "-27px -229px!important",
    // background-color: #fff!important;
    // border: 1px solid #ccc;
    borderLeft: 0,
    background: "none",
    left: 0,
    // top:"55% !important",
    marginTop: "-30px",
    fontSize: "20px",
    color: "#fff",
    textAlign: "center",
    position: "absolute",
    zIndex: 9,
    [theme.breakpoints.only("xs")]: {
      top: "229px !important",
      height: "30px",
      width: "28px"
    },
    [theme.breakpoints.only("sm")]: {
      top: "262px !important",
      height: "30px",
      width: "28px"
    },
    [theme.breakpoints.only("md")]: {
      top: "321px !important"
    },
    // [theme.breakpoints.only('lg')]: {
    //   top: "33% !important",
    // },
    [theme.breakpoints.up("lg")]: {
      top: "426px !important"
    },
    [theme.breakpoints.only("xl")]: {
      top: "682px !important"
    }
  },
  nextButton: {
    backgroundImage:
      "url(https://alpha-assets.stylori.com/images/static/slider_icon.png)!important",
    width: "35px!important",
    height: "42px!important",
    backgroundRepeat: "no-repeat!important",
    opacity: "1!important",
    backgroundPosition: "-160px -229px!important",
    // backgroundColor: "#fff!important",
    // border: "1px solid #ccc",
    borderRight: 0,
    position: "absolute",
    zIndex: 9,
    float: "right",
    right: 0,
    top: "55%!important",
    [theme.breakpoints.only("xs")]: {
      top: "199px !important",
      height: "30px",
      width: "28px"
    },
    [theme.breakpoints.only("sm")]: {
      top: "231px !important",
      height: "30px",
      width: "28px"
    },
    [theme.breakpoints.only("md")]: {
      top: "291px !important"
    },
    // [theme.breakpoints.only('lg')]: {
    //   top: "33% !important",
    // },
    [theme.breakpoints.up("lg")]: {
      top: "397px !important"
    },
    [theme.breakpoints.only("xl")]: {
      top: "653px !important"
    }
  },

  mainCarosel: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.only("xs")]: {
      height: "230px"
    }
  },

  mainImg: {
    position: "block",
    width: "100%",
    // height:"500px"
  },
  mainImgCarosel: {
    width: "100%",
    // height: "500px"
  },
  mainImgContainer: {
    position: "relative",
    width: "100%",
    // height:"500px"
  },
  width: {
    width: "100%"
  }
});

class HomeComp extends React.Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.slider = React.createRef();
    this.state = {
      loading: false,
      count: ""
    };
  }
  next = () => {
    this.slider.current.slickNext();
  };
  previous = () => {
    this.slider.current.slickPrev();
  };

  render() {
    const dataCarousel = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      fade: false,
      dots: false,
      autoplaySpeed: 5000,
      arrows: false
    };
    const { classes } = this.props;

    return (
      <Grid container xs={12}>
        <Grid xs={12} container>
            <Header />
            </Grid>
        <Grid item xs={12} style={{position:"relative"}}>
          {/* <Hidden smDown> */}
          {homeNac.carouselTop.setting.arrowsImg && (
            <Grid container>
              <Grid
                item
                onClick={this.previous}
                className={classes.preButton}
              ></Grid>
              <Grid
                item
                onClick={this.next}
                className={classes.nextButton}
              ></Grid>
            </Grid>
          )}
          {/* </Hidden> */}
          <Slideshow
            dataCarousel={homeNac.carouselTop.setting}
            sliderRef={this.slider}
          >
            {homeNac.carouselTop.data.map((val, index) => (
              <Grid container key={index}>
                <img src={val.img} className={classes.mainCarosel} />
              </Grid>
            ))}
          </Slideshow>
        </Grid>
        <Grid container>
          <Story
            heading={storyData.data.heading}
            para={storyData.data.para}
            store={storyData.data.store}
          />
        </Grid>
        <Grid item>
          <HomeCard Testimonial={HomeCardData.data} />
        </Grid>
        <Grid item className={classes.mainImg}>
          <Grid item className={classes.mainImgContainer}>
            <Slideshow
              dataCarousel={StaticImage.setting}
              sliderRef={this.slider}
            >
              {StaticImage.data.map((val, index) => (
                <Grid container key={index}>
                  <img src={val.img} className={classes.mainImgCarosel} />
                </Grid>
              ))}
            </Slideshow>
          </Grid>
        </Grid>

        <Grid container style={{ padding: "40px 0px" }}>
          <Grid item style={{ width: "100%", textAlign: "center" }}>
            <Typography
              variant="h5"
              style={{ padding: "40px 0px", textAlign: "center" }}
            >
              Testimonial
            </Typography>
          </Grid>

          <Testimonial />
        </Grid>
        <Footer/>
      </Grid>
    );
  }
}

export default withStyles(styles)(HomeComp);
