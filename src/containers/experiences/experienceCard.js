import React from "react";
import { Grid, Hidden,Card,CardMedia,CardContent,CardActionArea,CardActions,Button, Typography, Box } from "@material-ui/core";
// import MediaCarousel from "../../components/mediacarousel/index";
import MediaCarousel from "../../components/mediacarousel/mediaCarousel";
// import Header from "../../components/header/header";
import expstyles from "./experienceStyle";
import Header from "components/SilverComponents/Header";
import Footer from "../../components/Footer/Footer";
import Lotus from '../../assets/NAC---Desktop-UI---NAC-Experiences-(LL,-EP,-BS,-Alive)_Sample-8.jpg';
import Alive from '../../assets/NAC---Desktop-UI---NAC-Experiences-(LL,-EP,-BS,-Alive)_Sample-9.jpg';
import Ear from '../../assets/NAC---Desktop-UI---NAC-Experiences-(LL,-EP,-BS,-Alive)_Sample-10.jpg';
import Birth from '../../assets/NAC---Desktop-UI---NAC-Experiences-(LL,-EP,-BS,-Alive)_Sample-11.jpg';
import LotusTitle from '../../assets/NAC---Desktop-UI---NAC-Experiences (LL, EP, BS, Alive)_Sample-19.png';
import AliveTitle from '../../assets/NAC---Desktop-UI---NAC-Experiences (LL, EP, BS, Alive)_Sample-20.png';
import EarTitle from '../../assets/NAC---Desktop-UI---NAC-Experiences (LL, EP, BS, Alive)_Sample-21.png';
import BirthTitle from '../../assets/NAC---Desktop-UI---NAC-Experiences (LL, EP, BS, Alive)_Sample-22.png';
import { Input } from "components/InputComponents/TextField/Input";
import OtpCard from "./otp";
import { useNetworkRequest } from "hooks/index";
import { API_URL } from "config";
import { UPDATE_DETAILS } from "queries/experience";

export default function ExperienceCard(props) {
  const classes = expstyles();
  const des={
    lotus:"Welcome to a luxurious shopping experience customized for your taste. The Lounge Features our finest signature collections in gold and diamonds rendered by the hands of skilled artisans.",
    birth:"Birthstones are known to have a positive impact on the wearer. With the right advice from our consultants, you can reap their various benefits.",
    alive:"We're here to bring your online shopping ALIVE with our Video Shopping experience.",
    ear:"Ear piercing is an important tradition in our culture, be it for ourselves or our little ones. At NAC Jewellers, we adhere to the highest standards of cleanliness, hygiene and precision to ensure that you have a painless and safe experience."
  }
  const subdes={
    lotus:"Book an appointment to Visit The Lotus Lounge",
    birth:"Book an appointment with our Birthstone Consultant now",
    alive:"Book an appointment to view and select your favourite designs on NAC Alive",
    ear:"Book an appointment for an Ear Piercing now"
  }
  const [values,setValues]= React.useState({
    email:"",
    mobile:"",
    name:"",
    otp:"",
    date:new Date(),
    timeslot:"",
    metalType:[],
    productCategory:[],
    specialRequests:"",
    isItRequired:"",
    are_more_members_joining:"",
    error:{
      email:"",
      mobile:"",
      name:"",
      otp:"",
      date:"",
      timeslot:"",
      metalType:"",
      productCategory:"",
      specialRequests:"",
      isItRequired:"",
      are_more_members_joining:"",
    }
  });
  const [isOtp,setOtp] = React.useState(false);
  const [id,setId] = React.useState()


  const { data, error, loading,status, makeFetch } = useNetworkRequest(
    "/appointment/send_otp",
    {},
    false
  );
  
  const handleSubmit =()=>{
    var emailvld =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (values.name === "" && values["error"]) {
      values["error"]["name"] = "Name is required";
      setValues({
        ...values,
        values,
      });
    }
    if (values.mobile === "" && values["error"]) {
      values["error"]["mobile"] = "Mobile Number is required";
      setValues({
        ...values,
        values,
      });
    }
    if (!emailvld.test(values.email)) {
    values["error"]["email"] =
      "An email address must contain a single @/.";
    setValues({
      ...values,
      values,
    });
    return false;
    }
   const Payload = {
      name : values.name,
      email: values.email,
      mobile:values.mobile
    }
    makeFetch(Payload)
  }

  React.useEffect(()=>{
    if(status?.status === 200){
      setOtp(true)
    }
  },[status])

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const handleChange=(key,value)=>{
    setValues({...values,[key]:value})
  }


  return (
      <Grid container className={classes.cardCont}>
      <img src={props?.type === 'lotus' ? Lotus : props?.type === 'alive' ? Alive : 
         props?.type === 'piercing' ? Ear : props?.type === 'stones' ? Birth : ""} style={{height:"150vh",}}/>

        {!isOtp ? <>
          {/* <Box className={classes.back}>
                <Button variant='contained' onClick={props.back} style={{background:"#B3821F",color:"#fff"}}>Back</Button>
          </Box> */}
          <Grid item lg={6} xl={6} xs={12} sm={12} className={classes.cardSpace}>        
              <Card className={classes.Cardview}>          
                    <CardContent className={classes.viewContent}>
                      <Grid container justifyContent="center" style={{flexDirection:"column",width:"100%",alignItems:"center"}} spacing={2}>
                        <Grid item xs={5}>
                           <img src={props?.type === 'lotus' ? LotusTitle : props?.type === 'alive' ? AliveTitle : 
                            props?.type === 'piercing' ? EarTitle : props?.type === 'stones' ? BirthTitle : ""} style={{width:'100%'}}/>
                        </Grid>
                        <Grid item xs={10} style={{marginTop:"15px"}}>
                          {props?.type === 'alive' ? <Typography style={{textAlign:"center",fontSize:"17px"}}>We're here to bring your online shopping <b>ALIVE</b> with our Video Shopping experience.</Typography> :  <Typography style={{textAlign:"center",fontSize:"17px"}}>
                            {props?.type === 'lotus' ? des.lotus :  
                            props?.type === 'piercing' ? des.ear : props?.type === 'stones' ? des.birth : ""}
                           </Typography>}
                          
                        </Grid>
                        <Grid item xs={10} style={{marginTop:"15px"}}>
                          {props?.type === 'lotus' ? <Typography style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>Book an appointment to Visit <span style={{textTransform:'bold',fontSize:"20px",fontWeight:700 }}>The Lotus Lounge</span></Typography> : <Typography style={{textAlign:"center",fontSize:"15px"}}>
                            {props?.type === 'alive' ? <Typography>Book an appointment to view and select your favourite designs on <b>NAC Alive</b></Typography> : 
                            props?.type === 'piercing' ? subdes.ear : props?.type === 'stones' ? subdes.birth : ""}
                           </Typography>}
                        
                        </Grid>
                        <Grid item xs={10} style={{width:"100%"}}>
                           <h5 className={`title ${classes.normalfonts2}`}>Name :</h5>
                             <Input
                                name="name"
                                isSide
                                value={values.name}
                                error={values.error && values.error.name !== '' ? true : false}
                                onChange={(e) => handleChange("name", e.target.value)}
                               />
                             <label className="errtext">
                                   {" "}
                                 {values.error.name && values.error.name}
                            </label>
                        </Grid>
                        <Grid item xs={10} style={{width:"100%"}}>
                        <h5 className={`title ${classes.normalfonts2}`}>Mobile Number :</h5>

                                <Input
                            name="mobile"
                            isSide
                            value={values.mobile}
                            isNumber
                            error={values.error && values.error.mobile !== '' ? true : false}
                           onChange={(e) => handleChange("mobile", e.target.value)}
                             />
                          <label className="errtext">
                            {" "}
                            {values.error.mobile && values.error.mobile}
                        </label>
                        </Grid>
                        <Grid item xs={10} style={{width:"100%"}}>
                        <h5 className={`title ${classes.normalfonts2}`}>Email :</h5>

                           <Input
                               value={values.email}
                               isSide
                               error={values.error && values.error.email !== '' ? true : false}
                               onChange={(e) => handleChange("email", e.target.value)}
                            />
                         <label className="errtext">
                           {" "}
                           {values.error.email && values.error.email}
                       </label>
                        </Grid>
                        <Grid item xs={10} style={{width:"100%"}}>
                           <Button variant='contained' onClick={handleSubmit} style={{background:"#B3821F",color:"#fff",width:"inherit"}}>Submit</Button>
                        </Grid>
                      </Grid>
                    </CardContent>
               
              </Card>
          </Grid> 
        </>:<OtpCard handleChange={handleChange} values={values} back={props.back} type={props.type} main={data}/>}
                
      </Grid>
  );
}
