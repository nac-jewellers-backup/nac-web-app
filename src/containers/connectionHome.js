import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography, TextField } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  button: {
    color: "#fff",
    backgroundColor: "#33346D",
    borderRadius: "0px",
    padding: "6px 16px",
    boxShadow: "6px 7px 6px #bebfbf !important",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#33346D",
    },
    [theme.breakpoints.down("md")]: {
      padding: "5px 10px",
      fontSize: "12px",
    },
  },
  activeButton: {
    backgroundColor: theme.palette.gold.main,
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
    height : "303px"
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
    boxShadow: "6px 7px 6px #bebfbf !important",
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
    initialData[e.target.name] = e.target.value;
    initialData["error"][e.target.name] = "";

    updatedData({ ...initialData });
  };

  const handleValidate = () => {
    const data = initialData;
    if (
      data.names.length <= 0 &&
      data.email.length <= 0 &&
      data.message.length <= 0
    ) {
      data.error.names = "Please enter your name";
      data.error.email = "Please enter your email id";
      data.error.message = "Please enter your message";
    } else if (data.names.length <= 0 && data.email.length <= 0) {
      data.error.names = "Please enter your name";
      data.error.email = "Please enter your email id";
    } else if (data.email.length <= 0 && data.message.length <= 0) {
      data.error.email = "Please enter your email id";
      data.error.message = "Please enter your message";
    } else if (data.names.length <= 0 && data.message.length <= 0) {
      data.error.names = "Please enter your name";
      data.error.message = "Please enter your message";
    } else if (data.names.length <= 0) {
      data.error.names = "Please enter your name";
    } else if (data.email.length <= 0) {
      data.error.email = "Please enter your email id";
    } else if (data.message.length <= 0) {
      data.error.message = "Please enter your message";
    } else if (
      data.email.length > 0 &&
      !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(data.email)
    ) {
      data.error.email = "Please enter a valid email address";
    }
    updatedData({
      ...data,
    });
  };

  return (
    <Grid container xs={12}>
      <Grid container>
        <Grid item className={classes.buttonGrid}>
          <Button className={`${classes.button} ${classes.activeButton}`}>
            MESSAGE
          </Button>
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
              name="names"
              id="outlined-basic"
              variant="outlined"
              className={classes.inputTextClass}
              value={initialData.names}
              onChange={handleChange}
              error={initialData.error.names ? true : false}
              helperText={initialData.error.names}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.textFieldContainer}>
          <Grid xs={3} md={2} className={classes.textHeadingGrid}>
            <Typography className={classes.textHeading}>EMAIL</Typography>
          </Grid>
          <Grid xs={9} md={10} className={classes.TextFieldGrid}>
            <TextField
              name="email"
              id="outlined-basic"
              variant="outlined"
              className={classes.inputTextClass}
              value={initialData.email}
              onChange={handleChange}
              error={initialData.error.email ? true : false}
              helperText={initialData.error.email}
            />
          </Grid>
        </Grid>{" "}
        <Grid container className={classes.textFieldContainer}>
          <Grid xs={3} md={2} className={classes.textHeadingGrid}>
            <Typography className={classes.textHeading}>MESSAGE</Typography>
          </Grid>
          <Grid xs={9} md={10} className={classes.TextFieldGrid}>
            <TextField
              name="message"
              multiline={true}
              rows={4}
              variant="outlined"
              className={classes.inputTextClass}
              value={initialData.message}
              onChange={handleChange}
              error={initialData.error.message ? true : false}
              helperText={initialData.error.message}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.SendButtonContainer}>
          <Grid>
            <Button
              className={classes.SendButton}
              onClick={handleValidate}
              type="submit"
            >
              SEND
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
