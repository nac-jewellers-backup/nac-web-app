const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
  roots: {
    padding: "50px 60px",
    [theme.breakpoints.down("xs")]: {
      padding: "25px 0px",
    },
  },
  headings: {
    fontSize: "50px !important",
    color: "#B2832C",
    fontStyle: "italic",
    padding: "10px 13px 0px 13px",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px !important",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px !important",
      padding: "10px 4px 0px 4px",
    },
  },
  logoEdits: {
    position: "relative",
    height: "70px",
    top: "12px",
    [theme.breakpoints.down("md")]: {
      height: "55px",
      top: "17px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40px",
      top: "12px",
    },
  },
  headerAlign: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "40px",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "10px",
      alignItems: "baseline",
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "10px",
    },
  },
  contentText: {
    padding: "0 130px !important",
    boxShadow: "none !important",
    "& p": {
      fontSize: "20px",
      color: "#717171",
      [theme.breakpoints.down("md")]: {
        fontSize: "17px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    "& div": {
      fontSize: "20px",
      color: "#717171",
      [theme.breakpoints.down("md")]: {
        fontSize: "17px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    "& svg": {
      color: theme.palette.gold.main,
    },
    "&::before": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 50px !important",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 10px !important",
    },
  },
  richTextEditAlign: {
    width: "65%",
    margin: "auto",
    "& p": {
      "& span": {
        fontSize: "20px !important",
        // color: "#717171",
        [theme.breakpoints.down("md")]: {
          fontSize: "15px !important",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "14px !important",
        },
      },
    },
    "& ul":{
      "& li":{
        "& span":{
          fontSize: "20px !important",
        // color: "#717171",
        [theme.breakpoints.down("md")]: {
          fontSize: "15px !important",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "14px !important",
        },
        }
      }
    },
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "10px",
    },
  },
}));
