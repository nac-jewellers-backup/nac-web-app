import { Box, Chip, Container, Grid } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { FilterOptionsContext } from "context";
import React from "react";
import { useDummyRequest } from "../../hooks";
import { filterParams } from "../../mappers";
import HeaderHoverMenuItem from "../SilverComponents/HoverNavBarListing/HeaderHoverMenuItem";
import MorefiltersOpen from "./moreFilters";
import { styles } from "./topFilterStyles";

export const TopFilters = (props) => {
  const [state, setState] = React.useState({
    open: false,
    panel: false,
    panel1: false,
    Menuopen: false,
    submenuOpen: false,
    selected: "",
    selected1: "",
    Checked: false,
    load: false,
    listHoverItem: "Jewellery",
    headerHeightprops: 0,
    anchorOne: null,
    targetopen: null,
    targetopenSubmenu: null,
    subTitleData: null,
    subMenuTarget: null,
    anchorEl: false,
    opened: false,
    morefiltersOpen: false,
    expanded: false,
    sortOpen: null,
  });
  const { mapped } = useDummyRequest(filterParams);
  const { setSort, setOffset, FilterOptionsCtx } =
    React.useContext(FilterOptionsContext);

  const submenuDetails = (data, target) => {
    setState({
      ...state,
      subMenuTarget: target,
      subTitleData: data,
      submenuOpen: true,
    });
  };
  const { sortOptions } = mapped;

  const classes = styles();
  // props.checked['material'] = 'silver'
  const handleMoreFilters = () => {
    setState({ ...state, morefiltersOpen: !state.morefiltersOpen });
  };
  const handleExpandClick = () => {
    setState({ ...state, expanded: !state.expanded });
  };
  const handleChange = (event) => {
    if (FilterOptionsCtx.offset > 0) FilterOptionsCtx.setOffset(0);
    setSort({ values: event.target.value });
    setState({ ...state, expanded: false });
    window.scrollTo(0, 0);
  };


  return Object.keys(mapped).length === 0 ? (
    <div>loading...</div>
  ) : (
    <div className={classes.filtersHeaderTop} id="topfilter">
      <Container style={{ marginTop: "25px" }}>
        <Grid container item xs={12}>
          <Grid item xs={12} style={{ marginBottom: 30, fontSize: "16px" }}>
            <div
              style={{ textAlign: "center", fontWeight: "bold", color: "#666" }}
            >
              FILTER YOUR SEARCH
            </div>
          </Grid>

          {/* ------------------------------ */}

          <Grid
            container
            item
            xs={12}
            id={"containerTitle"}
            justify="center"
            alignItems="center"
            className={`${classes.headerNavbarList1} ${classes.headerNavbarList}`}
            onMouseLeave={() => {
              setState({
                ...state,
                Menuopen: false,
                Checked: false,
                targetopen: null,
                listHoverItem: null,
              });
            }}
          >
            {/* ------------------------------- */}
            <Grid item xs={9} className="titleTop" id={"titleTop"}>
              <Grid
                container
                item
                xs={12}
                justify="space-between"
                style={{ display: "flex" }}
              >
                {/* <nav
            // style={{height:"35px", display:"flex"}}
            > */}
                {/* ---------------------------------------------------------------------------- */}
                <Grid
                  item
                  className={`${classes.menuListCursor} ${classes.menuListCursorfiltersLabel}`}
                  onMouseOver={(event) => {
                    setState({
                      ...state,
                      Menuopen: true,
                      submenuOpen: false,
                      subTitleData: null,
                      targetopen: event.currentTarget,
                      listHoverItem: "price",
                    });
                  }}
                >
                  <Grid
                    container
                    item
                    xl={9}
                    className={classes.spacingfilterdiv}
                  >
                    <Grid item className={classes.filtersLabel}>
                      <a
                        style={{ color: "gray", fontSize: 12, fontWeight: 550 }}
                      >
                        {"Price (₹)"}
                      </a>
                    </Grid>
                    <Grid
                      item
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      {state.listHoverItem === "price" ? (
                        <ArrowDropUpIcon />
                      ) : (
                        <ArrowDropDownIcon />
                      )}
                    </Grid>
                  </Grid>
                </Grid>

                {/* ---------------------------------------------------------- */}
                {props.filter.map((listName, i) => {
                  // let urlsmall = listName.title.toLowerCase()

                  if (
                    listName === "Style" ||

                    listName === "Occasion" ||
                    listName === "Collection" ||
                    listName === "Material" ||
                    listName === "Offers" ||
                    listName === "Weight" ||
                    listName === "Gemstones"
                  )
                    return (
                      <Grid
                        item
                        className={`${classes.menuListCursor} ${classes.menuListCursorfiltersLabel}`}
                        onMouseOver={(event) => {
                          setState({
                            ...state,
                            Menuopen: true,
                            submenuOpen: false,
                            subTitleData: null,
                            targetopen: event.currentTarget,
                            listHoverItem: listName,
                          });
                        }}
                      >
                        <Grid
                          container
                          item
                          xl={12}
                          className={classes.spacingfilterdiv}
                        >
                          <Grid item xs={12} className={classes.filtersLabel}
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}>
                            <a
                              style={{
                                fontSize: 12,
                                fontWeight: 550,
                              }}
                              href={listName.url}
                            >
                              {listName}
                            </a>
                            {state.listHoverItem === listName ? (
                              <ArrowDropUpIcon />
                            ) : (
                              <ArrowDropDownIcon style={{ color: "gray" }} />
                            )}
                          </Grid>

                        </Grid>
                      </Grid>
                    );
                  else {
                    return null;
                  }
                })}
                {/* ---------------------------------------------------------- */}

                {/* </nav> */}
              </Grid>
              {state.Menuopen && props.subFilter[state.listHoverItem] ? (
                <div>
                  <HeaderHoverMenuItem
                    tabdata={props.subFilter}
                    listHoverItem={props.subFilter[state.listHoverItem]}
                    // onMouseOver={(event) => { setState({ Menuopen: true }) }}
                    filters={true}
                    opened={state.Menuopen}
                    targetopened={state.targetopen}
                    // submenuDetails={()=>submenuDetails()}
                    filtercheck={state.listHoverItem}
                    checked={props.checked}
                    onchoosetype={props.onchangefunc}
                    state={props.state}
                    onchoosetypeprice={props.onpricechange}
                    // onMouseLeave={() => {
                    //   setState({ ...state, targetopen: null });
                    // }}
                    onMouseLeave={() => {
                      setState({ ...state, Menuopen: false });
                    }}
                  />
                </div>
              ) : (
                ""
              )}
            </Grid>
            <Grid
              item xs={1}
              className={`${classes.menuListCursorMoreFilters} ${classes.menuListCursorfiltersLabel}`}
              onClick={() => {
                handleMoreFilters();
              }}
            >
              <Grid
                container
                item
                xs={12}
                className={classes.spacingfilterdiv}
              >
                <Box alignItems="center" display="flex">
                  <Box>
                    <div
                      style={{ fontSize: 14, color: "gray", fontWeight: 550 }}
                    >
                      More&nbsp;
                    </div>
                  </Box>
                  <Box>
                    <AddBoxIcon
                      style={{
                        color: "gray",
                      }}
                    />
                  </Box>
                </Box>

              </Grid>
            </Grid>


            <Grid
              container
              xs={1}


            >
              <Grid
                item
                xs={12}
                onMouseLeave={() => {
                  setState({ ...state, expanded: false, targetopen: null });
                }}
                className={classes.shortby}
              >
                <Grid
                  container
                  item
                  xs={12}
                  className={`${classes.headerNavbarList1} ${classes.menuListCursorSort}`}
                  onMouseOver={(e) => {
                    setState({
                      ...state,
                      targetopen: e.currentTarget,
                      expanded: true,
                    });
                  }}
                >
                  <Grid item xs={8} style={{ margin: "auto" }}>
                    <div style={{ fontSize: 14, fontWeight: 550, color: "gray" }}>
                      Sort
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    {state.expanded ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                  </Grid>
                </Grid>

                {state.expanded ? (
                  <HeaderHoverMenuItem
                    tabdata={sortOptions}
                    listHoverItem={sortOptions}
                    // onMouseOver={(event) => { setState({ Menuopen: true }) }}
                    sort={true}
                    filters={true}
                    opened={state.expanded}
                    targetopened={state.targetopen}
                    // submenuDetails={()=>submenuDetails()}
                    // filtercheck={state.listHoverItem}
                    values={FilterOptionsCtx.sort}
                    onchoosetype={handleChange}
                    onMouseLeave={() => {
                      setState({ ...state, expanded: false, targetopen: null });
                    }}
                  />
                ) : (
                  ""
                )}
              </Grid>
            </Grid>

          </Grid>
          {/* ---------------------------------------------------------- */}
          <Grid
            container
            xs={12}
            style={{ display: "flex", justifyContent: "flex-end" }}
            className={classes.chipContainers}
          >
            <Grid item xs={10}>
              <>
                {props?.chips.length > 0 ? (
                  <Chip
                    style
                    size="small"
                    label={"Clear All Fillters"}
                    style={{
                      padding: "14px 14px",
                      marginRight: 5,
                      backgroundColor: "#FFFFFF",
                      border: "1px solid gray",
                      color: "#0C2879",
                      borderRadius: "0px",
                      textTransform: "uppercase",

                      fontFamily: "notoSerif-regular",
                      cursor: "pointer",
                    }}
                    deleteIcon={false}
                    onClick={() => {
                      props.history.push("/jewellery");
                      window.location.reload();
                    }}
                  />
                ) : (
                  ""
                )}
              </>
              {props?.chips.length > 0
                ? props?.chips.map((data) => {
                  return data.label === "Silver" ? null : (
                    <Chip
                      className={classes.chips}
                      size="small"
                      label={data.label}
                      style={{
                        padding: "14px 14px",
                        marginRight: 6,
                        marginLeft: 2,
                        border: "1px solid gray",
                        borderRadius: "0px",
                        textTransform: "uppercase",
                        backgroundColor: "white",
                        cursor: "pointer",
                      }}
                      onDelete={() => props.click(data.label)}
                      deleteIcon={
                        data.label ? (
                          <i
                            className="search-choice-close"
                            class="fa fa-times"
                          ></i>
                        ) : (
                          ""
                        )
                      }
                    />
                  );
                })
                : ""}
            </Grid>
            <Grid
              item
              xs={2}
              onMouseLeave={() => {
                setState({ ...state, expanded: false, targetopen: null });
              }}
              className={classes.shortby}
            >
              <Grid
                container
                item
                xs={12}
                className={`${classes.headerNavbarList1} ${classes.menuListCursorSort}`}
                onMouseOver={(e) => {
                  setState({
                    ...state,
                    targetopen: e.currentTarget,
                    expanded: true,
                  });
                }}
              >

              </Grid>

              {state.expanded ? (
                <HeaderHoverMenuItem
                  tabdata={sortOptions}
                  listHoverItem={sortOptions}
                  // onMouseOver={(event) => { setState({ Menuopen: true }) }}
                  sort={true}
                  filters={true}
                  opened={state.expanded}
                  targetopened={state.targetopen}
                  // submenuDetails={()=>submenuDetails()}
                  // filtercheck={state.listHoverItem}
                  values={FilterOptionsCtx.sort}
                  onchoosetype={handleChange}
                  onMouseLeave={() => {
                    setState({ ...state, expanded: false, targetopen: null });
                  }}
                />
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </Grid>

        <MorefiltersOpen
          open={state.morefiltersOpen}
          state={props.state}
          onpricechange={props.onpricechange}
          filter={props.filter}
          onchoosetype={props.onchangefunc}
          checked={props.checked}
          subFilter={props.subFilter}
          handleClose={handleMoreFilters}
        />

        {/* <Grid container xs={12} style={{ margin: "0px 17px" }}></Grid> */}
      </Container>
    </div>
  );
};
