import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import '../product-image-slider/product-images.css'
import styles from './style'
import './pricing.css'

export default function Pricing(props) {
    const classes = styles();
    return (
        <div>
            {
                props.title ?
                    <Typography
                        variant="caption"
                        component="div"
                        className={`pricing ${props.title != null & props.title !== '' ? '' : 'shine'}`}
                    >
                        {/* Dazzling Gold Bloom Diamond Pendant */}
                        {props.title}
                    </Typography>
                    :
                    ""
            }
            {/*  */}
            <Typography style={{ display: "flex", width: '100%' }}>
                <Typography
                    variant="caption"
                    className={`pricing-p${props.price != null & props.price !== '' ? '' : 'shine'} ${classes.deletePrice} ${classes.dis}`}
                    component="p"
                >
                    <del>₹&nbsp;{props.price}</del>
                </Typography>
                <Typography

                    variant="h6"
                    component="h6"
                    className={`${props.offerPrice != null & props.offerPrice !== '' ? '' : 'shine'} ${classes.colorMain} ${classes.h6FontSize} ${classes.offerPricePadding} `}

                >
                    {/* ₹&nbsp;{props.offerPrice} */}
                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(props.offerPrice)}
                </Typography>
            </Typography>
            {/*  */}

            {
                props.offerDiscount ?
                    <Grid container spacing={12}>
                        <Grid item lg={12} xs={12} > <span className={`discount ${classes.backgsecondary}`}>{props.offerDiscount}</span></Grid>
                    </Grid>
                    :

                    <Typography style={{ display: "flex" }}>
                        {/* <Typography
                            variant="body2"
                            color="textSecondary"
                            className={`${classes.colorMain} ${classes.youSave}`}
                            component="p"

                        >
                            You save
                </Typography> */}
                        <Typography
                            variant="caption"
                            component="p"
                            className={`${props.save != null & props.save !== '' ? '' : 'shine'} ${classes.colorMain} ${classes.offerPricePadding} `}
                        >
                           you save {props.save}
                        </Typography>
                    </Typography>

            }
        </div>
    )
}