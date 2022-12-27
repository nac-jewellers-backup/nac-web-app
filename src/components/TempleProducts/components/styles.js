import { makeStyles } from "@material-ui/core";

export const CardUseStyles = makeStyles((theme) => ({
    about: {
      backgroundColor: "#E6E6E6",
      width:"100%",
    },
    aboutChild: {
      width: "85%",
      margin: " auto",
      padding: "30px 0px 0px",
      alignItems:"baseline",
      [theme.breakpoints.up("md")]: {
        justifyContent: "space-between",
      },
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "40px 0",
        width: "85%",
      },
      [theme.breakpoints.down("xs")]: {
        padding: "20px 0",
        width: "85%",
      },
    },
    TempleName: {
      fontSize: "14px",
      color: "#213C97",
      fontStyle: "italic",
      textTransform: "capitalize",
      padding: "6px 0",
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        fontSize: "11px",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "19px",
      },
    },
    multipleTextTempleName:{
      fontSize: "11px",
      color: "#213C97",
      fontStyle: "italic",
      textTransform: "capitalize",
      padding: "6px 0",
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        fontSize: "7px",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "12px",
      },
    },
    headerTempleName:{
      fontSize: "16px",
      color: "#213C97",
      fontStyle: "italic",
      textTransform: "capitalize",
      padding: "6px 0",
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        fontSize: "12px",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "22px",
      },
    },
    templeTxt: {
      fontSize: "16px",
      color: "#213C97",
      fontStyle: "italic",
      textTransform: "capitalize",
      padding: "6px 0",
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        fontSize: "14px",
      },
    },
    multipleTextweighTxt:{
      fontSize: "8px",
      color: "#727273",
      fontStyle: "italic",
      textAlign:"center",
      [theme.breakpoints.down("xs")]: {
        fontSize: "6px",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "10px",
      },
    },
    weighTxt: {
      fontSize: "11px",
      color: "#727273",
      fontStyle: "italic",
      textAlign:"center",
      [theme.breakpoints.down("xs")]: {
        fontSize: "8px",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "14px",
      },
    },
    GridBox: {
      textAlign: "center",
    //   margin: "30px 0",
    },
    customGridBox:{
      [theme.breakpoints.down("md")]: {
        maxWidth: "20%",
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: "20%",
      },
      [theme.breakpoints.down("sm")]: {
        maxWidth: "50%",
      },
    },
    customGridMultipleSimilar:{
      [theme.breakpoints.up("md")]: {
        maxWidth: "13.5%",
        textAlign:"center"
      },
    },
    multipleSimilarDiv:{
      [theme.breakpoints.down("md")]: {
        width:"100px"
      },
    },
    TempleImg: {
      height: "70%",
      width:"100%",
      display:"flex",
      justifyContent:"center",
    },
    imageOfImageWithDescription:{
      [theme.breakpoints.down("xs")]: {
        height: "150px",
      },
    },
    imageCustom:{
      height:"170px",
      width:"100%",
      display:"flex",
      justifyContent:"center",
      [theme.breakpoints.down("md")]: {
        height: "150px",
      },
      [theme.breakpoints.up("md")]: {
        height: "170px",
      },
      [theme.breakpoints.up("lg")]: {
        height: "300px",
      },
      [theme.breakpoints.up("xl")]: {
        height: "450px",
      },
      [theme.breakpoints.down("sm")]: {
        height: "200px",
      },
    },
    txtBox: {
      padding: "10px",
    },
    seconRowTxt: {
      padding: "20px 30px",
      textAlign: "center",
      [theme.breakpoints.down("md")]: {
        padding: "20px 12px",
      },
    },
    TempleHead: {
      width: "35%",
      [theme.breakpoints.down("md")]: {
        width: "50%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "80%",
        fontSize: "15px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        fontSize: "14px",
      },
      margin: "auto",
      fontSize: "16px",
      color: "#213C97",
      fontStyle: "italic",
      textTransform: "capitalize",
      padding: "16px 0",
      textAlign: "center",
    },
  }));