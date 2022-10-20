import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.gold.main,
        textAlign: "center",

        fontSize: "2.6rem",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.8rem",
        },
        marginBottom: 15,
        fontWeight: "540",
        whiteSpace: "noWrap",
        padding: 2,
        marginTop: 8,
    },
    img: {
        height: 40,
        width: 40,
        [theme.breakpoints.down("xs")]: {
            height: 22,
            width: 22,
        },
    },
}));
export default useStyles;
