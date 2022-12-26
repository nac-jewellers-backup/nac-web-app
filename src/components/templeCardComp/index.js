

import { Box, Button, Grid, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";



const CardUseStyles = makeStyles((theme) => ({
    about: {
        backgroundColor: "#E6E6E6",
        width:"100%"
    },
    aboutChild: {
        width: "80%",
        margin: " auto",
        padding: "60px 0",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            justifyContent: "center"
        },
        [theme.breakpoints.down("xs")]: {
            width: "90%"
        }
    },
    GridBOx: {
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            margin: "12px 0"
        }
    },
    CardDetails: {
        padding: "7px"
    },
    title: {
        fontSize: "15px",
        color: "#213C97",
        fontStyle: "italic",
        fontWeight: "600",
        height: "48px",
        marginTop: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            height: "38px",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "14px",
        },
    },
    paraDIv: {
        padding: "10px 0",
        fontSize: "12px",
        textTransform: "capitalize",
        height: "70px",
        [theme.breakpoints.down("sm")]: {
            height: "50px",
            fontSize: "12px",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "11px",
            padding: "12px 0",
        },

    },
    readText: {
        fontSize: "16px",
        marginBottom: "8px",
        color: "#7A7A7C",
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
            fontSize: "15px",
        },
    },
    CardImg: {
        padding: "12px",
        height: "220px",
        "& img": {
            height: "100%",
        }
    },
    Cardtext: {
    },
    GridChild: {
        boxShadow: "4px 4px 7px #a5a4a5 !important",
        margin: "10px",
        background: "#fff"
    }
}))

const TempleCardComp = (props) => {
    const classes = CardUseStyles()

    return (
        <>

            <Box className={classes.about}>
                <Grid container className={classes.aboutChild}>
                    {
                        props?.data?.map((val, index) => {
                            return (
                                <>
                                    <Grid item lg={4} md={4} sm={8} xs={12} className={classes.GridBOx}>
                                        <Grid className={classes.GridChild}>
                                            <Box className={classes.CardImg}
                                                style={{ backgroundColor: val?.color ?? "#000" }}
                                            >
                                                <img style={{ height: "100%" }} src={val?.img}></img>
                                            </Box>
                                            <Box className={classes.CardDetails}>
                                                <Box className={classes.Cardtext}>
                                                    <Typography className={classes.title}>{val?.title}
                                                    </Typography>
                                                    <Typography className={classes.paraDIv}>{val?.content}
                                                    </Typography>
                                                </Box>
                                                <Typography className={classes.readText}
                                                    onClick={() => props?.handleClick()}
                                                >Read More
                                                    <IconButton
                                                        style={{ color: "gray", marginRight: "8px" }}
                                                        size="small"
                                                    >
                                                        <HiOutlineArrowNarrowRight />
                                                    </IconButton>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </>
                            )
                        })
                    }

                </Grid>
            </Box>
        </>
    )


}
export default TempleCardComp