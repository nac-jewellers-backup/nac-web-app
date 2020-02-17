import React from 'react'
// import './Testimony.css';
import { Grid } from '@material-ui/core';
import Testimonycarosol from './testimonialcarosel';
import {Testimonial} from '../../mappers/dummydata/homeNac'


export default function Testimony(props) {
    return (
        <Grid Container style={{ width: "100%" }}>
          
            <Testimonycarosol carosolData={Testimonial.data } dataCarousel={Testimonial.setting} />
            
        </Grid >
    )
}
