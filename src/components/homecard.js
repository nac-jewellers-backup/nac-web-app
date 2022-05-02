import React from 'react'
import Grid from '@material-ui/core/Grid';
import { HomeCardData } from '../mappers/dummydata/homeNac';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    main: {
        width: "77%",
        margin: "auto",
        fontFamily: "notoSerif-regular",
        fontSize: "15px",
        lineHeight: 1.42857,
        color: "#5d5d5d",
        marginBottom: "20px",
        [theme.breakpoints.between('xs', 'md')]: {
            width: "93% !important",
        },
        [theme.breakpoints.between('md', 'sm')]: {
            width: "88% !important",
        },
    },
    rootContainer:{
        padding: "10px",
    },
    root: {
        padding: "15px 15px",
        boxShadow: "0 0 5px #888 !important",
    },
    img: {
        height: "auto",
        width: "100%",
        [theme.breakpoints.between('xs', 'sm')]: {
            height: "auto"
        }

    },
    heading: {
        textAlign: "center",
        padding: "10px 0px",
        color: "#191919"
    },
    para: {
        lineHeight: "24px",
        fontFamily: "notoSerif-regular",
        fontSize: "15px",
        color: "#5d5d5d",

    },
    anchorMain: {
        paddingTop: "20px",
        textAlign: "center",
        cursor: "pointer",
        padding: "15px",
        fontWeight: "600",
        fontSize: "14px",
        lineHeight: "1.1",


    },
    anchor: {
        color: "#191919",
        textDecoration: "none",
        fontSize: "14px",
        lineHeight: 1.1,
        fontWeight: "600",
        paddingRight: "10px",
    },
    algins: {
        display: "flex",
        justifyContent: "center",
    },


}))



export default function HomeCard(props) {
    const classes = useStyles();

    return (
        <Grid container className={classes.main}  >
            {props && props.Testimonial && props.Testimonial.map((val, index) => (
                <Grid className={classes.rootContainer} item xs={12} sm={4} lg={4}>
                    <Grid className={classes.root}>
                    <img className={classes.img} src={val.img} loading="lazy" alt='...' />
                    <Typography className={classes.heading} variant="h5">
                        {val.heading}
                    </Typography>
                    <Typography className={classes.para}>
                        {(val.para).slice(0, 100)}
                        <span style={{ display: 'inline' }}>...</span>
                    </Typography>
                    <Grid item xs={12} className={classes.anchorMain}>
                        <a className={classes.anchor} href="">
                            <Grid className={classes.algins}>
                                <Typography className={classes.anchor}> View collection</Typography>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAMAAAAliK2kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtQTFRFqKio8fHxREREGRkZYWFh4uLijIyMNjY2////EoUdpQAAAAl0Uk5T//////////8AU094EgAAADpJREFUeNpUzdsKADAIAlBt1///4jkLxoLwYA9h1+BhooCGOqW8V1lLBlcYjOCFU8gUulMY/H8dAQYArKoCrGXO+aEAAAAASUVORK5CYII=" loading="lazy" alt='...'/>

                            </Grid>
                            <Grid>
                            </Grid>
                        </a>
                    </Grid>
                    </Grid>
                </Grid>
            ))

            }

        </Grid>
    )
}