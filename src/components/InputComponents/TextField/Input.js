import { Grid, TextField } from "@material-ui/core";
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
            style={{ width: "100%", marginTop: "20px" }}
            error={invalid}
            helperText={invalid && <b>{helperText}</b>}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            {...rest}
            disabled={props.disabled}
            rowsMax={rowsMax}
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
