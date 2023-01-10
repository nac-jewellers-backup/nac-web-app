import { Box, FormGroup, Grid } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";

import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import CancelIcon from "@material-ui/icons/Close";
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
    //boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    position: "relative",
    width: "calc(100% - 200px)",
    height: "calc(100vh - 200px)",
    overflowY: "hidden",
    outline: "none",
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
  paper1: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    //boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    position: "relative",
    //width: "calc(100% - 200px)",
    height: "calc(100vh - 250px)",
    overflowY: "scroll",
    outline: "none",
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
    position: "absolute",
    fontSize: "20px",
    cursor: "pointer",

    "& svg": {
      fill: `gray !important`,
    },
  },
}));

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
        <Fade in={props.open}>
          <div className={`${classes.paper}`}>
            <div className={`${classes.paper1} scroll`}>
              <Grid container item xs={12}>
                <div
                  className={classes.closeIcon}
                  style={{
                    zIndex: "999",
                    top: "10px",
                    right: "10px",
                  }}
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
                    val != "Style" &&
                    val !== "Gemstones" &&
                    val !== "Weight"
                  ) {
                    return (
                      <Grid item xs={2} style={{ marginBottom: "3%" }}>
                        <div
                          style={{
                            color: "gray",
                            marginBottom: "10px",
                          }}
                        >
                          <span
                            style={{
                              color: "gray !important",
                              fontWeight: "bold",
                              fontSize: "16px",
                            }}
                          >
                            {val}
                          </span>
                        </div>
                        <FormGroup row>
                          {props.subFilter[val].map((valsub) => {
                            if (val && val !== "price") {
                              return (
                                <Grid
                                  item
                                  xs={12}
                                  className={classes.checkboxlabel}
                                >
                                  <Box
                                    display="flex"
                                    alignItems="center"
                                    style={{ padding: "4px 8px" }}
                                  >
                                    <Box>
                                      <span
                                        style={{
                                          cursor: "pointer",
                                          fontSize: "12px",
                                        }}
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
                                    </Box>
                                    <Box>
                                      <span
                                        style={{
                                          color: "#2F348B",
                                          fontSize: "12px",
                                        }}
                                      >
                                        {props.checked[
                                          val.replace(/\s/g, "")
                                        ] &&
                                        props.checked[val.replace(/\s/g, "")][
                                          valsub
                                        ] !== undefined ? (
                                          props.checked[
                                            val.replace(/\s/g, "")
                                          ] &&
                                          props.checked[val.replace(/\s/g, "")][
                                            valsub
                                          ] ? (
                                            <CheckIcon />
                                          ) : (
                                            ""
                                          )
                                        ) : (
                                          false
                                        )}
                                      </span>
                                    </Box>
                                  </Box>

                                  {/* <FormControlLabel
                                    control={
                                      <div>
                                        <span
                                          style={{
                                            cursor: "pointer",
                                            fontSize: "12px",
                                          }}
                                          onClick={(e) => {
                                            props.handleClose();
                                            props.onchoosetype(
                                              valsub,
                                              props.checked[
                                                val && val.replace(/\s/g, "")
                                              ][valsub] !== undefined
                                                ? !props.checked[
                                                    val &&
                                                      val.replace(/\s/g, "")
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
                                        <CheckboxWithTick
                                          color="white"
                                          label={valsub}
                                          checked={
                                            props.checked[
                                              val.replace(/\s/g, "")
                                            ] &&
                                            props.checked[
                                              val.replace(/\s/g, "")
                                            ][valsub] !== undefined
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
                                    labelPlacement="start"
                                  /> */}
                                </Grid>
                              );
                            } else {
                              return null;
                            }
                            return 0;
                          })}
                        </FormGroup>
                      </Grid>
                    );
                  }
                })}
              </Grid>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
