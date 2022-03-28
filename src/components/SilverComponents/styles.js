import { makeStyles } from "@material-ui/core/styles";

export const styles = (theme) => ({
  customTextField: { fontSize: "10px !important" },
  currencyStyle: {
    fontSize: "10px",
    padding: "0px !important",
    '&&[class*="MuiOutlinedInput-root"] $input': {
      padding: 0,
    },
    MuiAutocomplete: {
      padding: "0px !important",
    },
  },
  smallFont: {
    fontSize: "14px",
    color: "#fff",
    borderColor: "#fff",
  },
  headIcons: {
    color: theme.palette.secondary.dark,
    fontFamily: "fontawesome",
    textAlign: "right",
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
    alignItems: "center",
    justifyContent: "flex-end",
    "& .MuiInput-underline": {
      "&::before": {
        borderBottom: "none !important",
      },
      "&::after": {
        borderBottom: "none !important",
      },
    },
    "& .MuiSelect-selectMenu": {
      fontSize: 13,
      color: "white",
      padding: "3px 0px",
    },
  },
  goldRateformControl: {
    width: "100%",
    margin: theme.spacing(1),
    backgroundColor: theme.palette.gold.main,
    boxShadow: "6px 7px 6px #bebfbf",
    color: "white",
    "& .MuiNativeSelect-select:not([multiple])": {
      "& option": {
        color: "white",
        backgroundColor: theme.palette.gold.main,
      },
    },
    "& .MuiInputBase-input": {
      color: "white",
      fontSize: 14,
      padding: "11px",
    },
    "& .MuiNativeSelect-icon": {
      color: "white",
    },
  },
  goldRateformControlSmallScreen: {
    "& .MuiSelect-icon": {
      color: "white",
    },
    "& .MuiOutlinedInput-input": {
      height: "20px !important",
      padding: "0px !important",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      color: "white !important",
    },
    width: "100%",
    margin: "8px 0px",
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
  styloriEditing: {
    backgroundColor: theme.palette.stylori.pinkMain,
    height: "40px",
  },
  menustylori: {
    display: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.3rem",
    textAlign: "center",
    height: "40px",
  },
  searchcontainerplain: {
    padding: "4px",
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
    fill: "#2F348B",
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
    fontWeight: 500,
    color: "white",
    fontSize: "12px",
    "&:hover": {
      color: "#b78231",
    },
    "&:active": {
      color: "#b78231",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "10px !important",
    },
  },
  seletectedMenu: {
    color: theme.palette.secondary.dark,
    cursor: "pointer",
    fontFamily: "notoSerif-regular",
    fontWeight: 600,
    borderBottom: "1px solid #fff",
    "&:hover": {
      borderBottom: "1px solid " + theme.palette.secondary.dark,
    },
  },
  mobileNavIcon: {
    color: theme.palette.secondary.dark,
    fill: theme.palette.secondary.dark + "!important",
  },
  menuheader: {
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    position: "sticky",
    top: "0px",
    zIndex: 10000,
  },
  headertext: {
    color: "#fff",
    fontSize: "16px",
    margin: "auto",
    paddingRight: "20px",
    letterSpacing: 3,
  },
  drawerPaper: {
    width: "100%",
    maxHeight: "100% !important",
    backgroundColor: "#fff",
  },
  sideNavListing: {
    padding: "0px",
  },
  drawerlisttext: {
    backgroundColor: "#b78231 !important",
    color: "#fff",
    "& .drawer-arrow": {
      color: "#fff",
    },
    "& .list-items1": {
      color: "#fff",
    },
  },
  iconbuttons: {
    color: "white",
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
    color: "#33346d",
    "&:hover": {
      backgroundColor: "#fff !important",
    },
  },
  subtitleContainersubmenu1: {
    color: `${theme.palette.secondary.main} !important`,
  },
  subtitle2Container: {
    backgroundColor: theme.palette.gold.main,
  },
  imgdiv: {
    display: "flex",
    flexWrap: "wrap",
  },
  imgsubdiv: {
    margin: "auto",
  },
  griddiv: {
    textAlign: "center",
  },
  griddivstone: {
    textAlign: "center",
  },
  iconstyle: {
    display: "flex",
    margin: "auto",
  },
  ptext: {
    "&:hover": {
      width: "fit-content",
      borderBottom: "1px solid #B2832C",
    },
  },
  metaldiv: {
    padding: "0px 16px",
  },
  Chip: {
    padding: "4px 0px",
    borderRadius: "0px",
    width: "130px",
    color: "#545465 ",

    fontSize: "11px",

    marginTop: "auto",
  },
  pricediv: {
    margin: "0px 0px 15px 0px",
  },
  optiontext: {
    fontSize: "13px",
    color: theme.palette.background.darkFade,
    "&:hover": {
      width: "fit-content",
      borderBottom: "1px solid #B2832C",
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  imgcont: {
    "&:hover": {
      "& $imgtitle": {
        borderBottom: "1px solid #B2832C",
      },
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
    backgroundColor: "white",
    fontSize: "12px",

    "& span": {
      fontFamily: "notoSerif-regular",
      letterSpacing: "1px",
    },
    "& nav": {
      padding: "0px !important",
    },
    "& svg": {
      fill: `${theme.palette.secondary.main} !important`,
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
    position: "fixed !important",
    width: "-webkit-fill-available",
    top: "0px !important",
    left: "-8.6px !important",
    backgroundColor: "#33346d",
    color: "#fff",
    cursor: "pointer",
    transform: "translate3d(9px, 137px, 0px) !important",
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
      backgroundColor: "#33346d",
    },
  },
  mouseOverPopoversubscroll: {
    zIndex: 1000,
    position: "fixed !important",
    width: "-webkit-fill-available",
    top: "-100px !important",
    left: "-10px !important",
    backgroundColor: "#33346d",
    color: "#fff",
    cursor: "pointer",
    transform: "translate3d(9px, 137px, 0px) !important",
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
      backgroundColor: "#33346d",
    },
  },
  listedItems: {
    padding: "0px",
    fontSize: "12rem !important",
    cursor: "pointer",
  },
  listedItemsub: {
    padding: "0px",
    fontSize: "12rem !important",
    "&:hover": {
      backgroundColor: "#33346d",
    },
  },

  listedItemstitle: {
    padding: "2px 0px 8px 0px",
    fontSize: "13px !important",
    letterSpacing: "0px !important",
    margin: "15px 19px 23px 29px",
    borderBottom: "1px solid #2F348B",
    color: "#2F348B",
    "&:hover": {
      borderBottom: "1px solid #B78231",
    },
  },
  phovertitile: {
    padding: "2px 0px 8px 0px",
    fontSize: "13px !important",
    letterSpacing: "0 !important",
    margin: "15px 19px 23px 29px",
    color: "#2F348B",
    "&:hover": {
      borderBottom: "1px solid #B78231",
    },
  },
  shoptitle: {
    padding: "2px 0px 8px 0px",
    fontSize: "13px !important",
    letterSpacing: "0 !important",
    margin: "15px 19px 23px 29px",
    borderBottom: "1px solid #2F348B",
    color: "#2F348B",
  },
  listedItemstitlemultiplesection: {
    padding: "2px 0px 8px 0px",
    fontSize: "13px !important",
    letterSpacing: "0 !important",
    margin: "15px 0px 23px 0px",
    borderBottom: "1px solid #2F348B",
    color: "#2F348B",
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
    fontSize: "12px !important",
    letterSpacing: 2,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#33346d",
      color: "#fff",
    },
  },

  secondSection: {
    paddingBottom: 10,
    "& .MuiTypography-body1": {
      fontSize: "14.4px !important",
      color: "#6E6F72",
    },
    "& .MuiFormControlLabel-root": {
      marginLeft: "0px !important",
      marginRight: "0px !important",
    },
  },
  paperdiv: {
    padding: "10px 0px 10px 0px",
  },
  subtopic2: {
    padding: "10px 0px 10px 0px",
    borderTop: "1px solid",
    backgroundColor: "#33346d",
  },
  drawer: {
    backgroundColor: "#2F348B",
  },
  AppbarMobilePadding: {
    paddingTop: "33px",
  },
  subtopic1: {
    padding: "10px 0px 10px 0px",
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
      backgroundColor: "#33346d",
    },
  },

  listedItemsvalue2: {
    padding: "2px 16px 2px 16px",
    fontSize: "12rem !important",
    letterSpacing: 2,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#33346d",
      color: "#fff",
    },
  },
  mouseOverPopoverfiltersselected: {},

  mouseOverPopoverfilterslist: {
    fontSize: "12px !important",
    paddingTop: "0px !important",
    paddingBottom: "0px !important",
  },
  filtersListtopfilters: {
    "& span": {
      letterSpacing: 2,
    },
  },
  filtersList: {
    "& span": {
      letterSpacing: 3,
    },
  },
  sortSilver: {
    "& svg": {
      fontSize: "1rem",
    },
  },
  subtopic2: {
    padding: "10px 0px 10px 0px",
    borderTop: "1px solid",
    backgroundColor: "#33346d",
  },
  listedItemsub: {
    padding: "0px",
    fontSize: "0.7rem !important",
    "&:hover": {
      backgroundColor: "#33346d !important",
    },
  },
  listedItemsvalue: {
    padding: "2px 16px 2px 16px",
    fontSize: "12px !important",
    color: "#6E6F72",
    cursor: "pointer",
    margin: "auto",
    textAlign: "center",
    "&:hover": {
      borderBottom: "1px solid #B78231",
    },
  },
  imgtitle: {
    padding: "2px 16px 2px 16px",
    fontSize: "14.4px !important",
    color: "#6E6F72",
    cursor: "pointer",
  },
  mouseOverPopoverfilters: {
    maxHeight: "calc(100% - 250px)",
    maxWidth: "220px",
    overflowY: "auto",
    "& .MuiRadio-root": {
      padding: "2px 6px !important",
    },
    radioBtnsort: {
      color: "red",
    },
    fontSize: "12px",
    zIndex: 1000,
    top: "4px !important",
    backgroundColor: "white",
    color: theme.palette.secondary.main,
    fontSize: "18px",
    "& span": {
      fontFamily: "Roboto",
      letterSpacing: "1px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      "-webkit-line-clamp": 1,
      "-webkit-box-orient": "vertical",
    },
    "& nav": {
      padding: "0px !important",
      minWidth: 150,
      [theme.breakpoints.only("md")]: {
        minWidth: 100,
      },
    },
    "& li:hover": {
      backgroundColor: "#33346d !important",
      color: "white",
    },
  },
}));
