import React from "react";
import styles from "./style";
import { Grid, Hidden } from "@material-ui/core";
import Header from 'components/SilverComponents/Header';
import Accordian from 'components/aboutus/accordian';
import SideData from 'components/aboutus/sideData';
import { AboutUs,Terms,Return,Delivery,Privacy,Faqs } from 'mappers/dummydata/aboutUs'
import {Educations,Maps} from 'mappers/dummydata/education'
import EducationPage from 'components/education/education'
import SiteMap from 'components/sitemap/sitemap'
import SocialFields from 'components/socialfield/index'
import Slideshow from 'components/Carousel/carosul'

export default function AboutusPage(props) {
    const [state, setState] = React.useState({
        index: "",
    })
    const classes = styles();
    const values=()=>{
        if (props.match.path === '/aboutuspage') {
            return AboutUs
        }
        else if (props.match.path === '/terms') {
            return Terms
        }
        else if (props.match.path === '/return') {
            return Return
        }
        else if (props.match.path === '/delivery') {
            return Delivery
        }
        else if (props.match.path === '/privacy') {
            return Privacy
        }
        else if (props.match.path === '/educationpage') {
            return Educations
        }
        else if (props.match.path === '/sitemap') {
            return Maps
        }
        else if (props.match.path === '/faq') {
            return Faqs
        }
    }

   
    // console.log(styles)
    return (
        <Grid container xs={12}>

            {/* {alert(JSON.stringify(Header))} */}
            <Header />
            <Grid item xs={12}>
                <Slideshow dataCarousel={values()&&values().carouselTop&&values().carouselTop.setting}>
                    {values()&&values().carouselTop&&values().carouselTop.data&&values().carouselTop.data.map((val, index) => (
                        <Grid container key={index}>
                            <img
                                src={val.img}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </Grid>
                    ))}
                </Slideshow>
            </Grid>
            <Grid item className={classes.paddingsss}>
                <Grid container className={classes.mainWidths}>
                    <Grid container className={classes.subWidth}>
                        <Hidden smDown>
                            <Grid item className={classes.subWidths} lg={3} sm={3} md={3}>
                                <Grid item className={classes.sideContent}>
                                    <SideData value={values()} />
                                </Grid>
                            </Grid>
                        </Hidden>
                        <Grid item className={classes.mainContent} lg={6} xs={12} md={6} sm={12}>
<>
                        {props.match.path === '/educationpage' && <EducationPage value={values()} />}
                        {props.match.path === '/sitemap' && <SiteMap value={values()} />}
                        {props.match.path !== '/educationpage' && <Accordian value={values()} />}
                            </>
                        </Grid>
                        <Hidden smDown>
                            <Grid item className={classes.rightContent} lg={3} sm={3} md={3}>
                                <Grid item className={classes.sideContent}>
                                    <SocialFields />
                                </Grid>
                            </Grid>
                        </Hidden>
                    </Grid>


                </Grid>
            </Grid>

        </Grid>
    )
}