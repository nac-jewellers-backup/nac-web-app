import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import styles from './style';
import Header from 'components/SilverComponents/Header';
import StoreDetails from './storeDetails'
export default function StoreLocationDetails(props) {


    const classes = styles();
    return (
        <Grid container>
            <Header />
            
            <Grid container xs={12}>
                <StoreDetails />
            </Grid>
        </Grid>
    )

}