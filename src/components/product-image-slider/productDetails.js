import {
    Grid,
    ListItemText,
    Container,
    ExpansionPanel,
    ExpansionPanelSummary,
    Hidden,
    Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from "react";
import './product-images.css';
import { withStyles } from '@material-ui/core/styles';
import styles from "./style";
import { isArray } from 'util';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class ProductDetails extends React.Component {
    state = {
        expanded: null
    };

    productsDetails = (data) => {
        const { classes } = this.props;
        return (
            <div>

                <Grid container spacing={12} style={{ paddingRight: "20px" }}>
                    {data && data.length > 0 && data[0] && data[0].productsDetails && data[0].productsDetails.map(valueofproductdetail => {

                        return (valueofproductdetail.namedetail.length === 0) ? false :
                            <>
                            {
                                (valueofproductdetail.header !== 'Price Breakup' || (valueofproductdetail.header === 'Price Breakup' && valueofproductdetail.namedetail[5].name === 'Total' && Number(valueofproductdetail.namedetail[5].details[1].replace(/,/g, "").replace(/₹/g,"")) > 13000)) ?
<div className='overall-boxz' >
                                    <div className='overall-bo'>
                                        <span key={valueofproductdetail.name} className={`product-details ${classes.normalfonts}`} > {valueofproductdetail.header}</span>
                                        <hr class="bottom-line"></hr>
                                        <>{
                                            valueofproductdetail.namedetail !== undefined && valueofproductdetail.namedetail.map(res => {
                                                return (<>{res.name &&
                                                    <span>
                                                        {res.details !== null && res.details.length === 0 ? false :

                                                            <Grid container item xs={12} >
                                                                <Grid xs={4} lg={4}>
                                                                    <ListItemText variant='' className={`product-subhead ${classes.normalfonts}`}>
                                                                        <span style={{ fontSize: "12px" }}> {res.name}</span>
                                                                    </ListItemText>
                                                                </Grid>
                                                                <Grid container item xs={8} style={{ alignItems: "center" }}>
                                                                    {
                                                                        // valueofproductdetail.header === 'Price Breakup' && 
                                                                        isArray(res.details) ?

                                                                            <ListItemText variant='' className={`product-subhead-list ${classes.fontgray}`} >
                                                                                {res.details.map((Item, Index) => {
                                                                                    
                                                                                    return (<span style={{ fontSize: "12px", textAlign: 'left' }}> {
                                                                                        (valueofproductdetail.header === 'Price Breakup') ?
                                                                                            ((Index === 0 && (res.details[Index] !== res.details[Index + 1]) ? <del>{Item}</del> :
                                                                                                Index === 0 ? '' : Item)) : Item} </span>)
                                                                                })}
                                                                            </ListItemText>
                                                                            :

                                                                            <ListItemText variant='' className={`product-subhead-list ${classes.fontgray}`}>
                                                                                {/* {data[0].productsDetails[3].namedetail[1].length > 0} */}
                                                                                {<span style={{ fontSize: "12px", marginLeft: '10px' }}> {res.details}</span>}
                                                                            </ListItemText>
                                                                    }
                                                                </Grid>
                                                            </Grid>
                                                        }
                                                    </span>

                                                }</>
                                                )
                                            }
                                            )}</>
                                    </div>
                                </div>
                                :
                                null
                            }
                                
                            </>
                    })}
                </Grid>

             

            </div>
        )
    };
    mobileproductsDetails = () => {
        const { expanded } = this.state;
        const { data } = this.props;
        const { classes } = this.props;
        return (
            <div>
                <Container >

                    {data[0].productsDetails.map(val => {
                        return (
                            val.namedetail.length === 0) ? false :
                            <>
                            {
                                (val.header !== 'Price Breakup' || (val.header === 'Price Breakup' && val.namedetail[5].name === 'Total' && Number(val.namedetail[5].details[1].replace(/,/g, "").replace(/₹/g,"")) > 13000))
                                ?
                                <ExpansionPanel className={classes.expansionHere} style={{ boxShadow: "rgb(190, 191, 191) 5px 5px 5px", border:'1px solid #ccc', margin: "12px 0px", padding: "0 5px 5px 5px" }} expanded={expanded === val.header} onChange={this.handle(val.header)} key={val.name}>
                                <ExpansionPanelSummary


                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header">
                                    <div style={{ width: "100%" }} >
                                        <Typography className={`subtabs-smrt ${classes.normalfonts}`}>{val.header}</Typography>
                                        {/* <hr class="bottom-line border-line-"></hr> */}
                                    </div>
                                </ExpansionPanelSummary>
                                <div style={{ backgroundColor: "fafafa" }}>
                                    {
                                        val.namedetail !== undefined && val.namedetail.map(res =>
                                            res.details !== null && res.details.length === 0 ? false :
                                                <span>
                                                    {
                                                        <> {res.name && <Grid container item xs={12} style={{ padding: "0px 10px 0px 10px " }}>
                                                            <Grid xs={4} lg={4}>
                                                                <ListItemText variant='' className={`product-subhead ${classes.normalfonts}`}>
                                                                    <span style={{ fontSize: "12px" }}> {res.name}</span>
                                                                </ListItemText>
                                                            </Grid>
                                                            <Grid container item xs={8} style={{ alignItems: "center" }}>
                                                                {
                                                                    isArray(res.details) ?
                                                                        <ListItemText variant='' className={`product-subhead-list ${classes.fontgray}`} >
                                                                            {res.details.map((Item, Index) => {
                                                                                return (<span style={{ fontSize: "12px", textAlign: 'left' }}> {
                                                                                    (val.header === 'Price Breakup') ?
                                                                                        ((Index === 0 && (res.details[Index] !== res.details[Index + 1]) ? <del>{Item}</del> :
                                                                                            Index === 0 ? '' : Item)) : Item} </span>)
                                                                            })}
                                                                        </ListItemText>
                                                                        :
                                                                        <ListItemText variant='' className={`product-subhead-list ${classes.fontgray}`}>
                                                                            <span style={{ fontSize: "12px", marginLeft: '10px' }}> {res.details}</span>
                                                                        </ListItemText>
                                                                }
                                                            </Grid>
                                                        </Grid>
                                                        }</>}
                                                </span>
                                        )}
                                </div>
                            </ExpansionPanel>
                                :
                                null
                            }
                               
                            </>
                    })}

                   

                </Container>
            </div>
        )
    }
    handle = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    render() {
        const { data } = this.props;
        return (
            <div>
                <Hidden smDown>
                    {this.productsDetails(data)}

                </Hidden>

                <Hidden mdUp>
                    {this.mobileproductsDetails()}
                </Hidden>
            </div>
        );
    }
}
ProductDetails.propTypes = {
    productsDetails: PropTypes.func,
    mobileproductsDetails: PropTypes.func,
    handle: PropTypes.func,
};
export default withStyles(styles)(ProductDetails);