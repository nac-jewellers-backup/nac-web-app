import { Button, Grid, Snackbar, TextField, Typography } from "@material-ui/core";
import { API_URL } from "../../config";
import React, { useContext } from "react";
import ContactUsFormStyles from "./style";
import { SEND_ENQUIREY } from "queries/home";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ContactUsForm = (props) => {
  const classes = ContactUsFormStyles();

  const initialState = {
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    message: "",
  };

  // states
  const [state, setState] = React.useState(initialState);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [openSnackError, setOpenSnackError] = React.useState({
    type:false,
    message:""
  });

  // onChange the text-field 
  const onChangeData = (event) => {
    
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
        
  };

  // Trigger the email
  const emailTrigger = async (id) => {
    const params = {
      type: "send_enquiry",
      appointment_id: id,
    };
    await axios.post(`${API_URL}/trigger_mail`, params).then((res) => {
      if (res.data) {
        setOpenSnack(true);
        setState({
          firstName: "",
          lastName: "",
          number: "",
          email: "",
          message: "",
        });
        return;
      }
      setOpenSnackError({
        type:true,
        message:"Something went wrong, Please try again!"
      });
    });
  };

  // On submit the Contact
  const onsubmitvalue = () => {
    state.firstName = state.firstName.trim()
    state.lastName = state.lastName.trim()
    state.email = state.email.trim()
    state.number = state.number.trim()
    state.message =  state.message.trim()
    if (
      state.firstName &&
      state.lastName &&
      state.email &&
      state.number &&
      state.message
    ) {
      if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email)){
        fetch(`${API_URL}/graphql`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: SEND_ENQUIREY,
            variables: {
              appointment: {
                updatedAt: new Date(),
                createdAt: new Date(),
                email: state.email,
                appointmentTypeId: 5,
                comments: state.message,
                specialRequests: "contactus",
                customerName: state.firstName + " " + state.lastName,
                isActive: true,
                mobile: state.number,
              },
            },
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.data?.createAppointment?.appointment?.id) {
              emailTrigger(data?.data?.createAppointment?.appointment?.id);
            }
          });
      }
      else{
        setOpenSnackError({
          type:true,
          message:"Enter valid Email Id!!"
        })        
      }
      
    }else{
      setOpenSnackError({
        type:true,
        message:"Please fill all the fields"
      })
    }
  };

  // handle snack bar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackError({
      type:false,
      message:""
    });
    setOpenSnack(false);
  };

  return (
    <>
      <div className={classes.mainCard}>
        <div className={classes.smallCard}>
          <Grid
            className={classes.position}
            container
            style={{ justifyContent: "center" }}
          >
            {props?.value.map((val) => {
              return (
                <Grid item xs={8} sm={8} md={6} lg={6}>
                  <div className={classes.cardSection}>
                    <Grid container>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Typography className={classes.left_1}>
                          Customer Care:
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Typography>{val?.customer_Care}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Typography className={classes.left_2}>
                          Email:
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Typography>{val?.email}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Typography className={classes.left_3}>
                          WhatsApp:
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Typography>{val?.whatsApp}</Typography>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>

      <div className={classes.mainForm}>
        <Grid container>
          {props?.value?.map((val) => {
            return (
              <Grid item xs={12}>
                <div
                  className={classes.mainRoot}
                  style={{
                    backgroundImage: "url(" + val?.background_Image + ")",
                    backgroundSize: "100%",
                    backgroundPosition: "0px -50px",
                  }}
                >
                  <div className={classes.titleGroup}>
                    <div className={classes.title}>
                      <Typography>{val?.title}</Typography>
                    </div>
                    <div className={classes.description}>
                      <Typography>{val?.description.replace("with","within")}</Typography>
                    </div>
                  </div>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <div className={classes.lable}>
                        <div className={classes.field_1}>
                          <Typography>First Name:</Typography>
                        </div>
                        <div className={classes.text_1}>
                          <TextField
                            className={classes.textField}
                            id="firstName"
                            variant="outlined"
                            autoFocus
                            margin="dense"                            
                            fullWidth
                            value={state.firstName}
                            onChange={onChangeData}
                            name="firstName"
                            required
                          />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <div className={classes.lable}>
                        <div className={classes.field_2}>
                          <Typography>Last Name:</Typography>
                        </div>
                        <div className={classes.text_2}>
                          <TextField
                            className={classes.textField}
                            id="lastName"
                            variant="outlined"
                            autoFocus
                            margin="dense"
                            fullWidth
                            value={state.lastName}
                            onChange={onChangeData}
                            name="lastName"
                            required
                          />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <div className={classes.lable}>
                        <div className={classes.field_3}>
                          <Typography>Contact Number:</Typography>
                        </div>
                        <div className={classes.text_3}>
                          <TextField
                            className={classes.textField}
                            id="number"
                            variant="outlined"
                            autoFocus
                            margin="dense"
                            fullWidth
                            type={"number"}
                            value={state.number}
                            onChange={onChangeData}                            
                            name="number"
                            onKeyDown={ (evt) => (evt.key === 'e' || evt.key === 'E' || evt.key === '.' || evt.key === '+' || evt.key === '-')  && evt.preventDefault() }                            
                            required
                          />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <div className={classes.lable}>
                        <div className={classes.field_4}>
                          <Typography>Email Id:</Typography>
                        </div>
                        <div className={classes.text_4}>
                          <TextField
                            className={classes.textField}
                            id="email"
                            variant="outlined"
                            autoFocus
                            margin="dense"
                            fullWidth
                            value={state.email}
                            onChange={onChangeData}
                            name="email"
                            required
                          />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <div className={classes.lable}>
                        <div className={classes.field_5}>
                          <Typography>Message:</Typography>
                        </div>
                        <div className={classes.text_5}>
                          <TextField
                            className={classes.textField}
                            id="message"
                            multiline
                            rows={5}
                            autoFocus
                            margin="dense"
                            fullWidth
                            value={state.message}
                            onChange={onChangeData}
                            name="message"
                            required
                          />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  <div className={classes.button}>
                    <Button onClick={onsubmitvalue}>SUBMIT</Button>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
        <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openSnack}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Your queries send successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openSnackError.type}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          {openSnackError.message}
        </Alert>
      </Snackbar>
      </div>
    </>
  );
};

export default ContactUsForm;
