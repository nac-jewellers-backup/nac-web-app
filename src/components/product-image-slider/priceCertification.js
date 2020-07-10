import {
    Container,
    Hidden,
    ExpansionPanel,
    ExpansionPanelSummary,
    Typography,
    Grid
} from '@material-ui/core';
import React from 'react';
import './product-images.css'
import PropTypes from 'prop-types';
import { useDummyRequest } from '../../hooks';
import { productpricingPages } from '../../mappers';
import { withStyles } from '@material-ui/core/styles';
import styles from './style'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
class PriceCertification extends React.Component {
    state = {
        expanded: null
    };
    mobilePriceCertificat = () => {
        const { expanded } = this.state;
        
        const { certificates } = this.props.data[0]
        
        const { classes } = this.props;
        return (
            <div>
                <Container>
                    {
                    certificates ?
                    // certificates.map(val =>
                    //  {
// 
                          <>
                        
                            <ExpansionPanel className={classes.cerfificates} style={{ boxShadow: "rgb(190, 191, 191) 5px 5px 5px", border:'1px solid #ccc' ,padding:"0 5px"}} expanded={expanded === certificates.header} onChange={this.handle(certificates.header)} key={certificates.name}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"  >
                                    <div style={{ width: "100%" }} >
                                        <Typography className={`subtabs-smrt ${classes.normalfonts}`}>{'Certificate'}</Typography>
                                        {/* <hr class="bottom-line border-line-"></hr> */}
                                    </div>
    
                                </ExpansionPanelSummary>
                                <Grid container spacing={12} >
                            <img src={certificates[0].img0} alt="" width="100%"/>
                            </Grid>
                                {/* <Grid spacing={12}>
                                    <Grid item xs={12} className='certification-img'>
                                        <img width='100%' height='100%' src={val.img4} alt="" />
                                    </Grid>
                                </Grid> */}
                            </ExpansionPanel>
                        <br/></>
                    //  })
                :
                null    
                }
                </Container></div>
        )
    };
    PriceCertificat = () => {
        
        const { certificates } = this.props.data[0] 
        debugger
        const { classes } = this.props;
       
        return (
           
            <div>
               
                {
certificates ?
                // certificates.map(val =>
                    <div className="overall-boxz" style={{border:'1px solid #ccc'}} >
                        <div className="overall-bo">
                            <span className={`product-details ${classes.normalfonts}`}>{'Certificates'}</span>
                            <hr class="bottom-line"></hr>
                            <Grid container spacing={12} >
                            <img src={certificates[0].img0} alt="" width="100%"/>
                            </Grid>
                            {/* <Grid spacing={12}>
                                <Grid item xs={12} className='certification-img'>
                                    <img width='100%' height='100%' src={val.img4} alt="" />
                                </Grid> */}
                            {/* </Grid> */}
                        </div>
                    </div>

                // )
                :
                null
                }
            </div>
            
            )
    }
    handle = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    render() {
        return (
            <div>
                <Hidden smDown>
                    {this.PriceCertificat()}
                </Hidden>


                <Hidden mdUp>
                    {this.mobilePriceCertificat()}
                </Hidden>
            </div>
        )
    }

}
PriceCertification.propTypes = {
    PriceCertificat: PropTypes.func,
    handle: PropTypes.func
};

export default withStyles(styles)(PriceCertification);