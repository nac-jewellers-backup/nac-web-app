

import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import line from "./../../assets/Icons/line.svg"




const CardUseStyles = makeStyles((theme) => ({
    about: {
        backgroundColor: "#E6E6E6"
    },
    aboutChild: {
        width: "80%",
        margin: " auto",
        padding: "60px 0",
        [theme.breakpoints.up("md")]: {
            justifyContent: "space-between"
        },
        [theme.breakpoints.down("md")]: {
            justifyContent: "center"
        },
        [theme.breakpoints.down("sm")]: {
            padding: "40px 0",
            width: "85%",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "20px 0",
            width: "85%",
        },

    },
    TempleName: {
        fontSize: "14px",
        color: "#213C97",
        fontStyle: "italic",
        textTransform: "capitalize",
        padding: "6px 0",
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
            fontSize: "13px",

        },
    },
    templeTxt: {
        fontSize: "16px",
        color: "#213C97",
        fontStyle: "italic",
        textTransform: "capitalize",
        padding: "6px 0",
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
            fontSize: "14px",

        },
    },
    weighTxt: {
        fontSize: "13px",
        color: "#727273",
        fontStyle: "italic",
        textTransform: "capitalize"
    },
    GridBox: {
        textAlign: "center",
        margin: "30px 0"
    },
    TempleImg: {
        height: "220px",
        "& img": {
            height: "100%"
        }
    },
    txtBox: {
        padding: "10px"
    },
    seconRowTxt: {
        padding: "20px 30px",
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            padding: "20px 12px",
        },
    },
    TempleHead: {
        width: "35%",
        [theme.breakpoints.down("md")]: {
            width: "50%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "80%",
            fontSize: "15px",
        },
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            fontSize: "14px",

        },
        margin: "auto",
        fontSize: "16px",
        color: "#213C97",
        fontStyle: "italic",
        textTransform: "capitalize",
        padding: "16px 0",
        textAlign: "center",
    },

}))

const TempleProducts = (props) => {

    console.log("TempleProductsProps", props)
    const classes = CardUseStyles()

    return (
        <>

            <Box className={classes.about}>
                <>
                    {
                        props?.data?.map((val) => {
                            return (
                                <Grid container className={classes.aboutChild}>
                                    {
                                        val?.lineOne?.map((e) => {

                                            return (
                                                <Grid item lg={3} md={3} sm={6} xs={12} className={classes.GridBox}>
                                                    <Box className={classes.TempleImg}>
                                                        <img src={e?.img}>
                                                        </img>
                                                    </Box>
                                                    <Box className={classes.txtBox}>
                                                        <Typography className={classes.TempleName}>{e?.text}
                                                        </Typography>
                                                        <Typography className={classes.weighTxt}>{e?.weigh}
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            )
                                        })
                                    }
                                    <Box><img src={line} style={{ width: "100%" }}></img></Box>
                                    {
                                        val?.lineTwo?.map((e) => {
                                            return (
                                                <>
                                                    {
                                                        e?.temples?.map((txt, index) => {
                                                            return (
                                                                <>
                                                                    <Grid item lg={txt?.size?.lg}
                                                                        md={txt?.size?.md}
                                                                        sm={txt?.size?.sm}
                                                                        xs={txt?.size?.xs}
                                                                        className={classes.seconRowTxt}>
                                                                        <Typography
                                                                            className={classes.templeTxt}>{txt?.name}
                                                                        </Typography>
                                                                        <Typography
                                                                            className={classes.weighTxt}>{txt?.spec}
                                                                        </Typography>
                                                                        <Grid container style={{ justifyContent: "center" }}>
                                                                            {
                                                                                txt?.section?.map(img => {
                                                                                    return (
                                                                                        <Grid item lg={txt?.imgSize?.lg}
                                                                                            md={txt?.imgSize?.md}
                                                                                            sm={txt?.imgSize?.sm}
                                                                                            xs={txt?.imgSize?.xs}>
                                                                                            <>
                                                                                                <Box className={classes.TempleImg}>
                                                                                                    <img src={img?.img}
                                                                                                        style={{ width: "100%" }}>
                                                                                                    </img>
                                                                                                </Box>
                                                                                                <Box className={classes.txtBox}>
                                                                                                    <Typography className={classes.TempleName}>{img?.text}
                                                                                                    </Typography>
                                                                                                    <Typography className={classes.weighTxt}>
                                                                                                        {img?.weigh}
                                                                                                    </Typography>
                                                                                                </Box>
                                                                                            </>
                                                                                        </Grid>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </Grid>
                                                                    </Grid>
                                                                </>

                                                            )
                                                        }

                                                        )

                                                    }
                                                </>
                                            )
                                        })
                                    }
                                    <Box><img src={line} style={{ width: "100%" }}></img></Box>
                                    {
                                        val?.lineThree?.map((e) => {
                                            return (
                                                <>
                                                    <Grid item lg={3} md={3} sm={8} xs={12} >
                                                        <img src={e?.img}
                                                            style={{ width: "100%", height: "100%" }}></img>
                                                    </Grid>
                                                </>
                                            )
                                        })
                                    }
                                    <Box><img src={line} style={{ width: "100%" }}></img></Box>
                                    {
                                        val?.lineFour?.map((e) => {
                                            return (
                                                <Grid item xs={2.5} className={classes.GridBox} >
                                                    <Box className={classes.TempleImg}>
                                                        <img src={e?.img}
                                                            style={{ width: "100%" }}>
                                                        </img>
                                                    </Box>
                                                    <Box className={classes.txtBox}>
                                                        {
                                                            e?.txt && <Typography className={classes.TempleName}>{e?.text}
                                                            </Typography>
                                                        }
                                                    </Box>
                                                </Grid>
                                            )
                                        })
                                    }
                                    <Box><img src={line} style={{ width: "100%" }}></img></Box>

                                    {
                                        val?.lineFive?.map((e) => {
                                            return (
                                                <Grid item lg={e?.size?.lg}
                                                    md={e?.size?.md}
                                                    sm={e?.size?.sm}
                                                    xs={e?.size?.xs}
                                                    className={classes.GridBox} >
                                                    <Box className={classes.TempleImg}>
                                                        <img src={e?.img}
                                                            style={{ width: "100%" }}>
                                                        </img>
                                                    </Box>
                                                    <Box className={classes.txtBox}>
                                                        <Typography className={classes.TempleName}>{e?.text}
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            )
                                        })
                                    }
                                    <Box><img src={line} style={{ width: "100%" }}></img></Box>

                                    {
                                        val?.lineSix?.map((e) => {
                                            return (
                                                <Grid item xs={3} className={classes.GridBox} >
                                                    <Box className={classes.TempleImg}>
                                                        <img src={e?.img}
                                                            style={{ width: "100%" }}>
                                                        </img>
                                                    </Box>
                                                    <Box className={classes.txtBox}>
                                                        <Typography className={classes.TempleName}>{e?.text}
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            )
                                        })
                                    }
                                    <Box><img src={line} style={{ width: "100%" }}></img></Box>

                                    {
                                        val?.lineSeven?.map((e) => {
                                            return (
                                                <Grid item lg={6} md={6} sm={10} xs={12} className={classes.GridBox} >
                                                    <Box className={classes.TempleImg}>
                                                        <img src={e?.img}
                                                            style={{ width: "100%" }}>
                                                        </img>
                                                    </Box>
                                                    <Box className={classes.txtBox}>
                                                        <Typography className={classes.TempleName}>{e?.text}
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            )
                                        })
                                    }
                                    <Box><img src={line} style={{ width: "100%" }}></img></Box>

                                    {
                                        val?.lineEight?.map((e) => {
                                            return (
                                                <Grid item lg={2} md={2} sm={4} xs={6} className={classes.GridBox}>
                                                    <Box className={classes.TempleImg}>
                                                        <img src={e?.img}
                                                            style={{ width: "100%" }}>
                                                        </img>
                                                    </Box>
                                                    {e?.text &&
                                                        <Box className={classes.txtBox}>
                                                            <Typography className={classes.TempleName}>{e?.text}
                                                            </Typography>
                                                            <Typography className={classes.weighTxt}>{e?.weigh}
                                                            </Typography>
                                                        </Box>}
                                                </Grid>
                                            )
                                        })
                                    }
                                    <Box><img src={line} style={{ width: "100%" }}></img></Box>

                                    {
                                        val?.lineNine?.map((e) => {
                                            return (
                                                <>
                                                    <Grid item xs={12} className={classes.GridBox}>
                                                        <Box>
                                                            <Typography className={classes.TempleHead}>{e?.txt}</Typography>
                                                        </Box>
                                                        <Box>
                                                            <img src={e?.img} style={{ width: "100%" }}></img>
                                                        </Box>
                                                    </Grid>
                                                </>
                                            )
                                        })
                                    }
                                    <Box><img src={line} style={{ width: "100%" }}></img></Box>

                                    {
                                        val?.lineTen?.map((e) => {
                                            return (
                                                <>
                                                    <Grid item xs={12} className={classes.GridBox}>
                                                        <Box>
                                                            <img src={e?.img} style={{ width: "100%" }}></img>
                                                        </Box>
                                                        <Box>
                                                            <Typography className={classes.TempleHead}>{e?.txt}</Typography>
                                                        </Box>
                                                    </Grid>
                                                </>
                                            )
                                        })
                                    }
                                    <Box><img src={line} style={{ width: "100%" }}></img></Box>

                                    {
                                        val?.lineEvelen?.map((e) => {
                                            return (
                                                <>
                                                    <Grid item xs={12} className={classes.GridBox}>
                                                        <Box>
                                                            <img src={e?.img} style={{ width: "100%" }}></img>
                                                        </Box>

                                                    </Grid>
                                                </>
                                            )
                                        })
                                    }
                                    <Box><img src={line} style={{ width: "100%" }}></img></Box>

                                </Grid>
                            )
                        })
                    }

                </>
            </Box >
        </>
    )


}
export default TempleProducts