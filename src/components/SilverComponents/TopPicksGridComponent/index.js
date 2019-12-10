import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from './style'

export const TopPicksGridComponent = (props) => {
    const classes = useStyles();
    return (
        <Grid container xs={12} spacing={5} justify="flex-end">
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3} >
                <img src={props.data[0]["topPicksOne"]} style={{ width: '100%', height: '100%' }} className={`${classes.img}`} />
            </Grid>
            <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} spacing={5}>
                <Grid container item xs={12} spacing={5}>
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <img src={props.data[0]["topPicksFive"]} style={{ width: '100%', height: '100%' }} className={`${classes.img}`} />
                    </Grid>
                    <Grid item xs={6}>
                        <img src={props.data[0]["topPicksThree"]} style={{ width: '100%', height: '100%' }} className={`${classes.img}`} />
                    </Grid>
                    <Grid item xs={6}>
                        <img src={props.data[0]["topPicksFour"]} style={{ width: '100%', height: '100%' }} className={`${classes.img}`} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <img src={props.data[0]["topPicksTwo"]} style={{ width: '100%', height: '100%' }} className={`${classes.img}`} />
            </Grid>
        </Grid>
    );
}
