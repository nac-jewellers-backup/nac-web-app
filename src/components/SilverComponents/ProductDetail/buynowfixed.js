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
  
    const canceldeletechecklist = () => {
      this.setState({
        modelOpen: false,
      });
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
    const handleLocalStorageAddtoCart = () => {
      if (this.valus(this.props.data[0].skuId) === 1) {
        this.props.deleteComment();
      } else {
        this.setState({
          modelOpen: true,
        });
      }
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
                  <div onClick={() => this.props.addtoCartToBuyNow()}>
                    <Buynowbutton
                      sku={data[0].skuId}
                      // class={`product-footer-buynow ${
                      //   isSilver ? classes.fixedGridsilver : ""
                      // }`}
                      class={`product-footer-buynow ${classes.addtoCartToBuyNowStyle}`}
                      addtoCartToBuyNow={true}
                      onClick={
                        productIsActive
                          ? handleLocalStorageAddtoCart.bind(this)
                          : ""
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
                      productIsActive ? this.props.addtoCartToBuyNow() : ""
                    }
                  >
                    <Buynowbutton
                      sku={data[0].skuId}
                      class={`product-footer-buynow1 ${classes.addtoCartToBuyNowStyle}`}
                      addtoCartToBuyNow={true}
                      onClick={
                        productIsActive
                          ? handleLocalStorageAddtoCart.bind(this)
                          : ""
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
