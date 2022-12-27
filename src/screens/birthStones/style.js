import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "82%",
        margin: "auto",
        marginTop: "5%",
        [theme.breakpoints.down("md")]: {
            width: "91%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "87%",
        },
        [theme.breakpoints.down("xs")]: {
            width: "93%",
        }
    },
    stonesCircle: {
        margin: "6px 0"
    },
    logoItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "8% auto",
        width: "200px",

        "& img": {
            width: "100%"
        }
    },
    stoneParent: {
        background: "#f0f0f0",
        padding: "13px 20px",
        display: "flex",
        flexWrap: "wrap",
        borderRadius: "4px",
        boxShadow: "4px 4px 5px #888 ",
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            padding: "9px 12px",
            justifyContent: "space-evenly"
        }
    },
    stoneChild: {
        background: "white",
        borderRadius: "50%",
        border: "2px solid #fff",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "13px",
        margin: "10px 10px",
        [theme.breakpoints.down("sm")]: {
            margin: "10px 10px",
            padding: "6px",
            width: "46px",
            height: "46px",
        },
        [theme.breakpoints.down("xs")]: {
            margin: "6px 6px",
            padding: "6px",
            width: "25px",
            height: "25px",
        },
        "& img": {
            height: "100%"
        }
    },
    stoneChildClicked: {
        border: `2px solid ${theme.palette.gold.main}`,
        background: "white",
        borderRadius: "50%",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "13px",
        margin: "10px 12px",
        [theme.breakpoints.down("sm")]: {
            margin: "10px 11px",
            padding: "6px",
            width: "46px",
            height: "46px",
        },
        [theme.breakpoints.down("xs")]: {
            margin: "6px 6px",
            padding: "6px",
            width: "25px",
            height: "25px",
        },
        "& img": {
            height: "100%"
        }
    },
    stoneName: {
        fontSize: "14px",
        display: "flex",
        justifyContent: "center",
        marginBottom: "6px",
        color: "#888",
        [theme.breakpoints.down("sm")]: {
            fontSize: "13px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "11px",
        },
    },
    parentRelative: {
        position: "relative",
        [theme.breakpoints.down("xs")]: {
            height: "100%",
            display: "flex"
        },
    },
    parentCirlce: {
        border: "1px solid #888",
        background: "white",
        borderRadius: "50%",
        width: "39%",
        height: "335px",
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            width: "43%",
            height: "310px",
        },
        [theme.breakpoints.down("xs")]: {
            width: "77%",
            height: "260px",
        },
        "& div": {
            color: theme.palette.gold.main,
            fontSize: "22px",
            fontWeight: "600",
            fontStyle: "italic",
            [theme.breakpoints.down("md")]: {
                fontSize: "20px",
            },
        },
        "& p": {
            display: "flex",
            justifyContent: "center"
        },
    },
    about: {
        marginTop: "7px",
        [theme.breakpoints.down("xs")]: {
            height: "650px",
        },
    },
    parentWidth: {
        width: "75%",
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            width: "95%",
        },
        [theme.breakpoints.down("xs")]: {
            width: "95%",
            height: "100%"
        },

    },
    Child1Cirlce: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        padding: "10px",
        border: "1px solid #888",
        background: "white",
        borderRadius: "50%",
        width: "17%",
        height: "145px",
        left: "0%",
        top: "6%",
        [theme.breakpoints.down("sm")]: {
            height: "129px"
        },
        [theme.breakpoints.down("xs")]: {
            width: "34%",
            left: "48%",
            top: " 3%",
            height: "110px"
        },
        "& div": {
            fontSize: "13px",
            color: "#323232",
            "& p": {
                "& span": {
                    fontStyle: "italic",
                    fontWeight: "600",
                    fontSize: "13px",
                    display: "block",
                    color: "#000",
                    textTransform: "capitalize"
                }
            }
        }
    },
    heightItem: {
        display: "flex",
        height: "85%",
        flexDirection: "column",
        [theme.breakpoints.down("xs")]: {
            height: "88%"
        }
    },
    birthLogo: {
        width: "130px"
    },
    Child2Cirlce: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        position: "absolute",
        border: "1px solid #888",
        background: "white",
        borderRadius: "50%",
        width: "10%",
        height: "85px",
        left: "0%",
        bottom: "2%",
        [theme.breakpoints.down("sm")]: {
            height: "75px"
        },
        [theme.breakpoints.down("xs")]: {
            left: "8%",
            width: "24%",
            top: "0%",
            height: "77px"
        },
        "& div": {
            fontSize: "13px",
            color: "#323232",
            "& p": {
                "& span": {
                    fontStyle: "italic",
                    fontWeight: "600",
                    fontSize: "13px",
                    display: "block",
                    color: "#000",
                    textTransform: "capitalize",
                    width: "130px",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden"
                }
            }
        },
        "& img": {
            width: "43px",
            height: "43px",
            position: "absolute",
            top: "-42%",
            left: "-13%"
        }
    },
    Child3Cirlce: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        position: "absolute",
        border: "1px solid #888",
        background: "white",
        borderRadius: "50%",
        width: "14%",
        height: "124px",
        left: "21%",
        top: "-10%",
        [theme.breakpoints.down("sm")]: {
            height: "94px"
        },
        [theme.breakpoints.down("xs")]: {
            top: "28%",
            left: "67%",
            width: "26%",
            height: "80px"
        },
        "& div": {
            fontSize: "13px",
            color: "#323232",
            "& p": {
                "& span": {
                    fontStyle: "italic",
                    fontWeight: "600",
                    fontSize: "13px",
                    display: "block",
                    color: "#000",
                    textTransform: "capitalize"
                }
            }
        },
        "& img": {
            width: "50px",
            height: "50px",
            position: "absolute",
            top: "-30%",
            right: "0%",
            [theme.breakpoints.down("xs")]: {
                top: "-28%",
                right: "0",
                width: "43px",
                height: "43px"
            }
        },

    },
    Child4Cirlce: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        position: "absolute",
        border: "1px solid #888",
        background: "white",
        borderRadius: "50%",
        width: "15%",
        height: "130px",
        left: "19%",
        bottom: "-7%",
        [theme.breakpoints.down("sm")]: {
            height: "110    px"
        },
        [theme.breakpoints.down("xs")]: {
            left: "0%",
            width: "33%",
            top: "20%",
            height: "104px"
        },
        "& div": {
            fontSize: "13px",
            color: "#323232",
            "& p": {
                "& span": {
                    fontStyle: "italic",
                    fontWeight: "600",
                    fontSize: "13px",
                    display: "block",
                    color: "#000",
                    textTransform: "capitalize"
                }
            }
        },
        "& img": {
            width: "50px",
            height: "50px",
            position: "absolute",
            top: "-15%",
            left: "-8%",
            [theme.breakpoints.down("xs")]: {
                top: "-29%",
                right: "-14%",
                width: "46px",
                height: "46px"
            }
        }
    },
    Child5Cirlce: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        border: "1px solid #888",
        background: "white",
        borderRadius: "50%",
        width: "14%",
        height: "124px",
        right: "23%",
        top: "-2%",
        [theme.breakpoints.down("sm")]: {
            width: "16%",
            height: "106px"
        },
        [theme.breakpoints.down("xs")]: {
            top: "62%",
            right: "4%",
            width: "31%",
            height: "102px"
        },
        "& div": {
            color: "#323232",
            fontSize: "13px",
            "& p": {
                "& span": {
                    fontStyle: "italic",
                    fontWeight: "600",
                    fontSize: "13px",
                    color: "#000",
                    display: "block",
                    textTransform: "capitalize"
                }
            }
        },
        "& img": {
            width: "50px",
            height: "50px",
            position: "absolute",
            top: "-11%",
            right: "-11%",
            [theme.breakpoints.down("xs")]: {
                width: "45px",
                height: "45px"
            }
        }
    },
    Child6Cirlce: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        position: "absolute",
        border: "1px solid #888",
        background: "white",
        borderRadius: "50%",
        width: "21%",
        height: "178px",
        right: "7%",
        bottom: "-18%",
        [theme.breakpoints.down("sm")]: {
            height: "147px"
        },
        [theme.breakpoints.down("xs")]: {
            left: "2%",
            width: "43%",
            bottom: "4%",
            height: "140px"
        },
        "& div": {
            color: "#323232",
            fontSize: "13px",
            "& p": {
                "& span": {
                    fontStyle: "italic",
                    fontWeight: "600",
                    fontSize: "13px",
                    color: "#000",
                    display: "block",
                    textTransform: "capitalize",
                    width: "155px",
                    // textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    // overflow: "hidden",
                    margin: "auto",
                    [theme.breakpoints.down("sm")]: {
                        fontSize:"11px"
                    },
                }
            }
        },
        "& img": {
            width: "50px",
            height: "50px",
            position: "absolute",
            top: "-14%",
            left: "0%",
            [theme.breakpoints.down("xs")]: {
                top: "-12%",
                left: "0%",
                width: "42px",
                height: "42px"
            }
        }
    },
    Child7Cirlce: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        position: "absolute",
        border: "1px solid #888",
        background: "white",
        borderRadius: "50%",
        width: "11%",
        height: "95px",
        right: "2%",
        top: "16%",
        [theme.breakpoints.down("sm")]: {

            height: "75px"
        },
        [theme.breakpoints.down("xs")]: {
            top: "97%",
            right: "13%",
            width: "20%",
            height: "65px"
        },
        "& div": {
            color: "#323232",
            fontSize: "13px",
            "& p": {
                "& span": {
                    fontStyle: "italic",
                    fontWeight: "600",
                    fontSize: "13px",
                    color: "#000",
                    display: "block",
                    textTransform: "capitalize",
                    overflow: "hidden",
                    width: "90px",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis"
                }
            }
        },
        "& img": {
            width: "50px",
            height: "50px",
            position: "absolute",
            top: "-50%",
            left: "18%",
            [theme.breakpoints.down("xs")]: {
                width: "46px",
                height: "46px"
            }
        }
    },
    Child8Cirlce: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        position: "absolute",
        border: "1px solid #888",
        background: "white",
        borderRadius: "50%",
        width: "10%",
        height: "88px",
        right: "43%",
        bottom: "-19%",
        [theme.breakpoints.down("sm")]: {
            bottom: "-14%",
            height: "67px"
        },
        [theme.breakpoints.down("xs")]: {
            right: "77%",
            top: "45%",
            width: "19%",

            height: "66px"
        },
        "& div": {
            color: "#323232",
            fontSize: "13px",
            "& p": {
                "& span": {
                    fontStyle: "italic",
                    fontWeight: "600",
                    fontSize: "13px",
                    color: "#000",
                    display: "block",
                    textTransform: "capitalize"
                }
            }
        },
        "& img": {
            width: "43px",
            height: "43px",
            position: "absolute",
            top: "-10%",
            right: "-67%",
            [theme.breakpoints.down("xs")]: {
                bottom: "-76%",
                right: "-31%",
                width: "39px",
                height: "39px"
            }
        }
    },
    relativeCircle: {
        position: "relative",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        marginTop: "10px",
        width: "60px",
        height: "48px",
        display: "flex",
        margin: "auto"
    },
    stoneImg: {
        width: "128px",
        height: "128px",
        display: "flex",
        margin: "auto",
        [theme.breakpoints.down("xs")]: {
            width: "122px",
            height: "107px",
        }
    },
    parentPadding: {
        padding: "80px 0 110px 0",
        background: "#f0f0f0",
        [theme.breakpoints.down("xs")]: {
            height: "100%"
        }

    }
}));
export default useStyles