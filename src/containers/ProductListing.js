import { Container, Grid, Hidden } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import Aos from "aos";
import "aos/dist/aos.css";
import Slideshow from "components/Carousel/carosul";
import Filter from "components/Filter/filter";
import Footer from "components/Footer/Footer";
import NeedHelp from "components/needHelp";
import ProductDescription from "components/productDescription";
import Header from "components/SilverComponents/Header";
import { CDN_URL } from "config";
import { CartContext, FilterOptionsContext } from "context";
import filterData from "mappers/filterData";
import productList from "mappers/productlist";
import React from "react";
import ReactPixel from "react-facebook-pixel";
import MetaTags from "react-meta-tags";
import { withRouter } from "react-router";
import "screens/screens.css";
import { API_URL } from "../config";
import { LISTINGBANNER } from "../queries/home";
class Stylori extends React.Component {
  constructor(props) {
    super();
    this.state = {
      loading: false,
      starting: false,
      bannerData: [],
      imageLoader: false,
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.loading !== prevProps.loading) {
      this.props.setloadingfilters(false);
    }
  }

  componentDidMount() {
    ReactPixel.init("1464338023867789", {}, { debug: true, autoConfig: true });
    ReactPixel.pageView();
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: LISTINGBANNER,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let bannerFullData =
          data?.data?.allBanners?.nodes?.sort(
            (a, b) => parseFloat(a.position) - parseFloat(b.position)
          ) ?? [];
        const specificPageData = bannerFullData.filter(
          (item) => item.urlParam === window.location.pathname
        );
        const listedPageData = bannerFullData.filter(
          (item) => item.urlParam === "listingPage"
        );

        if (specificPageData.length > 0) {
          this.setState({ bannerData: specificPageData });
        } else {
          this.setState({ bannerData: listedPageData });
        }
        if (data.data.allBanners.nodes.length > 0) {
          this.setState({ starting: true });
        }
      });
    Aos.init({ duration: 1500 });
  }
  imageLoader = () => {
    this.setState({ imageLoading: true });
  };
  render() {
    const { data, dataFilter, loading } = this.props;
    const setting = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 2500,
      fade: false,
      arrows: false,
      arrowsImg: true,
      dotsClass: "slickdev",
      accessibility: true,
      autoplaySpeed: 4000,
      centerMode: false,
      focusOnSelect: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      pauseOnFocus: true,
      swipe: false,
    };

    return (
      <>
        {/* <LiveChat license={5807571} /> */}
        <Grid container>
          <div>
            {this.props &&
            this.props.mappedFilters &&
            this.props.mappedFilters.seo_url ? (
              <MetaTags>
                <title>{this.props.mappedFilters.seo_url}</title>
                <meta
                  name="description"
                  content={this.props.mappedFilters.seo_text}
                />
                <meta
                  name="keywords"
                  content={this.props.dataFilter[0].filter}
                />

                <meta
                  property="og:title"
                  id="fb-title"
                  content={this.props.mappedFilters.seo_url}
                />
                <meta
                  property="og:description"
                  content={this.props.mappedFilters.seo_text}
                />
                <meta property="og:type" content="website" />
                <meta
                  property="og:url"
                  id="fb-product-url"
                  content={window.location.href}
                />
                <meta
                  property="og:image"
                  id="fb_imageUrl"
                  content={
                    this.props.data &&
                    this.props.data[0] &&
                    this.props.data[0].image &&
                    this.props.data[0].image.placeImage.img
                  }
                />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@StyloriLove" />
                <meta
                  name="twitter:title"
                  id="twitter-title"
                  content={this.props.mappedFilters.seo_url}
                />
                <meta
                  name="twitter:description"
                  content={this.props.mappedFilters.seo_text}
                />
                <meta
                  property="og:image"
                  id="fb_imageUrl"
                  content={
                    this.props.data &&
                    this.props.data[0] &&
                    this.props.data[0].image &&
                    this.props.data[0].image.placeImage.img
                  }
                />
              </MetaTags>
            ) : (
              ""
            )}
          </div>

          <Header
            data={data}
            cartcount={this.props.cartcount}
            wishlist={this.props.wishlistdata}
            wishlist_count={this.props.wishlist_count}
          />
          <Grid item xs={12} style={{ backgroundColor: "#ebebeb" }}>
            {this.state.starting ? (
              <Slideshow sliderRef={this.slider} dataCarousel={setting}>
                {this.state.bannerData.map((val, index) => (
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
                            alt="banner"
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
                            alt="banner"
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
            ) : (
              <Skeleton
                variant="rect"
                style={{ width: "100%" }}
                className="skeletonHeight"
                animation="wave"
              />
            )}
          </Grid>
          <Grid item xs={12}>
            <h3
              style={{
                textTransform: "capitalize",
                textAlign: "center",
                margin: "28px 0px 0px 0px",
                color: "#2F348B",
              }}
            >
              {this.props?.location?.pathname
                ?.replaceAll("/", " ")
                .replaceAll("-", " ")
                .replaceAll("+", " ") ?? " "}
            </h3>
          </Grid>

          <Hidden smDown>
            <Container maxWidth="lg">
              <Grid item xs={12}>
                {/* <Filterlisting title="Jewellery" data={dataFilter} datalisting={data} wishlist={this.props.wishlistdata} /> */}
                <ProductDescription
                  title="Jewellery"
                  data={dataFilter}
                  datalisting={data}
                  wishlist={this.props.wishlistdata}
                />
                <Filter
                  datas={data}
                  data={dataFilter}
                  loading={loading}
                  wishlist={this.props.wishlistdata}
                />
              </Grid>
            </Container>
          </Hidden>
          <Hidden mdUp>
            <Grid item xs={12}>
              {/* <Filterlisting title="Jewellery" data={dataFilter} datalisting={data} wishlist={this.props.wishlistdata} /> */}
              <ProductDescription
                title="Jewellery"
                data={dataFilter}
                datalisting={data}
                wishlist={this.props.wishlistdata}
              />
              <Filter
                datas={data}
                data={dataFilter}
                loading={loading}
                wishlist={this.props.wishlistdata}
              />
            </Grid>
          </Hidden>
          <Grid item xs={12}>
            <Hidden smDown>
              {/* <ChatHelp data={data} wishlist={this.props.wishlistdata} /> */}

              <Footer />
            </Hidden>
          </Grid>
          <NeedHelp />
        </Grid>
      </>
    );
  }
}

// const history = (props, aa) => props.history.push(`/stylori?${aa}`);

const Components = (props) => {
  let {
    CartCtx: { allorderdata, wishlistdata },
  } = React.useContext(CartContext);
  let {
    FilterOptionsCtx: {
      data,
      loading,
      error,
      dataArr,
      mappedFilters,
      cartcount,
      loadingfilters,
      wishlist_count,
    },
    setloadingfilters,
  } = React.useContext(FilterOptionsContext);
  let content,
    mapped = [];
  var arrFilters = Array(mappedFilters);
  let mappedFiltersList = filterData(arrFilters);
  if (!loading && !error) {
    if (Object.keys(data).length !== 0) {
      mapped = async () => await productList(data, CDN_URL);
    }
  }
  if (Object.keys(data).length === 0)
    content = (
      <div className="overall-loader">
        <div id="loading"></div>
      </div>
    );
  else
    content = (
      <Stylori
        {...props}
        allorderdata={allorderdata}
        wishlistdata={wishlistdata}
        cartcount={cartcount}
        data={dataArr}
        dataFilter={mappedFiltersList}
        loadingfilters={loadingfilters}
        loading={loading}
        mappedFilters={mappedFilters}
        setloadingfilters={setloadingfilters}
      />
    );
  return content;
};

export default withRouter(Components);
