import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  sideContent: {
    paddingLeft: "30px",
    marginBottom: "10px",
    [theme.breakpoints.only("md")]: {
      paddingLeft: "0px",
    },
  },
  mainWidths: {
    // width:"1170px",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginLeft: "auto",
    marginRight: "auto",

    padding: "0px 15px",
    [theme.breakpoints.up("lg")]: {
      width: "90%",
    },
    [theme.breakpoints.only("md")]: {
      width: "970px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "750px",
    },
  },
  topPadding: {
    padding: "40px 0px",
  },
  DropDownContainer: {
    padding: "0px 0px 30px 0px",
    display: "flex",
    justifyContent: "center",
  },
  DropDownText: {
    cursor: "pointer",
    fontSize: "24px",
    color: "#33346D",
  },
  DropDownGrid: {
    [theme.breakpoints.up("md")]: {
      marginRight: "50px",
    },
    marginRight: "30px",
  },
  listItemText: {
    padding: "12px 30px 10px 30px",
    fontSize: "18px !important",
    color: "#000",
    "&:hover": {
      opacity: "0.8",
      border: "none !important",
    },
  },
  listItemIcon: {
    fill: "#33346D !important",
    marginBottom: "-5px",
  },
}));
export default styles;
