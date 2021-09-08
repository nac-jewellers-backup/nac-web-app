import { Box, Hidden } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React from "react";
import Homenote from "./Homenote";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "6px 7px 6px #bebfbf !important",
    backgroundColor: "#F9E3BF",
    height: 350,
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
    padding: "50px",
    backgroundColor: "#F9E3BF",
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
  note: {
    backgroundColor: "#F9E3BF",
    height: "100%",
  },
  coverborder: {
    border: "4px solid white",
  },
}));

export function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      {/* 
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
                <Homenote />
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
     
        <CardMedia
          className={classes.cover}
          image={props.data.image}
          title="Live from space album cover"
        />
      </Hidden>
         </Card>*/}
      <Hidden smDown>
        <div className={classes.root}>
          <Box
            display="flex"
            flexDirection="row"
            height={350}
            alignItems="center"
          >
            <Box
              border={2}
              borderColor="#BB8D57"
              style={{
                paddingRight: 3,
                paddingLeft: 3,
                paddingTop: 3,
              }}
              bgcolor="white"
            >
              <div className={classes.coverborder}>
                <img
                  src={props.data.image}
                  alt="cover image"
                  height="337"
                  width="340"
                />
              </div>
            </Box>
            <Box>
              <div className={classes.note}>
                <Homenote
                  content=" In 1973, Shri N. Anjaneyalu Chetty started a jewellery shop in
            Mylapore hoping to find loyal patrons. What began as a small store
            was soon a flourishing business and NAC became a household name in
            Mylapore!"
                />
              </div>
            </Box>
          </Box>
        </div>
      </Hidden>
      <Hidden mdUp>
        <Box
          border={2}
          borderColor="#BB8D57"
          style={{
            paddingRight: 3,
            paddingLeft: 3,
            paddingTop: 3,
          }}
        >
          <div className={classes.coverborder}>
            <img
              src={props.data.image}
              alt="cover image"
              height="100%"
              width="100%"
            />
          </div>
        </Box>
      </Hidden>
    </>
  );
}
