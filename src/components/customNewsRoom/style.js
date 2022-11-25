import { makeStyles } from "@material-ui/core/styles";
const CustomNewsRoomStyles = makeStyles((theme) => ({
  main: {
    marginTop: "50px",
    marginBottom: "50px",
    padding: "0 110px !important",
    [theme.breakpoints.down("md")]: {
      padding: "0 50px !important",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 10px !important",
    },
  },

  cardSection: {
    borderRadius: "2px !important",
    marginBottom: "30px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "10px",
    },
  },

  imageSection: {
    "& img": {
      width: "100%",
    },
  },

  description: {
    textAlign: "center",
    padding: "30px 20px",
    "& p": {
      minHeight: "81px",
      fontSize: "18px",
      color: "#514747",
      [theme.breakpoints.down("md")]: {
        minHeight: "48px",
        fontSize: "16px",
      },
      [theme.breakpoints.down("xs")]: {
        minHeight: "39px",
        fontSize: "13px",
      },
    },
  },

  buttonText: {
    textAlign: "center",
    paddingBottom: "30px",
    cursor:"pointer",
    "& p": {
      display: "flex",
      justifyContent: "center",
      fontSize: "20px !important",
      color: "#514747!important",
      fontFamily: "notoSerif-italic !important",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        fontSize: "17px !important",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "15px !important",
      },
      "& svg": {
        [theme.breakpoints.down("md")]: {
          width: "22px !important",
          height: "22px !important",
        },
        [theme.breakpoints.down("xs")]: {
          width: "18px !important",
          height: "18px !important",
        },
      },
    },
  },
}));

export default CustomNewsRoomStyles;
