import React from "react";
import Header from "components/SilverComponents/Header";
import Filterlisting from "components/Filterlisting";
import { Grid, Hidden, Container } from "@material-ui/core";
import Filter from "components/Filter/filter";
import Footer from "components/Footer/Footer";
import { ChatHelp } from "components/ChatHelp";
import { FilterOptionsContext } from "context";
import productList from "mappers/productlist";
import { CDN_URL } from "config";
import { withRouter } from "react-router";
import "screens/screens.css";
import filterData from "mappers/filterData";
import { async } from "q";
import MetaTags from "react-meta-tags";
import { CartContext } from "context";
import LiveChat from "react-livechat";
import Slideshow from "components/Carousel/carosul";
import { homePageStylori } from "./dummydatahome";
import ProductDescription from "components/productDescription";
class Stylori extends React.Component {
  constructor(props) {
    super();
    this.state = { loading: false };
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):

    //  if(this.props.dataFilter !== prevProps.dataFilter){

    if (this.props.loading !== prevProps.loading) {
      this.props.setloadingfilters(false);

      // }
      // setTimeout(function(){ alert("Hello"); }, 3000);
      // setTimeout(function(){  this.props.setloadingfilters(false); }.bind(this), 5000);
    }
      
  }

  render() {
    // alert(JSON.stringify(this.props.wishlist))
    const { data, dataFilter, loading } = this.props;
    const setting = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 2000,
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
        <LiveChat license={5807571} />
        <Grid container>
          <div>
            {this.props && this.props.mappedFilters && this.props.mappedFilters.seo_url ? (
              <MetaTags>
                <title>{this.props.mappedFilters.seo_url}</title>
                <meta name="description" content={this.props.mappedFilters.seo_text} />
                <meta name="keywords" content={this.props.dataFilter[0].filter} />

                <meta property="og:title" id="fb-title" content={this.props.mappedFilters.seo_url} />
                <meta property="og:description" content={this.props.mappedFilters.seo_text} />
                <meta property="og:type" content="website" />
                <meta property="og:url" id="fb-product-url" content={window.location.href} />
                <meta
                  property="og:image"
                  id="fb_imageUrl"
                  content={
                    this.props.data && this.props.data[0] && this.props.data[0].image && this.props.data[0].image.placeImage.img
                  }
                />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@StyloriLove" />
                <meta name="twitter:title" id="twitter-title" content={this.props.mappedFilters.seo_url} />
                <meta name="twitter:description" content={this.props.mappedFilters.seo_text} />
                <meta
                  property="og:image"
                  id="fb_imageUrl"
                  content={
                    this.props.data && this.props.data[0] && this.props.data[0].image && this.props.data[0].image.placeImage.img
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
          <Grid item xs={12}>
            {/* <Hidden smDown>
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
          </Hidden> */}
            <Slideshow sliderRef={this.slider} dataCarousel={setting}>
              {homePageStylori.carouselTop.data.map((val, index) => (
                <>
                  <Hidden smDown>
                    <Grid container key={index}>
                      <a href={val.navigateUrl} style={{ width: "100%" }}>
                        <img src={val.img} style={{ width: "100%", height: "100%" }} />
                      </a>
                    </Grid>
                  </Hidden>
                  <Hidden mdUp>
                    <Grid container key={index}>
                      <a href={val.navigateUrl}>
                        <img src={val.mobileImg} style={{ width: "100%", height: "100%" }} />
                      </a>
                    </Grid>
                  </Hidden>
                </>
              ))}
            </Slideshow>
          </Grid>
          <Hidden smDown>
            <Container maxWidth="lg">
              <Grid item xs={12}>
                {/* <Filterlisting title="Jewellery" data={dataFilter} datalisting={data} wishlist={this.props.wishlistdata} /> */}
                <ProductDescription title="Jewellery" data={dataFilter} datalisting={data} wishlist={this.props.wishlistdata} />
                <Filter datas={data} data={dataFilter} loading={loading} wishlist={this.props.wishlistdata} />
              </Grid>
            </Container>
          </Hidden>
          <Hidden mdUp>
            <Grid item xs={12}>
              {/* <Filterlisting title="Jewellery" data={dataFilter} datalisting={data} wishlist={this.props.wishlistdata} /> */}
              <ProductDescription title="Jewellery" data={dataFilter} datalisting={data} wishlist={this.props.wishlistdata} />
              <Filter datas={data} data={dataFilter} loading={loading} wishlist={this.props.wishlistdata} />
            </Grid>
          </Hidden>
          <Grid item xs={12}>
            <Hidden smDown>
              {/* <ChatHelp data={data} wishlist={this.props.wishlistdata} /> */}

              <Footer />
            </Hidden>
          </Grid>
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
    FilterOptionsCtx: { data, loading, error, dataArr, mappedFilters, cartcount, loadingfilters, wishlist_count },
    setloadingfilters,
  } = React.useContext(FilterOptionsContext);
  let content,
    mapped = [];
  // alert(JSON.stringify(cartcount))
  var arrFilters = Array(mappedFilters);
  let mappedFiltersList = filterData(arrFilters);
  // let mappedFilter = filterData(mappedFilters)
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
