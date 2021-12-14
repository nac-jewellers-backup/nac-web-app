import { Avatar, Box, Container, Grid, Hidden, TextField, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CallIcon from "@material-ui/icons/Call";
import ChatIcon from "@material-ui/icons/Chat";
import styles from "containers/contactus/stylecontact";
import React from "react";
import ArrowLeft from "../../assets/arrowleft";
import ArrowRight from "../../assets/arrowright";
import {
  contact
} from "../../mappers/dummydata/savingNac";


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
                <div className={classes.head}><ArrowLeft />&nbsp;{contact.head}&nbsp; <ArrowRight /></div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} xl={12} className={classes.content}>
                <Grid container>
                  <Grid item xs={12}>

                    <Box display="flex" alignItems="center">
                      <Box >
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
                      <Box >
                        <Avatar src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_footer/nQjOPg.tif.svg" />


                      </Box>
                      <Box>
                        <Typography variant="body1" className={classes.name}>
                          &nbsp;&nbsp;&nbsp;care@nacjewellers.com
                        </Typography>
                      </Box>
                    </Box>
                    <Box display="flex" alignItems="center" marginTop="8px">
                      <Box >
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
              {/* <Grid item xs={12} sm={12} md={12} xl={12}>
        <div className={classes.contents}>{contact.content}</div>
      </Grid> */}
              {/* <Grid
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
   */}

              {/* <Grid container xs={12} sm={12} md={12} xl={12} className="">
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
            
            </Grid>
          </>
        ))}
      </Grid> */}
              <Grid item xs={12} xs={12} sm={12} md={12} xl={12}>
                <br />
              </Grid>
              <Grid item xs={12} xs={12} sm={12} md={12} xl={12} className={classes.contentParent}>
                <Grid container >
                  <Grid item xs={12} md={8} className={classes.content2}>
                    <Typography className={classes.heading}>Send Enquiry</Typography>
                    <Typography className={classes.sub}>Please submit your query and a member of our team will call you with 24 hours</Typography>


                    <Grid
                      container spacing={4}>
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
                      <Grid item xs={12} sm={12} md={12} xl={12} >
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
                      <Grid
                        container

                        justifyContent="flex-end"

                      >
                        <Grid
                          container
                          xs={12}
                          sm={12}
                          md={8}
                          lg={5}
                          xl={5}


                        >
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

                      src="https://s3.ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/akshaya+page/Group+63%402x.png" alt="img" />
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid
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
          lg={12}
          xl={12}
          className={classes.grid12}
        >
          <Typography className={classes.grid16}>
            {contactfooter.content1}
          </Typography>
        </Grid>
        <Grid
        container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={classes.grid13}
          justify="center"
        >
          <Grid item   xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}>
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
    */}

            </Grid>
          </form>


        </Container>

      </Hidden>
      <Hidden mdUp>


        <Grid
          container
          className={classes.roots}

        >
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <div className={classes.head}>{contact.head}   </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} xl={12} >
            <Grid container className={classes.content1sm}>
              <Grid item xs={12}>

                <Box display="flex" alignItems="center">
                  <Box >
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
                  <Box >
                    <Avatar src="https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_footer/nQjOPg.tif.svg" />


                  </Box>
                  <Box>
                    <Typography variant="body1" className={classes.name}>
                      &nbsp;&nbsp;&nbsp;care@nacjewellers.com
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" marginTop="8px">
                  <Box >
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
          </Grid>
          <Grid item xs={12} sm={12} md={12} xl={12}  >
            <Grid container className={classes.content2sm}>
              <Grid item xs={12} >
                <Typography className={classes.heading}>Send Enquiry</Typography>
                <Typography className={classes.sub}>Please submit your query and a member of our team will call you with 24 hours</Typography>


                <Grid
                  container spacing={4}>
                  <Grid item xs={12} >
                    <label className={classes.label}>First Name :</label>
                    <TextField
                      variant="filled"
                      color="secondary"


                      className={classes.grid2}

                    />
                  </Grid>
                  <Grid item xs={12} >
                    <label className={classes.label}>Last Name :</label>
                    <TextField
                      variant="filled"
                      color="secondary"

                      className={classes.grid2}

                    />
                  </Grid>
                  <Grid item xs={12} >
                    <label className={classes.label}>Contact No :</label>
                    <TextField
                      variant="filled"
                      color="secondary"

                      className={classes.grid2}

                    />
                  </Grid>
                  <Grid item xs={12} >
                    <label className={classes.label}>Email Id :</label>
                    <TextField
                      variant="filled"
                      color="secondary"
                      className={classes.grid2}

                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} xl={12} >
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
                  <Grid
                    container

                    justifyContent="flex-end"

                  >
                    <Grid
                      container
                      xs={12}
                      sm={12}
                      md={8}
                      lg={5}
                      xl={5}


                    >
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





      </Hidden>
    </>
  );
}
