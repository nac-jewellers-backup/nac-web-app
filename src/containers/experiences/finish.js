import React from "react";
import { Grid, Card,CardContent,Typography} from "@material-ui/core";
import expstyles from "./experienceStyle";
import LotusTitle from '../../assets/NAC---Desktop-UI---NAC-Experiences (LL, EP, BS, Alive)_Sample-19.png';
import AliveTitle from '../../assets/NAC---Desktop-UI---NAC-Experiences (LL, EP, BS, Alive)_Sample-20.png';
import EarTitle from '../../assets/NAC---Desktop-UI---NAC-Experiences (LL, EP, BS, Alive)_Sample-21.png';
import BirthTitle from '../../assets/NAC---Desktop-UI---NAC-Experiences (LL, EP, BS, Alive)_Sample-22.png';

export default function FinishCard(props) {
    const classes = expstyles();


  const des={
    lotus:"Thank you for expressing interest to visit the Lotus Lounge. A member of our team will shortly get in touch with you to schedule an appointment.",
    birth:"Thank you for expressing interest in our Birthstone Consultation. A member of our team will get in touch with you shortly to schedule an appointment.",
    alive:"Thank you for expressing interest in NAC Alive. A member of our team will get in touch with you shortly to schedule an appointment.",
    ear:"Thank you for expressing interest in our ear piercing service. A member of our team will get in touch with you shortly to schedule an appointment."
  }
    
    return (
        <>
         
          <Grid item lg={5} xl={5} xs={12} sm={12} className={classes.cardSpace}>        
                <Card className={classes.Cardview}>
                      <CardContent style={{display:"flex"}}>
                        <Grid container justifyContent="center" style={{width:"100%",alignItems:"center",padding:"30px"}}>
                        <Grid item xs={6}>
                           <img src={props?.type === 'lotus' ? LotusTitle : props?.type === 'alive' ? AliveTitle : 
                            props?.type === 'piercing' ? EarTitle : props?.type === 'stones' ? BirthTitle : ""} style={{width:'100%'}}/>
                        </Grid>
                        <Grid item xs={12}>
                           <Typography style={{textAlign:"center",fontSize:"17px"}}>
                            {props?.type === 'lotus' ? des.lotus : props?.type === 'alive' ? des.alive : 
                            props?.type === 'piercing' ? des.ear : props?.type === 'stones' ? des.birth : ""}
                           </Typography>
                        </Grid>
                        </Grid>
                      </CardContent>
                </Card>
          </Grid>  
        </> 
    );
  }