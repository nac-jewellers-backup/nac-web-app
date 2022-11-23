import { makeStyles } from "@material-ui/core/styles";
const ContactUsFormStyles = makeStyles((theme) => ({
  mainForm: {
    width: "100%",
    marginTop: "30px",
    padding: "0 110px !important",
    [theme.breakpoints.down("md")]: {
      padding: "0 50px !important",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 10px !important",
    },
  },

  mainRoot: {
    backgroundColor: "rgb(234 234 234)",
    padding: "130px 60px 30px 60px",
    marginBottom: "100px",
    boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.75)",
    [theme.breakpoints.down("md")]: {
      padding: "130px 60px 30px 60px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "65px 30px 30px 30px",
    },
  },

  textField: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    "& .MuiInputBase-formControl": {
      borderRadius: "0px !important",
    },
    "& input": {
      height: "55px !important",
    },
    "& fieldset": {
      borderWidth: "0px !important",
    },
  },

  title: {
    "& p": {
      fontSize: "23px",
      color: "#414141",
      [theme.breakpoints.down("md")]: {
        fontSize: "23px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
      },
    },
  },

  description: {
    margin: "30px 0",
    "& p": {
      fontSize: "15px",
      color: "#414141",
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
      },
    },
  },

  lable: {
    "& p": {
      fontSize: "15px",
      color: "#414141",
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
      },
    },
  },

  button: {
    display: "flex",
    justifyContent: "end",
    marginTop: "25px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "end",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
    "& button": {
      color: "#FFFFFF",
      cursor: "pointer",
      backgroundColor: "#b78231",
      fontWeight: 600,
      boxShadow: "2px 2px 6px 0px rgba(0,0,0,0.75)",
      padding: "7px 110px",
      borderRadius: "0px !important",
      [theme.breakpoints.down("md")]: {
        padding: "7px 110px",
      },
      [theme.breakpoints.down("xs")]: {
        padding: "7px 79px",
      },
      "&:hover": {
        backgroundColor: "#b78231",
        color: "#FFFFFF",
      },
    },
  },

  mainCard: {
    width: "100%",
    marginTop: "125px",
    padding: "0 110px !important",
    [theme.breakpoints.down("md")]: {
      padding: "0 50px !important",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 10px !important",
      marginTop: "75px",
    },
  },

  labelSection: {
    display: "flex",
  },

  cardSection: {
    backgroundColor: "#2F348B",
    padding: "40px 60px",
    boxShadow: "0px 0px 6px 1px rgba(0,0,0,0.75)",
    [theme.breakpoints.down("md")]: {
      padding: "25px 35px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "25px 10px",
    },
    "& p": {
      color: "#FFFFFF",
      fontSize: "18px",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "9px",
      },
    },
  },

  position: {
    position: "absolute",
    top: "280px",
    left: "0px",
    [theme.breakpoints.down("md")]: {
      top: "320px",
    },
    [theme.breakpoints.down("sm")]: {
      top: "260px",
    },
    [theme.breakpoints.down("xs")]: {
      top: "220px",
    },
  },
}));
export default ContactUsFormStyles;
