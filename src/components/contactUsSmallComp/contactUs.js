import { Grid, Typography } from "@material-ui/core";
import React from "react";
import ContactUsStyles from "./style";

const ContactUsSmallComp = (props) => {
  const classes = ContactUsStyles();
  return (
    <div className={classes.mainCard}>
      <div className={classes.smallCard}>
        <Grid container style={{ justifyContent: "center" }}>
          {props?.value.map((val) => {
            return (
              <Grid item xs={8} sm={8} md={6} lg={6}>
                <div className={classes.cardSection}>
                  <Grid container>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      <Typography className={classes.left_1}>
                        Customer Care:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      <Typography>{val?.customer_Care}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      <Typography className={classes.left_2}>Email:</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      <Typography>{val?.email}</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                      <Typography className={classes.left_3}>
                        WhatsApp:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
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
  );
};

export default ContactUsSmallComp;
