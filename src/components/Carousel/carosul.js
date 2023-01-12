import PropTypes from "prop-types";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../product-image-slider/product-images.css";
import "./index.css";
class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
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

    if (url.length > 0) {
       // eslint-disable-next-line
      var array_split = url.split(/\.(?=[^\.]+$)/);
      const found = extensionVideoLists.find(
        (element) => element.toLowerCase() === array_split[1]
      );
      if (found) {
        return true;
      } else return false;
    } else {
      return false;
    }
  };
  renderFadeImages = () => {
    let { video } = this.props;
    return this.props.fadeImages
      ? this.props.fadeImages.map((imgs) => (
          <div
            className={` ${this.props.class ? this.props.class : ""}`}
            onClick={(e) => (this.props.getmsg ? this.props.getmsg(e) : "")}
          >
            {video || this.handleVideoCheck(imgs) ? (
              <video
                style={{ verticalAlign: "bottom", zIndex: this.props.zindex }}
                preload="auto"
                className={`${imgs ? "shine imgDiv2" : ""} ${
                  this.props.imgClass ? this.props.imgClass : ""
                }`}
                src={imgs}
                poster="https://assets.stylori.com/product/SP0195/500X500/HOVER-SP0195-2Y.webp"
                type="video/mp4"
                controls={this.props.videoControls}
              ></video>
            ) : (
              <img
                style={{ objectFit: "cover" }}
                className={`${imgs ? "imgDiv2" : "shine imgDiv2"} ${
                  this.props.imgClass ? this.props.imgClass : ""
                }`}
                src={imgs}
                loading="lazy" alt='...'
              />
            )}
          </div>
        ))
      : "";
  };

  imagehoverchildrens = (hoverlist) => {
    let { hover, hovereffect, TopPic,collectionhome } = this.props;
    if (TopPic) {
      return hoverlist.map((val) => (
        <div
          className={"subslider-carousel" + TopPic ? "hovereffectSilver" : ""}
        >
          <img
            src={val.img}
            className="subslider-carousel-img img-responsive"
            style={{ width: "100%", height: "100%" }}
            loading="lazy" alt='...'
          />
          <div className="overlay1">
            <div>
              <h2 className="next-price">{val.title}</h2>
              <br />
            </div>
          </div>
        </div>
      ));
    } else if (hovereffect) {
      return (
        hoverlist &&
        hoverlist.map((val) => (
          <div
            className={
              "subslider-carousel" + hovereffect ? "hovereffectSilver" : ""
            }
          >
            <img
              src={val.img}
              className="subslider-carousel-img img-responsive"
              style={{ width: "100%", height: "auto" }}
              loading="lazy" alt='...'
            />
            <div className="overlay1">
              <div style={{ paddingTop: "40%" }}>
                <h2 className="next-price">{val.title}</h2>
                <br />
                <h5 className="contenttext">{val.description}</h5>
                <a className="info" href={`/${val.url}`}>
                  <span className="shop">SHOP</span>
                </a>
              </div>
            </div>
          </div>
        ))
      );
    } else {
      return (
        hoverlist &&
        hoverlist.map((val) => {
          return (
            <a className="info" href={`/${val.url}`}>
              <div
                className={"subslider-carousel" + hover ? "hovereffect" : ""}
                style={{
                  height:
                    window.location.pathname === "/collectionhome"
                      ? "210px"
                      : "170px",
                }}
              >
                <img
                  src={val.img}
                  className="subslider-carousel-img img-responsive"
                  loading="lazy" alt='...'
                />
                <div
                  className="overlay1"
                  style={{
                    height:
                      window.location.pathname === "/collectionhome"
                        ? "210px"
                        : "170px",
                  }}
                >
                  <h2
                    className={`${
                      collectionhome ? "poscollectionHome" : "next-price"
                    }`}
                  >
                    {val.title}
                  </h2>
                  <br />
                  {val.price && (
                    <a className="info" href={`/${val.url}`}>
                      <span className="sub-list-price">
                        {" "}
                        <i className="fa fa-rupee"></i> &nbsp;{val.price}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </a>
          );
        })
      );
    }
  };
  imagewithouthoverchildrens = (hoverlist) => {
    return (
      <div
        className={"subslider-carousel-silver "}
        style={{ display: "block !important " }}
      >
        <img
          src={hoverlist.img}
          className="subslider-carousel-img-Silver img-responsive"
          style={{
            width: "auto !important",
            height: "auto",
            display: "block !important  ",
          }}
          loading="lazy" alt='...'
        />
      
      </div>
    );
  };

  render() {
  
    const { sliderRef } = this.props;
    var settings = this.props.dataCarousel;

    return (
      <div style={{ width: "100%" }}>
        <Slider ref={sliderRef} {...settings}>
          {this.props.children ? this.props.children : this.renderFadeImages()}
          {this.props.hover
            ? this.imagehoverchildrens(this.props.hoverlist)
            : ""}

          {this.props.hover
            ? this.imagehoverchildrens(this.props.hoverlist)
            : ""}
          {this.props.hovereffect
            ? this.imagehoverchildrens(this.props.hoverlist)
            : ""}
          {this.props.WithoutHoverhover
            ? this.imagewithouthoverchildrens(this.props.hoverlist)
            : ""}
          {this.props.TopPic
            ? this.imagehoverchildrens(this.props.hoverlist)
            : ""}
        </Slider>
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <Slideshow sliderRef={ref} {...props} />
));
Slideshow.propTypes = {
  settings: PropTypes.object.isRequired,
  fadeImages: PropTypes.array.isRequired,
};
