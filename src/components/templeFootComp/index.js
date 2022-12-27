

import { Box, Button, Grid, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'



const CardUseStyles = makeStyles((theme) => ({
    about: {
        backgroundColor: "#E6E6E6"
    },
    aboutChild: {
        width: "80%",
        margin: " auto",
        paddingBottom: "60px",
        justifyContent: "space-between"
    },
    footHead: {
        textAlign: "center",
        fontSize: "19px",
        color: "#213C97",
        fontStyle: "italic",
        textTransform: "capitalize",
        padding: "12px 0",
        [theme.breakpoints.down("sm")]: {
            fontSize: "17px",
        },
    },
    footTxt: {
        fontSize: "15px",
        color: "#213C97",
        fontStyle: "italic",
        textTransform: "capitalize",
        padding: "10px 0 4px 0",
        [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
        },
    },
    locTxt: {
        color: "#727273",
        textTransform: "capitalize",
        fontSize: "13px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "12px",
        },
    },
    footGrid: {
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
        },
    }

}))

const TempleFooterComp = (props) => {
    const classes = CardUseStyles()

    return (
        <>

            <Box className={classes.about}>
                <Box className={classes.aboutChild}>
                    {
                        props?.data?.map((val) => {
                            return (
                                <>
                                    <Typography className={classes.footHead}>{val?.title}</Typography>
                                    <Grid container>
                                        < >
                                            {
                                                val?.sectionOne?.map(e => {
                                                    return (
                                                        <Grid item lg={6} md={6} sm={10} xs={12}>
                                                            <Typography className={classes.footTxt}>
                                                                {e?.products}</Typography>
                                                            <Typography className={classes.locTxt}>
                                                                {e?.location}</Typography>
                                                        </Grid>
                                                    )
                                                })
                                            }
                                        </>
                                    </Grid>
                                </>
                            )
                        })
                    }

                </Box>
            </Box >
        </>
    )


}
export default TempleFooterComp