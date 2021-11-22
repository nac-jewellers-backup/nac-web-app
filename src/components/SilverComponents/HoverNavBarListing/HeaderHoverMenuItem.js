import {
  FormControlLabel,
  Grid,
  List,
  ListItem,
  ListItemText,
  Popper,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useStyles } from "../styles";
import "./../header.css";
function HeaderHoverMenuItem(props) {
  const [activetab, setActivetab] = React.useState("earings");
  const [opens, setOpens] = React.useState(props.opened);
  const [target, setTarget] = React.useState(props.targetopened);
  const { onMouseLeave, onMouseOver, onClick } = props;
  const classes = useStyles(props);
  const mapper = props.filters
    ? props.listHoverItem
    : props.listHoverItem["menuOne"];
  const mapperSort = props.sort ? props.tabdata : "";
  // const mapper_menu2 = props.filters ? props.listHoverItem : props.listHoverItem['menuOne']
  const classHover = props.filters
    ? classes.mouseOverPopoverfilters
    : classes.mouseOverPopoverHeader;
  // onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}
  // listHoverItem
  useEffect(() => {
    setOpens(props.opened);
    setTarget(props.targetopened);
  });

  // top: '18px !important',
  return (
    <Grid container className={classes.root}>
      <Grid container item xs={12} className={classes.paperdiv}>
        <Popper
          open={opens}
          id={props.id}
          anchorEl={target}
          transition
          className={`${classes.mouseOverPopover} ${classHover}`}
          modifiers={{
            flip: {
              enabled: false,
            },
          }}
          placement="bottom"
        >
          <List
            component="nav"
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          >
            <Grid
              className={classes.subtopic1}
              style={{ width: `${props._width}` }}
            >
              {!props.filters &&
                !props.sort &&
                props.listHoverItem &&
                mapper &&
                mapper.map((menuList) => (
                  <ListItem
                    onMouseOver={
                      props.submenuDetails
                        ? (event) => {
                            props.submenuDetails(
                              menuList.imgContainer,
                              event.currentTarget,
                              menuList
                            );
                          }
                        : () => {}
                    }
                    className={classes.listedItems}
                    component="li"
                    onClick={() => {
                      window.location.href = menuList.url;
                    }}
                    style={{ overflow: "scroll" }}
                  >
                    <ListItemText variant>
                      <Typography className={classes.listedItemsvalue}>
                        {/* {menuList.title.toUpperCase()} */}
                        {menuList.title
                          ? menuList.title.toUpperCase()
                          : menuList}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              {!props.sort &&
                props.filters &&
                mapper &&
                mapper.map((menuList) => {
                  return menuList.constructor === Object ? (
                    <ListItem
                      component="li"
                      name={menuList ? menuList : menuList.title}
                      onClick={(e) => {
                        props.onchoosetypeprice(e, menuList);
                      }}
                      className={`${
                        props.state && props.state.numTwo === menuList.max
                          ? classes.mouseOverPopoverfiltersselected
                          : ""
                      } ${classes.mouseOverPopoverfilterslist}`}
                    >
                      <ListItemText
                        variant
                        className={`${
                          props.filters
                            ? classes.filtersListtopfilters
                            : classes.filtersList
                        }`}
                        style={{ fontSize: "0.9rem" }}
                      >
                        {menuList.label ? menuList.label : menuList}
                        {/* {props.filtercheck === 'price' && 
                      (<span> &nbsp;
                        (<i style={{fontSize:'14px'}} class="fa">&#xf156;</i>)
                      </span>)} */}
                      </ListItemText>
                    </ListItem>
                  ) : (
                    <ListItem
                      component="li"
                      name={menuList ? menuList : menuList.title}
                      onClick={(e) => {
                        props.onchoosetype(
                          menuList,
                          props.checked[
                            props.filtercheck &&
                              props.filtercheck.replace(/\s/g, "")
                          ][menuList] !== undefined
                            ? !props.checked[
                                props.filtercheck &&
                                  props.filtercheck.replace(/\s/g, "")
                              ][menuList]
                            : true,
                          e,
                          props.filtercheck
                            ? props.filtercheck.replace(/\s/g, "")
                            : "",
                          undefined,
                          props.state,
                          props.filtercheck
                            ? props.filtercheck.replace(/\s/g, "")
                            : ""
                        );
                      }}
                      className={`${
                        props.checked[
                          props.filtercheck &&
                            props.filtercheck.replace(/\s/g, "")
                        ][menuList]
                          ? classes.mouseOverPopoverfiltersselected
                          : ""
                      } ${classes.mouseOverPopoverfilterslist}`}
                    >
                      <ListItemText
                        variant
                        className={`${
                          props.filters
                            ? classes.filtersListtopfilters
                            : classes.filtersList
                        }`}
                        style={{ fontSize: "0.9rem", display: "inline" }}
                      >
                        {menuList.title
                          ? menuList.title.charAt(0).toUpperCase() +
                            menuList.title.slice(1)
                          : menuList.charAt(0).toUpperCase() +
                            menuList.slice(1)}
                        &nbsp;&nbsp;
                        {props.checked[
                          props.filtercheck &&
                            props.filtercheck.replace(/\s/g, "")
                        ][menuList] ? (
                          <Check
                            style={{ fontSize: "17px", fontWeight: "bold" }}
                          />
                        ) : (
                          ""
                        )}
                      </ListItemText>
                    </ListItem>
                  );
                })}
              {props.sort && (
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={props.values.values}
                  onChange={(e) => {
                    props.onchoosetype(e);
                  }}
                >
                  {mapperSort.map((menuList) => (
                    <ListItem
                      component="li"
                      name={menuList}
                      style={{ paddingTop: "0px", paddingBottom: "0px" }}
                    >
                      <ListItemText
                        variant
                        className={`${
                          props.sort
                            ? classes.filtersListtopfilters
                            : classes.filtersList
                        } ${classes.sortSilver}`}
                      >
                        <FormControlLabel
                          value={menuList}
                          control={
                            <Radio
                              className={classes.radioBtnsort}
                              style={{ visibility: "hidden" }}
                            />
                          }
                          label={menuList}
                        />
                      </ListItemText>
                    </ListItem>
                  ))}
                </RadioGroup>
              )}
            </Grid>
            {props.listHoverItem && props.listHoverItem["menuTwo"] && (
              <Grid className={classes.subtopic2}>
                {!props.filters &&
                  props.listHoverItem &&
                  props.listHoverItem["menuTwo"].map((menuList) => (
                    <ListItem
                      onMouseOver={
                        props.submenuDetails
                          ? (event) => {
                              props.submenuDetails(
                                menuList.imgContainer,
                                event.currentTarget
                              );
                            }
                          : () => {}
                      }
                      className={classes.listedItemsub}
                      component="li"
                      onClick={() => {
                        window.location.href = menuList.url;
                      }}
                    >
                      <ListItemText variant>
                        <Typography className={classes.listedItemsvalue}>
                          {/* {menuList.title.toUpperCase()} */}
                          {menuList.title
                            ? menuList.title.toUpperCase()
                            : menuList}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
              </Grid>
            )}
          </List>
        </Popper>
      </Grid>
    </Grid>
  );
}

export default HeaderHoverMenuItem;

HeaderHoverMenuItem.propTypes = {
  onMouseOver: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  listHoverItem: PropTypes.object.isRequired,
  tabdata: PropTypes.object.isRequired,
};
