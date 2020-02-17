import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({

    pad: {
        width: "100%",
        // height:"100%",
        padding: "29px 10px",
        borderBottom: "1px solid rgb(221, 221, 221)",
        borderRight: "1px solid rgb(221, 221, 221)",
        [theme.breakpoints.only('xs')]:{
            padding:"10px 0px 20px 0px",
            borderRight:"0px",
            // borderBottom: "1px solid rgb(221, 221, 221)",

        },
    },
    borders: {
        // borderBottom: "1px solid rgb(221, 221, 221)",
        // borderRight: "1px solid rgb(221, 221, 221)",
    },
    ViewButton:{
        color:"white",
        backgroundColor:"#5cb85c",
        '&:hover':{
            backgroundColor:"#5cb85c"
        }    
    },
    pads:{
        padding:"0px 15px",
        // boxShadow:"0 0 5px #888 !important",
        marginBottom:"10px"
    },
    title:{
        fontSize:"24px"
    },
    shadow:{
        boxShadow:"0 0 5px #888 !important",
        marginBottom:"15px"
    },

    para:{
        fontSize: "15px",
         color: "#000",
         paddingBottom: "10px",
        paddingTop:"10px",
        lineHeight:"1.6" 
    }


}))
export default styles;