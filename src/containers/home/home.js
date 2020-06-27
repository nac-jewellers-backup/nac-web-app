import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import Slideshow from "components/Carousel/carosul";
import { homeNac, HomeCardData, StaticImage } from "mappers/dummydata/homeNac";
import { withRouter } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import { withStyles } from "@material-ui/core/styles";
import Story from "../../components/story";
import HomeCard from "../../components/homecard";
// import {styles} from './homestyle';
import Testimonial from "../../components/testimonial/testimonial";
import { storyData } from "mappers/dummydata/homeNac";
import Header from "components/SilverComponents/Header";
import Footer from "components/Footer/Footer";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import GadgetsNac from "components/Gagetstylori/GadgetsNac"
import {ImgMediaCard} from "components/ProductCard/Card";
import './index.css'
import {MediaControlCard} from "./timilineCard"
import {AdvancedGridList} from "./collectionsGrid"

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
    marginTop: "-30px",
    fontSize: "20px",
    color: "#fff",
    textAlign: "center",
    position: "absolute",
    zIndex: 9,
    "& svg":{
      fontSize:'3rem'
    },
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
    // [theme.breakpoints.only('lg')]: {
    //   top: "33% !important",
    // },
    [theme.breakpoints.up("lg")]: {
      top: "426px !important",
    },
    [theme.breakpoints.only("xl")]: {
      top: "682px !important",
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
    "& svg":{
      fontSize:'3rem'
    },
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
  collectionSection:{
    // "& svg":{
      fill:`${theme.palette.secondary.main} !important`
    // }
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
      count: "",
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
      arrows: false,
    };
    const { classes } = this.props;
    const dummyData = [{
      "totalCount": 2788,
      "price": 31157.05,
      "offerPrice": 23367.79,
      "title": "Elegant Drops Diamond Earrings",
      "save": "5999.9",
      "image": {
        "placeImage": {
          "img": "https://assets.stylori.com/product/SE0016/1000X1000/SE0016-1Y.webp"
        },
        "hoverImage": {
          "img": "https://assets.stylori.com/product/SE0016/1000X1000/HOVER-SE0016-2Y.webp"
        }
      },
      "productId": "SE0016",
      "diamondType": "SIIJ",
      "purity": "18K",
      "skuSize": null,
      "productType": "Earrings",
      "skuId": "SE0016-18110000",
      "oneDayShipping": true,
      "imageResolution": {
        "img_res": 250,
        "url_1000x1000": "product/SE0016/1000X1000/HOVER-SE0016-2Y.webp"
      },
      "skuUrl": "jewellery/earrings/diamond/Metis-Studs?skuid=22969",
      "skuID": "22969",
      "discount": 25
    },
    {
      "totalCount": 2788,
      "price": 77940.39,
      "offerPrice": 58455.29,
      "title": "Jazzy Gypsy Diamond Hoop Earrings",
      "save": "5999.9",
      "image": {
        "placeImage": {
          "img": "https://assets.stylori.com/product/SE0015/1000X1000/SE0015-1YW.webp"
        },
        "hoverImage": {
          "img": "https://assets.stylori.com/product/SE0015/1000X1000/HOVER-SE0015-2YW.webp"
        }
      },
      "productId": "SE0015",
      "diamondType": "SIIJ",
      "purity": "18K",
      "skuSize": null,
      "productType": "Earrings",
      "skuId": "SE0015-18410000",
      "oneDayShipping": false,
      "imageResolution": {
        "img_res": 250,
        "url_1000x1000": "product/SE0015/1000X1000/HOVER-SE0015-2YW.webp"
      },
      "skuUrl": "jewellery/earrings/diamond/Nuages-Hoops?skuid=22975",
      "skuID": "22975",
      "discount": 25
    },
    {
      "totalCount": 2788,
      "price": 86653.95,
      "offerPrice": 64990.46,
      "title": "Gorgeous Solitaire Diamond Marquise Earrings",
      "save": "5999.9",
      "image": {
        "placeImage": {
          "img": "https://assets.stylori.com/product/SE0024/1000X1000/SE0024-1Y.webp"
        },
        "hoverImage": {
          "img": "https://assets.stylori.com/product/SE0024/1000X1000/HOVER-SE0024-2Y.webp"
        }
      },
      "productId": "SE0024",
      "diamondType": "SIIJ",
      "purity": "18K",
      "skuSize": null,
      "productType": "Earrings",
      "skuId": "SE0024-18110000",
      "oneDayShipping": false,
      "imageResolution": {
        "img_res": 250,
        "url_1000x1000": "product/SE0024/1000X1000/HOVER-SE0024-2Y.webp"
      },
      "skuUrl": "jewellery/bouquetoflove/Navis-Earring?skuid=21569",
      "skuID": "21569",
      "discount": 25
    },
    {
      "totalCount": 2788,
      "price": 86653.95,
      "offerPrice": 64990.46,
      "title": "Gorgeous Solitaire Diamond Marquise Earrings",
      "save": "5999.9",
      "image": {
        "placeImage": {
          "img": "https://assets.stylori.com/product/SE0024/1000X1000/SE0024-1Y.webp"
        },
        "hoverImage": {
          "img": "https://assets.stylori.com/product/SE0024/1000X1000/HOVER-SE0024-2Y.webp"
        }
      },
      "productId": "SE0024",
      "diamondType": "SIIJ",
      "purity": "18K",
      "skuSize": null,
      "productType": "Earrings",
      "skuId": "SE0024-18110000",
      "oneDayShipping": false,
      "imageResolution": {
        "img_res": 250,
        "url_1000x1000": "product/SE0024/1000X1000/HOVER-SE0024-2Y.webp"
      },
      "skuUrl": "jewellery/bouquetoflove/Navis-Earring?skuid=21569",
      "skuID": "21569",
      "discount": 25
    },
    {
      "totalCount": 2788,
      "price": 86653.95,
      "offerPrice": 64990.46,
      "title": "Gorgeous Solitaire Diamond Marquise Earrings",
      "save": "5999.9",
      "image": {
        "placeImage": {
          "img": "https://assets.stylori.com/product/SE0024/1000X1000/SE0024-1Y.webp"
        },
        "hoverImage": {
          "img": "https://assets.stylori.com/product/SE0024/1000X1000/HOVER-SE0024-2Y.webp"
        }
      },
      "productId": "SE0024",
      "diamondType": "SIIJ",
      "purity": "18K",
      "skuSize": null,
      "productType": "Earrings",
      "skuId": "SE0024-18110000",
      "oneDayShipping": false,
      "imageResolution": {
        "img_res": 250,
        "url_1000x1000": "product/SE0024/1000X1000/HOVER-SE0024-2Y.webp"
      },
      "skuUrl": "jewellery/bouquetoflove/Navis-Earring?skuid=21569",
      "skuID": "21569",
      "discount": 25
    },
    {
      "totalCount": 2788,
      "price": 86653.95,
      "offerPrice": 64990.46,
      "title": "Gorgeous Solitaire Diamond Marquise Earrings",
      "save": "5999.9",
      "image": {
        "placeImage": {
          "img": "https://assets.stylori.com/product/SE0024/1000X1000/SE0024-1Y.webp"
        },
        "hoverImage": {
          "img": "https://assets.stylori.com/product/SE0024/1000X1000/HOVER-SE0024-2Y.webp"
        }
      },
      "productId": "SE0024",
      "diamondType": "SIIJ",
      "purity": "18K",
      "skuSize": null,
      "productType": "Earrings",
      "skuId": "SE0024-18110000",
      "oneDayShipping": false,
      "imageResolution": {
        "img_res": 250,
        "url_1000x1000": "product/SE0024/1000X1000/HOVER-SE0024-2Y.webp"
      },
      "skuUrl": "jewellery/bouquetoflove/Navis-Earring?skuid=21569",
      "skuID": "21569",
      "discount": 25
    },{
      "totalCount": 2788,
      "price": 40798.7,
      "offerPrice": 30599.03,
      "title": "Striking Diamond Shape Earrings",
      "save": "5999.9",
      "image": {
        "placeImage": {
          "img": "https://assets.stylori.com/product/SE0031/1000X1000/SE0031-1Y.webp"
        },
        "hoverImage": {
          "img": "https://assets.stylori.com/product/SE0031/1000X1000/HOVER-SE0031-2Y.webp"
        }
      },
      "productId": "SE0031",
      "diamondType": "SIIJ",
      "purity": "18K",
      "skuSize": null,
      "productType": "Earrings",
      "skuId": "SE0031-18110000",
      "oneDayShipping": false,
      "imageResolution": {
        "img_res": 250,
        "url_1000x1000": "product/SE0031/1000X1000/HOVER-SE0031-2Y.webp"
      },
      "skuUrl": "jewellery/earrings/diamond/Starbust-Inn?skuid=22356",
      "skuID": "22356",
      "discount": 25
    }];
    const ArrowLeft = (props) =>{
      const { className, style, onClick } = props;
      return(
        <ArrowLeftIcon className={`${className} ${classes.collectionSection}`} onClick={onClick} style={{...style}}/>
      )
    }
    const ArrowRight = (props) =>{
      const { className, style, onClick } = props;
      return(
        <ArrowRightIcon className={`${className} ${classes.collectionSection}`} onClick={onClick} style={{...style}}/>
      )
    }
    const dataCarouselcollections = {
      arrows: true,
      dots: false,
      autoplay: true,
      infinite: true,
      accessibility: true,
      speed: 2500,
      // fade: true,
      slidesToShow:4,
      slidesToScroll: 4,
      prevArrow:<ArrowLeft/>,
      nextArrow:<ArrowRight />
    };
    const timelineCustomPaging = (i) =>{
      dummyData.map(val=>{
        
        return (
          <a>
            <img src={val.image.placeImage.img} alt="NAC"/>
            </a>
        );
      })
    }
    let data = dummyData.map(val=>{
      
      return (
        val.image.placeImage.img
      );
    })
    const settings = {
      customPaging:(i)=>{ 
    return <img src={data[i]} alt="NAC" width="50px"/>
    },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    
      const tData = [
        {time:'1970s',image:'https://assets.stylori.com/product/SE0016/1000X1000/SE0016-1Y.webp' },
        {time:'1970s', image:'https://assets.stylori.com/product/SE0015/1000X1000/SE0015-1YW.webp' },
        {time:'1970s',image:'https://assets.stylori.com/product/SE0016/1000X1000/SE0016-1Y.webp' },
        {time:'1970s',image:'https://assets.stylori.com/product/SE0016/1000X1000/SE0016-1Y.webp' },
        {time:'1970s',image:'https://assets.stylori.com/product/SE0016/1000X1000/SE0016-1Y.webp' },
        {time:'1970s', image:'https://assets.stylori.com/product/SE0015/1000X1000/SE0015-1YW.webp' }
      ];
      const TimelineEntry = ({ entry: { time, image }, useBar }) => (
        <div className="timeline-entry" onClick={()=>{this.setState({timelineImage:image})}}>
          <span className={`time-range ${this.state.timelineImage ===image ? 'active' : ""}`}>
            {time}
          </span>
          <div className={`${'timeline-icon-container'} ${this.state.timelineImage ===image ? 'active' : ""}`} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z" />
            </svg>
            {/* <FiberManualRecordIcon/> */}
            {useBar && (<div className="bar" />)}
          </div>
        
        </div>
      );
      const Timeline = ({ day, date, timelineData }) => (
       <Grid container>
         <Grid item xs={4}>
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
         <Grid item xs={8}>
           {/* <img src ={this.state.timelineImage} alt="stylori" style={{width:"400px", height:"auto"}}/> */}
           <MediaControlCard data={{image:this.state.timelineImage}}/>
         </Grid>
       </Grid>
      );
    return (
      <Grid container>
        <Header />
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
            {homeNac.carouselTop.data.map((val, index) => (
              <>
                <Hidden smDown>
                  <Grid container key={index}>
                    <a href={val.navigateUrl} style={{ width: "100%" }}>
                      <img
                        src={val.img}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </a>
                  </Grid>
                </Hidden>
                <Hidden mdUp>
                  <Grid container key={index}>
                    <a href={val.navigateUrl}>
                      <img
                        src={val.mobileImg}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </a>
                  </Grid>
                </Hidden>
              </>
            ))}
          </Slideshow>
        </Grid>
        <Grid container item xs={12} justify="center" style={{margin:"30px 0"}}>
          <Grid item xs={6}>
          <GadgetsNac/>
          </Grid>
        </Grid>
      <Container maxWidth="lg">
      <Grid container item xs={12}>
          {  <Slideshow
                // sliderRef={this.slider}
                class="subslider-carousel"
                dataCarousel={dataCarouselcollections}
              >
           { dummyData.map(val=>{
              return(
              
          <ImgMediaCard data={val} cardSize="auto"/>
                
              )
            })}
              </Slideshow>

          }
          
        </Grid>
        {/* <Grid container item xs={12}>
          {  <Slideshow
                // sliderRef={this.slider}
                class="subslider-carousel"
                dataCarousel={settings}
              >
           { dummyData.map(val=>{
              return(
              
         <img src = {val.image.placeImage.img} alt="haii" />
                
              )
            })}
              </Slideshow>

          }
          
        </Grid> */}
        <Timeline day="monday" date="06/05/2019" timelineData={tData}/>
        <AdvancedGridList/>
      </Container>
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
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

export default withStyles(styles)(HomeComp);
