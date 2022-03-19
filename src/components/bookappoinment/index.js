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
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import {
  GET_ALL_APPOINTMENT,
  GET_APPOINTMENT_TIME,
} from "../../queries/appoinment";
import moment from "moment";
const InitialState = {
  date: null,
  name: "",
  mail: "",
  mobile: "",
  location: "",
  timing: "",
  error: {
    date: "",
    name: " ",
    mail: " ",
    mobile: " ",
    location: " ",
    timing: "",
  },
};
export default function Contact(props) {
  const classes = styles();

  const [storelocation, setstoreLocation] = React.useState([]);
  const [dataappoinment, setDataappoinment] = React.useState({
    ...InitialState,
  });
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [appointmentDate, setAppointmentDate] = React.useState([]);
  const [appointmentTime, setAppointmentTime] = React.useState([]);
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
        setAppointmentDate(data?.data?.allAppointmentDates?.nodes ?? []);
        setstoreLocation(data?.data?.query?.allStoreLocations?.nodes ?? []);
      });
  }, []);
  React.useEffect(() => {
    if (appointmentDate) {
      fetch(`${API_URL}/get_appointment_time_slots`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: moment(appointmentDate).format("YYYY-MM-DD"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setAppointmentTime(
            data?.data?.allAppointmentDates?.nodes[0]
              ?.appointmentDateTimeSlotsByAppointmentDateId?.nodes ?? []
          );
        });
    }
  }, [appointmentDate]);
  const onSendLoginBtnClicked = () => {
    if (isIamValideToLogin()) {
      // const slot =
      //   `${dataappoinment.year}` +
      //   "-" +
      //   `${dataappoinment.date}` +
      //   "-" +
      //   `${dataappoinment.day} ` +
      //   `${utcformat}`;
    } else {
      return false;
    }
  };

  console.log(dataappoinment, "...................");

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
                    alt="img"
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography style={{ color: "gray", fontFamily: "24px" }}>
                    Brides & their families
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      {/* <FormControl fullWidth>
                        <InputLabel
                          color="secondary"
                          id="demo-simple-select-label"
                        >
                          Select A Date
                        </InputLabel> */}
                      {/* <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={dataappoinment.date}
                          color="secondary"
                          label="Select A Date"
                          onChange={(e) => updateState("date", e.target.value)}
                          isError={dataappoinment.error.date.length > 0}
                          errorMessage={dataappoinment.error.date}
                          isRequired
                          //onChange={handleChange}
                        >
                          {appointmentDate.map((val) => {
                            return (
                              <MenuItem value={val.startDateTime}>
                                {`${moment(val.startDateTime).format(
                                  "MMMM DD YYYY"
                                )}`}
                              </MenuItem>
                            );
                          })}
                        </Select> */}
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          className={classes.inputField}
                          name="startTime"
                          placeholder="Select Start Time"
                          // inputVariant="outlined"
                          value={dataappoinment.date}
                          fullWidth
                          onChange={(value) => updateState("date", value)}
                          minDate={new Date()}
                        />
                        {/* <TimePicker
                          autoOk
                          label="12 hours"
                          value={new Date()}
                          // onChange={handleDateChange}
                        /> */}
                      </MuiPickersUtilsProvider>
                      {/* </FormControl> */}
                      {/* {dataappoinment.error.date.length > 0 && (
                        <Typography variant={"caption"} color={"error"}>
                          {dataappoinment.error.date}
                        </Typography>
                      )} */}
                    </Grid>
                    {/* <Grid item xs={4}>
                      <FormControl fullWidth>
                        <InputLabel
                          color="secondary"
                          id="demo-simple-select-label"
                        >
                          Day
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          color="secondary"
                          label="Day"
                          value={dataappoinment.day}
                          onChange={(e) => updateState("day", e.target.value)}
                          isError={dataappoinment.error.day.length > 0}
                          errorMessage={dataappoinment.error.day}
                          isRequired
                          //onChange={handleChange}
                        >
                          {dayd.map((val) => {
                            return <MenuItem value={val}> {val}</MenuItem>;
                          })}
                        </Select>
                      </FormControl>
                      {dataappoinment.error.day.length > 0 && (
                        <Typography variant={"caption"} color={"error"}>
                          {dataappoinment.error.day}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={4}>
                      {" "}
                      <FormControl fullWidth>
                        <InputLabel
                          color="secondary"
                          id="demo-simple-select-label"
                        >
                          Year
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Day"
                          value={dataappoinment.year}
                          color="secondary"
                          onChange={(e) => updateState("year", e.target.value)}
                          isError={dataappoinment.error.year.length > 0}
                          errorMessage={dataappoinment.error.year}
                          isRequired
                          //onChange={handleChange}
                        >
                          <MenuItem value={year}>{year}</MenuItem>
                        </Select>
                      </FormControl>
                      {dataappoinment.error.year.length > 0 && (
                        <Typography variant={"caption"} color={"error"}>
                          {dataappoinment.error.year}
                        </Typography>
                      )}
                    </Grid> */}
                    <Grid item xs={12}>
                      <Input
                        type="text"
                        name="Fullname"
                        //value={valuesadrees.firstname}
                        placeholder="Fullname"
                        value={dataappoinment.name}
                        color="secondary"
                        onChange={(e) => updateState("name", e.target.value)}
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
                        //value={valuesadrees.firstname}
                        placeholder="Email"
                        value={dataappoinment.mail}
                        color="secondary"
                        onChange={(e) => updateState("mail", e.target.value)}
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
                        type="number"
                        name="Mobile"
                        //value={valuesadrees.firstname}
                        placeholder="Mobile"
                        value={dataappoinment.mobile}
                        color="secondary"
                        onChange={(e) => updateState("mobile", e.target.value)}
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
                          //onChange={handleChange}
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
                    {/* <Grid item xs={0} md={4}></Grid> */}
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
                          //onChange={handleChange}
                        >
                          {appointmentTime.map((val) => {
                            return (
                              <MenuItem value={val.startDateTime}>
                                {`${moment(val.startDateTime).format(
                                  "hh:mm a"
                                )} - ${moment(val.endDateTime).format(
                                  "hh:mm a"
                                )}`}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <center>
                    <Button
                      variant="contained"
                      size="large"
                      className={classes.btn}
                      onClick={onSendLoginBtnClicked}
                    >
                      Confirm & Book in Store
                    </Button>
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
      </Container>
    </>
  );
}
