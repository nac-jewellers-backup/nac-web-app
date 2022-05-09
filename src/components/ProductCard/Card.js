import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Wishlist from "components/wishlist/wishlist";
import { ProductDetailContext } from "context";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import CurrencyConversion from "utils/CurrencyConversion";
import "./productCard.css";

export const ImgMediaCard = (props) => {
  const { ProductDetailCtx, setFilters } =
    React.useContext(ProductDetailContext);
  return (
    <Component
      filters={ProductDetailCtx.filters}
      setFilters={setFilters}
      {...props}
      offerPrice={props.data.offerPrice}
    />
  );
};

const Gallery = (
  props,
  callmouseover,
  callmouseout,
  cardstate,
  scrollPosition
) => {
  return (
    <div style={{ position: "relative" }} className="imageHeight">
      {props.shopothercategories ? (
        ""
      ) : (
        <div class="wishListStyle">
          <Wishlist
            sku={props.data.skuId}
            productId={props.data.productId}
            wishlist={props.wishlist}
          />
        </div>
      )}

      <Link
        className={"cardImage"}
        to={{ pathname: `/${props.data.skuUrl ?? props.data.sku_url}` }}
        style={{ textDecoration: "none" }}
        target="_blank"
        onClick={handleProductDetatiContext(props)}
      >
        {props.similarProducts ? (
          <>
            <LazyLoadImage
              style={{
                objectFit: "cover",
                backgroundColor: "white",
                width: "100%",
              }}
              alt={"props.data.title"}
              effect="blur"
              src={similarProductrenderImages(props, cardstate)}
              title={
                props.data.title.charAt(0).toUpperCase() +
                props.data.title.slice(1)
              }
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
              scrollPosition={scrollPosition}
            ></LazyLoadImage>
          </>
        ) : props.shopothercategories ? (
          <>
            <LazyLoadImage
              style={{
                objectFit: "cover",
                backgroundColor: "white",
                width: "100%",
              }}
              alt={props?.data?.product_list?.product_name}
              effect="blur"
              src={props?.data?.product_list?.product_images[0]?.image_url}
              title={
                props?.data?.product_list?.product_name
                  .charAt(0)
                  .toUpperCase() +
                props.data?.product_list?.product_name.slice(1)
              }
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
              scrollPosition={scrollPosition}
            ></LazyLoadImage>
          </>
        ) : (
          <LazyLoadImage
            style={{
              objectFit: "cover",
              backgroundColor: "white",
              width: "100%",
            }}
            alt={"props.data.title"}
            effect="blur"
            src={renderImages(props, cardstate)}
            title={
              props.data.title.charAt(0).toUpperCase() +
              props.data.title.slice(1)
            }
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
            scrollPosition={scrollPosition}
          ></LazyLoadImage>
        )}
      </Link>
    </div>
  );
};
export default trackWindowScroll(Gallery);

const handleProductDetatiContext = (props) => {
  props.filters["defaultVariants"]["diamondType"] = props.data.diamondType;
  props.filters["defaultVariants"]["metalColor"] = props.data.metalColor;
  props.filters["defaultVariants"]["purity"] = props.data.purity;
  props.filters["defaultVariants"]["skuSize"] = props.data.skuSize;

  props.filters["skuId"] = props.data.skuID;
  props.setFilters(props.filters);
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: 0,
    padding: 20,
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  card: {
    minWidth: "90%",
    maxWidth: "90%",
    boxShadow: "4px 4px 4px #A5A4A5 !important",
    margin: "10px 0px ",
    borderRadius: "0 !important",
    border: "2px solid #bebfbf70",
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
    backgroundColor: "#c8ced480",
    display: "flex",
    boxShadow: " 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    borderRadius: "0 !important",
    opacity: "1.2",
    "&:hover": {
      boxShadow: "40 0 11px rgba(33,33,33,.2)",
      cursor: "pointer",
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
    fontSize: "22px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px !important",
    },
    lineHeight: 1.6,
    letterSpacing: " 0.0075em",

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
      fontSize: "13px !important",
      marginBottom: "0px !important",
    },
  },
  offerPrice: {
    fontSize: "0.74rem",
    lineHeight: 0,
    color: "#828282",
    width: "fit-content",
    textAlign: "center",
    padding: 5,
    "&:span": {
      margin: 0,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      padding: "0 !important",
      paddingTop: "4px !important",
      paddingBottom: "4px !important"
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
      borderRadius: "3px",
      fontWeight: "normal",
      fontSize: "0.7rem",
    },
  },
  offerPricesMain: {
    flex: 1,
    display: "flex",
  },
  titlesshopother: {
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
    whiteSpace: "nowrap",
    color: "gray",
    overflow: "hidden",
    textOverflow: "ellipsis",

    width: "100%",
    marginTop: "-10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  titles: {
    fontSize: "14px",
    whiteSpace: "nowrap",
    color: "gray",
    fontWeight: "560px",
    fontFamily: "notoSerif-regular",
    overflow: "hidden",
    textOverflow: "ellipsis",
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
    [theme.breakpoints.down("md")]: {},
  },
  strikeText: {
    fontSize: "16px",
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
    const filterType = cardstate?.hovered ? "hoverImage" : "placeImage";

    return props?.data &&
      props?.data?.image &&
      props?.data?.image["hoverImage"] &&
      props?.data?.image["hoverImage"].length === 0
      ? "https://alpha-assets.stylori.com/1000x1000/images/static/Image_Not_Available.jpg"
      : props?.data?.image?.[filterType]?.img;
  }
};
const similarProductrenderImages = (props, cardstate) => {
  if (props.static) {
    return props.image;
  } else {
    return props?.data &&
      props?.data?.image &&
      props?.data?.image["hoverImage"] &&
      props?.data?.image["hoverImage"].length === 0
      ? "https://alpha-assets.stylori.com/1000x1000/images/static/Image_Not_Available.jpg"
      : props?.data?.img;
  }
};
function Component(props) {
  const classes = useStyles();
  const [cardstate, setCardState] = React.useState({
    hovered: false,
    loaded: false,
    dataLoaded: true,
  });
  const callmouseover = () => {
    setCardState({ ...cardstate, hovered: !cardstate.hovered });
  };
  const callmouseout = () => {
    setCardState({ ...cardstate, hovered: !cardstate.hovered });
  };

  return (
    <div
      className={classes.root}
      style={{ marginLeft: "0px !important", overflow: "hidden" }}
    >
      <Card className={classes.card} style={{ marginLeft: "0px !important" }}>
        <CardActions
          style={{}}
          className={`${classes.cardAtionspadding} ${classes.cardActionsImage}`}
        >
          {Gallery(props, callmouseover, callmouseout, cardstate)}
        </CardActions>
        <Card className={classes.priceClass}>
          <CardContent
            className={classes.cardContent}
            style={{ display: "flex", marginBottom: "10px" }}
          >
            <Grid
              container
              item
              xs={12}
              className={classes.textPriceCardGrid}
              alignItems="center"
            >
              {props.shopothercategories ? (
                <>
                  <Grid container xs={12}>
                    <Typography
                      variant="body1"
                      style={{
                        paddingLeft: "5px",
                        marginTop: "14px",
                        textTransform: "uppercase",
                      }}
                      className={`${classes.titlesshopother}`}
                    >
                      {" "}
                      SHOP&nbsp;
                      {props.data.product_list.product_type}
                    </Typography>
                  </Grid>
                </>
              ) : (
                <>
                  <Hidden smDown>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={12}
                      className={`${classes.priceClassMain}`}
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                      }}
                    >
                      <Grid items>
                        {props.data.offerPrice === props.data.price ? (
                          <Typography
                            variant="h5"
                            component="h5"
                            className={classes.offerMainPrice}
                            style={{
                              justifyContent: "flex-start",
                              display: "flex",
                              paddingLeft: "5px",
                              color: "rgb(109,110,112)",
                              fontFamily: "notoSerif-regular",
                            }}
                          >
                            {CurrencyConversion(props.data.price)}
                            {/* {new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                              minimumFractionDigits: 0,
                            }).format(Math.round(props.data.price))} */}
                          </Typography>
                        ) : (
                          <Typography
                            variant="h6"
                            component="h6"
                            className={classes.offerMainPrice}
                            style={{
                              justifyContent: "flex-start",
                              display: "flex",
                              paddingLeft: "5px",
                              fontFamily: "notoSerif-regular",
                              color: "rgb(109,110,112)",
                            }}
                          >
                            {CurrencyConversion(props.data.price)}
                            {/* {new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                              minimumFractionDigits: 0,
                            }).format(Math.round(props.data.price))} */}
                            <span
                              style={{ display: "flex", alignSelf: "center" }}
                            >
                              {" "}
                              <Typography
                                className={classes.strikeText}
                                style={{
                                  paddingLeft: "6px",
                                }}
                              >
                                <span
                                  style={{
                                    color: "rgb(109,110,112)",
                                    textDecoration: "line-through",
                                  }}
                                >
                                  <span>
                                    {
                                      props.data.offerPrice == 0
                                        ? " "
                                        : CurrencyConversion(
                                            props.data.offerPrice
                                          )

                                      // new Intl.NumberFormat("en-IN", {
                                      //     style: "currency",
                                      //     currency: "INR",
                                      //     minimumFractionDigits: 0,
                                      //   }).format(
                                      //     Math.round(props.data.offerPrice)
                                      // )
                                    }
                                  </span>
                                </span>
                              </Typography>
                            </span>
                          </Typography>
                        )}{" "}
                      </Grid>
                      {props.similarProducts ? (
                        " "
                      ) : (
                        <Grid items>
                          <Typography className={classes.discountPercentage}>
                            {props.data.save == 0
                              ? " "
                              : ` ${Math.abs(
                                  Math.round(props.data.save)
                                )}% OFF`}
                            &nbsp;&nbsp;
                          </Typography>
                        </Grid>
                      )}
                    </Grid>
                    <Grid container xs={12}>
                      <Typography
                        variant="body1"
                        component="span"
                        style={{ paddingLeft: "5px" }}
                        className={`${classes.titles}`}
                      >
                        {" "}
                        {props.data.title.charAt(0).toUpperCase() +
                          props.data.title.slice(1)}
                      </Typography>
                    </Grid>
                  </Hidden>
                  <Hidden mdUp>
                    <Grid container xs={12}>
                      <div>
                        {props.data.offerPrice === props.data.price ? (
                          <Typography
                            variant="h5"
                            component="h5"
                            className={classes.offerMainPrice}
                            style={{
                              justifyContent: "flex-start",
                              display: "flex",
                              paddingLeft: "5px",
                              color: "rgb(109,110,112)",
                            }}
                          >
                            {CurrencyConversion(props.data.price)}
                            {/* {new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                              minimumFractionDigits: 0,
                            }).format(Math.round(props.data.price))} */}
                          </Typography>
                        ) : (
                          <Grid container>
                            <Grid item xs={12}>
                              <Typography
                                className={classes.offerMainPrice}
                                style={{
                                  justifyContent: "flex-start",
                                  display: "flex",
                                  paddingLeft: "5px",
                                  color: "rgb(109,110,112)",
                                }}
                              >
                                {CurrencyConversion(props.data.price)}
                                {/* {new Intl.NumberFormat("en-IN", {
                                  style: "currency",
                                  currency: "INR",
                                  minimumFractionDigits: 0,
                                }).format(Math.round(props.data.price))} */}
                              </Typography>
                              <span
                                style={{
                                  color: "rgb(109,110,112)",
                                  textDecoration: "line-through",
                                  fontSize: "12px",
                                  paddingLeft: "5px",
                                }}
                              >
                                {
                                  props.data.offerPrice == 0
                                    ? " "
                                    : CurrencyConversion(props.data.offerPrice)

                                  // new Intl.NumberFormat("en-IN", {
                                  //     style: "currency",
                                  //     currency: "INR",
                                  //     minimumFractionDigits: 0,
                                  //   }).format(
                                  //     Math.round(props.data.offerPrice)
                                  //   )
                                }
                              </span>
                            </Grid>
                          </Grid>
                        )}{" "}
                      </div>
                      <Typography
                        variant="body1"
                        component="span"
                        style={{ paddingLeft: "5px" }}
                        className={`${classes.titles}`}
                      >
                        {" "}
                        {props.data.title.charAt(0).toUpperCase() +
                          props.data.title.slice(1)}
                      </Typography>
                    </Grid>
                  </Hidden>
                </>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Card>
    </div>
  );
}
