import React from "react";
import { Card, Grid, Typography } from "@material-ui/core";
import ProductCareStyles from "./style";

const ProductCareComp = (props) => {
  console.log("1234", props);
  const classes = ProductCareStyles();
  return (
    <Grid container className={classes.contentText}>
      <Grid item xs={12}>
        {props?.data?.map((e, index) => {
          console.log("index", index);
          return (
            <Card className={classes.cardBox}>
              <Grid container spacing={5}>
                <Grid item xs={12} lg={6}
                  className={index % 2 === 0 ? classes.orderDiv : classes.EvenorderDiv}>
                  <div className={classes.image}>
                    <img src={e?.img} alt="dummy.jpg" />
                  </div>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <div className={classes.main}>
                    <div className={classes.heading}>
                      <Typography>{e?.heading}</Typography>
                    </div>
                    {e?.content?.map((val) => {
                      return (
                        <div className={classes.content}>
                          <ul style={{ listStyleType: "square" }}>
                            <li>
                              <Typography>{val}</Typography>
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </Grid>
              </Grid>
            </Card>
          );
        })}
      </Grid>
    </Grid >
  );
};

export default ProductCareComp;
