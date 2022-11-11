import { makeStyles } from "@material-ui/core/styles";
const CustomCardStyles = makeStyles((theme) => ({
  cardSection: {
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
      fontSize: "14px",
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
    padding: "10px 0px 15px 0px",
  },
}));

export default CustomCardStyles;
