

import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Title, title } from "../../containers/home/titles";


const CardUseStyles = makeStyles((theme) => ({
    about: {
        boxShadow: "4px 4px 4px #a5a4a5 !important",
        maxHeight: "40%",
        width: "85%",
        margin: "auto"
    },
    content2: {
        backgroundColor: "#F9E3C0",
        padding: "30px",
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
    title: {
        color: "gray",
        fontSize: "23px",
        textAlign: "center",
    },
    sub: {
        color: "gray",
        width: "380px",
        margin: "auto",
        fontSize: "18px",
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            width: "auto"
        }
    },
}))

const AboutBookAppointment = (props) => {

    console.log("propsasdf", props)
    const classes = CardUseStyles()

    return (
        <>

            <Grid container className={classes.about}>
                {
                    props?.data?.map((val) => {

                        return (
                            <>
                                <Grid item xs={12} md={5} lg={5}>
                                    <img
                                        src={val?.image}
                                        loading="lazy"
                                        style={{ object: "cover", height: "100%", width: "100%" }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={7} lg={7} className={classes.content2}>
                                    <br />
                                    <br />
                                    <Typography className={classes.title}>
                                        {val?.title}
                                    </Typography>
                                    <br />
                                    <Typography className={classes.sub}>
                                        {val?.content}
                                    </Typography>
                                    <br />
                                    <center>
                                        <Button variant="contained" className={classes.btn}>
                                            &nbsp;&nbsp;BOOK NOW&nbsp;&nbsp;
                                        </Button>
                                    </center>
                                    <br />
                                    <br />
                                    <br />
                                </Grid>
                            </>
                        )
                    })
                }

            </Grid>
        </>
    )


}
export default AboutBookAppointment