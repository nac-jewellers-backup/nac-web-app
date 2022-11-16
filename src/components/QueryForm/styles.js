const { makeStyles } = require("@material-ui/core");

export const useStyles = makeStyles((theme) => ({
    // roots: {
    //   padding: "50px 60px",
    //   [theme.breakpoints.down("xs")]: {
    //     padding: "25px 0px",
    //   },
    // },
    // headings: {
    //   fontSize: "50px !important",
    //   color: "#B2832C",
    //   fontStyle: "italic",
    //   padding: "10px 13px 0px 13px",
    //   [theme.breakpoints.down("md")]: {
    //     fontSize: "45px !important",
    //   },
    //   [theme.breakpoints.down("xs")]: {
    //     fontSize: "30px !important",
    //     padding: "10px 4px 0px 4px",
    //   },
    // },
    // logoEdits: {
    //   position: "relative",
    //   height: "70px",
    //   top: "12px",
    //   [theme.breakpoints.down("md")]: {
    //     height: "55px",
    //     top: "17px",
    //   },
    //   [theme.breakpoints.down("xs")]: {
    //     height: "40px",
    //     top: "12px",
    //   },
    // },
    // headerAlign: {
    //   display: "flex",
    //   justifyContent: "center",
    //   paddingBottom: "40px",
    //   [theme.breakpoints.down("xs")]: {
    //     paddingBottom: "10px",
    //   },
    // },
    // contentText: {
    //     padding: "0 170px !important",
    //     boxShadow: "none !important",
    //     "& p": {
    //       fontSize: "20px",
    //       color: "grey",
    //     },
    //     "& div": {
    //       fontSize: "20px",
    //       color: "grey",
    //     },
    //     "& svg": {
    //       color: theme.palette.gold.main,
    //     },
    //   },
      totalFormArea: {
        width: "83%",
        margin: "auto",
        padding: "55px 0px 65px 0px",
        boxShawdow: "6px 7px 6px #000 !important",
        [theme.breakpoints.down("xs")]: {
          padding: "55px 0px 35px 0px",
        },
      },
      formArea: {
        padding: "50px 75px",
        backgroundColor: "#F4F4F4",
        [theme.breakpoints.down("md")]: {
          padding: "35px 45px",
        },
        [theme.breakpoints.down("sm")]: {
          padding: "35px 25px",
        },
      },
      inputFieldsEdit: {
        marginBottom: "15px",
      },
      inputFieldsHeader: {
        paddingBottom: "5px",
        color: "#6E6F72",
      },
      textFieldEdit: {
        borderWidth: "0px",
      },
      buttonAlign: {
        backgroundColor: "#B2832C",
        borderRadius: "0px",
        color: "#fff",
        padding: "5px 110px",
        fontSize: "large",
        "&:hover": {
          backgroundColor: "#9b6706",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "small",
          padding: "3px 50px",
        },
      },
      storeImage: {
        maxHeight: "700px",
        [theme.breakpoints.down("md")]: {
          minHeight: "580px",
        },
        [theme.breakpoints.down("sm")]: {
          minHeight: "555px",
        },
        [theme.breakpoints.down("xs")]: {
          minHeight: "400px",
        },
      },
      imgBtn: {
        width: "100%",
        fontStyle: "italic",
        backgroundColor: "#2E348A",
        color: "#fff",
        borderRadius: "0px",
        top: "-4px",
        padding: "10px 0px",
        textAlign: "center",
      },
  }));