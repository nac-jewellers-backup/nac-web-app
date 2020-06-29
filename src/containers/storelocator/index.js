import React from 'react';
import { Grid, Hidden } from '@material-ui/core'
import style from './style'
import Storelocator from 'components/storelocator/storelocator'
import Header from 'components/SilverComponents/Header'
import { storeLocatorData } from 'mappers/dummydata/storeLocator'
import SocialFields from 'components/socialfield/index'
import Slideshow from 'components/Carousel/carosul'
import Footer from "components/Footer/Footer";

export default function Locator(props) {


    const classes = style();

    return (
        <Grid container xs={12} lg={12}>
            <Header />
            <Grid item xs={12}>
                <Slideshow dataCarousel={storeLocatorData.carouselTop.setting}>
                    {storeLocatorData.carouselTop.data.map((val, index) => (
                        <Grid container key={index}>
                            <img
                                src={val.img}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </Grid>
                    ))}
                </Slideshow>
            </Grid>
            <Grid container className={classes.mainWidths}>
                <Grid container className={classes.topPadding}>
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
            <Footer/>
        </Grid>
    )


}