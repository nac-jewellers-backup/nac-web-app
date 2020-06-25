import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
const styles = makeStyles(theme => ({
    grid_1:
    {
      padding:"4%", 
    },
    grid_2:
    {
      paddingLeft:"4%" 
    },
    grid_3:
    {
        fontSize:"25px",
        color:"black",
        fontFamily: "notoSerif-regular",
        maxWidth:"100%"
    },
    grid_4:
    {
        fontSize:"20px",
        color:"black",
        fontFamily: "notoSerif-regular",
        marginTop:"4%", 
        fontWeight: "500",
    lineHeight: "1.1",      
    },
    formControl:{
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      grid_5:
      {
        marginTop:"6%",
        
      },
      grid_6:
      {
     
      color:"black",
      width:"83px"
      },
      grid_8:
      {
       marginTop:"8%",
       width:"364px"
      },
      grid_9:
      {
        marginTop:"8%",
        fontWeight:"bold",
        color:" #5d5d5d"  
      },
      grid_10:
      {
        marginTop:"4%",
        width:"120px"
      },
      grid_11:
      {
         marginTop:"8%",
         color:"black"
      },
      grid_12:
    {
      justifyContent:"center",
      marginTop:"3%"
    },
    grid_14:
    {
 textTransform:"inherit",
 fontSize:"18px",
  background:"#4cae4c",
  color:"white",
  '&:hover': {
    backgroundColor: '#4cae4c',
    }

  },

  [theme.breakpoints.between('xs','sm')]:{
    grid_2:
    {
      paddingLeft:"0%" 
    },
    grid_3:{
      textAlign:"center",
     fontSize:"20px",
     marginTop:"10%",

    },
    grid_4:{
      fontSize:"16px",
      textAlign:"center",
    },
    grid_7:
    {
      paddingLeft:"5%"
    },
    grid_5:
    {
      textAlign:"center",
      fontSize:"14px",
      justifyContent:"center",
    },
    
    grid_8:
    {
      fontSize:"14px",
      width:"100%",
      textAlign:"center",
      justifyContent:"center",
    },
    grid_14:
    {
      fontSize:"14px",
    },
    grid_11:
    {
      fontFamily: "notoSerif-regular",
      marginTop:"8%",
      fontSize:"15px",
      justifyContent:"center",
      textAlign:"center",
    },
    grid_9:
    {
      fontSize:"14px",
      justifyContent:"center",
      textAlign:"center",
    },
    grid_10:
    {
      fontSize:"14px",
      justifyContent:"center",
      textAlign:"center",
    }
  }
      
}));
export default styles;