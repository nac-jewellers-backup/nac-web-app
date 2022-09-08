import { makeStyles } from "@material-ui/core/styles";
const expstyles = makeStyles(theme => ({
  Card:{
    boxShadow: '2px 2px 2px #a5a4a5 !important',
    borderRadius: '0 !important',
  },
  Cardview:{
    boxShadow: '2px 2px 2px #a5a4a5 !important',
    borderRadius: '0 !important',
    backgroundColor:"#f4f4f4",
    margin:"10px"
  },
  mainCard:{
    display:"flex",justifyContent:"center",padding:"20px"
  },
  normalfontsOtp:{
    color:"#B3821F"
  },
  title:{
    fontSize:"16px",fontWeight:700,justifyContent:'center',display:"flex",margin:5
  },
  desc:{
    textAlign:"center",color:"#6b6b6b"
  },
  content:{
    height: "120px", backgroundColor:"#f4f4f4",
  },
  viewContent:{
     height:'fit-content',
     padding:'30px'
  },
  otpContent:{
    height:'300px',
    width:"300px",
    display:"flex"
  },
  normalfonts2:{
    textAlign:"initial !important",
    color:"#7f8082 !important"
  },
  normalfonts2_sub:{
    fontSize:"14px",
    lineHeight:1,
    color:"#7f8082 !important"
  },
  cardCont:{
    position:"relative",display:"flex",justifyContent:'center'
  },
  cardSpace:{
    position: 'absolute',
    alignSelf: 'center',
  },
  back:{
    position: 'absolute',
    left: '20px',
    top: '50px',
  },
  header:{ 
      padding:"45px 24px 24px 24px !important",
      textAlign:"center !important",
      '& .MuiCardHeader-title':{
        fontSize:"20px !important",
        color:"#B3821F",
        fontWeight:700
      }
  },
  select:{
    background:"white !important",
    '& .MuiInputBase-root':{
      background:"white !important"
    }
  },
  inputField:{
    background:"white !important",
    '& .MuiInputBase-root':{
      background:"white !important"
    }
  },
  headerOtp:{
    color:"#B3821F",
    fontWeight:700,
    display: 'flex',
    justifyContent: 'center',
    fontSize:"19px"
  },
  subheaderOtp:{
    display: 'flex',
    fontSize: '14px',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'gray',
    marginTop: '-17px'
  }
}));
export default expstyles;
