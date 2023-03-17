import { Grid, Hidden, Link } from "@material-ui/core";
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

export function AdvancedGridList() {
  const classes = useStyles();

  return (
    <>
      <Hidden smDown>
        <Grid container spacing={1} style={{ padding: "40px" }}>
          <Grid item xs={4}>
            <div className="parent">
              <Link href="/jewellery-fabula">
                <img
                  src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Fabula-Jewellery--1-.webp"
                  alt="NAC"
                  loading="lazy"
                  width="100%"
                  height="340"
                  className={classes.gridimg}
                />
                <div className="child" style={{ width: "100%" }}>
                  <div className={classes.coverfooter}>
                    <b>SHOP FABULA</b>&nbsp;
                  </div>
                  <div>&nbsp; </div>
                </div>
              </Link>
            </div>
            <div className="parent">
              <Link href="/diamond-jewellery-bridal">
                <img
                  src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Bridal-Diamond-Jewellery.webp"
                  alt="NAC"
                  loading="lazy"
                  width="100%"
                  height="680"
                  className={classes.gridimg}
                />
                <div className="child" style={{ width: "100%" }}>
                  <div className={classes.coverfooter}>
                    <b> SHOP BRIDAL DIAMOND</b>&nbsp;
                  </div>
                  <div>&nbsp; </div>
                </div>
              </Link>
            </div>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <div className="parent">
                  <Link href="/jewellery-nagas">
                    <img
                      src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Nagas-Gold-Jewellery.webp"
                      alt="NAC"
                      loading="lazy"
                      width="100%"
                      height="340"
                      className={classes.gridimg}
                    />
                    <div className="child" style={{ width: "100%" }}>
                      <div className={classes.coverfooter}>
                        <b>SHOP NAGAS</b>&nbsp;
                      </div>
                      <div>&nbsp; </div>
                    </div>
                  </Link>
                </div>
                <div className="parent">
                  <Link href="/buy+platinum-jewellery">
                    <img
                      src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Platinum-Jewellery.webp"
                      alt="NAC"
                      loading="lazy"
                      width="100%"
                      height="340"
                      className={classes.gridimg}
                    />
                    <div className="child" style={{ width: "100%" }}>
                      <div className={classes.coverfooter}>
                        <b>SHOP PLATINUM</b>&nbsp;
                      </div>
                      <div>&nbsp; </div>
                    </div>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="parent">
                  <Link href="/plain+gold-jewellery-bridal">
                    <img
                      src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Muhurtham_tile_385-X-600_px.webp"
                      alt="NAC"
                      loading="lazy"
                      width="100%"
                      height="684"
                    />
                    <div className="child" style={{ width: "100%" }}>
                      <div className={classes.coverfooter}>
                        <b>SHOP BRIDAL GOLD</b>&nbsp;
                      </div>
                      <div>&nbsp; </div>
                    </div>
                  </Link>
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <div className="parent">
                  <Link href="/jewellery-young+ones">
                    <img
                      src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Young-Ones-Jewellers.webp"
                      alt="NAC"
                      loading="lazy" 
                      width="100%"
                      height="336"
                      style={{
                        objectFit: "cover",
                        objectPosition: "40% 5%",
                      }}
                    />
                    <div className="child" style={{ width: "100%" }}>
                      <div className={classes.coverfooter}>
                        <b>SHOP LITTLE ONES</b>&nbsp;
                      </div>
                      <div>&nbsp; </div>
                    </div>
                  </Link>
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
                <Link href="/jewellery-rewind">
                  <img
                    src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Rewind-Gold-Jewellery.webp"
                    alt="NAC"
                    loading="lazy"
                    width="100%"
                    height="340"
                    className={classes.gridimg}
                  />
                  <div className="child" style={{ width: "100%" }}>
                    <div className={classes.coverfooter}>
                      <b>SHOP REWIND</b>&nbsp;
                    </div>
                    <div>&nbsp; </div>
                  </div>
                </Link>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="parent">
                <Link href="/jewellery-mayura">
                  <img
                    src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Mayura-Diamond-Jewellery.webp"
                    alt="NAC"
                    loading="lazy" 
                    width="100%"
                    height="340"
                    className={classes.gridimg}
                  />
                  <div className="child" style={{ width: "100%" }}>
                    <div className={classes.coverfooter}>
                      <b>SHOP MAYURA</b>&nbsp;
                    </div>
                    <div>&nbsp; </div>
                  </div>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <div class="grid-container-sm">
          <div class="grid-item-sm item1-sm">
            <Link href="/jewellery-nagas">
              {" "}
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Nagas-Gold-Jewellery.webp"
                alt="NAC"
                loading="lazy"
                width="100%"
                height="100%"
                className={classes.gridimg}
              />
              <div className="overlayGrid">
                <b className={classes.titlefooter}>SHOP NAGAS </b>&nbsp;
                <span className={classes.titlefooter}></span>
              </div>
            </Link>
          </div>
          <div class="grid-item-sm item111-sm">
            <Link href="/jewellery-fabula">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Fabula-Jewellery--1-.webp"
                alt="NAC"
                loading="lazy" 
                width="100%"
                height="100%"
                className={classes.gridimg}
              />
              <div className="overlayGrid">
                <b className={classes.titlefooter}> SHOP FABULA</b>&nbsp;{" "}
                <span className={classes.titlefooter}></span>
              </div>
            </Link>
          </div>
          <div class="grid-item-sm item112-sm">
            <Link href="/buy+platinum-jewellery">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Platinum-Jewellery.webp"
                alt="NAC"
                loading="lazy" 
                width="100%"
                height="100%"
                className={classes.gridimg}
              />
              <div className="overlayGrid">
                <b className={classes.titlefooter}>SHOP PLATINUM</b>&nbsp;
                <span className={classes.titlefooter}></span>
              </div>
            </Link>
          </div>
          <div class="grid-item-sm item113-sm">
            <Link href="/jewellery-mayura">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Mayura-Diamond-Jewellery.webp"
                alt="NAC"
                loading="lazy"
                width="100%"
                height="100%"
                className={classes.gridimg}
              />
              <div className="overlayGrid">
                <b className={classes.titlefooter}>SHOP MAYURA</b>&nbsp;
                <span className={classes.titlefooter}></span>
              </div>
            </Link>
          </div>
          <div class="grid-item-sm item11-sm">
            <Link href="/plain+gold-jewellery-bridal">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Muhurtham_tile_385-X-600_px.webp"
                alt="NAC"
                loading="lazy" 
                width="100%"
                height="100%"
                className={classes.gridimg}
              />
              <div className="overlayGrid">
                <b className={classes.titlefooter}> SHOP BRIDAL GOLD</b>&nbsp;
                <span className={classes.titlefooter}></span>
              </div>
            </Link>
          </div>
          <div class="grid-item-sm item0-sm">
            <Link href="/jewellery-young+ones">
              <img
                src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/banners/web/Young-Ones-Jewellers.webp"
                alt="NAC"
                loading="lazy" 
                className={classes.gridimg}
                width="100%"
                height="100%"
              />
              <div className="overlayGrid">
                <b className={classes.titlefooter}> SHOP LITTLE ONES</b>&nbsp;
                <span className={classes.titlefooter}></span>
              </div>
            </Link>
          </div>
        </div>
      </Hidden>
    </>
  );
}
