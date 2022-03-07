import {
  Avatar,
  Box,
  Container,
  Grid,
  Hidden,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import axios from "axios";
import Footer from "components/Footer/Footer";
import { PaperSheetProduct } from "components/Gagetstylori/GadgetsNac";
import PriceBuynow from "components/product-image-slider/buyNow";
import CustomerReviews from "components/product-image-slider/customer-reviews";
import PriceCertification from "components/product-image-slider/priceCertification";
import "components/product-image-slider/product-images.css";
import ProductDetails from "components/product-image-slider/productDetails";
import ProductImageZoom from "components/product-image-slider/productImageZoom";
import ProductPrice from "components/product-image-slider/productPrice";
import RatingForm from "components/product-image-slider/ratingform";
import { ImgMediaCard } from "components/ProductCard/Card";
import Header from "components/SilverComponents/Header";
import { CartContext, GlobalContext } from "context";
import { ProductDetailContext } from "context/ProductDetailContext";
import productDetails from "mappers/productDetails";
import React, { Component } from "react";
import ReactPixel from "react-facebook-pixel";
import MetaTags from "react-meta-tags";
import { withRouter } from "react-router-dom";
import "screens/screens.css";
import Slideshow from "../components/Carousel/carosul";
import NeedHelp from "../components/needHelp";
import { API_URL } from "../config";
const styles = (theme) => ({
  collectionSection: {
    // "& svg":{
    fill: `${theme.palette.secondary.main} !important`,
    textShadow: "2px 2px 8px #FF0000",

    // }
  },

  spanIcon: {
    width: "6px",
    height: "6px",
    border: "1px solid gray",
    borderRadius: "50%",
    padding: "2px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "7px",
    marginLeft: "2px",
  },
  // similarProducts:{
  //   "& .svg":{
  //     left:'0 !important'
  //   }
  // }

  productInformationGrid: {
    [theme.breakpoints.only("md")]: {
      marginBottom: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "25px",
    },
  },
  priceNowOverallBox: {
    width: "100%",

    [theme.breakpoints.only("md")]: {
      paddingBottom: "7px !important",
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: "16px !important",
      marginBottom: "12px !important",
    },
  },
  productmaterial: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "13px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14px",
    },
  },
});
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clear: "",
      otherCategeriesdata: [],
    };
  }

  componentDidMount() {
    ReactPixel.init("1464338023867789", {}, { debug: true, autoConfig: false });
    ReactPixel.track("PageView");

    axios
      .post(`${API_URL}/you_may_like`, {
        sku_id: this?.props?.data[0]?.skuId,
      })
      .then((res) => {
        this.setState({ otherCategeriesdata: res.data });
      });
  }

  renderUrl = () => {
    var loc = this.props.location.pathname;
    var path = loc.split("/");
    if (path[2] === "Bracelets") return "/bracelets-jewellery";
    if (path[2] === "Pendants") return "/pendants-jewellery";
    if (path[2] === "Nosepins") return "/nose+pin+online-jewellery";
    if (path[2] === "Earrings") return "/earrings-jewellery";
    if (path[2] === "Bangles") return "/bangles-jewellery";
    if (path[2] === "Rings") return "/rings-jewellery";
  };

  render() {
    const { classes } = this.props;

    var loc = this.props.location.pathname;
    var path = loc.split("/");

    const clear_rating = (bool) => {
      if (bool === false) {
        this.setState({
          clear: "",
        });
      }
      if (bool === true) {
        this.setState({
          clear: "clear_",
        });
      }
    };
    const ArrowLeft = (props) => {
      const { className, style, onClick } = props;
      return (
        <ArrowLeftIcon
          className={`${className} ${classes.collectionSection}`}
          onClick={onClick}
          style={{
            fill: "theme.palette.secondary.main !important",
            fontSize: "40px",
          }}
        />
      );
    };
    const ArrowRight = (props) => {
      const { className, style, onClick } = props;
      return (
        <ArrowRightIcon
          className={`${className} ${classes.collectionSection}`}
          onClick={onClick}
          style={{
            ...style,
            fill: "theme.palette.secondary.main !important",
            fontSize: "40px",
          }}
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
      speed: 3000,
      // fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <ArrowLeft />,
      nextArrow: <ArrowRight />,
    };

    return (
      <div style={{ overflow: "hidden" }}>
        <div>
          <MetaTags>
            {this?.props &&
            this.props?.data &&
            this.props?.data[0] &&
            this.props?.data[0].length > 0 ? (
              <>
                <title>{this?.props?.data[0]?.title}</title>
                <meta name="description" content={this?.props?.data[0]?.dis} />
                <meta
                  name="keywords"
                  content={this?.props?.data[0]?.productsPendants[0]?.name}
                />
                <meta
                  property="og:title"
                  id="fb-title"
                  content={this?.props?.data[0]?.title}
                />
                <meta
                  property="og:description"
                  content={this?.props?.data[0]?.dis}
                />
                <meta property="og:type" content="product" />
                <meta
                  property="og:url"
                  id="fb-product-url"
                  content={window.location.href}
                />
                <meta
                  property="og:image"
                  id="fb_imageUrl"
                  content={this?.props?.data[0]?.fadeImages}
                />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@StyloriLove" />
                <meta
                  name="twitter:title"
                  id="twitter-title"
                  content={this?.props?.data[0]?.title}
                />
                <meta
                  name="twitter:description"
                  content={this?.props?.data[0]?.dis}
                />
                <meta
                  name="twitter:image"
                  id="twitter_imageUrl"
                  content={this?.props?.data[0]?.fadeImages}
                />
              </>
            ) : (
              ""
            )}
          </MetaTags>
        </div>

        <Hidden smDown>
          <Header wishlist={this?.props?.wishlistdata} />

          <Grid
            className="pricing-imgzom-media"
            style={{
              maxWidth: "1600px",
              margin: "auto",
            }}
          >
            <Grid xs={12} container spacing={12} style={{ marginTop: "70px" }}>
              <Grid item xs={6}>
                <ProductImageZoom
                  data={this?.props?.data}
                  wishlist={this?.props?.wishlistdata}
                />
                <PaperSheetProduct />
              </Grid>
              <Grid item xs={6}>
                <div className={classes.priceNowOverallBox}>
                  <ProductPrice
                    data={this?.props?.data}
                    wishlist={this?.props?.wishlistdata}
                  />
                </div>
                <div className={classes.priceNowOverallBox}>
                  <PriceBuynow data={this?.props?.data} pdpage={true} />
                </div>
                <Grid
                  container
                  item
                  xs={12}
                  style={{
                    color: "gray",
                    fontStyle: "italic",
                    fontSize: 10,
                    marginBottom: 10,
                  }}
                >
                  <Grid item>
                    <span
                      style={{
                        color: "gray",

                        fontSize: "14px",
                      }}
                    >
                      {" "}
                      <span
                        style={{
                          color: "gray",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        Model No:{" "}
                      </span>{" "}
                      &nbsp;
                      {this?.props?.data[0]?.skuId ?? " "} &nbsp; &nbsp;{" "}
                      <span style={{ fontSize: "10px", fontStyle: "normal " }}>
                        |
                      </span>{" "}
                      &nbsp; &nbsp;
                    </span>
                    <span
                      style={{
                        color: "gray",
                        fontWeight: "bold",
                        fontSize: 12,
                        marginTop: 4,
                        fontSize: "14px",
                      }}
                    >
                      Product Information:{" "}
                      <span className={classes.spanIcon}>i</span>
                    </span>
                  </Grid>
                </Grid>
                <Grid
                  container
                  className={classes.productInformationGrid}
                  style={{
                    marginTop: "12px",
                  }}
                >
                  {this?.props &&
                    this?.props?.data &&
                    this?.props?.data?.length > 0 &&
                    this?.props?.data[0] &&
                    this?.props?.data[0]?.productsDetails?.length > 0 &&
                    this?.props?.data[0]?.productsDetails[0] &&
                    this?.props?.data[0]?.productsDetails[0]?.namedetail
                      ?.length > 0 &&
                    this?.props?.data[0]?.productsDetails[0]?.namedetail[2] &&
                    this?.props?.data[0]?.productsDetails[0]?.namedetail[2]
                      ?.details && (
                      <Grid item>
                        <Box display="flex" alignItems="center">
                          <Box>
                            <Avatar alt="NAC">
                              <img
                                src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+1015.svg"
                                alt="matel weight"
                                height="100%"
                                width="100%"
                              />
                            </Avatar>
                          </Box>
                          <Box
                            style={{
                              fontSize: 12,
                              color: "gray",
                              paddingLeft: 15,
                              margin: "auto",
                            }}
                          >
                            <Typography className={classes.productmaterial}>
                              Metal Weight
                            </Typography>
                            <Typography className={classes.productmaterial}>
                              {this?.props?.data[0]?.productsDetails[0]
                                ?.namedetail[2]?.details ?? ""}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    )}
                  {this.props &&
                    this.props.data &&
                    this.props.data.length > 0 &&
                    this.props.data[0] &&
                    this.props.data[0].productsDetails.length > 0 &&
                    this.props.data[0].productsDetails[0] &&
                    this.props.data[0].productsDetails[0].namedetail.length >
                      0 &&
                    this?.props?.data[0]?.productsDetails[0]?.namedetail[1] &&
                    this?.props?.data[0]?.productsDetails[0]?.namedetail[1]
                      ?.details && (
                      <Grid
                        item
                        style={{
                          marginLeft: 18,
                        }}
                      >
                        <Box display="flex" alignItems="center">
                          <Box>
                            <Avatar alt="NAC">
                              <img
                                src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+1019.svg"
                                alt=" Metal Purity"
                                height="100%"
                                width="100%"
                              />
                            </Avatar>
                          </Box>
                          <Box
                            style={{
                              fontSize: 12,
                              color: "gray",
                              paddingLeft: 15,
                              margin: "auto",
                            }}
                          >
                            <Typography className={classes.productmaterial}>
                              Metal Purity
                            </Typography>
                            <Typography className={classes.productmaterial}>
                              {this?.props?.data[0]?.productsDetails[0]
                                ?.namedetail[1]?.details ?? ""}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    )}
                  {this?.props?.data[0]?.dimondweight !== null ? (
                    <Grid
                      item
                      style={{
                        marginLeft: 18,
                      }}
                    >
                      <Box display="flex" alignItems="center">
                        <Box>
                          <Avatar alt="NAC">
                            <img
                              src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+1022.svg"
                              alt="Diamond Weight"
                              height="100%"
                              width="100%"
                            />
                          </Avatar>
                        </Box>
                        <Box
                          style={{
                            fontSize: 12,
                            color: "gray",
                            paddingLeft: 15,
                            margin: "auto",
                          }}
                        >
                          <Typography className={classes.productmaterial}>
                            Diamond Weight
                          </Typography>
                          <Typography className={classes.productmaterial}>
                            {this?.props?.data[0]?.dimondweight ?? ""}
                            &nbsp;Carat
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    {this?.props?.data[0]?.certificate && (
                      <div>
                        <p
                          style={{
                            color: "gray",
                            paddingBottom: "8px",
                            borderBotom: "1px solid gray",
                          }}
                        >
                          CERTIFICATES
                        </p>
                        <img
                          src={this?.props?.data[0]?.certificate}
                          alt="images"
                        />
                      </div>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            style={{
              maxWidth: "1600px",
              margin: "auto",
              paddingLeft: "5%",
              paddingRight: "5%",
              marginTop: "24px",
            }}
          >
            {
              <>
                <Hidden smDown>
                  <div style={{ paddingTop: 8, width: "100%" }}>
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "gray",
                        marginLeft: 30,
                        paddingBottom: 10,
                        fontSize: "16px",
                      }}
                    >
                      SIMILAR PRODUCTS
                    </div>
                    <Slideshow
                      // sliderRef={this.slider}
                      class="subslider-carousel"
                      dataCarousel={dataCarouselcollections}
                    >
                      {this?.props?.data[0]?.fadeImageSublist.map((val) => {
                        return (
                          <ImgMediaCard
                            data={val}
                            similarProducts={true}
                            cardSize="auto"
                            hoverText={true}
                          />
                        );
                      })}
                    </Slideshow>
                  </div>
                </Hidden>
              </>
            }
          </Grid>
          <div
            style={{ background: "whitesmoke" }}
            className="pricing-product-media"
            style={{ maxWidth: "1600px", margin: "auto" }}
          >
            <Grid container spacing={12}>
              <Grid item xs={12} style={{ paddingLeft: "2%" }}>
                <br />
                <ProductDetails data={this?.props?.data} />
              </Grid>

              <br />
            </Grid>
          </div>
          <div
            style={{
              paddingLeft: "6%",
              paddingRight: "6%",
              marginTop: "12px",
            }}
          >
            <CustomerReviews rating={this?.props?.rating} />
          </div>

          <div
            style={{
              maxWidth: "1600px",
              margin: "auto",
              paddingLeft: "6%",
              paddingRight: "6%",
              marginTop: "24px",
            }}
          >
            <RatingForm
              data={this?.props?.data}
              clear_rating={this.state.clear}
              clear_rating_onchange={clear_rating}
            />
          </div>
          <Grid
            container
            item
            xs={12}
            style={{
              maxWidth: "1600px",
              margin: "auto",
              paddingLeft: "5%",
              paddingRight: "5%",
              marginTop: "24px",
            }}
          >
            {
              <>
                <Hidden smDown>
                  <div style={{ paddingTop: 8, width: "100%" }}>
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "gray",
                        marginLeft: 30,
                        fontSize: "16px",
                        paddingBottom: 10,
                      }}
                    >
                      SHOP OTHER CATEGORIES
                    </div>
                    <Slideshow
                      // sliderRef={this.slider}
                      class="subslider-carousel"
                      dataCarousel={dataCarouselcollections}
                    >
                      {this?.state?.otherCategeriesdata.map((val) => {
                        return (
                          <ImgMediaCard
                            shopothercategories={true}
                            data={val}
                            cardSize="auto"
                            hoverText={true}
                          />
                        );
                      })}
                    </Slideshow>
                  </div>
                </Hidden>
              </>
            }
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Hidden>

        <Hidden mdUp>
          <Header wishlist={this?.props?.wishlistdata} pdpage={true} />
          <Grid item xs={12}>
            <PriceBuynow
              data={this?.props?.data}
              wishlist={this?.props?.wishlistdata}
            />
          </Grid>
          <Grid item xs={12} className={classes.similarProducts}>
            <Container style={{ padding: "0px 26px" }}>
              <div
                style={{
                  fontWeight: "bold",
                  color: "gray",
                  marginLeft: 15,
                  marginTop: 35,
                  fontSize: "14px",
                }}
              >
                SIMILAR PRODUCTS
              </div>
              <div style={{ width: "100%" }}>
                <Slideshow
                  // sliderRef={this.slider}
                  class="subslider-carousel"
                  dataCarousel={dataCarouselcollectionsSm}
                >
                  {this.props?.data[0]?.fadeImageSublist?.map((val) => {
                    return (
                      <ImgMediaCard
                        data={val}
                        image={val.img}
                        hoverText={true}
                        similarProducts={true}
                      />
                    );
                  })}
                </Slideshow>
                <Grid item xs={12} sm={12} md={12} style={{ marginTop: 30 }}>
                  <PaperSheetProduct />
                </Grid>
              </div>
            </Container>
          </Grid>

          <Grid item xs={12}>
            <ProductDetails
              data={this?.props?.data}
              wishlist={this?.props?.wishlistdata}
            />
          </Grid>
          <Grid item xs={12}>
            {/* {this.props.data[0].certificate && (
              <div
                style={{
                  margin: "auto",
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  marginTop: "25px",
                }}
              >
                <p
                  style={{
                    color: "gray",
                    padding: "8px",
                    fontSize: "12px",
                    borderBottom: "1px solid gray",
                  }}
                >
                  CERTIFICATES
                </p>
              </div>
            )} */}
            <PriceCertification data={this.props?.data} />
          </Grid>
          <Grid item xs={12}>
            <div
              style={{
                margin: "auto",
                paddingLeft: "5%",
                paddingRight: "5%",
                marginTop: "25px",
              }}
            >
              <CustomerReviews rating={this?.props?.rating} />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <RatingForm
                data={this.props?.data}
                clear_rating={this.state.clear}
                clear_rating_onchange={clear_rating}
              />
            </Container>
          </Grid>

          <Grid item xs={12} className={classes.similarProducts}>
            <Container style={{ padding: "0px 26px" }}>
              <div
                style={{
                  fontWeight: "bold",
                  color: "gray",
                  marginLeft: 15,
                  marginTop: 35,
                  fontSize: "14px",
                }}
              >
                SHOP OTHER CATEGORIES
              </div>
              <div style={{ paddingTop: 8, width: "100%" }}>
                <Slideshow
                  // sliderRef={this.slider}
                  class="subslider-carousel"
                  dataCarousel={dataCarouselcollectionsSm}
                >
                  {this?.state?.otherCategeriesdata.map((val) => {
                    return (
                      <ImgMediaCard
                        shopothercategories={true}
                        data={val}
                        cardSize="auto"
                        hoverText={true}
                      />
                    );
                  })}
                </Slideshow>
              </div>
            </Container>
          </Grid>
          <Grid item style={{ paddingBottom: "50px" }}>
            <Footer />
          </Grid>
        </Hidden>
        <NeedHelp />
      </div>
    );
  }
}

const Components = (props) => {
  let {
    CartCtx: { allorderdata, wishlistdata, setratingcountsclear },
  } = React.useContext(CartContext);

  const { Globalctx } = React.useContext(GlobalContext);
  const {
    ProductDetailCtx: { data, loading, error, likedatas, viewedddatas, rating },
  } = React.useContext(ProductDetailContext);
  const datas = data;

  let mapped = datas;

  if (!loading && !error) {
    mapped = productDetails(
      datas,
      likedatas,
      viewedddatas,
      rating,
      Globalctx.tabsChange
    );
  }
  if (Object.keys(mapped).length === 0) {
    return (
      <div className="overall-loader">
        <div id="loading"></div>
      </div>
    );
  } else {
    return (
      <ProductDetail
        {...props}
        setratingcountsclear={setratingcountsclear}
        data={mapped}
        rating={rating}
        allorderdata={allorderdata}
        wishlistdata={wishlistdata}
      />
    );
  }
};

export default withRouter(withStyles(styles)(Components));
