import { Container, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ProductDescription.css";
const styles = (theme) => ({
  colorLight: {
    color: "#33346D",
  },
  colorDark: {
    color: theme.palette.primary.dark,
    textTransform: "capitalize",
    fontSize: "1.1rem",
  },
  TypoDark: {
    color: theme.palette.primary.dark,
    textTransform: "capitalize",
    fontSize: "1.1rem !important",
    fontWeight: 600,
    letterSpacing: "1px",
  },
});

class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLess: true,
    };
  }
  handleReadMore = () => {
    this.setState({ showLess: !this.state.showLess });
  };

  render() {
    const { classes } = this.props;
    // let path = window.location.pathname.split('/').pop();
    var loc = this.props.location.pathname;

    var path = loc.split("/");
    var data_json = [
      { title: "home", url: "/" },
      { title: "jewellery", url: "/jewellery" },
    ];
    // const descriptionData = this.props.data;
    const settings = this.props.data && this.props.data[0] && this.props.data[0].dataCarousel;
    // const fadeImages = this.props.data && this.props.data[0] && this.props.data[0].carouselImage;
    const fadeImages =
      this.props.datalisting && this.props.datalisting && this.props.datalisting.length > 0
        ? this.props.datalisting.map((val) => {
            if (val && val.image && val.image.placeImage && val.image.placeImage.img) return val.image.placeImage.img;
            else return "https://assets.stylori.com/product/SP0384/1000X1000/SP0384-1W.webp";
          })
        : [
            "https://assets.stylori.com/product/SP0384/500X500/SP0384-1W.webp",
            "https://assets.stylori.com/product/SR0783/500X500/SR0783-1Y.webp",
            "https://assets.stylori.com/product/SR0367/500X500/SR0367-1Y.webp",
            "https://assets.stylori.com/product/SE0891/500X500/SE0891-1Y.webp",
          ];

    fadeImages.sort((a, b) => 0.5 - Math.random());
    const title = this.props.title;
    // const dummydescription =

    const datadescription =
      this?.props?.data[0]?.seoText?.length > 0
        ? this.props.data[0].seoText
        : " ";
    const renderTitle = () => {
      var pathname_split_hyphen = path[1].split("-");
      var a = window.location.pathname.split("/");
      // var b = a[1].split(/\-/g).map(val=>{return val.split(/\+/g)})
      var b = a[1].split(/\-/g).map((val) => {
        return val.replace(/\+/g, " ");
      });
      var c = b.map((val) => {
        return b + " ";
      });
      var d;
      return (d = c[0].replace(/\,/g, " "));
    };

    return (
      <>
        <Container maxWidth="lg">
          <Grid style={{ marginTop: "15px", textAlign: "center" }} container direction="row" justify="space-around">
            <Grid item container></Grid>
            <Grid item container alignItems="center">
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ textAlign: "center" }}>
                <p>
                  <div className="DescriptionContent">
                    {this.state.showLess === true ? (
                      <>
                        <span id="moreDots" style={{ display: "inline" }}>
                          {datadescription.slice(0, 320)}...
                        </span>

                        <p onClick={this.handleReadMore} className={`know-txt ${classes.colorLight}`} id="readMore">
                          {/* <span ><i className="fa faMore">&#xf0da;</i></span> */}
                          READ MORE
                        </p>
                      </>
                    ) : (
                      <>
                        {datadescription}

                        <p onClick={this.handleReadMore} className={`know-txt ${classes.colorLight}`} id="readLess">
                          {/* <span ><i className="fa faMore">&#xf0d8;</i></span>  */}
                          READ LESS
                        </p>
                        <br />
                      </>
                    )}
                  </div>
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}
export default withRouter(withStyles(styles)(ProductDescription));
