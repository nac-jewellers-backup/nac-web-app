import React from 'react'
import { Grid } from '@material-ui/core'
import styles from './titlestyle'
 

export const Title = (props) =>{
    const classes = styles()
    return(
        <Grid container >
            <Grid item xs={12} className={classes.title}>
                {props.title}
            </Grid>
        </Grid>
    )
}