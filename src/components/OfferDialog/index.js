import React from 'react';
import { InputBase, Grid } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import CheckIcon from '@material-ui/icons/Check';


const useStyles = makeStyles(theme => ({
  buttons: {
    backgroundColor: "#5a854f",
    padding: "3px 14px !important",
    color: "#fff",
    fontSize: "0.85rem !important",
    textTransform: "capitalize",
    '&:hover': {
      backgroundColor: "#436c38",
    }
  },
  buttons1: {
    // backgroundColor: "#cf2d30",
    padding: "3px 14px !important",
    color: "#000",
    fontSize: "0.85rem !important",
    textTransform: "capitalize",
    margin: "auto",
    '&:hover': {
      backgroundColor: "#fbf6f6",
    }
  },
  title: {
    color: "rgba(58, 69, 120, 1)"
  },
  titleTypo: {
    // background: "#f84e88",
    color: "#000",
    padding: "8px 20px",
    fontSize: "1.3rem !important",
    fontFamily: "Roboto",
    fontWeight: 500
  },
  valued: {
    fontSize: "0.85rem !important",
    fontFamily: "Roboto",
    color: "#5d5d5d",
  },
  mapped: {
    minWidth: "400px"
  },
  [theme.breakpoints.down('sm')]: {
    mapped: {
      minWidth: "auto"
    },
  },
  SignUp: {
    color: theme.palette.primary.main,
    fontSize: "0.9rem",
    padding: "6px 5px 5px 5px",
  },
  inputContainer: {
    border: "1px solid #cac6c6 !important",
    display: "flex"
  },
  colorMain: {
    padding: "0px 6px",
    borderRight: "1px solid #cac6c6 !important",
    fontSize: "0.9rem",
  }
}));



export default function PineDialog(props) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  function handleClose() {
    
  }

  function handleSuccess() {
    props.handleSuccess();
  }

  return (
    <Dialog
      PaperProps={{
        classes: { root: classes.mapped },
        style: {
          height: "auto",
          width: "auto"
        },
      }}
      className={classes.mapped}
      fullScreen={fullScreen}
      open={props.isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Typography id="responsive-dialog-title" className={classes.titleTypo}>Offers Available</Typography>
      <Divider />
      <DialogContent >
        <Typography className={classes.valued} style={{ marginTop: "30px" }}>
          We’re sorry there are no offers for this produt at the moment. Stay informed on all our offers by subscribing to our Newsletter.
        </Typography>
        <Grid container justify="center" style={{ paddingTop: "10px" }}>
          <Grid item className={classes.inputContainer}>
            <InputBase
              className={` ${classes.colorMain}`}
              placeholder='Search here'
            />
            <Typography onClick={() => window.location.href = "/jewellery"} className={classes.SignUp} >Sign Up
        </Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions style={{ padding: "14px" }}>
        <Typography onClick={() => window.location.href = "/jewellery"} className={classes.buttons1} >Continue Shopping
        </Typography>
      </DialogActions>
    </Dialog>
  );
}
