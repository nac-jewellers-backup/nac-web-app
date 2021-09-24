import { Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";
import "../product-image-slider/product-images.css";
import "./pricing.css";
import styles from "./style";

export default function Pricing(props) {
  const classes = styles();
  let path = window.location.pathname.split("/").pop();
  const { globalContext, quantity } = props;
  const product_quantity = quantity ? quantity : 1;

  const isSilver = globalContext && globalContext.pathName ? true : false;
  return (
    <div>
      {props.title ? (
        <Typography
          // variant="caption"
          // component="div"
          style={props.from && { margin: "auto" }}
          className={`pricing  ${
            (props.title != null) & (props.title !== "") ? "" : "shine"
          } ${path == "stylori" && "pricingTitle"}`}
        >
          {/* Dazzling Gold Bloom Diamond Pendant */}
          {props.title}
        </Typography>
      ) : (
        ""
      )}
      {/*  */}
      <Grid spacing={12} container lg={12}>
        {/* <Grid item xs={12}lg={12} >
                    <Grid spacing={12} container xs={12} lg={12} class="leftPadding"> */}
        {window.location.pathname !== "/cart" &&
        window.location.pathname.split("-")[0] !== "/account" &&
        window.location.pathname !== "/checkout" ? (
          <Grid container>
            {props.pdpage && (
              <Grid
                item
                xs={12}
                style={{ display: "flex", alignItems: "center" }}
                className={classes.alignval}
              >
                {props.offerPrice ? (
                  <Typography style={{ display: "flex", width: "100%" }}>
                    <Typography
                      style={{ fontSize: "0.9rem" }}
                      style={props.from && { margin: "auto" }}
                      className={`pricing-p${
                        (props.price != null) & (props.price !== "")
                          ? ""
                          : "shine"
                      }${classes.colorMain} ${classes.h6FontSizeStrike} ${
                        classes.offerPricePadding
                      } ${classes.dis} ${classes.boldFont}`}
                    >
                      p
                      {props.offerPrice === props.price ? (
                        ""
                      ) : (
                        <del>
                          {new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            minimumFractionDigits: 0,
                          }).format(Math.round(props.offerPrice))}
                        </del>
                      )}
                    </Typography>
                  </Typography>
                ) : (
                  ""
                )}
              </Grid>
            )}
            <Grid item>
              {props.price ? (
                <Typography style={{ display: "flex", width: "100%" }}>
                  <Typography
                    style={{
                      margin: props.from ? "auto" : "unset",
                      fontWeight: "bold",
                    }}
                    className={`${
                      (props.offerPrice != null) & (props.offerPrice !== "")
                        ? ""
                        : "shine"
                    } ${classes.colorMain} ${classes.h6FontSize} ${
                      classes.offerPricePadding
                    } `}
                  >
                    {/* ₹&nbsp;{props.offerPrice} */}
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                    }).format(Math.round(props.price))}
                    {/* ₹&nbsp;{Math.round(props.offerPrice)} */}
                    <Hidden smDown>
                      <span className={classes.spanIcon1}>i</span>
                    </Hidden>
                  </Typography>
                </Typography>
              ) : (
                ""
              )}
            </Grid>
            {!props.pdpage && (
              <Grid
                item
                xs={12}
                style={{ display: "flex", alignItems: "center" }}
                className={classes.alignval}
              >
                {props.price ? (
                  <Typography
                    style={{ display: "flex", width: "100%" }}
                    className={classes.resetpadd}
                  >
                    <Typography
                      style={{ fontSize: "0.9rem" }}
                      style={props.from && { margin: "auto" }}
                      className={`pricing-p${
                        (props.price != null) & (props.price !== "")
                          ? ""
                          : "shine"
                      }${classes.colorMain} ${classes.h6FontSizeStrike} ${
                        classes.offerPricePadding
                      } ${classes.dis} ${classes.boldFont}`}
                    >
                      {props.offerPrice === props.price ? (
                        ""
                      ) : (
                        <del>₹&nbsp;{Math.round(props.offerPrice)}</del>
                      )}
                    </Typography>
                  </Typography>
                ) : (
                  ""
                )}
              </Grid>
            )}
          </Grid>
        ) : (
          <>
            <Grid
              item
              xs={12}
              lg={
                window.location.pathname !== "/cart" &&
                window.location.pathname.split("-")[0] !== "/account" &&
                window.location.pathname !== "/checkout"
                  ? 2
                  : 12
              }
            >
              {props.price ? (
                <Typography style={{ display: "flex", width: "100%" }}>
                  <Typography
                    // variant="caption"
                    style={props.from && { margin: "auto" }}
                    className={`pricing-p${
                      (props.price != null) & (props.price !== "")
                        ? ""
                        : "shine"
                    }${classes.colorMain} ${classes.h6FontSizeStrike} ${
                      classes.offerPricePadding
                    } ${classes.dis} ${classes.boldFont}`}
                    // component="p"
                  >
                    {props.offerPrice === props.price ? (
                      ""
                    ) : (
                      <del>
                        ₹&nbsp;{" "}
                        {new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                          minimumFractionDigits: 0,
                        }).format(Math.round(props.price))}
                      </del>
                    )}
                  </Typography>
                </Typography>
              ) : (
                ""
              )}
            </Grid>
            <Grid
              item
              xs={12}
              xs={
                window.location.pathname !== "/cart" &&
                window.location.pathname.split("-")[0] !== "/account" &&
                window.location.pathname !== "/checkout"
                  ? 6
                  : 12
              }
            >
              {props.Price ? (
                <Typography style={{ display: "flex", width: "100%" }}>
                  <Typography
                    // variant="h6"
                    // component="h6"
                    style={props.from && { margin: "auto" }}
                    className={`${
                      (props.offerPrice != null) & (props.offerPrice !== "")
                        ? ""
                        : "shine"
                    } ${classes.colorMain} ${classes.h6FontSize} ${
                      classes.offerPricePadding
                    } `}
                  >
                    {/* ₹&nbsp;{props.offerPrice} */}
                    {new Intl.NumberFormat("en-IN ", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                    }).format(Math.round(props.Price))}
                    {/* ₹&nbsp;{Math.round(props.offerPrice)} */}
                  </Typography>
                </Typography>
              ) : (
                ""
              )}
            </Grid>
          </>
        )}

        <Grid
          item
          xs={12}
          lg={
            window.location.pathname.split("-")[0] !== "/account" &&
            window.location.pathname !== "/cart" &&
            window.location.pathname.split("-")[1] !== "allorders"
              ? 6
              : 12
          }
          style={{ display: "flex", alignItems: "normal" }}
        >
          <Hidden smDown>
            {props.offerDiscount ? (
              <span
                style={props.from && { margin: "auto" }}
                className={`discount ${classes.backgsecondary} ${classes.off}`}
              >
                {props.offerDiscount}
              </span>
            ) : (
              <Typography style={{ display: "flex" }}>
                <Typography
                  variant="caption"
                  component="p"
                  className={`${
                    (props.save != null) & (props.save !== "") ? "" : "shine"
                  } ${classes.colorMain}  `}
                >
                  {path === "stylori" && "You save"} {props.save}
                </Typography>
              </Typography>
            )}
          </Hidden>
          {/* </Grid>

                    </Grid> */}
        </Grid>
      </Grid>

      {/*  */}
    </div>
  );
}
