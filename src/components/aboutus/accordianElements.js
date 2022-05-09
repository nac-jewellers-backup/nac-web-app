import React from "react";
import { Grid, Typography, List, ListItem, Collapse } from "@material-ui/core";
import style from "./style";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Plus from "assets/plus";
import Minus from "assets/minus";

export default function AccordianElement(props) {
  const classes = style();
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
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Grid container xs={12}>
      <Grid className={classes.root}>
        <List style={{ paddingTop: "0px" }}>
          <ListItem
            style={{ padding: "0px" }}
            autoFocus={false}
            className={classes.listeditems}
            onClick={handleClick}
          >
            <Typography
              id={value.href}
              style={{ width: "100%" }}
              className={classes.details}
              dangerouslySetInnerHTML={{ __html: value.title }}
            ></Typography>
            <List style={{ float: "end", display: "flex" }}>
              {" "}
              {open ? checkerOpen() : checkerClose()}
            </List>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem className={classes.paddingGrid}>
                <List style={{ padding: "0px" }}>
                  <Grid
                    container
                    style={{ display: "inline-block !important" }}
                    className={classes.listeditems}
                  >
                    {value.para && (
                      <Grid item xs={12}>
                        <Typography
                          dangerouslySetInnerHTML={{ __html: value.para }}
                          style={{
                            fontSize: "15px",
                            color: "#5d5d5d",
                            paddingBottom: "10px",
                            paddingTop: "10px",
                            lineHeight: "1.6",
                          }}
                        ></Typography>
                      </Grid>
                    )}
                    <Grid item>
                      {value.SubTitle && (
                        <Typography
                          style={{
                            fontWeight: 700,
                            color: "#5d5d5d",
                            fontSize: "15px",
                            paddingBottom: "8px",
                            paddingTop: "8px",
                          }}
                        >
                          {value.title}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      {value.subtitlee && (
                        <Grid item>
                          <Typography
                            style={{
                              fontWeight: 700,
                              color: "#5d5d5d",
                              fontSize: "15px",
                              paddingBottom: "8px",
                              paddingTop: "8px",
                            }}
                          >
                            {value.subtitlee}
                          </Typography>
                          <Typography
                            dangerouslySetInnerHTML={{ __html: value.para2 }}
                            style={{
                              fontSize: "15px",
                              color: "#5d5d5d",
                              paddingBottom: "10px",
                              lineHeight: "1.6",
                            }}
                          ></Typography>
                        </Grid>
                      )}
                    </Grid>
                    {value.deliver && (
                      <Grid item>
                        {value.deliver.map((val) => (
                          <Grid item>
                            <Typography
                              style={{
                                fontWeight: 700,
                                color: "#5d5d5d",
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "8px",
                              }}
                            >
                              {val.faqSubtitle}
                            </Typography>
                            <Typography
                              dangerouslySetInnerHTML={{ __html: val.faqPara }}
                              style={{
                                fontSize: "15px",
                                color: "#5d5d5d",
                                paddingBottom: "10px",
                                lineHeight: "1.6",
                              }}
                            ></Typography>
                          </Grid>
                        ))}
                      </Grid>
                    )}
                    {value.faqTitle11 && (
                      <Grid item>
                        <Typography
                          style={{ width: "100%" }}
                          className={classes.details}
                          dangerouslySetInnerHTML={{ __html: value.faqTitle11 }}
                        ></Typography>
                        {/* <Typography style={{ fontWeight: 700, color: "#5d5d5d", fontSize: "15px", paddingBottom: "8px", paddingTop: "8px" }}>
                                                {value.faqSubtitle}
                                            </Typography> */}
                        <Typography
                          dangerouslySetInnerHTML={{ __html: value.faqPara }}
                          style={{
                            fontSize: "15px",
                            color: "#5d5d5d",
                            paddingBottom: "10px",
                            lineHeight: "1.6",
                          }}
                        ></Typography>
                      </Grid>
                    )}
                    {value.faqTitle1 && (
                      <Grid container>
                        <Grid item>
                          <Typography
                            style={{ width: "100%" }}
                            className={classes.details}
                            dangerouslySetInnerHTML={{
                              __html: value.faqTitle1,
                            }}
                          ></Typography>
                          {value.data.map((val) => (
                            <Grid item>
                              <Typography
                                style={{
                                  fontWeight: 700,
                                  color: "#5d5d5d",
                                  fontSize: "15px",
                                  paddingBottom: "8px",
                                  paddingTop: "8px",
                                }}
                              >
                                {val.title}
                              </Typography>
                              <Typography
                                dangerouslySetInnerHTML={{ __html: val.para }}
                                style={{
                                  fontSize: "15px",
                                  color: "#5d5d5d",
                                  paddingBottom: "10px",
                                  lineHeight: "1.6",
                                }}
                              ></Typography>
                            </Grid>
                          ))}
                        </Grid>
                        <Grid item>
                          <Typography
                            style={{ width: "100%" }}
                            className={classes.details}
                            dangerouslySetInnerHTML={{
                              __html: value.faqTitle2,
                            }}
                          ></Typography>
                          {value &&
                            value.data1 &&
                            value.data1.map((val) => (
                              <Grid item>
                                <Typography
                                  style={{
                                    fontWeight: 700,
                                    color: "#5d5d5d",
                                    fontSize: "15px",
                                    paddingBottom: "8px",
                                    paddingTop: "8px",
                                  }}
                                >
                                  {val.title}
                                </Typography>
                                <Typography
                                  dangerouslySetInnerHTML={{ __html: val.para }}
                                  style={{
                                    fontSize: "15px",
                                    color: "#5d5d5d",
                                    paddingBottom: "10px",
                                    lineHeight: "1.6",
                                  }}
                                ></Typography>
                              </Grid>
                            ))}
                        </Grid>
                      </Grid>
                    )}

                    {value.img && (
                      <Grid container className={classes.imgGrid} xs={12}>
                        {value.img.map((val, i) => (
                          <Grid
                            item
                            xs={12}
                            lg={4}
                            sm={4}
                            md={4}
                            style={{ position: "relative" }}
                          >
                            <Grid item style={{ padding: "0px 15px" }}>
                              <img
                                style={{
                                  width: "100%",
                                  height: "250px",
                                  objectFit: "cover",
                                }}
                                src={val.img}
                                loading="lazy" alt='...'
                              />
                            </Grid>
                            <Typography
                              style={{
                                width: "100%",
                                fontSize: "13px",
                                textAlign: "center",
                              }}
                            >
                              {val.name}
                            </Typography>
                            <Typography
                              style={{
                                width: "100%",
                                fontSize: "13px",
                                textAlign: "center",
                              }}
                            >
                              {val.position}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                    )}

                    {value.history && (
                      <Grid container xs={12}>
                        {value.history.map((val) => (
                          <Grid item xs={12} style={{ lineHeight: "1.8" }}>
                            <Typography
                              style={{
                                fontWeight: "bold",
                                float: "left",
                                paddingRight: "20px",
                                marginTop: "3px",
                                fontSize: "17px",
                              }}
                            >
                              {val.year}
                            </Typography>
                            <Typography
                              style={{
                                fontWeight: "400",
                                float: "left",
                                display: "contents",
                                fontSize: "15px",
                              }}
                            >
                              {val.details}
                            </Typography>
                          </Grid>
                        ))}
                      </Grid>
                    )}

                    {value.dots && (
                      <Grid container xs={12}>
                        {value.dots.map((val) => (
                          <ul style={{ lineHeight: "1" }}>
                            <Typography
                              style={{
                                fontWeight: 700,
                                color: "#5d5d5d",
                                fontSize: "15px",
                                paddingBottom: "8px",
                                paddingTop: "8px",
                              }}
                            >
                              <li style={{ listStyleType: "circle" }}>
                                {" "}
                                {val.SubTitle}
                              </li>
                            </Typography>
                            <Typography
                              dangerouslySetInnerHTML={{ __html: val.para }}
                              style={{
                                fontSize: "15px",
                                color: "#5d5d5d",
                                lineHeight: "1.6",
                              }}
                            ></Typography>
                          </ul>
                        ))}
                      </Grid>
                    )}
                    {value.norDots && (
                      <Grid container xs={12}>
                        {value.norDots.map((val) => (
                          <ul style={{ lineHeight: "1" }}>
                            <li style={{ listStyleType: "circle" }}>
                              {" "}
                              <Typography
                                dangerouslySetInnerHTML={{ __html: val.para }}
                                style={{
                                  fontSize: "15px",
                                  color: "#5d5d5d",
                                  lineHeight: "1.6",
                                }}
                              ></Typography>
                            </li>
                          </ul>
                        ))}
                      </Grid>
                    )}
                    {value.number && (
                      <Grid container xs={12}>
                        {value.number.map((val) => (
                          <ol style={{ lineHeight: "1" }}>
                            <Grid item>
                              <Typography
                                style={{
                                  fontWeight: 700,
                                  color: "#5d5d5d",
                                  fontSize: "15px",
                                  paddingBottom: "8px",
                                  paddingTop: "8px",
                                  marginLeft: "-15px",
                                }}
                              >
                                <li style={{ listStyleType: "none" }}>
                                  {" "}
                                  {val.SubTitle}
                                </li>
                              </Typography>
                            </Grid>
                            <Typography
                              dangerouslySetInnerHTML={{ __html: val.para }}
                              style={{
                                fontSize: "15px",
                                color: "#5d5d5d",
                                lineHeight: "1.6",
                              }}
                            ></Typography>
                          </ol>
                        ))}
                      </Grid>
                    )}
                  </Grid>
                </List>
              </ListItem>
            </List>
            <Typography
              style={{
                width: "35px",
                borderBottom: "1px solid #e8e8e8",
                marginTop: "20px",
              }}
            ></Typography>
          </Collapse>
        </List>
      </Grid>
    </Grid>
  );
}
