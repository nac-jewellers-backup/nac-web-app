import { Box, Hidden } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React from "react";
import Homenote from "../../components/timeline/Homenote";

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
                  alt="coverimage"
                  loading="lazy"
                  height="337"
                  width="340"
                />
              </div>
            </Box>
            <Box>
              <div className={classes.note}>
                <Homenote
                  content={
                    props.data.content ??
                    "s In 1973, Shri N. Anjaneyalu Chetty started a jewellery shop in Mylapore hoping to find loyal patrons. What began as a small store was soon a flourishing business and NAC became a household name in Mylapore!"
                  }
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
              loading="lazy"
              height="100%"
              width="100%"
            />
          </div>
        </Box>
      </Hidden>
    </>
  );
}
