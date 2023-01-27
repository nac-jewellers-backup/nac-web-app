import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import styloriGagets from '../../assets/styloriGagets.png'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: "5%",
        margin: "auto"
    },
    houseofnac: {
      
        width: "60%",
        height: "auto",
        margin: " 0 auto"
    }
}));

export default function ListDividers() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
           
            <img className={classes.houseofnac} src={styloriGagets} loading="lazy" alt='...'/>
        </Grid>
    );
}
