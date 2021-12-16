import { Hidden } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Wishlist from "components/wishlist/wishlist";
import { CDN_URL } from "config";
import { ProductDetailContext } from "context";
import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import "./productCard.css";

export const ImgMediaCard = (props) => {
  const { ProductDetailCtx, setFilters } =
    React.useContext(ProductDetailContext);
  const loc = window.location.search;
  console.log(props);
  // debugger;
  return (
    <Component
      filters={ProductDetailCtx.filters}
      setFilters={setFilters}
      {...props}
    />
  );
};

const imageOnError = (event, res) => {
  event.target.src = `${CDN_URL}product/${res.img_res}X${res.img_res}/productnotfound.webp`;
};
const Gallery = (
  props,
  callmouseover,
  callmouseout,
  cardstate,
  scrollPosition
) => (
  <div className="imageHeight">
    {props.data.oneDayShipping ? (
      <div class="one-day-ship-listing-page" style={{ zIndex: 2 }}>
        <span class="one-day-ship-listing-page-label">1 day shipping</span>
      </div>
    ) : (
      ""
    )}
    <div class="wishListStyle">
      <Wishlist
        sku={props.data.skuId}
        productId={props.data.productId}
        wishlist={props.wishlist}
      />
    </div>

    <LazyLoadImage
      alt={"props.data.title"}
      effect="blur"
      src={renderImages(props, cardstate)}
      onError={(e) => imageOnError(e, props.data.imageResolution)}
      title={props.data.title}
      onMouseOver={() => {
        callmouseover();
      }}
      onMouseOut={() => {
        callmouseout();
      }}
      style={{ width: "100%" }}
      scrollPosition={scrollPosition}
    />
  </div>
);
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
  props.filters["defaultVariants"]["productType"] = props.data.productType;
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
    minWidth: "80%",
    maxWidth: "90%",
    webkitBoxShadow: "6px 8px 4px 0px rgb(213, 214, 216) !important",
    mozBoxShadow: "6px 8px 4px 0px rgb(213, 214, 216) !important",
    boxShadow: "6px 8px 4px 0px rgb(213, 214, 216) !important",
    margin: "10px 0px ",
    borderRadius: "0 !important",
  },
  cardAtionspadding: {
    padding: 0,
    margin: 0,
  },
  textDel: {
    color: "#828282",
  },
  priceClass: {
    // boxShadow: "0px 0px 5px #F699A3 inset",
    padding: "10px",
    //height: "50px",
    display: "flex",
    boxShadow: " 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    borderRadius: "0 !important",
    // borderTopLeftRadius: "20% !important",
    // borderTopRightRadius: "20% !important",
    opacity: "1.2",
    "&:hover": {
      boxShadow: "40 0 11px rgba(33,33,33,.2)",
      cursor: "pointer",
      // opacity: "2"
    },
    [theme.breakpoints.down("sm")]: {
      height: "60px",
      padding: "0 !important",
      paddingLeft: "10px !important",
    },
    "& div": {
      padding: "0 !important",
    },

    // border: "1px solid #F699A3"
  },
  priceClassMain: {
    margin: "auto !important",
  },
  offerMainPrice: {
    color: "#ed1165",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
    },
    "& i": {
      fontSize: "26px",
      paddingRight: "5px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
      },
    },
  },
  offerPrice: {
    fontSize: "0.8rem",
    lineHeight: 0,
    color: "#828282",
    // fontWeight: "bold",
    width: "fit-content",
    flex: 0.7,
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
  },
  textPriceCardGrid: {
    display: "flex",
    width: "225px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
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
    flex: 0.6,
    overflow: "hidden",
    textOverflow: "ellipsis",
    [theme.breakpoints.down("sm")]: {
      whiteSpace: "nowrap",
      width: "80px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    [theme.breakpoints.down("md")]: {
      whiteSpace: "nowrap",
      width: "130px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
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
}));
const renderImages = (props, cardstate) => {
  const filterType = cardstate.hovered ? "hoverImage" : "placeImage";

  // console.info('props.data.image[filterType]',props.data.image[filterType]);
  // return props.data.image['hoverImage'].length === 0 ?"https://alpha-assets.stylori.com/1000x1000/images/static/Image_Not_Available.jpg" : props.data.image[filterType].map(imgs => `${imgs.img} ${imgs.size}`).toString()

  return props.data.image.hoverImage.length === 0
    ? "https://alpha-assets.stylori.com/1000x1000/images/static/Image_Not_Available.jpg"
    : props.data.image.filterType.img;
};

function Component(props) {
  const classes = useStyles();
  const [cardstate, setCardState] = React.useState({
    hovered: false,
    loaded: false,
    dataLoaded: true,
  });
  const _height = props.data.imageResolution.img_res;
  const callmouseover = () => {
    setCardState({ ...cardstate, hovered: !cardstate.hovered });
  };
  const callmouseout = () => {
    setCardState({ ...cardstate, hovered: !cardstate.hovered });
  };

  return (
    <div className={classes.root} style={{ marginLeft: "0px !important" }}>
      <Card
        className={`${classes.card} ${"imageHeight"}`}
        style={{ marginLeft: "0px !important" }}
      >
        {/* <CardActions className={classes.cardAtionspadding}>
          <Grid container xs={12}>
            <Grid container item xs={6} justify="flex-start">
            

            </Grid>

            <Grid container item xs={6} justify="flex-end">
              <i
                style={{ fontSize: "18px" }}
                className={`fa ${classes.iconColor}`}
              >
                &#xf08a;
              </i>
            </Grid>
          </Grid>


        </CardActions> */}
        {/* /:productCategory/:productType/:material/:productName */}
        <Link
          to={{ pathname: props.data.skuID }}
          style={{ textDecoration: "none" }}
          target="_blank"
          onClick={handleProductDetatiContext(props)}
        >
          <CardActions
            style={
              {
                //  maxHeight: `${_height ? `${_height}px` : '300px'}`, minHeight: '250px'
              }
            }
            className="imageHeight"
          >
            {/* <img 
srcset={renderImages(props, cardstate)}
sizes="(max-width: 320px) 320w,
            (max-width: 480px) 375w,
            (max-width: 600px) 600w,
            (max-width: 992px) 768w,
            (max-width: 1440px) 1440w,
            (max-width: 2560px) 2560w,
            2560w
           
"
     alt=""
          title={props.data.title}
          onMouseOver={() => {
            setCardState({ ...cardstate, hovered: !cardstate.hovered });
          }}
          onMouseOut={() => {
            setCardState({ ...cardstate, hovered: !cardstate.hovered });
          }}
          style={{width:'100%',height:'100%'}}
          className={`${props.data.image.placeImage.length === 0 || props.data.image.hoverImage.length === 0 ? 'shine' : '' }`}
          
          /> */}

            {Gallery(props, callmouseover, callmouseout, cardstate)}
          </CardActions>
          <Card className={classes.priceClass}>
            <CardContent className={classes.cardContent}>
              <Grid
                container
                item
                xs={12}
                className={classes.textPriceCardGrid}
                alignItems="center"
              >
                <Grid
                  container
                  item
                  xs={12}
                  sm={12}
                  md={7}
                  lg={7}
                  xl={7}
                  alignItems="center"
                  className={`${classes.priceClassMain}`}
                >
                  <Typography
                    variant="h6"
                    component="h6"
                    className={classes.offerMainPrice}
                  >
                    {/* <i
                    
                    className="fa"
                  >
                    &#xf156;
                  </i> */}
                    {/* {Math.round(props.data.offerPrice)} */}
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                    }).format(Math.round(props.data.price))}
                  </Typography>
                </Grid>
                {/*  */}
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={5}
                  lg={5}
                  xl={5}
                  className={`${classes.priceOffGrid}`}
                >
                  <Grid
                    container
                    item
                    xs={12}
                    alignItems="center"
                    className={`${classes.priceOffGridsub}`}
                  >
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="span"
                      className={classes.offerPrice}
                    >
                      {Math.round(props.data.offerPrice) ===
                        Math.round(props.data.price) ? (
                        new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                          minimumFractionDigits: 0,
                        }).format(Math.round(props.data.price))
                      ) : (
                        <del>
                          {new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            minimumFractionDigits: 0,
                          }).format(Math.round(props.data.offerPrice))}
                        </del>
                      )}
                    </Typography>
                  </Grid>
                  {Math.round(props.data.offerPrice) ===
                    Math.round(props.data.price) ? (
                    ""
                  ) : (
                    <Grid
                      container
                      item
                      xs={12}
                      className={`${classes.offerPricesMain}`}
                    >
                      {/* <Typography
                    gutterBottom
                    variant="body1"
                    component="span"
                    className={classes.youSave}
                  >
                    you save &nbsp;
                  </Typography> */}
                      <Typography
                        gutterBottom
                        variant="body1"
                        component="span"
                        className={`${classes.youSave} ${classes.youSavePrice}`}
                      >
                        {/* 20% Off */}
                        {Math.round(
                          ((Math.round(props.data.price) -
                            Math.round(props.data.offerPrice)) /
                            Math.round(props.data.price)) *
                          100
                        ) + "% off"}
                      </Typography>
                    </Grid>
                  )}
                </Grid>

                <Hidden smDown>
                  <Grid container xs={12}>
                    <Grid item xs={12} className={`${classes.titles}`}>
                      <Typography
                        variant="body1"
                        component="span"
                        className={`${classes.titles}`}
                      >
                        {props.data.title}
                      </Typography>
                    </Grid>
                  </Grid>
                </Hidden>
              </Grid>
            </CardContent>
          </Card>
        </Link>
      </Card>
    </div>
  );
}
