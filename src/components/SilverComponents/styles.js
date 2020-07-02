// import '../../fonts/font.css'
import { makeStyles } from "@material-ui/core/styles";

export const styles = (theme) => ({
  headIcons: {
    color: theme.palette.secondary.dark,
    fontFamily: "fontawesome",
    textAlign: "right",
    // fontSize: '20px !important',
    marginTop: "18px !important",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  searchcontainer: {
    padding: "3px 2px 2px 2px",
    marginTop: "-1px",
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  goldCurrentRate: {
    display: "flex",
    color: "black",
    justifyContent: "flex-end",
    "& .MuiInput-underline": {
      // "& ::hover":{
      // "&::not(.Mui-disabled)":{
      "&::before": {
        borderBottom: "none !important",
      },
      "&::after": {
        borderBottom: "none !important",
      },
      // }
      // }
    },
    "& .MuiSelect-selectMenu": {
      fontSize: 13,
      color: "white",
      padding: "3px 0px",
    },
    // .MuiInput-underline:hover:not(.Mui-disabled):before
  },
  goldRateformControl: {
    width: "100%",
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: theme.palette.gold.main,
    boxShadow: "6px 7px 6px #bebfbf",
    color: "white",
    "& .MuiNativeSelect-select:not([multiple])": {
      "& option": {
        color: "gold",
      },
    },
    "& .MuiInputBase-input": {
      color: "white",
      fontSize: 13,
      padding: "6px 7px 7px",
    },
  },
  goldRateformControlSmallScreen: {
      "& .MuiOutlinedInput-input": {
        height: "20px !important",
        padding: "0px !important",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        color:'white !important'
      },
    width: "100%",
    margin: '8px 0px',
    minWidth: 120,
    backgroundColor: theme.palette.gold.main,
    boxShadow: "6px 7px 6px #bebfbf",
    color: "white",
    "& .MuiNativeSelect-select:not([multiple])": {
      "& option": {
        color: "gold",
      },
    },
    "& .MuiInputBase-input": {
      color: "white",
      fontSize: 13,
      padding: "6px 7px 7px",
    },
  },
  menunac: {
    backgroundColor: theme.palette.secondary.main,
  },
  menustylori: {
    backgroundColor: theme.palette.stylori.pinkMain,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.3rem",
  },
  searchcontainerplain: {
    padding: "4px",
    // backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  searchcontainTop: {
    padding: "2px",
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginTop: "3px",
  },
  [theme.breakpoints.only("xs")]: {
    padding: "3px !important",
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  iconFafa: {
    color: theme.palette.secondary.dark,
    marginLeft: "24px",
    letterSpacing: "4px",
    cursor: "pointer",
    alignItems: "center",
    // display: "flex",
    fontSize: "20px",
    [theme.breakpoints.only("xs")]: {
      marginLeft: "6px",
      letterSpacing: "2px",
    },
  },
  iconFafaheart: {
    color: theme.palette.secondary.dark,
    marginLeft: "24px",
    letterSpacing: "4px",
    cursor: "pointer",
    alignItems: "center",
    display: "flex",
    fontSize: "17px",
    fill: "#d51f63",
    [theme.breakpoints.only("xs")]: {
      marginLeft: "6px",
      letterSpacing: "2px",
    },
  },
  callerNum: {
    fontSize: "13px",
    color: theme.palette.secondary.dark,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    padding: " 0px 20px 0px 0px",
    fontWeight: 600,
    letterSpacing: 2,
  },
  headerNavbarList: {
    color: "white",
    textAlign: "left",
  },
  menuListCursor: {
    cursor: "pointer",
    fontFamily: "notoSerif-regular",
    fontWeight: 600,
    color: "white",
    // borderBottom: "1px solid #fff",
    "&:hover": {
      color: "white",
      // paddingBottom: "2px",
      // borderBottom: "1px solid " + theme.palette.secondary.dark,
    },
  },
  seletectedMenu: {
    color: theme.palette.secondary.dark,
    // paddingBottom: "2px",
    cursor: "pointer",
    fontFamily: "notoSerif-regular",
    fontWeight: 600,
    borderBottom: "1px solid #fff",
    // borderBottom: "1px solid " + theme.palette.secondary.dark,
    "&:hover": {
      borderBottom: "1px solid " + theme.palette.secondary.dark,
    },
  },
  mobileNavIcon: {
    color: theme.palette.secondary.dark,
    fill: theme.palette.secondary.dark + "!important",
  },
  menuheader: {
    width: "230px !important",
    position: "sticky",
    top: "0px", 
    zIndex: 10000,
  },
  drawerPaper: {
    maxHeight: "100% !important",
    height: "max-content",
    backgroundColor: theme.palette.secondary.main,
  },
  iconbuttons: {
    position: "fixed",
    left: "228px",
    top: "-9px",
  },
  subtitles: {
    color: theme.palette.background.darkFade,
    textAlign: "left",
    width: "100%",
    fontSize: "11px",
    letterSpacing: "1px",
    fontFamily: "notoSerif-regular",
  },
  subtitleContainer: {
    backgroundColor: "#fff !important",
    "&:hover": {
      backgroundColor: "#fff !important",
    },
  },
  subtitleContainersubmenu1:{
    color: `${theme.palette.secondary.main} !important`,
  },
  subtitle2Container: {
    backgroundColor: theme.palette.gold.main,
  },
});

export const useStyles = makeStyles((theme) => ({
  imgcont: {
    // marginBottom: "15px",
    "&:hover": {
      boxShadow:
        " 0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important",
    },
  },
  paperdiv: {
    position: "absolute",
    width: "fit-content",
  },
  root: {
    width: "100%",
  },
  mouseOverPopover: {
    zIndex: 1000,
    top: "4px !important",
    backgroundColor: theme.palette.background.fade,
    color: "white",
    "& span": {
      fontFamily: "notoSerif-regular",
      letterSpacing: "1px",
    },
    "& nav": {
      padding: "0px !important",
    },
    "& li:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  paperdivsub: {
    position: "absolute",
    width: "fit-content",
  },
  rootsub: {
    width: "100%",
  },
  mouseOverPopoversub: {
    zIndex: 1000,
    top: "0px !important",
    backgroundColor: "#fff",
    color: theme.palette.background.fade,
    cursor: "pointer",
    "& span": {
      fontFamily: "notoSerif-regular",
      letterSpacing: "1px",
      cursor: "pointer",
    },
    "& nav": {
      padding: "0px !important",
      cursor: "pointer",
    },
    "& li:hover": {
      backgroundColor: "#fff",
    },
  },
  listedItems: {
    padding: "0px",
    fontSize: "0.7rem !important",
    cursor: "pointer",
  },
  listedItemsub: {
    padding: "0px",
    fontSize: "0.7rem !important",
    "&:hover": {
      backgroundColor: "#000",
    },
  },
  listedItemsvalue: {
    padding: "2px 16px 2px 16px",
    fontSize: "0.7rem !important",
    letterSpacing: 1,
    cursor: "pointer",
  },
  listedItemstitle: {
    padding: "2px 0px 2px 0px",
    fontSize: "0.6rem !important",
    letterSpacing: 1,
    margin: "15px 19px 23px 29px",
    borderBottom: "1px solid #6e6d72",
  },
  listedItemstitlemultiplesection: {
    padding: "2px 0px 2px 0px",
    fontSize: "0.6rem !important",
    letterSpacing: 2,
    margin: "15px 0px 23px 0px",
    borderBottom: "1px solid #6e6d72",
  },
  gridmultiplesection: {
    padding: "0px 5px",
  },
  checkbox: {
    padding: "3px !important",
    fontSize: "0.7rem  !important",
    "& .MuiFormControlLabel-root": {
      marginRight: "none",
    },

    "& svg": {
      fill: "#6e6d72 !important",
      fontSize: "1rem",
    },
  },
  listedItemsvalue2: {
    padding: "2px 16px 2px 16px",
    fontSize: "0.7rem !important",
    letterSpacing: 2,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.background.darkFade,
      color: "#fff",
    },
  },
  secondSection: {
    paddingBottom: 10,
    "& .MuiTypography-body1": {
      fontSize: "0.7rem !important",
    },
    "& .MuiFormControlLabel-root": {
      marginLeft: "0px !important",
      marginRight: "0px !important",
    },
  },
  subtopic1: {
    padding: "10px 0px 10px 0px",
  },
  subtopic2: {
    padding: "10px 0px 10px 0px",
    borderTop: "1px solid",
    backgroundColor: theme.palette.background.darkFade,
  },
  drawer: {
    backgroundColor: "#394578",
  },
}));
