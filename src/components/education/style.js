import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({

    firstGrid:{
        display:"block",
        height:"auto",
        display:"flex",
        alignItems:"center",

    },
    displays:{
        display:"flex",
    },
    innerimg:{
        width: "100%",
    height: "auto",
    display: "block",
    },
    secGrid:{
        
        display:"block",
        fontSize:"14px",
        paddingLeft:"20px",
        color:"#5d5d5d",
        [theme.breakpoints.down('sm')]:{
            paddingLeft:"0px",

        },

    },
    container:{
        paddingBottom:"20px",
        borderBottom:"1px solid #d8d8d8",
        marginBottom:"30px"
    },
    title:{
        fontSize:"20px",
        fontWeight:"500",
        paddingLeft:"20px",

        // paddingBottom:"1px",
    },
    subtitle:{
        paddingBottom:"10px",
        fontSize:"12px",
        paddingLeft:"20px",


    },
}))
export default styles;