import Paper from "@material-ui/core/Paper";
import React from "react";
import "./index.css";
import RadioBtn from "./RadioBtn";

export default function CardRadioButton(props) {
  return (
    <Paper className={props.cardWidth !== "" ? props.cardWidth : "card"}>
      <br />
      <RadioBtn
        radioValues={props.data}
        onChange={props.onChange}
        values={props.values}
        close={props.close}
        clear={props.clear}
      />
    </Paper>
  );
}
