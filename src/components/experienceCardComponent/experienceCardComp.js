import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import ExperienceCardStyles from "./style";
import parse from "html-react-parser";
import { useNetworkRequest } from "hooks/index";

const ExperienceCardComp = (props) => {
  console.log("propsData", props);
  const classes = ExperienceCardStyles();

  const [enable, setEnable] = useState(false);

  const [values, setValues] = React.useState({
    name: "",
    mobile: "",
    email: "",
    error: {
      name: "",
      mobile: "",
      email: "",
    },
  });

  const handleChange = (key, value) => {
    if (key === "productCategory") {
      if (value.length > 3) {
        return false;
      } else setValues({ ...values, [key]: value });
    } else {
      setValues({ ...values, [key]: value });
    }
  };

  const { data, error, loading,status, makeFetch } = useNetworkRequest(
    "/appointment/send_otp",
    {},
    false
  );

  const handleSubmit = (type) => {
    var emailvld =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (values.name === "" && values["error"]) {
      values["error"]["name"] = "Name is required";
      setValues({
        ...values,
        values,
      });
    }
    if (values.mobile === "" && values["error"]) {
      values["error"]["mobile"] = "Mobile Number is required";
      setValues({
        ...values,
        values,
      });
    }
    if (!emailvld.test(values.email)) {
      values["error"]["email"] = "An email address must contain a single @/.";
      setValues({
        ...values,
        values,
      });
      return false;
    }
    const Payload = {
      name: values.name,
      email: values.email,
      mobile: values.mobile,
      appointment_type_id:
        type == "alive"
          ? 1
          : type == "lotus"
          ? 2
          : type == "piercing"
          ? 3
          : type == "stones"
          ? 4
          : "",
    };
    makeFetch(Payload)
    setEnable(!enable);
  };

  return (
    <Grid container className={classes.mainContainer}>
      <>
        <div className={classes.bgImage}>
          <img src={props?.value?.background_Image} alt="Ear Piercing" />
        </div>

        {!enable ? (
          <Grid item xs={12} sm={12} lg={6} className={classes.mainCard}>
            <Card className={classes.cardBox}>
              <CardContent className={classes.viewContent}>
                <Grid container className={classes.cardContainer}>
                  <Grid item xs={5}>
                    <div className={classes.headerImage}>
                      <img
                        src={props?.value?.header_Image}
                        alt="Ear Piercing"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={10}>
                    <div className={classes.description}>
                      <Typography>
                        {parse(props?.value?.description)}
                      </Typography>
                    </div>
                    <div className={classes.formTitle}>
                      <Typography>{parse(props?.value?.form_Title)}</Typography>
                    </div>

                    <div className={classes.nameGroup}>
                      <div className={classes.nameLabel}>
                        <Typography>Name:</Typography>
                      </div>
                      <div className={classes.textField}>
                        <TextField
                          name="name"
                          id="outlined-basic"
                          fullWidth
                          variant="outlined"
                          value={values.name}
                          error={
                            values.error && values.error.name !== ""
                              ? true
                              : false
                          }
                          onChange={(e) => handleChange("name", e.target.value)}
                        />
                        <label className="errtext">
                          {" "}
                          {values.error.name && values.error.name}
                        </label>
                      </div>
                    </div>

                    <div className={classes.nameGroup}>
                      <div className={classes.nameLabel}>
                        <Typography>Mobile Number:</Typography>
                      </div>
                      <div className={classes.textField}>
                        <TextField
                          name="mobile"
                          id="outlined-basic"
                          fullWidth
                          variant="outlined"
                          value={values.mobile}
                          isNumber
                          error={
                            values.error && values.error.mobile !== ""
                              ? true
                              : false
                          }
                          onChange={(e) =>
                            handleChange("mobile", e.target.value)
                          }
                        />
                        <label className="errtext">
                          {" "}
                          {values.error.mobile && values.error.mobile}
                        </label>
                      </div>
                    </div>

                    <div className={classes.nameGroup}>
                      <div className={classes.nameLabel}>
                        <Typography>Email:</Typography>
                      </div>
                      <div className={classes.textField}>
                        <TextField
                          value={values.email}
                          id="outlined-basic"
                          fullWidth
                          variant="outlined"
                          error={
                            values.error && values.error.email !== ""
                              ? true
                              : false
                          }
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                        />
                        <label className="errtext">
                          {" "}
                          {values.error.email && values.error.email}
                        </label>
                      </div>
                    </div>

                    <div className={classes.submitButton}>
                      <Button
                        onClick={() => handleSubmit(props?.value?.type)}
                        fullWidth
                      >
                        {props?.value?.button_Text}
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ) : (
          <Grid item xs={12} sm={12} lg={6} className={classes.mainCard}>
            <Card className={classes.cardBox}>
              <CardContent className={classes.viewContent}>
                <Grid container className={classes.cardContainer}>
                  <Grid item xs={5}>
                    <div className={classes.headerImage}>
                      <img
                        src={props?.value?.header_Image}
                        alt="Ear Piercing"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={10}>
                    <div className={classes.submitText}>
                      <Typography>{props?.value?.submit_Content}</Typography>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        )}
      </>
    </Grid>
  );
};

export default ExperienceCardComp;
