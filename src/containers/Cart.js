import React from 'react';
// import Checkoutbreadcrum from '../../components/Checkout/checkoutbreadcrum';
// import BreadCrumb from '../../components/BreadCrumb/index'
import CartCard from 'components/Checkout/CartCard';
import Footer from 'components/Footer/Footer'
import { Grid, Container, Hidden } from '@material-ui/core';
// import CustomSeparator from '../../components/BreadCrumb/index'
import Header from 'components/Header/header'
import 'screens/Stylori/index.css'
import { CartContext } from 'context'
import cart from 'mappers/cart'
import 'screens/screens.css';
import CustomSeparator from '../components/BreadCrumb/index'
import styles from "../components/Checkout/style"
import { withStyles } from '@material-ui/core/styles';
import './index.css'
import { NavLink } from 'react-router-dom';

// data.map(data=>{
// return(
//     <Grid item xs={12}>
//     <CartCard data={data}/>
//     </Grid>
//         )
//     })
const breadcrumsdata = [
    {title:"Shopping Bag"},
    {title:"Login/ Register"},
    {title:"Address Detail"},
    {title:"Payment Options"},
    {title:"Order Confirmation"},
]
const cartsubdata = [
    {
        name: "100% Certified Jewellery",
        icon: "https://assets-cdn.stylori.com/images/static/icon-star.png"
    }, {
        name: "Secure Payments",
        icon: "https://assets-cdn.stylori.com/images/static/icon-lock.png"
    }, {
        name: "Free Insured Shipping",
        icon: "https://assets-cdn.stylori.com/images/static/icon-van.png"
    }, {
        name: "25-Day Returns",
        icon: "https://assets-cdn.stylori.com/images/static/icon-return.png"
    }
]
class Cart extends React.Component {
    render() {
        const { data, classes } = this.props
        let path = window.location.pathname.split('/').pop();
        return (
            <div>
                <Hidden smDown>
                    <Grid container spacing={12} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
                        <Grid item xs={12} >
                            <Header />
                        </Grid>
                    </Grid>
                    {path === "checkout" ? "" :
                        <CustomSeparator
                            arrowicon='cart-head-arrows'
                            className={`breadcrums-header ${classes.normalcolorback}`}
                            classsubhed={`breadcrums-sub ${classes.normalcolorback}`}
                            list={`MuiBreadcrumbs-li ${classes.fontwhite}`}
                            data={this.props.data.length > 0 ? this.props.data[0].breadcrumsdata : breadcrumsdata}
                            subdata={this.props.data.length > 0 ? this.props.data[0].cartsubdata : cartsubdata}
                        />
                    }
                    <div className="cart-ovralldiv-media">
                        <Grid Container spacing={12}>
                            {this.props.data.length > 0 ? <Grid item xs={12}>
                                <CartCard data={data} />
                            </Grid> : <><div className="noproductsfound">There are no items in this cart. </div>  <NavLink to="/jewellery" style={{ textDecoration: 'none' }} > <div className="continueshopping">CONTINUE SHOPPING</div></NavLink></>}
                        </Grid>
                    </div>
                  
                    <Grid Container spacing={12}>
                        <Grid item xs={12}>
                            <Footer />
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Container>
                        <Grid Container spacing={12}>
                            {this.props.data.length > 0 ? <Grid item xs={12}>
                                <CartCard data={data} />
                            </Grid> : <><div className="noproductsfound">There are no items in this cart.</div><a href="/jewellery"> <div className="continueshopping">CONTINUE SHOPPING</div></a></>}
                        </Grid>
                    </Container>
                    <Grid Container spacing={12}>
                        <Grid item xs={12}>
                            <Footer />
                        </Grid>
                    </Grid>
                </Hidden>
            </div>
        )
    }
}
// export default Checkout;

const Components = props => {
    let { CartCtx: { cartFilters, data, loading, error } } = React.useContext(CartContext);
    let content, mapped;
    if (!loading && !error) {
        if (Object.keys(data).length !== 0) {
            mapped = cart(data);
        }
    }
    if (Object.keys(data).length === 0) content = <div className="overall-loader"><div id="loading"></div></div>
    else content = <Cart {...props} data={mapped} />
    return content
}


export default withStyles(styles)(Components);