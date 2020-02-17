import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
const  currentstyles = makeStyles(theme => ({

    contents:
    {
        justifyContent:"center",
        textAlign:"center",
        fontSize:"16px",
        color:"#5d5d5d",
        marginTop:"3%",
        paddingLeft: "12px",
        paddingRight: "20px"
    },
    Cards0:{
      marginTop:"3%",
      paddingLeft:"20px",
      paddingRight:"20px",
    },
    sideContent:{
             padding:"3%"
    },
   
    careercontainer:{
     
      paddingLeft:"1%",
      paddingRight:"1%",
     
     
    },
    rightContent:{
     padding:"2%"
     
    },
    container1:
    {
      borderRight:" 1px solid lightgrey",
      marginTop:"3%"
    },
    rightContent:
    {
       marginTop:"3%"
    },
    head:
    {
    justifyContent:"center",
    textAlign:"center",
    fontFamily: "Libre Baskerville",
    fontWeight: "500",
    lineHeight: "1.1",
    color: "#5d5d5d",
    fontSize:"34px",
   
    
    },
    root: {
       
      }, 
      
      title: {
        fontSize: 14,
      },
     
      Cards:
      {
        
        justifyContent:"center",
        marginTop:"3%",
        padding:"2%"
        
       
      },
      Cardscontent:
      {
        marginTop:"6%",
        fontSize:"15px",
        color: "#5d5d5d",
      },
      Cardsfooter0:{
padding:"0%"
      },
      Cardsfooter:
      {
        marginTop:"4%",
        fontSize:"15px",
        color:"green" , 
        padding:"0%" 
      },
      Cardsfooter1:
      {
      
      fontSize:"12px",
      padding:"0%" 
      
      },
      Cardhead:
      {
        fontSize:"23px" ,
        color: "#5d5d5d", 
      },
      
      sideContent:{
        paddingLeft:"40px",
        marginBottom:"10px",
        [theme.breakpoints.only('md')]:{
        paddingLeft:"0px",
            
      }},
      [theme.breakpoints.only('xs')]: {

        Cards:
        {
          textAlign:"center",
          justifyContent:"center",
          marginTop:"7%",
          marginLeft:"5%"
        },
        Cardsfooter1:
        { 
        float:"none",
        fontSize:"12px",
        padding:"0%" ,
        },
        Cardsfooter:
        {
          padding:"0%",
        marginTop:"10%"
        },
        Cardsfooter0:{
          padding:"0%"
                },
                contents:
                {
                  marginTop:"4%"
                },


      },
      [theme.breakpoints.only('lg')]: {
        Cardsfooter1:
        { 
        float:"right",
        fontSize:"12px",
        padding:"0%" ,
        },
        Cards:
        {
          marginTop:"2%",
        
        },
      },
      [theme.breakpoints.only('md')]: {

        Cards:
        {
          marginTop:"7%",
         
        },
        Cardsfooter:{
          fontSize:"13px",
          marginTop:"5%"
        },
        Cardsfooter1:{
          fontSize:"13px",
          marginTop:"5%"
        },

        Cardhead:{
          fontSize:"15px", 
        fontWeight:"bold"       },

     
      Cardscontent:
      {
        fontSize:"13px"  ,
        marginTop:"3%",
        color: "#5d5d5d",
      },
      },
      [theme.breakpoints.only('sm')]: {

        Cardsfooter:{
          fontSize:"14px",
          marginTop:"5%"
        },
        Cardsfooter1:{
          fontSize:"13px",
          marginTop:"5%"
        },
        head:{
           marginTop:"3%"
        },
        contents:
        {
          marginTop:"3%",
          color: "#5d5d5d",
        },
        Cardhead:{
          fontSize:"15px", 
        fontWeight:"bold"       },

     
      Cardscontent:
      {
        fontSize:"13px"  ,
        marginTop:"3%",
        color: "#5d5d5d",
      },
    },
}));
export default  currentstyles;