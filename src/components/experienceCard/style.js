import { makeStyles } from "@material-ui/core/styles";
const ExperienceCardStyles = makeStyles((theme) => ({
  mainCard: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
  },

  Card: {
    boxShadow: "2px 2px 2px #a5a4a5 !important",
    borderRadius: "0 !important",
    cursor: "pointer",
  },

  imageTag: {
    width: "100%",
  },

  content: {
    height: "140px",
    backgroundColor: "#f4f4f4",
    [theme.breakpoints.down("sm")]: {
      height: "160px",
      paddingBottom:"8px"
    },
  },

  title: {
    fontSize: "16px",
    fontWeight: 700,
    justifyContent: "center",
    display: "flex",
    margin: 5,
  },

  desc: {
    textAlign: "center",
    color: "#6b6b6b",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
}));
export default ExperienceCardStyles;
