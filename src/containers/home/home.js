import { Container, Grid } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { withStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Skeleton from "@material-ui/lab/Skeleton";
import Aos from "aos";
import "aos/dist/aos.css";
import Slideshow from "components/Carousel/carosul";
import Footer from "components/Footer/Footer";
import GadgetsNac from "components/Gagetstylori/GadgetsNac";
import NeedHelp from "components/needHelp";
import { ImgMediaCard } from "components/ProductCard/Card";
import Header from "components/SilverComponents/Header";
import TimelineComp from "components/timeline/timelineComp";
import { homeNac } from "mappers/dummydata/homeNac";
import React from "react";
import Testimonial from "../../components/testimonial/testimonial";
import { API_URL } from "../../config";
import { CARTALL, WISHLIST } from "../../queries/collection";
import { AllHOMEQUERY } from "../../queries/home";
import Card from "../../components/timeline/CardGrid";
import { AdvancedGridList } from "./collectionsGrid";
import Homenote from "../../components/timeline/Homenote";
import "./index.css";
import InstagramFeed from "./InstagramFeed";
import { Title } from "./titles";
const styles = (theme) => ({
  root: {
    overflow: "hidden",
  },

  preButton: {
    opacity: "1!important",

    borderLeft: 0,
    background: "none",
    left: 0,

    fontSize: "20px",
    color: "#fff",
    textAlign: "center",
    position: "absolute",
    zIndex: 9,
    "& svg": {
      fontSize: "3rem",
    },

    [theme.breakpoints.only("xs")]: {
      top: "160px",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.up(330)]: {
      top: "175px !important",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.up(385)]: {
      top: "190px !important",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.up(438)]: {
      top: "200px !important",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.up(495)]: {
      top: "210px !important",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.up(723)]: {
      top: "258px !important",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.up(840)]: {
      top: "300px !important",
      height: "30px",
      width: "28px",
    },
  },
  nextButton: {
    opacity: "1!important",

    "& svg": {
      fontSize: "3rem",
    },
    borderRight: 0,
    position: "absolute",
    zIndex: 9,
    float: "right",
    right: 0,
    top: "55%",
    [theme.breakpoints.only("xs")]: {
      top: "160px",
      height: "30px",
      width: "28px",
      right: 15,
    },
    [theme.breakpoints.up(330)]: {
      top: "175px !important",
      height: "30px",
      width: "28px",
      right: 15,
    },
    [theme.breakpoints.up(385)]: {
      top: "190px !important",
      height: "30px",
      width: "28px",
      right: 15,
    },
    [theme.breakpoints.up(438)]: {
      top: "200px !important",
      height: "30px",
      width: "28px",
      right: 15,
    },
    [theme.breakpoints.up(495)]: {
      top: "210px !important",
      height: "30px",
      width: "28px",
      right: 15,
    },
    [theme.breakpoints.up(723)]: {
      top: "258px !important",
      height: "30px",
      width: "28px",
      right: 15,
    },
    [theme.breakpoints.up(840)]: {
      top: "300px !important",
      height: "30px",
      width: "28px",
      right: 20,
    },

    [theme.breakpoints.up("lg")]: {
      top: "397px !important",
    },
    [theme.breakpoints.only("xl")]: {
      top: "653px !important",
    },
  },

  mainCarosel: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.only("xs")]: {
      height: "230px",
    },
  },
  testimonial: {
    [theme.breakpoints.down("sm")]: {
      boxShadow: "4px 4px 4px #bebfbf",
    },
  },
  mainImg: {
    position: "block",
    width: "100%",
  },
  mainImgCarosel: {
    width: "100%",
  },
  mainImgContainer: {
    position: "relative",
    width: "100%",
  },
  width: {
    width: "100%",
  },
  collectionSection: {
    fill: `${theme.palette.secondary.main} !important`,
  },
  timelinegrid: {
    margin: "20px 0",
  },
  titilenews: {
    textAlign: "center",
    color: theme.palette.gold.main,
    textDecoration: "underline",
    paddingBottom: 20,
    fontWeight: "bold",
    fontSize: "1.4rem",
    "-webkit-text-underline-position": "under",
    "-ms-text-underline-position": "below",
    "text-underline-position": "under",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  minHeighttimerange: {
    paddingBottom: "0 !important",
    minHeight: "0 !important",
  },
  gridPadding: {
    paddingTop: "52px",
    [theme.breakpoints.down("lg")]: {
      paddingTop: "20px",
    },
  },
  contentPadding: {
    paddingTop: "20px",
    [theme.breakpoints.down("lg")]: {
      paddingTop: "0px",
    },
  },
  timelineItemGrid: {
    overflowX: "hidden",
    overflowY: "auto",
    [theme.breakpoints.up("md")]: {
      height: "350px",
    },
    [theme.breakpoints.down("md")]: {
      height: "200px",
    },
  },
});

class HomeComp extends React.Component {
  constructor(props) {
    super(props);

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.slider = React.createRef();
    this.livechat = React.createRef();
    this.state = {
      loading: false,
      count: "",
      imageLoading: false,
      timelineImage:
        "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/1917.webp",
      content:
        "N. Narayana Chetty makes a humble beginning at home: he designs and crafts gold jewellery by hand. What starts as a small group of interested customers, gradually grows into a loyal patronage",
      bannerHome: [],
      featuredProduct: [],
      wishlistdata: [],
      newarrival: [],
      starting: false,
      reviews: [],
      starting: false,
      imageLoading: false,
      whishlistcount: "",
      cartdata: [],
    };
  }

  componentDidMount() {
    //all  api
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
        //set banner
        let bannerDataFull =
          data?.data?.allBanners?.nodes?.sort(
            (a, b) => parseFloat(a.position) - parseFloat(b.position)
          ) ?? [];

        this.setState({ bannerHome: bannerDataFull });
        if (data.data.allBanners.nodes.length > 0) {
          this.setState({ starting: true });
        }
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

        this.setState({ featuredProduct: featureproductDetails });

        //new arrival
        let newarrivaldataresponse = data?.data?.allNewArrivalProducts.nodes;
        let productDetails = newarrivaldataresponse.map((val) => ({
          price:
            val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
              ?.markupPrice ?? " ",

          offerPrice:
            val?.productListByProductId?.transSkuListsByProductId?.nodes[0]
              ?.discountPrice ?? " ",
          title: val?.productListByProductId?.productName ?? " ",
          save: " ",
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

        this.setState({ newarrival: productDetails });
        let reviewresponse = data?.data?.allCustomerReviews.nodes;
        this.setState({ reviews: reviewresponse });
      });
    Aos.init({ duration: 1500 });

    //wishlist
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: WISHLIST,
        variables: {
          userprofileId: localStorage.getItem("user_id"),
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ wishlistdata: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: CARTALL,
        variables: {
          userprofileId: localStorage.getItem("user_id"),
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ cartdata: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  next = () => {
    this.slider.current.slickNext();
  };
  previous = () => {
    this.slider.current.slickPrev();
  };
  imageLoader = () => {
    this.setState({ imageLoading: true });
  };

  render() {
    const { classes } = this.props;
    const dadgetdata = [
      {
        img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Group-1117.webp",
      },
      {
        img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/awardwining.webp",
      },
      {
        img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/internationalship.webp",
      },
      {
        img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/securepayments.webp",
      },
      {
        img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/easyreturns.webp",
      },
      {
        img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/biscertificate.webp",
      },
    ];

    const ArrowLeft = (props) => {
      const { className, style, onClick } = props;
      return (
        <ArrowLeftIcon
          className={`${className} ${classes.collectionSection}`}
          onClick={onClick}
          style={{ ...style, fontSize: "3em" }}
        />
      );
    };
    const ArrowRight = (props) => {
      const { className, style, onClick } = props;
      return (
        <ArrowRightIcon
          className={`${className} ${classes.collectionSection}`}
          onClick={onClick}
          style={{ ...style, fontSize: "3em" }}
        />
      );
    };
    const dataCarouselcollections = {
      arrows: true,
      dots: false,
      autoplay: false,
      infinite: false,
      accessibility: true,
      speed: 4000,

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
      speed: 4000,
      // fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <ArrowLeft />,
      nextArrow: <ArrowRight />,
    };
    const mysettings = {
      arrows: false,
      dots: false,
      autoplay: false,
      infinite: false,
      accessibility: true,
      // speed: 2500,
      // fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <ArrowLeft />,
      nextArrow: <ArrowRight />,
    };

    const tData = [
      {
        time: "1917",
        image:
          "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/1917.webp",
        content:
          "N. Narayana Chetty makes a humble beginning at home: he designs and crafts gold jewellery by hand. What starts as a small group of interested customers, gradually grows into a loyal patronage",
      },
      {
        time: "1927",
        image:
          "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/1927.webp",
        content:
          "His son, N. Anantham Chetty takes the first step of opening a small shop at Parry's Corner, Chennai",
      },
      {
        time: "1973",
        image:
          "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/1973.webp",
        content:
          "Shri. N. Anjaneyulu Chetty of the third generation who has been working with his father for over 2 decades takes the next big step. The brand NAC jewellers is born",
      },
      {
        time: "1979",
        image:
          "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/1979.webp",
        content:
          "Shri N. Anantha Padmanabhan, the fourth generation entrepreneur transforms NAC Jewellers from a single store brand to a multi store brand",
      },
      {
        time: "1990",
        image:
          "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/1990.webp",
        content:
          "Mylapore's jewel: NAC'S humble store near the Kapaleeswarar temple opens doors",
      },
      {
        time: "2007",
        image:
          "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2007.webp",
        content:
          "As the patronage grows, NAC Jewellers' plush three-floor showroom in Mylapore gradually grows into a preferred jewellery destination",
      },
      {
        time: "2010",
        image:
          "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2010.webp",
        content:
          "Silvermine is launched. An exclusive retail outlet for silver articles and gifts",
      },
      {
        time: "2012",
        image:
          "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2012.webp",
        content:
          "N. Anandha Ramanujam, the fifth generation entrepreneur and son of Shri Anantha Padmanabhan joins the business and begins his stint with the launch of NAC Young Ones",
      },
      {
        time: "2013",
        image:
          "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2013.webp",
        content: "NAC Jewellers makes an iconic landmark at TNagar",
      },
      {
        time: "2015",
        image:
          "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2015_01.webp",
        content:
          "NAC Jewellers launches STYLORI, an exclusively online store for everyday jewellery, crafted for the modern Indian woman",
      },
      {
        time: "2015",
        image:
          "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2015_02.webp",
        content:
          "NAC Jewellers makes a city-wide impact with the simultaneous launch of three showrooms in Perambur, Velachery and Kanchipuram on 2nd November 2015",
      },
      {
        time: "2015",
        image:
          "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2015_03.webp",
        content:
          "NAC Jewellers lightens up the Oscars as Hollywood actress Chloe Grace Moretz wears an exquisite piece from the Fabula Collection",
      },
      {
        time: "2016",
        image:
          "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2016.webp",
        content:
          "Launch of the first store outside Tamil Nadu in Vijayawada, Andhra Pradesh",
      },
      {
        time: "2017",
        image:
          "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2017.webp",
        content:
          "Knack Studios is Launched. As South India's leading postproduction studio, Knack Studios has worked with leading filmmakers across industries",
      },
      {
        time: "2017",
        image:
          "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2017_02.webp",
        content:
          "NAC Jewellers spreads their wings further with the launch of their Anna Nagar showroom",
      },
      {
        time: "2019",
        image:
          "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2019.webp",
        content:
          "N. Arjun Varadaraj, son of Managing Director Shri Anantha Padmanabhan, comes aboard as Director at NAC Jewellers",
      },
      {
        time: "2020",
        image:
          "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/2020.webp",
        content:
          "NAC Jewellers launches Stylori Silver, a curated range of exclusive silver jewellery, featuring classical and contemporary styles",
      },
    ];
   

    return (
      <div className={classes.root}>
        <Grid container>
          <Header
            wishlist={this.state.wishlistdata}
            cartcount={this.state.cartdata}
          />
          {this.state.starting ? (
            <Grid item xs={12} style={{ backgroundColor: "#ebebeb" }}>
              {homeNac.carouselTop.setting.arrowsImg && (
                <Grid container>
                  <Grid
                    item
                    onClick={this.previous}
                    className={classes.preButton}
                  >
                    <ArrowLeftIcon />
                  </Grid>
                  <Grid item onClick={this.next} className={classes.nextButton}>
                    <ArrowRightIcon />
                  </Grid>
                </Grid>
              )}
              {/* </Hidden> */}
              <Slideshow
                sliderRef={this.slider}
                dataCarousel={homeNac.carouselTop.setting}
              >
                {this.state.bannerHome.map((val, index) => (
                  <>
                    <Hidden smDown>
                      <Grid
                        container
                        key={index}
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="150"
                        data-aos-offset="0"
                      >
                        <a href={val.url} style={{ width: "100%" }}>
                          <img
                            alt="banner"
                            loading="lazy"
                            src={val.web}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </a>
                      </Grid>
                    </Hidden>
                    <Hidden mdUp>
                      <Grid container key={index}>
                        <a href={val.url}>
                          <img
                            src={val.mobile}
                            style={{ width: "100%", height: "100%" }}
                            className={`image-${this.state.imageLoading ? "visible" : "hidden"
                              }`}
                            alt="banner"
                            onLoad={this.imageLoader}
                            loading="lazy"
                          />
                        </a>
                      </Grid>
                    </Hidden>
                  </>
                ))}
              </Slideshow>
            </Grid>
          ) : (
            <Skeleton
              variant="rect"
              style={{ width: "100%" }}
              className="skeletonHeight"
              animation="wave"
            />
          )}

          <Grid
            container
            item
            xs={12}
            justify="center"
            style={{ margin: "35px 0" }}
          >
            <Grid item xs={8} sm={8} md={7} lg={7} xl={7}>
              <GadgetsNac dadgetdata={dadgetdata} />
            </Grid>
          </Grid>
          {/* <faqsHelp/> */}
          <Container maxWidth="xl">
            <Hidden mdUp>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  className={classes.contentPadding}
                  data-aos="fade-left"
                >
                  <Title title="New Arrival" />
                </Grid>
                <Grid item xs={12} data-aos="fade-left">
                  {
                    <>
                      <Hidden smDown>
                        <Container maxWidth={"lg"} style={{ paddingTop: 4 }}>
                          <Slideshow
                            class="subslider-carousel"
                            dataCarousel={dataCarouselcollections}
                          >
                            {this.state.newarrival.map((val) => {
                              return (
                                <ImgMediaCard data={val} cardSize="auto" />
                              );
                            })}
                          </Slideshow>
                        </Container>
                      </Hidden>
                      <Hidden mdUp>
                        <Container maxWidth={"lg"}>
                          <Slideshow
                            // sliderRef={this.slider}
                            class="subslider-carousel"
                            dataCarousel={dataCarouselcollectionsSm}
                          >
                            {this.state.newarrival.map((val) => {
                              return (
                                <ImgMediaCard
                                  data={val}
                                  cardSize="auto"
                                  hoverText={true}
                                />
                              );
                            })}
                          </Slideshow>
                        </Container>
                      </Hidden>
                    </>
                  }
                </Grid>
              </Grid>
            </Hidden>
          </Container>

          <Container>
            <Grid
              item
              xs={12}
              className={classes.gridPadding}
              style={{ paddingTop: "20px" }}
              data-aos="fade-left"
            >
              <Title title="Collections" />
            </Grid>
            <Grid item xs={12} style={{ paddingTop: 8 }} data-aos="fade-left">
              <AdvancedGridList />
            </Grid>

            <Grid container>
              <Grid
                item
                xs={12}
                className={classes.gridPadding}
                data-aos="fade-left"
              >
                <br />
                <Title
                  title="Featured"
                  style={{ marginBottom: "0px !important" }}
                />
              </Grid>
              <Grid item xs={12} data-aos="fade-left">
                <>
                  <Hidden smDown>
                    <div>
                      <Slideshow
                        class="subslider-carousel"
                        dataCarousel={dataCarouselcollections}
                      >
                        {this.state.featuredProduct.map((val) => {
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
                  <Hidden mdUp>
                    <Container maxWidth={"lg"}>
                      <Slideshow
                        // sliderRef={this.slider}
                        class="subslider-carousel"
                        dataCarousel={dataCarouselcollectionsSm}
                      >
                        {this.state.featuredProduct.map((val) => {
                          return (
                            <ImgMediaCard
                              data={val}
                              cardSize="auto"
                              hoverText={true}
                            />
                          );
                        })}
                      </Slideshow>
                    </Container>
                  </Hidden>
                </>
              </Grid>
            </Grid>


            <Grid container>
              <Grid item xs={12}>
                <Hidden mdUp>
                  <Grid
                    item
                    xs={12}
                    className={classes.gridPadding}
                    data-aos="fade-left"
                  >
                    <br />
                    <Title title="ABOUT US" />

                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
            <Hidden smDown>
              <Grid
                item
                xs={12}
                className={classes.gridPadding}
                data-aos="fade-right"
              >
                <br />
                <Title title="ABOUT US" />
                <TimelineComp
                  initialtimelineImage={this.state.timelineImage}
                  initialcontent={this.state.content}
                  timelineData={tData}
                />
              </Grid>
            </Hidden>
            <div data-aos="fade-left">
              <Grid
                item
                xs={12}
                className={classes.gridPadding}
                style={{ margin: "40px 0px" }}
              >
                <Grid container>
                  {[
                    { title: "NEWS" },
                    { title: "PROMOTION" },
                    { title: "VIDEOS" },
                  ].map((val) => {
                    return (
                      <Grid item xs={4} style={{ paddingLeft: 5 }}>
                        <div className={classes.titilenews}>{val.title}</div>
                      </Grid>
                    );
                  })}
                </Grid>

                <Grid container style={{ boxShadow: "6px 7px 6px #bebfbf" }}>
                  {[
                    {
                      img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Group-177%402x.webp",
                    },
                    {
                      img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Group-180%402x.webp",
                    },
                    {
                      img: "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Group-181%402x.webp",
                    },
                  ].map((val) => {
                    return (
                      <Grid item xs={4} style={{ paddingLeft: 5 }}>
                        <Slideshow
                          class="subslider-carousel"
                          dataCarousel={mysettings}
                        >
                          <img
                            src={val.img}
                            alt="NAC"
                            height="100%"
                            loading="lazy"
                          />
                        </Slideshow>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </div>
          </Container>
          <Container maxWidth="xl">
            <Grid container>
              <Hidden smDown>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  xl={4}
                  className={classes.photo}
                  data-aos="fade-left"
                  style={{
                    height: "475px",
                    overflow: "auto",
                    borderRadius: "3px",
                    border: "1px solid #D9D9D9",
                    overflow: "hidden",
                  }}
                >
                  <InstagramFeed />
                  <br />
                  <br />
                </Grid>
              </Hidden>
              <Grid
                item
                xs={12}
                sm={12}
                md={8}
                lg={8}
                xl={8}
                data-aos="fade-left"
              >
                <Testimonial customerreview={this.state.reviews} />
                <br />
                <br />
              </Grid>
            </Grid>
            <Hidden mdUp>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                className={classes.photo}
                data-aos="fade-left"
                style={{
                  overflow: "auto",
                  marginTop: "20px",
                  border: "1px solid #D9D9D9",
                  boxShadow: "4px 4px 4px #bebfbf",
                }}
              >
                <center>
                  <InstagramFeed />
                </center>
              </Grid>
              <br />
              <br />
            </Hidden>
          </Container>

          <NeedHelp />

          <Footer />
        </Grid>
      </div >
    );
  }
}

export default withStyles(styles)(HomeComp);
