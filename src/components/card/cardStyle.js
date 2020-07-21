import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  titlePage: {
    fontSize: "28px",
    fontFamily: "notoSerif-regular",
    fontWeight: "500 !important",
    lineHeight: "1.1",
    color: "#1c1c1c",
    margin: "21px 0px 10.5px 0px",
    textAlign: "center",
  },
  contentTemple: {
    fontFamily: "notoSerif-regular",
    lineHeight: "30px",
    textAlign: "center",
    color: "#5d5d5d",
    padding: "10px 0px 20px 0px",
    fontSize: "16px",
  },
  gridTemple: {
    margin: "auto",
  },
  cardHeadGrid: {
    margin: "auto",
  },
  gridItem: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      margin: "auto",
    },
    // margin: "auto",
  },
  cardMain: {
    // paddingTop: "150px",
    // [theme.breakpoints.down("md")]: {
    //   paddingTop: "80px"
    // }
    paddingTop: "30px",
  },
  contactImage: {
    display: "flex",
    margin: "auto",
  },
  imgClass: {
    width: "100%",
  },
  cardName: {
    fontSize: "18px",
    color: "#1e1e1e",
    fontFamily: "notoSerif-regular",
    lineHeight: "1.42857",
    padding: "20px 0px 8px 15px",
  },
  link: {
    textDecoration: "none !important",
    color: "#1e1e1e",
    "&:hover": {
      color: "#5d5d5d",
    },
  },
  cardMetal: {
    color: "#5d5d5d",
    fontSize: "15px",
    fontFamily: "notoSerif-regular",
    lineHeight: "1.42857",
    padding: "0px 0px 0px 15px",
  },
  cardMetal1: {
    color: "#5d5d5d",
    fontSize: "15px",
    fontFamily: "notoSerif-regular",
    lineHeight: "1.42857",
    padding: "5px 0px 0px 15px",
  },
  cardLocation: {
    fontSize: "12px",
    color: "#969696",
    fontFamily: "notoSerif-regular",
    lineHeight: "1.42857",
    padding: "12px 0px 30px 15px",
  },
  card: {
    // borderRadius: "0px !important",
    // border: "1px solid #dbdbdb !important",
    boxShadow: "0 0 5px #888 !important",
  },
  linkContact: {
    textDecoration: "none !important",
    color: "#000",
  },
  dialogText: {
    fontFamily: "notoSerif-regular !important",
    fontSize: "18px !important",
    color: "#5d5d5d !important",
    lineHeight: "1.42857 !important",
    padding: "10px 10px 5px 10px",
  },
  dialogVideo: {
    [theme.breakpoints.up("md")]: {
      width: "600px !important",
      height: "300px !important",
      padding: "10px 10px !important",
    },
    // width: "300px !important",
    // height: "100px !important",
    padding: "3px 3px !important",
  },
  dialogCard: {
    // width : 500,
  },
  iframeClass: {
    // height: "important !important",
    // height: "100%",

    width: "100% !important",

    // width:500,
    // height : 'calc(100% - 100px)' ,
  },
  viewmoreColor: {
    backgroundColor: "#009651",
    color: "white",
    padding: "6px 12px",
    "&:hover": {
      backgroundColor: "#009651",
      opacity: "0.8",
    },
  },
}));

export default styles;
