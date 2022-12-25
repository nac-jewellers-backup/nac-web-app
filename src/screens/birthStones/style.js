import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        width: "82%",
        margin: "auto",
        marginTop: "5%"
    },
    stoneParent: {
        background: "#f0f0f0",
        padding: "13px 20px",
        display: "flex",
        flexWrap: "wrap",
        borderRadius: "4px",
        boxShadow: "4px 4px 5px #888 ",
    },
    stoneChild: {
        background: "white",
        borderRadius: "50%",
        border: "2px solid #fff",
        width: "45px",
        height: "45px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "13px",
        margin: "10px 10px",
        "& img": {
            height: "100%"
        }
    },
    stoneChildClicked: {
        border: `2px solid ${theme.palette.gold.main}`,
        background: "white",
        borderRadius: "50%",
        width: "45px",
        height: "45px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "13px",
        margin: "10px 12px",
        "& img": {
            height: "100%"
        }
    },
    stoneName: {
        fontSize: "14px",
        display: "flex",
        justifyContent: "center",
        marginBottom: "6px",
        color: "#888"
    },
    parentCirlce: {
        border: "1px solid #888",
        background: "white",
        borderRadius: "50%",
        width: "40%",
        height: "285px",
        margin: "auto",
        "& div": {
            color: theme.palette.gold.main,
            fontSize: "22px",
            fontWeight: "600",
            fontStyle: "italic"
        },
        "& p": {
            display: "flex",
            justifyContent: "center"
        },
    },
    about: {
        marginTop: "7px"
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
        width: "18%",
        height: "128px",
        left: "0%",
        top: "6%",
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
    Child2Cirlce: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        position: "absolute",
        border: "1px solid #888",
        background: "white",
        borderRadius: "50%",
        width: "11%",
        height: "75px",
        left: "0%",
        bottom: "2%",
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
        width: "15%",
        height: "110px",
        left: "21%",
        top: "-10%",
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
            right: "0%"
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
        width: "17%",
        height: "120px",
        left: "19%",
        bottom: "-7%",
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
            left: "-8%"
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
        width: "15%",
        height: "110px",
        right: "23%",
        top: "-2%",
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
            right: "-11%"
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
        width: "22%",
        height: "157px",
        right: "7%",
        bottom: "-18%",
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
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    margin:"auto"
                }
            }
        },
        "& img": {
            width: "50px",
            height: "50px",
            position: "absolute",
            top: "-14%",
            left: "0%"
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
        width: "12%",
        height: "85px",
        right: "2%",
        top: "16%",
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
            left: "18%"
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
        width: "11%",
        height: "77px",
        right: "43%",
        bottom: "-19%",
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
        width: "136px",
        height: "136px",
        display: "flex",
        margin: "auto"
    }
}));
export default useStyles