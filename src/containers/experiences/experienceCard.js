import React from "react";
import { Grid, Hidden,Card,CardMedia,CardContent,CardActionArea,CardActions,Button, Typography, Box } from "@material-ui/core";

import MediaCarousel from "../../components/mediacarousel/mediaCarousel";

import expstyles from "./experienceStyle";
import { useParams } from "react-router-dom";
import Header from "components/SilverComponents/Header";
import Footer from "../../components/Footer/Footer";
import Lotus from '../../assets/NAC---Desktop-UI---NAC-Experiences-(LL,-EP,-BS,-Alive)_Sample-8.jpg';
import Alive from '../../assets/NAC---Desktop-UI---NAC-Experiences-(LL,-EP,-BS,-Alive)_Sample-9.jpg';
import Ear from '../../assets/NAC---Desktop-UI---NAC-Experiences-(LL,-EP,-BS,-Alive)_Sample-10.jpg';
import Birth from '../../assets/NAC---Desktop-UI---NAC-Experiences-(LL,-EP,-BS,-Alive)_Sample-11.jpg';
import LotusTitle from '../../assets/NAC---Desktop-UI---NAC-Experiences (LL, EP, BS, Alive)_Sample-19.png';
import LotusMobile from '../../assets/Lotus_Mobile.jpg';
import AliveMobile from '../../assets/Alive_Mobile.jpg';
import EarMobile from '../../assets/Ear_mobile.jpg';
import StoneMobile from '../../assets/Birth stone_mobile.jpg'
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

  const {type} = useParams();
  
  let types = type.slice(1)


  const { data, error, loading,status, makeFetch } = useNetworkRequest(
    "/appointment/send_otp",
    {},
    false
  );
  
  const handleSubmit =()=>{    
    values.name=values.name.trim();
    var emailvld =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (values.name === "" && values["error"]) {
      values["error"]["name"] = "Name is required";
      setValues({
        ...values,
        values,
      });
      return false;
    }
    if (values.name === "" && values["name"]) {
      values["error"]["name"] = "Name is required";
      setValues({
        ...values,
        values,
      });
      return false;
    }
    if (values.mobile === "" && values["error"]) {
      values["error"]["mobile"] = "Mobile Number is required";
      setValues({
        ...values,
        values,
      });
      return false;
    }    
    if (values.mobile.length >= 11) {
      values["error"]["mobile"] = "Enter valid Mobile Number";
      setValues({
        ...values,
        values,
      });
      return false;
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
      mobile:values.mobile,
      appointment_type_id : types== 'alive' ? 1 : types== 'lotus' ? 2 : types== 'piercing' ? 3 : types== 'stones' ? 4 : '',
    }
    makeFetch(Payload)
  }

  React.useEffect(()=>{
    if(status?.status === 200){
      setOtp(true)
    }
  },[status])

  React.useEffect(() => {
    window.scrollTo(0, 80)
  }, [])



  const handleChange=(key,value)=>{    
    if(key === 'productCategory'){
     if (value.length > 3) {return false}
     else setValues({...values,[key]:value})
    }
    else if(key === 'name'){            
      setValues({
        ...values,[key]:value,
        error: {
          ...values.error,
          name: ""
        }
      });
    }
    else if(key == 'email'){
      setValues({
        ...values,[key]:value,
        error: {
          ...values.error,
          email: ""
        }
      });
    }
    else if(key == 'mobile'){
      setValues({
        ...values,[key]:value,
        error: {
          ...values.error,
          mobile: ""
        }
      });
    }
    else{
      setValues({...values,[key]:value})
    }
  }

  const onBack =()=>{
    setOtp(false)
  }


  return (
    <div>
     <Grid className={classes.headerNew} xs={12}>
        <Header />
      </Grid>
         <Grid container className={classes.cardCont}>
        
      <Hidden smDown><img src={types === 'lotus' ? Lotus : types === 'alive' ? Alive : 
         types === 'piercing' ? Ear : types === 'stones' ? Birth : ""} style={{height:"1000px",width:"100%",}}/></Hidden>
      <Hidden mdUp><img src={types === 'lotus' ? LotusMobile : types === 'alive' ? AliveMobile : 
         types === 'piercing' ? EarMobile : types === 'stones' ? StoneMobile : ""} style={{height: types === 'lotus' ? "950px" : types === 'piercing' ? "920px" : "800px",width:"100%"}}/></Hidden>   

        {!isOtp ? <>
          {/* <Box className={classes.back}>
                <Button variant='contained' onClick={props.back} style={{background:"#B3821F",color:"#fff"}}>Back</Button>
          </Box> */}
          <Grid item lg={6} xl={6} xs={12} sm={12} className={classes.cardSpace}>        
              <Card className={classes.Cardview}>          
                    <CardContent className={classes.viewContent}>
                      <Grid container justifyContent="center" style={{flexDirection:"column",width:"100%",alignItems:"center"}} spacing={2}>
                        <Grid item xs={5}>
                           <img src={types === 'lotus' ? LotusTitle : types === 'alive' ? AliveTitle : 
                            types === 'piercing' ? EarTitle : types === 'stones' ? BirthTitle : ""} style={{width:'100%'}}/>
                        </Grid>
                        <Grid item xs={10} style={{marginTop:"15px"}}>
                          {types === 'alive' ? <Typography style={{textAlign:"center",fontSize:"17px"}}>We're here to bring your online shopping <b>ALIVE</b> with our Video Shopping experience.</Typography> :  <Typography style={{textAlign:"center",fontSize:"17px"}}>
                            {types === 'lotus' ? des.lotus :  
                            types === 'piercing' ? des.ear : types === 'stones' ? des.birth : ""}
                           </Typography>}
                          
                        </Grid>
                        <Grid item xs={10} style={{marginTop:"15px"}}>
                          {types === 'lotus' ? <Typography style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>Book an appointment to Visit <span style={{textTransform:'bold',fontSize:"20px",fontWeight:700 }}>The Lotus Lounge</span></Typography> : <Typography style={{textAlign:"center",fontSize:"15px"}}>
                            {types === 'alive' ? <Typography>Book an appointment to view and select your favourite designs on <b>NAC Alive</b></Typography> : 
                            types === 'piercing' ? subdes.ear : types === 'stones' ? subdes.birth : ""}
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
        </>:<OtpCard handleChange={handleChange} values={values} back={onBack} type={types} main={data}/>}
        
       
         </Grid>
      <Footer/>
    </div>
     
  );
}
