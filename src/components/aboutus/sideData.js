import React from "react";
import { Grid } from "@material-ui/core";
import style from "./style";
import { NavLink } from "react-router-dom";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

var check = {};

export default function SideData(props) {
  
  const classes = style();
  const [open, setOpen] = React.useState(null);
  const handleClick = (value) => {
      
    if(open === value){
        check["check"] = null;
        setOpen(null);
    }
    else{
        check["check"] = value;
        setOpen(value);
    }
    
  };
 const handleUrl =(url, title) =>{
    let hashedLocation = window.location.hash.replace('#','')
    if(!open){
        if(hashedLocation){
            
            if(window.location.pathname+window.location.hash === url){
                if(open !== title) handleClick(title)
            }
        }
    }
 }
  const Component = (data) => {
    return (
      <NavLink
        to={data.data.link}
        activeClassName={"active"}
        className={classes.link}
        
      >
        {data.data.title}
      </NavLink>
    );
  };
  const ExpandCollapse = (val) =>{
      
      return(
        <Collapse
        in={open === val.data.title && check.check === val.data.title}
        timeout="auto"
        unmountOnExit
      >
        <List
          component="div"
          disablePadding
          style={{ paddingLeft: "15px" }}
          className={classes.sublist}
        >
          {val.data.subHeading.map((_val, key) => {
              handleUrl(`${val.data.link}#${_val.title.replace(/\s/g, '').toLowerCase()}`, val.data.title)
              let url = window.location.pathname+window.location.hash === `${val.data.link}#${_val.title.replace(/\s/g, '').toLowerCase()}`
              return(
                <ListItem button className={classes.nested}  selected={url}>
                  <a href={`${val.data.link}#${_val.title.replace(/\s/g, '').toLowerCase()}`} style={{ textDecoration: "none" }}>
                    <ListItemText
                      className={`${url? classes.leftInnerContentselected : classes.leftInnerContent}`}
                      primary={_val.title}
                    />{" "}
                  </a>
                </ListItem>
              )
          }
            )}
        </List>
      </Collapse>
      )
  }
 
  return (
    <Grid container xs={12} className={classes.shadow}>
     {props.data.map(val=>{
         
         return(
            <Grid item xs={12}>
            
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              style={{ padding: "0px" }}
              className={classes.roots}
            >
              <div className={classes.list}>
                <ListItem
                  button
                  
                  selected={window.location.pathname === val.link}
                >
                  <ListItemText primary={<Component className={classes.link} data={val}/>} />
                  { val.subHeading && val.subHeading.length > 0  && (open === val.title && check.check === val.title ? (
                    <ExpandLess color="primary" onClick={() => handleClick(val.title)} />
                  ) : (
                    <ExpandMore color="primary" onClick={() => handleClick(val.title)} />
                  ))}
                </ListItem>
              </div>
                    
                    {val.subHeading && val.subHeading.length > 0 && <ExpandCollapse data={val}/>}
             
            </List>
          </Grid>
         )
     })
      
  }
    </Grid>
  );
}
