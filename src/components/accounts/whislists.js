import { Grid } from "@material-ui/core";
import RemoveWishlist from "components/wishlist/removewishlist";
import { CDN_URL } from "config";
import { CartContext } from "context";
import React from "react";
import CurrencyConversion from "utils/CurrencyConversion";
import "./accounts.css";

const Wishlists = (props) => {
  const { setCartFilters } = React.useContext(CartContext);
  return <Component setCartFilters={setCartFilters} {...props} />;
};
class Component extends React.Component {
  check_img = (imges) => {
    var image_urls;
    const width = window.innerWidth;
    var browser_type = JSON.parse(localStorage.getItem("browserDetails"));
    var resolution = 500;
    if (imges && imges.length > 0) {
      var _resolutions =
        width < 960
          ? `${resolution * 2}X${resolution * 2}`
          : `${resolution}X${resolution}`;
      var url_split = imges && imges.split("/");
      var extension_split = url_split && url_split[url_split.length - 1];
      var browser_type_append =
        extension_split &&
        extension_split
          .split(".")[0]
          .concat(`${browser_type && browser_type.browser_type}`);
      url_split[url_split && url_split.length - 1] = browser_type_append;
      url_split.splice(2, 0, _resolutions);
      // eslint-disable-next-line
      var url_construct = url_split.join().replace(/\,/g, "/");
      image_urls = `${CDN_URL}${url_construct}`;
      return image_urls;
    }
  };
  render() {
    const { wishlistdata } = this.props.wishlistdata;

    return (
      <>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        {wishlistdata && wishlistdata.nodes.length > 0 ? (
          <>
            {wishlistdata &&
              wishlistdata.nodes.map((first_map) => (
                <>
                  <Grid
                    container
                    spacing={12}
                    style={{
                      paddingBottom: "10px",
                      paddingTop: "4px",
                      paddingLeft: "4px",
                      paddingRight: "10px",
                    }}
                  >
                    <Grid
                      sm={2}
                      lg={2}
                      item
                      class="topPaddingwish"
                      style={{
                        paddingRight: "4px",
                        marginBottom: "12px",
                        float: "left",
                      }}
                    >
                      <RemoveWishlist
                        sku={first_map.skuId}
                        productId={first_map.productId}
                        data={
                          <>
                            <div className="remove-product"></div>
                          </>
                        }
                      />
                    </Grid>
                    <Grid item xs={5} sm={3} lg={3}>
                      <div className="wishlist_img">
                        <img
                          loading="lazy"
                          alt="..."
                          style={{
                            objectFit: "cover",
                            height: "100%",
                            width: "100%",
                          }}
                          src={
                            first_map.productListByProductId
                              .productImagesByProductId.nodes[0].imageUrl
                              ? first_map.productListByProductId
                                  .productImagesByProductId.nodes[0].imageUrl
                              : "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/home_page/NAC+logo+mnemonic.png"
                          }
                        />
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={5}
                      lg={7}
                      style={{ paddingLeft: "15px" }}
                    >
                      <div>
                        <div className="wislist_title">
                          {first_map.productListByProductId.productName}
                        </div>

                        <div className="wislist_price">
                          {
                            CurrencyConversion(
                              Math.round(
                                first_map.transSkuListBySkuId &&
                                  first_map.transSkuListBySkuId.markupPrice
                              )
                            )
                            
                          }
                        </div>
                        <div className="add-bag">
                          <>
                            <RemoveWishlist
                              sku={first_map.skuId}
                              productId={first_map.productId}
                              add={
                                first_map.transSkuListBySkuId &&
                                first_map.transSkuListBySkuId.markupPrice
                              }
                              data={
                                <>
                                  <i class="fa fa-shopping-bag"></i>
                                  &nbsp;&nbsp;Add to Bag
                                </>
                              }
                            />
                          </>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </>
              ))}
          </>
        ) : (
          <div style={{ textAlign: "center", color: "#2F348B" }}>
            No wishlist yet
          </div>
        )}
      </>
    );
  }
}

export default Wishlists;
