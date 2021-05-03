import React, { useState } from "react";
import Slideshow from "../../Carousel/carosul";
import { useDummyRequest } from "../../../hooks";
import { HomedataSilver } from "../../../mappers";
import { solitareImageHoverData } from "../../../mappers";
import { useStyles } from "./styles.js";
import { Grid, Container, Hidden, Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { trackWindowScroll } from "react-lazy-load-image-component";

const ProductModal = (props) => {
  const dataCarousel = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
  };
  const { fadeImagessublist } = props.data;
  const classes = useStyles();
  const [pagination, setPagination] = useState(4)
  return (
    <>
    <Grid container className={classes.containerTop} justify="center">
      {fadeImagessublist.slice(0,pagination).map((tile) => {
        return (
          <Grid
            item
            xs={12}
            sm={5}
            md={5}
            lg={5}
            xl={5}
            className={`ProductGrids ${classes.ProductGrids}`}
          >
            <Hidden smDown>
              <Slideshow
                class="subslider-carousel"
                dataCarousel={dataCarousel}
                hoverlist={[tile]}
                hover={false}
                hovereffect={true}
                type="hover"
              />
            </Hidden>
            <Hidden mdUp>
              <Slideshow
                class="subslider-carousel"
                hoverlist={tile}
                dataCarousel={dataCarousel}
                WithoutHoverhover={true}
                type="hover"
              />
              <Grid
                container
                item
                xs={12}
                alignContent="space-between"
                justify="center"
                className={classes.productCardDetail}
              >
                <Grid
                  container
                  item
                  xs={12}
                  justify="center"
                  className={classes.productCardTitle}
                >
                  {tile.title}
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  className={`${classes.productCardDescription}`}
                >
                  {tile.description}
                </Grid>
                <Grid container item xs={12} justify="center">
                  <Button
                    variant="contained"
                    className={`${classes.btnshop}`}
                   
                    
                  >
                    SHOP
                  </Button>
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
        );
      })}

    </Grid>
      <Grid container >
        <Grid container item xs={12} justify="center">
        <Button
        onClick={()=>{setPagination(pagination+2)}}
      variant="contained"
      disabled={pagination === fadeImagessublist.length}
      className={`${classes.button}  ${classes.viewmoreColor} ${classes.viewmoreColorSilver}`}>
    {pagination === fadeImagessublist.length?`No more products` : `See more products`}
    </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default (props) => {
  if (window.location.pathname === "/stylorisilver") {
    const { mapped } = useDummyRequest(HomedataSilver);
    if (Object.keys(mapped).length === 0) return "";
    return <ProductModal {...props} data={mapped} />;
  }
  if (window.location.pathname === "/solitaires") {
    const { mapped } = useDummyRequest(solitareImageHoverData);
    if (Object.keys(mapped).length === 0) return "";
    return <ProductModal {...props} data={mapped} />;
  }
};
