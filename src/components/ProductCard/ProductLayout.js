import { Button, GridList, GridListTile } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { FilterOptionsContext } from "context";
import React from "react";
import { withRouter } from "react-router";
import ProductCards from "./index";
const styles = (theme) => ({
  gridlistmain: {
    [theme.breakpoints.down("sm")]: {
      margin: "0px !important",
      marginTop: "10px !important",
    },
  },
  gridlistmainviewmore: {
    width: "100%",
    textAlign: "center",
    marginTop: "40px",
    marginBottom: "40px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "75px",
    },

    button: {
      margin: theme.spacing(1),
    },
  },
  viewmoreColor: {
    backgroundColor: "#2F348B",
    color: "white",
    padding: "6px 12px",
    "&:hover": {
      backgroundColor: "#2F348B",
      opacity: "0.8",
    },
  },
});
const ProductLayout = (props) => {
  const { setOffset, setFirst, FilterOptionsCtx } =
    React.useContext(FilterOptionsContext);
  return (
    <Component
      offset={FilterOptionsCtx.offset}
      setOffset={setOffset}
      setFirst={setFirst}
      loadingFilterCtx={FilterOptionsCtx.loadingfilters}
      {...props}
    />
  );
};

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colSize: window.innerWidth,
      loading: false,
      loadingtext: false,
    };
  }
  componentDidMount() {
    this.screenWidth();
    // Additionally I could have just used an arrow function for the binding `this` to the component...
    window.addEventListener("resize", this.screenWidth);
    
  }
  screenWidth = () => {
    const width = window.innerWidth;
    if (width > 2555) {
      this.setState({ colSize: 6 });
    } else if (width > 1440) {
      this.setState({ colSize: 4 });
    } else if (width > 1024) {
      this.setState({ colSize: 4 });
    } else if (width > 960) {
      this.setState({ colSize: 4 });
    } else if (width > 760) {
      this.setState({ colSize: 3 });
    } else if (width < 760) {
      this.setState({ colSize: 2 });
    }
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):

    if (this.props.data !== prevProps.data) {
      this.setState({ loadingtext: false });

     
    }
  }
  handleOffset = () => {
    const offsets = this.props.offset + 24;
    this.setState({ loadingtext: true });
    this.props.setOffset(offsets);
  };
  render() {
    const { classes, data } = this.props;   

    return (
      <>
        <div className={`productLayoutRoot `} style={this.props.styles}>
          {
            <>
              {this.props.loadingFilterCtx && (
                <div className="overall-loaders">
                  <div id="loadings">
                    <img
                      src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/NAC+nemonic+loader+gif+low+res.gif"
                      alt="loading..."
                      loading="lazy"
                    />
                  </div>
                </div>
              )}

              {this.props.loadingFilterCtx === false && (
                <>
                  <GridList
                    cellHeight={"auto"}
                    className={`productLayoutGridList ${classes.gridlistmain}`}
                    cols={this.state.colSize}
                    style={{ margin: "25px !important" }}
                  >
                    {data.map((tile, i, index) => {                       
                      if(tile.image.hoverImage.img !== tile.image.placeImage.img && (tile.image.hoverImage.img == "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/NAC+logo+mnemonic.png" || tile.image.placeImage.img == "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/NAC+logo+mnemonic.png")){
                        if(tile.image.hoverImage.img == "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/NAC+logo+mnemonic.png"){
                          tile.image.hoverImage.img = tile.image.placeImage.img
                        }
                        else{
                          tile.image.placeImage.img =  tile.image.hoverImage.img                         
                        }
                      }
                      return tile && Object.entries(tile).length > 0 ? (
                        <GridListTile
                          key={tile.title}
                          cols={tile.cols || 1}
                          style={{ padding: "0 !important" }}
                          className={`${classes.liClass}`}
                        >
                          {/* <ProductCard data={tile} /> */}
                          <ProductCards
                            index={index}
                            data={tile}
                            wishlist={this.props.wishlist}
                          />
                        </GridListTile>
                      ) : (
                        ""
                      );
                    })}
                  </GridList>

                  <div className={`${classes.gridlistmainviewmore}`}>
                    {this.state.loadingtext ? (
                      <div style={{ textAlign: "center" }}>Loading...</div>
                    ) : (
                      <>
                        {data && data.length !== 0 ? (
                          data[0] &&
                          data[0].totalCount &&
                          (data[0].totalCount - data.length === 0 ||
                            data[0].totalCount - data.length < 0) ? (
                            ""
                          ) : (
                            <Button
                              style={{
                                boxShadow: "6px 6px 6px #A5A4A5 ",
                                fontWeight: "bold",
                                borderRadius: "0px",
                              }}
                              variant="contained"
                              className={`${classes.button}  ${classes.viewmoreColor}`}
                              onClick={() => {
                                this.handleOffset();
                              }}
                              disabled={data && data.length < 24}
                            >
                              {data && data.length === 0 && `No products found`}
                             
                              SEE MORE
                              {data &&
                                data.length > 0 &&
                                data.length < 24 &&
                                `Only ${
                                  data && data.length > 0 && data[0]
                                    ? data[0].totalCount - data.length
                                    : ""
                                } products avalilable`}
                            </Button>
                          )
                        ) : (
                          <>
                            <div>No Products Found.</div>
                           
                            <a href="/jewellery">Try Again.</a>
                            
                          </>
                        )}
                      </>
                    )}
                  </div>
                </>
              )}
            </>
          }
        </div>
      </>
    );
  }
}

export default withRouter(
  withStyles(styles, { withTheme: true })(ProductLayout)
);
