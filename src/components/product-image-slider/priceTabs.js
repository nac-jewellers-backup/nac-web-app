import {
  
    Grid,
    Hidden,
    ExpansionPanel,
  
   
    Container, Modal,
} from '@material-ui/core';
import React from 'react';
import './product-images.css'
import PropTypes from 'prop-types';
import Slideshow from '../Carousel/carosul';
import { withStyles } from '@material-ui/core/styles';
import styles from './style'
import { ProductDetailContext } from 'context/ProductDetailContext';
import { GlobalContext } from 'context'


const PriceTabs = (props) => {
    const { ProductDetailCtx: { filters }, setFilters } = React.useContext(ProductDetailContext);
    const { Globalctx, setGlobalCtx } = React.useContext(GlobalContext)
    return <Component setFilters={setFilters} filters={filters} {...props} tabsChange={Globalctx.tabsChange} setGlobalCtx={setGlobalCtx} />
}

class Component extends React.Component {
   
    state = {
        value: 1,
        values: "",
        expanded: "1",
        skuSize: this.props && this.props.filters && this.props.filters.defaultVariants && this.props.filters.defaultVariants.skuSize,
        purity: this.props && this.props.data && this.props.data.length > 0 && this.props.data[0] && this.props.data[0].productsDetails && this.props.data[0].productsDetails.length > 0 && this.props.data[0].productsDetails[0] && this.props.data[0].productsDetails[0].namedetail && this.props.data[0].productsDetails[0].namedetail.length > 0 && this.props.data[0].productsDetails[0].namedetail[1] && this.props.data[0].productsDetails[0].namedetail[1].details ? this.props.data[0].productsDetails[0].namedetail[1].details : '',
        diamondType: this.props && this.props.filters && this.props.filters.defaultVariants && this.props.filters.defaultVariants.diamondType,
        open: false
    };
    handleOpen = () => {
        this.setState({ open: true });
    };
   

    handleClose = () => {
        this.setState({ open: false });
    };

    handleClick = (event, key) => {
        this.props.setGlobalCtx({ tabsChange: true })

        var filters = { ...this.props.filters }

        if (key === 'purity') {

            var kv = event.target.id
           
         // example : 18k Yellow And White
            var arrPurity
            var arrColor
           
            arrPurity = kv.substr(0, kv.indexOf(' '))
            arrColor = kv.substr(kv.indexOf(' ') + 1)
            var diamondTypes = filters['defaultVariants']['diamondType']
            filters['defaultVariants']['purity'] = arrPurity
            filters['defaultVariants']['metalColor'] = arrColor
            // filters['defaultVariants']['skuSize']=diamondTypes
            filters['defaultVariants']['diamondType'] = diamondTypes
            filters['productId'] = this.props.data[0].productId
            this.setState({
                purity: kv,
            })
            this.props.setFilters(filters);
        }
        else {
            filters['defaultVariants'][key] = event.target.id
            // filters['defaultVariants'][key] 
            // 
            // this.setState({skuSize:filters})
            this.setState({
                skuSize: filters['defaultVariants']["skuSize"],
                diamondType: filters.defaultVariants.diamondType
            })
            this.props.setFilters(filters);
        }
        // const ringSize = event.target.name;
    }
   
    handleChange = (event, value) => {
        this.setState({ value });
    };

    imageRender = (val) => {

        if (val === '18K Yellow') {
            return (
                "#EAC97D"
            );
        } if (val === '22K Yellow') {
            return (
                '#EAC97D'
            );
        }
        if (val === '14K Yellow') {
            return (
                " #EAC97D"
            );
        } if (val === '24K Yellow') {
            return (
                '#EAC97D'
            );
        }
        if (val === "14K White") {
            return (
                "#CDD0DD"
            );
        }
        if (val === '18K White') {
            return (
                "#CDD0DD"
            );
        }
        if (val === '14K Rose_White') {
            return (
                "#E2A497"
            );
        }
        if (val === '18K Rose_White') {
            return (
                "#E2A497"
            );
        }
        if (val === "14K Rose") {
            return (
                "#E2A497"
            );
        }

        if (val === '18K Rose') {
            return (
                "#E2A497"
            );
        }

    }

    TabsComponent = () => {
        const { classes } = this.props;
        const data = this.props.data;
     
        const kadasize = this.props && this.props.data && this.props.data.length > 0 && this.props.data[0] && this.props.data[0].productsDetails && this.props.data[0].productsDetails.length > 0 && this.props.data[0].productsDetails[0] && this.props.data[0].productsDetails[0].namedetail && this.props.data[0].productsDetails[0].namedetail.length > 0 && this.props.data[0].productsDetails[0].namedetail[3] && this.props.data[0].productsDetails[0].namedetail[3].details && this.props.data[0].productsDetails[0].namedetail[3].details
       
        const settings = {
            className: 'center',
            infinite: false,
            // slidesToShow: data[0].productTabs[0].tab1.Children.length > 8 ? limit :data[0].productTabs[0].tab1.Children.length,
            slidesToScroll: 8,
            slidesToShow: 8,
            arrows: false,
        };
        const settings_mob = {
            className: 'center',
            infinite: false,
            // slidesToShow: data[0].productTabs[0].tab1.Children.length > 8 ? limit :data[0].productTabs[0].tab1.Children.length,
            slidesToScroll: 5,
            slidesToShow: 5,
            arrows: false,
        };

        const slider = React.createRef();
        const next = () => {
            slider.current.slickNext();
        }
        const previous = () => {
            slider.current.slickPrev();
        }
        const dimondclarity = (val) => {
            if (val.length === 4) {
                return val[0] + val[1] + "-" + val[2] + val[3]
            }
            else if (val.length === 5) {
                return val[0] + val[1] + val[2] + "-" + val[3] + val[4]
            } else {
                return val
            }
        }
        const handle_extension = (_url) => {
            if(_url){
                var url_extension = _url.substring(_url.lastIndexOf(".") + 1, _url.length).toLowerCase();
                var extensionVideoLists = ['m4v', 'avi', 'mpg', 'mp4', 'webm', 'mp2', 'mpeg', 'mpe', 'mpv', 'ogg', 'm4p', 'wmv', 'mov', 'qt', 'flv', 'swf', 'avchd'];
                var extensionImageLists = ['jpg', 'jpeg', 'png', 'gif'];
                var extensionDocumentsLists = ['doc', 'docx', 'pdf']
                if (extensionVideoLists.indexOf(url_extension) !== -1) return "video"
                else if (extensionImageLists.indexOf(url_extension) !== -1) return "image"
                else if (extensionDocumentsLists.indexOf(url_extension) !== -1) return "document"
            }
            else{
                return null
            }
            
            // return last
        }
      

        return (
            <div>
                {data[0].productTabs.map(val => {

                    const arr = val.tab1.Children !== null && val.tab1.Children
                    const arr2 = val.tab2.Children !== null && (val.tab2.Children).split(',')
                    return (
                        <>
                            {arr.length > 0 ? <Grid container spacing={12} lg={12} style={{ marginBottom: "10px" }}>
                                <Grid item lg={3} xs={12} style={{ display: "flex", alignItems: "center" }}><h1 className="rings_tabs">{data[0].productType === "Rings" ? val.tab1.header : val.tab1.headerBangle}&nbsp;
                               {data[0].size_guide && <a
                                        onClick={this.handleOpen}
                                        className="my-ringsize">Size Guide </a>}</h1></Grid>
                                <Grid item lg={9} xs={12} >
                                    {arr.length > 0 ?
                                        <>
                                            <Grid container  className={classes.pagination} style={{ overflow: "hidden",width: "100%" }}>
                                                {arr.length > 8 && <Hidden smDown> <Grid item style={{ width: "5%", alignItems: "center", justifyContent: "center", display: "flex" }}>
                                                    <img onClick={() => previous()} className={"icon-leftcaro"} loading="lazy" alt='...'/>
                                                </Grid></Hidden>}
                                                {arr.length > 5 && <Hidden mdUp> <Grid item style={{ width: "5%", alignItems: "center", justifyContent: "center", display: "flex" }}>
                                                    <img onClick={() => previous()} className={"icon-leftcaro"} loading="lazy" alt='...'/>
                                                </Grid></Hidden>}
                                                <Grid item class="widthFix" style={{ textAlign: "center" }}>
                                                    <Hidden smDown>
                                                        <Slideshow dataCarousel={settings}
                                                            sliderRef={slider}>
                                                            {arr.map((val, i) => {
                                                                return (<>
                                                                    <div style={{ justifyContent: "center", display: "flex" }}>
                                                                        <div className={JSON.stringify(val) === this.state.skuSize || kadasize === val ? 'darkouter' : "darkouterWhite"}>
                                                                            <button
                                                                                style={{ padding: "0px" }}
                                                                                className={'page'}
                                                                                id={val}
                                                                                onClick={event => this.handleClick(event, 'skuSize')}
                                                                            >
                                                                                {val}
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </>)
                                                            }
                                                            )}
                                                        </Slideshow>
                                                    </Hidden>
                                                    <Hidden mdUp>
                                                        <Slideshow dataCarousel={settings_mob}
                                                            sliderRef={slider}>
                                                            {arr.map((val, i) => {
                                                                return (<>
                                                                    <div style={{ justifyContent: "center", display: "flex" }}>
                                                                        <div className={JSON.stringify(val) === this.state.skuSize || kadasize === val ? 'darkouter' : "darkouterWhite"}>
                                                                            <button
                                                                                className={'page'}
                                                                                id={val}
                                                                                onClick={event => this.handleClick(event, 'skuSize')}
                                                                            >
                                                                                {val}
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </>)
                                                            }
                                                            )}
                                                        </Slideshow>
                                                    </Hidden>
                                                </Grid>
                                                <Grid item style={{ width: "5%", alignItems: "center", justifyContent: "center", display: "flex" }}>
                                                    <Hidden smDown>   {arr.length > 8 && <img onClick={() => next()} className={"icon-rightcaro"} />}</Hidden>
                                                    <Hidden mdUp>   {arr.length > 5 && <img onClick={() => next()} className={"icon-rightcaro"} />}</Hidden>
                                                </Grid>
                                                <Modal
                                                    aria-labelledby="simple-modal-title"
                                                    aria-describedby="simple-modal-description"
                                                    open={this.state.open}
                                                    onClose={this.handleClose}
                                                   
                                           
                                                    // className="modalElementSizeGuide"
                                                >
                                                    {/* <div className={`${classes.modals}  "modalin-ring"`}> */}
                                                    <>
                                                        {
                                                            handle_extension(data[0].size_guide) === "image" &&
                                                            <div className={`${classes.modals}  "modalin-ring"`}><img height='auto' width='100%' src={data[0].size_guide} alt=".." loading='lazy'/></div>
                                                             
                                                        }
                                                        {
                                                             handle_extension(data[0].size_guide) === "document" && 
                                                             <div className={`${classes.modals_document}  "modalin-ring"`}>
                                                           
                                                             <iframe
                                                              className="document_iframe" 
                                                               title='...'
                                                              src={data[0].size_guide} width="100%" height="100%" />
                                                        
                                                             </div>
                                                        }
                                                         {
                                                             handle_extension(data[0].size_guide) === "video" &&
                                                             <div className={`${classes.modals_video}  "modalin-ring"`}>
                                                             <video preload="auto" autoplay width="100%" controls>
                                                             <source src={data[0].size_guide} type="video/mp4" />
                                                           </video>
                                                           </div>
                                                        }

                                                        </>
                                                    {/* </div> */}
                                                </Modal>
                                                
                                            </Grid>
                                        </>
                                        : ""}
                                </Grid>
                            </Grid> : ""}
                            {arr2.length > 0 ?
                                <Grid container spacing={12} lg={12} style={{ marginBottom: "10px" }}>
                                    <Grid item lg={3} xs={12} style={{ display: "flex", alignItems: "center" }}><h1 className="rings_tabs">{val.tab2.header}</h1></Grid>
                                    <Grid item lg={9} xs={12}>
                                        <Grid container spacing={12} lg={12} >
                                            {arr2.map((val, i) => {
                                                var kv = val
                                                var objVal = kv.split(" ")

                                              
                                                var arrPurity
                                                var arrColor
                                               
                                                arrPurity = kv.substr(0, kv.indexOf(' '))
                                                arrColor = kv.substr(kv.indexOf(' ') + 1)
                                                return (
                                                    <Grid item lg={1} xs={2} className={classes.normalfonts_tabs}>
                                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                                            <div
                                                                style={this.state.purity === val ? { border: "2px solid #d91965", borderRadius: "100%", padding: "1px" } : { border: "2px solid #fff", borderRadius: "100%", padding: "1px" }}
                                                            >
                                                                <button
                                                                    style={{ border: "2px solid" + this.imageRender(val) }}
                                                                    className={'pagetabs tabs-valus'}
                                                                    id={val} color={arrColor}
                                                                    onClick={event => this.handleClick(event, 'purity')}
                                                                >
                                                                    {/* {this.imageRender(val)} */}
                                                                    <span id={val} className={`tabs-contants ${classes.normalfonts}`}>{arrPurity}</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div id={val} style={{ fontSize: "10px" }} className={this.state.purity === val ? `rings_tabsvls_active ${classes.tabs_values_font}` : `rings_tabsvls ${classes.tabs_values_font}`}>{arrColor}</div>
                                                    </Grid>
                                                )
                                                return 0;
                                            }
                                            )}
                                        </Grid>
                                    </Grid>
                                </Grid> : ""}

                            {val.tab3.Children.length > 0 ? <Grid container spacing={12} lg={12} style={{ marginBottom: "10px" }}>
                                <Grid item lg={3} xs={12} style={{ display: "flex", alignItems: "center" }}><h1 className="rings_tabs">{val.tab3.header}</h1></Grid>
                                <Grid item lg={9} xs={12}>
                                    <Grid container spacing={12} lg={12} >
                                        {val.tab3.Children.map((val, i) => {
                                            return (
                                                <Grid item lg={1} xs={2} className={classes.normalfonts_tabs}>
                                                    <div style={{ justifyContent: "center", display: "flex" }}>
                                                        <div className={this.state.diamondType === val.name ? 'darkouter' : "darkouterWhite"}>
                                                            <button
                                                                style={{ background: this.imageRender(val) }}
                                                                className={'pagetabslst tabs-valus'}
                                                                id={val.name}
                                                                onClick={event => this.handleClick(event, 'diamondType')}
                                                            >
                                                              
                                                                <span id={val.name} className={`tabs-cont ${classes.normalfonts}`}>{dimondclarity(val.name)}</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    
                                                </Grid>
                                            )
                                        }
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid> : ""}
                        </>
                    );
                }
                )}
            </div>
        );
    }
    // handleChange = (event, value) => {
    //     this.setState({ value });
    // };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    // handle = panel => (event, expanded) => {
    //     this.setState({
    //         expanded: expanded ? panel : false,
    //     });
    // };

    render() {
        const { expanded } = this.state;
        return (
            <div>
                <Hidden smDown>
                    {this.TabsComponent()}
                </Hidden>
                <Hidden mdUp>
                    <Container>
                        <div style={{ boxShadow: "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)" }}>
                            <ExpansionPanel expanded={expanded === "1"} >
                                {this.TabsComponent()}
                            </ExpansionPanel></div>
                    </Container>
                </Hidden>
            </div >
        );
    }
}

PriceTabs.propTypes = {
    TabContainer: PropTypes.func,
    TabsComponent: PropTypes.func,
    handleChange: PropTypes.func,
    MobileTabs: PropTypes.func,
    handleChangeIndex: PropTypes.func,
    handle: PropTypes.func
};
export default withStyles(styles)(PriceTabs);
