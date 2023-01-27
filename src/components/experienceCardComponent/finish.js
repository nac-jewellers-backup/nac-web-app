import React from "react";
import { Grid, Hidden,Card,CardMedia,CardContent,CardActionArea,CardActions,Button, Typography, Box } from "@material-ui/core";
import expstyles from "./experienceStyle";

export default function FinishCard(props) {
    const classes = expstyles();
    
    return (
        <>
         
          <Grid item lg={5} xl={5} xs={12} sm={12} className={classes.cardSpace}>        
                <Card className={classes.Cardview}>
                      <CardContent style={{display:"flex"}}>
                        <Grid container justifyContent="center" style={{width:"100%",alignItems:"center",padding:"30px"}}>
                        <Grid item xs={6}>
                           {/*  */}
                           <img
                            src={props?.finalImage}
                            alt="Ear Piercing"
                            style={{width:"100%"}}
                          />
                        </Grid>
                        <Grid item xs={12}>
                           <Typography style={{textAlign:"center"}}>{props?.finalContent}</Typography>
                        </Grid>
                        </Grid>
                      </CardContent>
                </Card>
          </Grid>  
        </> 
    );
  }