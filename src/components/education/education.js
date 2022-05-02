import React from 'react'
import styles from './style'
import { Grid, Typography, List, ListItem, Collapse } from '@material-ui/core'

export default function EducationPage(props) {
    const value = props.value
    const classes = styles();
    return (
        <Grid container>
            <Grid container>
                {value.data.map((val) =>
                    <Grid container className={classes.container}>
                        <Grid item className={classes.displays} lg={4} md={4} sm={12} xs={12}>
                            <Grid item className={classes.firstGrid}>
                                <img className={classes.innerimg} src={val.img} loading="lazy" alt='...' />
                            </Grid>
                        </Grid>
                        <Grid item lg={8} md={8} sm={12} xs={12}>
                            <Typography className={classes.title}>{val.title}</Typography>
                            <Typography className={classes.subtitle}>{val.subtitle}</Typography>
                            <Grid item className={classes.secGrid}>
                                {val.para}
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
}

