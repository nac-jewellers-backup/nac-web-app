import React from 'react'
import styles from './style'
import { Grid, Typography} from '@material-ui/core'

export default function Social(props) {
    const classes = styles()
    const value = props.value
    return (
        <Grid container className={classes.root}>
            {/* {props.value.data.map((val)=>
            
            )} */}
            <Typography className={classes.font}>
                {value.title}
            </Typography>
            <Typography className={classes.para}>
                {value.para}
            </Typography>
            <Grid container item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }} className="footer-icons">
                <Grid item xs={12}>
                    <i style={{ fontSize: '34px', color: '#00008b', paddingLeft: '10%', }} className="fa">&#xf09a;</i>
                    <i style={{ fontSize: '34px', color: '#add8e6', paddingLeft: '10%', }} className="fa">&#xf099;</i>
                    <i style={{ fontSize: '34px', color: '#00008b', paddingLeft: '10%', }} className="fa">&#xf16d;</i>

                    {/* <i style={{ fontSize: '24px', color: 'white', paddingLeft: '5%', }} className="fa">&#xf0d5;</i>
                                <i style={{ fontSize: '24px', color: 'white', paddingLeft: '5%', }} className="fa">&#xf231;</i>
                                <i style={{ fontSize: '24px', color: 'white', paddingLeft: '5%', }} className="fa">&#xf16d;</i>
                                <i style={{ fontSize: '24px', color: 'white', paddingLeft: '5%', }} className="fa">&#xf167;</i>
        */}
                </Grid>
            </Grid>
        </Grid>
    )
}