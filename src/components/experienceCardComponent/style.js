import { colors } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const ExperienceCardStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },

  bgImage: {
    "& img": {
      width: "100%",
      height: "1000px",
    },
  },

  mainCard: {
    position: "absolute",
    alignSelf: "center",
  },

  cardBox: {
    backgroundColor: "#f4f4f4",
    borderRadius: "0px !important",
    boxShadow: "2px 2px 5px 0px rgba(116,116,116,1)",
  },

  viewContent: {
    height: "fit-content",
    padding: "35px !important",
  },

  cardContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  headerImage: {
    "& img": {
      width: "100%",
    },
  },

  description: {
    textAlign: "center",
    marginTop: "50px",
    "& p": {
      fontSize: "18px",
    },
  },

  formTitle: {
    textAlign: "center",
    marginTop: "50px",
    "& p": {
      fontSize: "17px",
      marginBottom: "0px",
      marginTop: "0px",
    },
  },

  nameGroup: {
    marginTop: "20px",
  },

  nameLabel: {
    "& p": {
      fontSize: "18px",
      color: "grey",
      marginBottom: "4px",
    },
  },

  textField: {
    "& input": {
      backgroundColor: "#FFFFFF",
      height: "45px !important",
    },
    "& fieldset": {
      borderWidth: "0px !important",
    },
  },

  submitButton: {
    marginTop: "25px",
    boxShadow: "2px 2px 5px 0px rgba(116,116,116,1)",
    "& button": {
      backgroundColor: "rgb(179, 130, 31)",
      color: "#FFFFFF",
      fontWeight: 600,
      borderRadius: "0px !important",
      "&:hover": {
        backgroundColor: "rgb(179, 130, 31)",
        color: "#FFFFFF",
      },
    },
  },

  submitText: {
    textAlign: "center",
    marginTop: "50px",
    "& p": {
      fontSize: "17px",
      fontWeight: 600,
    },
  },
}));

export default ExperienceCardStyles;
