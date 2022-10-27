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
import { TitleAndData } from "components";
import { QueryForm } from "components";
import { sampleDate } from "./dummyDataSpecific";
import { BannerComponent,SlideImgMediaCard } from "components";
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
}));

function AkshyaTritiya(props) {
  const [listProduct, setListProduct] = useState([]);
  const [banners, setBanners] = useState([]);

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const slider = React.createRef();


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
          console.log("listedPageData",listedPageData);
        if (specificPageData.length > 0) {
          setBanners(specificPageData);
        } else {
          setBanners(listedPageData);
        }
      });
  }, []);
  console.log("baners",banners);
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
  
  return (
    <Grid container>
      <Grid xs={12}>
        <Header />
      </Grid>

        {/* <Hidden smDown>
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
        </Hidden> */}
        <BannerComponent banners={banners} dataCarousel="multiple" />

      <TitleAndData title={sampleDate?.title} description={sampleDate?.description} />

      <SlideImgMediaCard listProduct={listProduct} />
      
      <QueryForm image={null} />

      <Footer />
    </Grid>
  );
}

export default AkshyaTritiya;
