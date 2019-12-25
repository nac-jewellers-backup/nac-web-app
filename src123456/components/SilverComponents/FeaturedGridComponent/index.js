import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from './style'
import Slideshow from '../../Carousel/carosul'
import './index.css'

export const FeaturedGridComponent = (props) => {
    const classes = useStyles();
    return (
        <Grid container xs={12} style={{ margin: "20px 0px 50px 0px", padding: "24px 5px 10px 10px" }} justify="center">

            <Grid item xs={12} style={{  boxShadow: '10px 10px 5px #ccc'}}>
                <Slideshow dataCarousel={props.data[0].settings} >
                    {props.data[0].images.map((val, Index) =>
                        <img src={val} className={`${classes.img}`} />
                    )}
                </Slideshow>

            </Grid>

        </Grid>
    );
}