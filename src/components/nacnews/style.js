import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({
    root:{
        padding:"20px 0px",
        boxShadow:"0 0 5px #888 !important",
        padding:"0px 8px",

    },
    img:{
        width:"150px",
        margin:"auto",
        display:"flex",
    },
    paddings:{
        paddingBottom:"20px",
        paddingTop:"20px",
        width:"100%"
    },
    title:{
        fontSize:"21px",
            textAlign:"center",
            fontWeight:"500",
            paddingBottom:"20px",
            width:"100%"
    },
    firstGrid:{
        width:"25%",
        display:"block",
        height:"auto",

    },
    innerimg:{
        width: "100%",
    height: "auto",
    display: "block",
    },
    secGrid:{
        width:"75%",
        display:"block",
        fontSize:"12px",
        paddingLeft:"20px",

    },
    container:{
        paddingBottom:"20px",
    },


}))
export default styles;