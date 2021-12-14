import { Box, Button, Card, Grid, Link, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import ArrowLeft from "../../assets/arrowleft";
import ArrowRight from "../../assets/arrowright";
import styles from "./cardStyle";

export default function Cards(props) {
  const classes = styles();
  const [state, setstate] = React.useState({
    loading: false,
    count: "",
  });
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down(""));
  const [pagination, setPagination] = useState(6);
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
            <ArrowLeft />&nbsp;{props.data.title.titlePage}&nbsp;<ArrowRight />

          </Typography>
          {window.location.pathname === "/advertising" ? (
            <>
              <Typography className={classes.subtitless}>
                {props.data.title.subtitle1}
              </Typography >
              <Typography className={classes.subtitle} style={{ marginTop: "-8px" }}> {props.data.title.subtitle2}</Typography>
            </>
          ) : ""}

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
        <Grid style={{ height: "25px" }}></Grid>
        <Grid
          xs={12}
          sm={12}
          md={11}
          lg={11}
          xl={11}
          container
          className={classes.cardHeadGrid}
        >
          {props.data.data.slice(0, pagination).map((val, index) => (
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
                  <Grid item xs={12} className={window.location.pathname === "/advertising" ? classes.cardfooter : ""}>
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
                        <Typography className={classes.cardNamead}>
                          {val.name}
                        </Typography>{" "}

                      </>
                    )}

                    {/* <Typography className={classes.cardMetal}>
                      {val.model}
                    </Typography> */}
                    <>
                      {window.location.pathname === "/temple-work"
                        ? (
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
                          <Typography className={classes.cardMetal1}>
                            {val.typeOfMetal}
                          </Typography>{" "}
                        </>
                      ) : (
                        ""
                      )}
                    </>
                    {window.location.pathname === "/advertising" ? (
                      <>

                        <Typography className={classes.cardLocationad}>
                          {val.location}
                        </Typography>

                        <Box display="flex" alignItems="center" justifyContent="center">
                          <Box>
                            {
                              val.type === "video" ? (
                                <Button className={classes.cardLocationadview} endIcon={<HiOutlineArrowNarrowRight />} onClick={handleClickOpen}>
                                  View
                                </Button>
                              ) :

                                <Button className={classes.cardLocationadview} endIcon={<HiOutlineArrowNarrowRight />} onClick={() => {
                                  window.location.href = val.link
                                }} >
                                  View
                                </Button>
                            }

                          </Box>

                        </Box>

                      </>
                    ) : (
                      <Typography className={classes.cardLocation}>
                        {val.location}
                      </Typography>
                    )}

                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid style={{ height: "25px" }}></Grid>
      </Grid>

      {window.location.pathname === "/newsroom" ? (
        <Grid container>
          <Grid container item xs={12} justify="center">
            <Button
              onClick={() => {
                setPagination(pagination + 6);
              }}
              variant="contained"
              disabled={pagination >= props.data.data.length}
              className={classes.viewmoreColor}
            >
              {pagination >= props.data.data.length
                ? `No more news`
                : `View more news`}
            </Button>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
      {window.location.pathname === "/advertising" ? (
        <>
          <Grid container>
            <Grid container item xs={12} justify="center">
              <Button
                onClick={() => {
                  setPagination(pagination + 6);
                }}
                variant="contained"
                color="secondary"
                disabled={pagination >= props.data.data.length}
                className={classes.viewmoreColor}
              >
                {pagination >= props.data.data.length
                  ? `No more advertising`
                  : `View more advertising`}
              </Button>


            </Grid>
          </Grid>

        </>
      ) : (
        ""
      )}
      {window.location.pathname === "/temple-work" ? (
        <Grid container>
          <Grid container item xs={12} justify="center">
            <Button
              onClick={() => {
                setPagination(pagination + 6);
              }}
              variant="contained"
              disabled={pagination >= props.data.data.length}
              className={classes.viewmoreColor}
            >
              {pagination >= props.data.data.length
                ? `No more temple work`
                : `View more temple work`}
            </Button>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </Grid>
  );
}
