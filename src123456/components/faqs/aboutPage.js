import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Header from "components/Header/header";
import Footer from "components/Footer/Footer";
import '../../containers/index.css'
import {aboutus} from '../../containers/dummydatafaqs';

const useStyles = makeStyles(theme => ({
   
}));

export default function AboutPage(props) {
    const classes = useStyles();

    return(
        <Grid container>
             <Grid item xs={12} style={{ position: "sticky", top: "0", zIndex: "1000" }}>
                <Header />
            </Grid>

        <Grid container class="aboutwidth" style={{paddingTop:"15px"}} >
            <Grid container class="aboutMargin">
            <Grid container class="aboutFifty">
            <Grid item style={{padding:"0px 15px"}}>
                <img style={{width:"100%"}} src={aboutus.data.img} />
            </Grid>
            </Grid>
            <Grid container class="aboutFifty">
            
            <Grid item style={{padding:"0px 15px"}}>
                <Typography variant="h5" style={{color:"#ed1165",marginBottom:"10px"}}>About Us</Typography>
                <Typography style={{fontSize:"12px",}}>
                    {aboutus.data.content}
                </Typography>
            </Grid>
            
            </Grid>
        </Grid>
        </Grid>

        <Grid item xs={12} style={{ marginTop: 20 }}>
                <Footer />
            </Grid>
        </Grid>
    )
}