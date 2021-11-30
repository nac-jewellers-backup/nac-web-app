import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import propTypes from "prop-types";
import React from "react";
// NOTABLE POINTS
//  Min and Max
// Email ID
// Confirm Email ID
// Mobile Number
// Number
// Password
// Repeat Password
// On Button Submit
// On Moving Out
// Live
const useStyles = makeStyles({
  root: {
   
   
  "& .MuiFilledInput-root":{
    borderRadius:"0px"
    },
    "& .MuiFilledInput-root:before": {
      border:"none"
    }
  },



});

export const Input = (props) => {
  let {
    isNumber = false,
    pattern,
    maxLength,
    minLength,
    helperText,
    onChange,
    rowsMax,
    multiline,
    onInvalid,

    ...rest
  } = props;

  const defaultStyle = {
    margin: "normal",
  };
    


  const [invalid, setInvalid] = React.useState(false);

  // INTEGRATE THEME HERE

  const handleKeyPress = (e) => {
    if (isNumber) {
      if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();
    }
  };

  const handleChange = (e) => {
    setInvalid(false);
    onChange(e);
  };

  const handleInvalid = (e) => {
    e.preventDefault();
    setInvalid(true);
  };
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      {props.checkoutgift ? (
        <>
          <TextField
           
            variant="filled"
            autoComplete={props && props.autoComplete && props.autoComplete}
            inputProps={{ pattern, maxLength, minLength }}
            multiline={props.multiline}
            onInvalid={handleInvalid}
            style={{ width: "100%", marginTop: "20px", borderRadius: "0px" }}
            error={invalid}
            helperText={invalid && <b>{helperText}</b>}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            {...rest}
            value={props.value}
            disabled={props.disabled}
            rowsMax={rowsMax}
            minRows={4}
            color="secondary"
            
            className={classes.root}
          />
        </>
      ) : (
        <TextField
          autoComplete={props && props.autoComplete && props.autoComplete}
          inputProps={{
            pattern,
            maxLength,
            minLength,
          }}
          style={{ width: "100%", marginTop: "26px" }}
          onInvalid={handleInvalid}
          error={invalid}
          multiline={multiline}
          color="secondary"
          rowsMax={rowsMax}
          disabled={props.disabled}
          helperText={invalid && <b>{helperText}</b>}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          {...defaultStyle}
          {...rest}
        />
      )}
    </Grid>
  );
};

Input.propTypes = {
  isNumber: propTypes.bool,
};
