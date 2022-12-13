import { makeStyles } from "@material-ui/core/styles";
const ContactUsStyles = makeStyles((theme) => ({
  mainCard: {
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
      padding: "20px 25px",
    },
    "& p": {
      color: "#FFFFFF",
      fontSize: "18px",
      [theme.breakpoints.down("md")]: {
        fontSize: "16px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "13px",
      },
    },
  },
}));
export default ContactUsStyles;
