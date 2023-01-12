import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles(theme => ({
    cardPadding: {
        padding: "0 15px",
        margin:"auto",
    },
    arrowIconLeft: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "45px",
        color: "#EC6160",
    },
    paddings:{
        padding:"30px",
    },
    anchorMain: {
        paddingTop: "20px",
        textAlign: "center",
        cursor: "pointer",
        padding: "15px",
        fontWeight: "600",
        fontSize: "14px",
        lineHeight: "1.1",


    },
    title:{
        textAlign:"center",
        fontWeight:"600",
        fontSize:"28px",
    },
    subTitle:{
        fontFamily: "notoSerif-regular",
    paddingBottom: "20px",
    fontSize: "22px",
    color: "#000",
    },
    carouselPara:{
        
    textAlign: "justify",
    lineHeight: "30px",
    paddingBottom: "10px",
    fontFamily: "notoSerif-regular",
    fontSize: "16px",
    color: "#5d5d5d",
    },
    button:{
        backgroundColor: "#14964b",
    padding: "6px 12px",
    color: "#fff",
    },

    anchor: {
        color: "#191919",
        textDecoration: "none",
        fontSize: "14px",
        lineHeight: 1.1,
        fontWeight: "600",
        paddingRight: "10px",
    },
    algins: {
        display: "flex",
        justifyContent: "center",
    },
    arrowIconRight: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "45px",
        color: "#EC6160"
    },
    [theme.breakpoints.only('sm')]: {
        arrowIconLeft: {
            display: "flex",
            justifyContent: "center !important",
            alignItems: "center",
            fontSize: "45px",
            color: "#EC6160",
        },
        arrowIconRight: {
            display: "flex",
            justifyContent: "center !important",
            alignItems: "center",
            fontSize: "45px",
            color: "#EC6160"
        }
    },
    testimonialRight: {
        textAlign: "center !important",
        paddingLeft: ' 5px !important',
        paddingRight: '5px !important'
    },
    imgcoin: {
        // padding: '5px',
        marginTop: '15px',
        marginBottom: '15px',
        verticalAlign: 'middle',
        width: "100%",
        height: "auto"
        // width: "calc(100% - 450px) !important",
        // marginLeft: "4px",
    },

}))
export default styles;