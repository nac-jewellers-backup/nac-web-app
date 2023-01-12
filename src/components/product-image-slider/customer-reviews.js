import { Grid, Hidden } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Slideshow from "components/Carousel/carosul";
import { ProductDetailContext } from "context/ProductDetailContext";
import productDetails from "mappers/productDetails";
import React from "react";
import "./product-images.css";
import styles from "./style";

const Star = ({ selected = false, onClick = (f) => f }) => (
  <div>
    {selected ? (
      <div class="star-rating">
        <input type="radio" />
        <label for="1-stars" class="star">
          &#9733;
        </label>
      </div>
    ) : (
      <div class="star-rating">
        <input type="radio" />
        <div for="1-stars">&#9733;</div>
      </div>
    )}
  </div>
);

class CustomerReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starsSelected: "",
      expanded: "panel1",
    };
  }

  handleChange = (panel) => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  rat_map_titlesm = () =>
    this.props.rating &&
    this.props.rating.CodData &&
    this.props.rating.CodData.data &&
    this.props.rating.CodData.data.allCustomerReviews &&
    this.props.rating.CodData.data.allCustomerReviews.nodes.map((val) => {
      var value;
      if (
        (val.title !== "" && val.title !== undefined && val.title !== null) ||
        (val.message !== "" &&
          val.message !== undefined &&
          val.message !== null) ||
        (val.rating !== "" && val.rating !== undefined && val.rating !== null)
      ) {
        value = (
          <>
            
            <button
              style={{
                borderRadius: "0px",
                textTransform: "none",
                border: "1px solid #2F348B",
                textAlign: "center",
                marginRight: " 5px",
                minWidth: "100px",
                fontSize: "13px",
                padding: "10px 17px",
                fontFamily: "notoSerif-regular",
                backgroundColor: "#3B4579",
                boxShadow: "4px 5px 6px #BEBFBF ",
                color: "white",
                marginTop: "8px",
              }}
              type="submit"
            >
              {/* VIEW REVIEWS */}
              REVIEWS
            </button>
            <div style={{ display: "flex", marginTop: "15px" }}>
              <div
                style={{
                  fontSize: "15px",
                  // marginBottom: "5px",
                  paddingRight: "8px",
                  color: "gray",
                  fontWeight: "bold",
                }}
              >
                {val.customerName}
              </div>
            </div>
            <div style={{ display: "flex" }}>
              {[1, 2, 3, 4, 5].map((n, i) => (
                <Star
                  key={i}
                  selected={i < val.rating}
                  onClick={() => this.change(i + 1)}
                />
              ))}
            </div>

            <div
              style={{
                width: "100%",
                color: "gray",
                fontSize: "14px",
                marginBottom: "5px",
                paddingTop: "8px",
              }}
            >
              {val.message}
            </div>
          </>
        );
      }
      return value;
    });
  rat_map_title = () =>
    this.props.rating &&
    this.props.rating.CodData &&
    this.props.rating.CodData.data &&
    this.props.rating.CodData.data.allCustomerReviews &&
    this.props.rating.CodData.data.allCustomerReviews.nodes.map((val) => {
      var value;
      if (
        (val.title !== "" && val.title !== undefined && val.title !== null) ||
        (val.message !== "" &&
          val.message !== undefined &&
          val.message !== null) ||
        (val.rating !== "" && val.rating !== undefined && val.rating !== null)
      ) {
        value = (
          <>
            <div style={{ display: "flex" }}>
              {[1, 2, 3, 4, 5].map((n, i) => (
                <Star
                  key={i}
                  selected={i < val.rating}
                  onClick={() => this.change(i + 1)}
                />
              ))}
            </div>
            <div
              style={{ width: "100%", fontSize: "16px", marginBottom: "5px" }}
            >
              {val.customerName}
            </div>
            <div
              style={{ width: "100%", fontSize: "14px", marginBottom: "5px" }}
            >
              {val.message}
            </div>

            <br />
            <div className="brder-btom"></div>
          </>
        );
      }
      return value;
    });

  next = () => {
    this.slider.current.slickNext();
  };
  previous = () => {
    this.slider.current.slickPrev();
  };
  render() {
    const ArrowLeft = (props) => {
      const { className, style, onClick } = props;
      return (
        <ArrowLeftIcon
          onClick={onClick}
          className={`${className} ${classes.collectionSection}`}
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

    const dataCarouselcollectionsSm = {
      arrows: true,
      dots: false,
      autoplay: true,
      infinite: true,
      accessibility: true,
      speed: 1000,
      // fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <ArrowLeft />,
      nextArrow: <ArrowRight />,
    };


    const { classes} = this.props;

    return (
      <div style={{ width: "100%" }}>
        {this.rat_map_title() ? (
          <>
            <Hidden smDown>
              {/* <Container style={{ paddingLeft: "15px", paddingRight: "15px", paddingTop: "5px" }}> */}
              <div style={{ padding: " 20px 0px 0px 0px !important" }}>
                <div className="reviews-header">
                  <span className={`reviews-customer ${classes.normalfonts}`}>
                   Reviews
                  </span>
                </div>
                <div className="reviews">
                  <span className={`data-reviews ${classes.normalfonts}`}>
                    <Grid
                      spacing={12}
                      container
                      style={{
                        justifyContent: "center",
                        padding: "2%",
                        lineHeight: "23px",
                      }}
                    >
                      <Grid item lg={12}>
                        {this.rat_map_title() ? (
                          this.rat_map_title()
                        ) : (
                          <div
                            style={{ textAlign: "center", fontWeight: "bold" }}
                          >
                            {" "}
                            No reviews found
                          </div>
                        )}
                      </Grid>
                    </Grid>
                  </span>
                </div>
              </div>
              {/* </Container> */}
            </Hidden>
            <Hidden mdUp>
              <div style={{ padding: " 20px 0px 0px 0px !important" }}>
                <div className="reviews">
                  <span className={`data-reviews ${classes.normalfonts}`}>
                    <Grid
                      spacing={12}
                      container
                      style={{
                        padding: "2%",
                        lineHeight: "23px",
                      }}
                    >
                      <Grid item xs={12}>
                        {this.rat_map_titlesm() ? (
                          <>
                            <Slideshow dataCarousel={dataCarouselcollectionsSm}>
                              {this.rat_map_titlesm()}
                            </Slideshow>
                          </>
                        ) : (
                          <div
                            style={{ textAlign: "center", fontWeight: "bold" }}
                          >
                            {" "}
                            No reviews found
                          </div>
                        )}
                      </Grid>
                    </Grid>
                  </span>
                </div>
              </div>
            </Hidden>
          </>
        ) : (
          " "
        )}
      </div>
    );
  }
}
const Components = (props) => {
  const {
    ProductDetailCtx: { filters, data, loading, error, rating },
  } = React.useContext(ProductDetailContext);
  const datas = data;
  let mapped = datas;
  if (!loading && !error) {
    mapped = productDetails(datas, rating);
  }
  if (Object.keys(mapped).length === 0)
    return (
      <div className="overall-loader">
        <div id="loading"></div>
      </div>
    );
  else {
    return (
      <CustomerReviews
        {...props}
        data={mapped}
        filters={filters}
        rating={rating}
      />
    );
  }
};
export default withStyles(styles)(Components);
