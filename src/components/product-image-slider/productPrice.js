import { Container, Grid, Hidden, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Slideshow from "../Carousel/carosul";
import Pricing from "../Pricing/index";
import "./product-images.css";
import styles from "./style";

const mobilecarousel = (props, val, wishlist) => {
  const { data, classes } = props;
  const ArrowLeft = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArrowLeftIcon
        className={`${className} ${classes.collectionSection}`}
        onClick={onClick}
        style={{ ...style, fill: "theme.palette.secondary.main !important" }}
      />
    );
  };
  const ArrowRight = (props) => {
    const { className, style, onClick } = props;
    return (
      <ArrowRightIcon
        className={`${className} ${classes.collectionSection}`}
        onClick={onClick}
        style={{ ...style, fill: "theme.palette.secondary.main !important" }}
      />
    );
  };
  const dataCarousel = {
    dots: false,
    infinite: false,
    speed: 1000,
    fade: true,
    arrows: true,
    dotsClass: "slickdev",
    className: "button__bar",
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };

  return (
    <Slideshow
      zindex="1000"
      class="middle"
      className="responseve-carousel testingcur"
      imgClass="responseve-carousel-img"
      fadeImages={data[0]?.fadeImages?.arrOfurls}
      dataCarousel={dataCarousel}
      videoControls={true}
    />
  );
};

const Productprice = (
  props,
  anchorEl,
  handleClick,
  handleClose,
  handleReadMore,
  viewMore
) => {
  // const [prodDesc, setProdDesc] = useState(false);
  const { data } = props;
  const { classes } = props;
  const open = anchorEl;
  var wishlist = props.wishlist;

  return (
    <div>
      {data.map((val) => (
        <>
          <Grid container spacing={12} sm={12} className={classes.pricedetails}>
            <Hidden mdUp>
              <div
                style={{
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                  marginTop: "18px",
                  borderBottom: "-5px",
                }}
                className="boxshadow"
              >
                {mobilecarousel(props, val, wishlist)}
              </div>
              <br />
            </Hidden>
            <Paper
              elevation={0}
              style={{ width: "100%", padding: "0px", margin: "0px " }}
            >
              <Grid container>
                <Grid item xs={12} lg={12} md={12}>
                  <div className="price-div">
                    <Hidden mdUp>
                      <Grid
                        container
                        spacing={12}
                        xs={12}
                        style={{ padding: 5 }}
                      >
                        <Grid container item xs={8}>
                          <h1
                            className={`pdp-title ${classes.title}`}
                            style={{ width: "100%" }}
                          >
                            {val?.title}
                          </h1>
                          <span className={`pdp-desc ${classes.dis} `}>
                            {val?.dis?.length > 30 && viewMore
                              ? val?.dis
                              : `${val?.dis?.substring(0, 30)}...`}
                            <span
                              className={`pdp-desc ${
                                viewMore ? "" : classes.disDescriptionPD
                              }`}
                            >
                              <span>
                                <span
                                  style={{
                                    float: "right",
                                    cursor: "pointer",
                                    color: "#33346D",
                                    fontSize: "10px",
                                    marginTop: "5px",
                                  }}
                                  onClick={() => {
                                    handleReadMore();
                                  }}
                                >
                                  {viewMore ? "" : "Read More"}
                                </span>
                              </span>
                            </span>
                          </span>
                        </Grid>

                        <Grid
                          container
                          item
                          xs={4}
                          alignContent="center"
                          alignItems="cennpm cache cleanter"
                        >
                          <Hidden mdUp>
                            <div className={classes.width}>
                              <Pricing
                                price={data[0]?.sellingPrice}
                                offerPrice={data[0]?.offerPrice}
                                offerDiscount={val?.offerDiscount}
                                pdpagesm={true}
                              ></Pricing>
                            </div>
                          </Hidden>
                        </Grid>
                      </Grid>
                    </Hidden>
                    <Hidden smDown>
                      <h1 className={`pdp-title ${classes.title} `}>
                        {val?.title}
                      </h1>
                    </Hidden>
                    <Hidden smDown>
                      <p
                        className={`pdp-desc ${classes.dis}`}
                        style={{ marginBottom: 0, paddingTop: "5px" }}
                      >
                        {val?.dis?.length > 100 && viewMore
                          ? val?.dis
                          : val?.dis.substring(0, 100)}
                        {/* {val.dis} */}
                        <span>
                          <p
                            className={`pdp-desc ${
                              viewMore ? "" : classes.disDescriptionPD
                            }`}
                          >
                            <span style={{ width: "80%" }}>
                              <span
                                style={{
                                  float: "right",
                                  cursor: "pointer",
                                  color: "#33346D",
                                }}
                                onClick={() => {
                                  handleReadMore();
                                }}
                              >
                                {viewMore ? "" : "Read More"}
                              </span>
                            </span>
                          </p>
                        </span>
                      </p>
                    </Hidden>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Hidden smDown>
            <div className={classes.width}>
              {data[0]?.price === data[0]?.offerPrice ? (
                <Pricing
                  offerPrice={data[0]?.offerPrice}
                  price={data[0]?.sellingPrice}
                  pdpage={true}
                ></Pricing>
              ) : (
                <Pricing
                  offerPrice={data[0]?.offerPrice}
                  price={data[0]?.sellingPrice}
                  pdpage={true}

                  // offerDiscount={val.offerDiscount}
                ></Pricing>
              )}
            </div>
          </Hidden>
        </>
      ))}
    </div>
  );
};

class ProductPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      share: false,
      heart: false,
      anchorEl: false,
      viewMore: false,
    };
  }
  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };
  handleReadMore = () => {
    this.setState({
      viewMore: !this.state.viewMore,
    });
  };
  handleClose = () => {
    this.setState({
      anchorEl: false,
    });
  };

  render() {
    const { anchorEl, viewMore } = this.state;
    // alert(JSON.stringify(this.props.wishlist))
    return (
      <div>
        <Hidden smDown>
          {Productprice(
            this.props,
            anchorEl,
            this.handleClick,
            this.handleClose,
            this.handleReadMore,
            viewMore
          )}
        </Hidden>

        <Hidden mdUp>
          <Container style={{ paddingBottom: "6px" }}>
            {Productprice(
              this.props,
              anchorEl,
              this.handleClick,
              this.handleClose,
              this.handleReadMore,
              viewMore
            )}
          </Container>
        </Hidden>
      </div>
    );
  }
}
ProductPrice.propTypes = {
  mobilecarousel: PropTypes.func,
  Productprice: PropTypes.func,
};
export default withStyles(styles)(ProductPrice);
