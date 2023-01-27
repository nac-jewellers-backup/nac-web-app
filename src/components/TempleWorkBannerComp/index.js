

import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import { CommonTitle } from 'components/CommonTitle';
import React from 'react'
import { TempleTitle } from "../../containers/home/templeTitle";


const CardUseStyles = makeStyles((theme) => ({
    about: {
        backgroundColor: "#05192E",
        width:"100%"
    },
    rightDiv: {
        "& p": {
            color: "#fff",
            textAlign: "center"
        }
    },
    aboutChild: {
        width: "80%",
        margin: " auto",
        padding: "60px 0",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
            display: "block !important",
            width: "87%",

        },
    },
    paraDIv: {
        color: "#fff",
        textAlign: "center",
        marginTop: "24px",
        fontSize: "22px",
        [theme.breakpoints.down("md")]: {
            marginTop: "20px",
            fontSize: "20px"
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: "14px",
            fontSize: "17px"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "8px",
            fontSize: "14px"
        },
    },
    leftDiv: {
        [theme.breakpoints.down("sm")]: {
            textAlign: "center"
        },
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
            width: "100%"
        },
        "& div": {
            height: "350px",
            [theme.breakpoints.down("sm")]: {
                height: "350px",
            },

            "& img": {
                height: "100%"
            }
        }

    }
}))

const TempleWorkBannerComp = (props) => {

    const classes = CardUseStyles()

    return (
        <>

            <Box className={classes.about}>
                <Grid container className={classes.aboutChild}>
                    {
                        props?.banners?.map((val) => {
                            return (
                                <>
                                    <Grid item lg={4} md={4} sm={12} className={classes.leftDiv}>
                                        <Box><img src={val?.img}></img></Box>
                                    </Grid>
                                    <Grid item lg={8} md={8} sm={12} className={classes.rightDiv}>
                                        <TempleTitle title={val?.title} />
                                        <Typography className={classes.paraDIv}>{val?.content}</Typography>
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
export default TempleWorkBannerComp