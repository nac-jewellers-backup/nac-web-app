import { Button, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { API_URL, CDN_URL } from "config";
import React from "react";
import { NavLink } from "react-router-dom";
import Pricing from "../Pricing/index";
import Quantity from "../quantity/index";
import styles from "./style";
function MediaControlCard(props) {
  const { classes } = props;
  const { dataCard1 } = props.data;

  const handleDeleteLocalStorage = (e, val) => {
    var local_storage = JSON.parse(localStorage.getItem("cartDetails"));
    var currentValue =
      e.target.id && e.target.id.length > 0 ? e.target.id : e.currentTarget.id;
    // console.clear()
    var a = local_storage.products.filter((val) => {
      if (currentValue !== val.sku_id) {
        return val;
      }
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
        // body: {query:seoUrlResult,variables:splitHiphen()}
        // body: JSON.stringify({query:seoUrlResult}),
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
  const filter_image = (imges__val, name, details) => {
    var image_urls;
    const width = window.innerWidth;
    if (imges__val.imageUrl && imges__val.imageUrl.length > 0) {
      // this.props.data.map(dataval => {
      //     if (dataval !== undefined && dataval !== null) {
      //         dataval.productsDetails.map(val => {
      // if (val !== undefined && val !== null) {
      // val.namedetail !== undefined && val.namedetail.map(val___ => {
      if (name && name === "Metal") {
        var valu = details.split(" ");
        var valu1 = valu[1];
        var valu2 = valu1[0];
        //  imges__val && imges__val.map(img => {
        var cnt = imges__val && imges__val.imageUrl.split("/");
        var cnt_b = cnt[2].split("-");
        var cnt_c = cnt_b[1];
        if ((cnt_c && cnt_c[1]) === valu2) {
          var browser_type = JSON.parse(localStorage.getItem("browserDetails"));
          var resolution = 500;
          var _resolutions =
            width < 960
              ? `${resolution * 2}X${resolution * 2}`
              : `${resolution}X${resolution}`;
          var url_split = imges__val && imges__val.imageUrl.split("/");
          var extension_split = url_split && url_split[url_split.length - 1];
          var browser_type_append =
            extension_split &&
            extension_split
              .split(".")[0]
              .concat(`${browser_type && browser_type.browser_type}`);
          url_split[url_split && url_split.length - 1] = browser_type_append;
          url_split.splice(2, 0, _resolutions);
          var url_construct = url_split.join().replace(/\,/g, "/");
          image_urls = `${CDN_URL}${url_construct}`;
          return [image_urls];
        }
        // })
      }
      // return url
      // })
      // }
      // return image
      // })
      // }
      // return detail
      // })
      // }
      // alert(JSON.stringify( [image_urls]))
    }
  };

  const checkMaterial = (material) => {
    let _data = material.map((val) => val.toLowerCase());
    if (_data.indexOf("silver") > -1) return false;
    else return true;
  };
  const dataCarousel = {
    slidesToShow: 1,
    arrows: false,
  };

  return (
    <div style={{ paddingTop: "10px" }}>
      {/* {props.checkoutbutton} */}
      {props.data.map((dataval) =>
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
                        height="100%"
                        src={dataval?.fadeImages[0]?.imageUrl}
                      ></img>
                    </NavLink>
                  ) : (
                    <img
                      width="100%"
                      height="100%"
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

                      <Grid container style={{ marginTop: "10px" }}>
                        <Grid item xs={6}>
                          <Typography
                            className={`subhesder ${classes.normalfonts}`}
                          >
                            Size
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography
                            className={`subhesder ${classes.normalfonts}`}
                          >
                            {window.location.pathname === "/checkout" ||
                            checkMaterial(dataval.materialName) ||
                            !Boolean(dataval?.[0]?.maxOrderQty) ||
                            dataval?.[0]?.maxOrderQty < 2 ? (
                              `Quantity ${
                                JSON.parse(localStorage.getItem("quantity"))[
                                  dataval.generatedSku
                                ]
                              }`
                            ) : (
                              <Quantity data={[dataval]} cart={true} />
                            )}
                          </Typography>
                        </Grid>
                      </Grid>
                      {dataval.dataCard1.map((val) => (
                        <Pricing
                          cartsm={true}
                          price={val.offerPrice}
                          offerPrice={val.price}
                          offerDiscount={
                            val.discount ? `${val.discount}% - OFF` : null
                          }
                          quantity={
                            JSON.parse(localStorage.getItem("quantity"))[
                              dataval.generatedSku
                            ]
                          }
                        ></Pricing>
                      ))}
                    </CardContent>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    id={dataval.generatedSku}
                    className="highliter"
                    productid={dataval}
                    onClick={(e) => handleDeleteLocalStorage(e, val)}
                    variant="contained"
                    style={{
                      color: "gray",
                      border: "2px solid #C1C1C1",
                      backgroundColor: "white",
                      borderRadius: "0px",
                      boxShadow: "none",

                      whiteSpace: "nowrap",
                      marginTop: "10px",
                    }}
                  >
                    REMOVE
                  </Button>
                  <div>&nbsp;&nbsp;</div>
                  <Button
                    id={dataval.generatedSku}
                    className="highliter"
                    productid={dataval}
                    onClick={(e) => handleDeleteLocalStorage(e, val)}
                    variant="contained"
                    style={{
                      color: "gray",
                      border: "2px solid #C1C1C1",
                      backgroundColor: "white",
                      borderRadius: "0px",
                      boxShadow: "none",

                      whiteSpace: "nowrap",
                      marginTop: "10px",
                    }}
                  >
                    MOVE TO WISHLIST
                  </Button>
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
