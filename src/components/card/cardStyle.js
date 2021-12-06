import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  titlePage: {
    fontSize: "49px",
    fontFamily: "notoSerif-regular",
    fontWeight: "500 !important",
    lineHeight: "1.1",
    color: "#B2832C",
    margin: "21px 0px 10.5px 0px",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center", 
    color: "gray",
    fontSize: "20px",
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
    cursor: "pointer",
    height: "100%",
    objectFit:"cover"
  },
  cardName: {
    fontSize: "18px",
    color: "#1e1e1e",
    fontFamily: "notoSerif-regular",
    lineHeight: "1.42857",
    padding: "20px 0px 8px 15px",
  },
  cardNamead: {
    fontSize: "20.92px",
    color: "gray",
    fontFamily: "notoSerif-medium",
    lineHeight: "1.42857",
    padding: "20px 0px 8px 15px",
    fontWeight: "bold",
    textAlign:"center"
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
  cardLocationad: {
    fontSize: "16px",
    
    color: "#969696",
    fontFamily: "notoSerif-regular",
    lineHeight: "1.42857",
    padding: "0px 0px 30px 15px",
    textAlign: "center",
    marginTop: "-10px"
    
    
  },
  cardfooter: {
    backgroundColor:"#F4F4F4"

  },
  cardLocationadview: {
    fontSize: "18px",
    color: "#969696",
    fontFamily: "notoSerif-regular",
    marginTop: "-15px",
    marginBottom:"15px",
    textAlign: "center",
   
    textTransform:"capitalize"
    
    
  },
  card: {
    // borderRadius: "0px !important",
    // border: "1px solid #dbdbdb !important",
    boxShadow:"4px 4px 4px #a5a4a5"
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
   
    color: "white",
    padding: "6px 12px",
  
  },
}));

export default styles;
