import { Grid } from "@material-ui/core";
import RemoveWishlist from "components/wishlist/removewishlist";
import { CartContext } from "context";
import React from "react";
import "./accounts.css";
import CurrencyConversion from "utils/CurrencyConversion";
const Wishlists = (props) => {
  const { setCartFilters } = React.useContext(CartContext);
  return <Component setCartFilters={setCartFilters} {...props} />;
};
class Component extends React.Component {
  render() {
    const { wishlistdata } = this.props.wishlistdata;
    return (
      <>
        {wishlistdata && wishlistdata.nodes.length > 0 ? (
          <>
            {wishlistdata &&
              wishlistdata.nodes.map((first_map) => (
                <>
                  <Grid
                    container
                    spacing={12}
                    xs={12}
                    style={{ paddingBottom: "10px" }}
                  >
                    <Grid item style={{ width: "50%" }}>
                      <Grid
                        item
                        className="topPaddingwish"
                        style={{ paddingRight: "4px", float: "left" }}
                      >
                        <div className="remove-product">
                          <RemoveWishlist
                            sku={first_map.skuId}
                            productId={first_map.productId}
                          />
                        </div>
                      </Grid>
                      <div className="wishlist_img" style={{ float: "left" }}>
                        <img
                          alt="images"
                          loading="lazy"
                          className="viewport-img"
                          src={`https://assets.stylori.net/base_images/${first_map.productListByProductId.productImagesByProductId.nodes[0].imageUrl}`}
                        />
                      </div>
                    </Grid>
                    <Grid style={{ width: "50%" }}>
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
                            />
                            <i className="fa fa-shopping-bag"></i>&nbsp;Add to
                            Bag
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
