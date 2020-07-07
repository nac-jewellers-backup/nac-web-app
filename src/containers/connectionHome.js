import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography, TextField } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  button: {
    color: "#fff",
    backgroundColor: "#33346D",
    borderRadius: "0px",
    padding: "6px 16px",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#33346D",
    },
    [theme.breakpoints.down("md")]: {
      padding: "5px 10px",
      fontSize: "12px",
    },
  },
  buttonGrid: {
    paddingRight: "20px",
    [theme.breakpoints.down("md")]: {
      paddingRight: "12px",
    },
  },
  inputHeadContainer: {
    border: "1px solid #ccc",
    padding: "24px",
    boxShadow: "6px 7px 6px #bebfbf !important",
    // borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      padding: "12px",
    },
  },
  TextFieldGrid: {
    width: "100%",
  },
  textFieldContainer: {
    paddingBottom: "10px",
  },
  inputTextClass: {
    width: "100%",
  },
  textHeading: {
    fontSize: "13px",
    color: "#545E89",
  },
  textHeadingGrid: {
    display: "flex",
    alignItems: "center",
  },
  SendButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  SendButton: {
    color: "#fff",
    backgroundColor: "#33346D",
    borderRadius: "0px",
    padding: "4px 14px",
    fontSize: "13px",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#33346D",
    },
  },
}));
export default function ConnectionHome(props) {
  const classes = styles();

  const [initialData, updatedData] = useState({
    names: "",
    email: "",
    message: "",
    error: {
      names: "",
      email: "",
      message: "",
    },
  });

  const handleChange = (e) => {
    console.log(e.target);
    updatedData({
      [e.target.name]: e.target.value,
    });
  };

  const handleValidate = () => {
    // if (
    //   initialData.names.length === 0 &&
    //   initialData.email.length === 0 &&
    //   initialData.message.length === 0
    // ) {
    //   initialData.error.names = "Please enter your name";
    //   initialData.error.email = "Please enter your email id";
    //   initialData.error.message = "Please enter your message";
    // }
  };

  return (
    <Grid container xs={12}>
      <Grid container>
        <Grid item className={classes.buttonGrid}>
          <Button className={classes.button}>MESSAGE</Button>
        </Grid>
        <Grid item className={classes.buttonGrid}>
          <Button className={classes.button}>CALLBACK</Button>
        </Grid>
        <Grid item className={classes.buttonGrid}>
          <Button className={classes.button}>LIVE CHAT</Button>
        </Grid>
      </Grid>
      <Grid container className={classes.inputHeadContainer}>
        <Grid container className={classes.textFieldContainer}>
          <Grid xs={3} md={2} className={classes.textHeadingGrid}>
            <Typography className={classes.textHeading}>NAME</Typography>
          </Grid>
          <Grid xs={9} md={10} className={classes.TextFieldGrid}>
            <TextField
              name="userName"
              id="outlined-basic"
              variant="outlined"
              className={classes.inputTextClass}
              value={initialData.names}
              onChange={handleChange}
              // helperText={initialData.error.names}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.textFieldContainer}>
          <Grid xs={3} md={2} className={classes.textHeadingGrid}>
            <Typography className={classes.textHeading}>EMAIL</Typography>
          </Grid>
          <Grid xs={9} md={10} className={classes.TextFieldGrid}>
            <TextField
              name="userEmail"
              id="outlined-basic"
              variant="outlined"
              className={classes.inputTextClass}
              value={initialData.email}
              onChange={handleChange}
              // helperText={initialData.error.email}
            />
          </Grid>
        </Grid>{" "}
        <Grid container className={classes.textFieldContainer}>
          <Grid xs={3} md={2} className={classes.textHeadingGrid}>
            <Typography className={classes.textHeading}>MESSAGE</Typography>
          </Grid>
          <Grid xs={9} md={10} className={classes.TextFieldGrid}>
            <TextField
              name="userMessage"
              multiline={true}
              rows={4}
              variant="outlined"
              className={classes.inputTextClass}
              value={initialData.message}
              onChange={handleChange}
              // helperText={initialData.error.message}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.SendButtonContainer}>
          <Grid>
            <Button className={classes.SendButton} onClick={handleValidate}>
              SEND
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
