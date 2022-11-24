import React from "react";
import { Grid, Hidden,Card,CardMedia,CardContent,CardActionArea,CardActions,Button, Typography, Box } from "@material-ui/core";
import { Input } from "components/InputComponents/TextField/Input";
import expstyles from "./experienceStyle";
import Detailpage from "./detailPage";
import { useNetworkRequest } from "hooks/index";

export default function OtpCard(props) {
    const classes = expstyles();

    const [isDetail,setDetail] = React.useState(false);

    const { dataVerify, error, status, loading, makeFetch  } = useNetworkRequest(
      "/appointment/verify_otp",
      {},
      false
    );

    const { dataResend, error :error1, loading : loading1, status:status1, makeFetch : Resend } = useNetworkRequest(
      "/appointment/resend_otp",
      {},
      false
    );

  
  const handleVerify =()=>{
    const Payload={
      appointment_id:props?.main?.data?.appointment_id,
      appointment_type_id : props.type == 'alive' ? 1 : props.type == 'lotus' ? 2 : props.type == 'piercing' ? 3 : props.type == 'stones' ? 4 : '',
      otp:props?.values?.otp
    }
    makeFetch(Payload)
  }

  const handleResend =()=>{
    const Payload={
      appointment_id:props?.main?.data?.appointment_id,
    }
    Resend(Payload)
  }

  React.useEffect(()=>{
   if(status?.status === 200){
    setDetail(true)
   }
  },[status])

  const back=()=>{
    setDetail(false)
  }
    
    return (
        <>
        {!isDetail ? <>
          {/* <Box className={classes.back}>
                  <Button variant='contained' onClick={props.back} style={{background:"#B3821F",color:"#fff"}}>Back</Button>
          </Box> */}
          <Grid item lg={5} xl={5} xs={12} sm={12} className={classes.cardSpace}>        
                <Card className={classes.Cardview}>
                      <CardContent className={classes.otpContent}>
                        <Grid container justifyContent="center" style={{width:"100%",alignItems:"center"}}>
                          <Grid item xs={12} style={{width:"100%"}}>
                          <h4 className={classes.headerOtp}>Please Enter the OTP</h4>
                          <Typography className={classes.subheaderOtp}>sent to your mobile/email id</Typography>
                          <Input
                              type="text"
                              name="otp"
                              isNumber
                              maxLength={6}
                              minLength={6}
                    // error={edata ? true : false}
                             helperText="Please enter your OTP"
                              placeholder="Please enter your OTP"
                              color="secondary"
                              onChange={(e) => props.handleChange("otp", e.target.value)}
                              onKeyPress={(e) => {
                                if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();
                              }}
                              required
                            />

                           <label className="errtext">
                             {" "}
                             {props.values.error.otp && props.values.error.otp}
                         </label>
                          </Grid>
                          <Grid item xs={12} style={{width:"100%",display:"flex",flexDirection:"column",gap:'10px'}}>
                             <Button variant='contained' onClick={handleVerify} style={{background:"#2F348B",color:"#fff",width:"inherit",textTransform:"none"}}>Verify</Button>
                             <Button onClick={handleResend} style={{background:"#fff",width:"inherit",textTransform:"none"}}>Resend</Button>
                          </Grid>
                        </Grid>
                      </CardContent>
                </Card>
          </Grid>  
        </> : <Detailpage back={props.back} values={props.values} handleChange={props.handleChange} type={props.type}  appointmentId={props?.main?.data?.appointment_id}/>}
           
        </>
    );
  }