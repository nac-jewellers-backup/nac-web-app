import React from 'react'
import styles from './style'
import { Grid, Typography} from '@material-ui/core'

export default function News(props){
const classes=styles()
const value=props.value
    return(
        <Grid container className={classes.root} xs={12}>
                <Grid item className={classes.paddings}>
                    <img loading="lazy" alt='...' className={classes.img} src="data:image/png;base64,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" />
                </Grid>
    <Typography className={classes.title}>{value.title}</Typography>
    {value.data.map((val)=>
            <Grid container className={classes.container}>
            <Grid item className={classes.firstGrid} xs={3}>
               <img className={classes.innerimg} src={val.img} loading="lazy" alt='...'/>
            </Grid> 
            <Grid item className={classes.secGrid} xs={9}>
            {val.para}
            </Grid>
        </Grid>
    )}
    
        </Grid>

       
    )
}