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
        <Grid container>
          <Grid item xs={12}>
            <div class="grid-container">
              <div class="grid-item item3 ">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_collection/Group+46%402x.png"
                  alt="NAC"
                  width="100%"
                  height="100%"
                  className={classes.gridimg}
                />
                <div className="overlayGrid">
                  <b>SHOP</b>&nbsp; DIAMOND SETS
                </div>
              </div>
              <div class="grid-item item4">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_collection/Group+50%402x.png"
                  alt="NAC"
                  width="100%"
                  height="100%"
                  className={classes.gridimg}
                />
                <div className="overlayGrid">
                  <b>SHOP</b>&nbsp; REWIND
                </div>
              </div>
              <div class="grid-item item2">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_page/Group+147%402x.png"
                  alt="NAC"
                  width="100%"
                  height="100%"
                  className={classes.gridimg}
                />
                <div className="overlayGrid">
                  <b>SHOP</b>&nbsp; MUHURTAM
                </div>
              </div>
              <div class="grid-item item4">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_collection/Group+60%402x.png"
                  alt="NAC"
                  width="100%"
                  height="100%"
                  className={classes.gridimg}
                />
                <div className="overlayGrid">
                  <b>SHOP</b>&nbsp; RUDRAMADEVI
                </div>
              </div>
              <div class="grid-item item11">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_collection/Group+64%402x.png"
                  alt="NAC"
                  width="100%"
                  height="100%"
                  className={classes.gridimg}
                />
                <div className="overlayGrid">
                  <b>SHOP</b>&nbsp; FABULA
                </div>
              </div>
              <div class="grid-item item44">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_collection/Group+68%402x.png"
                  alt="NAC"
                  width="100%"
                  height="100%"
                  className={classes.gridimg}
                />
                <div className="overlayGrid">
                  <b>SHOP</b>&nbsp; LITTLE ONES
                </div>
              </div>
              <div class="grid-item item45">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_page/Group+156%402x.png"
                  alt="NAC"
                  width="100%"
                  height="100%"
                  className={classes.gridimg}
                />
                <div className="overlayGrid">
                  <b>SHOP</b>&nbsp; STYLORI
                </div>
              </div>
              <div class="grid-item item3">
                <img
                  src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_collection/Group+73.png"
                  alt="NAC"
                  width="100%"
                  height="100%"
                  className={classes.gridimg}
                />
                <div className="overlayGrid">
                  <b>SHOP</b>&nbsp; MAYURA
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <div class="grid-container-sm">
          <div class="grid-item-sm item1-sm">
            {" "}
            <img
              src="https://assets.stylori.com/images/Static+Pages/Home+Page/mangocollection.png"
              alt="NAC"
              width="100%"
              height="100%"
            />
            <div className="overlayGrid">
              <b>SHOP</b>&nbsp; DIAMOND SETS
            </div>
          </div>
          <div class="grid-item-sm item111-sm">
            {" "}
            <img
              src="https://assets.stylori.com/images/Static+Pages/Home+Page/mangocollection.png"
              alt="NAC"
              width="100%"
              height="100%"
            />
            <div className="overlayGrid">
              <b>SHOP</b>&nbsp; DIAMOND SETS
            </div>
          </div>
          <div class="grid-item-sm item112-sm">
            <img
              src="https://assets.stylori.com/images/Static+Pages/Home+Page/mangocollection.png"
              alt="NAC"
              width="100%"
              height="100%"
            />
            <div className="overlayGrid">
              <b>SHOP</b>&nbsp; REWIND
            </div>
          </div>
          <div class="grid-item-sm item113-sm">
            <img
              src="https://assets.stylori.com/images/Static+Pages/Home+Page/mangocollection.png"
              alt="NAC"
              width="100%"
              height="100%"
            />
            <div className="overlayGrid">
              <b>SHOP</b>&nbsp; MAYURA
            </div>
          </div>
          <div class="grid-item-sm item11-sm">
            <img
              src="https://assets.stylori.com/images/Static+Pages/Home+Page/blush+3.png"
              alt="NAC"
              width="100%"
              height="100%"
            />
            <div className="overlayGrid">
              <b>SHOP</b>&nbsp; MUHURTAM
            </div>
          </div>
          <div class="grid-item-sm item0-sm">
            <img
              src="https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori_+Daisy+Days.png"
              alt="NAC"
              width="100%"
              height="100%"
            />
            <div className="overlayGrid">
              <b>SHOP</b>&nbsp; LITTLE ONES
            </div>
          </div>
        </div>
      </Hidden>
    </>
  );
}
