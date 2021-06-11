import React, { useEffect, useState } from "react";
import Header from "../../components/SilverComponents/Header";
import Slideshow from "../../components/Carousel/carosul";
import clsx from "clsx";
import {
  Grid,
  Hidden,
  Typography,
  Container,
  FormControl,
  Button,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SolitairesData } from "../../mappers/dummydata/solitairesData";
import { header, dummyData } from "./dummyDataSpecific";
import { ImgMediaCard } from "../../components/ProductCard/Card";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import "./specificPage.css";
import Footer from "../../components/Footer/Footer";
import { API_URL } from "../../config";
import { ALLBANNERSCOMPLETE } from "../../queries/home";

const useStyles = makeStyles((theme) => ({
  preButton: {
    width: "35px!important",
    height: "42px!important",
    backgroundRepeat: "no-repeat !important",
    opacity: "1!important",
    backgroundImage:
      "url(https://alpha-assets.stylori.com/images/static/slider_icon.png)!important",
    backgroundPosition: "-27px -229px!important",

    borderLeft: 0,
    background: "none",
    left: 0,
    marginTop: "-30px",
    fontSize: "20px",
    // color: "#fff",
    textAlign: "center",
    position: "absolute",
    zIndex: 9,
    [theme.breakpoints.only("xs")]: {
      top: "229px !important",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.only("sm")]: {
      top: "262px !important",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.only("md")]: {
      top: "321px !important",
    },
    [theme.breakpoints.up("lg")]: {
      top: "426px !important",
    },
    [theme.breakpoints.only("xl")]: {
      top: "682px !important",
    },
  },
  nextButton: {
    backgroundImage:
      "url(https://alpha-assets.stylori.com/images/static/slider_icon.png)!important",
    width: "35px!important",
    height: "42px!important",
    backgroundRepeat: "no-repeat!important",
    opacity: "1!important",
    backgroundPosition: "-160px -229px!important",
    borderRight: 0,
    position: "absolute",
    zIndex: 9,
    float: "right",
    right: 0,
    top: "55%!important",
    [theme.breakpoints.only("xs")]: {
      top: "199px !important",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.only("sm")]: {
      top: "231px !important",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.only("md")]: {
      top: "291px !important",
    },
    [theme.breakpoints.up("lg")]: {
      top: "397px !important",
    },
    [theme.breakpoints.only("xl")]: {
      top: "653px !important",
    },
  },
  headContent: {
    outline: "none !important",
    position: "relative",
  },

  mainCarosel: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      height: "500px ",
    },
    [theme.breakpoints.down("sm")]: {
      height: "280px ",
    },
    objectFit: "cover !important",
    headContent: {
      width: "100%",
      height: "100%",
    },
  },
  collectionSection: {
    fill: "#2E348A",
    fontSize: "45px",
  },
  margin: {
    margin: theme.spacing(1),
  },
  inputFieldsEdit: {
    marginBottom: "15px",
  },
  textFieldEdit: {
    borderWidth: "0px",
  },
  formArea: {
    padding: "50px 75px",
    backgroundColor: "#F4F4F4",
  },
  inputFieldsHeader: {
    paddingBottom: "5px",
    color: "#6E6F72",
  },
  underLineEdit: {
    borderBottom: "none",
  },
  buttonAlign: {
    backgroundColor: "#B2832C",
    borderRadius: "0px",
    color: "#fff",
    padding: "5px 110px",
    fontSize: "large",
    "&:hover": {
      backgroundColor: "#9b6706",
    },
  },
  totalFormArea: {
    width: "80%",
    margin: "auto",
    padding: "55px 0px 65px 0px",
    boxShawdow: "6px 7px 6px #bebfbf !important"
  },
}));

function AkshyaTritiya(props) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    query: "",
  });
  const [banners, setBanners] = useState([]);

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const slider = React.createRef();

  const onChangeData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onsubmitvalue = async () => {
    let fullDataForm = {
      FirstName: formData.firstName,
      LastName: formData.lastName,
      Email: formData.email,
      Query: formData.query,
    };
    console.log("fullDataForm", fullDataForm);
  };

  useEffect(() => {
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ALLBANNERSCOMPLETE,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let bannerFullData = data.data.allBanners.nodes;
        const specificPageData = bannerFullData.filter(
          (item) => item.urlParam === window.location.pathname
        );
        const listedPageData = bannerFullData.filter(
          (item) => item.urlParam === "listing"
        );

        if (specificPageData.length > 0) {
          setBanners(specificPageData);
        } else {
          setBanners(listedPageData);
        }
      });
  }, []);

  const dataCarousel = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    fade: false,
    dots: false,
    autoplaySpeed: 5000,
    arrows: false,
  };
  const ArrowLeft = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArrowLeftIcon
        className={`${className} ${classes.collectionSection}`}
        onClick={onClick}
        style={{ left: "-60px" }}
      />
    );
  };
  const ArrowRight = (props) => {
    const { className, style, onClick } = props;
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
    <Grid container>
      <Grid xs={12}>
        <Header />
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.bannerImg}
      >
        <Hidden smDown>
          {SolitairesData.carouselTop.setting.arrowsImg && (
            <Grid container>
              <Grid
                item
                onClick={previous}
                className={classes.preButton}
              ></Grid>
              <Grid item onClick={next} className={classes.nextButton}></Grid>
            </Grid>
          )}
        </Hidden>
        <Slideshow
          sliderRef={slider}
          dataCarousel={SolitairesData.carouselTop.setting}
        >
          {banners.map((val, index) => (
            <>
              <Hidden smDown>
                <Grid container key={index} className={classes.headContent}>
                  <a href={val.urlParam} style={{ width: "100%" }}>
                    {/* <Typography className={classes.imageContent}>
                      {val.imageContent}
                    </Typography> */}
                    <img
                      src={val.web}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid container key={index} className={classes.headContent}>
                  <a href={val.urlParam}>
                    {/* <Typography className={classes.imageContent}>
                      {val.imageContent}
                    </Typography> */}
                    <img
                      src={val.mobile}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </a>
                </Grid>
              </Hidden>
            </>
          ))}
        </Slideshow>
        <Grid xs={12} className="roots">
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "40px",
              }}
            >
              <img
                className="logoEdits"
                src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/collection+page/urn_aaid_sc_US_4f2880c9-1910-41e4-b332-90c4513a4ca7+(1).png"
              />
              <Typography className="headings">AKSHAYA TRITIYA</Typography>
              <img
                className="logoEdits"
                src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/collection+page/urn_aaid_sc_US_4f2880c9-1910-41e4-b332-90c4513a4ca7+(2).png"
              />
            </div>
            {header.map((val) => (
              <Typography className="titleContents">{val.title}</Typography>
            ))}
          </div>
        </Grid>
        <Hidden smDown>
          <Container maxWidth={"lg"} style={{ paddingTop: 8 }}>
            <Slideshow
              // sliderRef={this.slider}
              class="subslider-carousel"
              dataCarousel={dataCarouselcollections}
            >
              {dummyData.map((val) => {
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
              // sliderRef={this.slider}
              class="subslider-carousel"
              dataCarousel={dataCarouselcollectionsSm}
            >
              {dummyData.map((val) => {
                return (
                  <ImgMediaCard data={val} cardSize="auto" hoverText={true} />
                );
              })}
            </Slideshow>
          </Container>
        </Hidden>

      
        <Grid container className={classes.totalFormArea}>
          <Grid item xs={7} className={classes.formArea}>
            <div className={classes.inputFieldsEdit}>
              <Typography className={classes.inputFieldsHeader}>
                First Name:
              </Typography>
              <FormControl style={{ backgroundColor: "#fff" }} fullWidth>
                <TextField
                  style={{ borderRadius: "0px" }}
                  labelWidth={0}
                  classes={{ notchedOutline: classes.textFieldEdit }}
                  InputProps={{ disableUnderline: true }}
                  onChange={onChangeData}
                  name="firstName"
                />
              </FormControl>
            </div>
            <div className={classes.inputFieldsEdit}>
              <Typography className={classes.inputFieldsHeader}>
                Last Name:
              </Typography>
              <FormControl style={{ backgroundColor: "#fff" }} fullWidth>
                <TextField
                  style={{ borderRadius: "0px" }}
                  labelWidth={0}
                  classes={{ notchedOutline: classes.textFieldEdit }}
                  InputProps={{ disableUnderline: true }}
                  onChange={onChangeData}
                  name="lastName"
                />
              </FormControl>
            </div>
            <div className={classes.inputFieldsEdit}>
              <Typography className={classes.inputFieldsHeader}>
                Email id:
              </Typography>
              <FormControl style={{ backgroundColor: "#fff" }} fullWidth>
                <TextField
                  style={{ borderRadius: "0px" }}
                  labelWidth={0}
                  classes={{ notchedOutline: classes.textFieldEdit }}
                  InputProps={{ disableUnderline: true }}
                  onChange={onChangeData}
                  name="email"
                />
              </FormControl>
            </div>
            <div className={classes.inputFieldsEdit}>
              <Typography className={classes.inputFieldsHeader}>
                Your Query
              </Typography>
              <FormControl style={{ backgroundColor: "#fff" }} fullWidth>
                <TextField
                  style={{ borderRadius: "0px" }}
                  classes={{ notchedOutline: classes.textFieldEdit }}
                  InputProps={{ disableUnderline: true }}
                  onChange={onChangeData}
                  name="query"
                  multiline
                  rows={8}
                />
              </FormControl>
            </div>
            <div style={{ textAlign: "end", paddingTop: "10px" }}>
              <Button
                variant="contained"
                onClick={onsubmitvalue}
                className={classes.buttonAlign}
              >
                Sumbit
              </Button>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div>
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/akshaya+page/Group+63%402x.png"
                style={{ width: "100%", maxHeight: "635px" }}
              />
            </div>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default AkshyaTritiya;
