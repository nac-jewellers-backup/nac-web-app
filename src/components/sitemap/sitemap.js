import React from 'react'
import styles from './style'
import { Grid, Typography } from "@material-ui/core";



export default function SiteMap(props) {
    const value = props.value
    const classes = styles()
    return (
        <Grid container xs={12}>
            <Grid container>
            {value.info.map((val) =>
                <Grid item className={classes.paddings} lg={4} md={4} sm={4} xs={6}>
                    
                    
                        <a className={classes.anchors} href="#">  <Typography className={classes.title} >{val.title}</Typography></a>
                        <>{val.data.map((v) =>
                            <a className={classes.anchors} href="#">  <Typography className={classes.subtitle} >{v.subtitle}</Typography></a>

                        )}
                        </>
                        </Grid>
                    )}
    

              
                {/* <Grid item lg={4} xs={12}>

                    </Grid>
                    <Grid item lg={4} xs={12}>

                    </Grid>
                    <Grid item lg={4} xs={12}>

                    </Grid> */}
            </Grid>
        </Grid>
    )
}