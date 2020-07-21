import {
    Grid,
    Hidden,
    ExpansionPanel,
    Container,
    Popover,
    paper,
    Paper
} from '@material-ui/core';
import Slideshow from '../Carousel/carosul'
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './product-images.css'
import Ratings from '../rating/rating'
import { withStyles } from '@material-ui/core/styles';
import Pricing from '../Pricing/index'
import styles from './style';
import Wishlist from 'components/wishlist/wishlist';
import { Button } from 'semantic-ui-react';



const mobilecarousel = (props, val, wishlist) => {

    const { data, classes } = props;
    const ArrowLeft = (props) => {
        const { className, style, onClick } = props;
        return (
          <ArrowLeftIcon
            className={`${className} ${classes.collectionSection}`}
            onClick={onClick}
            style={{ ...style, fill: "theme.palette.secondary.main !important" }}
          />
        );
      };
      const ArrowRight = (props) => {
        const { className, style, onClick } = props;
        return (
          <ArrowRightIcon
            className={`${className} ${classes.collectionSection}`}
            onClick={onClick}
            style={{ ...style, fill: "theme.palette.secondary.main !important" }}
          />
        );
      };
    const dataCarousel = {
        dots: false,
        infinite: false,
        speed: 1000,
        fade: true,
        arrows: true,
        dotsClass: "slickdev",
        className: 'button__bar',
        nextArrow:<ArrowRight/>,
        prevArrow:<ArrowLeft/>
    
    }
    
    return (
        <div style={{width:'98%'}}>
            {/* {data.map(data_map =>
                <Grid container spacing={12} xs={12}>
                    <Grid container item xs={6}>
                        <div className={val && val.offerDiscount ? "css-ts7n45 e5toz5w4" : ""}><span style={{ color: "#fff" }} className={val && val.offerDiscount ? "e195g4sk5 css-5pjie5 ekntgft2" : ""}>{val ? val.offerDiscount : null}</span><br />
                            {data[0].ProductContactNum[0].isReadyToShip === true ? <div className="css-ts7n45-redy_toship one-day-ship-mb"></div> : ""}
                        </div>
                    </Grid>
                    <Grid container item xs={4} />
                    <Grid container item xs={2} className="css-ts7n45_wishlist">
                        <Wishlist sku={data_map.skuId} productId={data_map.productId} wishlist={wishlist} />
                    </Grid>
                </Grid>
            )} */}

            {/* <div style={{background:"red"}}>Earrings in 18K Yellow Gold and Peridot for Kids</div> */}
            <Slideshow zindex="1000" class="middle" className='responseve-carousel testingcur' imgClass='responseve-carousel-img'
                fadeImages={data[0].fadeImages.arrOfurls} dataCarousel={dataCarousel} videoControls={true} />
        </div>
    );
};

const Productprice = (props, anchorEl, handleClick, handleClose, handleReadMore, viewMore) => {
    
    const { data } = props;
    const { classes } = props;
    const open = anchorEl;
    var wishlist = props.wishlist
    // alert(JSON.stringify(props.wishlist.wishlistdata.nodes.skuId))
    // var wishlist = this.props && this.props.wishlist && 
    return (
        <div>
            {data.map(val => (
                <>
                    <Grid container spacing={12} sm={12} className={classes.pricedetails}> 
                        <Hidden mdUp>
                            <div className="resp" >
                                {/* <div className="respc"> */}
                                {/* <h1 className={`pdp-title ${classes.title}`}>
                                        {val.title}
                                    </h1> */}
                                {/* <Grid container spacing={12} xs={12}> */}
                                {/* <Grid container item xs={6} justify={'flex-start'}>
                                            <Pricing
                                                offerDiscount={}
                                            />
                                        </Grid> */}
                                {/* <Grid container item xs={6} md={6} justify={'flex-end'}>
                                            <Grid container item xs={8} xs={8} justify={'flex-end'}>
                                                {data[0].ProductContactNum[0].isReadyToShip == true ? <div className="one-day-ship-mb"></div> : ""}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </div> */}
                                {mobilecarousel(props, val, wishlist)}

                                {/* <div style={{ background: "rgb(238, 238, 238)", width: "100%" }}>
                                    <div className="respc">
                                        <Grid container spacing={12} xs={12}>
                                            <Grid container item xs={6} justify={'flex-start'}>
                                                <Pricing
                                                    price={data[0].price}
                                                    offerPrice={data[0].offerPrice}
                                                />
                                            </Grid> */}
                                {/* <Grid container item xs={6} justify={'flex-end'}>
                                                <div>
                                                    {data[0].ProductContactNum.map(val =>
                                                        <div style={{ marginTop: "10px" }}>
                                                            <b className={`ships-by ${classes.normalfonts}`}> */}
                                {/* <span class="ship-img"></span> */}
                                {/* <span > {val.shipby}</span>
                                                            </b>
                                                        </div>
                                                    )}
                                                </div>
                                            </Grid> */}
                                {/* </Grid>
                                    </div>
                                </div> */}
                                {/* <hr class="bottom-line product-inform-ation"></hr> */}
                                {/* <br /><br /> */}

                            </div>
                        </Hidden>
                        <Paper elevation={0} style={{ width: "100%", padding: "0px", margin: "0px " }}>
                            <Grid container className="containbev" >
                                <Grid item xs={12} lg={12} md={12}>
                                    <div className="price-div">
                                        <Hidden mdUp>
                                            <Grid container spacing={12} xs={12} style={{padding:10}}>
                                                <Grid container item xs={8}>
                                                    <h1 className={`pdp-title ${classes.title}`} style={{ width: "90%" }}>
                                                        {val.title}
                                                        {/* <i style={{ padding: "2px", fontSize: "12px" }} class="fa fa-info-circle" aria-hidden="true"></i> */}
                                                    </h1>

                                                    {/* <div>
                                                        {data[0].ProductContactNum.map(val =>
                                                            <div >
                                                                <b style={{ alignItems: "center", display: "flex" }} className={`ships-by ${classes.normalfonts}`}>
                                                                    <span style={{ textAlign: "center", alignItems: "center", display: "flex" }}> {val.shipby}</span>
                                                                </b>
                                                            </div>
                                                        )}
                                                    </div> */}
                                                     <p className={`pdp-desc ${classes.dis} ${classes.disEllipises}`} style={{marginBottom:20, fontStyle:'italic'}}>
                                                {val.dis}
                                            </p>
                                                </Grid>
                                                
                                                <Grid container item xs={4} alignContent="center" alignItems="center">
                                                    <Hidden mdUp>
                                                        <div className={classes.width} style={{ padding: "0px 10px  0px 10px " }}>
                                                            <Pricing
                                                                price={data[0].price}
                                                                offerPrice={data[0].offerPrice}
                                                                offerDiscount={val.offerDiscount}
                                                                pdpagesm = {true}
                                                               
                                                            >

                                                            </Pricing>
                                                        </div>
                                                    </Hidden>

                                                </Grid>
                                            </Grid>

                                        </Hidden>
                                        <Hidden smDown>
                                            <h1 className={`pdp-title ${classes.title} `}>
                                                {val.title}
                                            </h1>
                                        </Hidden>
                                        <Hidden smDown>
                                            <p className={`pdp-desc ${classes.dis}`} style={{marginBottom:15, fontStyle:'italic', paddingTop : "5px"}}>
                                                {val.dis}
                                            </p>
                                            <Grid xs={10}>

                                            <p className={`pdp-desc ${viewMore ? '' : classes.disDescriptionPD}`}>
                                                <span style={{width:'80%'}}> {`You actually don't need width to be "set" here. All the elements in the responsive design have their width. You can just do it around with the following rules: 
                                                You actually don't need width to be "set" here. All the elements in the responsive design have their width. You can just do it around with the following rules:
                                                You actually don't need width to be "set" here. All the elements in the responsive design have their width. You can just do it around with the following rules:
                                                You actually don't need width to be "set" here. All the elements in the responsive design have their width. You can just do it around with the following rules:`}
                                                 <span style={{float:'right', cursor:'pointer', color : "#33346D"}} onClick={()=>{handleReadMore()}}>{viewMore ? 'Read Less' : 'Read More'}</span>
                                                </span>
                                               
                                            </p>
                                            
                                          

                                            </Grid>
                                        </Hidden>
                                    </div>
                                </Grid>



                                <Grid container item xs={12} lg={12} md={12} style={{
                                    display: "flex",
                                    lineHeight: "20px",
                                    justifyContent: "flex-end"
                                }}>
                                    <Hidden smDown>
                                        <div className="starts product-icons" style={{ fontFamily: "fontawesome",width:'100%' }} >
                                            <Grid container item xs={12} sm={12} md={8} lg={6} xl={6}  className="row social-shares"
                                                className={classes.icon} style={{marginBottom:35}}>
                                                     <Grid item xs={5}>
                                                    <div onClick={() => window.scrollTo(0, 1800)}><Ratings ratings="starts-review" disable={"disable"} />
                                                    <div className={classes.viewReviewsTest}>View Reviews</div>
                                                    </div> 
                                                    </Grid>
                                                    <Grid item xs={2} className={classes.whishlistGrid}>
                                                    {/* <Wishlist sku={val.skuId} productId={val.productId} wishlist={wishlist} />   */}
                                                    <i class="fa fa-heart"></i>
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                    <i class="fa fa-share-alt overall-icons"
                                                    aria-owns={open ? 'simple-popper' : ""}
                                                    onClick={handleClick}
                                                ></i> &nbsp;
                                                    </Grid>
                                                   
                                                   
                                               
                                        {/* {JSON.stringify(val.productId)} */}
                                                {/* <Wishlist sku={val.skuId} productId={val.productId} /> */}
                                             

                                                <Popover
                                                    id="simple-popper"
                                                    open={open}
                                                    anchorEl={anchorEl}
                                                    onClose={handleClose}
                                                    anchorOrigin={{
                                                        vertical: 'bottom',
                                                        horizontal: 'center',
                                                    }}
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'center',
                                                    }}
                                                >
                                                    <div className="product-share">
                                                        <h5>Share the Jewellery</h5>
                                                        <a class="facebook" target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                                                            <img class="lazyload" src="https://assets.stylori.com/images/static/newsprite/iconmonstr-facebook-5-share.svg" />
                                                        </a>&nbsp;
                                            <a className="twitter" target="_blank" href={`http://www.twitter.com/share?url=${window.location.href}`}>
                                                            <img class="lazyload" src="https://assets.stylori.com/images/static/newsprite/iconmonstr-twitter-5-share.svg" />
                                                        </a>&nbsp;
                                            {/* <a class="google" target="_blank">
                                                            <img class="lazyload" src="https://assets.stylori.com/images/static/newsprite/iconmonstr-google-plus-5-share.svg" />
                                                        </a> */}
                                                    </div>
                                                </Popover>
                                                

                                                {/* <div><Ratings ratings="starts-review" /></div> */}
                                            </Grid>
                                        </div>
                                    </Hidden>

                                </Grid>
                            </Grid>
                        </Paper>
                        {/* <Hidden smDown>
                            <hr class="bottom-line product-inform-ation"></hr>
                        </Hidden> */}

                    </Grid>



                    <Hidden smDown>
                        <div className={classes.width} >
                            {data[0].price === data[0].offerPrice ?

                                <Pricing
                                    offerPrice={data[0].offerPrice}
                                    pdpage = {true}
                                >
                                    {/* <Grid container spacing={12}>
                                    <div className={`price-info ${classes.dis}`}>
                                        <Grid item xs={4} lg={2} className={`discount-container ${classes.dis}`}>
                                            {val.price}
                                        </Grid>
                                        <Grid item lg={5} xs={8} className={`selling-price ${classes.backgsecondary}`}><i class="fa fa-rupee"></i> &nbsp;
                              {val.offerPrice}
                                        </Grid>
                                    </div>
                                </Grid> */}
                                </Pricing> : <Pricing
                                    offerPrice={data[0].offerPrice}
                                    price={data[0].price} pdpage = {true}

                                // offerDiscount={val.offerDiscount}
                                >
                                </Pricing>}
                        </div>
                    </Hidden>
                </>
            ))}
        </div>
    )
};

class ProductPrice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            share: false,
            heart: false,
            anchorEl: false,
            viewMore:false
        }
    }
    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };
    handleReadMore = () =>{
        this.setState({
            viewMore: !this.state.viewMore,
        });
    }
    handleClose = () => {
        this.setState({
            anchorEl: false,
        });
    };

    render() {
        const { anchorEl, viewMore } = this.state
        // alert(JSON.stringify(this.props.wishlist))
        return (
            <div>
                <Hidden smDown>
                    {Productprice(
                        this.props, anchorEl,
                        this.handleClick,
                        this.handleClose, this.handleReadMore,viewMore)}
                </Hidden>

                <Hidden mdUp>
                    <Container style={{ paddingBottom: "6px" }}>
                        {Productprice(
                            this.props,
                            anchorEl,
                            this.handleClick,
                            this.handleClose, this.handleReadMore, viewMore)}
                    </Container>
                </Hidden>
            </div>


        )
    }
}
ProductPrice.propTypes = {
    mobilecarousel: PropTypes.func,
    Productprice: PropTypes.func,
};
export default withStyles(styles)(ProductPrice);


