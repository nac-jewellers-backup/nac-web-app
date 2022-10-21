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
        fontSize: "45px !important",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px !important",
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
      [theme.breakpoints.down("xs")]: {
        paddingBottom: "10px",
      },
    },
    contentText: {
        padding: "0 170px !important",
        boxShadow: "none !important",
        "& p": {
          fontSize: "20px",
          color: "grey",
        },
        "& div": {
          fontSize: "20px",
          color: "grey",
        },
        "& svg": {
          color: theme.palette.gold.main,
        },
      },
  }));