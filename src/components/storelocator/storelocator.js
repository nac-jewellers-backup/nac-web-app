import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core'
import style from './style'
import Maps_data from 'mappers/dummydata/googleMap'
export default function Storelocator(props) {

    const value = props.value;
    const classes = style();

    return (
        <>
            {value.data.map((value, key) =>
                <Grid container className={classes.shadow}>

                    <Grid container className={classes.pad} xs={12} lg={12}>
                        <Grid container className={classes.borders} xs={12} sm={5} md={5} lg={5} >
                            <Grid item xs={12}>
                                <img style={{ width: "100%" }} src={value.img} />
                                {/* background-image: url("https://storage.googleapis.com/media.nacjewellers.com/resources/store-locator/Mylapore.jpg");
                 background-repeat: no-repeat; background-position: center center; background-size: cover; height: 189px; */}
                                {/* <hr /> */}
                            </Grid>
                        </Grid>
                        <Grid item className={classes.pads} xs={12} sm={7} md={7} lg={7}>
                            <Typography className={classes.title}>{value.title}</Typography>
                            <Typography dangerouslySetInnerHTML={{ __html: value.para }} className={classes.para}>
                            </Typography>
                            <Grid item>
                                <a style={{ textDecoration: "none" }} href="" target="_blank">
                                    <Button onClick={() => {
                                        
                                        window.location.pathname="/loc/"+value.key
                                    }} className={classes.ViewButton} >{value.button}</Button>
                                </a>
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>

            )}
        </>
    )


}