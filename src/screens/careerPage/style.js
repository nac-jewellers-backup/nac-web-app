import { makeStyles } from "@material-ui/core/styles";
const CareerPageStyles = makeStyles((theme) => ({
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

  viewMore: {
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "50px",
    "& button": {
      fontSize: "20px",
      color: "#FFFFFF !important",
      backgroundColor: "#2a2e6e !important",
      textTransform: "capitalize !important",
      borderRadius: "0px !important",
      padding: "5px 10px !important",
      [theme.breakpoints.down("sm")]: {
        fontSize: "17px",
      },
    },
  },

  viewMoreMobile: {
    textAlign: "center",
    margin: "2px 25px 40px 25px",
  },

  viewMoreButton: {
    fontSize: "18px",
    color: "#FFFFFF !important",
    backgroundColor: "#2a2e6e !important",
    textTransform: "capitalize !important",
    padding: "7px 0px 12px 0px",
  },
}));
export default CareerPageStyles;
