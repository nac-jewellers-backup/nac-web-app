import { Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";
import "../product-image-slider/product-images.css";
import "./pricing.css";
import styles from "./style";

export default function Pricing(props) {
  console.log(props);

  const classes = styles();
  let path = window.location.pathname.split("/").pop();
  const { globalContext, quantity } = props;
  const product_quantity = quantity ? quantity : 1;

  const isSilver = globalContext && globalContext.pathName ? true : false;
  return (
    <div>
      {props.title ? (
        <Typography
          style={props.from && { margin: "auto", textTransform: "capitalize" }}
          className={`pricing  ${(props.title != null) & (props.title !== "") ? "" : "shine"} ${
            path == "stylori" && "pricingTitle"
          }`}
        >
          {props.title}
        </Typography>
      ) : (
        ""
      )}
      {/*  */}
      <Grid spacing={12} container lg={12}>
        {window.location.pathname !== "/cart" &&
        window.location.pathname.split("-")[0] !== "/account" &&
        window.location.pathname !== "/checkout" ? (
          <Grid container>
            {props.pdpage && (
              <Grid item xs={12} style={{ display: "flex", alignItems: "center" }} className={classes.alignval}>
                {props.offerPrice ? (
                  <Typography style={{ display: "flex", width: "100%" }}>
                    <Typography
                      style={{
                        fontSize: "17px",

                        color: "#6E6E71",
                      }}
                    >
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
            <Grid item xs={12} style={{ color: "grey" }}>
              {props.price ? (
                <>
                  <Typography style={{ display: "flex", width: "100%" }}>
                    <Typography
                      style={{
                        margin: props.from ? "auto" : "unset",
                        fontWeight: "bold",
                      }}
                      className={`${(props.offerPrice != null) & (props.offerPrice !== "") ? "" : "shine"} ${classes.colorMain} ${
                        classes.h6FontSize
                      } ${classes.offerPricePadding} `}
                    >
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 0,
                      }).format(Math.round(props.price))}
                    </Typography>
                    <Hidden smDown>
                      {props.offerDiscount ? (
                        <Typography
                          style={{
                            color: "grey",
                            fontSize: "17px",
                            marginLeft: "4px",
                            marginTop: "3px",
                          }}
                        >
                          ({props.offerDiscount})
                        </Typography>
                      ) : (
                        <Typography style={{ display: "flex" }}>
                          <Typography
                            variant="caption"
                            component="p"
                            className={`${(props.save != null) & (props.save !== "") ? "" : "shine"} ${classes.colorMain}  `}
                          >
                            {path === "stylori" && "You save"} {props.save}
                          </Typography>
                        </Typography>
                      )}
                    </Hidden>
                  </Typography>
                  <Hidden mdUp>
                    {props.offerDiscount ? (
                      <Typography
                        style={{
                          color: "grey",
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                          marginLeft: "4px",
                          marginTop: "3px",
                        }}
                      >
                        ({props.offerDiscount})
                      </Typography>
                    ) : (
                      <Typography style={{ display: "flex" }}>
                        <Typography
                          variant="caption"
                          component="p"
                          className={`${(props.save != null) & (props.save !== "") ? "" : "shine"} ${classes.colorMain}  `}
                        >
                          {path === "stylori" && "You save"} {props.save}
                        </Typography>
                      </Typography>
                    )}
                  </Hidden>
                </>
              ) : (
                ""
              )}
            </Grid>

            {!props.pdpage && (
              <Grid item xs={12} style={{ display: "flex", alignItems: "center" }} className={classes.alignval}>
                {props.price ? (
                  <Typography style={{ display: "flex", width: "100%" }} className={classes.resetpadd}>
                    <Typography
                      style={props.from && { margin: "auto", paddingBottom: "10px" }}
                      className={`pricing-p${(props.price != null) & (props.price !== "") ? "" : "shine"}${classes.colorMain} ${
                        classes.h6FontSizeStrike
                      } ${classes.offerPricePadding} ${classes.dis} ${classes.boldFont}`}
                    >
                      {props.offerPrice === props.price ? (
                        ""
                      ) : (
                        <>
                          <del
                            style={{
                              fontSize: "15px",
                              float: "right",
                              paddingBottom: "10px",
                            }}
                          >
                            ₹&nbsp;{Math.round(props.offerPrice)}
                          </del>
                        </>
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
                    style={props.from && { margin: "auto" }}
                    className={`pricing-p${(props.price != null) & (props.price !== "") ? "" : "shine"}${classes.colorMain} ${
                      classes.h6FontSizeStrike
                    } ${classes.offerPricePadding} ${classes.dis} ${classes.boldFont}`}
                  >
                    {props.offerPrice === props.price ? (
                      <span>
                        {" "}
                        {new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                          minimumFractionDigits: 0,
                        }).format(Math.round(props.offerPrice))}
                      </span>
                    ) : (
                      <>
                        <span style={{ fontSize: "1.2rem", paddingBottom: "6px" }}>
                          {" "}
                          {new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            minimumFractionDigits: 0,
                          }).format(Math.round(props.price))}
                        </span>
                        <span style={{ display: "block", marginTop: "-5px", marginBottom: "5px" }}>
                          <del
                            style={{
                              fontSize: "0.8rem",
                              marginLeft: "14px",
                              fontWeight: "lighter",
                              paddingBottom: "6px",
                            }}
                          >
                            {new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                              minimumFractionDigits: 0,
                            }).format(Math.round(props.offerPrice))}
                          </del>
                        </span>
                      </>
                    )}
                  </Typography>
                </Typography>
              ) : (
                ""
              )}
            </Grid>

            <Grid
              item
              xs={6}
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
                    style={props.from && { margin: "auto" }}
                    className={`${(props.offerPrice != null) & (props.offerPrice !== "") ? "" : "shine"} ${classes.colorMain} ${
                      classes.h6FontSize
                    } ${classes.offerPricePadding} `}
                  >
                    {/* ₹&nbsp;{props.offerPrice} */}
                    {new Intl.NumberFormat("en-IN ", {
                      style: "currency",
                      currency: "INR",
                      minimumFractionDigits: 0,
                    }).format(Math.round(props.Price))}
                  </Typography>
                </Typography>
              ) : (
                ""
              )}
            </Grid>
          </>
        )}

        {props.pdpage !== true && (
          <Grid
            item
            xs={6}
            lg={
              window.location.pathname.split("-")[0] !== "/account" &&
              window.location.pathname !== "/cart" &&
              window.location.pathname.split("-")[1] !== "allorders"
                ? 6
                : 12
            }
            style={{
              paddingBottom: "10px",
              display: "inline",
              color: "white",
              marginLeft: "8px",
              fontSize: "0.6rem",
              marginTop: "3px",
            }}
          >
            {props.offerDiscount ? (
              <span
                style={{
                  padding: "5px",
                  backgroundColor: "#33346D",
                  textAlign: "center",
                  borderRadius: "5px",
                }}
              >
                {props.offerDiscount}
              </span>
            ) : (
              <Typography style={{ display: "flex" }}>
                <Typography
                  variant="caption"
                  component="p"
                  className={`${(props.save != null) & (props.save !== "") ? "" : "shine"} ${classes.colorMain}  `}
                >
                  {path === "stylori" && "You save"} {props.save}
                </Typography>
              </Typography>
            )}
          </Grid>
        )}
      </Grid>

      {/*  */}
    </div>
  );
}
