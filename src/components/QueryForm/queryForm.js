import {
  Button,
  FormControl,
  Grid,
  Link,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import axios from "axios";
import { API_URL } from "config";
import { SEND_ENQUIREY } from "queries/home";
import React, { useState } from "react";
import { useStyles } from "./styles";

const QueryForm = (props) => {
  const InitialState = {
    name: "",
    phone: "",
    email: "",
    query: "",
  };
  const classes = useStyles();
  const [formData, setFormData] = useState(InitialState);
  const [errorData, setErrorData] = useState(InitialState);
  const [openSnackError, setOpenSnackError] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);

  // onChange the Date
  const onChangeData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  //trigger the email
  const emailTrigger = async (id) => {
    console.log(id, "????");
    const params = {
      type: "send_enquiry",
      appointment_id: id,
    };
    await axios.post(`${API_URL}/trigger_mail`, params).then((res) => {
      if (res.data) {
        setOpenSnack(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          query: "",
        });
        return;
      }
      setOpenSnackError(true);
    });
  };

  // validate the error
  const handleValidateData = () => {
    if (formData.name.length === 0) {
      setErrorData({ ...errorData, name: "Please enter name" });
      return false;
    }
    if (formData.phone.length === 0) {
      setErrorData({ ...errorData, phone: "Please enter phone number" });

      return false;
    }
    if (formData.email.length === 0) {
      setErrorData({ ...errorData, email: "Please enter email name" });

      return false;
    }
    if (formData.query.length === 0) {
      setErrorData({ ...errorData, query: "Please enter query name" });

      return false;
    }
    setErrorData({
      name: "",
      phone: "",
      email: "",
      query: "",
    });
    return true;
  };

  // on submit
  const onsubmitvalue = () => {
    if (handleValidateData()) {
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
              email: formData.email,
              appointmentTypeId: 5,
              comments: formData.query,
              specialRequests: window.location.pathname.slice(1),
              customerName: formData.name,
              isActive: true,
              mobile: formData.phone,
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
  };

  // close the snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackError(false);
    setOpenSnack(false);
  };

  return (
    <Grid container className={classes.totalFormArea}>
      <Grid item sm={7} xs={12} style={{ backgroundColor: "#F4F4F4" }}>
        <div className={classes.formArea}>
          <div className={classes.inputFieldsEdit}>
            <Typography className={classes.inputFieldsHeader}>
              First Name:
            </Typography>
            <FormControl style={{ backgroundColor: "#fff" }} fullWidth>
              <TextField
                style={{ borderRadius: "0px" }}
                labelWidth={0}
                value={formData.name}
                classes={{ notchedOutline: classes.textFieldEdit }}
                InputProps={{ disableUnderline: true }}
                onChange={onChangeData}
                name="name"
              />
              <label style={{ color: "red" }}>{errorData.name}</label>
            </FormControl>
          </div>
          <div className={classes.inputFieldsEdit}>
            <Typography className={classes.inputFieldsHeader}>
              Phone Number:
            </Typography>
            <FormControl style={{ backgroundColor: "#fff" }} fullWidth>
              <TextField
                type="number"
                style={{ borderRadius: "0px" }}
                labelWidth={0}
                value={formData.phone}
                classes={{ notchedOutline: classes.textFieldEdit }}
                InputProps={{ disableUnderline: true }}
                onChange={onChangeData}
                name="phone"
              />
              <label style={{ color: "red" }}>{errorData.phone}</label>
            </FormControl>
          </div>
          <div className={classes.inputFieldsEdit}>
            <Typography className={classes.inputFieldsHeader}>
              Email id:
            </Typography>
            <FormControl style={{ backgroundColor: "#fff" }} fullWidth>
              <TextField
                style={{ borderRadius: "0px" }}
                labelWidth={0}
                value={formData.email}
                classes={{ notchedOutline: classes.textFieldEdit }}
                InputProps={{ disableUnderline: true }}
                onChange={onChangeData}
                name="email"
              />
              <label style={{ color: "red" }}>{errorData.email}</label>
            </FormControl>
          </div>
          <div className={classes.inputFieldsEdit}>
            <Typography className={classes.inputFieldsHeader}>
              Your Query
            </Typography>
            <FormControl style={{ backgroundColor: "#fff" }} fullWidth>
              <TextField
                style={{ borderRadius: "0px" }}
                classes={{ notchedOutline: classes.textFieldEdit }}
                InputProps={{ disableUnderline: true }}
                value={formData.query}
                onChange={onChangeData}
                name="query"
                multiline
                rows={8}
              />
              <label style={{ color: "red" }}>{errorData.query}</label>
            </FormControl>
          </div>
          <div style={{ textAlign: "end", paddingTop: "10px" }}>
            <Button
              variant="contained"
              onClick={onsubmitvalue}
              className={classes.buttonAlign}
            >
              Sumbit
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item sm={5} xs={12} style={{ backgroundColor: "#2E348A" }}>
        <Link href="/store">
          <img
            alt="images"
            loading="lazy"
            src={
              props?.image ??
              "https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/akshaya+page/Group+63%402x.png"
            }
            style={{ width: "100%" }}
            className={classes.storeImage}
          />
          <div className={classes.imgBtn} style={{ textDecoration: "none" }}>
            FOR MORE VISIT OUR STORE
          </div>
        </Link>
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
        open={openSnackError}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          Something went wrong, Please try again!
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default QueryForm;
