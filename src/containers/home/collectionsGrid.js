import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "./index.css";
import { Hidden } from "@material-ui/core";

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
        <div class="grid-container">
          <div class="grid-item item3">3</div>
          <div class="grid-item item4">4</div>
          <div class="grid-item item2">2</div>
          <div class="grid-item item4">4</div>
          <div class="grid-item item11">2</div>
          <div class="grid-item item44">4</div>
          <div class="grid-item item45">4</div>
          <div class="grid-item item3">3</div>
        </div>
      </Hidden>
      <Hidden mdUp>
        <div class="grid-container-sm">
          <div class="grid-item-sm item1-sm">3</div>
          <div class="grid-item-sm item111-sm">3</div>
          <div class="grid-item-sm item112-sm">3</div>
          <div class="grid-item-sm item113-sm">3</div>
          <div class="grid-item-sm item11-sm">3</div>
          <div class="grid-item-sm item0-sm">3</div>
        </div>
      </Hidden>
    </>
  );
}
