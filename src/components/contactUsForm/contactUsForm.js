import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import ContactUsFormStyles from "./style";

const ContactUsForm = (props) => {
  console.log("000", props);
  const classes = ContactUsFormStyles();

  const initialState = {
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    message: "",
  };

  const [state, setState] = React.useState(initialState);

  const onChangeData = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const onsubmitvalue = () => {
    if (
      state.firstName &&
      state.lastName &&
      state.email &&
      state.number &&
      state.message
    ) {
      setState(initialState);
      console.log("state", state);
    } else {
      alert("Please fill all the fields!");
    }
  };
  return (
    <>
      <div className={classes.mainCard}>
        <div className={classes.smallCard}>
          <Grid
            className={classes.position}
            container
            style={{ justifyContent: "center" }}
          >
            {props?.value.map((val) => {
              return (
                <Grid item xs={8} sm={8} md={6} lg={6}>
                  <div className={classes.cardSection}>
                    <Grid container>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Typography className={classes.left_1}>
                          Customer Care:
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Typography>{val?.customer_Care}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Typography className={classes.left_2}>
                          Email:
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Typography>{val?.email}</Typography>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Typography className={classes.left_3}>
                          WhatsApp:
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6}>
                        <Typography>{val?.whatsApp}</Typography>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>

      <div className={classes.mainForm}>
        <Grid container>
          {props?.value?.map((val) => {
            return (
              <Grid item xs={12}>
                <div className={classes.mainRoot}>
                  <div className={classes.titleGroup}>
                    <div className={classes.title}>
                      <Typography>{val?.title}</Typography>
                    </div>
                    <div className={classes.description}>
                      <Typography>{val?.description}</Typography>
                    </div>
                  </div>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <div className={classes.lable}>
                        <div className={classes.field_1}>
                          <Typography>First Name:</Typography>
                        </div>
                        <div className={classes.text_1}>
                          <TextField
                            className={classes.textField}
                            id="firstName"
                            variant="outlined"
                            autoFocus
                            margin="dense"
                            fullWidth
                            value={state.firstName}
                            onChange={onChangeData}
                            name="firstName"
                            required
                          />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <div className={classes.lable}>
                        <div className={classes.field_2}>
                          <Typography>Last Name:</Typography>
                        </div>
                        <div className={classes.text_2}>
                          <TextField
                            className={classes.textField}
                            id="lastName"
                            variant="outlined"
                            autoFocus
                            margin="dense"
                            fullWidth
                            value={state.lastName}
                            onChange={onChangeData}
                            name="lastName"
                            required
                          />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <div className={classes.lable}>
                        <div className={classes.field_3}>
                          <Typography>Contact Number:</Typography>
                        </div>
                        <div className={classes.text_3}>
                          <TextField
                            className={classes.textField}
                            id="number"
                            variant="outlined"
                            autoFocus
                            margin="dense"
                            fullWidth
                            value={state.number}
                            onChange={onChangeData}
                            name="number"
                            required
                          />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <div className={classes.lable}>
                        <div className={classes.field_4}>
                          <Typography>Email Id:</Typography>
                        </div>
                        <div className={classes.text_4}>
                          <TextField
                            className={classes.textField}
                            id="email"
                            variant="outlined"
                            autoFocus
                            margin="dense"
                            fullWidth
                            value={state.email}
                            onChange={onChangeData}
                            name="email"
                            required
                          />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <div className={classes.lable}>
                        <div className={classes.field_5}>
                          <Typography>Message:</Typography>
                        </div>
                        <div className={classes.text_5}>
                          <TextField
                            className={classes.textField}
                            id="message"
                            multiline
                            rows={5}
                            autoFocus
                            margin="dense"
                            fullWidth
                            value={state.message}
                            onChange={onChangeData}
                            name="message"
                            required
                          />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  <div className={classes.button}>
                    <Button onClick={onsubmitvalue}>SUBMIT</Button>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default ContactUsForm;
