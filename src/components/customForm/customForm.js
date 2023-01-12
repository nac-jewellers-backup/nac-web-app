import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
  const [openSnackError, setOpenSnackError] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  // const [openSnack, setOpenSnack] = React.useState(false);

  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const handleOpen = () => setOpen(true);
  const handleCloser = () => setOpen(false);

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
          // setOpenSnack(true);
          handleOpen();
          setState(initialState);
        }
      })
      .catch((err) => {
        console.log(err);
        setOpenSnackError(false);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackError(false);
    // setOpenSnack(false);
  };

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
              <Grid
                container
                style={{
                  justifyContent: "center",
                  borderBottom: "1px solid #eee",
                }}
              >
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
                  <div
                    className={classes.submit}
                    onClick={() => handleSubmit()}
                  >
                    Submit
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
      {/* <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={openSnack}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Your resume has been updated successfully!
        </Alert>
      </Snackbar> */}
      <Modal
        open={open}
        onClose={handleCloser}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className={classes.success}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            Your resume has been updated successfully!
          </Typography>
        </Box>
      </Modal>
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
    </div>
  );
};

export default CustomForm;
