import { Container, Grid, Hidden } from "@material-ui/core";
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
    
   
    const fadeImages =
      this.props.datalisting &&
      this.props.datalisting &&
      this.props.datalisting.length > 0
        ? this.props.datalisting.map((val) => {
            if (
              val &&
              val.image &&
              val.image.placeImage &&
              val.image.placeImage.img
            )
              return val.image.placeImage.img;
            else
              return "https://assets.stylori.com/product/SP0384/1000X1000/SP0384-1W.webp";
          })
        : [
            "https://assets.stylori.com/product/SP0384/500X500/SP0384-1W.webp",
            "https://assets.stylori.com/product/SR0783/500X500/SR0783-1Y.webp",
            "https://assets.stylori.com/product/SR0367/500X500/SR0367-1Y.webp",
            "https://assets.stylori.com/product/SE0891/500X500/SE0891-1Y.webp",
          ];

    fadeImages.sort((a, b) => 0.5 - Math.random());
    // const dummydescription =

    const datadescription =
      this?.props?.data[0]?.seoText?.length > 0
        ? this.props.data[0].seoText
        : " ";
   

    return (
      <>
        <Container maxWidth="lg">
          <Grid
            style={{ marginTop: "15px", textAlign: "center" }}
            container
            direction="row"
            justify="space-around"
          >
            <Grid item container></Grid>
            <Grid item container alignItems="center">
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ textAlign: "center" }}
              >
                <Hidden smDown>
                  <p>
                    <div className="DescriptionContent">
                      {this.state.showLess === true ? (
                        <>
                          <span
                            id="moreDots"
                            style={{
                              display: "inline",
                              lineHeight: "19px",
                              fontSize: "14px",
                            }}
                          >
                            {datadescription.slice(0, 320)}...
                          </span>

                          <p
                            style={{
                              fontSize: "12px",
                            }}
                            onClick={this.handleReadMore}
                            className={`know-txt ${classes.colorLight}`}
                            id="readMore"
                          >
                            {/* <span ><i className="fa faMore">&#xf0da;</i></span> */}
                            READ MORE
                          </p>
                        </>
                      ) : (
                        <>
                          <span
                            style={{
                              display: "inline",
                              lineHeight: "19px",
                              fontSize: "14px",
                            }}
                          >
                            {datadescription}
                          </span>

                          <p
                            onClick={this.handleReadMore}
                            className={`know-txt ${classes.colorLight}`}
                            id="readLess"
                          >
                           
                            READ LESS
                          </p>
                          <br />
                        </>
                      )}
                    </div>
                  </p>
                </Hidden>
                <Hidden mdUp>
                  <p>
                    <div className="DescriptionContent">
                      {this.state.showLess === true ? (
                        <>
                          <span
                            id="moreDots"
                            style={{
                              display: "inline",
                              lineHeight: "19px",
                              fontSize: "12px",
                            }}
                          >
                            {datadescription.slice(0, 320)}...
                          </span>

                          <p
                            style={{
                              fontSize: "10px",
                            }}
                            onClick={this.handleReadMore}
                            className={`know-txt ${classes.colorLight}`}
                            id="readMore"
                          >
                            
                            {datadescription.length > 320 ? "READ MORE" : ""}
                          </p>
                        </>
                      ) : (
                        <>
                          <span
                            style={{
                              display: "inline",
                              lineHeight: "19px",
                              fontSize: "12px",
                            }}
                          >
                            {datadescription}
                          </span>

                          <p
                            onClick={this.handleReadMore}
                            className={`know-txt ${classes.colorLight}`}
                            id="readLess"
                          >
                            
                            {datadescription.length > 320 ? "READ LESS" : ""}
                          </p>
                          <br />
                        </>
                      )}
                    </div>
                  </p>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}
export default withRouter(withStyles(styles)(ProductDescription));
