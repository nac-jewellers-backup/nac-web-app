import { Grid, Hidden, Typography } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import "index.css";
import React from "react";
import ReactPixel from "react-facebook-pixel";
import MetaTags from "react-meta-tags";
import { withRouter } from "react-router";
import Slideshow from "../components/Carousel/carosul";
import StaticView from "../components/CarouselLazyer/StaticView";
import Feedes from "../components/Feedes/Index";
import GridList from "../components/GridList/GridList";
import Stories from "../components/Stories/Index";
import { storyData } from "../components/storyTemplate/storyTemplateData";
import Testimony from "../components/testimonial/testimonial";
import { homePageStylori } from "./dummydatahome";
class HomeStylori extends React.Component {
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
  componentDidMount() {
    ReactPixel.init("1464338023867789", {}, { debug: true, autoConfig: true });
    ReactPixel.pageView();
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
    const productsubHead = [
      {
        name: "From the House of NAC",
        icon: "https://assets.stylori.com/images/Static+Pages/Other+Pages/fromthehouseofnac-pink.svg",
        class: "image1",
      },
      {
        name: "Certified Jewellery",
        icon: "https://assets.stylori.com/images/Static%20Pages/Other%20Pages/certifiedjewellery-pink.svg",
        class: "image2",
      },
      {
        name: "Free Shipping",
        icon: "https://assets.stylori.com/images/Static+Pages/Other+Pages/securepayments-pink.svg",
        class: "image3",
      },
      {
        name: "Diverse Styles",
        icon: "https://assets.stylori.com/images/Static+Pages/Other+Pages/diversestyles-pink.svg",
        class: "image4",
      },
      {
        name: "Easy Returns",
        icon: "https://assets.stylori.com/images/Static+Pages/Other+Pages/easyreturns-pink.svg",
        class: "image5",
      },
    ];

    return (
      <Grid container>
        <div>
          <MetaTags>
            <title>
              Online Jewellery Shopping in India | Gold and Diamond Jewellery
              Online
            </title>
            <meta
              name="description"
              content="Buy Gold and Diamond Jewellery Shopping Online from Stylori.com with variety of products like Pendants, Gold Rings, Bangles, Earrings"
            />
            <meta
              name="keywords"
              content="Jewellery Online, Online Jewellery India, buy gold jewellery online, Online Jewellery Shopping, gold jewellery online, gold jewellery, fashion jewellery, jewellery designs, indian jewellery, designer jewellery,  fashion Jewellery, online jewellery, diamond Jewellery, online jewellery shopping india, jewellery websites, diamond jewellery india,"
            />

            <meta
              property="og:title"
              id="fb-title"
              content="Online Jewellery Shopping in India - Gold and Diamond Jewellery Online"
            />
            <meta
              property="og:description"
              content="Buy Gold and Diamond Jewellery Shopping Online from Stylori.com with variety of products like Pendants, Gold Rings, Bangles, Earrings"
            />
            <meta
              property="og:url"
              id="fb-product-url"
              content={window.location.href}
            />
            <meta
              property="og:image"
              id="fb_imageUrl"
              content="https://assets.stylori.com/stylori-logo.svg"
            />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@StyloriLove" />
            <meta
              name="twitter:title"
              id="twitter-title"
              content="Online Jewellery Shopping"
            />
            <meta
              name="twitter:description"
              content="Buy Gold and Diamond Jewellery Shopping Online from Stylori.com with variety of products like Pendants, Gold Rings, Bangles, Earrings"
            />
            <meta
              name="twitter:image"
              id="twitter_imageUrl"
              content="https://assets.stylori.com/stylori-logo.svg"
            />
          </MetaTags>
        </div>
        <Header />
        <Grid item xs={12}>
          <Hidden smDown>
            {homePageStylori.carouselTop.setting.arrowsImg && (
              <Grid container>
                <Grid
                  item
                  onClick={this.previous}
                  className={"imagePrevios"}
                ></Grid>
                <Grid item onClick={this.next} className={"imagenext"}></Grid>
              </Grid>
            )}
          </Hidden>
          <Slideshow
            sliderRef={this.slider}
            dataCarousel={homePageStylori.carouselTop.setting}
          >
            {homePageStylori.carouselTop.data.map((val, index) => (
              <>
                <Hidden smDown>
                  <Grid container key={index}>
                    <a href={val.navigateUrl} style={{ width: "100%" }}>
                      <img
                        src={val.img}
                        style={{ width: "100%", height: "100%" }}
                        alt="icon"
                        loading="lazy"
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
                        alt="icon"
                        loading="lazy" 
                      />
                    </a>
                  </Grid>
                </Hidden>
              </>
            ))}
          </Slideshow>
        </Grid>
        <Hidden mdUp>
          <Grid container>
            <Grid
              item
              xs={12}
              alignItems="center"
              style={{ paddingTop: "6px" }}
            >
              <Typography style={{ width: "100%", textAlign: "center" }}>
                <Slideshow dataCarousel={dataCarousel}>
                  {productsubHead.map((val, index) => (
                    <>
                      <Grid
                        container
                        style={{
                          display: "flex !important",
                        }}
                        key={"From the House of NAC"}
                        className="wrappercustomer"
                      >
                        <Grid
                          item
                          container
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          <img
                            style={{ width: "18%" }}
                            src={val.icon}
                            alt="icon"
                            loading="lazy" alt='...'
                          />
                        </Grid>
                      </Grid>
                    </>
                  ))}
                </Slideshow>
              </Typography>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden smDown>
          <Grid
            Container
            item
            style={{
              padding: "10px 15px",
              width: "100%",
            }}
          >
            <StaticView />
          </Grid>
        </Hidden>

        <Grid Container className="GridConatiner">
          <Grid item className="GridListImg">
            <GridList GridImage={homePageStylori.collectionGrid} />
          </Grid>
        </Grid>
        <Testimony
          dataCarousel={homePageStylori.Testimony.carousel.setting}
          GridImage={homePageStylori.Testimony.bangleGrid}
          carosolData={homePageStylori.Testimony.carousel.data}
        />
        <Hidden smDown>
          <Feedes
            fadeImages={homePageStylori.NewsFeeds.carousel.data}
            dataCarousel={homePageStylori.NewsFeeds.carousel.setting}
          />
        </Hidden>
        <Grid Container style={{ width: "100%" }}>
          <Grid item className="selectionHead">
            <em className="LeftImage"></em>
            <Grid className="headerTestimony">
              <span className="Typograpytestimony">Stories</span>
            </Grid>
            <em className="rightImage"></em>
          </Grid>
        </Grid>
        <Stories
          dataCarousel={homePageStylori.Stories.carousel.setting}
          carosolData={storyData.storiesData}
        />
        <Grid item xs={12} style={{ marginTop: 20 }}>
          <Footer />
        </Grid>
      </Grid>
    );
  }
}

const Components = () => {
  let content = <HomeStylori />;
  return content;
};

export default withRouter(Components);
