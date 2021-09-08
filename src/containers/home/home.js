import { Container, Grid } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { withStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Slideshow from "components/Carousel/carosul";
import Footer from "components/Footer/Footer";
import GadgetsNac from "components/Gagetstylori/GadgetsNac";
import { ImgMediaCard } from "components/ProductCard/Card";
import Header from "components/SilverComponents/Header";
import { homeNac } from "mappers/dummydata/homeNac";
import React from "react";
// import {styles} from './homestyle';
import Testimonial from "../../components/testimonial/testimonial";
import { API_URL } from "../../config";
import { ALLBANNERS } from "../../queries/home";
import Card from "./CardGrid";
import { AdvancedGridList } from "./collectionsGrid";
import Homenote from "./Homenote";
import "./index.css";
import { Title } from "./titles";

const styles = (theme) => ({
  preButton: {
    // backgroundRepeat: "no-repeat !important",
    opacity: "1!important",
    // backgroundImage:
    //   "url(https://alpha-assets.stylori.com/images/static/slider_icon.png)!important",
    // backgroundPosition: "-27px -229px!important",
    // background-color: #fff!important;
    // border: 1px solid #ccc;
    borderLeft: 0,
    background: "none",
    left: 0,
    // top:"55% !important",
    // marginTop: "-30px",
    fontSize: "20px",
    color: "#fff",
    textAlign: "center",
    position: "absolute",
    zIndex: 9,
    "& svg": {
      fontSize: "3rem",
    },
    // [theme.breakpoints.only("xs")]: {
    //   top: "160px !important",
    //   height: "30px",
    //   width: "28px",
    // },
    // [theme.breakpoints.only("sm")]: {
    //   top: "262px !important",
    //   height: "30px",
    //   width: "28px",
    // },
    // [theme.breakpoints.only("md")]: {
    //   top: "321px !important",
    // },
    // // [theme.breakpoints.only('lg')]: {
    // //   top: "33% !important",
    // // },
    // [theme.breakpoints.up("lg")]: {
    //   top: "426px !important",
    // },
    // [theme.breakpoints.only("xl")]: {
    //   top: "682px !important",
    // },
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
    // backgroundImage:
    //   "url(https://alpha-assets.stylori.com/images/static/slider_icon.png)!important",

    // backgroundRepeat: "no-repeat!important",
    opacity: "1!important",
    // backgroundPosition: "-160px -229px!important",
    // backgroundColor: "#fff!important",
    // border: "1px solid #ccc",
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
    // [theme.breakpoints.up(1048)]: {
    //   top: "300px !important",
    //   height: "30px",
    //   width: "28px",
    //   right:15 ,
    // },
    // [theme.breakpoints.between([380,420])]: {
    //   top: "160px !important",
    //   height: "30px",
    //   width: "28px",
    //   right:15 ,
    // },
    // [theme.breakpoints.only("sm")]: {
    //   top: "231px !important",
    //   height: "30px",
    //   width: "28px",
    // },
    // [theme.breakpoints.only("md")]: {
    //   top: "291px !important",
    // },
    // [theme.breakpoints.only('lg')]: {
    //   top: "33% !important",
    // },
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
      timelineImage:
        "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_page/Group+213%402x.png",
      bannerHome: [],
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: ALLBANNERS,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let bannerDataFull = data.data.allBanners.nodes;
        this.setState({ bannerHome: bannerDataFull });
      });
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
      arrows: false,
    };
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
      infinite: false,
      accessibility: true,
      speed: 2500,
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
    const timelineCustomPaging = (i) => {
      dummyData.map((val) => {
        return (
          <a>
            <img src={val.image.placeImage.img} alt="NAC" />
          </a>
        );
      });
    };
    let data = dummyData.map((val) => {
      return val.image.placeImage.img;
    });
    const settings = {
      customPaging: (i) => {
        return <img src={data[i]} alt="NAC" width="50px" />;
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
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
          {/* <FiberManualRecordIcon/> */}
          {useBar && <div className="bar" />}
        </div>
      </div>
    );
    const Timeline = ({ day, date, timelineData }) => (
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
          {/* <img src ={this.state.timelineImage} alt="stylori" style={{width:"400px", height:"auto"}}/> */}
          {/* <MediaControlCard data={{ image: this.state.timelineImage }} /> */}
          <Card data={{ image: this.state.timelineImage }} />
        </Grid>
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
    );
    const InstagramFeed = () => {
      return (
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/p/CBkv4AjpH5Y/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version={12}
          style={{
            background: "#FFF",
            border: 0,
            // borderRadius: "3px",
            // boxShadow:
            //   "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px",
            maxWidth: "100%",
            padding: 0,
            width: "calc(100% - 2px)",
          }}
        >
          <div style={{ padding: "16px" }}>
            <a
              href="https://www.instagram.com/p/CBkv4AjpH5Y/?utm_source=ig_embed&utm_campaign=loading"
              style={{
                background: "#FFFFFF",
                lineHeight: 0,
                padding: "0 0",
                textAlign: "center",
                textDecoration: "none",
                width: "100%",
              }}
              target="_blank"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#F4F4F4",
                    borderRadius: "50%",
                    flexGrow: 0,
                    height: "40px",
                    marginRight: "14px",
                    width: "40px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "4px",
                      flexGrow: 0,
                      height: "14px",
                      marginBottom: "6px",
                      width: "100px",
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "4px",
                      flexGrow: 0,
                      height: "14px",
                      width: "60px",
                    }}
                  />
                </div>
              </div>
              <div style={{ padding: "19% 0" }} />
              <div
                style={{
                  display: "block",
                  height: "50px",
                  margin: "0 auto 12px",
                  width: "50px",
                }}
              >
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 60 60"
                  version="1.1"
                  xmlns="https://www.w3.org/2000/svg"
                  xmlnsXlink="https://www.w3.org/1999/xlink"
                >
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      transform="translate(-511.000000, -20.000000)"
                      fill="#000000"
                    >
                      <g>
                        <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div style={{ paddingTop: "8px" }}>
                <div
                  style={{
                    color: "#3897f0",
                    fontFamily: "Arial,sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 550,
                    lineHeight: "18px",
                  }}
                >
                  View this post on Instagram
                </div>
              </div>
              <div style={{ padding: "12.5% 0" }} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "14px",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "50%",
                      height: "12.5px",
                      width: "12.5px",
                      transform: "translateX(0px) translateY(7px)",
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      height: "12.5px",
                      transform:
                        "rotate(-45deg) translateX(3px) translateY(1px)",
                      width: "12.5px",
                      flexGrow: 0,
                      marginRight: "14px",
                      marginLeft: "2px",
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "50%",
                      height: "12.5px",
                      width: "12.5px",
                      transform: "translateX(9px) translateY(-18px)",
                    }}
                  />
                </div>
                <div style={{ marginLeft: "8px" }}>
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "50%",
                      flexGrow: 0,
                      height: "20px",
                      width: "20px",
                    }}
                  />
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "2px solid transparent",
                      borderLeft: "6px solid #f4f4f4",
                      borderBottom: "2px solid transparent",
                      transform:
                        "translateX(16px) translateY(-4px) rotate(30deg)",
                    }}
                  />
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <div
                    style={{
                      width: "0px",
                      borderTop: "8px solid #F4F4F4",
                      borderRight: "8px solid transparent",
                      transform: "translateY(16px)",
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      flexGrow: 0,
                      height: "12px",
                      width: "16px",
                      transform: "translateY(-4px)",
                    }}
                  />
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: "8px solid #F4F4F4",
                      borderLeft: "8px solid transparent",
                      transform: "translateY(-4px) translateX(8px)",
                    }}
                  />
                </div>
              </div>
            </a>
            <p style={{ margin: "8px 0 0 0", padding: "0 4px" }}>
              <a
                href="https://www.instagram.com/p/CBkv4AjpH5Y/?utm_source=ig_embed&utm_campaign=loading"
                style={{
                  color: "#000",
                  fontFamily: "Arial,sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  lineHeight: "17px",
                  textDecoration: "none",
                  wordWrap: "break-word",
                }}
                target="_blank"
              >
                There is only one happiness in life: To love and to be loved ❤️
                #Stylori #covid19
              </a>
            </p>
            <p
              style={{
                color: "#c9c8cd",
                fontFamily: "Arial,sans-serif",
                fontSize: "14px",
                lineHeight: "17px",
                marginBottom: 0,
                marginTop: "8px",
                overflow: "hidden",
                padding: "8px 0 7px",
                textAlign: "center",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              A post shared by
              <a
                href="https://www.instagram.com/stylorilove/?utm_source=ig_embed&utm_campaign=loading"
                style={{
                  color: "#c9c8cd",
                  fontFamily: "Arial,sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  lineHeight: "17px",
                }}
                target="_blank"
              >
                Stylori
              </a>
              (@stylorilove) on
              <time
                style={{
                  fontFamily: "Arial,sans-serif",
                  fontSize: "14px",
                  lineHeight: "17px",
                }}
                dateTime="2020-06-18T11:07:52+00:00"
              >
                Jun 18, 2020 at 4:07am PDT
              </time>
            </p>
          </div>
        </blockquote>
      );
    };

    return (
      <Grid container>
        {/* <Helmet>
      <script async src="//www.instagram.com/embed.js"></script>
    </Helmet> */}
        <Header />

        {/* <LiveChat license={5807571} onChatLoaded={ ref => {
          
          this.livechat = ref
          } } />
        <div onClick={()=>window.LC_API.open_chat_window()}>
          div
        </div> */}
        <Grid item xs={12}>
          {/* <Hidden smDown> */}
          {homeNac.carouselTop.setting.arrowsImg && (
            <Grid container>
              <Grid item onClick={this.previous} className={classes.preButton}>
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
                  <Grid container key={index}>
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
                      />
                    </a>
                  </Grid>
                </Hidden>
              </>
            ))}
          </Slideshow>
        </Grid>

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
        <Container maxWidth="lg">
          <Hidden mdUp>
            <Grid container item xs={12}>
              <Grid item xs={12} className={classes.contentPadding}>
                <Title title="New Arrival" />
              </Grid>

              {
                <>
                  <Hidden smDown>
                    <Container maxWidth={"lg"} style={{ paddingTop: 4 }}>
                      <Slideshow
                        // sliderRef={this.slider}
                        class="subslider-carousel"
                        dataCarousel={dataCarouselcollections}
                      >
                        {dummyData.map((val) => {
                          return <ImgMediaCard data={val} cardSize="auto" />;
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
                        {dummyData.map((val) => {
                          return <ImgMediaCard data={val} cardSize="auto" />;
                        })}
                      </Slideshow>
                    </Container>
                  </Hidden>
                </>
              }
            </Grid>
          </Hidden>

          <Grid
            item
            xs={12}
            className={classes.gridPadding}
            style={{ paddingTop: "40px" }}
          >
            <Title title="Collections" />
          </Grid>
          <Grid style={{ paddingTop: 8 }}>
            <AdvancedGridList />
          </Grid>

          <Grid container item xs={12} style={{ margin: "60px 0px" }}>
            <Grid item xs={12} className={classes.gridPadding}>
              <Title
                title="Featured"
                style={{ marginBottom: "0px !important" }}
              />
            </Grid>
            {
              <>
                <Hidden smDown>
                  <Container maxWidth={"lg"} style={{ paddingTop: 8 }}>
                    <Slideshow
                      // sliderRef={this.slider}
                      class="subslider-carousel"
                      dataCarousel={dataCarouselcollections}
                    >
                      {dummyData.map((val) => {
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
                <Hidden mdUp>
                  <Container maxWidth={"lg"}>
                    <Slideshow
                      // sliderRef={this.slider}
                      class="subslider-carousel"
                      dataCarousel={dataCarouselcollectionsSm}
                    >
                      {dummyData.map((val) => {
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

          <Grid item xs={12} className={classes.gridPadding}>
            <Title title="ABOUT US" />
            <Timeline day="monday" date="06/05/2019" timelineData={tData} />
          </Grid>
          <Grid
            container
            item
            xs={12}
            className={classes.gridPadding}
            style={{ margin: "80px 0px" }}
          >
            <Grid container item xs={12}>
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
            <Grid
              container
              item
              xs={12}
              style={{ boxShadow: "6px 7px 6px #bebfbf" }}
            >
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
                    {/* <div className={classes.titilenews}>{val.title}</div> */}
                    <Slideshow
                      // sliderRef={this.slider}
                      class="subslider-carousel"
                      dataCarousel={mysettings}
                    >
                      {/* {[0, 1, 2].map((val) => {
                      return ( */}
                      <img src={val.img} alt="NAC" height="100%" />
                      {/* //   ); */}
                      {/* // })} */}
                    </Slideshow>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="xl">
          <Grid container style={{ paddingTop: "40px" }}>
            <Hidden smDown>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
                className={classes.photo}
                // style={{ height: "430px", overflow: "auto", marginTop: 52 }}
                style={{
                  marginTop: "20px",
                  height: "430px",
                  overflow: "auto",
                  borderRadius: "3px",
                  border: "1px solid #D9D9D9",
                }}
              >
                <InstagramFeed />
              </Grid>
            </Hidden>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              lg={8}
              xl={8}
              style={{
                paddingTop: "20px",
              }}
            >
              <div className={classes.testimonial}>
                <Testimonial />
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
          </Hidden>
        </Container>

        {/* <Grid container>
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
              // sliderRef={this.slider}
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
        </Grid> */}
        <Footer />
      </Grid>
    );
  }
}

export default withStyles(styles)(HomeComp);
