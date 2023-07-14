import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, Hidden, TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Snackbar from "@material-ui/core/Snackbar";
import { AiOutlineMobile } from "react-icons/ai";
import { withRouter } from "react-router-dom";
import { API_URL, FACEBOOK_APP_ID, GOOGLE_CLIENT_ID } from "../../../config";
import { Input } from "../../../components/InputComponents/TextField/Input";
import "./loginRegisters.css";
import styles from "./style";
import useLogin from "./useLogin";
import MuiAlert from "@material-ui/lab/Alert";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import FacebookIcon from "assets/icons8-facebook.svg";
import GoogleIcon from "assets/icons8-gmail.svg";
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
  let url = API_URL;
  const classes1 = useStyle();
  const { classes } = props;
  const { values, handlers, setValues} = useLogin(() =>
    props.changePanel(2)
  );
  const [openSnack, setOpenSnack] = React.useState(false);

  const [open, setopen] = React.useState(false);
  const [emailForm, setEmailForm] = React.useState(true);
  const [numberForm, setNumberForm] = React.useState({
    number: null,
    NumberSubmit: false,
    otp: null,
    otpEmail: null,
  });
  const [otpEmailErr, setOtpEmailErr] = useState("");

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

  const responseFacebook = (response) => {
    if (response) {
      let body = {
        type: "facebook",
        mediaBody: {
          ...response,
          firstName: response.first_name,
          lastName: response.last_name,
        },
      };

      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      fetch(`${url}/api/auth/mediasignin`, opts)
        .then((res) => res.json())
        .then((fetchValue) => {
          if (fetchValue.accessToken) {
            localStorage.setItem("accessToken", fetchValue.accessToken);
            localStorage.setItem("user_id", fetchValue.user.id);
            localStorage.setItem("email", fetchValue.user.email);
            localStorage.setItem("true", false);
            localStorage.setItem("panel", 2);
            handlers.FacebookLogin(fetchValue);

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
            }
          }
        })
        .catch(console.error);
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
    window.scrollTo(0, 0);
    setEmailForm(!emailForm);
  };
  const onChangeNumber = (e) => {
    console.log(e.target.name,"kkkk")
    setNumberForm({ ...numberForm, [e.target.name]: e.target.value });
    setNumErr("");
    setOtpErr("");
    setOtpEmailErr("");
  };
  const MobileNumSubmit = (e, history) => {};
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  // Send OTP
  const SendOTP = () => {
    window.scrollTo(0, 0);
    if (
      numberForm?.number &&
      numberForm?.number?.length === 10 &&
      validateEmail(numberForm.otpEmail)
    ) {
      setNumErr("");
      setOtpEmailErr("");
      let body = {
        mobile_no: numberForm.number,
        email: numberForm.otpEmail,
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
      if (numberForm?.number?.length !== 10) {
        setNumErr("Please enter valid number");
      } else if (!validateEmail(numberForm.otpEmail)) {
        setOtpEmailErr("Please enter valid email id");
      }
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
          handlers.VerifyOTP(fetchValue);
        })
        .catch((err) => {
          console.log(err);
          setOtpErr("Please enter valid OTP");
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

  const responseGoogle = (response) => {
    if (response) {
      let body = {
        type: "google",
        mediaBody: {
          id: response?.googleId,
          ...response?.profileObj,
          firstName: response?.profileObj?.givenName,
          lastName: response?.profileObj?.familyName,
        },
      };
      const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      fetch(`${url}/api/auth/mediasignin`, opts)
        .then((res) => res.json())
        .then((fetchValue) => {
          if (fetchValue.accessToken) {
            handlers.VerifyOTP(fetchValue);
          }
        })
        .catch(console.error);
    }
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
              <h5 className={`title ${classes.normalfonts2}`}>Email Login</h5>

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
              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <br />

                <div display="flex">
                  <Box padding="5px">
                    <div style={{ cursor: "pointer" }}>
                      <label>
                        <FacebookLogin
                          appId={FACEBOOK_APP_ID}
                          autoLoad={false}
                          fields="name,email,first_name,last_name"
                          callback={responseFacebook}
                          render={(renderProps) => (
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
                              onClick={renderProps.onClick}
                              className={classes.btntext}
                              startIcon={
                                <img
                                  style={{
                                    marginLeft: "4px",
                                    height: "24px",
                                  }}
                                  className={classes.btnicon}
                                  src={FacebookIcon}
                                  alt="facebookicon"
                                  loading="lazy"
                                />
                              }
                            >
                              Sign in with Facebook
                            </Button>
                          )}
                        />
                      </label>
                    </div>
                  </Box>
                </div>
                <div>
                  <Box padding="5px">
                    <div style={{ cursor: "pointer" }}>
                      <label>
                        <GoogleLogin
                          clientId={GOOGLE_CLIENT_ID}
                          render={(renderProps) => (
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
                              onClick={renderProps.onClick}
                              disabled={renderProps.disabled}
                              className={classes.btntext}
                              startIcon={
                                <img
                                  style={{
                                    marginLeft: "4px",
                                    height: "24px",
                                  }}
                                  className={classes.btnicon}
                                  src={GoogleIcon}
                                  alt="facebookicon"
                                  loading="lazy"
                                />
                              }
                            >
                              Sign in with Google
                            </Button>
                          )}
                          buttonText="Login"
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                          cookiePolicy={"single_host_origin"}
                        />
                      </label>
                    </div>
                  </Box>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <br />
                <div display="flex">
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
                </div>
              </Grid>
            </Grid>

            <Grid></Grid>
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
                <h5 className={`title ${classes.normalfonts2}`}>OTP Login</h5>
                {numberForm.NumberSubmit ? (
                  <Input
                    name="otp"
                    type="text"                    
                    value={numberForm.otp ?? ""}
                    helperText={otpErr}
                    placeholder="Enter OTP"                    
                    onChange={(e) => onChangeNumber(e)}
                    onKeyDown={ (evt) => (evt.key === 'e' || evt.key === 'E' || evt.key === '.' || evt.key === '+' || evt.key === '-')  && evt.preventDefault() }
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
                    onKeyDown={ (evt) => (evt.key === 'e' || evt.key === 'E' || evt.key === '.' || evt.key === '+' || evt.key === '-')  && evt.preventDefault() }
                    min="10"
                    max="10"
                  />
                )}
                {numberForm.NumberSubmit ? (
                  <label className="errtext">{otpErr}</label>
                ) : (
                  <label className="errtext">{numErr}</label>
                )}

                {numberForm.NumberSubmit ? (
                  ""
                ) : (
                  <Input
                    className={classes1.input}
                    name="otpEmail"
                    type="email"
                    value={numberForm.otpEmail}
                    helperText={otpEmailErr}
                    onChange={(e) => onChangeNumber(e)}
                    placeholder="Enter Email address"
                  />
                )}
                {numberForm.NumberSubmit ? (
                  " "
                ) : (
                  <label className="errtext">{otpEmailErr}</label>
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
                <Grid
                  item
                  xs={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div display="flex">
                    <Box padding="5px">
                      <div style={{ cursor: "pointer" }}>
                        <label>
                          <FacebookLogin
                            appId={FACEBOOK_APP_ID}
                            autoLoad={false}
                            fields="name,email,first_name,last_name"
                            callback={responseFacebook}
                            render={(renderProps) => (
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
                                onClick={renderProps.onClick}
                                className={classes.btntext}
                                startIcon={
                                  <img
                                    style={{
                                      marginLeft: "4px",
                                      height: "24px",
                                    }}
                                    className={classes.btnicon}
                                    src={FacebookIcon}
                                    alt="facebookicon"
                                    loading="lazy"
                                  />
                                }
                              >
                                Sign in with Facebook
                              </Button>
                            )}
                          />
                        </label>
                      </div>
                    </Box>
                  </div>
                  <div>
                    <Box padding="5px">
                      <div style={{ cursor: "pointer" }}>
                        <label>
                          <GoogleLogin
                            clientId={GOOGLE_CLIENT_ID}
                            render={(renderProps) => (
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
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className={classes.btntext}
                                startIcon={
                                  <img
                                    style={{
                                      marginLeft: "4px",
                                      height: "24px",
                                    }}
                                    className={classes.btnicon}
                                    src={GoogleIcon}
                                    alt="facebookicon"
                                    loading="lazy"
                                  />
                                }
                              >
                                Sign in with Google
                              </Button>
                            )}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={"single_host_origin"}
                          />
                        </label>
                      </div>
                    </Box>
                  </div>
                </Grid>
                <Grid item xs={12}>
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
        <Grid xs={12}>
          <br />
          <span
            style={{
              display: "block",
              color: "gray",
              textAlign: "center",
              borderTop: "1px solid rgb(193, 193, 193)",
              fontSize: "14px",
              paddingTop: "14px",
            }}
          >
            {emailForm
              ? "Guest Checkout Not ready to become a member just yet?"
              : "Already Signed up?"}
          </span>{" "}
          <br />
          <br />
          <Button className="apply-b" onClick={() => ShowOtpForm()}>
            {emailForm ? "Continue as Guest" : "Continue with Email"}
          </Button>
        </Grid>
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
