// import { makeStyles } from "@material-ui/core/styles";
// const styles = makeStyles(theme => ({
//     mainInterface:{
//         height:"90px",
//         transition: "all 0.6s ease 0s",
//     // margin-top: 0px;
//     width: "100%",
//     // display: flex;
//     // z-index: 1100;
//     // box-sizing: border-box;
//     // flex-shrink: 0;
//     // flex-direction: column;
//     position: "fixed",
//     top: "0px",
//     zIndex: "1100",
//     backgroundColor: "white",
//     },
//     innerHeader:{
//         width: "100%",
//     display: "flex",
//     zIndex: "1100",
//     boxSizing: "border-box",
//     flexShrink: "0",
//     flexDirection: "column",
//     top: "0",
//     left: "auto",
//     right: "0",
//     position: "sticky",
//     textAlign:"center",

//     },
//     conWidth:{
//         width:"100%",
//         textAlign:"center",
//         borderLeft:"auto",
//         borderRight:"auto",
//         paddingLeft:"16px",
//         paddingRight:"16px",
//         [theme.breakpoints.only('md')]:{
//             maxWidth:"960px",
//             paddingLeft:"32px",
//             paddingRight:"32px",
//         },
//         [theme.breakpoints.only('sm')]:{
//             maxWidth:"960px",
//             paddingLeft:"24px",
//             paddingRight:"24px",
//         },
//         [theme.breakpoints.only('lg')]:{
//             maxWidth:"1280px",
          
//         },

//     },
//     container:{
//         width:"100%",
//         display:"flex",
//         flexWrap:"wrap",
//     },
//     innerContainer:{
//         width:"100%",
//         display:"flex",
//         flexWrap:"wrap",
//         height:"70px",
//     },
//     imgCon:{
//         cursor:"pointer",
//     },

//     mainImg:{
//         width:"80%",
//         transition:"height 0.2s ease 0s"
//     }
// }))
// export default styles;


// import '../../fonts/font.css'
import { makeStyles } from '@material-ui/core/styles';

export const styles = theme => ({
  headIcons: {
    color: "#110e82",
    fontFamily: "fontawesome",
    textAlign: 'right',
    // fontSize: '20px !important',
    marginTop: '18px !important',
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
    alignContent: "center"
  },
  searchcontainerplain: {
    padding: "4px",
    // backgroundColor: "#110e82",
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },
  searchcontainTop: {
    padding: "2px",
    backgroundColor: "#110e82",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginTop: "3px",
  },
  [theme.breakpoints.only('xs')]: {
    padding: "3px !important",
    backgroundColor: "#110e82",
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },
  iconFafa: {
    color: "#110e82",
    marginLeft: "24px",
    letterSpacing: "4px",
    cursor: 'pointer',
    alignItems: "center",
    // display: "flex",
    fontSize: "20px",
    [theme.breakpoints.only('xs')]: {
      marginLeft: "6px",
      letterSpacing: "2px",
    },
  },
  iconFafaheart: {
    color: "#110e82",
    marginLeft: "24px",
    letterSpacing: "4px",
    cursor: 'pointer',
    alignItems: "center",
    display: "flex",
    fontSize: "17px",
    fill: "#110e82",
    [theme.breakpoints.only('xs')]: {
      marginLeft: "6px",
      letterSpacing: "2px"
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
    letterSpacing: 2
  },
  headerNavbarList: {
    color: "#110e82",
    textAlign: 'right'
  },
  menuListCursor: {
    cursor: 'pointer',
    fontFamily: 'Roboto',
    fontWeight: 600,
    color: "#6e6d72",
    '&:hover': {
      color: "#110e82",
      paddingBottom: "2px",
      borderBottom: "1px solid " + "#110e82",
    }
  },
  mobileNavIcon: {
    fill: "#110e82" + "!important",
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
    left: "228px",
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
  imgcont: {
    marginBottom: "15px",
    '&:hover': {
      boxShadow: " 0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important",
    }
  },
  paperdiv: {
    position: 'absolute',
    width: 'fit-content',
  },
  root: {
    width: '100%',
  },
  mouseOverPopover: {
    zIndex: 1000,
    // top: '17px !important',
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
      backgroundColor: "#110e82",
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
    cursor: "pointer",
    '& span': {
      fontFamily: 'Roboto',
      letterSpacing: '1px',
      cursor: "pointer",
    },
    '& nav': {
      padding: '0px !important',
      cursor: "pointer",
    },
    '& li:hover': {
      backgroundColor: "#fff",
    }
  },
  listedItems: {
    padding: "0px",
    fontSize: "0.7rem !important",
    cursor:"pointer"
  },
  listedItemsub: {
    padding: "0px",
    fontSize: "0.7rem !important",
    '&:hover': {
      backgroundColor: "#000"
    }
  },
  listedItemsvalue: {
    padding: "2px 16px 2px 16px",
    fontSize: "0.7rem !important",
    letterSpacing: 2,
    cursor:"pointer"
  },
  listedItemsvalue2: {
    padding: "2px 16px 2px 16px",
    fontSize: "0.7rem !important",
    letterSpacing: 2,
    cursor: "pointer",
    '&:hover': {
      backgroundColor: theme.palette.background.darkFade,
      color: "#fff"
    }
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
