import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Hidden, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    boxShadow: "6px 7px 6px #bebfbf !important",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    padding: "70px",
  },
  cover: {
    width: "50%",
    border: `1.5px solid ${theme.palette.gold.main}`,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  contentText: {
    fontFamily: "notoSerif-regular",
  },
}));

export function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <Hidden smDown>
        <CardMedia
          className={classes.cover}
          style={{ fontFamily: "notoSerif-regular" }}
          image={props.data.image}
          title="Live from space album cover"
        />

        <div style={{ width: "50%" }}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                className={classes.contentText}
              >
                Ours is a journey that began almost hundred years ago in 1917
                when Shri Nathella Narayana Chetty started a small jewellery
                business at home where he fashioned hand-made jewels for a few
                loyal patrons
              </Typography>
            </CardContent>
          </div>
        </div>
      </Hidden>

      <Hidden mdUp>
        {/* <div style={{width:"100%"}}> */}
        <CardMedia
          className={classes.cover}
          image={props.data.image}
          title="Live from space album cover"
        />
        {/* </div> */}
      </Hidden>
    </Card>
  );
}
