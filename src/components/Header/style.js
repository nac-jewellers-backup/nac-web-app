import { makeStyles } from "@material-ui/core/styles";

export const styles = (theme) => ({
  headIcons: {
    color: "#110e82",
    fontFamily: "fontawesome",
    textAlign: "right",
    marginTop: "18px !important",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  searchcontainer: {
    padding: "4px",
    backgroundColor: "#110e82",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  searchcontainerplain: {
    padding: "4px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  searchcontainTop: {
    padding: "2px",
    backgroundColor: "#110e82",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginTop: "3px",
  },
  [theme.breakpoints.only("xs")]: {
    padding: "3px !important",
    backgroundColor: "#110e82",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  iconFafa: {
    color: "#110e82",
    marginLeft: "24px",
    letterSpacing: "4px",
    cursor: "pointer",
    alignItems: "center",
    fontSize: "20px",
    [theme.breakpoints.only("xs")]: {
      marginLeft: "6px",
      letterSpacing: "2px",
    },
  },
  iconFafaheart: {
    color: "#110e82",
    marginLeft: "24px",
    letterSpacing: "4px",
    cursor: "pointer",
    alignItems: "center",
    display: "flex",
    fontSize: "17px",
    fill: "#110e82",
    [theme.breakpoints.only("xs")]: {
      marginLeft: "6px",
      letterSpacing: "2px",
    },
  },
  callerNum: {
    fontSize: "13px",
    color: "#110e82",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    padding: " 0px 20px 0px 0px",
    fontWeight: 600,
    letterSpacing: 2,
  },
  headerNavbarList: {
    color: "#110e82",
    textAlign: "right",
  },
  menuListCursor: {
    cursor: "pointer",
    fontFamily: "notoSerif-regular",
    fontWeight: 600,
    color: "#6e6d72",
    "&:hover": {
      color: "#110e82",
      paddingBottom: "2px",
      borderBottom: "1px solid " + "#110e82",
    },
  },
  mobileNavIcon: {
    fill: "#110e82" + "!important",
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
    backgroundColor: theme.palette.background.fade,
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
  subtitle2Container: {
    backgroundColor: theme.palette.background.darkFade,
  },
});

export const useStyles = makeStyles((theme) => ({
  imgcont: {
    marginBottom: "15px",
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
      backgroundColor: "#110e82",
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
    letterSpacing: 2,

    cursor: "pointer",
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
  subtopic1: {
    padding: "10px 0px 10px 0px",
  },
  subtopic2: {
    padding: "10px 0px 10px 0px",
    borderTop: "1px solid",
    backgroundColor: theme.palette.background.darkFade,
  },
  drawer: {
    backgroundColor: "#2F348B",
  },
}));
