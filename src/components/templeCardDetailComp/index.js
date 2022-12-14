

import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'



const CardUseStyles = makeStyles((theme) => ({
    about: {
        backgroundColor: "#E6E6E6"
    },
    aboutChild: {
        width: "80%",
        margin: " auto",
        padding: "60px 0",
        justifyContent: "space-between"
    },
    footHead: {
        textAlign: "center",
        fontSize: "19px",
        color: "#213C97",
        fontStyle: "italic",
        textTransform: "capitalize",
        padding: "12px 0",

    },
    footTxt: {
        fontSize: "15px",
        color: "#213C97",
        fontStyle: "italic",
        textTransform: "capitalize",
        padding: "10px 0 4px 0"
    },
    locTxt: {
        color: "#727273",
        textTransform: "capitalize",
        fontSize: "13px"
    },
    title: {
        fontSize: "26px",
        color: "#213C97",
        fontStyle: "italic",
        textTransform: "capitalize",
        margin: "8px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "22px",
        },
    },
    subtitle: {
        fontSize: "17px",
        color: "#838485",
        textTransform: "capitalize",
        margin: "0 20px 0 0",
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px",
        },

    },
    weigh: {
        fontSize: "17px",
        color: "#838485",
        textTransform: "capitalize",
        marginLeft: "8px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px",

        },

    },
    contentTwo: {
        color: "#5F6062",
        fontSize: "15px",
        textTransform: "capitalize",
        margin: "30px 0",
        lineHeight: "28px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
            margin: "20px 0",
            lineHeight: "24px"
        },
    },
    contentOne: {
        color: "#5F6062",
        fontSize: "15px",
        textTransform: "capitalize",
        margin: "30px 0",
        lineHeight: "28px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
            margin: "20px 0",
            lineHeight: "24px"
        },

    },
    aboutTxt: {
        color: "#5B5C5E",
        fontSize: "16px",
        fontWeight: "600",
        textTransform: "capitalize",
        margin: "8px 0",
        lineHeight: "28px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
            lineHeight: "24px"
        },
    },
    detailBox: {
        textAlign: "center",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    },
    subtitleDiv: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "0",
        [theme.breakpoints.down("sm")]: {
            padding: "0"
        },
    }
}))

const TempleCardDetailComp = (props) => {
    const classes = CardUseStyles()

    return (
        <>

            <Box className={classes.about
            }>
                <Grid container className={classes.aboutChild
                }>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        {
                            props?.data?.map((val) => {
                                return (
                                    <>
                                        {val?.images?.map(e => {
                                            return (
                                                <Box>
                                                    <img src={e
                                                    }
                                                        style={
                                                            {
                                                                width: "100%",
                                                                marginBottom: "22px"
                                                            }
                                                        }>
                                                    </img>
                                                </Box>
                                            )
                                        })
                                        }
                                    </>
                                )

                            })
                        }
                    </Grid>
                    {console.log(props?.data, " props?.data")}
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        {
                            props?.data?.map(val => {
                                return (
                                    <>
                                        <Box className={classes.detailBox}>
                                            <Typography className={classes.title}>{val?.title}</Typography>
                                            <ul className={classes.subtitleDiv}>
                                                <Typography className={classes.subtitle}>{val?.subtitle}</Typography>
                                                <li className={classes.weigh}>{val?.weigh}</li>
                                            </ul>
                                            <Typography className={classes.contentOne}>{val?.ContentOne}</Typography>
                                            <Typography className={classes.aboutTxt}> {val?.about}</Typography>
                                            <Typography className={classes.contentTwo}>{val?.contentTwo}</Typography>
                                        </Box>
                                    </>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Box>
        </>
    )



}
export default TempleCardDetailComp
