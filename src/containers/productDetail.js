import { Avatar, Container, Grid, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
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
const styles = (theme) => ({
  collectionSection: {
    // "& svg":{
    fill: `${theme.palette.secondary.main} !important`,

    // }
  },
  // '& .slick-prev':{
  //   left:'0px !important'},
  // '& .slick-next':{
  //   right:'0px !important'},
  spanIcon: {
    width: "6px",
    height: "6px",
    border: "1px solid gray",
    borderRadius: "50%",
    padding: "2px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "8px",
    marginLeft: "5px",
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
      paddingBottom: "14px !important",
      marginBottom: "12px !important",
    },
  },
});
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clear: "",
    };
  }

  componentDidMount() {
    console.log(this.props.data[0].sellingPrice);
    ReactPixel.init("1464338023867789", {}, { debug: true, autoConfig: false });
    ReactPixel.track("PageView");
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
    // alert(JSON.stringify(this.props.data))
    // alert(JSON.stringify(this.props.data))

    const { classes } = this.props;

    const dummyData = [
      {
        totalCount: 2788,
        price: 31157.05,
        offerPrice: 23367.79,
        title: "Elegant Drops Diamond Earrings",
        save: "5999.9",
        image: {
          placeImage: {
            img: "https://assets.stylori.com/product/SE0016/1000X1000/SE0016-1Y.webp",
          },
          hoverImage: {
            img: "https://assets.stylori.com/product/SE0016/1000X1000/HOVER-SE0016-2Y.webp",
          },
        },
        productId: "SE0016",
        diamondType: "SIIJ",
        purity: "18K",
        skuSize: null,
        productType: "Earrings",
        skuId: "SE0016-18110000",
        oneDayShipping: true,
        imageResolution: {
          img_res: 250,
          url_1000x1000: "product/SE0016/1000X1000/HOVER-SE0016-2Y.webp",
        },
        skuUrl: "jewellery/earrings/diamond/Metis-Studs?skuid=22969",
        skuID: "22969",
        discount: 25,
      },
      {
        totalCount: 2788,
        price: 77940.39,
        offerPrice: 58455.29,
        title: "Jazzy Gypsy Diamond Hoop Earrings",
        save: "5999.9",
        image: {
          placeImage: {
            img: "https://assets.stylori.com/product/SE0015/1000X1000/SE0015-1YW.webp",
          },
          hoverImage: {
            img: "https://assets.stylori.com/product/SE0015/1000X1000/HOVER-SE0015-2YW.webp",
          },
        },
        productId: "SE0015",
        diamondType: "SIIJ",
        purity: "18K",
        skuSize: null,
        productType: "Earrings",
        skuId: "SE0015-18410000",
        oneDayShipping: false,
        imageResolution: {
          img_res: 250,
          url_1000x1000: "product/SE0015/1000X1000/HOVER-SE0015-2YW.webp",
        },
        skuUrl: "jewellery/earrings/diamond/Nuages-Hoops?skuid=22975",
        skuID: "22975",
        discount: 25,
      },
      {
        totalCount: 2788,
        price: 86653.95,
        offerPrice: 64990,
        title: "Gorgeous Solitaire Diamond Marquise Earrings",
        save: "5999.9",
        image: {
          placeImage: {
            img: "https://assets.stylori.com/product/SE0024/1000X1000/SE0024-1Y.webp",
          },
          hoverImage: {
            img: "https://assets.stylori.com/product/SE0024/1000X1000/HOVER-SE0024-2Y.webp",
          },
        },
        productId: "SE0024",
        diamondType: "SIIJ",
        purity: "18K",
        skuSize: null,
        productType: "Earrings",
        skuId: "SE0024-18110000",
        oneDayShipping: false,
        imageResolution: {
          img_res: 250,
          url_1000x1000: "product/SE0024/1000X1000/HOVER-SE0024-2Y.webp",
        },
        skuUrl: "jewellery/bouquetoflove/Navis-Earring?skuid=21569",
        skuID: "21569",
        discount: 25,
      },
      {
        totalCount: 2788,
        price: 86653.95,
        offerPrice: 64990.46,
        title: "Gorgeous Solitaire Diamond Marquise Earrings",
        save: "5999.9",
        image: {
          placeImage: {
            img: "https://assets.stylori.com/product/SE0024/1000X1000/SE0024-1Y.webp",
          },
          hoverImage: {
            img: "https://assets.stylori.com/product/SE0024/1000X1000/HOVER-SE0024-2Y.webp",
          },
        },
        productId: "SE0024",
        diamondType: "SIIJ",
        purity: "18K",
        skuSize: null,
        productType: "Earrings",
        skuId: "SE0024-18110000",
        oneDayShipping: false,
        imageResolution: {
          img_res: 250,
          url_1000x1000: "product/SE0024/1000X1000/HOVER-SE0024-2Y.webp",
        },
        skuUrl: "jewellery/bouquetoflove/Navis-Earring?skuid=21569",
        skuID: "21569",
        discount: 25,
      },
      {
        totalCount: 2788,
        price: 86653.95,
        offerPrice: 64990.46,
        title: "Gorgeous Solitaire Diamond Marquise Earrings",
        save: "5999.9",
        image: {
          placeImage: {
            img: "https://assets.stylori.com/product/SE0024/1000X1000/SE0024-1Y.webp",
          },
          hoverImage: {
            img: "https://assets.stylori.com/product/SE0024/1000X1000/HOVER-SE0024-2Y.webp",
          },
        },
        productId: "SE0024",
        diamondType: "SIIJ",
        purity: "18K",
        skuSize: null,
        productType: "Earrings",
        skuId: "SE0024-18110000",
        oneDayShipping: false,
        imageResolution: {
          img_res: 250,
          url_1000x1000: "product/SE0024/1000X1000/HOVER-SE0024-2Y.webp",
        },
        skuUrl: "jewellery/bouquetoflove/Navis-Earring?skuid=21569",
        skuID: "21569",
        discount: 25,
      },
      {
        totalCount: 2788,
        price: 86653.95,
        offerPrice: 64990.46,
        title: "Gorgeous Solitaire Diamond Marquise Earrings",
        save: "5999.9",
        image: {
          placeImage: {
            img: "https://assets.stylori.com/product/SE0024/1000X1000/SE0024-1Y.webp",
          },
          hoverImage: {
            img: "https://assets.stylori.com/product/SE0024/1000X1000/HOVER-SE0024-2Y.webp",
          },
        },
        productId: "SE0024",
        diamondType: "SIIJ",
        purity: "18K",
        skuSize: null,
        productType: "Earrings",
        skuId: "SE0024-18110000",
        oneDayShipping: false,
        imageResolution: {
          img_res: 250,
          url_1000x1000: "product/SE0024/1000X1000/HOVER-SE0024-2Y.webp",
        },
        skuUrl: "jewellery/bouquetoflove/Navis-Earring?skuid=21569",
        skuID: "21569",
        discount: 25,
      },
      {
        totalCount: 2788,
        price: 40798.7,
        offerPrice: 30599.03,
        title: "Striking Diamond Shape Earrings",
        save: "5999.9",
        image: {
          placeImage: {
            img: "https://assets.stylori.com/product/SE0031/1000X1000/SE0031-1Y.webp",
          },
          hoverImage: {
            img: "https://assets.stylori.com/product/SE0031/1000X1000/HOVER-SE0031-2Y.webp",
          },
        },
        productId: "SE0031",
        diamondType: "SIIJ",
        purity: "18K",
        skuSize: null,
        productType: "Earrings",
        skuId: "SE0031-18110000",
        oneDayShipping: false,
        imageResolution: {
          img_res: 250,
          url_1000x1000: "product/SE0031/1000X1000/HOVER-SE0031-2Y.webp",
        },
        skuUrl: "jewellery/earrings/diamond/Starbust-Inn?skuid=22356",
        skuID: "22356",
        discount: 25,
      },
    ];

    var loc = this.props.location.pathname;
    var path = loc.split("/");
    var data_json = [
      { title: "home", url: "/" },
      { title: path[2], url: this.renderUrl() },
      {
        title:
          this.props.data && this.props.data[0] && this.props.data[0].title,
      },
    ];
    // alert(JSON.stringify(this.props.wishlistdata))
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
          style={{ ...style, fill: "theme.palette.secondary.main !important" }}
        />
      );
    };
    const ArrowRight = (props) => {
      const { className, style, onClick } = props;
      return (
        <ArrowRightIcon
          className={`${className} ${classes.collectionSection}`}
          onClick={onClick}
          style={{ ...style, fill: "theme.palette.secondary.main !important" }}
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

    // alert(JSON.stringify(this.props.setratingcountsclear))
    // let diamondWeight = this.props.data[0].productsDetails[1].namedetail[3].details ?? "";

    return (
      <div style={{ overflow: "hidden" }}>
        <div>
          <MetaTags>
            {this.props.data &&
            this.props.data[0] &&
            this.props.data[0].length > 0 ? (
              <>
                <title>{this.props.data[0].title}</title>
                <meta name="description" content={this.props.data[0].dis} />
                <meta
                  name="keywords"
                  content={this.props.data[0].productsPendants[0].name}
                />
                <meta
                  property="og:title"
                  id="fb-title"
                  content={this.props.data[0].title}
                />
                <meta
                  property="og:description"
                  content={this.props.data[0].dis}
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
                  content={this.props.data[0].fadeImages}
                />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@StyloriLove" />
                <meta
                  name="twitter:title"
                  id="twitter-title"
                  content={this.props.data[0].title}
                />
                <meta
                  name="twitter:description"
                  content={this.props.data[0].dis}
                />
                <meta
                  name="twitter:image"
                  id="twitter_imageUrl"
                  content={this.props.data[0].fadeImages}
                />
              </>
            ) : (
              ""
            )}
          </MetaTags>
        </div>

        <Hidden smDown>
          <Header wishlist={this.props.wishlistdata} />

          <Grid
            className="pricing-imgzom-media"
            style={{
              maxWidth: "1600px",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid xs={11} container spacing={12} style={{ marginTop: 70 }}>
              <Grid item xs={6}>
                <ProductImageZoom data={this.props.data} />
              </Grid>
              <Grid item xs={6}>
                <div className={classes.priceNowOverallBox}>
                  <ProductPrice
                    data={this.props.data}
                    wishlist={this.props.wishlistdata}
                  />
                </div>
                <div className={classes.priceNowOverallBox}>
                  <PriceBuynow data={this.props.data} />
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
                    <span>Model No:</span>
                  </Grid>
                  <Grid item>
                    <span>
                      {" "}
                      &nbsp;{this?.props?.data[0]?.skuId ?? " "} &nbsp; &nbsp;{" "}
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
                        marginBottom: 8,
                      }}
                    >
                      Product Information:{" "}
                      <span className={classes.spanIcon}>i</span>
                    </span>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  className={classes.productInformationGrid}
                >
                  {this.props &&
                    this.props.data &&
                    this.props.data.length > 0 &&
                    this.props.data[0] &&
                    this.props.data[0].productsDetails.length > 0 &&
                    this.props.data[0].productsDetails[0] &&
                    this.props.data[0].productsDetails[0].namedetail.length >
                      0 &&
                    this.props.data[0].productsDetails[0].namedetail[2] &&
                    this.props.data[0].productsDetails[0].namedetail[2]
                      .details && (
                      <Grid
                        container
                        item
                        xs={4}
                        sm={3}
                        style={{ paddingTop: "8px" }}
                      >
                        <Grid container item xs={3}>
                          <Avatar alt="NAC">
                            <img
                              src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+1015.svg"
                              alt="matel weight"
                              height="100%"
                              width="100%"
                            />
                          </Avatar>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={9}
                          style={{
                            fontSize: 12,
                            color: "gray",
                            paddingLeft: 15,
                            margin: "auto",
                          }}
                        >
                          <Grid itex xs={12}>
                            Metal Weight
                          </Grid>
                          <Grid itex xs={12}>
                            {this.props.data[0].productsDetails[0].namedetail[2]
                              .details ?? ""}
                          </Grid>
                        </Grid>
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
                    this.props.data[0].productsDetails[0].namedetail[1] &&
                    this.props.data[0].productsDetails[0].namedetail[1]
                      .details && (
                      <Grid container item xs={4} style={{ paddingTop: "8px" }}>
                        <Grid container item xs={3}>
                          <Avatar alt="NAC">
                            <img
                              src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+1019.svg"
                              alt=" Metal Purity"
                              height="100%"
                              width="100%"
                            />
                          </Avatar>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={9}
                          style={{
                            fontSize: 12,
                            color: "gray",
                            paddingLeft: 15,
                            margin: "auto",
                          }}
                        >
                          <Grid itex xs={12}>
                            Metal Purity
                          </Grid>
                          <Grid itex xs={12}>
                            {this.props.data[0].productsDetails[0].namedetail[1]
                              .details ?? ""}
                            {/* 22K Yellow Gold */}
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                  {this.props &&
                    this.props.data &&
                    this.props.data.length > 0 &&
                    this.props.data[0] &&
                    this.props.data[0].productsDetails.length > 0 &&
                    this.props.data[0].productsDetails[1] &&
                    this.props.data[0].productsDetails[1].namedetail.length >
                      0 &&
                    this.props.data[0].productsDetails[1].namedetail[3] &&
                    this.props.data[0].productsDetails[1].namedetail[3]
                      .details && (
                      <Grid container item xs={4} style={{ paddingTop: "8px" }}>
                        <Grid container item xs={2}>
                          <Avatar alt="NAC">
                            <img
                              src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/Group+1022.svg"
                              alt="Diamond Weight"
                              height="100%"
                              width="100%"
                            />
                          </Avatar>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={10}
                          style={{
                            fontSize: 12,
                            color: "gray",
                            paddingLeft: 15,
                            margin: "auto",
                          }}
                        >
                          <Grid itex xs={12}>
                            Diamond Weight
                          </Grid>
                          <Grid itex xs={12}>
                            {this.props &&
                            this.props.data &&
                            this.props.data.length > 0 &&
                            this.props.data[0] &&
                            this.props.data[0].productsDetails.length > 0 &&
                            this.props.data[0].productsDetails[1] &&
                            this.props.data[0].productsDetails[1].namedetail
                              .length > 0 &&
                            this.props.data[0].productsDetails[1]
                              .namedetail[3] &&
                            this.props.data[0].productsDetails[1].namedetail[3]
                              .details
                              ? this.props.data[0].productsDetails[1]
                                  .namedetail[3].details
                              : ""}
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                </Grid>
                <div>
                  <p
                    style={{
                      color: "gray",
                      paddingBottom: "8px",
                      borderBottom: "1px solid gray",
                    }}
                  >
                    CERTIFICATES
                  </p>
                </div>
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
                        marginLeft: 15,
                        paddingBottom: 10,
                      }}
                    >
                      SIMILAR PRODUCTS
                    </div>
                    <Slideshow
                      // sliderRef={this.slider}
                      class="subslider-carousel"
                      dataCarousel={dataCarouselcollections}
                    >
                      {this.props?.data[0]?.fadeImageSublist.map((val) => {
                        console.log(this.props?.data);
                        console.log("pppppp");
                        return (
                          <ImgMediaCard
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
          <div
            style={{ background: "whitesmoke" }}
            className="pricing-product-media"
            style={{ maxWidth: "1600px", margin: "auto" }}
          >
            <Grid container spacing={12}>
              <Grid item xs={12}>
                <ProductDetails data={this.props.data} />
              </Grid>

              <br />
            </Grid>
          </div>

          <div
            style={{
              maxWidth: "1600px",
              margin: "auto",
              paddingLeft: "5%",
              paddingRight: "5%",
              marginTop: "12px",
            }}
          >
            <CustomerReviews rating={this.props.rating} />
          </div>

          <div
            style={{
              maxWidth: "1600px",
              margin: "auto",
              paddingLeft: "5%",
              paddingRight: "5%",
              marginTop: "24px",
            }}
          >
            <RatingForm
              data={this.props.data}
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
                        marginLeft: 15,
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
                      {this.props?.data[0]?.fadeImageSublistRecentlyViewed?.map(
                        (val) => {
                          return (
                            <ImgMediaCard
                              data={val}
                              cardSize="auto"
                              hoverText={true}
                            />
                          );
                        }
                      )}
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
          <Header wishlist={this.props.wishlistdata} pdpage={true} />
          <Grid item xs={12}>
            <PriceBuynow
              data={this.props.data}
              wishlist={this.props.wishlistdata}
            />
          </Grid>
          <Grid item xs={12} className={classes.similarProducts}>
            <Container style={{ padding: "0px 26px" }}>
              <div
                style={{
                  fontWeight: "bold",
                  color: "#20205a",
                  marginLeft: 15,
                  marginTop: 35,
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
                    console.log(val);

                    return (
                      <ImgMediaCard
                        data={val}
                        cardSize="auto"
                        hoverText={true}
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
              data={this.props.data}
              wishlist={this.props.wishlistdata}
            />
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
            <PriceCertification data={this.props.data} />
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
              <CustomerReviews rating={this.props.rating} />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <RatingForm
                data={this.props.data}
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
                  color: "#20205a",
                  marginLeft: 15,
                  marginTop: 35,
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
                  {this.props?.data[0]?.fadeImageSublistRecentlyViewed?.map(
                    (val) => {
                      return (
                        <ImgMediaCard
                          data={val}
                          cardSize="auto"
                          hoverText={true}
                        />
                      );
                    }
                  )}
                </Slideshow>
              </div>
            </Container>
          </Grid>
          <Grid item style={{ paddingBottom: "50px" }}>
            <Footer />
          </Grid>
        </Hidden>
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
  if (Object.keys(mapped).length === 0)
    return (
      <div className="overall-loader">
        <div id="loading"></div>
      </div>
    );
  else {
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

// export default     withRouter(connect()(withStyles(styles)(Components)));

export default withRouter(withStyles(styles)(Components));
