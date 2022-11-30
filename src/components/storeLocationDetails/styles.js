import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    titles: {
        fontSize: "30px",
        fontWeight: "bold",
        color: "gray",
        marginTop: "10px"
    },
    address: {
        fontSize: "18px",
        color: "gray",
        marginTop: "10px"
    },
    phone: {
        fontSize: "18px",
        color: "gray",
        marginTop: "10px"
    },
    mapcontainer: {
        padding: "20px",

    },

    pads: {
        padding: "0px 15px",
        // boxShadow:"0 0 5px #888 !important",
        marginBottom: "10px"
    },
    pad: {
        width: "100%",
        // height:"100%",
        padding: "29px 10px",
        borderBottom: "1px solid rgb(221, 221, 221)",
        borderRight: "1px solid rgb(221, 221, 221)",
        [theme.breakpoints.only('xs')]: {
            padding: "10px 0px 20px 0px",
            borderRight: "0px",
            // borderBottom: "1px solid rgb(221, 221, 221)",

        },
    },
    title: {
        fontSize: "24px"
    },
    innerimg: {
        width: "100%",
        display: "block",
        height: "100%",
    },
    dataStyle: {
        position: "relative",
        minHeight: "1px",
        paddingRight: "15px",
        paddingLeft: "15px",
    },
    sideData: {
        padding: "10px 10px 10px 30px"
    },
    sidePer: {
        width: "960px",
        marginLeft: "9%",
        marginRight: "4%",
        [theme.breakpoints.only('xs')]: {
            marginLeft: "3%",
            marginRight: "2%",
        },
        [theme.breakpoints.only('md')]: {
            marginLeft: "7%",

        },
    },

}))
export default useStyles;