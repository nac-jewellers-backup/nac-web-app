import { Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import BlogImageCardStyles from "./style";
import ReadMore from "./readMore";

const BlogImageCard = (props) => {
  const classes = BlogImageCardStyles();

  const [more, setMore] = useState("");

  const [show, setShow] = useState(false);

  const readMoreBlog = (value) => {
    setMore(value);
    setShow(true);
  };

  const backButton = () => {
    setShow(false);
  };
  return (
    <div className={classes.mainTitle}>
      {!show ? (
        <Grid container>
          <Grid item xs={12}>
            {props?.value?.map((e) => {
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
                          <Typography onClick={() => readMoreBlog(e)}>
                            {e?.bottomText}
                          </Typography>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              );
            })}
            <div className={classes.viewMore}>
              <Button onClick={props?.handleRequest} variant="outlined">
                View More
              </Button>
            </div>
          </Grid>
        </Grid>
      ) : (
        <div className={classes.readMore}>
          <ReadMore data={more} buttonClick={backButton} />
        </div>
      )}
    </div>
  );
};

export default BlogImageCard;
