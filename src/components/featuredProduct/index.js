import React from 'react'
import { Typography, Grid, Hidden } from '@material-ui/core'
import styles from './featuredProductStyle';
import FeaturedProduct from './featuredProduct';
import { YoungOnes } from 'mappers/dummydata/collectionNac';


export default function FeaturedProducts(props) {

    const classes = styles();

    return (
        <Grid item xs={12} sm={8} md={8} lg={8} xl={8} className={classes.cardPadding}  >

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} alignItems="center" className={classes.paddings}>

                <Typography variant="h5" className={classes.title}>
                {YoungOnes.carouselData.title}
                    </Typography>
                <Grid item xs={12} className={classes.anchorMain}>
                    <a className={classes.anchor} href="">
                        <Grid className={classes.algins}>
    <Typography className={classes.anchor}>{YoungOnes.carouselData.link}</Typography>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAMAAAAliK2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRFqKio8fHxREREGRkZYWFh4uLijIyMNjY2////EoUdpQAAAAl0Uk5T//////////8AU094EgAAADpJREFUeNpUzdsKADAIAlBt1///4jkLxoLwYA9h1+BhooCGOqW8V1lLBlcYjOCFU8gUulMY/H8dAQYArKoCrGXO+aEAAAAASUVORK5CYII=" />

                        </Grid>
                        <Grid>
                        </Grid>
                    </a>
                </Grid>
                <FeaturedProduct
                />
            </Grid>
        </Grid>

    )
}