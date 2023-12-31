import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import ExperienceCardStyles from "./style";
import parse from "html-react-parser";
import { useNetworkRequest } from "hooks/index";
import OtpCard from "./otpComponent";

const ExperienceCards = (props) => {
  console.log("propsData", props);
  const classes = ExperienceCardStyles();

  const [enable, setEnable] = useState(false);
  const [isOtp,setOtp] = React.useState(false);

  const [values, setValues] = React.useState({
    name: "",
    mobile: "",
    email: "",
    otp:"",
    date:new Date(),
    timeslot:"",
    metalType:[],
    productCategory:[],
    specialRequests:"",
    isItRequired:"",
    are_more_members_joining:"",
    error: {
      name: "",
      mobile: "",
      email: "",
      otp:"",
      date:"",
      timeslot:"",
      metalType:"",
      productCategory:"",
      specialRequests:"",
      isItRequired:"",
      are_more_members_joining:"",
    },
  });

  const handleChange = (key, value) => {
    if (key === "productCategory") {
      if (value.length > 3) {
        return false;
      } else setValues({ ...values, [key]: value });
    } else {
      setValues({ ...values, [key]: value });
    }
  };

  const { data, error, loading,status, makeFetch } = useNetworkRequest(
    "/appointment/send_otp",
    {},
    false
  );

  const handleSubmit = (type) => {    
    values.name=values.name.trim() 
    values.mobile=values.mobile.trim()
    values.email=values.email.trim()    
    var emailvld =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (values.name.length === "" && values["error"]) {     
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
    if (values.name.length == 0) {      
      values["error"]["name"] = "Name is required";
      setValues({
        ...values,
        values,
      });
      return false;
    }
    if (values.mobile !== "") {             
      let text = values.mobile;
      let pattern = /^[0-9]{10}$/;
      let result = text.match(pattern);
      if(!result){
        values["error"]["mobile"] = "Mobile Number is Invalid";
        setValues({
          ...values,
          values,
        });
        return false;
      }
    }    
    if (!emailvld.test(values.email)) {
      values["error"]["email"] = "An email address must contain a single @/.";
      setValues({
        ...values,
        values,
      });
      return false;
    }
    const Payload = {
      name: values.name,
      email: values.email,
      mobile: values.mobile,
      appointment_type_id:
        type == "alive"
          ? 1
          : type == "lotus"
          ? 2
          : type == "piercing"
          ? 3
          : type == "stones"
          ? 4
          : "",
    };
    makeFetch(Payload)
    // setEnable(!enable);
  };

  React.useEffect(()=>{
    if(status?.status === 200){
      setOtp(true)
    }
  },[status])

  const onBack =()=>{
    setOtp(false)
  }

  return (
    <Grid container className={classes.mainContainer}>
      <>
        <div className={classes.bgImage}>
          <img src={props?.value?.background_Image} alt="Ear Piercing" />
        </div>

        {!isOtp ? (
          <Grid item xs={12} sm={12} lg={6} className={classes.mainCard}>
            <Card className={classes.cardBox}>
              <CardContent className={classes.viewContent}>
                <Grid container className={classes.cardContainer}>
                  <Grid item xs={5}>
                    <div className={classes.headerImage}>
                      <img
                        src={props?.value?.header_Image}
                        alt="Ear Piercing"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={10}>
                    <div className={classes.description}>
                      <Typography>
                        {parse(props?.value?.description)}
                      </Typography>
                    </div>
                    <div className={classes.formTitle}>
                      <Typography>{parse(props?.value?.form_Title)}</Typography>
                    </div>

                    <div className={classes.nameGroup}>
                      <div className={classes.nameLabel}>
                        <Typography>Name:</Typography>
                      </div>
                      <div className={classes.textField}>
                        <TextField
                          name="name"
                          id="outlined-basic"
                          fullWidth
                          variant="outlined"
                          value={values.name}
                          inputProps={{maxLength:60}}
                          error={
                            values.error && values.error.name !== ""
                              ? true
                              : false
                          }
                          onChange={(e) => handleChange("name", e.target.value)}
                        />
                        <label className="errtext">
                          {" "}
                          {values.error.name && values.error.name}
                        </label>
                      </div>
                    </div>

                    <div className={classes.nameGroup}>
                      <div className={classes.nameLabel}>
                        <Typography>Mobile Number:</Typography>
                      </div>
                      <div className={classes.textField}>
                        <TextField
                          name="mobile"
                          id="outlined-basic"                                                    
                          fullWidth
                          variant="outlined"
                          value={values.mobile}                          
                          inputProps={{maxLength:10,pattern:"[6-9]{1}[0-9]{9}"}}
                          isNumber
                          error={
                            values.error && values.error.mobile !== ""
                              ? true
                              : false
                          }
                          onChange={(e) =>
                            handleChange("mobile", e.target.value)
                          }
                        />
                        <label className="errtext">
                          {" "}
                          {values.error.mobile && values.error.mobile}
                        </label>
                      </div>
                    </div>

                    <div className={classes.nameGroup}>
                      <div className={classes.nameLabel}>
                        <Typography>Email:</Typography>
                      </div>
                      <div className={classes.textField}>
                        <TextField
                          value={values.email}
                          id="outlined-basic"
                          fullWidth
                          variant="outlined"
                          error={
                            values.error && values.error.email !== ""
                              ? true
                              : false
                          }
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                        />
                        <label className="errtext">
                          {" "}
                          {values.error.email && values.error.email}
                        </label>
                      </div>
                    </div>

                    <div className={classes.submitButton}>
                      <Button
                        onClick={() => handleSubmit(props?.value?.type)}
                        fullWidth
                      >
                        {props?.value?.button_Text}
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ) : (
          // <Grid item xs={12} sm={12} lg={6} className={classes.mainCard}>
          //   <Card className={classes.cardBox}>
          //     <CardContent className={classes.viewContent}>
          //       <Grid container className={classes.cardContainer}>
          //         <Grid item xs={5}>
          //           <div className={classes.headerImage}>
          //             <img
          //               src={props?.value?.header_Image}
          //               alt="Ear Piercing"
          //             />
          //           </div>
          //         </Grid>
          //         <Grid item xs={10}>
          //           <div className={classes.submitText}>
          //             <Typography>{props?.value?.submit_Content}</Typography>
          //           </div>
          //         </Grid>
          //       </Grid>
          //     </CardContent>
          //   </Card>
          // </Grid>
          <OtpCard handleChange={handleChange} values={values} back={onBack} type={props?.value?.type} main={data} finalContent={props?.value?.submit_Content} finalImage={props?.value?.header_Image} />
        )}
      </>
    </Grid>
  );
};

export default ExperienceCards;
