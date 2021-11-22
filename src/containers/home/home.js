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
import { homeNac } from "mappers/dummydata/homeNac";
import React from "react";
import Testimonial from "../../components/testimonial/testimonial";
import { API_URL } from "../../config";
import { AllHOMEQUERY } from "../../queries/home";
import Card from "./CardGrid";
import { AdvancedGridList } from "./collectionsGrid";
import Homenote from "./Homenote";
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
    width: "100%",
  },
  collectionSection: {
    // "& svg":{
    fill: `${theme.palette.secondary.main} !important`,
    // }
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
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_page/Group+213%402x.png",
      bannerHome: [],
      featuredProduct: [],
      newarrival: [],
      starting: false,
      reviews: [],
      starting: false,
      imageLoading: false,
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
        let bannerDataFull = data.data.allBanners.nodes;
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
      speed: 2500,

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
        time: "1917s",
        image:
          "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_page/Group+213%402x.png",
      },
      {
        time: "1927s",
        image:
          "https://assets.stylori.com/product/SE0015/1000X1000/SE0015-1YW.webp",
      },
      {
        time: "1973s",
        image:
          "https://assets.stylori.com/product/SE0016/1000X1000/SE0016-1Y.webp",
      },
      {
        time: "1979s",
        image:
          "https://assets.stylori.com/product/SE1270/575X575/HOVER-SE1270-2Y.webp",
      },
      {
        time: "1990s",
        image:
          "https://assets.stylori.com/product/SE0420/575X575/HOVER-SE0420-2Y.webp",
      },
      {
        time: "2007s",
        image:
          "https://assets.stylori.com/product/SE0867/575X575/HOVER-SE0867-2Y.webp",
      },
    ];
    const TimelineEntry = ({ entry: { time, image }, useBar }) => (
      <div
        className="timeline-entry"
        onClick={() => {
          this.setState({ ...this.state, timelineImage: image });
        }}
      >
        <span
          style={{ fontFamily: "notoSerif-regular" }}
          className={`time-range ${
            this.state.timelineImage === image ? "active" : ""
          } ${useBar ? "" : classes.minHeighttimerange}`}
        >
          {time}
        </span>
        <div
          className={`${"timeline-icon-container"} ${
            this.state.timelineImage === image ? "active" : ""
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z" />
          </svg>

          {useBar && <div className="bar" />}
        </div>
      </div>
    );
    const Timeline = ({ day, date, timelineData }) => (
      <>
        <Container>
          <Grid container className={classes.timelinegrid}>
            <Grid item xs={3} sm={3} md={2} lg={2} xl={2}>
              <div className="timeline">
                <div className="timeline-body">
                  {timelineData.map((el, i) => (
                    <TimelineEntry
                      entry={el}
                      key={i}
                      useBar={i === timelineData.length - 1 ? false : true}
                    />
                  ))}
                </div>
              </div>
            </Grid>
            <Grid item xs={9} sm={9} md={10} lg={10} xl={10}>
              <Card data={{ image: this.state.timelineImage }} />
            </Grid>
          </Grid>
        </Container>
        <Grid container>
          <Grid item xs={12}>
            <Hidden mdUp>
              <br />
              {/* <div style={{width:"100%"}}> */}
              <Homenote
                content=" In 1973, Shri N. Anjaneyalu Chetty started a jewellery shop in
            Mylapore hoping to find loyal patrons. What began as a small store
            was soon a flourishing business and NAC became a household name in
            Mylapore!"
              />
            </Hidden>
          </Grid>
        </Grid>
      </>
    );

    return (
      <div className={classes.root}>
        <Grid container>
          <Header />
          {this.state.starting ? (
            <Grid item xs={12} style={{ backgroundColor: "#ebebeb" }}>
              {/* <Stack spacing={1}>
              <Skeleton
                variant="rectangular"
                width={210}
                height={118}
              ></Skeleton>
            </Stack> */}

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
                            className={`image-${
                              this.state.imageLoading ? "visible" : "hidden"
                            }`}
                            onLoad={this.imageLoader}
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
            <Grid item xs={8} sm={8} md={6} lg={6} xl={6}>
              <GadgetsNac />
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
                            <div className={classes.cardContainer}>
                              {this.state.newarrival.map((val) => {
                                return (
                                  <ImgMediaCard data={val} cardSize="auto" />
                                );
                              })}
                            </div>
                          </Slideshow>
                        </Container>
                      </Hidden>
                    </>
                  }
                </Grid>
              </Grid>
            </Hidden>
          </Container>
          <Hidden mdUp>
            <Grid
              item
              xs={12}
              className={classes.gridPadding}
              data-aos="fade-left"
            >
              <br />
              <Title title="ABOUT US" />
              <Timeline day="monday" date="06/05/2019" timelineData={tData} />
            </Grid>
          </Hidden>
          <Container>
            <Grid
              item
              xs={12}
              className={classes.gridPadding}
              style={{ paddingTop: "40px" }}
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
              <Grid container>
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
                <Timeline day="monday" date="06/05/2019" timelineData={tData} />
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
                      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_page/Group+177%402x.png",
                    },
                    {
                      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_page/Group+180%402x.png",
                    },
                    {
                      img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_page/Group+181%402x.png",
                    },
                  ].map((val) => {
                    return (
                      <Grid item xs={4} style={{ paddingLeft: 5 }}>
                        <Slideshow
                          class="subslider-carousel"
                          dataCarousel={mysettings}
                        >
                          <img src={val.img} alt="NAC" height="100%" />
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
                <div className={classes.testimonial}>
                  <Testimonial customerreview={this.state.reviews} />
                  <br />
                  <br />
                </div>
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
      </div>
    );
  }
}

export default withStyles(styles)(HomeComp);
