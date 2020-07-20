import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  leftContent: {
    marginBottom: "25px",
    fontSize: "15px",
    lineHeight: "1.428",
    color: "#5d5d5d",
    // fontFamily:"Source Sans Pro",
    width: "100%",
    // fontWeight:"400"
    "&:hover": {
      color: "#337ab7 !important",
    },
    "&:active:router": {
      textDecoration: "underline",
    },
  },
  leftInnerContent: {
    // marginBottom: "25px",
    fontSize: "6px",
    lineHeight: "1.427",
    color: "#5d5d5d",
    // fontFamily:"Source Sans Pro",
    width: "100%",
    // fontWeight:"400"
    "&:hover": {
      color: "#337ab7 !important",
    },
    "&:active:router": {
      textDecoration: "underline",
    },
  },
  roots: {
    width: "100%",
    maxWidth: 360,
    paddingBottom: 0,
    paddingTop: 0,
    backgroundColor: theme.palette.background.paper,
    // .MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover
    "& .Mui-selected": {
      backgroundColor: "#20205a !important",
      color: "white",
      "&::hover": {
        backgroundColor: "#20205a !important",
        color: "white",
      },
      "& .MuiSvgIcon-root": {
        fill: "white !important",
      },
      "& a": {
        backgroundColor: "#20205a !important",
        color: "white",
      },
      leftInnerContent: {
        color: "#20205a !important",
      },
    },
  },
  nested: {
    // paddingLeft: theme.spacing(4),
    padding: "0px 0px 0px 20px",
  },
  leftContent_b: {
    background: "#337ab7 !important",
  },
  imgGrid: {
    display: "flex",
    paddingTop: "30px",
    [theme.breakpoints.up("md")]: {
      marginLeft: "0px",
      marginRight: "0px",
      display: "flex",
    },
  },
  paddingGrid: {
    padding: "0px",

    [theme.breakpoints.only("xs")]: {
      padding: "0px",
    },
  },

  root: {
    width: "100%",
  },

  details: {
    color: "#1c1c1c",
    borderTop: "0px",
    fontWeight: 500,
    fontSize: "22px",
    padding: "55px 0px 12px 0px",
    marginTop: "-40px",
  },
  icon: {
    height: "10px",
    width: "10px",
    marginRight: "3px",
  },
  listeditems: {
    "&:hover": {
      backgroundColor: "#fff !important",
    },
  },
  shadow: {
    boxShadow: "0 0 5px #888 !important;",
  },
  link: {
    color: "#394578",
    textDecoration: "none",
    cursor: "pointer !important",
  },
  list: {
    "& .MuiSvgIcon-root": {
      fill: "#394578 !important",
      cursor: "pointer !important",
    },
  },
  sublist: {
    "& .Mui-selected": {
      color: "#20205a !important",
      background: "none !important",
      "&::hover": {
        color: "#20205a !important",
        background: "none !important",
      },
      "& a": {
        color: "#20205a !important",
        background: "none !important",
      },
    },
  },
  leftInnerContentselected: {
    // marginBottom: "25px",

    fontSize: "15px",
    fontWeight: "bold !important",
    textDecoration: "underline",
    lineHeight: "1.427",
    color: "#20205a !important",
    // fontFamily:"Source Sans Pro",
    width: "100%",
    // fontWeight:"400"
  },
}));
export default styles;
