import { makeStyles } from "@material-ui/core/styles";
const CareerPageStyles = makeStyles((theme) => ({

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
      boxShadow: "3px 3px 9px -1px rgba(0,0,0,0.75) !important",
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
    padding: "5px 0px 10px 0px",
    boxShadow: "3px 3px 9px -1px rgba(0,0,0,0.75) !important",
  },
}));
export default CareerPageStyles;
