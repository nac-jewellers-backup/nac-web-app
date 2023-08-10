import { Grid } from "@material-ui/core";
import { ProductCareComp } from "components/productCareComp";
import { productCareData } from "mappers/dummydata/productCare";
import Header from "components/SilverComponents/Header";
import React from "react";
import { CommonTitle } from "components/CommonTitle";
import Footer from "components/Footer/Footer";
import ProductCareStyles from "./style";

const ProductCare = () => {
  const classes = ProductCareStyles();
  const path=window.location.search.length;  
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.mainTag}>
          <Header />
        </div>
        <div className={classes.commonTitle}>
          <CommonTitle title="JEWELLERY CARE GUIDE" />
        </div>
        <div>
          {path?(<ProductCareComp data={productCareData.reverse()} />):(<ProductCareComp data={productCareData} />)}
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </Grid>
    </Grid>
  );
};

export default ProductCare;
