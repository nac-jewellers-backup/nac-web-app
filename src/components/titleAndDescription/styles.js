const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
    roots: {
      padding: "50px 60px",
      [theme.breakpoints.down("xs")]: {
        padding: "25px 0px",
      },
    },
    headings: {
      fontSize: "34px",
      color: "#B2832C",
      fontFamily:"notoSerif-italic !important", 
      padding: "10px",
      [theme.breakpoints.down("md")]: {
        fontSize: "30px !important",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "22px !important",
      },
    },
    subHeader:{
      fontSize:"18px",
      width:"50%",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px !important",
        width:"80%"
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px !important",
        width:"80%"
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
      alignItems:"center",
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
  }));