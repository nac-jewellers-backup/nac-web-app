import { Box, Button, Grid, Hidden, TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { AiOutlineMobile } from "react-icons/ai";
import { withRouter } from "react-router-dom";
import { API_URL } from "../../../config";
import { Input } from "../../../components/InputComponents/TextField/Input";
import "./loginRegisters.css";
import styles from "./style";
import useLogin from "./useLogin";
import MuiAlert from "@material-ui/lab/Alert";
const Login = (props) => {
  return <LoginComponent {...props} />;
};
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyle = makeStyles((theme) => ({
  helperinput: {
    "& .MuiFormHelperText-root": {
      color: "#e53935",
    },
  },
  input: {
    marginLeft: "auto",
    marginRight: "auto",
    borderBottom: "1.3px solid gray !impotant",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
}));
const LoginComponent = (props) => {
  let url = "https://api-staging.stylori.com";
  const pathnames = window.location.pathname === "/login";

  const classes1 = useStyle();
  const { classes } = props;
  const { values, handlers, setValues, data } = useLogin(() =>
    props.changePanel(2)
  );
  const [openSnack, setOpenSnack] = React.useState(false);

  const [open, setopen] = React.useState(false);
  const [emailForm, setEmailForm] = React.useState(true);
  const [numberForm, setNumberForm] = React.useState({
    number: null,
    NumberSubmit: false,
    otp: null,
  });
  const [numErr, setNumErr] = useState("");
  const [otpErr, setOtpErr] = useState("");

  const email_regex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const [loginInfo, setLoginInfo] = React.useState({
    email: "",
    first_name: "",
    last_name: "",
    phone_no: "",
    userId: "",
    error: {
      email: false,
      first_name: false,
      last_name: false,
    },
    email_error_msg: "",

    first_name_invalid: "Enter the first name",
    last_name_invalid: "Enter the last name",
  });

  const clear = () => {
    setValues({
      password: "",
      email: "",
      errortext: {
        emerr: "",
        passerr: "",
      },
      error: {
        passerr: false,
        emerr: false,
      },
    });
    props.change();
  };
  const responseFacebook = (response) => {
    if (response.accessToken) {
      let body = {
        fbid: response.id,
      };
      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      fetch(`${url}/fbsignin`, opts)
        .then((res) => res.json())
        .then((fetchValue) => {
          if (fetchValue.accessToken) {
            localStorage.setItem("accessToken", fetchValue.accessToken);
            localStorage.setItem("user_id", fetchValue.user.id);
            localStorage.setItem("email", fetchValue.user.email);
            localStorage.setItem("true", false);
            localStorage.setItem("panel", 2);
            let navlogin = localStorage.getItem("navfblogin");
            if (navlogin === "true") {
              props.history.push("/");
            } else {
              props.history.push("/Checkout");
            }
          } else {
            if (typeof response.email === "undefined") {
              setLoginInfo({
                ...loginInfo,
                first_name: response.first_name,
                last_name: response.last_name,
                userId: response.id,
              });
              setopen(true);
            } else {
              let body = {
                email: response.email,
                firstname: response.first_name,
                lastname: response.last_name,
                fbid: response.id,
              };
              const opts = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
              };
              fetch(`${url}/fbsignup`, opts)
                .then((res) => res.json())
                .then((fetchValue1) => {
                  if (fetchValue1.accessToken) {
                    localStorage.setItem(
                      "accessToken",
                      fetchValue1.accessToken
                    );
                    localStorage.setItem(
                      "user_id",
                      fetchValue1.user_profile.id
                    );
                    localStorage.setItem(
                      "email",
                      fetchValue1.user_profile.email
                    );

                    localStorage.setItem("panel", 2);
                    localStorage.setItem("isedit", 1);
                    localStorage.setItem("true", false);
                    let navlogin = localStorage.getItem("navfblogin");
                    if (navlogin === "true") {
                      props.history.push("/");
                    } else {
                      props.history.push("/Checkout");
                    }
                  }
                })
                .catch(console.error);
            }
          }
        })
        .catch(console.error);

      // props.history.push('/')
    }
  };
  function handleUserInfo(e, type) {
    setLoginInfo({
      ...loginInfo,
      [type]: e.target.value,
    });
  }
  function handleButton(type) {
    if (type === "save") {
      if (loginInfo.email === "") {
        let error = loginInfo.error;
        error.email = true;
        loginInfo["email_error_msg"] = "Enter the Email id";
        setLoginInfo({
          ...loginInfo,
          loginInfo,
          error,
        });
      } else if (loginInfo.email && !loginInfo.email.match(email_regex)) {
        let error = loginInfo.error;
        error.email = true;
        loginInfo["email_error_msg"] = "Email Id is invalid";
        setLoginInfo({
          ...loginInfo,
          loginInfo,
          error,
        });
      } else {
        let error = loginInfo.error;
        error.email = false;
        setLoginInfo({
          ...loginInfo,
          error,
        });
      }
      if (loginInfo.first_name === "") {
        let error = loginInfo.error;
        error.first_name = true;
        setLoginInfo({
          ...loginInfo,
          error,
        });
      } else {
        let error = loginInfo.error;
        error.first_name = false;
        setLoginInfo({
          ...loginInfo,
          error,
        });
      }
      if (loginInfo.last_name === "") {
        let error = loginInfo.error;
        error.last_name = true;
        setLoginInfo({
          ...loginInfo,
          error,
        });
      } else {
        let error = loginInfo.error;
        error.last_name = false;
        setLoginInfo({
          ...loginInfo,
          error,
        });
      }
      if (
        loginInfo.last_name !== "" &&
        loginInfo.first_name !== "" &&
        loginInfo.email !== "" &&
        loginInfo.email &&
        loginInfo.email.match(email_regex)
      ) {
        let error = {
          email: false,
          first_name: false,
          last_name: false,
        };
        setLoginInfo({
          ...loginInfo,
          error,
        });
        let body = {
          fbid: loginInfo.userId,
          firstname: loginInfo.first_name,
          lastname: loginInfo.last_name,
          email: loginInfo.email,
          mobile: loginInfo.phone_no,
        };

        const opts = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        };
        fetch(`${url}/fbsignup`, opts)
          .then((res) => res.json())
          .then((fetchValue) => {
            if (fetchValue.accessToken) {
              localStorage.setItem("accessToken", fetchValue.accessToken);
              localStorage.setItem("user_id", fetchValue.user_profile.id);
              localStorage.setItem("email", fetchValue.user_profile.email);
              localStorage.setItem("panel", 2);
              localStorage.setItem("isedit", 1);

              localStorage.setItem("true", false);
              let navlogin = localStorage.getItem("navfblogin");
              if (navlogin === "true") {
                props.history.push("/");
              } else {
                props.history.push("/Checkout");
              }
            }
          })
          .catch(console.error);
      }
    } else {
      setLoginInfo({
        ...loginInfo,
        first_name: "",
        last_name: "",
        userId: "",
        email: "",
        phone_no: "",
      });
      setopen(false);
    }
  }

  const ShowOtpForm = () => {
    setEmailForm(!emailForm);
  };
  const onChangeNumber = (e) => {
    setNumberForm({ ...numberForm, [e.target.name]: e.target.value });
    setNumErr("");
    setOtpErr("");
  };
  const MobileNumSubmit = (e, history) => {};

  // Send OTP
  const SendOTP = () => {
    if (numberForm?.number && numberForm?.number?.length === 10) {
      setNumErr("");
      let body = {
        mobile_no: numberForm.number,
      };
      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      fetch(`${API_URL}/send_otp`, opts)
        .then((res) => res.json())
        .then((fetchValue) => {
          setOpenSnack(true);

          setNumberForm({ ...numberForm, NumberSubmit: true });

        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setNumErr("Please enter valid number");
    }
  };

  // Validate OTP
  const ValidateOtp = () => {
    if (numberForm?.otp && numberForm?.otp?.length === 6) {
      setOtpErr("");
      let body = {
        mobile_no: numberForm.number,
        otp: numberForm.otp,
      };
      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      fetch(`${API_URL}/verify_otp`, opts)
        .then((res) => res.json())
        .then((fetchValue) => {
          fetchValue?.accessToken &&
            localStorage.setItem("accessToken", fetchValue?.accessToken);
          fetchValue?.userprofile?.id &&
            localStorage.setItem("user_id", fetchValue?.userprofile?.id);
          localStorage.setItem("isedit", 1);
          handlers.VerifyOTP(fetchValue?.userprofile?.id);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setOtpErr("Please enter valid OTP");
    }
  };

  const ResendOtp = () => {
    let body = {
      mobile_no: numberForm.number,
    };
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    fetch(`${API_URL}/send_otp`, opts)
      .then((res) => res.json())
      .then((fetchValue) => {
        setOpenSnack(true);

        setNumberForm({ ...numberForm, NumberSubmit: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };

  return (
    <>
      <div>
        {emailForm ? (
          <form
            action="javascript:void(0)"
            onSubmit={(e) => {
              handlers.handelSubmit(e, props.history.push);
            }}
          >
            <Grid container item xs={12}>
              <Hidden smDown>
                {props.checkoutpage ? (
                  " "
                ) : (
                  <h5 className={`title ${classes.normalfonts}`}>
                    {window.location.pathname === "/login"
                      ? "Login"
                      : "I already have an account"}
                  </h5>
                )}
              </Hidden>
              <h5 className={`title ${classes.normalfonts2}`}>
                Email Login For Registered Users
              </h5>

              <Input
                className={classes1.input}
                name="email"
                value={values.email}
                error={values.error && values.error.emerr ? true : false}
                helperText={values.errortext && values.errortext.emerr}
                onChange={(e) => handlers.handleChange("email", e.target.value)}
                placeholder="Email address"
              />
              <label className="errtext">
                {" "}
                {values.error.emerr && values.errortext.emerr}
              </label>
              <Input
                type="password"
                name="password"
                value={values.password}
                error={values.error && values.error.passerr ? true : false}
                helperText={values.errortext && values.errortext.passerr}
                placeholder="Password"
                onChange={(e) =>
                  handlers.handleChange("password", e.target.value)
                }
              />
              <label className="errtext">
                {" "}
                {values.error.passerr && values.errortext.passerr}
              </label>
              <div className="log-pas">
                <span
                  onClick={() => {
                    window.location.href = "/forgotPassword";
                  }}
                  className={`pas-fr`}
                  style={{ cursor: "pointer" }}
                >
                  Forgot Password ?
                </span>
              </div>
            </Grid>

            {window.location.pathname === "/login" ? (
              <>
                <div
                  style={{
                    cursor: "pointer",
                    fontSize: "14px",
                    padding: "10px",
                    color: "gray",
                  }}
                  onClick={() => {
                    window.location.href = "/registers";
                  }}
                >
                  <center>
                    <span>
                      New to <b>NAC</b>? Sign Up
                    </span>
                  </center>
                  <br />
                </div>
                <Button type="submit" className="apply-b">
                  SIGN IN
                </Button>
              </>
            ) : (
              <>
                <div
                  style={{
                    cursor: "pointer",
                    fontSize: "14px",
                    padding: "10px",
                    color: "gray",
                  }}
                  onClick={props.change}
                >
                  <center>
                    New to <b>NAC</b>? Sign Up
                  </center>
                  <br />
                </div>
                <Button type="submit" className="apply-b">
                  SIGN IN
                </Button>
              </>
            )}

            <Grid
              container
              justifyContent="center"
              className={classes.other}
              style={{ padding: "10px" }}
            >
              <Grid item xs={12}>
                <br />

                <Box display="flex" flexDirection="row" justifyContent="center">
                  <Box padding="5px">
                    <div style={{ cursor: "pointer" }}>
                      <label>
                        <Button
                          variant="contained"
                          style={{
                            padding: "5px 7px",
                            textTransform: "Capitailze",
                            backgroundColor: "#F3F3F3",
                            borderRadius: "0px",
                            boxShadow: "0px 2px 4px 1px #888888",
                            color: "gray",
                            whiteSpace: "nowrap",
                          }}
                          onClick={() => ShowOtpForm()}
                          className={classes.btntext}
                          startIcon={
                            <AiOutlineMobile
                              style={{ marginLeft: "4px", color: "#E28CAB" }}
                              className={classes.btnicon}
                            />
                          }
                        >
                          Sign in with OTP
                        </Button>
                      </label>
                    </div>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </form>
        ) : (
          <Grid>
            <form
              action="javascript:void(0)"
              onSubmit={(e) => {
                MobileNumSubmit(e, props.history.push);
              }}
            >
              <Grid container item xs={12}>
                <Hidden smDown>
                  {props.checkoutpage ? (
                    " "
                  ) : (
                    <h5 className={`title ${classes.normalfonts}`}>
                      {window.location.pathname === "/login"
                        ? "Login"
                        : "I already have an account"}
                    </h5>
                  )}
                </Hidden>
                <h5 className={`title ${classes.normalfonts2}`}>
                  OTP Login For Registered Users
                </h5>
                {numberForm.NumberSubmit ? (
                  <Input
                    name="otp"
                    type="number"
                    value={numberForm.otp ?? ""}
                    helperText={otpErr}
                    placeholder="Enter OTP"
                    onChange={(e) => onChangeNumber(e)}
                    min="4"
                    max="4"
                  />
                ) : (
                  <Input
                    className={classes1.input}
                    name="number"
                    type="number"
                    value={numberForm.number}
                    helperText={numErr}
                    onChange={(e) => onChangeNumber(e)}
                    placeholder="Enter Mobile Number"
                    min="10"
                    max="10"
                  />
                )}
                {numberForm.NumberSubmit ? (
                  <label className="errtext">{otpErr}</label>
                ) : (
                  <label className="errtext">{numErr}</label>
                )}
              </Grid>
              <br />
              <br />
              {/* {numberForm.NumberSubmit && counter} */}
              {numberForm.NumberSubmit ? (
                <Button onClick={() => ValidateOtp()} className="apply-b">
                  Validate OTP
                </Button>
              ) : (
                <Button onClick={() => SendOTP()} className="apply-b">
                  Send OTP
                </Button>
              )}
              <br />
              <br />
              {numberForm.NumberSubmit ? (
                <Button onClick={() => ResendOtp()} className="apply-b">
                  Resend OTP
                </Button>
              ) : (
                ""
              )}

              <Grid
                container
                justifyContent="center"
                className={classes.other}
                style={{ padding: "10px" }}
              >
                <Grid item xs={12}>
                  <br />

                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                  >
                    <Box padding="5px">
                      <div style={{ cursor: "pointer" }}>
                        <label>
                          <Button
                            variant="contained"
                            style={{
                              padding: "5px 7px",
                              textTransform: "Capitailze",
                              backgroundColor: "#F3F3F3",
                              borderRadius: "0px",
                              boxShadow: "0px 2px 4px 1px #888888",
                              color: "gray",
                              whiteSpace: "nowrap",
                            }}
                            onClick={() => ShowOtpForm()}
                            className={classes.btntext}
                            startIcon={
                              <AiOutlineMobile
                                style={{ marginLeft: "4px", color: "#E28CAB" }}
                                className={classes.btnicon}
                              />
                            }
                          >
                            Sign in with Email
                          </Button>
                        </label>
                      </div>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Grid>
        )}
      </div>

      <div>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            We Need Some More of Your Details to Log you in
          </DialogTitle>
          <DialogContent>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextField
                  className={classes1.helperinput}
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  defaultValue={loginInfo.email}
                  id="email"
                  error={loginInfo && loginInfo.error && loginInfo.error.email}
                  onChange={(e) => handleUserInfo(e, "email")}
                  name="email"
                  label="Email*"
                  helperText={
                    loginInfo.error &&
                    loginInfo.error.email &&
                    loginInfo.email_error_msg
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  className={classes1.helperinput}
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  defaultValue={loginInfo.first_name}
                  id="first_name"
                  error={
                    loginInfo && loginInfo.error && loginInfo.error.first_name
                  }
                  onChange={(e) => handleUserInfo(e, "first_name")}
                  name="first_name"
                  label="First Name*"
                  helperText={
                    loginInfo.error &&
                    loginInfo.error.first_name &&
                    loginInfo.first_name_invalid
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  className={classes1.helperinput}
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  defaultValue={loginInfo.last_name}
                  id="last_name"
                  error={
                    loginInfo && loginInfo.error && loginInfo.error.last_name
                  }
                  onChange={(e) => handleUserInfo(e, "last_name")}
                  name="last_name"
                  label="Last Name*"
                  helperText={
                    loginInfo.error &&
                    loginInfo.error.last_name &&
                    loginInfo.last_name_invalid
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <TextField
                  className={classes1.helperinput}
                  type="tel"
                  variant="outlined"
                  margin="dense"
                  maxLength="10"
                  fullWidth
                  defaultValue={loginInfo.phone_no}
                  id="phone_no"
                  onChange={(e) => handleUserInfo(e, "phone_no")}
                  name="phone_no"
                  label="Phone Number"
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              onClick={() => handleButton("save")}
              color="primary"
            >
              Save
            </Button>
            <Button
              variant="contained"
              onClick={() => handleButton("cancel")}
              color="default"
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
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
          OTP Send Successfully!
        </Alert>
      </Snackbar>
    </>
  );
};
export default withStyles(styles)(withRouter(Login));
