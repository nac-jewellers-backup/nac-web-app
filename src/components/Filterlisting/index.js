import React, { Component } from 'react';
import './index.css'
import {
    Container, Hidden, Grid, Typography,
    FormControlLabel,
    Checkbox,
} from '@material-ui/core';
import Slideshow from '../Carousel/carosul';
import CustomSeparator from '../BreadCrumb/index';
import { withStyles } from '@material-ui/core/styles';
import { useDummyRequest } from '../../hooks';
import { descriptionData } from '../../mappers';
import { withRouter } from 'react-router-dom';
const styles = theme => ({

    colorLight: {
        color: theme.palette.secondary.light
    },
    colorDark: {
        color: "#FFF",
        textTransform: "capitalize",
        fontSize: "1.1rem",
    },
    TypoDark: {
        color: "#fff",
        textTransform: "capitalize",
        fontSize: "1.1rem !important",
        fontWeight: 600,
        letterSpacing: "1px"
    },
    filterLabel: {
        fontSize: '0.9rem !important'
    },
    checkboxreducer: {

    }
});

class ProductDescription extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showLess: true,
            checkedA: "",
        }
    }
    handleReadMore = () => {
        this.setState({ showLess: !this.state.showLess })
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked })
    };
    render() {
        const { classes } = this.props;
        // let path = window.location.pathname.split('/').pop();
        var loc = this.props.location.pathname;

        var path = loc.split('/');
        var data_json = [{ title: 'home', url: '/' }, { title: 'jewellery', url: "/jewellery" }]
        // const descriptionData = this.props.data;
        const settings = this.props.data && this.props.data[0] && this.props.data[0].dataCarousel;
        // const fadeImages = this.props.data && this.props.data[0] && this.props.data[0].carouselImage;
        const fadeImages = this.props.datalisting && this.props.datalisting && this.props.datalisting.length > 0 ? this.props.datalisting.map(val => {

            if (val && val.image && val.image.placeImage && val.image.placeImage.img) return (val.image.placeImage.img)
            else return "https://assets.stylori.com/product/SP0384/1000X1000/SP0384-1W.webp"

        })
            :
            ['https://assets.stylori.com/product/SP0384/500X500/SP0384-1W.webp', 'https://assets.stylori.com/product/SR0783/500X500/SR0783-1Y.webp', 'https://assets.stylori.com/product/SR0367/500X500/SR0367-1Y.webp', 'https://assets.stylori.com/product/SE0891/500X500/SE0891-1Y.webp'];


        fadeImages.sort((a, b) => 0.5 - Math.random());
        const title = this.props.title;
        const datadescription = this.props.data && this.props.data[0] && this.props.data[0].seoText;
        const renderTitle = () => {
            var pathname_split_hyphen = path[1].split('-')
            var a = window.location.pathname.split('/')
            // var b = a[1].split(/\-/g).map(val=>{return val.split(/\+/g)})
            var b = a[1].split(/\-/g).map(val => { return val.replace(/\+/g, " ") })
            var c = b.map(val => { return b + ' ' })
            var d
            return d = c[0].replace(/\,/g, " ")
        }
        return (
            <Grid container className="backgroundimageset" style={{}}>
                <Container >
                    <Grid
                        style={{ marginTop: "15px", textAlign: "center" }}
                        container
                        direction="row"
                        justify="space-around"

                    >
                        <Grid
                            item
                            container
                        >
                            <Hidden smDown>
                                <Grid
                                    item
                                    xs={3}

                                    style={{ textAlign: 'center' }}
                                >
                                    <CustomSeparator
                                        list='product-dis'
                                        classsubhed='product-backg'
                                        data={data_json} />{/* window.location.pathname.split('/').pop()  */}
                                </Grid>
                            </Hidden>
                            {/* <Hidden smDown >
                                <Grid
                                    item
                                    xs={6}
                                    className={`DescriptionTitle`}
                                    style={{ textAlign: 'center' }}
                                >
                                    <Typography className={`${classes.TypoDark}`} variant='h1' component='h1'>
                                        {renderTitle()}

                                    </Typography>
                                </Grid>
                            </Hidden> */}
                            <Hidden mdUp>
                                <Grid
                                    item
                                    xs={12}
                                    style={{ textAlign: 'center' }}
                                    className={` DescriptionTitleSmallScreen `}
                                >
                                    <Typography className={`${classes.colorDark}`} variant='h6' component='h6'>
                                        {renderTitle()}
                                    </Typography>
                                </Grid>
                            </Hidden>
                            <Grid container justify="center">
                                <Grid item xs={10} container>
                                    <Grid item xs={6} style={{ borderRight: "1px solid #fff" }}>
                                        <Typography className={`${classes.colorDark}`} variant='h6' component='h6'>
                                            material
                                    </Typography>
                                        <Grid container item justify="center">
                                            {[0, 1, 2, 3].map(val => <FormControlLabel key={val}
                                                className={classes.filterLabel}
                                                control={
                                                    <Checkbox checked={this.state.checkedA} onChange={this.handleChange('checkedA')} value="checkedA" className={classes.checkboxreducer} />
                                                }
                                                label={<Typography style={{ fontSize: "14px" }}>Secondary</Typography>}
                                            />
                                            )}
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography className={`${classes.colorDark}`} variant='h6' component='h6'>
                                            Gender
                                    </Typography>
                                        <Grid container item justify="center">
                                            {[0, 1, 2].map(val => <FormControlLabel key={val}
                                                className={classes.filterLabel}
                                                control={
                                                    <Checkbox checked={this.state.checkedA} onChange={this.handleChange('checkedA')} value="checkedA" />
                                                }
                                                label={<Typography style={{ fontSize: "14px" }}>Secondary</Typography>}
                                            />
                                            )}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

            </Grid>
        );
    }

}
export default withRouter(withStyles(styles)(ProductDescription))

