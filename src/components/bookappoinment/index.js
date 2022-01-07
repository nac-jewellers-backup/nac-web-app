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
import { NetworkContext } from "context/NetworkContext";
import { useGraphql } from "hooks/GraphqlHook";
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Input } from "../../components/InputComponents/TextField/Input";
import { API_URL } from "../../config";
import { Location } from "../../queries/appoinment";
const InitialState = {
  month: "",
  day: "",
  year: "",
  name: "",
  mail: "",
  mobile: "",
  location: "",
  error: {
    month: "",
    day: " ",
    year: " ",
    name: " ",
    mail: " ",
    mobile: " ",
    location: " ",
  },
};
export default function Contact(props) {
  const classes = styles();
  const months = [
    {
      label: "January",
      value: "01",
    },
    {
      label: "February",
      value: "02",
    },
    {
      label: "March",
      value: "03",
    },
    {
      label: "April",
      value: "04",
    },
    {
      label: "May",
      value: "05",
    },
    {
      label: "June",
      value: "06",
    },
    {
      label: "July",
      value: "07",
    },
    {
      label: "August",
      value: "08",
    },
    {
      label: "September",
      value: "09",
    },
    {
      label: "October",
      value: "10",
    },
    {
      label: "November",
      value: "11",
    },
    {
      label: "December",
      value: "12",
    },
  ];
  const {
    NetworkCtx: { graphqlUrl: uri },
  } = React.useContext(NetworkContext);

  const d = new Date();
  let year = d.getFullYear();
  let todaymonth = d.getMonth();
  let todayday = d.getDay();

  const utcformat = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  const date = [];
  const daysInMonth = new Date(year, todaymonth, 0).getDate();

  const [dayd, setDayd] = React.useState([]);
  const [storelocation, setstoreLocation] = React.useState([]);
  const [dataappoinment, setDataappoinment] = React.useState({
    ...InitialState,
  });
  const updateState = (key, value) => {
    let error = dataappoinment.error;
    error[key] = "";
    setDataappoinment({ ...dataappoinment, [key]: value, error });
  };
  const isIamValideToLogin = () => {
    let isValid = true;
    let error = dataappoinment.error;
    //month
    if (dataappoinment.month.length === 0) {
      isValid = false;
      error.month = "Month is required";
    }

    //Checking day
    if (dataappoinment.day.length === 0) {
      isValid = false;
      error.day = "Day is required";
    }
    //Checking year
    if (dataappoinment.year.length === 0) {
      isValid = false;
      error.year = "Year is required";
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
    setDataappoinment({ ...dataappoinment, error });
    return isValid;
  };
  const { data } = useGraphql(Location, () => {}, {});

  React.useEffect(() => {
    {
      for (let i = 0; i < daysInMonth; i++) {
        if (i < 10) {
          date.push("0" + (i + 1));
        } else {
          date.push(i + 1);
        }
      }

      setDayd(date);
    }
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: Location,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setstoreLocation(data.data.allStoreLocations.nodes);
      });
  }, []);
  const onSendLoginBtnClicked = () => {
    if (isIamValideToLogin()) {
      const slot =
        `${dataappoinment.year}` +
        "-" +
        `${dataappoinment.month}` +
        "-" +
        `${dataappoinment.day} ` +
        `${utcformat}`;
    } else {
      return false;
    }
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
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography style={{ color: "gray", fontFamily: "24px" }}>
                    Brides & their families
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <FormControl fullWidth>
                        <InputLabel
                          color="secondary"
                          id="demo-simple-select-label"
                        >
                          Month
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={dataappoinment.month}
                          color="secondary"
                          label="Month"
                          onChange={(e) => updateState("month", e.target.value)}
                          label="Month"
                          isError={dataappoinment.error.month.length > 0}
                          errorMessage={dataappoinment.error.month}
                          isRequired
                          //onChange={handleChange}
                        >
                          {months.map((val) => {
                            return (
                              <MenuItem value={val.value}>{val.label}</MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                      {dataappoinment.error.month.length > 0 && (
                        <Typography variant={"caption"} color={"error"}>
                          {dataappoinment.error.month}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={4}>
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
                          color="secondary"
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
                        {/* val < 10 ? "0" + val : */}
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
                    </Grid>
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
                    <Grid item xs={4}>
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
                    <Grid item xs={0} md={4}></Grid>
                    <Grid item xs={4}>
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
                          isError={dataappoinment.error.location.length > 0}
                          errorMessage={dataappoinment.error.location}
                          isRequired
                          //onChange={handleChange}
                        ></Select>
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
