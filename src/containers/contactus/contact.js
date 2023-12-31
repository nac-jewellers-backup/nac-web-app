import {
  Avatar,
  Box,
  Container,
  Dialog,
  Grid,
  Hidden,
  TextField,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CallIcon from "@material-ui/icons/Call";
import ChatIcon from "@material-ui/icons/Chat";
import styles from "containers/contactus/stylecontact";
import React from "react";
import ArrowLeft from "../../assets/arrowleft";
import ArrowRight from "../../assets/arrowright";
import BookAppoinment from "../../components/bookappoinment/index";
import { contact } from "../../mappers/dummydata/savingNac";

const InitialState = {
  month: "",
  day: "",
  year: "",
  name: "",
  mail: "",
  mobile: "",
  location: "",
  error: {
    month: "",
    day: " ",
    year: " ",
    name: " ",
    mail: " ",
    mobile: " ",
    location: " ",
  },
};
export default function Contact(props) {
  const classes = styles();

  const [open, setOpen] = React.useState(false);

  const setAppoinments = () => {
    setOpen(!open);
  };
  const closes = () => {
    setOpen(false);
  };
  return (
    <>
      <Hidden smDown>
        <Container maxWidth="lg">
          <form>
            <Grid
              container
              className={classes.grid1}
              xs={12}
              sm={12}
              md={12}
              xl={12}
            >
              <Grid item xs={12} sm={12} md={12} xl={12}>
                <Dialog
                  maxWidth="md"
                  fullWidth={true}
                  aria-labelledby="simple-dialog-title"
                  onClose={setAppoinments}
                  open={open}
                >
                  <BookAppoinment close={closes} />
                </Dialog>
              </Grid>
              <Grid item xs={12} sm={12} md={12} xl={12}>
                <div className={classes.head}>
                  <ArrowLeft />
                  &nbsp;{contact.head}&nbsp; <ArrowRight />
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                xl={12}
                className={classes.content}
              >
                <Grid container>
                  <Grid item xs={9}>
                    <Box display="flex" alignItems="center">
                      <Box>
                        <Avatar style={{ backgroundColor: "#2F348B" }}>
                          <CallIcon />
                        </Avatar>
                      </Box>
                      <Box>
                        <Typography variant="body1" className={classes.name}>
                          &nbsp;&nbsp;&nbsp;+91 44 4399 6666
                        </Typography>
                      </Box>
                    </Box>
                    <Box display="flex" alignItems="center" marginTop="8px">
                      <Box>
                        <Avatar src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_footer/nQjOPg.tif.svg" />
                      </Box>
                      <Box>
                        <Typography variant="body1" className={classes.name}>
                          &nbsp;&nbsp;&nbsp;care@nacjewellers.com
                        </Typography>
                      </Box>
                    </Box>
                    <Box display="flex" alignItems="center" marginTop="8px">
                      <Box>
                        <Avatar style={{ backgroundColor: "#2F348B" }}>
                          <ChatIcon />
                        </Avatar>
                      </Box>
                      <Box>
                        <Typography variant="body1" className={classes.name}>
                          &nbsp;&nbsp;&nbsp;+ 91 9597457555
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Box display="flex" alignItems="center">
                      <Box>
                        {/* <Typography className={classes.book}>Lorem</Typography> */}
                        <Button
                          variant="contained"
                          size="large"
                          fullWidth={true}
                          className={classes.btn}
                          onClick={setAppoinments}
                        >
                          BOOK APPOINTMENT
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              

            
              <Grid item xs={12} sm={12} md={12} xl={12}>
                <br />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                xl={12}
                className={classes.contentParent}
              >
                <Grid container>
                  <Grid item xs={12} md={8} className={classes.content2}>
                    <Typography className={classes.heading}>
                      Send Enquiry
                    </Typography>
                    <Typography className={classes.sub}>
                      Please submit your query and a member of our team will
                      call you with 24 hours
                    </Typography>

                    <Grid container spacing={4}>
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <label className={classes.label}>First Name :</label>
                        <TextField
                          variant="filled"
                          color="secondary"
                          className={classes.grid2}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <label className={classes.label}>Last Name :</label>
                        <TextField
                          variant="filled"
                          color="secondary"
                          className={classes.grid2}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <label className={classes.label}>Contact No :</label>
                        <TextField
                          variant="filled"
                          color="secondary"
                          className={classes.grid2}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <label className={classes.label}>Email Id :</label>
                        <TextField
                          variant="filled"
                          color="secondary"
                          className={classes.grid2}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} xl={12}>
                        <label className={classes.label}>Message :</label>

                        <TextField
                          className={classes.grid2}
                          fullWidth
                          id="outlined-multiline-static"
                          label=""
                          multiline
                          rows="6"
                          variant="filled"
                          color="secondary"
                        />
                      </Grid>
                      <Grid container justifyContent="flex-end">
                        <Grid container xs={12} sm={12} md={8} lg={5} xl={5}>
                          <Button
                            variant="contained"
                            size="large"
                            fullWidth={true}
                            className={classes.btn}
                          >
                            SUBMIT
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <img
                      className={classes.img}
                      src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/akshaya+page/Group+63%402x.png"
                      alt="img"
                      loading="lazy"
                    />
                  </Grid>
                </Grid>
              </Grid>
            
            </Grid>
          </form>
        </Container>
      </Hidden>
      <Hidden mdUp>
        <Grid container className={classes.roots}>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <div className={classes.head}>{contact.head} </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <Grid container className={classes.content1sm}>
              <Grid item xs={12}>
                <Box display="flex" alignItems="center">
                  <Box>
                    <Avatar style={{ backgroundColor: "#2F348B" }}>
                      <CallIcon />
                    </Avatar>
                  </Box>
                  <Box>
                    <Typography variant="body1" className={classes.name}>
                      &nbsp;&nbsp;&nbsp;+91 44 4399 6666
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" marginTop="8px">
                  <Box>
                    <Avatar src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_footer/nQjOPg.tif.svg" />
                  </Box>
                  <Box>
                    <Typography variant="body1" className={classes.name}>
                      &nbsp;&nbsp;&nbsp;care@nacjewellers.com
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" marginTop="8px">
                  <Box>
                    <Avatar style={{ backgroundColor: "#2F348B" }}>
                      <ChatIcon />
                    </Avatar>
                  </Box>
                  <Box>
                    <Typography variant="body1" className={classes.name}>
                      &nbsp;&nbsp;&nbsp;+ 91 000 000000
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <br />
            <Grid item xs={12} md={12}>
              <Box display="flex" alignItems="center">
                <Box>
                  {/* <Typography className={classes.book}>Lorem</Typography> */}
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth={true}
                    className={classes.btn}
                    onClick={setAppoinments}
                  >
                    BOOK APPOINTMENT
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <Grid container className={classes.content2sm}>
              <Grid item xs={12}>
                <Typography className={classes.heading}>
                  Send Enquiry
                </Typography>
                <Typography className={classes.sub}>
                  Please submit your query and a member of our team will call
                  you with 24 hours
                </Typography>

                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <label className={classes.label}>First Name :</label>
                    <TextField
                      variant="filled"
                      color="secondary"
                      className={classes.grid2}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label className={classes.label}>Last Name :</label>
                    <TextField
                      variant="filled"
                      color="secondary"
                      className={classes.grid2}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label className={classes.label}>Contact No :</label>
                    <TextField
                      variant="filled"
                      color="secondary"
                      className={classes.grid2}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <label className={classes.label}>Email Id :</label>
                    <TextField
                      variant="filled"
                      color="secondary"
                      className={classes.grid2}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} xl={12}>
                    <label className={classes.label}>Message :</label>

                    <TextField
                      className={classes.grid2}
                      fullWidth
                      id="outlined-multiline-static"
                      label=""
                      multiline
                      rows="6"
                      variant="filled"
                      color="secondary"                      
                    />
                  </Grid>
                  <Grid container justifyContent="flex-end">
                    <Grid container xs={12} sm={12} md={8} lg={5} xl={5}>
                      <Button
                        variant="contained"
                        size="large"
                        fullWidth={true}
                        className={classes.btn}
                      >
                        SUBMIT
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Dialog
          maxWidth="md"
          fullWidth={true}
          aria-labelledby="simple-dialog-title"
          onClose={setAppoinments}
          open={open}
        >
          <BookAppoinment close={closes} />
        </Dialog>
      </Hidden>
    </>
  );
}
