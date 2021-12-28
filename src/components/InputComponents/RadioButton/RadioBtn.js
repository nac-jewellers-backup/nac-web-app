import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "6px 6px 6px 6px",
    height: "100vh",
    display: "flex",
  },
  formControl: {
    margin: "14px",
    fontFamily: "notoSerif-regular",
  },
  fromControlTwo: {
    fill: "#2F348B",
    "& span": {
      fontSize: "12px !important",
      fill: "#2F348B",
      fontWeight: 600,
      "& svg": {
        width: "0.99rem",
        fill: "#2F348B",
      },
    },
  },
  group: {
    color: "#2F348B",
  },
  radio: {
    color: "#2F348B",
  },
  hoverClass: {
    paddingRight: "10px",

    margin: "10px",
    "&:hover": {
      backgroundColor: "#9e9e9e40",
    },
  },
  clearBtn: {
    padding: "4px 10px",
  },
  colorMain: {
    color: theme.palette.primary.main,
  },
}));

export default function RadioBtn(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState({
    sortTitle: "Sort by",
    values: "",
    helperText: false,
  });

  const handleChange = (e) => {
    props.onChange(e);
  };
  const handleDrawerCloseMobile = () => {
    props.close();
  };
  const handleClearAllData = () => {
    props.clear();
  };
  return (
    <div style={{ alignItems: "flex-end" }} className="classSort">
      <div
        style={{
          padding: "10px 10px 10px",
          borderBottom: "1px solid #e3e3e3",
          display: "block",
          // position: "sticky",
          // top: "0px",
        }}
        className={`${classes.colorMain}`}
      >
        <i
          onClick={handleDrawerCloseMobile}
          className={`fa fa-times ${classes.colorMain}`}
          style={{ color: "#20205A" }}
        ></i>
        <button
          style={{
            background: "none",
            border: "none",
            fontWeight: "600",
            color: "#20205A",
            padding: "6px 8px",
            fontFamily: "notoSerif-regular",
          }}
        >
          SORT BY
        </button>
        <Button
          onClick={handleClearAllData}
          style={{
            float: "right",
            border: "1px solid #c0bcbc",

            fontSize: "12px",
            color: "#20205A",
            borderRadius: "0px",
            marginTop: "3px",
          }}
          className={`${classes.colorMain}`}
          classes={{ text: classes.clearBtn }}
        >
          &nbsp;Clear All&nbsp;
        </Button>
      </div>
      <Grid container>
        <Grid item xs={12}>
          <FormControl
            component="fieldset"
            className={`${classes.fromControlTwo} ${classes.formControl}`}
            style={{ top: "-90px" }}
          >
            <RadioGroup
              aria-label="Gender"
              name="gender1"
              className={classes.group}
              value={props.values.values}
              onChange={handleChange}
            >
              {props.radioValues.map((data) => (
                <>
                  {console.log(data)}
                  <FormControlLabel
                    className={classes.hoverClass}
                    value={data}
                    control={
                      <Radio
                        icon={false}
                        checkedIcon={<AiOutlineCheck />}
                        color="primary"
                        className={classes.radio}
                      />
                    }
                    label={
                      <span style={{ color: "gray", float: "left" }}>
                        {data}
                      </span>
                    }
                    labelPlacement="start"
                  />
                </>
              ))}
            </RadioGroup>
            {value.helperText && (
              <FormHelperText>
                <b style={{ color: "red" }}>Required</b>
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
