import { Grid, Hidden } from "@material-ui/core";
import Accordian from "components/aboutus/accordian";
import EducationPage from "components/education/education";
import Footer from "components/Footer/Footer";
import Header from "components/SilverComponents/Header";
import SiteMap from "components/sitemap/sitemap";
import ContactUs from "containers/contactus/contact";
import {
  AboutUs,






  Contacts, Delivery,

  Faqs, Privacy, Return,



  Terms
} from "mappers/dummydata/aboutUs";
import { Educations, Maps } from "mappers/dummydata/education";
import React from "react";
import styles from "./style";

export default function AboutusPage(props) {
  const [state, setState] = React.useState({
    index: "",
  });

  // const  componentDidMount = () => {
  //     window.scrollTo(0, 0);
  // }
  const classes = styles();
  const values = () => {
    // alert(window.location.pathname)
    if (window.location.pathname === "/aboutus") {
      return AboutUs;
    } else if (window.location.pathname === "/termsconditions") {
      return Terms;
    } else if (window.location.pathname === "/return") {
      return Return;
    } else if (window.location.pathname === "/delivery") {
      return Delivery;
    } else if (window.location.pathname === "/privacy") {
      return Privacy;
    } else if (window.location.pathname === "/education") {
      return Educations;
    } else if (window.location.pathname === "/sitemap") {
      return Maps;
    } else if (window.location.pathname === "/faqs") {
      return Faqs;
    } else if (window.location.pathname === "/contactus") {
      return Contacts;
    }
    else return null;
  };
  React.useEffect(() => {

    let hashedLocation = window.location.hash.replace("#", "");
    if (hashedLocation) {
      let elmnt = document.getElementById(hashedLocation);
      elmnt.scrollIntoView();
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid container xs={12}>
      <Header />
      <Grid item xs={12}>
        {/* <Hidden smDown>
          <Slideshow
            dataCarousel={
              values() && values().carouselTop && values().carouselTop.setting
            }
          >
            {values() &&
              values().carouselTop &&
              values().carouselTop.data &&
              values().carouselTop.data.map((val, index) => (
                <Grid container key={index}>
                  <img
                    src={val.img}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
              ))}
          </Slideshow>
        </Hidden>
        <Hidden mdUp>
          <Slideshow
            dataCarousel={
              values() && values().carouselTop && values().carouselTop.setting
            }
          >
            {values() &&
              values().carouselTop &&
              values().carouselTop.data &&
              values().carouselTop.data.map((val, index) => (
                <Grid container key={index}>
                  <img
                    src={val.mobileImg}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
              ))}
          </Slideshow>
        </Hidden> */}
      </Grid>
      <Hidden smDown>
        <Grid item className={classes.paddingsss}>
          <Grid container className={classes.mainWidths}>
            <Grid container className={classes.subWidth}>
              {/* <Hidden smDown>
              <Grid item className={classes.subWidths} lg={3} sm={3} md={3}>
                <Grid item className={classes.sideContent}>
                  <SideData value={values()} data={sidemenu} />
                </Grid>
              </Grid>
            </Hidden> */}
              <Grid
                item
                className={classes.mainContent}
                lg={12}
                xs={12}
                md={12}
                sm={12}
              >
                <>
                  {window.location.pathname === "/education" && (
                    <EducationPage value={values()} />
                  )}
                  {window.location.pathname === "/sitemap" && (
                    <SiteMap value={values()} />
                  )}
                  {window.location.pathname === "/contactus" && <ContactUs />}
                  {window.location.pathname !== "/education" && (
                    <Accordian value={values()} />
                  )}
                </>
              </Grid>
              {/* <Hidden smDown>
              <Grid item className={classes.rightContent} lg={3} sm={3} md={3}>
                <Grid item className={classes.sideContent}>
                  <SocialFields />
                </Grid>
              </Grid>
            </Hidden> */}
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <Hidden mdUp>

        <Grid container style={{ padding: "12px", overflow: "hidden" }}>
          <Grid
            item
            xs={12}
          >
            <>
              <br />
              {window.location.pathname === "/contactus" && <ContactUs />}
              <br />
              <br />
            </>
          </Grid>

        </Grid>

      </Hidden>
      <Footer />
    </Grid>
  );
}
