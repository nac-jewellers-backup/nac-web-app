import { makeStyles } from "@material-ui/core/styles";
// import '../../fonts/font.css'
export const useStyles = makeStyles((theme) => ({
  containerTop: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",
    margin: "3% 0% 3% 0%",
  },
  [theme.breakpoints.up("lg")]: {
    containerTop: {
      width: "1300px !important",
      margin: "auto",
      marginTop: "3%",
      marginBottom: "1%",
      backgroundColor: "#fff",
    },
  },
  [theme.breakpoints.down("sm")]: {
    containerTop: {
      display: "flex",
      backgroundColor: "#fff",
      width: "100%",
      margin: "2% 0% 0% 0% !important",
    },
    productCardDetail: {
      paddingTop: "4% !important",
      paddingBottom: "4% !important",
    },
  },
  [theme.breakpoints.down("md")]: {
    containerTop: {
      display: "flex",
      backgroundColor: "#fff",
      width: "100%",
      margin: "2% 0% 2% 0% !important",
    },
    productCardDetail: {
      paddingTop: "4% !important",
      paddingBottom: "4% !important",
    },
  },

  ProductGrids: {
    padding: "2%",
  },
  productCardDetail: {
    paddingTop: "8%",
    paddingBottom: "8%",
  },
  btnshop: {
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: 0,
    color: "white",
    boxShadow: "0 8px 16px 0 #ccc, 0 6px 20px 0 #ccc",
    padding: "0px 22px",
    fontWeight: "bold",
    fontFamily: "notoSerif-Bold",
    letterSpacing: "5px",
    fontSize: "22px",
  
  },
  productCardTitle: {
    fontFamily: "notoSerif-Bold",
    color: theme.palette.secondary.dark,
    letterSpacing: "5px",
    fontSize: "1.7rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.0rem",
    },
  },
  productCardDescription: {
    textAlign: "center",
    fontFamily: "notoSerif-regular",
    color: theme.palette.secondary.dark,
    paddingTop: "2%",
    paddingBottom: "5%",
  },
  viewmoreColor: {
    color: "white",
    padding: "6px 12px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      opacity: "0.8",
    },
  },
  viewmoreColorSilver:{
    backgroundColor:theme.palette.primary.main,
    "&:hover": {
      backgroundColor:theme.palette.primary.main,
      opacity:'0.9'
    },
  }
}));
