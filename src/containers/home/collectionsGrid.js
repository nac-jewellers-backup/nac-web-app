import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
  gridimg: {
    objectFit: "cover",
  },
  coverfooter: {
    background: "rgba(183, 130, 49, 0.85)",
    color: "white",
    fontSize: 15,
    zIndex: 1,
    padding: 4,
    marginBottom: -14,
    textAlign: "center",
  },
  titlefooter: {
    [theme.breakpoints.up("xs")]: {
      fontSize: 13,
    },
    whiteSpace: "noWrap",
  },
}));

const tileData = [
  {
    img: "https://assets.stylori.com/images/Static+Pages/Home+Page/blush+3.png",
    title: "Image",
    author: "author",
    cols: 1,
    rows: 2,
  },
  {
    img: "https://assets.stylori.com/images/Static+Pages/Home+Page/blush+3.png",
    title: "Image",
    author: "author",
    cols: 1,
  },
  {
    img: "https://assets.stylori.com/images/Static+Pages/Home+Page/blush+3.png",
    title: "Image",
    author: "author",
    cols: 1,
    rows: 1,
  },
  {
    img: "https://assets.stylori.com/images/Static+Pages/Home+Page/blush+3.png",
    title: "Image",
    author: "author",
    cols: 1,
  },
];
export function AdvancedGridList() {
  const classes = useStyles();

  return (
    <>
      <Hidden smDown>
        <Grid container spacing={1} style={{ padding: "30px" }}>
          <Grid item xs={4}>
            <div className="parent">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Collection+tile/Fabula_tile_385+X+300_px.jpg"
                alt="NAC"
                width="100%"
                height="300"
                className={classes.gridimg}
              />
              <div className="child" style={{ width: "100%" }}>
                <div className={classes.coverfooter}>
                  <b>SHOP</b>&nbsp;
                </div>
                <div>&nbsp; </div>
              </div>
            </div>
            <div className="parent">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Collection+tile/Diamond_tile_385+X+600_px.jpg"
                alt="NAC"
                width="100%"
                height="600"
                className={classes.gridimg}
              />
              <div className="child" style={{ width: "100%" }}>
                <div className={classes.coverfooter}>
                  <b>SHOP</b>&nbsp;
                </div>
                <div>&nbsp; </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <div className="parent">
                  <img
                    src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Collection+tile/Rewind_tile_385+X+300_px.jpg"
                    alt="NAC"
                    width="100%"
                    height="300"
                    className={classes.gridimg}
                  />
                  <div className="child" style={{ width: "100%" }}>
                    <div className={classes.coverfooter}>
                      <b>SHOP</b>&nbsp;
                    </div>
                    <div>&nbsp; </div>
                  </div>
                </div>
                <div className="parent">
                  <img
                    src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Collection+tile/Nagas_tile_385+X+300_px.jpg"
                    alt="NAC"
                    width="100%"
                    height="300"
                    className={classes.gridimg}
                  />
                  <div className="child" style={{ width: "100%" }}>
                    <div className={classes.coverfooter}>
                      <b>SHOP</b>&nbsp;
                    </div>
                    <div>&nbsp; </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="parent">
                  <img
                    src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Collection+tile/Muhurtham_tile_385+X+600_px.jpg"
                    alt="NAC"
                    width="100%"
                    height="604"
                  />
                  <div className="child" style={{ width: "100%" }}>
                    <div className={classes.coverfooter}>
                      <b>SHOP</b>&nbsp;
                    </div>
                    <div>&nbsp; </div>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <div className="parent">
                  <img
                    src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Collection+tile/Stylori_tile_770+X+300_px.jpg"
                    alt="NAC"
                    width="100%"
                    height="296"
                    style={{
                      objectFit: "cover",
                      objectPosition: "40% 5%",
                    }}
                  />
                  <div className="child" style={{ width: "100%" }}>
                    <div className={classes.coverfooter}>
                      <b>SHOP</b>&nbsp;
                    </div>
                    <div>&nbsp; </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            style={{ paddingRight: 5, paddingLeft: 5 }}
          >
            <Grid item xs={8}>
              <div className="parent">
                <img
                  src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Collection+tile/StyloriSilver_tile_770+X+300_px.jpg"
                  alt="NAC"
                  width="100%"
                  height="300"
                  className={classes.gridimg}
                />
                <div className="child" style={{ width: "100%" }}>
                  <div className={classes.coverfooter}>
                    <b>SHOP</b>&nbsp;
                  </div>
                  <div>&nbsp; </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="parent">
                <img
                  src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Collection+tile/Youngones_tile_385+X+300_px.jpg"
                  alt="NAC"
                  width="100%"
                  height="300"
                  className={classes.gridimg}
                />
                <div className="child" style={{ width: "100%" }}>
                  <div className={classes.coverfooter}>
                    <b>SHOP</b>&nbsp;
                  </div>
                  <div>&nbsp; </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <div class="grid-container-sm">
          <div class="grid-item-sm item1-sm">
            {" "}
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Collection+tile/Rewind_tile_385+X+300_px.jpg"
              alt="NAC"
              width="100%"
              height="100%"
              className={classes.gridimg}
            />
            <div className="overlayGrid">
              <b className={classes.titlefooter}>SHOP</b>&nbsp;
              <span className={classes.titlefooter}></span>
            </div>
          </div>
          <div class="grid-item-sm item111-sm">
            {" "}
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Collection+tile/Fabula_tile_385+X+300_px.jpg"
              alt="NAC"
              width="100%"
              height="100%"
              className={classes.gridimg}
            />
            <div className="overlayGrid">
              <b className={classes.titlefooter}>SHOP</b>&nbsp;{" "}
              <span className={classes.titlefooter}></span>
            </div>
          </div>
          <div class="grid-item-sm item112-sm">
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Collection+tile/Nagas_tile_385+X+300_px.jpg"
              alt="NAC"
              width="100%"
              height="100%"
              className={classes.gridimg}
            />
            <div className="overlayGrid">
              <b className={classes.titlefooter}>SHOP</b>&nbsp;
              <span className={classes.titlefooter}></span>
            </div>
          </div>
          <div class="grid-item-sm item113-sm">
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Collection+tile/Youngones_tile_385+X+300_px.jpg"
              alt="NAC"
              width="100%"
              height="100%"
              className={classes.gridimg}
            />
            <div className="overlayGrid">
              <b className={classes.titlefooter}>SHOP</b>&nbsp;
              <span className={classes.titlefooter}></span>
            </div>
          </div>
          <div class="grid-item-sm item11-sm">
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Collection+tile/Muhurtham_tile_385+X+600_px.jpg"
              alt="NAC"
              width="100%"
              height="100%"
              className={classes.gridimg}
            />
            <div className="overlayGrid">
              <b className={classes.titlefooter}>SHOP</b>&nbsp;
              <span className={classes.titlefooter}></span>
            </div>
          </div>
          <div class="grid-item-sm item0-sm">
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/Collection+tile/Stylori_tile_770+X+300_px.jpg"
              alt="NAC"
              className={classes.gridimg}
              width="100%"
              height="100%"
            />
            <div className="overlayGrid">
              <b className={classes.titlefooter}>SHOP</b>&nbsp;
              <span className={classes.titlefooter}></span>
            </div>
          </div>
        </div>
      </Hidden>
    </>
  );
}
