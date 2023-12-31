import { Grid, Hidden } from '@material-ui/core';
import React from 'react';
import Banner from './banner';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    headContent: {
        outline: "none !important",
        position: "relative",
      },
  }));

const BannerComponent = (props)=> {
    const classes = useStyles();
    const {banners = [],dataCarousel="single"} = props;
    banners.sort((a,b) =>(a.position < b.position) ? -1 : (a.position > b.position) ? 1 : 0)
    return (
        <Banner
          dataCarousel={dataCarousel}
        >
          {banners.map((val, index) => ( 
            <>
              <Hidden smDown>
                <Grid container key={index} className={classes.headContent}>
                  {/* <a href={val?.url} style={{ width: "100%" }}> */}
                    <img
                      alt="images"
                      loading="lazy"
                      src={val?.web ?? val?.img}
                      style={{ width: "100%", height: props?.forBlog ? "70vh" : "100%" }}
                    />
                  {/* </a> */}
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <Grid container key={index} className={classes.headContent}>
                  {/* <a href={val.url}> */}
                    <img
                      alt="images"
                      loading="lazy"
                      src={val.mobile}
                      style={{ width: "100%", height: "100%" }}
                    />
                  {/* </a> */}
                </Grid>
              </Hidden>
            </>
          ))}
        </Banner>
    );
}

export default BannerComponent;