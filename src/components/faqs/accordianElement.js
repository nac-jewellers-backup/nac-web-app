import { Grid } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React from "react";
import Minus from "../../../src/assets/minus";
import Plus from "../../../src/assets/plus";
import "./faqs.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderBottom: "1px solid #e8e8e8 ",
  },

  details: {
    color: "#2F348B",
    borderTop: "0px",
    fontWeight: 600,
    fontSize: "14px",
    padding: "12px 0px",
  },
  icon: {
    height: "10px",
    width: "10px",
    marginRight: "3px",
  },
  listeditems: {
    "&:hover": {
      backgroundColor: "#fff !important",
    },
  },
}));

export default function AccordianElement(props) {
  const value = props.value;

  const checkerOpen = () => {
    if (props.accordian === "Plus") {
      return <Minus className={classes.icon} />;
    } else if (props.accordian === "Arrows") {
      return <ExpandLess />;
    } else {
      return "";
    }
  };
  const checkerClose = () => {
    if (props.accordian === "Plus") {
      return <Plus className={classes.icon} />;
    } else if (props.accordian === "Arrows") {
      return <ExpandMore />;
    } else {
      return "";
    }
  };
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Grid className={classes.root}>
      <List>
        <ListItem
          style={{ padding: "0px" }}
          autoFocus={false}
          className={classes.listeditems}
          button
          onClick={handleClick}
        >
          <Typography style={{ width: "100%" }} className={classes.details}>
            {value.Questions}
          </Typography>
          <List style={{ float: "end", display: "flex" }}>
            {" "}
            {open ? checkerOpen() : checkerClose()}
          </List>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              style={{
                paddingLeft: "0px",
                paddingBottom: "0px",
                paddingTop: "0px",
              }}
              button
            >
              <List style={{ padding: "0px" }}>
                <Grid
                  container
                  style={{ display: "inline-block !important" }}
                  className={classes.listeditems}
                >
                  <Grid item>
                    {value.SubTitle && (
                      <Typography
                        style={{
                          fontWeight: 600,
                          color: "#2F348B",
                          fontSize: "14px",
                          paddingBottom: "8px",
                          paddingTop: "8px",
                        }}
                      >
                        {value.SubTitle}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item>
                    <Typography
                      dangerouslySetInnerHTML={{ __html: value.Answers }}
                      style={{
                        fontSize: "13px",
                        color: "#666",
                        paddingBottom: "10px",
                      }}
                    ></Typography>
                  </Grid>
                </Grid>
              </List>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Grid>
  );
}
