import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import CustomFormStyles from "./style";

const CustomForm = (props) => {
  const classes = CustomFormStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.headingGroup}>
            <div className={classes.role}>
              <Typography>Sales Associate</Typography>
            </div>
            <div className={classes.location}>
              <Typography>T.Nagar | Full Time</Typography>
            </div>
            <div className={classes.secondLayer}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrudsed diam nonummy nibh euismod tincidunt ut laoreet dolore
                magna aliquam
              </Typography>
            </div>
          </div>

          {/* FORM */}

          <div className={classes.formGroup}>
            <div className={classes.title}>
              <Typography>Submit Your Resume</Typography>
            </div>
            <div className={classes.jobForm}>
              <Grid container style={{ justifyContent: "center" }}>
                <Grid item xs={10} sm={6} md={4}>
                  <div className={classes.textField}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      placeholder="Name"
                    />
                  </div>
                  <div className={classes.textField}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className={classes.textField}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      placeholder="Email ID"
                    />
                  </div>
                  <div className={classes.textFieldFile}>
                    {/* <TextField
                      id="outlined-basic"
                      variant="outlined"
                      fullWidth
                      placeholder="Upload Your Resume"
                      type="file"
                    /> */}
                    <Typography>Upload Your Resume</Typography>
                    <label>
                      <input
                        placeholer="Upload Your Resume"
                        type="file"
                        style={{ display: "none" }}
                      />
                      <div>Choose file</div>
                    </label>
                  </div>
                  <div className={classes.submit}>Submit</div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomForm;
