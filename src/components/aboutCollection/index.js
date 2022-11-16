import { Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const UseStyles = makeStyles((theme) => ({
    aboutcolimg: {
        objectFit: "contain",
        width: "100%",
    },
    title: {
        color: "gray",
        fontSize: "23px",
        textAlign: "center",
    },
    sub: {
        color: "gray",
        fontSize: "18px",
        textAlign: "center",
    },
    sub2: {
        textAlign: "center",
        color: "gray",
        fontSize: "15.92px",
        marginTop: "10px",
    },
    type: {
        display: "flex",
        alignItems: "center",
        color: "gray",
        textAlign: "center",
        justifyContent: "center",
        cursor: "pointer",
        marginTop: "10px",
    },

    // testimonial 
    name: {
        textAlign: "center",
        fontSize: "20px",
        color: "#2F348B",
    },
    address: {
        textAlign: "center",
        fontSize: "15.92px",
        color: "#B2832C",
    },
}))
const AboutCollectionComp = (props) => {
    const { CollectionData, TestimonialSec } = props
    const classes = UseStyles()

    return (
        <>
            {!Boolean(TestimonialSec) ?
                // ABOUT THE COLLECTION
                <Grid container spacing={3}>
                    {CollectionData.map((val) => {
                        return (
                            <Grid item xs={12} md={4} lg={4}>
                                <img
                                    src={val.img}
                                    alt={val.title}
                                    loading="lazy"
                                    className={classes.aboutcolimg}
                                />
                                <Typography className={classes.title}>{val.title}</Typography>
                                <Typography className={classes.sub}>{val.sub}</Typography>
                                <Typography className={classes.sub2}>{val.sub2}</Typography>
                                <Typography className={classes.type}>
                                    Show&nbsp;{val.type}&nbsp;
                                    <HiOutlineArrowNarrowRight />
                                </Typography>
                            </Grid>
                        );
                    })}
                </Grid>
                :
                // TESTIMONIALS
                <Grid container spacing={3}>
                    {CollectionData.map((val) => {
                        return (
                            <Grid item xs={12} md={4} lg={4}>
                                <img
                                    src={val.img}
                                    alt={val.title}
                                    loading="lazy"
                                    className={classes.aboutcolimg}
                                />
                                <Typography className={classes.name}>{val.name}</Typography>
                                <Typography className={classes.address}>
                                    {val.address}
                                </Typography>
                                <Typography className={classes.sub2}>{val.feed}</Typography>
                                <center>
                                    <IconButton
                                        style={{ color: "gray", marginTop: "12px" }}
                                        size="small"
                                    >
                                        <BsChevronDown />
                                    </IconButton>
                                </center>
                            </Grid>
                        );
                    })}
                </Grid>
            }
        </>
    )
}
export default AboutCollectionComp