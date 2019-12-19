// import '../../fonts/font.css'
import { makeStyles } from '@material-ui/core/styles';

export const styles = theme => ({
  headIcons: {
    color: theme.palette.secondary.dark,
    fontFamily: "fontawesome",
    textAlign: 'right',
    fontSize: '20px !important',
    marginTop: '18px !important',
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  searchcontainer: {
    padding: "4px",
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },
  searchcontainTop: {
    padding: "2px",
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },
  [theme.breakpoints.only('xs')]: {
    padding: "3px !important",
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },
  iconFafa: {
    color: theme.palette.secondary.dark,
    marginLeft: "24px",
    letterSpacing: "4px",
    cursor: 'pointer',
    alignItems: "center",
    display: "flex",
    fontSize: "20px",
    [theme.breakpoints.only('xs')]: {
      marginLeft: "6px",
      letterSpacing: "2px",
    },
  },
  iconFafaheart: {
    color: theme.palette.secondary.dark,
    marginLeft: "24px",
    letterSpacing: "4px",
    cursor: 'pointer',
    alignItems: "center",
    display: "flex",
    fontSize: "17px",
    [theme.breakpoints.only('xs')]: {
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
    letterSpacing: 2
  },
  headerNavbarList: {
    color: theme.palette.secondary.dark,
    textAlign: 'right'
  },
  menuListCursor: {
    cursor: 'pointer',
    fontFamily: 'Roboto',
    fontWeight: 600,
    color: "#6e6d72",
    '&:hover': {
      color: theme.palette.secondary.dark,
      paddingBottom: "2px",
      borderBottom: "1px solid " + theme.palette.secondary.dark,
    }
  },
  mobileNavIcon: {
    fill: theme.palette.secondary.dark + "!important",
  },
  menuheader: {
    width: "230px !important",
    position: "sticky",
    top: "0px",
    zIndex: 10000
  },
  drawerPaper: {
    maxHeight: "100% !important",
    height: "max-content",
    backgroundColor: theme.palette.background.fade,
  },
  iconbuttons: {
    position: "fixed",
    right: "58px",
    top: "-9px"

  },
  subtitles: {
    color: theme.palette.background.darkFade,
    textAlign: "left",
    width: "100%",
    fontSize: "11px",
    letterSpacing: "1px",
    fontFamily: "Roboto",
  },
  subtitleContainer: {
    backgroundColor: "#fff !important",
    '&:hover': {
      backgroundColor: "#fff !important",
    }
  },
  subtitle2Container: {
    backgroundColor: theme.palette.background.darkFade,

  },

});


export const useStyles = makeStyles(theme => ({
  paperdiv: {
    position: 'absolute',
    width: 'fit-content',

  },
  root: {
    width: '100%',
  },
  mouseOverPopover: {
    zIndex: 1000,
    top: '17px !important',
    backgroundColor: theme.palette.background.fade,
    color: 'white',
    '& span': {
      fontFamily: 'Roboto',
      letterSpacing: '1px'
    },
    '& nav': {
      padding: '0px !important'
    },
    '& li:hover': {
      backgroundColor: theme.palette.secondary.dark,

    }
  },
  paperdivsub: {
    position: 'absolute',
    width: 'fit-content',

  },
  rootsub: {
    width: '100%',
  },
  mouseOverPopoversub: {
    zIndex: 1000,
    top: '0px !important',
    backgroundColor: "#fff",
    color: theme.palette.background.fade,
    '& span': {
      fontFamily: 'Roboto',
      letterSpacing: '1px'
    },
    '& nav': {
      padding: '0px !important'
    },
    '& li:hover': {
      backgroundColor: "#fff",

    }
  },
  listedItems: {
    padding: "0px",
    fontSize: "0.7rem !important"
  },
  listedItemsub: {
    padding: "0px",
    fontSize: "0.7rem !important",
  },
  listedItemsvalue: {
    padding: "2px 16px 2px 16px",
    fontSize: "0.7rem !important",
    letterSpacing: 2
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

// export default {styles, useStyles};