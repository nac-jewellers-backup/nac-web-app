import { Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";
import "../product-image-slider/product-images.css";
import "./pricing.css";
import styles from "./style";
import CurrencyConversion from "utils/CurrencyConversion";
export default function Pricing(props) {
  const classes = styles();
  let path = window.location.pathname.split("/").pop();

  return (
    <div>
      {props.title ? (
        <Typography
          style={props.from && { margin: "auto", textTransform: "capitalize" }}
          className={`pricing  ${
            (props.title !== null) & (props.title !== "") ? "" : "shine"
          } ${path === "stylori" && "pricingTitle"}`}
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
              <Grid
                item
                xs={12}
                style={{ display: "flex", alignItems: "center" }}
                className={classes.alignval}
              >
                {props.offerPrice ? (
                  <Typography style={{ display: "flex", width: "100%" }}>
                    <Typography
                      style={{
                        color: "#6E6E71",
                      }}
                    >
                      {props.offerPrice === props.price ? (
                        ""
                      ) : (
                        <del>
                          {CurrencyConversion(props.offerPrice)}
                         
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
              {props.price && window.location.pathname !== "/paymentsuccess" ? (
                <>
                  <Typography style={{ display: "flex", width: "100%" }}>
                    <Hidden smDown>
                      <Typography
                        style={{
                          fontSize: "24px",
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
                        {CurrencyConversion(props.price)}
                       
                      </Typography>
                      <sup>
                        <span className={classes.spanIcon}>i</span>
                      </sup>
                    </Hidden>
                    <Hidden mdUp>
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
                        {CurrencyConversion(props.price)}
                       
                      </Typography>
                    </Hidden>

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
                            className={`${
                              (props.save != null) & (props.save !== "")
                                ? ""
                                : "shine"
                            } ${classes.colorMain}  `}
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
                          className={`${
                            (props.save != null) & (props.save !== "")
                              ? ""
                              : "shine"
                          } ${classes.colorMain}  `}
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
                      style={
                        props.from && { margin: "auto", paddingBottom: "10px" }
                      }
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
                        <>
                          <del
                            style={{
                              fontSize: "15px",
                              float: "right",
                              paddingBottom: "10px",
                            }}
                          >
                            {CurrencyConversion(props.offerPrice)}
                            {/* ₹&nbsp;{Math.round(props.offerPrice)} */}
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
                <>
                  <Hidden smDown>
                    <Typography style={{ display: "flex", width: "100%" }}>
                      <Typography
                        style={
                          props.from && {
                            margin: "auto",
                            fontSize: "16px",
                            color: "gray",
                          }
                        }
                      >
                        {props.offerPrice === props.price ? (
                          <span style={{ color: "gray", fontSize: "14px" }}>
                            {" "}
                            {CurrencyConversion(props.offerPrice)}
                          
                          </span>
                        ) : (
                          <>
                            {props.checkoutpage ? (
                              <>
                                <span
                                  style={{
                                    fontSize: "0.9rem",
                                    paddingBottom: "6px",
                                    color: "gray",
                                  }}
                                >
                                  {CurrencyConversion(props.price)}
                                 
                                </span>
                                <br />
                                <span>
                                  <del
                                    style={{
                                      color: "gray",
                                      fontSize: "0.9rem",
                                      fontWeight: "lighter",
                                      paddingBottom: "6px",
                                    }}
                                  >
                                    {CurrencyConversion(props.offerPrice)}
                                    
                                  </del>
                                </span>
                              </>
                            ) : (
                              <>
                                <span
                                  style={{
                                    fontSize: "0.9rem",
                                    paddingBottom: "6px",
                                    color: "gray",
                                  }}
                                  className={classes.price}
                                >
                                  {CurrencyConversion(props.price)}
                                 
                                </span>
                                <span className={classes.price}>
                                  &nbsp;&nbsp;
                                  <del
                                    style={{
                                      fontSize: "0.7rem",
                                      fontWeight: "lighter",
                                      paddingBottom: "6px",
                                      color: "gray",
                                    }}
                                  >
                                    {CurrencyConversion(props.offerPrice)}
                                   
                                  </del>
                                </span>
                                {props.offerDiscount ? (
                                  <span
                                    style={{
                                      color: "grey",
                                      fontSize: "0.8rem",
                                      whiteSpace: "nowrap",
                                      marginLeft: "6px",

                                      fontWeight: "lighter",
                                    }}
                                  >
                                    ({props.offerDiscount})
                                  </span>
                                ) : (
                                  <Typography
                                    style={{ display: "flex", color: "gray" }}
                                  >
                                    <Typography
                                      variant="caption"
                                      component="p"
                                      className={`${
                                        (props.save != null) &
                                        (props.save !== "")
                                          ? ""
                                          : "shine"
                                      } ${classes.colorMain}  `}
                                    >
                                      {path === "stylori" && "You save"}{" "}
                                      {props.save}
                                    </Typography>
                                  </Typography>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </Typography>
                    </Typography>
                  </Hidden>
                  <Hidden mdUp>
                    <Typography style={{ display: "flex", width: "100%" }}>
                      <Typography
                        style={
                          props.from && {
                            margin: "auto",

                            color: "gray",
                          }
                        }
                      >
                        {props.offerPrice === props.price ? (
                          <span style={{ color: "gray" }}>
                            {" "}
                            {CurrencyConversion(props.offerPrice)}
                           
                          </span>
                        ) : (
                          <>
                            {props.checkoutpage ? (
                              <>
                                <span
                                  style={{
                                    fontSize: "0.9rem",
                                    paddingBottom: "6px",
                                    color: "gray",
                                  }}
                                >
                                  {CurrencyConversion(props.price)}
                                
                                </span>
                                <br />
                                <span>
                                  <del
                                    style={{
                                      color: "gray",
                                      fontSize: "0.9rem",
                                      fontWeight: "lighter",
                                      paddingBottom: "6px",
                                    }}
                                  >
                                    {CurrencyConversion(props.offerPrice)}
                                    
                                  </del>
                                </span>
                              </>
                            ) : (
                              <>
                                <span
                                  style={{
                                    fontSize: "0.9rem",
                                    paddingBottom: "6px",
                                    color: "gray",
                                  }}
                                  className={classes.price}
                                >
                                  {CurrencyConversion(props.price)}
                                 
                                </span>
                                <span className={classes.price}>
                                  &nbsp;&nbsp;
                                  <del
                                    style={{
                                      fontSize: "0.7rem",
                                      fontWeight: "lighter",
                                      paddingBottom: "6px",
                                      color: "gray",
                                    }}
                                  >
                                    {CurrencyConversion(props.offerPrice)}
                                   
                                  </del>
                                </span>
                                {props.offerDiscount ? (
                                  <span
                                    style={{
                                      color: "grey",
                                      fontSize: "0.8rem",
                                      whiteSpace: "nowrap",
                                      marginLeft: "6px",

                                      fontWeight: "lighter",
                                    }}
                                  >
                                    ({props.offerDiscount})
                                  </span>
                                ) : (
                                  <Typography
                                    style={{ display: "flex", color: "gray" }}
                                  >
                                    <Typography
                                      variant="caption"
                                      component="p"
                                      className={`${
                                        (props.save != null) &
                                        (props.save !== "")
                                          ? ""
                                          : "shine"
                                      } ${classes.colorMain}  `}
                                    >
                                      {path === "stylori" && "You save"}{" "}
                                      {props.save}
                                    </Typography>
                                  </Typography>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </Typography>
                    </Typography>
                  </Hidden>
                </>
              ) : (
                ""
              )}
            </Grid>

            <Grid
              item
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
                    className={`${
                      (props.offerPrice != null) & (props.offerPrice !== "")
                        ? ""
                        : "shine"
                    } ${classes.colorMain} ${classes.h6FontSize} ${
                      classes.offerPricePadding
                    } `}
                  >
                    {CurrencyConversion(props.Price)}
                    
                  </Typography>
                </Typography>
              ) : (
                ""
              )}
            </Grid>
          </>
        )}

        {props.success ? (
          <>
            {props.successofferPrice === props.successprice ? (
              <>
                <Hidden smDown>
                  <span
                    style={{
                      fontSize: "18px",
                      paddingBottom: "6px",
                      color: "gray",
                    }}
                  >
                    {CurrencyConversion(props.successofferPrice)}
                    
                  </span>
                </Hidden>
                <Hidden mdUp>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      paddingBottom: "6px",
                      color: "gray",
                    }}
                  >
                    {CurrencyConversion(props.successofferPrice)}
                   
                  </span>
                </Hidden>
              </>
            ) : (
              <>
                <Hidden smDown>
                  <span
                    style={{
                      fontSize: "18px",
                      paddingBottom: "6px",
                      color: "gray",
                    }}
                    className={classes.price}
                  >
                    {CurrencyConversion(props.successofferPrice)}
                    
                  </span>
                  <span className={classes.price}>
                    &nbsp;&nbsp;
                    <del
                      style={{
                        fontSize: "18px",
                        fontWeight: "lighter",
                        paddingBottom: "6px",
                        color: "gray",
                      }}
                    >
                      {CurrencyConversion(props.successprice)}
                     
                    </del>
                  </span>
                </Hidden>
                <Hidden mdUp>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      paddingBottom: "6px",
                      color: "gray",
                    }}
                    className={classes.price}
                  >
                    {CurrencyConversion(props.successofferPrice)}
                   
                  </span>
                  <span className={classes.price}>
                    &nbsp;&nbsp;
                    <del
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "lighter",
                        paddingBottom: "6px",
                        color: "gray",
                      }}
                    >
                      {CurrencyConversion(props.successprice)}
                     
                    </del>
                  </span>
                </Hidden>
              </>
            )}
          </>
        ) : (
          " "
        )}
      </Grid>
    </div>
  );
}
