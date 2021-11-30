import { Hidden } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import { makeStyles } from "@material-ui/core/styles";
import CallIcon from "@material-ui/icons/Call";
import ChatIcon from "@material-ui/icons/Chat";
import CloseIcon from "@material-ui/icons/Close";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "80%",
    right: "0%",
  },
  popper: {
    //     position: "fixed",
    minWidth: 60,
    marginBottom: 5,
    zIndex: 10,
    [theme.breakpoints.down("sm")]: {
      minWidth: 0,
    },
    "& .MuiPaper-root": {},
    "& .MuiSvgIcon-root": {
      fill: `${theme.palette.secondary.main} !important`,
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: 20,
    },
  },
  needHelpText: {
    transform: "rotate(-90deg)" /* Equal to rotateZ(45deg) */,
    transformOrigin: "right bottom",
    background: "#2F348B ",
    "& span": {
      color: "white",
      fontWeight: "bold",
      fontSize: "1.1rem",
    },
  },
  needHelpTextWithoutRotate: {
    background: "#2F348B ",
    "& span": {
      color: "white",
      fontWeight: "bold",
      fontSize: "1.3rem",
    },
  },
  noWidth: {
    width: "auto !important",
  },
  number: {
    fontSize: 17,
    color: "black",
  },
  chatNow: {
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    fontSize: 17,
    cursor: "pointer",
    textTransform: "uppercase",
  },
  closeIcon: {
    fill: "white !important",
  },
  paper: {
    [theme.breakpoints.down("sm")]: {
      padding: 8,
    },
  },
  close: {
    [theme.breakpoints.only("xs")]: {
      marginBottom: 20,
    },
  },
}));

export default function NeedHelp(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
          className={classes.popper}
        >
          {({ TransitionProps }) => (
            <Collapse {...TransitionProps} timeout={500}>
              <Paper className={classes.paper}>
                {/* <Hidden mdUp> */}
                <Grid
                  item
                  xs={12}
                  sm={4}
                  style={{ padding: "5px 0px", margin: "auto" }}
                >
                  <a
                    href="tel:+914443996666"
                    style={{ textDecoration: "none" }}
                  >
                    <CallIcon />
                  </a>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  style={{ padding: "5px 0px", margin: "auto" }}
                >
                  <a
                    href="https://wa.me/919597457555?text=Hi"
                    style={{ textDecoration: "none" }}
                  >
                    <WhatsAppIcon />
                  </a>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  style={{ padding: "5px 0px", margin: "auto" }}
                >
                  <a
                    href="mailto:care@nacjewellers.com"
                    style={{ textDecoration: "none" }}
                  >
                    <ChatIcon />
                  </a>
                </Grid>

                {/* <Grid
                  item
                  xs={12}
                  sm={4}
                  style={{ padding: "5px 0px", margin: "auto" }}
                >
                  <a
                    href="mailto:hello@stylori.com"
                    style={{ textDecoration: "none" }}
                  >
                    <EmailIcon />
                  </a>
                </Grid> */}
              </Paper>
            </Collapse>
          )}
        </Popper>
      </Hidden>
      <Grid container justify="center">
        <Hidden smDown>
          <Grid
            item
            className={`${classes.needHelpTextWithoutRotate} ${
              open ? classes.noWidth : ""
            }`}
          >
            <Button onClick={handleClick("top-start")}>
              {open ? (
                <CloseIcon className={classes.closeIcon} />
              ) : (
                <div>
                  <div style={{ fontSize: "1rem" }}>
                    Help
                    <i
                      style={{ fontSize: "1.2rem", paddingLeft: 3 }}
                      class="fa"
                    >
                      &#xf128;
                    </i>
                  </div>
                </div>
              )}
            </Button>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item>
            <Grid
              item
              xs={12}
              sm={12}
              style={{ padding: "5px 0px", margin: "auto" }}
            >
              <a
                href="https://wa.me/919952625252?text=Hi"
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <WhatsAppIcon /> */}
                <img
                  src="https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/Whatsapp-silver+jewellery.png"
                  style={{ width: "63px", height: "auto" }}
                  alt="img"
                ></img>
              </a>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
