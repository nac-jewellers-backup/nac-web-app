import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import style from './style'
import { NavLink } from "react-router-dom";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

var check = {};

export default function SideData(props) {
    // const handleOpen = () => {
    //     window.location.href = "#test"
    // }
    const value = props.value
    const classses = style();
    const [open, setOpen] = React.useState(false);
    const handleClick = (value) => {
        // check = value
        check["check"] = value
        setOpen(!open)
    };
    // alert(JSON.stringify(open))

    return (
        <Grid container xs={12} className={classses.shadow}>
            <Grid item xs={12} >

                {/* <Typography className={classses.leftContent} variant="h6">
                        About Us
            </Typography> */}
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"

                    className={classses.roots}
                >
                    <NavLink to={"/aboutuspage"} activeClassName={'active'} style={{ color: '#394578', textDecoration: "none" }} >

                        <ListItem button onClick={() => handleClick("about")}>

                            <ListItemText style={{ color: "black" }} primary="About Us" />
                            {open === true && check.check === "about" ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    </NavLink>

                    <Collapse in={open === true && check.check === "about"} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding style={{paddingLeft:"15px"}}>
                            {value && value.data && value.data[0].accordian && value.data[0].accordian.map((val, key) =>

                                <ListItem button className={classses.nested}>
                                    <a href={`#${val.href}`} style={{ textDecoration: "none" }} >

                                        <ListItemText className={classses.leftInnerContent} primary={val.title} /> </a>
                                </ListItem>
                            )}

                        </List>
                    </Collapse>
                </List>


            </Grid>
            <Grid item xs={12} >

                {/* <Typography className={classses.leftContent} variant="h6">
                        Terms & Conditions
            </Typography> */}
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"

                    className={classses.roots}
                >
                    <NavLink to={"/terms"} activeClassName={'active'} style={{ color: '#394578', textDecoration: "none" }} >

                        <ListItem button onClick={() => handleClick("terms")}>

                            <ListItemText primary="Terms & Conditions" />
                            {open === true && check.check === "terms" ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    </NavLink>

                    <Collapse in={open === true && check.check === "terms"} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding style={{paddingLeft:"15px"}}>
                            {value && value.data && value.data[0].accordian && value.data[0].accordian.map((val, key) =>

                                <ListItem button className={classses.nested}>

                                    <a href={`#${val.href}`} style={{ textDecoration: "none" }} >  <ListItemText className={classses.leftInnerContent} primary={val.title} /> </a>
                                </ListItem>
                            )}
                        </List>
                    </Collapse>
                </List>

            </Grid>
            <Grid item xs={12} >

                {/* <Typography className={classses.leftContent} variant="h6">
                        30 Day Return
            </Typography> */}
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"

                    className={classses.roots}
                >
                    <NavLink to={"/return"} activeClassName={'active'} style={{ color: '#394578', textDecoration: "none" }} >

                        <ListItem button
                            onClick={() => handleClick("return")}
                        >

                            <ListItemText primary="30 Day Return" />
                            {open === true && check.check === "return" ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    </NavLink>

                    <Collapse in={open === true && check.check === "return"} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding style={{paddingLeft:"15px"}}>
                            {value && value.data && value.data[0].accordian && value.data[0].accordian.map((val, key) =>

                                <ListItem button className={classses.nested}>

                                    <a >  <ListItemText className={classses.leftInnerContent} primary={val.title} /> </a>
                                </ListItem>
                            )}
                        </List>
                    </Collapse>
                </List>
            </Grid>
            <Grid item xs={12} >

                {/* <Typography className={classses.leftContent} variant="h6">
                        Delivery Info
            </Typography> */}
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"

                    className={classses.roots}
                >
                    <NavLink to={"/delivery"} activeClassName={'active'} style={{ color: '#394578', textDecoration: "none" }} >

                        <ListItem button
                            onClick={() => handleClick("delivery")}
                        >

                            <ListItemText primary="Delivery Info" />
                            {open === true && check.check === "delivery" ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    </NavLink>

                    <Collapse in={open === true && check.check === "delivery"} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding style={{paddingLeft:"15px"}}>
                            {value && value.data && value.data[0].accordian && value.data[0].accordian.map((val, key) =>

                                <ListItem button className={classses.nested}>

                                    <a >  <ListItemText className={classses.leftInnerContent} primary={val.title} /> </a>
                                </ListItem>
                            )}
                        </List>
                    </Collapse>
                </List>
            </Grid>
            <Grid item xs={12} >


                {/* <Typography className={classses.leftContent} variant="h6">
                        Privacy Policy
            </Typography> */}
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"

                    className={classses.roots}
                >


                    <NavLink to={"/privacy"} activeClassName={'active'} style={{ color: '#394578', textDecoration: "none" }} >
                        <ListItem button
                            onClick={() => handleClick("policy")}
                        >
                            <ListItemText primary="Privacy Policy" />
                            {open === true && check.check === "policy" ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    </NavLink>

                    <Collapse in={open === true && check.check === "policy"} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding style={{paddingLeft:"15px"}}>
                            {value && value.data && value.data[0].accordian && value.data[0].accordian.map((val, key) =>

                                <ListItem button className={classses.nested}>

                                    <a >  <ListItemText className={classses.leftInnerContent} primary={val.title} /> </a>
                                </ListItem>
                            )}
                        </List>
                    </Collapse>
                </List>
            </Grid>
            <Grid item xs={12} >

                {/* <Typography className={classses.leftContent} variant="h6">
                        Education
                    </Typography> */}
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"

                    className={classses.roots}
                >
                    <NavLink to={"/educationpage"} activeClassName={'active'} style={{ color: '#394578', textDecoration: "none" }} >

                        <ListItem button
                            onClick={() => handleClick("education")}
                        >

                            <ListItemText primary="Education" />
                            {open === true && check.check === "education" ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    </NavLink>

                    <Collapse in={open === true && check.check === "education"} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding style={{paddingLeft:"15px"}}>
                            {value && value.data && value.data[0].accordian && value.data[0].accordian.map((val, key) =>

                                <ListItem button className={classses.nested}>

                                    <a >  <ListItemText className={classses.leftInnerContent} primary={val.title} /> </a>
                                </ListItem>
                            )}
                        </List>
                    </Collapse>
                </List>
            </Grid>
            <Grid item xs={12} >

                {/* <Typography className={classses.leftContent} variant="h6">
                        Sitemap
                    </Typography> */}
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"

                    className={classses.roots}
                >
                    <NavLink to={"/sitemap"} activeClassName={'active'} style={{ color: '#394578', textDecoration: "none" }} >

                        <ListItem button
                            onClick={() => handleClick("sitemap")}
                        >

                            <ListItemText primary="Sitemap" />
                            {open === true && check.check === "sitemap" ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    </NavLink>

                    <Collapse in={open === true && check.check === "sitemap"} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding style={{paddingLeft:"15px"}}>
                            {value && value.data && value.data[0].accordian && value.data[0].accordian.map((val, key) =>

                                <ListItem button className={classses.nested}>

                                    <a >  <ListItemText className={classses.leftInnerContent} primary={val.title} /> </a>
                                </ListItem>
                            )}
                        </List>
                    </Collapse>
                </List>
            </Grid>
            <Grid item xs={12} >

                {/* <Typography className={classses.leftContent} variant="h6">
                        FAQ
                    </Typography> */}
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"

                    className={classses.roots}
                >
                    <NavLink to={"/faq"} activeClassName={'active'} style={{ color: '#394578', textDecoration: "none" }} >

                        <ListItem button
                            onClick={() => handleClick("faq")}
                        >

                            <ListItemText primary="FAQ" />
                            {open === true && check.check === "faq" ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    </NavLink>

                    <Collapse in={open === true && check.check === "faq"} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding style={{paddingLeft:"15px"}}>
                            {value && value.data && value.data[0].accordian && value.data[0].accordian.map((val, key) =>

                                <ListItem button className={classses.nested}>

                                    <a >  <ListItemText className={classses.leftInnerContent} primary={val.title} /> </a>
                                </ListItem>
                            )}
                        </List>
                    </Collapse>
                </List>
            </Grid>
        </Grid>
    )

}