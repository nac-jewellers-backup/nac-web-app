import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import BlogImageCardStyles from "./style";

const BlogImageCard = (props) => {
  const classes = BlogImageCardStyles();
  return (
    <div className={classes.mainTitle}>
      <Grid container>
        <Grid item xs={12}>
          {props?.data.map((e) => {
            return (
              <div className={classes.main}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <div className={classes.imageCard}>
                      <img src={e?.image} alt="jewell" />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className={classes.contentText}>
                      <div className={classes.headingText}>
                        <Typography>{e?.heading}</Typography>
                      </div>
                      <div className={classes.dateText}>
                        <Typography>{e?.date}</Typography>
                      </div>
                      <div className={classes.middleText}>
                        <Typography>{e?.content}</Typography>
                      </div>
                      <div className={classes.buttonText}>
                        <Typography>{e?.bottomText}</Typography>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            );
          })}
          <div className={classes.viewMore}>
            <Button variant="outlined">View More</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default BlogImageCard;
