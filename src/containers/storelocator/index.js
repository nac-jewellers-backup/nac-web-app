import React from "react";
import { Grid, Hidden, Button, Typography } from "@material-ui/core";
import style from "./style";
import Storelocator from "components/storelocator/storelocator";
import Header from "components/SilverComponents/Header";
import { storeLocatorData } from "mappers/dummydata/storeLocator";
import SocialFields from "components/socialfield/index";
import Slideshow from "components/Carousel/carosul";
import Footer from "components/Footer/Footer";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import ExpandMore from "@material-ui/icons/ExpandMore";


const StyledMenu = withStyles({
  paper: {
  
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export default function Locator(props) {
  const [anchorOne, setAnchorOne] = React.useState(null);
  const [anchorTwo, setAnchorTwo] = React.useState(null);

  const classes = style();

  return (
    <Grid container xs={12} lg={12}>
      <Header />
      <Grid item xs={12}>
        <Slideshow dataCarousel={storeLocatorData.carouselTop.setting}>
          {storeLocatorData.carouselTop.data.map((val, index) => (
            <Grid container key={index}>
              <img src={val.img} style={{ width: "100%", height: "100%" }} />
            </Grid>
          ))}
        </Slideshow>
      </Grid>
      <Grid container className={classes.mainWidths}>
        <Grid container className={classes.topPadding}>
          {/* ------------------------------------------Drop Down Button------------------------------- */}
          <Grid container className={classes.DropDownContainer}>
            <Grid className={classes.DropDownGrid}>
              <Typography
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={(e) => {
                  setAnchorOne(e.currentTarget);
                }}
                className={classes.DropDownText}
              >
                State <ExpandMore className={classes.listItemIcon} />
              </Typography>
              <StyledMenu
                id="customized-menu"
                anchorEl={anchorOne}
                keepMounted
                open={Boolean(anchorOne)}
                onClose={() => {
                  setAnchorOne(null);
                }}
              >
                <Typography className={classes.listItemText}>
                  Tamil Nadu 
                </Typography>
                <Typography className={classes.listItemText}>
                  Andhra Pradesh
                </Typography>
              </StyledMenu>
            </Grid>

            <Grid>
              <Typography
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={(e) => {
                  setAnchorTwo(e.currentTarget);
                }}
                className={classes.DropDownText}
              >
                City <ExpandMore className={classes.listItemIcon} />
              </Typography>
              <StyledMenu
                id="customized-menu"
                anchorEl={anchorTwo}
                keepMounted
                open={Boolean(anchorTwo)}
                onClose={() => {
                  setAnchorTwo(null);
                }}
                style={{ padding: "0px !important" }}
              >
                <Typography className={classes.listItemText}>
                  Chennai
                </Typography>{" "}

                <Typography className={classes.listItemText}>
                  Kanchipuram
                </Typography>{" "}
                <Typography className={classes.listItemText}>
                  Tiruvallur
                </Typography>{" "}
                <Typography className={classes.listItemText}>
                  Vijayawada
                </Typography>
              </StyledMenu>
            </Grid>
          </Grid>

          {/* ---------------------------------------------------------------------------- */}
          <Grid container xs={12} md={9} lg={9}>
            <Storelocator value={storeLocatorData} />
          </Grid>
          <Hidden smDown>
            <Grid item lg={3} md={3} className={classes.sideContent}>
              <SocialFields />
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}
