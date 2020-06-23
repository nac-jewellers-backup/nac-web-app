import React from "react";
import { Grid } from "@material-ui/core";
import style from "./style";
import AccordianElement from "./accordianElements";

export default function Accordian(props) {
  return (
    <Grid container xs={12}>
      <>
        {props.value &&
          props.value.data &&
          props.value.data.map((val, i) => {
              debugger
            return (
              <Grid container>
                {val &&
                  val.accordian &&
                  val.accordian.map((value, i) => (
                    <AccordianElement
                      value={value}
                      accordian={val.accordianIcon}
                    />
                  ))}
              </Grid>
            );
          })}
      </>
    </Grid>
  );
}
