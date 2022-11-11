import { makeStyles } from "@material-ui/core/styles";
const CustomFormStyles = makeStyles((theme) => ({
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

  secondLayer: {
    marginTop: "17px",
    "& p": {
      color: "#606060",
      [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
      },
    },
  },

  headingGroup: {
    textAlign: "center",
    padding: "30px 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 20px",
    },
  },

  formGroup: {
    textAlign: "center",
    backgroundColor: "rgb(224, 225, 225)",
    paddingTop: "50px",
    boxShadow: "1px 11px 12px -6px rgba(0,0,0,0.75)",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "30px",
    },
  },

  title: {
    "& p": {
      textAlign: "center",
      fontStyle: "italic",
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

  textField: {
    marginBottom: "15px",
    "& input": {
      backgroundColor: "#FFFFFF",
      padding: "0px 20px !important",
      height: "55px !important",
    },
    "& fieldset": {
      borderRadius: "0px !important",
      borderWidth: "0px !important",
    },
  },

  submit: {
    backgroundColor: "#2a2e6e",
    color: "#FFFFFF",
    marginTop: "30px",
    padding: "10px 0",
    cursor: "pointer",
    marginBottom: "120px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "60px",
    },
  },

  textFieldFile: {
    height: "55px",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    "& p": {
      display: "flex",
      alignItems: "center",
      color: "#aeb2d6",
      marginLeft: "20px",
      [theme.breakpoints.down("xs")]: {
        marginLeft: "20px",
      },
    },
    "& label": {
      display: "flex",
      alignItems: "center",
      marginRight: "20px",
      [theme.breakpoints.down("xs")]: {
        marginRight: "0px",
      },
      "& div": {
        backgroundColor: "#575757",
        padding: "3px 7px",
        color: "#FFFFFF",
        fontSize: "13px",
      },
    },
  },
}));

export default CustomFormStyles;
