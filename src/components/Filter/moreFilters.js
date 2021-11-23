import { FormControlLabel, FormGroup, Grid } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Checkbox from "@material-ui/core/Checkbox";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";
import React from "react";
import "./filter.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

    width: "calc(100% - 200px)",
    height: "calc(100vh - 200px)",
    overflowY: "scroll",
    "& b": {
      color: `${theme.palette.primary.main} !important`,
      fontSize: "18px",
    },
    // .arrow-chek, .MuiSvgIcon-root, .MuiExpansionPanelDetails-root, .MuiExpansionPanelDetails-root
    // "&.arrow-chek":{
    //     "&.MuiSvgIcon-root":{
    //         "&.MuiExpansionPanelDetails-root":{
    //             "&.MuiExpansionPanelDetails-root":{
    //                 fill:`${theme.palette.primary.main} important`
    //             }
    //         }
    //     }
    // }
  },
  checkboxlabel: {
    color: "rgb(109,110,112)",
  },
  checkboxgrid: {
    "&.MuiIconButton-colorSecondary": {
      padding: "4px !important",
    },
    //display: "none",
    border: "1px solid white",
    "& span": {
      "& svg": {
        fill: `${theme.palette.primary.main} !important`,
      },
    },
  },
  closeIcon: {
    position: "fixed",
    top: 55,
    right: 45,
    "& svg": {
      fill: `white !important`,
    },
  },
}));
const CheckboxWithTick = withStyles({
  root: {
    cursor: "default",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
    },
    color: "white",
    "&$checked": {
      color: "white",

      "& .MuiIconButton-label": {
        position: "relative",
        zIndex: 0,
      },
      "& .MuiIconButton-label:after": {
        content: '""',
        left: 4,
        top: 4,
        height: 15,
        width: 15,
        position: "absolute",
        backgroundColor: "#33346D",
        zIndex: -1,
      },
    },
  },
  checked: {
    border: "1px solid white",
  },
})(Checkbox);

export default function MoreFilters(props) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={() => {
          props.handleClose();
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open} style={{ padding: "10px" }}>
          <div className={`${classes.paper} scroll`}>
            <Grid container item xs={12}>
              <div
                className={classes.closeIcon}
                onClick={() => {
                  props.handleClose();
                }}
              >
                <CancelIcon />
              </div>
              {props.filter.map((val, i) => {
                if (
                  val !== "price" &&
                  val !== "Occasion" &&
                  val !== "Material" &&
                  val !== "Collection" &&
                  val !== "Offers" &&
                  val !== "Gender" &&
                  val != "Style" &&
                  val !== "Gemstones" &&
                  val !== "Weight"
                ) {
                  return (
                    <Grid
                      item
                      xs={3}
                      style={{ marginBottom: "3%", padding: 20 }}
                    >
                      <div
                        style={{
                          marginBottom: "10px",
                          color: "#33346D",
                          borderBottom: "1px solid #33346D",
                        }}
                      >
                        <span
                          style={{
                            color: "#33346D !important",
                            fontWeight: "bold",
                          }}
                        >
                          {val}
                        </span>
                      </div>
                      <FormGroup row>
                        {props.subFilter[val].map((valsub) => {
                          if (val && val !== "price") {
                            return (
                              // <div>
                              // {val}
                              // </div>
                              <Grid
                                item
                                xs={12}
                                className={classes.checkboxlabel}
                              >
                                <span
                                  style={{ cursor: "pointer" }}
                                  onClick={(e) => {
                                    props.handleClose();
                                    props.onchoosetype(
                                      valsub,
                                      props.checked[
                                        val && val.replace(/\s/g, "")
                                      ][valsub] !== undefined
                                        ? !props.checked[
                                            val && val.replace(/\s/g, "")
                                          ][valsub]
                                        : true,
                                      e,
                                      null,
                                      undefined,
                                      props.state,
                                      val ? val.replace(/\s/g, "") : ""
                                    );
                                  }}
                                >
                                  {valsub}
                                </span>
                                <FormControlLabel
                                  control={
                                    <div>
                                      <CheckboxWithTick
                                        color="white"
                                        label={valsub}
                                        // onChange={(e) => {
                                        //   props.handleClose();
                                        //   props.onchoosetype(
                                        //     valsub,
                                        //     props.checked[
                                        //       val && val.replace(/\s/g, "")
                                        //     ][valsub] !== undefined
                                        //       ? !props.checked[
                                        //           val && val.replace(/\s/g, "")
                                        //         ][valsub]
                                        //       : true,
                                        //     e,
                                        //     null,
                                        //     undefined,
                                        //     props.state,
                                        //     val ? val.replace(/\s/g, "") : ""
                                        //   );
                                        // }}
                                        checked={
                                          props.checked[
                                            val.replace(/\s/g, "")
                                          ] &&
                                          props.checked[val.replace(/\s/g, "")][
                                            valsub
                                          ] !== undefined
                                            ? props.checked[
                                                val.replace(/\s/g, "")
                                              ] &&
                                              props.checked[
                                                val.replace(/\s/g, "")
                                              ][valsub]
                                            : false
                                        }
                                        name={val.replace(/\s/g, "")}
                                      />
                                    </div>
                                  }
                                  // label={valsub}
                                  labelPlacement="start"
                                />
                              </Grid>
                            );
                          } else {
                            return null;
                            //                         return(
                            //                           // <div>
                            //                           // {val}
                            //                           // </div>
                            //                           <Grid item xs = {12} className={classes.checkboxlabel} >
                            // <FormControlLabel
                            //                           control={
                            //                             <Checkbox
                            //                             className={classes.checkboxgrid}
                            //                             checked={props.state ?
                            //                               props.state.numTwo ===  valsub.max : false}
                            //                             onChange={(e) => {
                            //                               props.handleClose();
                            //                               props.onpricechange(e,valsub)
                            //                             }}

                            //                               name={val.replace(/\s/g, "")}
                            //                                                               color={"secondary"}
                            //                             />
                            //                           }
                            //                           label={valsub.label}
                            //                         />
                            //                           </Grid>

                            //                          )
                          }
                        })}
                      </FormGroup>
                    </Grid>
                  );
                }
              })}
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
