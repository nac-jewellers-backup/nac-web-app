import {
  Button,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import CustomFormStyles from "./style";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import { API_URL } from "config";

const initialState = {
  name: "",
  mobile: "",
  email: "",
  file: null,
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CustomForm = (props) => {
  const classes = CustomFormStyles();
  const [state, setState] = useState(initialState);
  const [openSnack, setOpenSnack] = useState({
    type: false,
    message: "",
    severity: null,
  });

  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    var bodyFormData = new FormData();
    bodyFormData.append("file", state.file);
    bodyFormData.append("name", state.name);
    bodyFormData.append("email_id", state.email);
    bodyFormData.append("mobile_no", state.mobile);
    axios
      .post(API_URL + "/apply_career", bodyFormData)
      .then((res) => {
        if (res) {
          setOpenSnack({
            type:true,
            message:"Your Resume has been Updated successfully",
            severity:"success"
          })
        }
      })
      .catch((err) => {
        console.log(err);
        setOpenSnack({
          type:true,
          message:"Something went wrong. Please try again",
          severity:"error"
        })
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack({
      type: false,
      message: "",
      severity: null,
    });
  };

  console.log("state", state);
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          {/* FORM */}

          <div className={classes.formGroup}>
            <div className={classes.title}>
              <Typography>Submit Your Resume</Typography>
            </div>
            <div className={classes.jobForm}>
              <Grid container style={{ justifyContent: "center" }}>
                <Grid item xs={10} sm={6} md={4}>
                  <div className={classes.textField}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      placeholder="Name"
                      value={state.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                  </div>
                  <div className={classes.textField}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      placeholder="Mobile Number"
                      value={state.mobile}
                      type="number"
                      onChange={(e) => handleChange("mobile", e.target.value)}
                    />
                  </div>
                  <div className={classes.textField}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      placeholder="Email ID"
                      value={state.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                  </div>
                  <div className={classes.textFieldFile}>
                    <Typography
                      style={{ color: state.file ? "#2734a8" : "#aeb2d6" }}
                    >
                      {state.file ? state.file?.name : "Upload Your Resume"}
                    </Typography>
                    <input
                      type="file"
                      className={classes.input}
                      id="icon-button-file"
                      onChange={(event) => {
                        const files = event.target.files;
                        if (files) {
                          handleChange("file", files[0]);
                        }
                      }}
                    />
                    <label htmlFor="icon-button-file">
                      <div style={{ cursor: "pointer" }}>Choose file</div>
                    </label>
                  </div>
                  <div className={classes.submit} onClick={() => handleSubmit()}>
                    Submit
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openSnack.type}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={openSnack.severity}>
          {openSnack.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomForm;
