import React from "react";

import Input from "@material-ui/core/Input";
import { Grid, Typography, Select } from "@material-ui/core";
import styles from "containers/contactus/stylecontact";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  contact,
  contactpage,
  contactfooter
} from "../../mappers/dummydata/savingNac";
import Header from "components/SilverComponents/Header";

// const useStyles = makeStyles(theme => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1)
//     }
//   }
// }));

export default function Contact(props) {
  const classes = styles();

  return (
    <Grid>
      <Grid xs={12} container>
        <Header />
      </Grid>
      <form>
        <Grid
          container
          className={classes.grid1}
          xs={12}
          sm={12}
          md={12}
          xl={12}
        >
          <Grid item xs={12} sm={6} md={12} xl={12}>
            <div className={classes.head}>{contact.head}</div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <div className={classes.contents}>{contact.content}</div>
          </Grid>
          <Grid
            container
            xs={6}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            className={classes.grid4}
          >
            {contact.image.map((img, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
                className={classes.images}
              >
                <img src={img.link}></img>
                <Typography className={classes.imageContent}>
                  {img.img_content}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Grid container xs={12} sm={12} md={12} xl={12} className="">
            {contactpage.dataall.map((data, index) => (
              <>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  md={12}
                  lg={12}
                  xl={12}
                  className={classes.grid10}
                >
                  <Select value={"age"} className={classes.grid9} native>
                    {data &&
                      data.list2 &&
                      data.list2.map((val, index) => (
                        <>
                          className={classes.grid9}
                          <option value={val}>{val}</option>
                        </>
                      ))}
                  </Select>
                  <Input
                    placeholder="Enter Full Name"
                    className={classes.grid8}
                    inputProps={{ "aria-label": "description" }}
                  />
                </Grid>
              </>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <Input
              placeholder="Enter Phone Number"
              className={classes.grid2}
              inputProps={{ "aria-label": "description" }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <Input
              placeholder="Subject Line"
              className={classes.grid2}
              inputProps={{ "aria-label": "description" }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <Input
              placeholder="Email"
              className={classes.grid2}
              inputProps={{ "aria-label": "description" }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <Input
              placeholder="Order Number(optional)"
              className={classes.grid2}
              inputProps={{ "aria-label": "description" }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} xl={12} className={classes.grid3}>
            <div className={classes.root}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label=""
                multiline
                rows="6"
                placeholder="Eg, I need help identify a BIG jhumka earrings for my wedding"
                variant="outlined"
              />
            </div>
          </Grid>
          <Grid
            container
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={classes.grid10}
          >
            <div className={classes.grid6}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                className={classes.margin}
              >
                Send message to Support
              </Button>
            </div>
          </Grid>
          <Grid
            container
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={classes.grid11}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              className={classes.grid12}
            >
              <Typography className={classes.grid16}>
                {contactfooter.content1}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              className={classes.grid13}
            >
              <Typography className={classes.grid14}>
                {" "}
                {contactfooter.address}
              </Typography>
              <Typography className={classes.grid15}>
                {" "}
                {contactfooter.phonenum}
              </Typography>
              <Typography className={classes.grid15}>
                {" "}
                {contactfooter.email}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}
