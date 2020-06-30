import React from 'react'
import styles from './style'
import { Grid, Typography } from "@material-ui/core";

export default function DiamondShpae(props) {

    const value = props.value
    const classes = styles();
    return (
        <Grid container className={classes.diamondShapeContainer} xs={12}>
            <Grid item className={classes.containers} xs={12} >
                <Grid item className={classes.numEffect}>
                    1
              </Grid>
                <Typography className={classes.text}>Select Diamond Shape</Typography>
            </Grid>
            <Grid container className={classes.containers2} xs={12}>
                <Grid item xs={12} className={classes.containers2Item}>
                    {value.ImageData.map((val, i) =>
                        <Grid item xs={12} className={classes[val.image]}>
                            <a href="" className={classes.name}>{val.name}</a>
                        </Grid>

                    )}

                </Grid>
            </Grid>
        </Grid>
    )
}