import { Button, Grid, MenuItem, Select, Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import { API_URL } from "config";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Pricing from "../Pricing/index";
import styles from "./style";
import WishlistButton from "./Wishlistadd";
function MediaControlCard(props) {
  const { classes } = props;
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    setQuantity(props.quantity);
  }, [props.quantity]);

  const handleDeleteLocalStorage = (e, val) => {
    var local_storage = JSON.parse(localStorage.getItem("cartDetails"));
    var currentValue =
      e.target.id && e.target.id.length > 0 ? e.target.id : e.currentTarget.id;
    var a = local_storage.products.filter((val) => {
      if (currentValue !== val.sku_id) {
        return val;
      }
      return 0;
    });
    function status(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    }
    function json(response) {
      return response.json();
    }
    if (JSON.parse(localStorage.getItem("cart_id"))) {
      let cart_id = JSON.parse(localStorage.getItem("cart_id")).cart_id;
      let bodyVariableRemoveCartItem = {
        cart_id: cart_id,
        product_id: currentValue,
      };
      fetch(`${API_URL}/removecartitem`, {
        method: "post",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...bodyVariableRemoveCartItem,
        }),
      })
        .then(status)
        .then(json)
        .then((val) => {
          sessionStorage.removeItem("updatedProduct");
          alert(val.message);
          var cartId = JSON.parse(localStorage.getItem("cartDetails")).cart_id;
          var userId = JSON.parse(localStorage.getItem("cartDetails")).user_id;
          var localstorage = JSON.stringify({
            cart_id: `${cartId}`,
            user_id: `${userId}`,
            products: a,
          });
          localStorage.setItem("cartDetails", localstorage);
          window.location.reload();
        });
    } else {
      var _products = JSON.parse(
        localStorage.getItem("cartDetails")
      ).products.filter((val) => {
        if (val.sku_id !== currentValue) return val;
        return 0;
      });
      var cartId = JSON.parse(localStorage.getItem("cartDetails")).cart_id;
      var userId = JSON.parse(localStorage.getItem("cartDetails")).user_id;
      var _obj = { cart_id: cartId, user_id: userId, products: _products };
      if (_products.length > 0) {
        localStorage.setItem("cartDetails", JSON.stringify(_obj));
        alert("You removed this product successfully");
        window.location.reload();
      } else {
        localStorage.removeItem("cartDetails", _products);
        alert("You removed this product successfully");
        window.location.reload();
      }
    }
  };

  const onChangeQuantity = (e, skuId, index) => {
    let stateCopy = Object.assign({}, quantity);
    stateCopy[index].Qty = e.target.value;
    setQuantity(stateCopy);

    let local_storage = JSON.parse(localStorage.getItem("quantity"));

    local_storage[skuId] = e.target.value;
    localStorage.setItem("quantity", JSON.stringify(local_storage));
    props.totalcost(props.subtotaldata);
  };
  return (
    <div style={{ paddingTop: "10px" }}>
      {props.data.map((dataval, index) =>
        dataval.productsDetails.map((val) => {
          return (
            <div className={classes.card}>
              <Grid
                container
                style={{ paddingTop: "20px", paddingBottom: "20px" }}
              >
                <Grid xs={4}>
                  {window.location.pathname !== "/checkout" ? (
                    <NavLink
                      to={dataval?.skuUrl}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        width="100%"
                        alt="images"
                        loading="lazy" 
                        style={{
                          border: "1px solid #D2D3D4",
                          objectFit: "cover",
                        }}
                        src={dataval?.fadeImages[0]?.imageUrl}
                      ></img>
                    </NavLink>
                  ) : (
                    <img
                      width="100%"
                      alt="img"
                      loading="lazy"
                      style={{
                        border: "1px solid #D2D3D4",
                        objectFit: "cover",
                      }}
                      src={dataval?.fadeImages[0]?.imageUrl}
                    ></img>
                  )}
                </Grid>
                <Grid xs={8}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      {window.location.pathname !== "/checkout" ? (
                        <NavLink
                          to={`jewellery/${dataval.productType}/${dataval.materialName[0]}/${val.pro_header}?skuId=${dataval.generatedSku}`}
                          style={{
                            textDecoration: "none",
                            textTransform: "capitalize",
                          }}
                        >
                          <span
                            style={{
                              color: "gray",
                              fontSize: "0.9rem",
                              textTransform: "capitalize",
                            }}
                          >
                            {val.pro_header}
                          </span>
                        </NavLink>
                      ) : (
                        <span
                          style={{
                            color: "gray",
                            fontSize: "0.9rem",
                            textTransform: "capitalize",
                          }}
                        >
                          {val.pro_header}
                        </span>
                      )}

                      <Grid container style={{ marginTop: "4px" }}>
                        <Grid item xs={12} lg={6}>
                          {dataval.maxOrderQty === 1 ? (
                            <Grid container>
                              <Grid item xs={4}>
                                <Typography
                                  className={`subhesder ${classes.normalfonts}`}
                                >
                                  Quantity :
                                </Typography>
                              </Grid>
                              <Grid item xs={4}>
                                <Typography
                                  className={`subhesder ${classes.normalfonts}`}
                                >
                                  {dataval.maxOrderQty}
                                </Typography>
                              </Grid>
                            </Grid>
                          ) : (
                            <>
                              <Grid container>
                                <Grid item xs={4}>
                                  <Typography
                                    className={`subhesder ${classes.normalfonts}`}
                                  >
                                    Quantity :
                                  </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                  <Select
                                    style={{ marginBottom: "10px" }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    variant="standard"
                                    value={quantity[index]?.Qty ?? 1}
                                    onChange={(e) =>
                                      onChangeQuantity(
                                        e,
                                        quantity[index].generateSku,
                                        index
                                      )
                                    }
                                    color="secondary"
                                  >
                                    {quantity[index]?.QtyArr?.map((data) => (
                                      <MenuItem value={data}>{data}</MenuItem>
                                    ))}
                                  </Select>
                                </Grid>
                              </Grid>
                            </>
                          )}
                        </Grid>
                      </Grid>
                      {dataval.dataCard1.map((val) => (
                        <Pricing
                          cartsm={true}
                          price={
                            val.offerPrice *
                            (JSON.parse(localStorage.getItem("quantity"))[
                              val.generatedSku
                            ] ?? 1)
                          }
                          offerPrice={
                            val.price *
                            (JSON.parse(localStorage.getItem("quantity"))[
                              val.generatedSku
                            ] ?? 1)
                          }
                          offerDiscount={
                            val.discount ? `${val.discount}% - OFF` : null
                          }
                          quantity={quantity}
                        ></Pricing>
                      ))}
                    </CardContent>
                  </div>
                </Grid>
                <Grid container xs={12} style={{ display: "flex" }}>
                  <Grid item xs={5} sm={6}>
                    <Button
                      id={dataval.generatedSku}
                      productid={dataval}
                      onClick={(e) => handleDeleteLocalStorage(e, val)}
                      variant="contained"
                      style={{
                        color: "gray",
                        border: "2px solid #C1C1C1",
                        backgroundColor: "white",
                        borderRadius: "0px",
                        boxShadow: "none",
                        width: "90%",
                        whiteSpace: "nowrap",
                        marginTop: "10px",
                        marginRight: "3px",
                      }}
                    >
                      REMOVE
                    </Button>
                  </Grid>
                  <Grid item xs={7} sm={6}>
                    <WishlistButton
                      sku={dataval.generatedSku}
                      productId={dataval.productId}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </div>
          );
        })
      )}
    </div>
  );
}
export default withStyles(styles)(MediaControlCard);
