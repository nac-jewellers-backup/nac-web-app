import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Hidden } from "@material-ui/core";
import "./productCard.css";
import { CDN_URL } from "config";


import { ProductDetailContext } from "context";
import { LazyLoadImage, trackWindowScroll } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Wishlist from "components/wishlist/wishlist";

export const ImgMediaCard = (props) => {
  const { ProductDetailCtx, setFilters } = React.useContext(ProductDetailContext);
  const loc = window.location.search;

  return <Component filters={ProductDetailCtx.filters} setFilters={setFilters} {...props} />;
};
// const MyImage = ( props, callmouseover, callmouseout, cardstate ) => {
//   return(

//   <LazyLoadImage
//     alt={'props.data.title'}
//     effect="blur"
//     srcset={renderImages(props, cardstate)}
//     sizes="(max-width: 320px) 320w,
//             (max-width: 480px) 375w,
//             (max-width: 600px) 600w,
//             (max-width: 992px) 768w,
//             (max-width: 1440px) 1440w,
//             (max-width: 2560px) 2560w,
//             2560w

// "
// title={props.data.title}
// onMouseOver={() => {
//  callmouseover()
// }}
// onMouseOut={() => {
//   callmouseout()
// }}
// style={{width:'100%',height:'100%'}}
// visibleByDefault={renderImages(props, cardstate) === 'https://alpha-assets.stylori.com/276x276/images/static/Image_Not_Available.jpg'}
//     />
// );
// }
const imageOnError = (event, res) => {
  // var e = event
  // e.target.src.lastIndexOf('\.')
  // var src_img = (e.target.src).lastIndexOf('\.')
  // var _arr = e.target.src.split('/')
  // _arr.splice(_arr.length - 2, 1, '1000X1000')
  // const URL_1000x1000 = _arr.join('/')
  // var URL_JPG = (e.target.src).substr(0, src_img).concat('.jpg')

  // try {

  //   var _image = ''
  //   e.target.onerror = null;

  //   const testImage = (URL, e) => {
  //     var tester = new Image();
  //     tester.src = URL;
  //     tester.onload = imageFound;
  //     tester.onerror = imageNotFound;
  //     // tester.on("error" , imageNotFound)

  //   }
  //   const imageFound = (e) => {
  //     e.target.src = URL_1000x1000

  //   }
  //   const imageNotFound = (e) => {
  //     e.target.src = `${CDN_URL}product/${res.img_res}X${res.img_res}/productnotfound.webp`

  //   }
  //   return testImage(URL_1000x1000, e);
  //   // e.target.src = (e.target.src).substr(0, src_img).concat('.jpg')
  // } catch (error) {
  //   console.log(error)
  // }
  event.target.src = `${CDN_URL}product/${res.img_res}X${res.img_res}/productnotfound.webp`;
};
const Gallery = (props, callmouseover, callmouseout, cardstate, scrollPosition) => {
  return (
    <div className="imageHeight" style={{ position: "relative" }}>
      {/* {props.data.oneDayShipping ? <div class={Math.round(props.data.offerPrice) === Math.round(props.data.price) ? "one-day-ship-listing-page-withoutTop" : "one-day-ship-listing-page"} style={{ zIndex: 2 }}>
        <i class="fa fa-truck" style={{ fontSize: "20px" }}></i>
        <span class="one-day-ship-listing-page-label">1 day shipping</span>

      </div> : ''}
      {
        Math.round(props.data.offerPrice) === Math.round(props.data.price) ? '' :
          <>
            <span className="overlayCss" style={{ zIndex: 10, color: "#fff", backgroundColor: "#f699a3" }}>

              {`${props.data.discount} % off`}

            </span>
          </>
      } */}

      {/* <Grid container >
        <Grid item lg={1}>
        {
            Math.round(props.data.offerPrice) === Math.round(props.data.price) ? '' :
              <>
                <span style={{ zIndex: 10, color: "#fff", backgroundColor: "#f699a3" }}>
                  < div class="one-day-ship-listing-page__" > {`${props.data.discount}%`} < br /> {"OFF"}</div>
                </span>
              </>
          } 
        </Grid>
        <Grid item lg={4}>
        {props.data.oneDayShipping ? <div class={Math.round(props.data.offerPrice) === Math.round(props.data.price) ? "one-day-ship-listing-page-withoutTop" : "one-day-ship-listing-page"} style={{ zIndex: 2 }}>
            <i class="fa fa-truck" style={{ fontSize: "20px" }}></i>
            <span class="one-day-ship-listing-page-label">1 day shipping</span>
          </div> : ''}
        </Grid>
      </Grid> */}

      <div class="wishListStyle" style={{ padding: 10 }}>
        <i class="fa fa-heart overall-icons" style={{ color: "gray" }}></i>
        {/* <Wishlist sku={props.data.skuId} productId={props.data.productId} wishlist={props.wishlist} /> */}
      </div>
      <Link
        className={"cardImage"}
        to={{ pathname: `/jewellery/earrings?skuid=${props.data.skuID ?? ""}` }}
        style={{ textDecoration: "none" }}
        target="_blank"
        onClick={handleProductDetatiContext(props)}
      >
        <LazyLoadImage
          alt={"props.data.title"}
          effect="blur"
          src={renderImages(props, cardstate)}
          //  srcset={renderImages(props, cardstate)}
          //      sizes="(max-width: 320px) 320w,
          //              (max-width: 480px) 375w,
          //              (max-width: 600px) 600w,
          //              (max-width: 992px) 768w,
          //              (max-width: 1440px) 1440w,
          //              (max-width: 2560px) 2560w,
          //              2560w

          //  "
          onError={(e) => imageOnError(e, props.data.imageResolution)}
          title={props.data.title.charAt(0).toUpperCase() + props.data.title.slice(1)}
          onMouseOver={
            !props.hoverText
              ? () => {
                  callmouseover();
                }
              : () => {
                  return null;
                }
          }
          onMouseOut={
            !props.hoverText
              ? () => {
                  callmouseout();
                }
              : () => {
                  return null;
                }
          }
          style={{ width: "100%" }}
          scrollPosition={scrollPosition}

          // If the image we are creating here has the same src than before,
          // we can directly display it with no need to lazy-load.
          // onerror={this.src=}
          // placeholderSrc={renderImages(props, cardstate) === '' ? 'https://alpha-assets.stylori.com/1000x1000/images/static/Image_Not_Available.jpg' : ''}
          // placeholder	= { <div >loading.....</div> }
        ></LazyLoadImage>
        {props.hoverText && <div className="overlayImage">{props.data.description}</div>}
      </Link>
    </div>
  );
};
// onLoad={(e)=>e.target.src=e.target.style.background='url(https://alpha-assets.stylori.com/images/static/loadingimg.gif') center center / 25% 25% no-repeat rgb(255, 255, 255);'}
export default trackWindowScroll(Gallery);
// <img
// srcset={renderImages(props, cardstate)}
// sizes="(max-width: 320px) 320w,
//             (max-width: 480px) 375w,
//             (max-width: 600px) 600w,
//             (max-width: 992px) 768w,
//             (max-width: 1440px) 1440w,
//             (max-width: 2560px) 2560w,
//             2560w

// "
//      alt=""
//           title={props.data.title}
//           onMouseOver={() => {
//             setCardState({ ...cardstate, hovered: !cardstate.hovered });
//           }}
//           onMouseOut={() => {
//             setCardState({ ...cardstate, hovered: !cardstate.hovered });
//           }}
//           style={{width:'100%',height:'100%'}}
//           className={`${props.data.image.placeImage.length === 0 || props.data.image.hoverImage.length === 0 ? 'shine' : '' }`}

//           />
const handleProductDetatiContext = (props) => {
  props.filters["defaultVariants"]["diamondType"] = props.data.diamondType;
  props.filters["defaultVariants"]["metalColor"] = props.data.metalColor;
  props.filters["defaultVariants"]["purity"] = props.data.purity;
  props.filters["defaultVariants"]["skuSize"] = props.data.skuSize;
  // props.filters['defaultVariants']['productType'] = props.data.productType
  // props.filters['skuId'] = props.data.generatedSku
  props.filters["skuId"] = props.data.skuID;
  props.setFilters(props.filters);
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: 0,
  },
  card: {
    minWidth: "90%",
    maxWidth: "90%",
    boxShadow: "6px 7px 6px #bebfbf !important",
    margin: "10px 0px ",
    borderRadius: "0 !important",
    border: "1px solid #bebfbf70",
  },
  cardAtionspadding: {
    padding: 0,
    margin: 0,
  },
  textDel: {
    color: "#828282",
  },
  priceClass: {
    padding: "10px",
    height: "40px",
    backgroundColor: "#c8ced480",
    display: "flex",
    boxShadow: " 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    borderRadius: "0 !important",
    opacity: "1.2",
    "&:hover": {
      boxShadow: "40 0 11px rgba(33,33,33,.2)",
      cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
      height: "40px",
      padding: "0 !important",
    },
    "& div": {
      padding: "0 !important",
    },
  },
  priceClassMain: {
    margin: "auto !important",
  },
  offerMainPrice: {
    color: "gray",
    fontWeight: "bold",
    fontSize: "15px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
    },

    "& i": {
      fontSize: "26px",
      paddingRight: "5px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
      },
    },
  },
  discountPercentage: {
    color: "#b78231",
    fontWeight: "bold",
    fontSize: "15px !important",

    [theme.breakpoints.down("sm")]: {
      fontSize: "11px !important",
    },
  },
  offerPrice: {
    fontSize: "0.74rem",
    lineHeight: 0,
    color: "#828282",
    // fontWeight: "bold",
    width: "fit-content",
    // flex: 0.7,
    textAlign: "center",
    padding: 5,
    "&:span": {
      margin: 0,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      padding: "0 !important",
      paddingTop: "4px !important",
      paddingBottom: "4px !important",
      padding: 5,
    },
  },
  youSave: {
    fontSize: "0.8rem",
    color: "#828282",
    "&:span": {
      margin: 0,
      marginBottom: 0,
    },
  },
  cardContent: {
    // margin: "auto"
    width: "100%",
  },
  textPriceCardGrid: {
    display: "flex",
    width: "100%",
  },
  priceOffGridsub: {
    flex: 1,
    display: "flex",
  },
  priceOffGrid: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  youSavePrice: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#ed1165",
    borderRadius: "3px",
    width: "40%",
    flex: 0.7,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      // flex: 0.3,
      borderRadius: "3px",
      fontWeight: "normal",
      fontSize: "0.7rem",
    },
  },
  offerPricesMain: {
    flex: 1,
    display: "flex",
  },
  titles: {
    fontSize: "0.7rem",
    whiteSpace: "nowrap",
    // flex: 0.6,
    color: "gray",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "90%",
  },
  hashtags: {
    fontSize: "0.7rem",
    whiteSpace: "nowrap",
    color: "#5d5d5d",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "90%",
  },
  iconColor: {
    color: theme.palette.secondary.light,
  },
  cardActionsImage: {
    margin: 0,
    [theme.breakpoints.down("md")]: {
      // height: '200px !important'
    },
  },
  strikeText: {
    fontSize: "12px",
    color: "#5d5d5d",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px !important",
    },
  },
  totalPriceMob: {
    fontSize: "13px",
  },
}));
const renderImages = (props, cardstate) => {
  if (props.static) {
    return props.image;
  } else {
    const filterType = cardstate.hovered ? "hoverImage" : "placeImage";

    // console.info('props.data.image[filterType]',props.data.image[filterType]);
    // return props.data.image['hoverImage'].length === 0 ?"https://alpha-assets.stylori.com/1000x1000/images/static/Image_Not_Available.jpg" : props.data.image[filterType].map(imgs => `${imgs.img} ${imgs.size}`).toString()
    return props.data && props.data.image && props.data.image["hoverImage"] && props.data.image["hoverImage"].length === 0
      ? "https://alpha-assets.stylori.com/1000x1000/images/static/Image_Not_Available.jpg"
      : props.data.image[filterType].img;
  }
};

function Component(props) {
  const classes = useStyles();
  const [cardstate, setCardState] = React.useState({
    hovered: false,
    loaded: false,
    dataLoaded: true,
  });
  // const _height = props.data.imageResolution.img_res
  const callmouseover = () => {
    setCardState({ ...cardstate, hovered: !cardstate.hovered });
  };
  const callmouseout = () => {
    setCardState({ ...cardstate, hovered: !cardstate.hovered });
  };

  return (
    <div className={classes.root} style={{ marginLeft: "0px !important" }}>
      <Card className={classes.card} style={{ marginLeft: "0px !important" }}>
        <CardActions style={{}} className={`${classes.cardAtionspadding} ${classes.cardActionsImage}`}>
          {Gallery(props, callmouseover, callmouseout, cardstate)}
        </CardActions>
        <Card className={classes.priceClass}>
          {Math.round(props.data.offerPrice) === Math.round(props.data.price) ? (
            <CardContent className={classes.cardContent} style={{ display: "flex" }}>
              <Grid container item xs={12} className={classes.textPriceCardGrid} alignItems="center">
                <Hidden smDown>
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    className={`${classes.priceClassMain}`}
                    style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}
                  >
                    <Grid items>
                      <Typography
                        variant="h6"
                        component="h6"
                        className={classes.offerMainPrice}
                        style={{
                          justifyContent: "flex-start",
                          display: "flex",
                          paddingLeft: "5px",
                        }}
                      >
                        {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 }).format(
                          Math.round(props.data.offerPrice)
                        )}
                        <span style={{ display: "flex", alignSelf: "center" }}>
                          {" "}
                          <Typography
                            className={classes.strikeText}
                            style={{
                              paddingLeft: "6px",
                            }}
                          >
                            <s style={{ color: "#5d5d5d" }}>
                              {Math.round(props.data.offerPrice) - Math.round(props.data.price) === 0
                                ? ""
                                : Math.round(props.data.price)}
                            </s>
                          </Typography>
                        </span>
                      </Typography>
                    </Grid>

                    <Grid items>
                      <Typography className={classes.discountPercentage}>
                        {" "}
                        {Math.round((100 * props.data.offerPrice) / props.data.price) === 100
                          ? ""
                          : `${100 - Math.round((100 * props.data.offerPrice) / props.data.price)}% OFF`}
                        &nbsp;&nbsp;
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container xs={12}>
                    <Typography variant="body1" component="span" style={{ paddingLeft: "5px" }} className={`${classes.titles}`}>
                      {props.data.title.charAt(0).toUpperCase() + props.data.title.slice(1)}
                    </Typography>
                  </Grid>
                </Hidden>
                <Hidden mdUp>
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    className={`${classes.priceClassMain}`}
                    style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}
                  >
                    <Grid items>
                      <Typography
                        variant="h6"
                        component="h6"
                        className={classes.offerMainPrice}
                        style={{
                          justifyContent: "flex-start",
                          display: "flex",
                          paddingLeft: "5px",
                        }}
                      >
                        {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 }).format(
                          Math.round(props.data.offerPrice)
                        )}
                        <span style={{ display: "flex", alignSelf: "center" }}>
                          {" "}
                          <Typography
                            className={classes.strikeText}
                            style={{
                              paddingLeft: "6px",
                            }}
                          >
                            <s style={{ color: "#5d5d5d" }}>
                              {" "}
                              {Math.round(props.data.offerPrice) - Math.round(props.data.price) === 0
                                ? ""
                                : Math.round(props.data.price)}
                            </s>
                          </Typography>
                        </span>
                      </Typography>
                    </Grid>

                    <Grid items>
                      <Typography className={classes.discountPercentage}>
                        {Math.round((100 * props.data.offerPrice) / props.data.price) === 100
                          ? ""
                          : `${100 - Math.round((100 * props.data.offerPrice) / props.data.price)}% OFF`}
                        &nbsp;&nbsp;
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container xs={12}>
                    <Typography variant="body1" component="span" style={{ paddingLeft: "5px" }} className={`${classes.titles}`}>
                      {props.data.title.charAt(0).toUpperCase() + props.data.title.slice(1)}
                    </Typography>
                  </Grid>
                </Hidden>
              </Grid>
            </CardContent>
          ) : (
            <CardContent className={classes.cardContent}>
              <Grid container item xs={12} className={classes.textPriceCardGrid} alignItems="center">
                <Grid container item xs={12} sm={12} className={`${classes.priceClassMain}`}>
                  <Typography
                    variant="h6"
                    component="h6"
                    className={classes.offerMainPrice}
                    style={{
                      width: "100%",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingLeft: "5px",
                    }}
                  >
                    {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 }).format(
                      Math.round(props.static ? 25076 : props.data.offerPrice)
                    )}
                  </Typography>

                  <Grid container xs={12}>
                    <Typography variant="body1" component="span" style={{ paddingLeft: "5px" }} className={`${classes.titles}`}>
                      {props.static ? "Jazzy Gypsy Diamond Hoop Earrings" : props.data.title.charAt(0).toUpperCase() + props.data.title.slice(1)}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          )}
        </Card>
      </Card>
    </div>
  );
}
