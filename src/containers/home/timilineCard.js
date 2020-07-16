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
    boxShadow : "6px 7px 6px #bebfbf !important"
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
          style={{ fontFamily: "notoSerif-regular",}}
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
                For every occasion and non-occasion. Shop our range of everyday
                fashion jewellery featuring gold, silver and stone rings and
                earrings, for work, play and everything in between. Give special
                occasions a little extra glimmer with our range of bridal
                jewellery ranging from engagement rings to wedding rings to
                classic party wear.Crafted using the finest jewellery design and
                jewellery making principles, buy our jewellery online for fast
                deliveries and an easy returns policy.
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
