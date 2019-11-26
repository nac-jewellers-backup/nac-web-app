import React from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from '@material-ui/core';
import Slideshow from '../../components/Carousel/carosul';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    containItems: {
        padding: "0px 15px",
        width: "100%"
    },
    [theme.breakpoints.up("lg")]: {
        containItems: {
            padding: "0px 15px",
            margin: "auto",
            width: " 1170px",

        },
    },
    containerRoot: {
        width: "100%",
        backgroundImage: "url(https://alpha-assets.stylori.com/images/static/home/box_bg.png)",
        boxShadow: "0 0 5px #888 !important",
        padding: "15px 0px 7px 0px",
        marginBottom: "25px"
    },
    threeContain: {
        padding: "0px 15px"
    },
    Title: {
        color: '#394578',
        marginBottom: '15px',
        float: 'left',
        fontSize: '15px'

    },
    photo: {
        padding: '5px',
        overflow: 'auto',
        height: '390px',
        width: "100% !important",
        border: '1px solid #eee !important',
        borderRadius: '5px'
    },
    photonews: {
        padding: '5px',
        // overflow: 'auto',
        height: '390px',
        // width: "100% !important",
        border: '1px solid #eee !important',
        borderRadius: '5px'
    },
    newcontent: {
        color: 'rgb(57, 69, 120)',
        margin: "10px 0px 10px 0px ",
        maxHeight: 26,
    },
    newscontain: {
        padding: "4px 4px",
        margin: '0px',
        borderBottom: '1px dotted #555',
        display: "flex !important",
        backgroundColor: "#fff"
    },
    newstop: {
        // alignContent: "center",
        // alignItems: "center"
    },
    footerNews: {
        padding: '17px 15px !important',
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #ddd',
        borderBottomRightRadius: '3px',
        borderbottomleftRadius: '3px',
        height: "31px"
    },
    downArrow: {

        position: 'relative',
        float: 'left',
        padding: '3px 10px',
        marginLeft: '-1px',
        lineHeight: 1.42857143,
        color: '#3a4578',
        textDecoration: 'none',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        marginLeft: 0,
        borderTopLeftRadius: '4px',
        borderBottomLeftRadius: '4px'
    },
    glyphicon: {
        position: 'relative',
        top: '1px',
        display: 'inline-block',
        fontFamily: 'Glyphicons Halflings',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 1,
    }



}));

export default function StaticView(props) {

    const classes = useStyles();
    const slider = React.createRef();
    const next = () => {
        slider.current.slickNext();
    }
    const previous = () => {
        slider.current.slickPrev();
    }

    return (
        <Grid container className={classes.containItems}>
            <Grid item className={classes.containerRoot}>
                <Grid container>
                    <Grid item md={4} lg={4} sm={4} xs={4} className={classes.threeContain}>
                        <Grid item container>
                            <Typography className={classes.Title}>Instagram</Typography>
                        </Grid>
                        <Grid item container className={classes.photo}>
                        </Grid>

                    </Grid>
                    <Grid item md={4} lg={4} sm={4} xs={4} className={classes.threeContain}>
                        <Grid item container>
                            <Typography className={classes.Title}>Facebook</Typography>
                        </Grid>
                        <Grid item container className={classes.photo}>
                        </Grid>
                    </Grid>
                    <Grid item md={4} lg={4} sm={4} xs={4} className={classes.threeContain}>
                        <Grid item container>
                            <Typography className={classes.Title}>Stylori News</Typography>
                        </Grid>
                        <Grid container className={classes.photonews}>
                            <Grid item xs={12}>
                                <Slideshow
                                    sliderRef={slider}
                                    class="vertical-carousel" imgClass='vertical-carousel-img'
                                    dataCarousel={props.dataCarousel} >
                                    {props.fadeImages.map((val, index) =>
                                        <Grid conatiner className={classes.newscontain} >
                                            <Grid item style={{ marginRight: 10 }}>
                                                <img src={val.img} style={{ width: '60px', height: '60px' }} />
                                            </Grid>
                                            <Grid item className={classes.newstop}>
                                                <Typography className={classes.newcontent} style={{ fontSize: "12px" }}>{val.content}</Typography>
                                                <Grid>
                                                    <Typography style={{ fontSize: "12px", color: "rgb(51, 122, 183)" }} he>Read more
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    )}

                                </Slideshow>
                                {props.dataCarousel.arrowsImg ? <Grid className={classes.footerNews}>
                                    <Grid style={{ float: "right" }}>
                                        <Grid onClick={() => previous()} className={classes.downArrow}>
                                            <span className={classes.glyphicon}>
                                                <img style={{ width: "12x", height: "12px", fill: "rgb(58, 69, 120)" }} src={"https://image.flaticon.com/icons/svg/2089/2089720.svg"} />
                                            </span>
                                        </Grid>
                                        <Grid onClick={() => next()} className={classes.downArrow}>
                                            <span className={classes.glyphicon}>
                                                <img style={{ width: "12x", height: "12px", fill: "rgb(58, 69, 120)" }} src={"https://image.flaticon.com/icons/svg/2089/2089724.svg"} />
                                            </span>

                                        </Grid>
                                    </Grid>
                                </Grid> : ""}

                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
