import React from "react";
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
    paddingRight: "24px",
    [theme.breakpoints.down("md")]: {
      paddingRight: "12px",
    },
  },
  inputHeadContainer: {
    border: "1px solid #ccc",
    padding: "24px",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 2px 4px 4px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",
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
              id="outlined-basic"
              variant="outlined"
              className={classes.inputTextClass}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.textFieldContainer}>
          <Grid xs={3} md={2} className={classes.textHeadingGrid}>
            <Typography className={classes.textHeading}>EMAIL</Typography>
          </Grid>
          <Grid xs={9} md={10} className={classes.TextFieldGrid}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className={classes.inputTextClass}
            />
          </Grid>
        </Grid>{" "}
        <Grid container className={classes.textFieldContainer}>
          <Grid xs={3} md={2} className={classes.textHeadingGrid}>
            <Typography className={classes.textHeading}>MESSAGE</Typography>
          </Grid>
          <Grid xs={9} md={10} className={classes.TextFieldGrid}>
            <TextField
              multiline={true}
              rows={4}
              variant="outlined"
              className={classes.inputTextClass}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.SendButtonContainer}>
          <Grid>
            <Button className={classes.SendButton}>SEND</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
