const styles = theme => ({
    cart: {
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            overflowX: "auto",
        },
        [theme.breakpoints.up('lg')]: {
            width: "100%",
            // border: "0.5px solid #ccc",
            boxShadow: "1px 2px 13px 7px #DEDADA!important",
            padding: "10px",
            marginBottom: "20px",
            outline: "none !important"

        },
    },
    card: {
        width: "100%",
        margin: "auto",
        display: "flex",
        marginBottom: "15px"
    },
    details: {
        display: "flex",
        flexDirection: "column",
        padding: "2%",
        width: "100%"
    },
    content: {
        flex: "1 0 auto",
        padding: 0
    },
    cover: {
        width: "30vw"
    },
    controls: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        "& button": {
            padding: "2.1px 13.8px"
        },
        [theme.breakpoints.down("sm")]: {
            "& button": {
                padding: "1.1px 1.8px"
            }
        }
    },

    playIcon: {
        height: 38,
        width: 38
    },
    contents: {
        fontSize: "0.8rem",
    },
    labelPrice: {
        display: "flex"
    },
    labelPriceDel: {
        fontSize: "0.8rem",
        display: "flex",
        alignItems: "center"
    },
    labelPriceOff: {
        fontSize: "1.1rem"
    },
    buttons: {
        background: theme.palette.overallButoon.primary,
        color: theme.palette.overallButoon.contrastText
    },
    normalfonts: {
        color: theme.palette.text.primary,
    },
    backgsecondary: {
        background: theme.palette.secondary.dark,
    },
    normalcolorback: {
        background: theme.palette.text.primary
    },
    fontwhite: {
        color: theme.palette.overallButoon.contrastText
    },
});
export default styles;