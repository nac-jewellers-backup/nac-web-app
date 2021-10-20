import { AppBar, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import CommenDialog from "../../../components/Common/Dialogmodel";
import Buynowbutton from "../../Buynow/buynowbutton";
import "./product-images.css";
import styles from "./style";

class Buynowfixed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modelOpen: false,
    };
  }
  valus = (valueId) => {
    var valus_locl = localStorage.getItem("cartDetails")
      ? JSON.parse(localStorage.getItem("cartDetails")).products
      : "";

    var vals;

    if (valus_locl) {
      let productIds = valus_locl.map((val) => {
        return val.sku_id;
      });
      productIds.indexOf(valueId) > -1 ? (vals = 1) : (vals = 0);
    }
    return vals;
  };
  render() {
    const { data, isSilver, classes } = this.props;
    const _isSilver = this.isSilver ? true : false;
    const canceldeletechecklist = () => {
      this.setState({
        modelOpen: false,
      });
    };
    const enquireLink = () => {
      if (!productIsActive) {
        if (this.props?.productURL) {
          window.open(
            `https://wa.me/919952625252?text=Hi - ${
              window.location.hostname + "/" + this.props.productURL ?? ""
            }`
          );
        } else {
          window.open(
            `https://wa.me/919952625252?text=Hi - ${window.location.href}`
          );
        }
      }
    };

    const handleLocalStorage = () => {
      if (this.valus(this.props.data[0].skuId) === 1) {
        this.props.deleteComment();
      } else {
        this.setState({
          modelOpen: true,
        });
      }
    };
    const deletechecklists = () => {
      var skuId = this.props.data[0].skuId;
      var products = [];
      var cartId = "";
      var userId = "";
      var obj = { sku_id: "", qty: "", price: "" };
      obj["sku_id"] = skuId;
      obj["qty"] = 1;
      obj["price"] = this.props.data[0].offerPrice[0];
      products.push(obj);
      var skuObj = { cart_id: cartId, user_id: userId, products: products };
      localStorage.setItem("cartDetails", JSON.stringify(skuObj));
      window.location.href = "/cart";
      this.setState({
        modelOpen: false,
      });
    };
    let productIsActive = this.props.productIsActive ?? "";
    return (
      <div style={{ width: "100%" }}>
        <AppBar color="primary" className="product-page-fixed-footer">
          <Grid
            container
            spacing={12}
            style={{ boxShadow: "8px 10px 8px 10px #888888" }}
          >
            {isSilver ? (
              <>
                {" "}
                <Grid
                  item
                  xs={6}
                  className={`fixed-grid ${
                    isSilver ? classes.fixedGridsilver : ""
                  }`}
                  style={{ textAlign: "center", background: "#e87236" }}
                >
                  <div
                    onClick={() =>
                      productIsActive ? this.props.deleteComment() : ""
                    }
                  >
                    <Buynowbutton
                      sku={data[0].skuId}
                      class={`product-footer-buynow ${
                        isSilver ? classes.fixedGridsilver : ""
                      }`}
                      onClick={
                        productIsActive ? handleLocalStorage.bind(this) : ""
                      }
                      productIsActive={productIsActive ?? ""}
                    />
                  </div>
                </Grid>
              </>
            ) : (
              <>
                {" "}
                <Grid
                  item
                  xs={6}
                  className={`fixed-grid ${
                    isSilver ? classes.fixedGridsilver : ""
                  }`}
                  style={{ textAlign: "center", background: "#e87236" }}
                >
                  <div
                    onClick={
                      productIsActive ? handleLocalStorage.bind(this) : ""
                    }
                  >
                    <Buynowbutton
                      sku={data[0].skuId}
                      class={`product-footer-buynow ${
                        isSilver ? classes.fixedGridsilver : ""
                      }`}
                      productIsActive={productIsActive ?? ""}
                    />
                  </div>
                </Grid>
                <CommenDialog
                  isOpen={this.state.modelOpen}
                  content={`Verify selected product details before proceeding`}
                  handleClose={canceldeletechecklist.bind(this)}
                  handleSuccess={() => this.props.deleteComment()}
                  negativeBtn="No"
                  positiveBtn="Yes"
                  title="Confirmation"
                />{" "}
              </>
            )}

            {/* */}

            {isSilver ? (
              <>
                {" "}
                <Grid
                  item
                  xs={6}
                  style={{ textAlign: "center", backgroundColor: "#white" }}
                >
                  <div
                    onClick={() =>
                      productIsActive ? this.props.deleteComment() : ""
                    }
                  >
                    <Buynowbutton
                      sku={data[0].skuId}
                      // class={`product-footer-buynow ${
                      //   isSilver ? classes.fixedGridsilver : ""
                      // }`}
                      class={`product-footer-buynow ${classes.addtoCartToBuyNowStyle}`}
                      addtoCartToBuyNow={true}
                      onClick={
                        productIsActive ? handleLocalStorage.bind(this) : ""
                      }
                      productIsActive={productIsActive ?? ""}
                    />
                  </div>
                </Grid>{" "}
              </>
            ) : (
              <>
                {" "}
                <Grid
                  item
                  xs={6}
                  style={{ textAlign: "center", backgroundColor: "white" }}
                >
                  <div
                    onClick={() =>
                      productIsActive ? this.props.deleteComment() : ""
                    }
                  >
                    <Buynowbutton
                      sku={data[0].skuId}
                      class={`product-footer-buynow1 ${classes.addtoCartToBuyNowStyle}`}
                      addtoCartToBuyNow={true}
                      onClick={
                        productIsActive ? handleLocalStorage.bind(this) : ""
                      }
                      // productIsActive={productIsActive ?? ""}
                    />
                  </div>
                </Grid>{" "}
              </>
            )}
          </Grid>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Buynowfixed);
