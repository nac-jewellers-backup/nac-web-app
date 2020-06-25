import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({

container:{
    // width:"1170px",
    // margin:"auto",
    paddingTop:"25px",
    borderBottom:"1px solid #ddd",
    [theme.breakpoints.only('lg')]:{
        padding:"0px 160px "
    },
    [theme.breakpoints.only('md')]:{
        padding:"0px 40px "
    },
    [theme.breakpoints.only('xl')]:{
        padding:"0px 300px ",
        
    },
},
preButtonsPPP: {
    width: "35px!important",
    height: "42px!important",
    backgroundRepeat: "no-repeat !important",
    opacity: "1!important",
    backgroundImage: "url(https://alpha-assets.stylori.com/images/static/slider_icon.png)!important",
    backgroundPosition: "-27px -229px!important",
    // background-color: #fff!important;
    // border: 1px solid #ccc;
    borderLeft: 0,
    background: "none",
    left: 0,
    // top:"55% !important",
    marginTop: "-30px",
    fontSize: "20px",
    color: "#fff",
    textAlign: "center",
    position: "absolute",
    zIndex: 9,
    [theme.breakpoints.only('xs')]: {
        marginTop: "69px !important",
        marginLeft:"30px",
      height: "35px !important",
      width: "28px !important",
    },
    [theme.breakpoints.only('sm')]: {
        marginTop: "93px !important",
        marginLeft:"30px",
      height: "35px !important",
      width: "28px !important",
    },
    [theme.breakpoints.only('md')]: {
        marginTop: "126px !important",
        marginLeft:"76px",
    },
    // [theme.breakpoints.only('lg')]: {
    //   top: "33% !important",
    // },
    [theme.breakpoints.up('lg')]: {
      marginTop: "170px !important",
      marginLeft:"136px",
    },
    [theme.breakpoints.only('xl')]: {
      top: "682px !important",
    },

  },
    nextButtons: {
    backgroundImage: "url(https://alpha-assets.stylori.com/images/static/slider_icon.png)!important",
    width: "35px!important",
    height: "42px!important",
    backgroundRepeat: "no-repeat!important",
    opacity: "1!important",
    backgroundPosition: "-160px -229px!important",
    // backgroundColor: "#fff!important",
    // border: "1px solid #ccc",
    borderRight: 0,
    position: "absolute",
    zIndex: 9,
    float: "right",
    right: "43%",
    // top: "55%!important",
    [theme.breakpoints.only('xs')]: {
        marginTop: "69px !important",
        marginRight:"1px",
        right:"9% !important",
      height: "35px !important",
      width: "28px",
    },
    [theme.breakpoints.only('sm')]: {
        marginTop: "93px !important",
        marginRight:"90px",
      height: "35px !important",
      width: "28px !important",
    },
    [theme.breakpoints.only('md')]: {
        marginTop: "126px !important",
        marginRight:"106px",
    },
    // [theme.breakpoints.only('lg')]: {
    //   top: "33% !important",
    // },
    [theme.breakpoints.up('lg')]: {
      marginTop: "167px !important",
      marginRight:"136px",
    },
    [theme.breakpoints.only('xl')]: {
      top: "653px !important",
    },


  },
youtubeHeights:{
    // minHeight:"399px",
    // height :"",
    [theme.breakpoints.only('xs')]:{
        height:"201px"
    },
    [theme.breakpoints.only('sm')]:{
        height:"214px"
    },
    [theme.breakpoints.only('md')]:{
        height:"273px"
    },
    [theme.breakpoints.only('lg')]:{
        height:"372px !important",
        // width:"91%",
    },
    [theme.breakpoints.only('xl')]:{
        height:"100%"
    },

},

youtubeImg:{
    position: "absolute",
    top: "35%",
    left: "23%",
    width: "52px",
    opacity: ".7",
    verticalAlign: "middle",
    fontSize: "15px",
    // width:"0px !important",
},
main:{
    position: "relative",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    paddingTop:"40px",
},
para:{
    fontFamily: "notoSerif-regular",
    fontSize: "15px",
    lineHeight: 1.42857,
    color: "#5d5d5d",
    paddingBottom:"30px",
},
heading:{
    fontFamily: "notoSerif-regular",
    padding: "30px 0",
    fontSize: "21px",
    color: "#333",
    lineHeight: 1.2,

},
paddings:{
    padding:"0px 30px 30px 30px",
},
anchorMain: {
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "1.1",

},
anchor: {
    color: "#191919",
    textDecoration: "none",
    fontSize: "14px",
    lineHeight: 1.1,
    fontWeight: "600",
    paddingRight: "10px"
},
algins: {
    display: "flex",
},


}))
export default styles;
