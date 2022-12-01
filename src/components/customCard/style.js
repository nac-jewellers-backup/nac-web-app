import { makeStyles } from "@material-ui/core/styles";
const CustomCardStyles = makeStyles((theme) => ({
  title: {
    width: "100%",
    "& p": {
      textAlign: "center",
      fontFamily: "notoSerif-italic !important",
      fontWeight: 600,
      fontSize: "20px",
      color: "#B78231",
      marginTop: "20px",
      marginBottom: "20px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "17px",
      },
    },
  },

  cardSection: {
    width: "100%",
    padding: "20px 35px",
    margin: "7px 65px 30px 65px",
    borderRadius: "0px !important",
    boxShadow: "10px 10px 14px -10px rgba(0,0,0,0.75) !important",
    backgroundColor: "#f0f0f0",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 35px",
      margin: "7px 40px 20px 40px",
    },
  },

  firstLayer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  role: {
    "& p": {
      fontSize: "20px",
      color: "#2a2e6e",
      fontWeight: 600,
      [theme.breakpoints.down("sm")]: {
        fontSize: "17px",
      },
    },
  },

  location: {
    "& p": {
      color: "#616161",
      fontWeight: 600,
      [theme.breakpoints.down("sm")]: {
        fontSize: "15px",
      },
    },
  },

  right: {
    "& button": {
      color: "#FFFFFF !important",
      backgroundColor: "#2a2e6e !important",
      textTransform: "capitalize !important",
      borderRadius: "0px !important",
      "& span": {
        fontSize: "15px",
      },
    },
  },

  secondLayer: {
    marginTop: "17px",
    "& p": {
      color: "#606060",
      [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
      },
    },
  },

  viewMore: {
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "50px",
    width: "100%",
    "& button": {
      fontSize: "20px",
      color: "#FFFFFF !important",
      backgroundColor: "#2a2e6e !important",
      textTransform: "capitalize !important",
      borderRadius: "0px !important",
      padding: "5px 10px !important",
      boxShadow: "3px 3px 9px -1px rgba(0,0,0,0.75) !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "17px",
      },
    },
  },

  //   MOBILE SCREEN

  cardMobile: {
    borderRadius: "0px !important",
    boxShadow: "10px 10px 14px -10px rgba(0,0,0,0.75) !important",
    backgroundColor: "#f0f0f0",
    margin: "10px 25px 20px 25px",
  },

  roleLayer: {
    textAlign: "center",
    paddingTop: "20px",
  },

  roleMobile: {
    "& p": {
      fontSize: "18px",
      color: "#2a2e6e",
      fontWeight: 600,
    },
  },

  locationMobile: {
    "& p": {
      fontSize: "15px",
      color: "#616161",
      fontWeight: 600,
    },
  },

  textLayer: {
    textAlign: "center",
    padding: "20px",
    "& p": {
      fontSize: "13px",
      color: "#606060",
    },
  },

  buttonLayer: {
    textAlign: "center",
  },

  buttonMobile: {
    color: "#FFFFFF !important",
    backgroundColor: "#2a2e6e !important",
    textTransform: "capitalize !important",
    padding: "5px 0px 10px 0px",
    marginBottom:"10px"
  },

  viewMoreMobile: {
    textAlign: "center",
    margin: "2px 25px 40px 25px",
    width: "100%",
  },

  viewMoreButton: {
    fontSize: "18px",
    color: "#FFFFFF !important",
    backgroundColor: "#2a2e6e !important",
    textTransform: "capitalize !important",
    padding: "5px 0px 10px 0px",
    boxShadow: "3px 3px 9px -1px rgba(0,0,0,0.75) !important",
  },
}));

export default CustomCardStyles;
