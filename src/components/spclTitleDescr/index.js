import React from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core"
import ArrowLeftBlue from "assets/arrowblueleft";
import ArrowRightBlue from "assets/arrowrightblue";

const useStyles = makeStyles((theme) => ({
    body1: {
        fontSize: "25px",
        textAlign: "center",
        color: "#2F348B",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            fontSize: "21px",
        }
    },
    body2: {
        fontSize: "35px",
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
            fontSize: "26px",
        },
        color: "#2F348B",
    },
    bodys1: {
        fontSize: "17px",
        textAlign: "center",
        color: "gray",
        [theme.breakpoints.down("xs")]: {
            fontSize: "16px",
        }

    },
    btn: {
        backgroundColor: "#b78231",
        color: "#fff",
        borderRadius: "0px",
        fontSize: "14px",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
    },
}))


const SpclTitleDescr = (props) => {
    console.log(props, "props");
    const classes = useStyles()

    const titleRender = (str = "") => {
        return {
            0: (<Typography className={classes.body1}>{str}</Typography>),
            1: (<Typography className={classes.body2}>{str}</Typography>),
            2: (
                <Typography className={classes.body1}>
                    <ArrowLeftBlue />&nbsp;&nbsp;{str}&nbsp;&nbsp;<ArrowRightBlue />
                </Typography>
            )
        }
    }
    return (
        <Grid Container >
            <Grid item xs={9} sm={10} md={10} lg={8} style={{ margin: "auto" }}>
                <br />
                <Box display="flex" justifyContent="center">
                    <Box>
                        {
                            props?.data?.Title?.split(" ")?.map((val, i) => {
                                return (
                                    titleRender(val)?.[i]
                                )
                            })
                        }
                        <br />
                        <Typography className={classes.bodys1}>
                            {props?.data?.Description}
                        </Typography>
                        <br />
                        <br />

                        <center>
                            <Button variant="contained" className={classes.btn}>
                                &nbsp;&nbsp; &nbsp;&nbsp;EXPLORE&nbsp;&nbsp; &nbsp;&nbsp;
                            </Button>
                        </center>
                        <br />
                        <br />
                    </Box>
                </Box>
                <br />

            </Grid>
        </Grid>
    )
}
export default SpclTitleDescr