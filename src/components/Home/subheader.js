import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { HomeSlider } from './carouselData'
import './home.css'


const Subheader = () => {
    return (
        <div >
            <div >
                <AppBar position="static" className="Subheader">
                    <Toolbar style={{ marginTop: "10px" }}>
                        <Container maxWidth="lg">
                            <Grid container spacing={12} className='SubheaderTopDiv'>
                                {HomeSlider.map(row =>
                                    <Grid spacing={4} key={row.name}>
                                        <img height="33px"
                                            src={row.icon} loading="lazy" alt='...' />
                                        <p style={{ marginTop: "-1px" }} className="contents">{row.name}</p>
                                    </Grid>
                                )}
                            </Grid>
                        </Container>
                    </Toolbar>
                </AppBar>
               


                <div style={{ paddingTop: "15px" }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={2} >
                            <Grid container item xs={9}>
                                <Grid container xs={12} spacing={2}>

                                    <Grid item xs={8}>
                                        <img height="100%" width="100%" loading="lazy" alt='...' src='https://assets-cdn.stylori.com/552x276/images/homepage/Stylori-ring-tile.jpg'  />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <img height="100%" width="100%" loading="lazy" alt='...' src='https://assets-cdn.stylori.com/276x276/images/homepage/276X276 PIXELS MANGO COLLECTIONS TILE-01 (1).jpg'/>
                                    </Grid>
                                </Grid>
                                <Grid container xs={12} spacing={2} style={{ marginTop: "6px" }}>

                                    <Grid item xs={4}>
                                        <img height="100%" width="100%" loading="lazy" alt='...' src='https://assets-cdn.stylori.com/276x276/images/homepage/-11.jpg'  />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <img height="100%" width="100%" loading="lazy" alt='...' src='https://assets-cdn.stylori.com/552x276/images/homepage/Stylori_ Daisy Days.jpg'  />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} spacing={2} style={{ height: "650px" }}>
                                <img height="100%" width="100%" loading="lazy" alt='...' src='https://assets-cdn.stylori.com/276x567/images/homepage/blush 3.jpg' /></Grid>
                        </Grid>
                    </Container>
                </div>
               
            </div>

        </div>
    )
}
export default Subheader;