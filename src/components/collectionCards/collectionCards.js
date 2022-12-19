import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import CollectionCardsStyles from "./style";
import { useHistory } from "react-router-dom";

const CollectionCards = (props) => {
  let history = useHistory();
  const classes = CollectionCardsStyles();
  const handleRoute = (url) => {
    history.push(url);
  }
  return (
    <div className={classes.main}>
      {props?.value?.map((val, index) => {
        return (
          <>
            <Grid container spacing={3} className={classes.mainContainer}>
              <Grid
                item
                xs={12}
                md={7}
                lg={7}
                className={index % 2 === 0 ? classes.even : classes.odd}
              >
                <div className={classes.image}>
                  <img src={val?.img} alt="jewellers" />
                </div>
              </Grid>
              <Grid item xs={12} md={5} lg={5} className={classes.rightContent}>
                <div className={classes.content}>
                  <Typography>{val?.content}</Typography>
                </div>
                <div className={classes.buttonGroup}>
                  {val?.buttons?.map((e) => {
                    return (
                      <>
                        {e?.name && (
                          <div className={classes.buttonTop}>
                            <Button  onClick={() => handleRoute(e?.url)}>{e?.name}</Button>
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>
              </Grid>
            </Grid>
          </>
        );
      })}
    </div>
  );
};

export default CollectionCards;
