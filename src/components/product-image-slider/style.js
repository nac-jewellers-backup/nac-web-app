const styles = (theme) => ({
  root: {
    overflow: "hidden",
  },
  shortdis: {
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
    },
  },
  preButton: {
    opacity: "1!important",

    borderLeft: 0,
    background: "none",
    left: 0,

    fontSize: "20px",
    color: "#fff",
    textAlign: "center",
    position: "absolute",
    zIndex: 9,
    "& svg": {
      fontSize: "3rem",
    },

    [theme.breakpoints.only("xs")]: {
      top: "160px",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.up(330)]: {
      top: "175px !important",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.up(385)]: {
      top: "190px !important",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.up(438)]: {
      top: "200px !important",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.up(495)]: {
      top: "210px !important",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.up(723)]: {
      top: "258px !important",
      height: "30px",
      width: "28px",
    },
    [theme.breakpoints.up(840)]: {
      top: "300px !important",
      height: "30px",
      width: "28px",
    },
  },
  nextButton: {
    opacity: "1!important",

    "& svg": {
      fontSize: "3rem",
    },
    borderRight: 0,
    position: "absolute",
    zIndex: 9,
    float: "right",
    right: 0,
    top: "55%",
    [theme.breakpoints.only("xs")]: {
      top: "160px",
      height: "30px",
      width: "28px",
      right: 15,
    },
    [theme.breakpoints.up(330)]: {
      top: "175px !important",
      height: "30px",
      width: "28px",
      right: 15,
    },
    [theme.breakpoints.up(385)]: {
      top: "190px !important",
      height: "30px",
      width: "28px",
      right: 15,
    },
    [theme.breakpoints.up(438)]: {
      top: "200px !important",
      height: "30px",
      width: "28px",
      right: 15,
    },
    [theme.breakpoints.up(495)]: {
      top: "210px !important",
      height: "30px",
      width: "28px",
      right: 15,
    },
    [theme.breakpoints.up(723)]: {
      top: "258px !important",
      height: "30px",
      width: "28px",
      right: 15,
    },
    [theme.breakpoints.up(840)]: {
      top: "300px !important",
      height: "30px",
      width: "28px",
      right: 20,
    },

    [theme.breakpoints.up("lg")]: {
      top: "397px !important",
    },
    [theme.breakpoints.only("xl")]: {
      top: "653px !important",
    },
  },

  mainCarosel: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.only("xs")]: {
      height: "230px",
    },
  },
  testimonial: {
    [theme.breakpoints.down("sm")]: {
      boxShadow: "4px 4px 4px #bebfbf",
    },
  },
  mainImg: {
    position: "block",
    width: "100%",
    // height:"500px"
  },
  mainImgCarosel: {
    width: "100%",
    // height: "500px"
  },
  mainImgContainer: {
    position: "relative",
    width: "100%",
    // height:"500px"
  },
  width: {
    width: "100%",
  },
  collectionSection: {
    // "& svg":{
    fill: `#B78231`,
    // }
  },
  timelinegrid: {
    margin: "20px 0",
  },
  titilenews: {
    textAlign: "center",
    color: theme.palette.gold.main,
    textDecoration: "underline",
    paddingBottom: 20,
    fontWeight: "bold",
    fontSize: "1.4rem",
    "-webkit-text-underline-position": "under",
    "-ms-text-underline-position": "below",
    "text-underline-position": "under",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  minHeighttimerange: {
    paddingBottom: "0 !important",
    minHeight: "0 !important",
  },
  gridPadding: {
    paddingTop: "52px",
    [theme.breakpoints.down("lg")]: {
      paddingTop: "20px",
    },
  },
  contentPadding: {
    paddingTop: "20px",
    [theme.breakpoints.down("lg")]: {
      paddingTop: "0px",
    },
  },
  searchCheck: {
    // paddingRight: "12px",
    // paddingLeft: "12px",
    marginTop: "12px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "12px",
      paddingRight: "16px",
      paddingLeft: "16px",
    },
  },

  title: {
    marginTop: "0 !important",
    [theme.breakpoints.down("lg")]: {
      fontSize: "16px !important",
      fontWeight: "bold !important",
      color: "#2F348B",
      lineHeight: "20px",
      fontFamily: "notoSerif-regular !important",
      display: "inline-block",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px !important",
      marginTop: "10px",
      color: "#33346D",
      lineHeight: "26px",
      padding: 4,
      fontWeight: "bold !important",
    },
  },
  dis: {
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
    },
    //textAlign: "justify",
    color: theme.palette.text.secondary,

    lineHeight: "20px",
    textTransform: "capitalize",
  },
  disEllipises: {
    width: "80%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  detail: {
    fontSize: 12,
    color: theme.palette.gold.main,
    textAlign: "center",
    paddingTop: 20,
  },
  activeDetail: {
    "& .MuiAvatar-colorDefault": {
      backgroundColor: `${theme.palette.gold.main} !important`,
    },
  },
  disDescriptionPD: {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  viewReviewsTest: {
    fontSize: 12,
    color: "gray",
    textAlign: "left",
    position: "absolute",
    marginTop: "4px",
  },
  whishlistGrid: {
    paddingRight: 30,
    paddingLeft: 17,
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    //  display:'flex',
    //  alignItems:'center'
  },
  icon: {
    color: theme.palette.darkGray.main,
  },
  pricedetails: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
    // [theme.breakpoints.up('lg')]: {
    //     padding: "0 10px"
    // },
  },
  width: {
    [theme.breakpoints.down("xs")]: {
      padding: "0 10px",
      marginTop: -10,
      marginLeft: 10,
    },
    // [theme.breakpoints.up('lg')]: {
    //     padding: "0 10px"
    // },
  },
  // pricetabs
  modals: {
    [theme.breakpoints.down("xs")]: {
      background: "#fff !important",
      height: "100%",
      overflowY: "scroll",
      width: "60%",
      marginTop: "3%",
      marginBottom: "3%",
      marginLeft: "20%",
      outline: "none !important",
    },
    [theme.breakpoints.up("lg")]: {
      background: "#fff !important",
      height: "100%",
      //overflowY: "scroll",
      width: "60%",
      marginTop: "3%",
      marginBottom: "3%",
      marginLeft: "20%",
      outline: "none !important",
    },
  },
  modals_document: {
    [theme.breakpoints.down("xs")]: {
      background: "#fff !important",
      height: "95%",
      overflow: "none",
      width: "95%",
      margin: "auto",
      outline: "none !important",
    },
    [theme.breakpoints.up("lg")]: {
      background: "#fff !important",
      height: "90%",
      overflow: "none",
      width: "90%",
      margin: "auto",
      outline: "none !important",
    },
  },
  modals_video: {
    [theme.breakpoints.down("xs")]: {
      background: "#fff !important",
      // height: '90%',
      marginTop: "2%",
      overflowY: "scroll",
      width: "90%",
      margin: "auto",
      outline: "none !important",
    },
    [theme.breakpoints.up("lg")]: {
      background: "#fff !important",
      // height: '70%',
      marginTop: "2%",
      overflowY: "scroll",
      width: "70%",
      margin: "auto",
      outline: "none !important",
    },
  },
  pagination: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      // textAlign: "center"
    },
  },

  normalfonts_tabs: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      marginLeft: "4px",
      // marginRight: "8px"
    },
    [theme.breakpoints.up("lg")]: {
      textAlign: "center",
      marginLeft: "8px",
      marginRight: "8px",
    },
  },
  tabs_values_font: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "8px !important",
      marginTop: "5px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "10px !important",
      marginTop: "5px",
    },
  },
  tabsheadcolor: {
    color: theme.palette.secondary.main,
  },
  tabsRingBckg: {
    background: theme.palette.primary.main,
  },

  TypoListed: {
    fontSize: "0.8rem",
    paddingTop: "2px",
  },
  normalfonts: {
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      fontWeight: "bold",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px",
      fontWeight: "bold",
    },
  },
  normalcolorback: {
    background: theme.palette.text.primary,
  },
  fontwhite: {
    color: theme.palette.overallButoon.contrastText,
  },
  backgwhite: {
    background: theme.palette.overallButoon.contrastText,
  },
  fontgray: {
    color: theme.palette.text.disabled,
    textTransform: "capitalize",
  },
  // buynow
  buttons: {
    background: theme.palette.primary.main,
    color: theme.palette.overallButoon.contrastText,
    borderRadius: "unset !important",
    boxShadow: "4px 5px 6px #BEBFBF !important",
  },
  AddtoCartbuttons: {
    background: "#2F348B ",
    color: theme.palette.overallButoon.contrastText,
    borderRadius: "unset !important",
    boxShadow: "4px 5px 6px #BEBFBF !important",
    "&:hover, &:focus": {
      background: "#2F348B  !important",
    },
    height: "36px !important",
  },

  backgsecondary: {
    background: theme.palette.secondary.main,
  },
  shadow: {
    boxShadow:
      "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
  },
  expansionHere: {
    borderBottomLeftRadius: "unset !important",
    borderBottomRightRadius: "unset !important",
    "& .MuiSvgIcon-root": {
      fill: `${theme.palette.secondary.main} !important`,
    },
  },
  cerfificates: {
    "& .MuiSvgIcon-root": {
      fill: `${theme.palette.secondary.main} !important`,
    },
  },
  ratingFormText: {
    boxShadow: "6px 7px 6px #bebfbf",
    "& .MuiOutlinedInput-notchedOutline": {
      borderRadius: "unset !important",
      borderColor: "gray",
    },
    [theme.breakpoints.down("sm")]: {
      boxShadow: "6px 7px 6px #bebfbf",
      "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "0px !important",
        borderColor: "gray",
      },
    },
  },
  ratingformgrid: {
    [theme.breakpoints.down("sm")]: {
      boxShadow: "6px 7px 6px #bebfbf",
      border: "1px solid #ccc",
    },
  },
  colorsmallscreen: {
    [theme.breakpoints.down("sm")]: {
      color: "gray",
    },
  },
  [theme.breakpoints.up("md")]: {
    shadow: {
      boxShadow: "none",
    },
  },
  collectionSection: {
    //     "& .slick-prev":{
    //         left:'-500px !important'
    //     },
    //     "& .slick-next":{
    //       right:'-500px !important'
    //   }
  },

  buynowItem: {
    paddingBottom: "15px",
  },
});
export default styles;
