import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  heading: {
    fontSize: "35px",
    color: "#B2832C",
    textAlign: "center",
  },
  pad: {
    width: "100%",
    // height:"100%",
    padding: "29px 10px",
    borderBottom: "1px solid rgb(221, 221, 221)",
    borderRight: "1px solid rgb(221, 221, 221)",
    [theme.breakpoints.only("xs")]: {
      padding: "10px 0px 20px 0px",
      borderRight: "0px",
      // borderBottom: "1px solid rgb(221, 221, 221)",
    },
  },
  borders: {
    // borderBottom: "1px solid rgb(221, 221, 221)",
    // borderRight: "1px solid rgb(221, 221, 221)",
  },
  ViewButton: {
    color: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#B2832C",
    },
    fontSize: "13px",
    backgroundColor: "#B2832C",
    borderRadius: "0px",
    boxShadow: "4px 4px 4px #a5a4a5 !important",
    padding: "2px 15px",
  },
  pads: {
    padding: "24px",

    // boxShadow:"0 0 5px #888 !important",
  },
  btns: {
    backgroundColor: "#B2832C !important",
    boxShadow: "4px 4px 4px #a5a4a5 !important",
  },
  title: {
    fontSize: "20px",
    color: "gray !important",
    // fontWeight: "bold"
  },
  shadow: {
    boxShadow: "4px 4px 4px #a5a4a5 !important",
    color: "gray !important",
    backgroundColor: "#F4F4F4",
    height: "100%",
  },
  directions: {
    fontSize: "13px",
    color: "gray",
    fontStyle: "italic",
  },
  para: {
    fontSize: "13px",
    color: "gray",
    paddingBottom: "10px",
    paddingTop: "10px",
    lineHeight: "1.4",
    minHeight: "60px",
  },
  mainWidths: {
    // width:"1170px",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "80px",
    padding: "0px 15px",
    [theme.breakpoints.up("lg")]: {
      width: "90%",
    },
    [theme.breakpoints.only("md")]: {
      width: "970px",
    },
    [theme.breakpoints.only("sm")]: {
      width: "550px",
    },
    [theme.breakpoints.only("xs")]: {
      width: "290px",
    },
  },

  storeCenter: {
    display: "flex",
    alignItems: "center",
  },
}));
export default styles;
