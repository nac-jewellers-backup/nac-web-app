import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import styles from "containers/contactus/stylecontact";
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Input } from "../../components/InputComponents/TextField/Input";
import { API_URL } from "../../config";
import DateFnsUtils from "@date-io/date-fns";
import MuiAlert from "@material-ui/lab/Alert";

import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import {
  GET_ALL_APPOINTMENT,
  CREATE_OPPOINTMENT,
} from "../../queries/appoinment";
import moment from "moment";
import Snackbar from "@material-ui/core/Snackbar";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const InitialState = {
  date: null,
  name: "",
  mail: "",
  countryCode: "",
  mobile: "",
  location: "",
  timing: "",
  otp: "",
  error: {
    date: "",
    name: " ",
    mail: " ",
    countryCode: "",
    mobile: " ",
    location: " ",
    timing: "",
    otp: "",
  },
};
export default function Contact(props) {
  const classes = styles();

  const [storelocation, setstoreLocation] = React.useState([]);
  const [dataappoinment, setDataappoinment] = React.useState({
    ...InitialState,
  });
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [appointmentDate, setAppointmentDate] = React.useState(null);
  const [appointmentTime, setAppointmentTime] = React.useState([]);
  const [appointmentId, setAppointmentId] = React.useState(null);
  const [showOtp, setShowOtp] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [snackData, setSnackData] = React.useState(null);
  const [booked, setBooked] = React.useState(false);
  const updateState = (key, value) => {
    let error = dataappoinment.error;
    error[key] = "";
    setDataappoinment({ ...dataappoinment, [key]: value, error });
    if (key === "date") {
      setSelectedDate(moment(value).format("YYYY-MM-DD"));
    }
  };
  const isIamValideToLogin = () => {
    let isValid = true;
    let error = dataappoinment.error;
    //date
    if (dataappoinment.date.length === 0) {
      isValid = false;
      error.date = "date is required";
    }
    //Checking name
    if (dataappoinment.name.length === 0) {
      isValid = false;
      error.name = "name is required";
    }
    //Checking mail
    if (dataappoinment.mail.length === 0) {
      isValid = false;
      error.mail = "Email is required";
    }
    //Checking location
    if (dataappoinment.location.length === 0) {
      isValid = false;
      error.location = "Location is required";
    }
    // Checking country code
    if (dataappoinment.countryCode.length === 0) {
      isValid = false;
      error.mobile = "CountryCode is required";
    }
    //Checking mobile
    if (dataappoinment.mobile.length === 0) {
      isValid = false;
      error.mobile = "Mobile is required";
    }
    //Checking mobile
    if (dataappoinment.timing.length === 0) {
      isValid = false;
      error.timing = "Timing is required";
    }
    setDataappoinment({ ...dataappoinment, error });
    return isValid;
  };
  React.useEffect(() => {
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GET_ALL_APPOINTMENT,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setstoreLocation(data?.data?.query?.allStoreLocations?.nodes ?? []);
      });
  }, []);

  const getAppointmentDate = async () => {
    await fetch(`${API_URL}/get_appointment_time_slots`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appointment_date: moment(appointmentDate).format("YYYY-MM-DD"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 200) {
          setAppointmentTime(data?.appointment_slots ?? []);
          return;
        }
        let error = dataappoinment.error;
        error.date =
          "No slots available today. Please select a different day or contact NAC Team";
        setDataappoinment({ ...dataappoinment, error });
      });
  };
  React.useEffect(() => {
    if (appointmentDate) {
      getAppointmentDate();
    }
  }, [appointmentDate]);
  const onSendLoginBtnClicked = () => {
    if (isIamValideToLogin()) {
      fetch(`${API_URL}/graphql`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: CREATE_OPPOINTMENT,
          variables: {
            customerName: dataappoinment.name,
            email: dataappoinment.mail,
            mobile: dataappoinment.mobile,
            mobileCountryCode: dataappoinment.countryCode,
            slotId: dataappoinment.timing,
            locationId: dataappoinment.location,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setAppointmentId(data?.data?.createAppointment?.appointment?.id);
          sendOtp(data?.data?.createAppointment?.appointment?.id);
        });
    } else {
      return false;
    }
  };

  const sendOtp = async (id) => {
    await fetch(`${API_URL}/send_appointment_otp`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appointment_id: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSnackData("OTP send successfully!");
        setOpenSnack(true);
        setShowOtp(true);
      });
  };
  const updateDate = (key, value) => {
    setAppointmentDate(value);
    let error = dataappoinment.error;
    error[key] = "";
    setDataappoinment({ ...dataappoinment, [key]: value, error });
  };

  const updateOTP = (key, value) => {
    let error = dataappoinment.error;
    error[key] = "";
    setDataappoinment({ ...dataappoinment, [key]: value, error });
  };
  const verifyOTP = async () => {
    if (dataappoinment.otp.length == 6) {
      await fetch(`${API_URL}/verify_appointment_otp`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          appointment_id: appointmentId,
          mobile_no: dataappoinment.mobile,
          otp: dataappoinment.otp,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.statusCode) {
            setSnackData("Appointment Booked successfully!");
            setOpenSnack(true);
            setBooked(true);
            return;
          }
          let otperror = dataappoinment.error;
          otperror.otp = "Please enter valid otp";
          setDataappoinment({ ...dataappoinment, otperror });
          return;
        });
    }
    let otperror = dataappoinment.error;
    otperror.otp = "Please enter valid otp";
    setDataappoinment({ ...dataappoinment, otperror });
    return;
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  return (
    <>
      <Container maxWidth="lg">
        <form>
          <Grid
            container
            className={classes.grid1}
            xs={12}
            sm={12}
            md={12}
            xl={12}
          >
            <Grid item xs={12}>
              <Box display="flex">
                <Box flexGrow={1}></Box>
                <Box>
                  <IconButton onClick={props.close}>
                    <AiFillCloseCircle />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} xl={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                  <img
                    src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/bridalcollection/bannercard.png"
                    height="100%"
                    width="100%"
                    loading="lazy" alt='...'
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography style={{ color: "gray", fontFamily: "24px" }}>
                    Brides & their families
                  </Typography>

                  <Grid container spacing={2}>
                    {booked ? (
                      <Grid item xs={12}>
                        <h1>Appointment Book Successfully!</h1>
                      </Grid>
                    ) : showOtp ? (
                      <>
                        <Grid item xs={12}>
                          <Input
                            type="text"
                            name="otp"
                            placeholder="OTP"
                            value={dataappoinment.otp}
                            color="secondary"
                            onChange={(e) => updateOTP("otp", e.target.value)}
                            isRequired
                          />
                          {dataappoinment.error.otp.length > 0 && (
                            <Typography variant={"caption"} color={"error"}>
                              {dataappoinment.error.otp}
                            </Typography>
                          )}
                        </Grid>
                      </>
                    ) : (
                      <>
                        <Grid item xs={12}>
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                              className={classes.inputField}
                              name="startTime"
                              placeholder="Select Start Time"
                              value={appointmentDate}
                              fullWidth
                              onChange={(value) => updateDate("date", value)}
                              minDate={new Date()}
                            />
                          </MuiPickersUtilsProvider>

                          {dataappoinment.error.date.length > 0 && (
                            <Typography variant={"caption"} color={"error"}>
                              {dataappoinment.error.date}
                            </Typography>
                          )}
                        </Grid>

                        <Grid item xs={12}>
                          <Input
                            type="text"
                            name="Fullname"
                            placeholder="Fullname"
                            value={dataappoinment.name}
                            color="secondary"
                            onChange={(e) =>
                              updateState("name", e.target.value)
                            }
                            isError={dataappoinment.error.name.length > 0}
                            errorMessage={dataappoinment.error.name}
                            isRequired
                          />

                          {dataappoinment.error.name.length > 0 && (
                            <Typography variant={"caption"} color={"error"}>
                              {dataappoinment.error.name}
                            </Typography>
                          )}
                        </Grid>
                        <Grid item xs={12}>
                          <Input
                            type="text"
                            name="Email"
                            placeholder="Email"
                            value={dataappoinment.mail}
                            color="secondary"
                            onChange={(e) =>
                              updateState("mail", e.target.value)
                            }
                            isRequired
                          />
                          {dataappoinment.error.mail.length > 0 && (
                            <Typography variant={"caption"} color={"error"}>
                              {dataappoinment.error.mail}
                            </Typography>
                          )}
                        </Grid>
                        <Grid item xs={12}>
                          <Input
                            type="text"
                            name="countryCode"
                            placeholder="Country Code"
                            value={dataappoinment.countryCode}
                            color="secondary"
                            onChange={(e) =>
                              updateState("countryCode", e.target.value)
                            }
                            isError={
                              dataappoinment.error.countryCode.length > 0
                            }
                            errorMessage={dataappoinment.error.countryCode}
                            isRequired
                          />
                          {dataappoinment.error.countryCode.length > 0 && (
                            <Typography variant={"caption"} color={"error"}>
                              {dataappoinment.error.countryCode}
                            </Typography>
                          )}
                          <Input
                            type="number"
                            name="Mobile"
                            placeholder="Mobile"
                            value={dataappoinment.mobile}
                            color="secondary"
                            onChange={(e) =>
                              updateState("mobile", e.target.value)
                            }
                            isError={dataappoinment.error.mobile.length > 0}
                            errorMessage={dataappoinment.error.mobile}
                            isRequired
                          />
                          {dataappoinment.error.mobile.length > 0 && (
                            <Typography variant={"caption"} color={"error"}>
                              {dataappoinment.error.mobile}
                            </Typography>
                          )}
                        </Grid>
                        <Grid item xs={6}>
                          <FormControl fullWidth>
                            <InputLabel
                              color="secondary"
                              id="demo-simple-select-label"
                            >
                              Location
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={dataappoinment.location}
                              color="secondary"
                              label="Location"
                              onChange={(e) =>
                                updateState("location", e.target.value)
                              }
                              isError={dataappoinment.error.location.length > 0}
                              errorMessage={dataappoinment.error.location}
                              isRequired
                            >
                              {storelocation.map((val) => {
                                return (
                                  <MenuItem value={val.id}>{val.name}</MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                          {dataappoinment.error.location.length > 0 && (
                            <Typography variant={"caption"} color={"error"}>
                              {dataappoinment.error.location}
                            </Typography>
                          )}
                        </Grid>
                        <Grid item xs={6}>
                          <FormControl fullWidth>
                            <InputLabel
                              color="secondary"
                              id="demo-simple-select-label"
                            >
                              Timing
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              color="secondary"
                              label="Timing"
                              value={dataappoinment.timing}
                              isError={dataappoinment.error.timing.length > 0}
                              errorMessage={dataappoinment.error.timing}
                              isRequired
                              onChange={(e) =>
                                updateState("timing", e.target.value)
                              }
                            >
                              {appointmentTime.map((val) => {
                                return (
                                  <MenuItem value={val.id}>
                                    {`${val.start_time} - ${val.end_time}`}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </Grid>
                      </>
                    )}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <center>
                    {booked ? (
                      ""
                    ) : showOtp ? (
                      <>
                        <Button
                          variant="contained"
                          size="large"
                          className={classes.btn}
                          onClick={verifyOTP}
                        >
                          Verify OTP
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="contained"
                          size="large"
                          className={classes.btn}
                          onClick={onSendLoginBtnClicked}
                        >
                          Confirm & Book in Store
                        </Button>
                      </>
                    )}
                  </center>
                  <br />
                  <hr />
                  <br />
                  <Typography style={{ color: "gray" }}>
                    On confirming the ‘Appointment’ we will block the time and
                    date of the session. A customer service representative will
                    reach out to you and coordinate the NAC Experience Session
                    with you. We hope you have a good time!
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
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
            {snackData}
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
}
