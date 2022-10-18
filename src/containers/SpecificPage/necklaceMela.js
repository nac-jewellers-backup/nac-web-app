import React, { useEffect, useState } from "react";
import Header from "../../components/SilverComponents/Header";
import Slideshow from "../../components/Carousel/carosul";

import {
  Grid,
  Hidden,
  Typography,
  Container,
  FormControl,
  Button,
  TextField,
  Link,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { SolitairesData } from "../../mappers/dummydata/solitairesData";
import axios from "axios";
import { ImgMediaCard } from "../../components/ProductCard/Card";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import Footer from "../../components/Footer/Footer";
import { API_URL } from "../../config";
import { AllHOMEQUERY } from "../../queries/home";
import { ALLBANNERSCOMPLETE, SEND_QUERIES,SEND_ENQUIREY } from "../../queries/home";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
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
  imgBtn: {
    width: "100%",
    fontStyle: "italic",
    backgroundColor: "#2E348A",
    color: "#fff",
    borderRadius: "0px",
    top: "-4px",
    padding: "10px 0px",
    textAlign: "center",
  },
  storeImage: {
    maxHeight: "700px",
    [theme.breakpoints.down("md")]: {
      minHeight: "580px",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "555px",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "400px",
    },
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
    [theme.breakpoints.down("md")]: {
      padding: "35px 45px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "35px 25px",
    },
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
    [theme.breakpoints.down("xs")]: {
      fontSize: "small",
      padding: "3px 50px",
    },
  },
  totalFormArea: {
    width: "83%",
    margin: "auto",
    padding: "55px 0px 65px 0px",
    boxShawdow: "6px 7px 6px #000 !important",
    [theme.breakpoints.down("xs")]: {
      padding: "55px 0px 35px 0px",
    },
  },
  titleHeader: {
    fontSize: "22px !important",

    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px !important",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "16px !important",
    },
  },
  titleContents: {
    fontSize: "18px !important",

    [theme.breakpoints.down("md")]: {
      fontSize: "16px !important",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "14px !important",
    },
  },
  roots: {
    padding: "50px 60px",
    [theme.breakpoints.down("xs")]: {
      padding: "25px 0px",
    },
  },
  headings: {
    fontSize: "50px !important",
    color: "#B2832C",
    fontStyle: "italic",
    padding: "10px 13px 0px 13px",
    [theme.breakpoints.down("md")]: {
      fontSize: "45px !important",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px !important",
      padding: "10px 4px 0px 4px",
    },
  },
  logoEdits: {
    position: "relative",
    height: "70px",
    top: "12px",
    [theme.breakpoints.down("md")]: {
      height: "55px",
      top: "17px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40px",
      top: "12px",
    },
  },
  cardEdit: {
    width: "89%",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  headerAlign: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "40px",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "10px",
    },
  },

  necklaceMela: {
    "& .headerTop": {
      [theme.breakpoints.down("xs")]: {
        height: "0 !important",
      },
    },
  },
}));

const NecklaceMela = (props) => {
  const InitialState = {
    name: "",
    phone: "",
    email: "",
    query: "",
  };
  const classes = useStyles();
  const [openSnack, setOpenSnack] = React.useState(false);
  const [openSnackError, setOpenSnackError] = React.useState(false);
  const [formData, setFormData] = useState(InitialState);
  const [listProduct, setListProduct] = useState([]);
  const [errorData, setErrorData] = useState(InitialState);
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

  const handleValidateData = () => {
    if (formData.name.length === 0) {
      setErrorData({ ...errorData, name: "Please enter name" });
      return false;
    }
    if (formData.phone.length === 0) {
      setErrorData({ ...errorData, phone: "Please enter phone number" });

      return false;
    }
    if (formData.email.length === 0) {
      setErrorData({ ...errorData, email: "Please enter email name" });

      return false;
    }
    if (formData.query.length === 0) {
      setErrorData({ ...errorData, query: "Please enter query name" });

      return false;
    }
    setErrorData({
      name: "",
      phone: "",
      email: "",
      query: "",
    });
    return true;
  };

  const emailTrigger =async(id)=>{
    console.log(id,"????")
    const params={
      "type": "send_enquiry",
      "appointment_id": id
    }
    await axios.post(`${API_URL}/trigger_mail`, params).then((res) => {
      if (res.data) {
        setOpenSnack(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          query: "",
        });
        return;
      }
      setOpenSnackError(true);
    })
  }

  const onsubmitvalue = () => {
    if (handleValidateData()) {
      fetch(`${API_URL}/graphql`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: SEND_ENQUIREY,
          variables: {
            updatedAt: new Date(),
            createdAt: new Date(),
            email: formData.email,
            appointmentTypeId: 5,
            comments: formData.query,
            specialRequests: window.location.pathname.slice(1),
            customerName: formData.name,
            isActive: true,
            mobile: formData.phone,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.data?.createAppointment?.appointment?.id) {
            emailTrigger(data?.data?.createAppointment?.appointment?.id)
        }
        });
    }
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

  useEffect(() => {
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: AllHOMEQUERY,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //feature product
        let featureproductdata = data?.data?.allFeaturedProducts?.nodes;

        let featureproductDetails = featureproductdata.map((val) => ({
          price:
            val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
              ?.markupPrice ?? " ",

          offerPrice:
            val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
              ?.discountPrice ?? " ",
          title: val?.productListByProductId?.productName ?? " ",
          save:
            val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
              ?.discount ?? " ",
          image: {
            placeImage: {
              img:
                val?.productListByProductId?.productImagesByProductId?.nodes[0]
                  ?.imageUrl ?? " ",
            },
            hoverImage: {
              img:
                val?.productListByProductId?.productImagesByProductId?.nodes[0]
                  ?.imageUrl ?? " ",
            },
          },
          productId: val?.productId ?? " ",
          diamondType: "",
          purity: "",
          productType: "",
          skuId:
            val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
              ?.skuId ?? " ",
          skuID:
            val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
              ?.skuId ?? " ",
          skuUrl:
            val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
              ?.skuUrl ?? " ",
          description:
            val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
              ?.transSkuDescriptionsBySkuId?.nodes[0]?.skuDescription ?? " ",
        }));

        setListProduct(featureproductDetails ?? []);
      });
  }, []);
  const ArrowLeft = (props) => {
    const { className, onClick } = props;
    return (
      <ArrowLeftIcon
        className={`${className} ${classes.collectionSection}`}
        onClick={onClick}
        style={{ left: "-60px" }}
      />
    );
  };
  const ArrowRight = (props) => {
    const { className, onClick } = props;
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

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackError(false);
    setOpenSnack(false);
  };
  return (
    <Grid container>
      <Grid className={classes.necklaceMela} xs={12}>
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
          <>
            <Hidden smDown>
              <Grid container className={classes.headContent}>
                <a href={"#"} style={{ width: "100%" }}>
                  <img
                    alt="images"
                    loading="lazy"
                    src={
                      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Desktop-size.webp"
                    }
                    style={{ width: "100%", height: "100%", marginTop: "20px" }}
                  />
                </a>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid container className={classes.headContent}>
                <a href={"#"}>
                  <img
                    alt="images"
                    loading="lazy"
                    src={
                      "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Mobile-size.webp"
                    }
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
              </Grid>
            </Hidden>
          </>
        </Slideshow>
      </Grid>

      <Grid xs={12} className={classes.roots}>
        <div style={{ textAlign: "center" }}>
          <div className={classes.headerAlign}>
            <img
              alt="images"
              loading="lazy"
              className={classes.logoEdits}
              src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/collection+page/urn_aaid_sc_US_4f2880c9-1910-41e4-b332-90c4513a4ca7+(1).png"
            />
            <Typography className={classes.headings}>
              THE GRAND NECKLACE MELA
            </Typography>
            <img
              alt="images"
              loading="lazy"
              className={classes.logoEdits}
              src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/collection+page/urn_aaid_sc_US_4f2880c9-1910-41e4-b332-90c4513a4ca7+(2).png"
            />
          </div>

          {/* <Typography className={classes.titleHeader}>
            Valam Perugum Valayal Thiruvizha with NAC Jewellers
          </Typography> */}

          <Typography className={classes.titleContents}>
            VIJAYAWADA - 28 July - 15 Aug
          </Typography>
          <Typography className={classes.titleContents}>
            Tamil Nadu - 13 Aug - 31 Aug
          </Typography>

          <br />
          <Typography
            className={classes.titleContents}
            style={{ fontWeight: "bold" }}
          >
            NAC Jewellers Grand Necklace Mela
          </Typography>
          <br />
          <Typography className={classes.titleContents}>
            Choose from a wide variety of Necklaces range from 4 grams to 400
            grams and avail exciting offers!
          </Typography>
          <br />

          <Grid sm={12} md={8} style={{ margin: "auto" }}>
            <Typography
              className={classes.titleContents}
              style={{ textAlign: "start", fontWeight: "bold" }}
            >
              This Necklace Mela
            </Typography>
            <ul style={{ textAlign: "start" }}>
              <li className={classes.titleContents}>
                Rs.500 Off on Gold per sovereign
              </li>
              <li className={classes.titleContents}>
                Rs. 5000 Off on Diamonds per carat
              </li>
              <li className={classes.titleContents}>
                Rs.500 extra per sovereign for old gold exchange
              </li>
              <li className={classes.titleContents}>
                Rs.2000 off per Kg on silver articles
              </li>
              <li className={classes.titleContents}>
                Enrol in our saving scheme this August and redeem the full
                scheme benefit in just 9 months on Akshaya Tritiya day
              </li>

              <li className={classes.titleContents}>
                Click here to watch our AD Video&nbsp;
                <a href="https://www.youtube.com/watch?v=5OyyXB8xxRU">Tamil</a>
                &nbsp;|&nbsp;
                <a href="https://www.youtube.com/watch?v=f4OE5GqCf8U">Telugu</a>
              </li>
              <li className={classes.titleContents}>
                Click here to enrol in our chit Scheme&nbsp;
                <a href="www.nacsavings.com">www.nacsavings.com</a>
              </li>
            </ul>

            <Typography
              className={classes.titleContents}
              style={{ textAlign: "start" }}
            >
              Available at all our showrooms &nbsp;
              <a href="https://www.nacjewellers.com/store">Click here</a>
            </Typography>
            <Typography
              className={classes.titleContents}
              style={{ textAlign: "start" }}
            >
              For more info please contact&nbsp;
              <a href="tel:+91 44 4399 6666">+91 44 4399 6666 </a>&nbsp;I&nbsp;
              <a href="mailto:care@nacjewellers.com">care@nacjewellers.com</a>
            </Typography>
          </Grid>
        </div>
      </Grid>
      <Hidden smDown>
        <Container className={classes.cardEdit} style={{ paddingTop: 8 }}>
          <Slideshow
            class="subslider-carousel"
            dataCarousel={dataCarouselcollections}
          >
            {listProduct &&
              listProduct?.map((val) => {
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
            class="subslider-carousel"
            dataCarousel={dataCarouselcollectionsSm}
          >
            {listProduct &&
              listProduct?.map((val) => {
                return (
                  <ImgMediaCard data={val} cardSize="auto" hoverText={true} />
                );
              })}
          </Slideshow>
        </Container>
      </Hidden>

      <Grid container className={classes.totalFormArea}>
        <Grid item sm={7} xs={12} style={{ backgroundColor: "#F4F4F4" }}>
          <div className={classes.formArea}>
            <div className={classes.inputFieldsEdit}>
              <Typography className={classes.inputFieldsHeader}>
                First Name:
              </Typography>
              <FormControl style={{ backgroundColor: "#fff" }} fullWidth>
                <TextField
                  style={{ borderRadius: "0px" }}
                  labelWidth={0}
                  value={formData.name}
                  classes={{ notchedOutline: classes.textFieldEdit }}
                  InputProps={{ disableUnderline: true }}
                  onChange={onChangeData}
                  name="name"
                />
                <label style={{ color: "red" }}>{errorData.name}</label>
              </FormControl>
            </div>
            <div className={classes.inputFieldsEdit}>
              <Typography className={classes.inputFieldsHeader}>
                Phone Number:
              </Typography>
              <FormControl style={{ backgroundColor: "#fff" }} fullWidth>
                <TextField
                  type="number"
                  style={{ borderRadius: "0px" }}
                  labelWidth={0}
                  value={formData.phone}
                  classes={{ notchedOutline: classes.textFieldEdit }}
                  InputProps={{ disableUnderline: true }}
                  onChange={onChangeData}
                  name="phone"
                />
                <label style={{ color: "red" }}>{errorData.phone}</label>
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
                  value={formData.email}
                  classes={{ notchedOutline: classes.textFieldEdit }}
                  InputProps={{ disableUnderline: true }}
                  onChange={onChangeData}
                  name="email"
                />
                <label style={{ color: "red" }}>{errorData.email}</label>
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
                  value={formData.query}
                  onChange={onChangeData}
                  name="query"
                  multiline
                  rows={8}
                />
                <label style={{ color: "red" }}>{errorData.query}</label>
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
          </div>
        </Grid>
        <Grid item sm={5} xs={12} style={{ backgroundColor: "#2E348A" }}>
          <Link href="/store">
            <img
              alt="images"
              loading="lazy"
              src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/akshaya+page/Group+63%402x.png"
              style={{ width: "100%" }}
              className={classes.storeImage}
            />
            <div className={classes.imgBtn} style={{ textDecoration: "none" }}>
              FOR MORE VISIT OUR STORE
            </div>
          </Link>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openSnack}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Your queries send successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openSnackError}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          Something went wrong, Please try again!
        </Alert>
      </Snackbar>
      <Footer />
    </Grid>
  );
};

export default NecklaceMela;
