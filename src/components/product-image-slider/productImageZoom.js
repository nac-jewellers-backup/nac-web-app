import { Grid, Hidden, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";
import { GlassMagnifier } from "react-image-magnifiers";
import Slideshow from "../Carousel/carosul";
import styles from "../Header/styles";
import Wishlist from "../wishlist/wishlist";
import "./product-images.css";
// window.onload = function () {
//   var flashlight = document.querySelector('#flashlight');
//   document.getElementById('divs').addEventListener('mouseover', function (event) {
//     flashlight.style.left = (event.pageX - 40) + 'px';
//     flashlight.style.top = (event.pageY - 40) + 'px';
//   });
// };

class ProductImageZoom extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.slider = React.createRef();
  }

  checkImage = (imageSrc, good, bad) => {
    var img = new Image();
    img.onload = good;
    img.onerror = bad;
    img.src = imageSrc;
  };

  check_image_exists_in_server = (url) => {
    // var _url = url.replace(res.img_res, '1000X1000');

    return new Promise(async (resolve, reject) => {
      // create an XHR object
      await this.checkImage(
        url,
        () => {
          resolve(true);
        },
        () => {
          resolve(false);
        }
      );
    });
  };
  state = {
    // backgroundImage: `url(${src})`,
    backgroundPosition: "0% 0%",
    showimage:
      this.props &&
        this.props.data &&
        this.props.data.length > 0 &&
        this.props.data[0] &&
        this.props.data[0].fadeImages &&
        this.props.data[0].fadeImages.arrOfurls &&
        this.props.data[0].fadeImages.arrOfurls.length > 0 &&
        this.props.data[0].fadeImages.arrOfurls[0]
        ? this.check_image_exists_in_server(
          this.props.data[0].fadeImages.arrOfurls[0]
        )
          ? this.props.data[0].fadeImages.arrOfurls[0]
          : this.props.data[0].fadeImages.arrOfurls[0].replace(
            `${this.props.data[0].size}X${this.props.data[0].size}`,
            "2400X2400"
          )
        : "",
    largeImage:
      this.props &&
        this.props.data &&
        this.props.data.length > 0 &&
        this.props.data[0] &&
        this.props.data[0].fadeImages &&
        this.props.data[0].fadeImages.arrOfurls_2X &&
        this.props.data[0].fadeImages.arrOfurls_2X.length > 0 &&
        this.props.data[0].fadeImages.arrOfurls_2X[0]
        ? this.props.data[0].fadeImages.arrOfurls_2X[0]
        : "",
    showimageBig:
      this.props &&
        this.props.data &&
        this.props.data.length > 0 &&
        this.props.data[0] &&
        this.props.data[0].fadeImages &&
        this.props.data[0].fadeImages.arrOfurls &&
        this.props.data[0].fadeImages.arrOfurls.length > 0 &&
        this.props.data[0].fadeImages.arrOfurls[0]
        ? this.props.data[0].fadeImages.arrOfurls[0].replace(
          `${this.props.data[0].size}X${this.props.data[0].size}`,
          "2400X2400"
        )
        : "",
    largeImageBig:
      this.props &&
        this.props.data &&
        this.props.data.length > 0 &&
        this.props.data[0] &&
        this.props.data[0].fadeImages &&
        this.props.data[0].fadeImages.arrOfurls_2X &&
        this.props.data[0].fadeImages.arrOfurls_2X.length > 0 &&
        this.props.data[0].fadeImages.arrOfurls_2X[0]
        ? this.props.data[0].fadeImages.arrOfurls_2X[0].replace(
          "1000X1000",
          "2400X2400"
        )
        : "",
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (
      this.props?.data[0]?.fadeImages?.arrOfurls[0] !==
      prevProps.data[0]?.fadeImages?.arrOfurls[0]
    ) {
      this.setState({
        showimage: this.props?.data[0]?.fadeImages?.arrOfurls[0],
        largeImage: this.props?.data[0]?.fadeImages?.arrOfurls_2X[0],
      });
    }
  }
  handleVideoCheck = (url) => {
    var extensionVideoLists = [
      "m4v",
      "avi",
      "mpg",
      "mp4",
      "webm",
      "mp2",
      "mpeg",
      "mpe",
      "mpv",
      "ogg",
      "m4p",
      "wmv",
      "mov",
      "qt",
      "flv",
      "swf",
      "avchd",
    ];
    if (url) {
      if (url.length > 0) {
        var array_split = url.split(/\.(?=[^\.]+$)/);
        const found = extensionVideoLists.find(
          (element) => element.toLowerCase() === array_split[1]
        );
        if (found) {
          return true;
        } else return false;
      }
    } else {
      return false;
    }
  };

  checkImage = (imageSrc, good, bad) => {
    var img = new Image();
    img.onload = good;
    img.onerror = bad;
    img.src = imageSrc;
  };
  check_image_exists_in_server = (url) => {
    // var _url = url.replace(res.img_res, '1000X1000');

    return new Promise(async (resolve, reject) => {
      // create an XHR object
      await this.checkImage(
        url,
        () => {
          resolve(true);
        },
        () => {
          resolve(false);
        }
      );
    });
  };
  onErrorImage = async (event, largeImage) => {
    let _url = largeImage.replace("1000X1000", "2400X2400");
    let _notFound = `https://styloriimages-staging.s3.ap-south-1.amazonaws.com/product/1000X1000/productnotfound.webp`;
    return (await this.check_image_exists_in_server(_url)) ? _url : _notFound;
  };

  productImageZoom = (_isSilver) => {
    const { classes, data, customLimit, wishlist } = this.props;

    const limit = customLimit ? customLimit : 4;

    const { showimage, largeImage, showimageBig, largeImageBig } = this.state;
    const dataCarousel = {
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      // vertical: true,
      // verticalSwiping: true,
      arrows: false,
    };
    // alert(JSON.stringify(data.image_resolution))
    const props = {
      width: data[0]?.image_resolution ?? "",
      height: data[0]?.image_resolution ?? "",
      zoomWidth: data[0]?.image_resolution ?? "",
      img: `${showimage}`,
      zoomStyle: "z-index:2",
    };

    var a = showimage && showimage;
    // alert(JSON.stringify(this.props.data[0]))
    var b = a?.length > 0 && a?.split("/");
    // var c = a.replace(b[5], data[0].image_resolution_two + 'X' + data[0].image_resolution_two)
    var c = a?.length > 0 && a?.replace(b[5], "1000X1000");
    // alert(JSON.stringify(CDN_URL))consle
    // console.log(this.props.data[0].productId, "ssss");
    // //debugger;

    return (
      <div>
        {/* {JSON.stringify(showimage)} */}
        <Grid container justifyContent="center">
          <Grid item xs={10}>
            <div>
              <div
                className={_isSilver ? "imagecardSilver" : "imagecardSilver"}
                id="divs"
                style={{
                  display: "flex",
                  alignItem: "center",
                  width: "97%",
                }}
              >
                {this.handleVideoCheck(showimage) ? (
                  <video
                    preload="auto"
                    autoplay
                    width="100%"
                    controls
                    style={{ verticalAlign: "bottom" }}
                  >
                    <source src={showimage} type="video/mp4" />
                  </video>
                ) : (
                    <div
                      style={{
                        boxShadow: "4px 4px 4px #a5a4a5",
                        border: "1px solid #1a181866",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: "10px",
                          zIndex: "999",
                        }}
                      >
                        <Wishlist
                          sku={data[0]?.skuId ?? ""}
                          productId={data[0]?.productId}
                          wishlist={wishlist}
                        />
                      </div>
                      <GlassMagnifier
                        imageSrc={[
                          largeImage,
                          showimageBig,
                          `https://styloriimages-staging.s3.ap-south-1.amazonaws.com/product/1000X1000/productnotfound.webp`,
                        ]}
                        // imageSrc={largeImage}
                        // onImageLoad={this.imageSrc=`${CDN_URL}product/1000X1000/productnotfound.webp`}
                        imageAlt="Stylori"
                        magnifierSize={this.props.isSilver ? "40%" : "50%"}
                        largeImageSrc={[
                          largeImage,
                          largeImageBig,
                          `https://styloriimages-staging.s3.ap-south-1.amazonaws.com/product/2400X2400/productnotfound.webp`,
                          `https://styloriimages-staging.s3.ap-south-1.amazonaws.com/product/1000X1000/productnotfound.webp`,
                        ]}
                        magnifierBoxShadow="4px 4px 4px #a5a4a5"
                        magnifierBorderColor={
                          this.props.isSilver ? "rgb(58,69,120)" : "#f5003240"
                        }
                      // magnifierBackgroundColor="#f5003240"
                      />
                    </div>
                  )}
              </div>

              {/*              
              <div className='imagecard' id="divs" style={{height: window.innerWidth>2250?"800px":data[0].image_resolution }} onMouseOut={event => this.zoomOut(event)} onMouseMove={event => this.zoomIn(event)}>
               
                {data.map(val=>
                  <span style={{ color: "#fff" }} className="overlayCss">
                  {val.offerDiscount}
                   </span>)}
                   {data[0].ProductContactNum[0].isReadyToShip == true ? <div class="one-day-ship" ></div> : ""}
                <img id="imgZoom" width="100%" height="100%" className={`${showimage ? '' : 'shine'}`} src={showimage} alt="" />
              </div>

              <div className='overly-img' id="overlay"
                style={{ backgroundImage: `url(${c})`, height: data[0].image_resolution }} onMouseOut={event => this.zoomOut(event)}></div> */}

              <div></div>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          style={{
            paddingTop: "20px",
          }}
        >
          <Grid item xs={12}>
            <Grid container>
              <Grid
                item
                xs={1}
                style={{ display: "flex", alignSelf: "center" }}
              >
                {data &&
                  data.length > 0 &&
                  data[0] &&
                  data[0].fadeImages.arrOfurls.length > 3 ? (
                    <span
                      className={
                        data &&
                          data.length > 0 &&
                          data[0] &&
                          data[0].fadeImages.arrOfurls.length === 4
                          ? classes.cursor_notallowed
                          : null
                      }
                    >
                      <IconButton size="small" onClick={this.previous}>
                        <ArrowLeft
                          style={{
                            color: "#A66E1D",
                            fontSize: "40px",
                          }}
                        />
                      </IconButton>
                    </span>
                  ) : null}
              </Grid>
              <Grid item xs={10}>
                <Slideshow
                  sliderRef={this.slider}
                  getmsg={this.getimage}
                  class={
                    this.props.isSilver
                      ? "vertical-carousel-silver"
                      : `vertical-carousel`
                  }
                  imgClass="vertical-carousel-img"
                  fadeImages={data[0]?.fadeImages?.arrOfurls_2X}
                  dataCarousel={dataCarousel}
                  currentImage={this.state.showimage}
                />
              </Grid>
              <Grid
                item
                xs={1}
                style={{ display: "flex", alignSelf: "center" }}
              >
                {data &&
                  data.length > 0 &&
                  data[0] &&
                  data[0].fadeImages.arrOfurls.length > 3 ? (
                    <span
                      className={
                        data &&
                          data.length > 0 &&
                          data[0] &&
                          data[0].fadeImages.arrOfurls.length === 4
                          ? classes.cursor_notallowed
                          : null
                      }
                    >
                      <IconButton size="small" onClick={this.next}>
                        <ArrowRight
                          style={{
                            color: "#A66E1D",
                            fontSize: "40px",
                          }}
                        />
                      </IconButton>
                    </span>
                  ) : null}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };

  next = () => {
    this.slider.current.slickNext();
  };
  previous = () => {
    this.slider.current.slickPrev();
  };
  handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    this.setState({ backgroundPosition: `${x}% ${y}%` });
  };

  zoomIn = (event) => {
    var element = document.getElementById("overlay");
    element.style.display = "inline-block";
    var img = document.getElementById("imgZoom");
    var posX = event.offsetX ? event.offsetX : event.pageX - img.offsetLeft;
    var posY = event.offsetY ? event.offsetY : event.pageY - img.offsetTop;
    element.style.backgroundPosition = -posX + 50 + "px " + (-posY + 50) + "px";
  };

  zoomOut = () => {
    var element = document.getElementById("overlay");
    element.style.display = "none";
  };

  getimage = (e) => {
    this.setState({
      showimage: e.target.src,
      largeImage: e.target.src,
    });
  };

  render() {
    const _isSilver = this.props.isSilver ? true : false;
    return (
      <div>
        <Hidden smDown>{this.productImageZoom(_isSilver)}</Hidden>
      </div>
    );
  }
}
ProductImageZoom.propTypes = {
  next: PropTypes.func,
  previous: PropTypes.func,
  handleMouseMove: PropTypes.func,
  zoomIn: PropTypes.func,
  zoomOut: PropTypes.func,
  getimage: PropTypes.func,
  productImageZoom: PropTypes.func,
};
export default withStyles(styles)(ProductImageZoom);
