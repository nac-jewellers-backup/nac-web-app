import React,{useEffect} from "react";
import { Card, Grid, Typography } from "@material-ui/core";
import ProductCareStyles from "./style";

const ProductCareComp = (props) => {
  const classes = ProductCareStyles();
  const path=window.location.search.length;  
  useEffect(() => {
    if (path > 0) {
      // Scroll to a specific position in the ScrollView
      const scrollElement = document.getElementById('The guide to caring for diamonds');
      scrollElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <Grid container className={classes.contentText} >
      <Grid item xs={12}>
        {props?.data?.map((e, index) => {
          console.log("index", index);
          return (
            <Card className={classes.cardBox} id={e?.heading}>
              <Grid container spacing={5}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  className={index % 2 === 0 ? classes.even : classes.odd}
                >
                  <div className={classes.image}>
                    <img src={e?.img} alt="dummy.jpg" />
                  </div>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <div className={classes.main}>
                    <div className={classes.heading}>
                      <Typography>{e?.heading}</Typography>
                    </div>
                    {e?.content?.map((val) => {
                      return (
                        <div className={classes.content}>
                          <ul>
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
    </Grid>
  );
};

export default ProductCareComp;
