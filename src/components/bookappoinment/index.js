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

// const useStyles = makeStyles(theme => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1)
//     }
//   }
// }));

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
      value: "January",
    },
    {
      label: "February",
      value: "February",
    },
    {
      label: "March",
      value: "March",
    },
    {
      label: "April",
      value: "April",
    },
    {
      label: "May",
      value: "May",
    },
    {
      label: "June",
      value: "June",
    },
    {
      label: "July",
      value: "July",
    },
    {
      label: "August",
      value: "August",
    },
    {
      label: "September",
      value: "September",
    },
    {
      label: "October",
      value: "October",
    },
    {
      label: "November",
      value: "November",
    },
    {
      label: "December",
      value: "December",
    },
  ];
  const days = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ];
  const days1 = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  const location = [
    {
      label: "Mylapore",
      value: "mylapore",
    },
    {
      label: "T.Nager",
      value: "t.nager",
    },
    {
      label: "Vijayawada",
      value: "Vijayawada",
    },
    {
      label: "Perambur",
      value: "Perambur",
    },
    {
      label: "Kanchipuram",
      value: "Kanchipuram",
    },
    {
      label: "Anna Nager",
      value: "AnnaNager",
    },
    {
      label: "Velachery",
      value: "Velachery",
    },
  ];
  const d = new Date();
  let year = d.getFullYear();

  const [yeard, setYeard] = React.useState();
  const [monthd, setMonthd] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [dayd, setDayd] = React.useState();
  const [data, setData] = React.useState({ ...InitialState });
  const updateState = (key, value) => {
    let error = data.error;
    error[key] = "";
    setData({ ...data, [key]: value, error });
  };
  const isIamValideToLogin = () => {
    let isValid = true;
    let error = data.error;
    //month

    if (data.month.length === 0) {
      isValid = false;
      error.month = "Month is required";
    }

    //Checking day
    if (data.day.length === 0) {
      isValid = false;
      error.day = "Day is required";
    }
    //Checking year
    if (data.year.length === 0) {
      isValid = false;
      error.year = "Year is required";
    }
    //Checking name
    if (data.name.length === 0) {
      isValid = false;
      error.name = "name is required";
    }
    //Checking mail
    if (data.mail.length === 0) {
      isValid = false;
      error.mail = "Email is required";
    }
    //Checking location
    if (data.location.length === 0) {
      isValid = false;
      error.location = "Location is required";
    }
    //Checking mobile
    if (data.mobile.length === 0) {
      isValid = false;
      error.mobile = "Mobile is required";
    }
    setData({ ...data, error });
    return isValid;
  };

  const onSendLoginBtnClicked = () => {
    if (isIamValideToLogin()) {
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
                          value={data.month}
                          color="secondary"
                          label="Month"
                          onChange={(e) => updateState("month", e.target.value)}
                          label="Month"
                          isError={data.error.month.length > 0}
                          errorMessage={data.error.month}
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
                    </Grid>
                    <Grid item xs={2}>
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
                          value={data.day}
                          color="secondary"
                          onChange={(e) => updateState("day", e.target.value)}
                          isError={data.error.day.length > 0}
                          errorMessage={data.error.day}
                          isRequired
                          //onChange={handleChange}
                        >
                          {days1.map((val) => {
                            return <MenuItem value={val}>{val}</MenuItem>;
                          })}
                        </Select>
                      </FormControl>
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
                          value={data.year}
                          color="secondary"
                          onChange={(e) => updateState("year", e.target.value)}
                          isError={data.error.year.length > 0}
                          errorMessage={data.error.year}
                          isRequired
                          //onChange={handleChange}
                        >
                          <MenuItem value={year}>{year}</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={10}>
                      <Input
                        type="text"
                        name="Fullname"
                        //value={valuesadrees.firstname}
                        placeholder="Fullname"
                        value={data.name}
                        color="secondary"
                        onChange={(e) => updateState("name", e.target.value)}
                        isError={data.error.name.length > 0}
                        errorMessage={data.error.name}
                        isRequired
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Input
                        type="text"
                        name="Email"
                        //value={valuesadrees.firstname}
                        placeholder="Email"
                        value={data.mail}
                        color="secondary"
                        onChange={(e) => updateState("mail", e.target.value)}
                        isError={data.error.mail.length > 0}
                        errorMessage={data.error.mail}
                        isRequired
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Input
                        type="number"
                        name="Mobile"
                        //value={valuesadrees.firstname}
                        placeholder="Mobile"
                        value={data.mobile}
                        color="secondary"
                        onChange={(e) => updateState("mobile", e.target.value)}
                        isError={data.error.mobile.length > 0}
                        errorMessage={data.error.mobile}
                        isRequired
                      />
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
                          value={data.location}
                          color="secondary"
                          label="Location"
                          onChange={(e) =>
                            updateState("location", e.target.value)
                          }
                          isError={data.error.location.length > 0}
                          errorMessage={data.error.location}
                          isRequired
                          //onChange={handleChange}
                        >
                          {location.map((val) => {
                            return (
                              <MenuItem value={val.value}>{val.label}</MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={0} md={2}></Grid>
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
                          isError={data.error.location.length > 0}
                          errorMessage={data.error.location}
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
