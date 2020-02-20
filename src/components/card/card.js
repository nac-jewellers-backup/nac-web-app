import React from "react";
import { Typography, Grid, Card, Link } from "@material-ui/core";
import styles from "./cardStyle";
import Dialog from "@material-ui/core/Dialog";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Slideshow from "../Carousel/carosul";

export default function Cards(props) {
  const classes = styles();
  const [state, setstate] = React.useState({
    loading: false,
    count: ""
  });
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down(""));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const slider = React.createRef();

  return (
    <Grid container>
      <Grid
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.cardMain}
      >
        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography className={classes.titlePage}>
            {props.data.title.titlePage}
          </Typography>
        </Grid>
        {window.location.pathname === "/temple-work" ? (
          <>
            {props.data.title.content.map((val, index) => (
              <>
                <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Grid
                    item
                    xs={10}
                    sm={10}
                    md={6}
                    lg={6}
                    xl={6}
                    className={classes.gridTemple}
                  >
                    <Typography className={classes.contentTemple}>
                      {val.contentTemple}
                    </Typography>
                  </Grid>
                </Grid>
              </>
            ))}
            <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
              <Link href="/contactus">
                {" "}
                <img
                  src={props.data.title.imgIcon}
                  alt="contact image"
                  className={classes.contactImage}
                />
              </Link>
              <Typography className={classes.titlePage}>
                <Link href="/contactus" className={classes.linkContact}>
                  {" "}
                  {props.data.title.contact}
                </Link>
              </Typography>
            </Grid>
          </>
        ) : (
          ""
        )}
        <Grid style={{ height: "80px" }}></Grid>
        <Grid
          xs={12}
          sm={12}
          md={10}
          lg={10}
          xl={10}
          container
          className={classes.cardHeadGrid}
        >
          {props.data.data.map((val, index) => (
            <Grid
              item
              xs={10}
              sm={10}
              md={4}
              lg={4}
              xl={4}
              spacing={classes.spacing}
              className={classes.gridItem}
            >
              <Card className={classes.card}>
                <Grid>
                  {/* //   style={{ width: "100% !important" }}
                  //   dataCarousel={props.data.carouselTop.setting}
                  //   sliderRef={slider} arrowsImg
                  // > */}

                  {/* {props.data.carouselTop.setting.arrowsImg && (
                    <Grid container>
                      <Grid
                        item
                        onClick={previous}
                        className={classes.preButton}
                      ></Grid>
                      <Grid
                        item
                        onClick={next}
                        className={classes.nextButton}
                      ></Grid>
                    </Grid>
                  )} */}

                  {/* <Slideshow
                    dataCarousel={props.data.carouselTop.setting}
                    sliderRef={slider}
                  > */}
                  {window.location.pathname === "/newsroom" ? (
                    <>
                      <a href={val.link} className={classes.link}>
                        {" "}
                        <img
                          src={val.img}
                          alt="Image"
                          className={classes.imgClass}
                        />
                      </a>
                    </>
                  ) : (
                    ""
                  )}
                  {window.location.pathname === "/temple-work" ? (
                    <>
                      {" "}
                      <img
                        src={val.img}
                        alt="Image"
                        className={classes.imgClass}
                      />
                    </>
                  ) : (
                    ""
                  )}
                  {window.location.pathname === "/advertising" ? (
                    <>
                      {val.type === "video" ? (
                        <>
                          <a
                            href={val.link}
                            className={classes.link}
                            onClick={handleClickOpen}
                          >
                            {" "}
                            <img
                              src={val.img}
                              alt="Image"
                              className={classes.imgClass}
                            />
                          </a>

                          <Dialog
                            // style={{width: '100%'}}
                            fullScreen={fullScreen}
                            open={open}
                            onClose={handleClose}
                            contentStyle={{ width: "100%", maxWidth: "none" }}
                            // aria-labelledby="responsive-dialog-title"
                          >
                            <Card className={classes.dialogCard}>
                              <Grid>
                                <Grid>
                                  <Typography className={classes.dialogText}>
                                    Advertisement
                                  </Typography>
                                </Grid>
                                <Grid container className={classes.dialogVideo}>
                                  <iframe
                                    className={classes.iframeClass}
                                    width="100%"
                                    heigth="auto"
                                    src={val.videoLink}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                  ></iframe>
                                </Grid>
                              </Grid>
                            </Card>
                          </Dialog>
                        </>
                      ) : (
                        <>
                          <a href={val.link} className={classes.link}>
                            {" "}
                            <img
                              src={val.img}
                              alt="Image"
                              className={classes.imgClass}
                            />
                          </a>
                        </>
                      )}
                    </>
                  ) : (
                    ""
                  )}
                  {/* </Slideshow> */}
                </Grid>

                <Grid container>
                  <Grid>
                    {window.location.pathname === "/newsroom" ? (
                      <>
                        <Typography className={classes.cardName}>
                          <a href={val.link} className={classes.link}>
                            {" "}
                            {val.name}
                          </a>
                        </Typography>{" "}
                      </>
                    ) : (
                      <>
                        {" "}
                        <Typography className={classes.cardName}>
                          {val.name}
                        </Typography>{" "}
                      </>
                    )}

                    {/* <Typography className={classes.cardMetal}>
                      {val.model}
                    </Typography> */}
                    <>
                      {window.location.pathname === "/temple-work" ||
                      window.location.pathname === "/advertising" ? (
                        <>
                          {" "}
                          <Typography className={classes.cardMetal}>
                            {val.model}
                          </Typography>{" "}
                        </>
                      ) : (
                        ""
                      )}
                    </>
                    <>
                      {window.location.pathname === "/temple-work" ? (
                        <>
                          {" "}
                          <Typography className={classes.cardMetal}>
                            {val.typeOfMetal}
                          </Typography>{" "}
                        </>
                      ) : (
                        ""
                      )}
                    </>

                    <Typography className={classes.cardLocation}>
                      {val.location}
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid style={{ height: "80px" }}></Grid>
      </Grid>
    </Grid>
  );
}