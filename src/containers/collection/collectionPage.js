import React from 'react'
import { Typography, Grid, Hidden } from '@material-ui/core'
import styles from './collectionPageStyle';
import Slideshow from '../../components/carousal/carousal';
import { CollectionPageNac,YoungOnes } from 'mappers/dummydata/collectionNac';
import Story from 'components/story';
import LargeTiles from 'components/largeTile/index';
import FeaturedProduct from 'components/featuredProduct/index';
import SubListingCarousel from 'components/subListingCarousel/subListingCarousel'
import Header from 'components/header/header'


export default function CollectionPage(props) {
    const classes = styles();
    const [state, setstate] = React.useState({
        loading: false,
        count: ""
    });
    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };
    const slider = React.createRef();
     
    return (
        <Grid container xs={12} lg={12} md={12} sm={12} spacing={12} style={{width:"100%"}}>
            <Grid xs={12} container>
            <Header />
            </Grid>
                {CollectionPageNac.carouselTop.setting.arrowsImg && (
                    <Grid container>
                        <Grid
                            item
                            onClick={previous}
                            className={classes.preButton}
                        ></Grid>
                        <Grid item onClick={next} className={classes.nextButton}></Grid>
                    </Grid>
                )}

                <Slideshow style={{width:"100%"}} dataCarousel={CollectionPageNac.carouselTop.setting}
                    sliderRef={slider}    >
                    {CollectionPageNac.carouselTop.data.map((val, index) => (
                        <Grid container key={index}>
                            <img
                                src={val.img}
                                className={classes.mainCarosel}
                            />
                        </Grid>
                    ))}
                </Slideshow>

            <Grid container>
                        <Story 
                        heading={YoungOnes.data.heading} 
                        para={YoungOnes.data.para} 
                        // store={YoungOnes.data.store} 
                        />
            </Grid>
                    <Grid container xs={12}>
                       <LargeTiles />
                    </Grid>
            <Grid container>
                {/* <FeaturedProduct /> */}
                <SubListingCarousel />
            </Grid>



        </Grid>
    )

}
