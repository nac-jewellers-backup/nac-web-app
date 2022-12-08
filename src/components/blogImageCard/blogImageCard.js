import { Button, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import BlogImageCardStyles from "./style";
import ReadMore from "./readMore";

const BlogImageCard = ({ value = [], handleShow = () => null }) => {
  const classes = BlogImageCardStyles();
  const [more, setMore] = useState("");

  const [show, setShow] = useState(false);

  // view more button click state
  const [count, setCount] = useState(3);
  const [cardData, setCardData] = useState([]);

  const readMoreBlog = (value) => {
    handleShow();
    setMore(value);
    setShow(true);
  };

  const backButton = () => {
    setShow(false);
    handleShow();
  };

  const careerViewMoreClick = () => {
    // debugger;
    setCount(count + 3);
    const cardItems = value.filter((value, index) => index < (count + 3));
    setCardData(cardItems);
  };

  React.useEffect(() => {
    const cardValue = value.filter((value, index) => index < count);
    setCardData(cardValue);
  }, []);

  return (
    <div className={classes.mainTitle}>
      {!show ? (
        <Grid container>
          <Grid item xs={12}>
            {cardData?.map((e) => {
              // debugger;
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
              <Button onClick={careerViewMoreClick} variant="outlined">
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
