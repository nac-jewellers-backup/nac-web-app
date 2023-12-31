import { Grid, Hidden } from "@material-ui/core";

import Slideshow from "../../Carousel/carosul";
import React from "react";
import PropTypes from "prop-types";
import "./product-images.css";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../Header/styles";
import ReactImageZoom from "react-image-zoom";

import Gagetstylori from "./Gagetstylori/Gagetstylori";


class ProductImageZoom extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.slider = React.createRef();
  }
  state = {
    // backgroundImage: `url(${src})`,
    backgroundPosition: "0% 0%",
    showimage: this.props.data[0].fadeImages[0],
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.data[0].fadeImages[0] !== prevProps.data[0].fadeImages[0]) {
      this.setState({ showimage: this.props.data[0].fadeImages[0] });
    }
  }

  productImageZoom = () => {
    const { classes, data } = this.props;

    const limit = 3;
    const { showimage } = this.state;
    const dataCarousel = {
      infinite: false,
      slidesToShow:
        data[0] && data[0].fadeImages.length > 3
          ? limit
          : data[0].fadeImages.length,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      arrows: false,
    };
    const props = {
      width: data[0].image_resolution,
      height: data[0].image_resolution,
      zoomWidth: data[0].image_resolution,
      img: `${showimage}`,
      zoomStyle: "z-index:2",
    };

    return (
      <div>
        <Grid container spacing={12} style={{ paddingRight: "20px" }}>
          <Grid item xs={2}>
            <div
              style={{ textAlign: "center" }}
              className="imgzom-sidecraousel-media"
            >
             
              <Slideshow
                sliderRef={this.slider}
                getmsg={this.getimage}
                class="vertical-carousel"
                imgClass="vertical-carousel-img"
                fadeImages={data[0].fadeImages}
                dataCarousel={dataCarousel}
              />
            
            </div>
          </Grid>

          <Grid item xs={10}>
            <div>
              
              <div
                class="zoomreact"
                style={{
                  boxShadow:
                    "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
                  width: "100%",
                }}
              >
                <ReactImageZoom {...props} />
              </div>
              <div>
                <Grid container spacing={12}>
                 
                </Grid>
              </div>
            </div>
            <Grid container>
              <Grid
                item
                style={{
                  width: "100%",
                  padding: "0px 15px",
                  marginTop: "10px",
                }}
              >
                <Gagetstylori />
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
    element.style.backgroundPosition = -posX - 40 + "px " + (-posY - 40) + "px";
  };

  zoomOut = () => {
    var element = document.getElementById("overlay");
    element.style.display = "none";
  };

  getimage = (e) => {
    this.setState({
      showimage: e.target.src,
    });
  };
  render() {
    return (
      <div>
        <Hidden smDown>{this.productImageZoom()}</Hidden>
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
