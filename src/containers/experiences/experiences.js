import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Hidden,Card,CardMedia,CardContent,CardActionArea,CardActions, Typography, Box } from "@material-ui/core";
import Slideshow from "../../components/Carousel/carosul";
import {
  ExperiencePageNac,
  IndexExperiencePage,
} from "mappers/dummydata/savingNac";
// import MediaCarousel from "../../components/mediacarousel/index";
import MediaCarousel from "../../components/mediacarousel/mediaCarousel";
// import Header from "../../components/header/header";
import expstyles from "./experienceStyle";
import Header from "components/SilverComponents/Header";
import Footer from "../../components/Footer/Footer";
import ExperienceCard from "./experienceCard";
import Lotus from 'assets/NAC---Desktop-UI---NAC-Experiences-(LL,-EP,-BS,-Alive)_Sample-8.jpg';
import Alive from 'assets/NAC---Desktop-UI---NAC-Experiences-(LL,-EP,-BS,-Alive)_Sample-9.jpg';
import Ear from 'assets/NAC---Desktop-UI---NAC-Experiences-(LL,-EP,-BS,-Alive)_Sample-10.jpg';
import Birth from 'assets/NAC---Desktop-UI---NAC-Experiences-(LL,-EP,-BS,-Alive)_Sample-11.jpg';
import Experiences from 'assets/ExperienceBanner.jpg';
import ExperiencesMobile from 'assets/Experiences banner.jpg'


const datalist=[
  {
    name:"The Lotus Lounge",
    type:"lotus",
    imageUrl:Lotus,
    description:"Welcome to luxurious shopping experience Customized for your taste",
    subdescription:"Book an appointment to Visit The Lotus Lounge"
  },
  {
    name:"NAC Alive",
    type:"alive",
    imageUrl:Alive,
    description:"We are here to bring yout online Shopping ALIVE with our video shopping experience",
    subdescription:"Book an appointment to view and select your favourite designs on NAC Alive"
  },
  {
    name:"Ear Piercing",
    type:"piercing",
    imageUrl:Ear,
    description:"Ear piercing is an important tradition in our culture,be it ourselves or out little ones",
    subdescription:"Book an appointment for an Ear Piercing now."
  }, {
    name:"Birth Stones",
    type:"stones",
    imageUrl:Birth,
    description:"Birthstones are known to have positive impact on the wearer,With the right advice from our consultants,you can reap their various benifits",
    subdescription:"Book an appointment with our Birthstone Consultant now."
  }
]

const subDatalist=[
  
]

export default function Experience(props) {
  const classes = expstyles();
  const [nextState,setNextstate] = useState('');
  const [active,setActive] = useState(false);
  const history = useHistory();


  const values = (val) => {
    window.open(`/experiencecard/:${val}`)
  };

  
  return (
    <div>
        <Grid container>
        <Header />
        <div style={{width:'100%'}}> <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Hidden smDown><img src={Experiences} style={{width:"100%"}}/></Hidden>
          <Hidden mdUp><img src={ExperiencesMobile} style={{width:"100%"}}/></Hidden>
      </Grid>
      <Box className={classes.mainCard}>
      <Grid xs={12} sm={12} md={12} lg={7} xl={7} item container spacing={2}>
            {datalist?.map((val)=>{
              return(
                <Grid item lg={6} xl={6} xs={12} sm={12} style={{flexDirection:"row"}}>
                <Card className={classes.Card}  onClick={() => values(val.type)}>

                   <CardMedia
                        style={{ height: "200px" }}
                        image={val.imageUrl}
                        title="Contemplative Reptile"
                    />
                    <CardContent className={classes.content}>
                       <Typography className={classes.title}>{val.name}</Typography>
                       <Typography className={classes.desc}>{val.description}</Typography> 
                    </CardContent>
                </Card>
                </Grid>
              )
            })}   
      </Grid>
        </Box> </div>
        <Footer />
        </Grid>
     
   
    </div>
   
  );
}
