import {
  AppBar,
  Badge,
  Chip,
  ClickAwayListener,
  Container,
  Drawer,
  FormControl,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Modal,
  NativeSelect,
  Select,
  Toolbar,
  Typography
} from "@material-ui/core";
// import HeaderNotification from './Notification/HeaderNotification'
import { withStyles } from "@material-ui/core/styles";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MenuIcon from "@material-ui/icons/Menu";
import classNames from "classnames";
import ElasticSearch from "components/ElasticSearch/ElasticSearch";
import { CartContext } from "context";
import React, { Component } from "react";
import Seach from "../../assets/search";
import StyloriSLogo from "../../assets/silverOpenLink.png";
import { useDummyRequest } from "../../hooks";
import { headerDataSilver } from "../../mappers";
import "./header.css";
import HeaderHoversubMenu from "./HoverNavBarListing/HeaderHoversubMenu";
import { styles } from "./styles";

let user_id = localStorage.getItem("user_id")
  ? localStorage.getItem("user_id")
  : {};
// var path = window.location.pathname.split('/').pop();

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlist: this.props.datas,
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
      scroll: false,
    };
    this.topZero = React.createRef();
  }

  componentDidMount() {
    var _pathname = window.location.pathname.split("/");
    if (
      window.location.pathname === "/cart" ||
      window.location.pathname === "/checkout" ||
      _pathname[1] === "paymentsuccess" ||
      _pathname[1] === "paymentfail"
    ) {
      return true;
    } else {
      window.addEventListener("scroll", this.scrolling);
      if (!this.state.Menuopen && !this.state.submenuOpen) {
        return this.setState({ subTitleData: "", subMenuTarget: "" });
      } else {
        return true;
      }
    }
    console.log(this.props);
    debugger;
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  handleClick = (e, name, value) => {
    this.setState({ [name]: !value });
  };
  selectItem = (name) => {
    let { selected } = this.state;
    let value = selected === name ? "" : name;
    this.setState({ selected: value });
  };
  selectItem1 = (name) => {
    let { selected1 } = this.state;
    let value = selected1 === name ? "" : name;
    this.setState({ selected1: value });
  };
  headerTransitions = () => {
    document.getElementById("topNav").style.paddingTop = "0";
    document.getElementById("topNav").style.transition = "height 0.5s";
    if (document.getElementById("SliderFilter")) {
      document.getElementById("SliderFilter").style.top = "120px";
      document.getElementById("SliderFilter").style.transition = "height 0.5s";
      document.getElementById("filterBy").style.top = "80px";
      document.getElementById("filterBy").style.transition = "height 0.5s";
    }
  };

  handleClose = () => {
    this.setState({ opened: !this.state.opened });
  };

  handleClickPopover = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClosePopover = () => {
    this.setState({
      anchorEl: false,
    });
  };
  scrolling = () => {
    if (
      document.getElementsByTagName("body")[0].scrollHeight >
      window.innerHeight &&
      window.scrollY > 0
    ) {
      if (document.getElementById("topNav")) {
        document.getElementById("topNav").style.marginTop = "-110px";
        this.setState({ scroll: true });
      }
      if (document.getElementById("logoImage")) {
        document.getElementById("logoImage").style.width = "56%";
        document.getElementById("logoImage").style.height = "auto";
        document.getElementById("logoImage").style.marginTop = "8px";
      }
    } else {
      if (document.getElementById("topNav")) {
        document.getElementById("topNav").style.marginTop = "0px";
      }
      if (document.getElementById("logoImage")) {
        document.getElementById("logoImage").style.width = "66%";
        document.getElementById("logoImage").style.marginTop = "0px";
      }
    }
    if (
      document.getElementsByTagName("body")[0].scrollHeight >
      window.innerHeight &&
      window.scrollY === 0
    ) {
      this.setState({ scroll: false });
    }
  };
  submenuDetails = (data, target) => {
    this.setState({
      subMenuTarget: target,
      subTitleData: data,
      submenuOpen: true,
    });
  };
  handleExpandClickClose = () => {
    this.setState({ open: false });
  };

  render() {
    const styloriLogo =
      "data:image/png;base64,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";
    const {
      mainlist,
      Jewellery,
      subheader,
      menuListHeader,
      menuLists,

      wishcount,
    } = this.props.data;
    const { wishlist, cartcount } = this.props;

    let { selected, selected1 } = this.state;
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const openPopover = anchorEl;
    const opened = this.state;
    var a = window.location.pathname;
    var b = a.split("/");

    return (
      <div
        style={{ top: "0", zIndex: "1000", width: "100%" }}
        className={"headerTop"}
      >
        <Hidden smDown>
          <div
            className="header-appbar-sticky1"
            id="headerDiv"
            style={{ position: "fixed", zIndex: "1000" }}
          >
            <AppBar
              className="header-appbarsilver1 "
              id="topNav"
              style={{ transition: "height 0.2s" }}
            >
              <Container maxWidth="lg" id="searchcontainer">
                <Grid
                  container
                  spacing={12}
                  className={
                    window.location.pathname === "/cart" ||
                      b[1] === "paymentsuccess" ||
                      b[1] === "paymentfail" ||
                      window.location.pathname === "/checkout"
                      ? "cartheader"
                      : "cartcardrelese"
                  }
                >
                  <Grid
                    container
                    item
                    xs={12}
                    justify="flex-end"
                    alignItems="center"
                  >
                    <Grid item xs={3}
                      style={{
                        marginTop: window.location.pathname == "/cart" || window.location.pathname == "/checkout" ? "20px" : ""
                      }}

                      className="logoImgHeader1" alignItems="center">

                      {
                        window.location.pathname == "/cart" || window.location.pathname == "/checkout" ?

                          <IconButton size="small" onClick={() => {
                            window.history.back()
                          }}>
                            <ArrowBackIcon color="secondary" />&nbsp;&nbsp;
                          </IconButton>
                          : " "
                      }


                      <div
                        id="logoDiv1"
                        className="logoDiv1"
                        onClick={() => {
                          window.location.href = "/";
                        }}
                        style={{ cursor: "pointer" }}
                      >

                        <img
                          style={{
                            transition: "height 0.2s",

                          }}
                          className={`imges`}
                          src={styloriLogo}
                          onLoad={() => this.setState({ load: true })}
                          onLoadedData={() => this.setState({ load: false })}
                          alt=""
                        />
                      </div>
                    </Grid>

                    <Grid
                      container
                      item
                      xs={9}
                      justify="flex-end"
                      alignItems="center"
                    >
                      <Grid
                        container
                        item
                        xs={12}
                        className={classes.goldCurrentRate}
                      >
                        <Grid container item xs={4} alignItems="center">
                          {/* <Grid item xs={6} style={{ textAlign: "right" }}>
                            Today's Rate : &nbsp;
                          </Grid> */}
                          <Grid item xs={6}>
                            <FormControl
                              variant="outlined"
                              className={classes.goldRateformControl}
                            >
                              {/* <InputLabel id="demo-simple-select-outlined-label">
                                Age
                              </InputLabel> */}
                              {/* <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={22}
                                //   onChange={handleChange}
                                // label="Age"
                              >
                                <MenuItem value="22">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value={22}>
                                  Gold 22k/1g ₹ 3256
                                </MenuItem>
                                <MenuItem value={24}>Twenty</MenuItem>
                                <MenuItem value={26}>Thirty</MenuItem>
                              </Select> */}
                              <NativeSelect
                                defaultValue={30}
                                inputProps={{
                                  name: "name",
                                  id: "uncontrolled-native",
                                  className: {
                                    root: classes.selects
                                  }
                                }}
                              >
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Gold 22k/1g ₹ 3256</option>
                              </NativeSelect>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <div className={`head-icons1 ${classes.headIcons}`}>
                          <i class={`fa fa-phone  ${classes.iconFafa}`}></i>
                          <Typography className={classes.callerNum}>
                            1800 102 0330
                          </Typography>
                          <Grid
                            onClick={this.handleClose}
                            style={{ cursor: "pointer" }}
                            className={`search`}
                          >
                            <Grid container>
                              <Typography
                                style={{ flexGrow: 1, fontSize: "0.96rem" }}
                              >
                                Search
                              </Typography>
                              <div
                                className={classes.searchcontainer}
                                style={{ width: "25px" }}
                              >
                                <Seach className={"searchsvg"} />
                              </div>
                            </Grid>
                          </Grid>

                          {localStorage.getItem("true") ? (
                            <div className="tooltip ">
                              <span
                                class="MuiBadge-root"
                                aria-owns={openPopover ? "simple-popper" : ""}
                                onClick={() => {
                                  window.location.href = "/account-profile";
                                }}
                              >
                                <i
                                  style={{ fontSize: "20px" }}
                                  class={`fa fa-user  ${classes.iconFafa}`}
                                ></i>
                                <span className="tooltip-slog">
                                  {Boolean(localStorage.getItem("user_id"))
                                    ? "Account"
                                    : "Login"}
                                </span>
                              </span>
                            </div>
                          ) : (
                            <div className="tooltip ">
                              <span
                                class="MuiBadge-root"
                                onClick={() =>
                                  (window.location.pathname = "/login")
                                }
                              >
                                <i
                                  style={{ fontSize: "20px" }}
                                  class={`fa fa-user  ${classes.iconFafa}`}
                                ></i>
                                <span className="tooltip-slog">
                                  {Boolean(localStorage.getItem("user_id"))
                                    ? "Account"
                                    : "Login"}
                                </span>
                              </span>
                            </div>
                          )}

                          <div className="tooltip">
                            <Badge
                              // style={{ marginTop: "9px" }}
                              badgeContent={
                                this.props.wishlist &&
                                  this.props.wishlist.wishlistdata &&
                                  this.props.wishlist.wishlistdata.nodes &&
                                  this.props.wishlist.wishlistdata.nodes.length >
                                  0
                                  ? this.props.wishlist &&
                                  this.props.wishlist.wishlistdata &&
                                  this.props.wishlist.wishlistdata.nodes &&
                                  this.props.wishlist.wishlistdata.nodes
                                    .length
                                  : wishlist?.allUserWhislists?.nodes.length
                              }
                              color="secondary"
                            >
                              <i
                                style={{ fontSize: "18px" }}
                                class={`fa fa-heart  ${classes.iconFafaheart}`}
                                onClick={() => {
                                  if (user_id.length > 0) {
                                    window.location.href = `/account${"-wishlist"}`;
                                  } else {
                                    window.location.href = "/login";
                                  }
                                }}
                              ></i>
                              <span className="tooltip-s">Wishlist</span>
                            </Badge>
                          </div>

                          <div className="tooltip">
                            <Badge
                              // style={{ marginTop: "9px" }}
                              badgeContent={
                                this.props.cart_count &&
                                  this.props.cart_count.data &&
                                  this.props.cart_count.data.allTransSkuLists &&
                                  this.props.cart_count.data.allTransSkuLists
                                    .nodes.length > 0
                                  ? this.props.cart_count &&
                                  this.props.cart_count.data &&
                                  this.props.cart_count.data
                                    .allTransSkuLists &&
                                  this.props.cart_count.data.allTransSkuLists
                                    .nodes.length
                                  : cartcount?.allShoppingCarts?.nodes[0]
                                    ?.shoppingCartItemsByShoppingCartId
                                    ?.totalCount
                              }
                              color="secondary"
                            >
                              <a href="/cart" className="highlighter">
                                <i
                                  style={{ fontSize: "20px", marginTop: "-10px" }}
                                  class={`fa fa-shopping-bag  ${classes.iconFafa}`}
                                ></i>
                                <span className="tooltip-s">Cart</span>
                              </a>{" "}
                            </Badge>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Container>
              <div
                onMouseLeave={(event) => {
                  this.setState({
                    Menuopen: false,
                    submenuOpen: false,
                    subTitleData: null,
                    targetopen: false,
                    listHoverItem: "",
                  });
                }}
              >
                {window.location.pathname === "/cart" ||
                  window.location.pathname === "/checkout" ||
                  b[1] === "paymentsuccess" ||
                  b[1] === "paymentfail" ? (
                  ""
                ) : (
                  <Grid
                    id="headerContainer"
                    style={{ marginTop: "15px", width: "100%" }}
                    className={classes.menunac}
                    container
                  >
                    <Grid
                      item
                      style={{ height: "40px", padding: "0px 30px" }}
                      xs={11}
                      xl={11}
                      className={`header-navbar-list1 ${classes.headerNavbarList}`}
                    >
                      {/* <div> */}
                      {menuListHeader.map((listName) => {
                        let urlsmall = listName.title.toLowerCase();
                        return (
                          <a
                            href={listName.url}
                            onMouseOver={(event) => {
                              this.setState({
                                Menuopen: true,
                                submenuOpen: true,
                                subTitleData: null,
                                targetopen: event.currentTarget,
                                listHoverItem: listName.title,
                                // .replace(
                                //   / +/g,
                                //   "ss"
                                // ),
                              });
                            }}
                            className={
                              //  window.location.pathname === listName.url
                              this.Menuopen === true ||
                                this.submenuOpen === true
                                ? classes.seletectedMenu
                                : classes.menuListCursor
                            }
                          >
                            {listName.title}
                          </a>
                        );
                      })}
                      {/* </div> */}

                      {/* {this.state.Menuopen &&
        menuLists[this.state.listHoverItem] ? (
          <HeaderHoverMenuItem
            tabdata={this.props.data}
            listHoverItem={
              menuLists[this.state.listHoverItem]
            }
            onMouseOver={(event) => {
              this.setState({
                Menuopen: true,
                targetopenSubmenu: event.currentTarget,
              });
            }}
            opened={this.state.Menuopen}
            targetopened={this.state.targetopen}
            submenuDetails={this.submenuDetails}
            onMouseLeave={() => {
              this.setState({ targetopen: null });
            }}
          />
        ) : (
          ""
        )} */}

                      {/* <div style={{ flexGrow: 1 }}></div> */}
                    </Grid>
                    <Grid
                      xs={1}
                      xl={1}
                      style={{ display: "flex" }}
                      className={classes.menustylori}
                    >
                      <div style={{ flexGrow: 1 }}></div>
                      <div
                        className={classes.styloriEditing}
                      // onMouseLeave={(event) => {
                      //   this.setState({
                      //     Menuopen: false,
                      //     submenuOpen: false,
                      //     subTitleData: null,
                      //     targetopen: false,
                      //     listHoverItem: "",
                      //     // .replace(
                      //     //   / +/g,
                      //     //   "ss"
                      //     // ),
                      //   });
                      // }}
                      >
                        <a
                          href="https://www.stylori.com/"
                          style={{
                            textDecoration: "none",
                            color: "#fff",
                            padding: "8px 7px 0 7px",
                          }}
                          onMouseOver={(event) => {
                            this.setState({
                              Menuopen: true,
                              submenuOpen: true,
                              subTitleData: null,
                              targetopen: event.currentTarget,
                              listHoverItem: "STYLORI",
                              // .replace(
                              //   / +/g,
                              //   "ss"
                              // ),
                            });
                          }}
                        >
                          <img
                            src={StyloriSLogo}
                            width="30px"
                            height="30px"
                            style={{ padding: "5px 15px 0px 15px" }}
                          ></img>
                        </a>
                      </div>
                    </Grid>
                  </Grid>
                )}
                {/* <Grid container id="headerContainerTop"></Grid> */}
                {["JEWELLERY", "PURCHASEPLANS"].indexOf(
                  this.state.listHoverItem
                ) === -1 && this.state.Menuopen ? (
                  <HeaderHoversubMenu
                    opened={this.state.Menuopen}
                    scroll={this.state.scroll}
                    // onMouseOver={(event) => {
                    //   this.setState({ submenuOpen: true });
                    // }}
                    listHoverItem={menuLists[this.state.listHoverItem]}
                    listitem={this.state.listHoverItem}
                    data={this.state.subTitleData}
                    subMenuTarget={this.subMenuTarget}
                    targetopened={this.state.targetopen}
                  />
                ) : (
                  ""
                )}
              </div>
            </AppBar>
          </div>
        </Hidden>

        <Modal
          open={this.state.opened}
          onClose={this.handleClose}
          className="docc-modal"
        >
          <ElasticSearch handleClose={this.handleClose} />
        </Modal>
        <Hidden mdUp>
          <Grid>
            <Grid style={{ position: "fixed", zIndex: "1300" }}>
              <div className="header-appbar-sticky1">
                <AppBar className="header-appbar-moblie1" id="smallScreen">
                  <Toolbar className={"toolbarsetting"}>
                    <Grid
                      container
                      item
                      xs={1}
                      sm={1}
                      md={1}
                      lg={1}
                      xl={1}
                      justify="center"
                      alignItems="center"
                      style={{ paddingTop: "45px" }}
                    >
                      <IconButton onClick={this.handleDrawerOpen}>
                        <MenuIcon className={classes.mobileNavIcon} />
                      </IconButton>
                    </Grid>

                    <Grid item xs={5} className="logoImgHeader1">
                      <div
                        className="logoDiv1"
                        onClick={() => {
                          window.location.href = "/";
                        }}
                        style={{ cursor: "pointer" }}
                        style={{ paddingTop: "47px" }}
                      >
                        <img
                          className={`imgsilver`}
                          src={styloriLogo}
                          style={{ width: "70%", height: "auto" }}
                          onLoad={() => this.setState({ load: true })}
                          onLoadedData={() => this.setState({ load: false })}
                          alt=""
                        />
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <Grid container item xs={12}>
                        <Grid
                          container
                          item
                          xs={12}
                          className={classes.goldCurrentRate}
                        >
                          <Grid container item xs={12} alignItems="center">
                            {/* <Grid item xs={6} style={{ textAlign: "right" }}>
                              Today's Rate : &nbsp;
                            </Grid> */}
                            <Grid item xs={12}>
                              <FormControl
                                variant="outlined"
                                className={
                                  classes.goldRateformControlSmallScreen
                                }
                              >
                                {/* <InputLabel id="demo-simple-select-outlined-label">
                                Age
                              </InputLabel> */}
                                <Select
                                  labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined"
                                  value={22}
                                //   onChange={handleChange}
                                // label="Age"
                                >
                                  <MenuItem value="22">
                                    <em>None</em>
                                  </MenuItem>
                                  <MenuItem value={22}>
                                    Gold 22k/1t ₹3256
                                  </MenuItem>
                                  <MenuItem value={24}>Twenty</MenuItem>
                                  <MenuItem value={26}>Thirty</MenuItem>
                                </Select>
                              </FormControl>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12}>
                          <div
                            onClick={this.handleSearch}
                            className="mobli-icon1"
                          >
                            <Grid
                              item
                              xs={12}
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignContent: "center",
                                paddingRight: "10px",
                                paddingBottom: "15px",
                              }}
                            >
                              <div
                                className={`head-icons1 ${classes.headIcons}`}
                              >
                                <div
                                  id="search"
                                  onClick={this.handleClose}
                                  className={classes.searchcontainTop}
                                >
                                  <Seach className={"searchsvgmobile"} />
                                </div>
                                {localStorage.getItem("true") ? (
                                  <span
                                    aria-owns={
                                      openPopover ? "simple-popper" : ""
                                    }
                                    onClick={() => {
                                      window.location.href = "/account-profile";
                                    }}
                                  >
                                    <i
                                      class={`fa fa-user  ${classes.iconFafa}`}
                                      style={{
                                        display: "flex",
                                        alignItems: "flex-end",
                                        justifyContent: "center",
                                      }}
                                    ></i>
                                  </span>
                                ) : (
                                  <span
                                    onClick={() =>
                                      (window.location.pathname = "/login")
                                    }
                                  >
                                    <i
                                      class={`fa fa-user  ${classes.iconFafa}`}
                                      style={{
                                        display: "flex",
                                        alignItems: "flex-end",
                                        justifyContent: "center",
                                      }}
                                    ></i>
                                  </span>
                                )}
                                <Badge
                                  badgeContent={
                                    this.props.wishlist &&
                                      this.props.wishlist.wishlistdata &&
                                      this.props.wishlist.wishlistdata.nodes &&
                                      this.props.wishlist.wishlistdata.nodes
                                        .length > 0
                                      ? this.props.wishlist &&
                                      this.props.wishlist.wishlistdata &&
                                      this.props.wishlist.wishlistdata
                                        .nodes &&
                                      this.props.wishlist.wishlistdata.nodes
                                        .length
                                      : "0"
                                  }
                                  color="secondary"
                                >
                                  <i
                                    class={`fa fa-heart ${classes.iconFafaheart}`}
                                    onClick={() => {
                                      if (user_id.length > 0) {
                                        window.location.href = `/account${"-wishlist"}`;
                                      } else {
                                        window.location.href = "/login";
                                      }
                                    }}
                                  ></i>
                                </Badge>
                                <Badge
                                  style={{ fontSize: "9px" }}
                                  badgeContent={
                                    this.props.cart_count &&
                                      this.props.cart_count.data &&
                                      this.props.cart_count.data
                                        .allTransSkuLists &&
                                      this.props.cart_count.data.allTransSkuLists
                                        .nodes.length > 0
                                      ? this.props.cart_count &&
                                      this.props.cart_count.data &&
                                      this.props.cart_count.data
                                        .allTransSkuLists &&
                                      this.props.cart_count.data
                                        .allTransSkuLists.nodes.length
                                      : "0"
                                  }
                                  color="secondary"
                                >
                                  <a href="/cart">
                                    <i
                                      style={{ fontSize: "15px !important" }}
                                      class={`fa fa-shopping-cart  ${classes.iconFafa}`}
                                    ></i>
                                  </a>
                                </Badge>
                              </div>
                            </Grid>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Toolbar>
                </AppBar>
              </div>
            </Grid>
          </Grid>
          <Drawer
            anchor="left"
            open={this.state.open}
            classes={{
              paper: classNames(classes.drawerPaper),
            }}
          >
            <ClickAwayListener
              onClickAway={(e) => this.handleExpandClickClose(e)}
            >
              <div>
                <div className={classes.menuheader}>
                  <IconButton
                    onClick={this.handleDrawerClose}
                    className={classes.iconbuttons}
                  >
                    <i class="fa fa-times closebus"></i>
                  </IconButton>
                  <Typography className={classes.headertext}>MENU</Typography>
                </div>
                <List className={classes.sideNavListing}>
                  {mainlist.map((row) => {
                    return (
                      <>
                        <ListItem
                          button
                          key={row.name}
                          className={
                            row.name === selected
                              ? classes.drawerlisttext
                              : "drawer-list1"
                          }
                          selected={window.location.pathname === row.url}
                          style={{ padding: "8.5px 25px" }}
                        >
                          <ListItemText
                            onClick={() => {
                              window.location.href = row.url;
                            }}
                          >
                            <Typography className="newlist-items1" variant="">
                              {row.name.toUpperCase()}
                            </Typography>
                          </ListItemText>
                          <div
                            onClick={() =>
                              Jewellery[row.name] !== undefined
                                ? this.selectItem(row.name)
                                : ""
                            }
                          >
                            {Jewellery[row.name] !== undefined ? (
                              row.name === selected ? (
                                <i class="fa fa-caret-up drawer-arrow"></i>
                              ) : (
                                <i class="fa fa-caret-down drawer-arrow"></i>
                              )
                            ) : (
                              ""
                            )}
                          </div>
                        </ListItem>
                        <div style={{ padding: "3px" }}>
                          {
                            selected === row.name && (
                              // Object.keys(Jewellery[selected]).map((row2) => (
                              <>
                                {Jewellery[selected]?.styles && (
                                  <>
                                    {/* {Jewellery[selected]?.styles === "COLLECTIONS" && (<div></div>)} */}
                                    <ListItem
                                      button
                                      // key={Jewellery[selected][row2].name}
                                      className={`${classes.subtitleContainer} `}
                                      disableGutters
                                      style={{ padding: "5px 25px" }}
                                    >
                                      <ListItemText
                                      // onClick={() => {
                                      //   window.location.href =
                                      //     Jewellery[selected][row2].url;
                                      // }}
                                      >
                                        <Typography
                                          className={`${classes.subtitles} ${classes.subtitleContainersubmenu1}`}
                                          variant=""
                                          style={{ fontWeight: "bold" }}
                                        >
                                          {Jewellery[
                                            selected
                                          ]?.styles.name?.toUpperCase()}
                                        </Typography>
                                        {selected === "COLLECTIONS" ? null : (
                                          <div
                                            style={{
                                              borderBottom:
                                                "1.5px solid#2F348B",
                                            }}
                                          ></div>
                                        )}
                                      </ListItemText>
                                      {/* <div
                                  onClick={() =>
                                    this.selectItem1(
                                      Jewellery[selected][row2].name
                                    )
                                  }
                                >
                                  {selected1 ===
                                  Jewellery[selected][row2].name ? (
                                    <i class="fa fa-caret-up drawer-arrow-submenu1"></i>
                                  ) : (
                                    <i class="fa fa-caret-down drawer-arrow-submenu1"></i>
                                  )}
                                </div> */}
                                    </ListItem>

                                    <Grid container className={classes.imgdiv}>
                                      {Jewellery[selected]?.styles.img?.map(
                                        (val) => (
                                          <Grid
                                            item
                                            xs={6}
                                            sm={6}
                                            className={classes.griddiv}
                                          >
                                            <div className={classes.imgsubdiv}>
                                              <p className={classes.headtext}>
                                                {val.content}
                                              </p>
                                              <img
                                                style={{
                                                  width: "35%",
                                                  margin: "auto",
                                                }}
                                                src={val.img}
                                              />
                                            </div>
                                          </Grid>
                                        )
                                      )}
                                    </Grid>
                                  </>
                                )}
                                {/* for metal and stone */}
                                {Jewellery[selected]?.stone && (
                                  <>
                                    <ListItem
                                      button
                                      className={`${classes.subtitleContainer} `}
                                      disableGutters
                                      style={{ padding: "5px 25px" }}
                                    >
                                      <ListItemText>
                                        <Typography
                                          className={`${classes.subtitles} ${classes.subtitleContainersubmenu1}`}
                                          variant=""
                                          style={{ fontWeight: "bold" }}
                                        >
                                          {Jewellery[
                                            selected
                                          ]?.stone.name2?.toUpperCase()}
                                        </Typography>
                                        <div
                                          style={{
                                            borderBottom: "1.5px solid#2F348B",
                                          }}
                                        ></div>
                                      </ListItemText>
                                    </ListItem>

                                    <Grid
                                      container
                                      className={classes.metaldiv}
                                    >
                                      {Jewellery[
                                        selected
                                      ]?.stone.stone_metal?.map((val) => (
                                        <Grid
                                          item
                                          xs={6}
                                          sm={6}
                                          className={classes.griddivstone}
                                        >
                                          <div
                                            // style={{
                                            //   backgroundImage: `url(${val.icon})`,
                                            //   width: `${val.width}`,
                                            //   height: `${val.height}`,
                                            //   backgroundPosition: `${val.position}`,
                                            // }}
                                            className={classes.iconstyle}
                                          >
                                            <img
                                              style={{
                                                width: "11%",
                                                marginRight: "10px",
                                              }}
                                              src={val.icon}
                                            />
                                            <p
                                              // style={{ marginTop: "58px" }}
                                              className={classes.ptext}
                                            >
                                              {val.name}
                                            </p>
                                          </div>
                                        </Grid>
                                      ))}
                                    </Grid>
                                  </>
                                )}

                                {/* for features */}
                                {Jewellery[selected]?.feature && (
                                  <>
                                    {Jewellery[
                                      selected
                                    ]?.feature?.extrafeature?.map((val) => (
                                      <>
                                        <ListItem
                                          button
                                          className={`${classes.subtitleContainer} `}
                                          disableGutters
                                          style={{
                                            padding: "10px 25px 3px 25px",
                                          }}
                                        >
                                          <ListItemText>
                                            <div
                                              style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                              }}
                                              onClick={() =>
                                                this.selectItem1(val.name)
                                              }
                                            >
                                              <Typography
                                                className={`${classes.subtitles} ${classes.subtitleContainersubmenu1}`}
                                                variant=""
                                              >
                                                {val.name.toUpperCase()}
                                              </Typography>
                                              {selected1 === val.name ? (
                                                <i class="fa fa-chevron-up drawer-arrow-submenu2"></i>
                                              ) : (
                                                <i class="fa fa-chevron-down drawer-arrow-submenu2"></i>
                                              )}
                                            </div>
                                            <div
                                              style={{
                                                borderBottom:
                                                  "1.5px solid#2F348B",
                                              }}
                                            ></div>
                                          </ListItemText>
                                        </ListItem>
                                        <Grid
                                          style={{ padding: "6px 25px 0 25px" }}
                                        >
                                          {selected1 === val.name && (
                                            <>
                                              {val?.feature?.map((v) => (
                                                <div>
                                                  <p
                                                    className={classes.ptext}
                                                    style={{
                                                      fontSize: "14px",
                                                      color: "#6E6F72",
                                                      marginTop: "2px",
                                                    }}
                                                  >
                                                    {v}
                                                  </p>
                                                </div>
                                              ))}
                                            </>
                                          )}
                                        </Grid>
                                      </>
                                    ))}
                                  </>
                                )}

                                {/* FOR OPTIONS */}
                                {Jewellery[selected]?.option && (
                                  <>
                                    <Grid style={{ padding: "0px 25px" }}>
                                      {Jewellery[selected]?.option.option?.map(
                                        (v) => (
                                          <div>
                                            <p
                                              className={classes.optiontext}
                                              style={{ paddingTop: "3px" }}
                                            >
                                              {v}
                                            </p>
                                          </div>
                                        )
                                      )}
                                    </Grid>
                                  </>
                                )}

                                {/* for price */}
                                {Jewellery[selected]?.price && (
                                  <>
                                    <ListItem
                                      button
                                      className={`${classes.subtitleContainer} `}
                                      disableGutters
                                      style={{ padding: "5px 25px" }}
                                    >
                                      <ListItemText>
                                        <Typography
                                          className={`${classes.subtitles} ${classes.subtitleContainersubmenu1}`}
                                          variant=""
                                          style={{ fontWeight: "bold" }}
                                        >
                                          {Jewellery[
                                            selected
                                          ]?.price.name3?.toUpperCase()}
                                        </Typography>
                                        <div
                                          style={{
                                            borderBottom: "1.5px solid#2F348B",
                                          }}
                                        ></div>
                                      </ListItemText>
                                    </ListItem>
                                    <Grid
                                      container
                                      className={classes.metaldiv}
                                    >
                                      {Jewellery[selected]?.price.price?.map(
                                        (val) => (
                                          <Grid
                                            item
                                            xs={6}
                                            sm={6}
                                            className={classes.pricediv}
                                          >
                                            <Chip
                                              variant="outlined"
                                              className={classes.Chip}
                                              label={val.price}
                                            />
                                          </Grid>
                                        )
                                      )}
                                    </Grid>
                                  </>
                                )}

                                {/* {selected1 === Jewellery[selected][row2].name && (
                                <>
                                  {subheader[selected1] &&
                                    subheader[selected1].name &&
                                    subheader[selected1].name.map((row) => (
                                      <>
                                        <ListItem
                                          onClick={() => {
                                            window.location.href = row.url;
                                          }}
                                          className={classes.subtitle2Container}
                                        >
                                          <ListItemText>
                                            <Typography
                                              className="list-items1"
                                              variant=""
                                            >
                                              {row.name.toUpperCase()}
                                            </Typography>
                                          </ListItemText>
                                        </ListItem>
                                      </>
                                    ))}
                                </>
                              )} */}
                              </>
                            )
                            // ))
                          }
                        </div>
                      </>
                    );
                  })}
                  {!localStorage.getItem("true") ? (
                    <>
                      <ListItem button className="drawer-list12" disableGutters>
                        <ListItemText
                          onClick={() =>
                            (window.location.pathname = "/registers")
                          }
                        >
                          <Typography
                            className="newlist-items1"
                            style={{ fontWeight: "bold", padding: "0px 25px" }}
                          >
                            HELPLINE
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem button className="drawer-list12" disableGutters>
                        <ListItemText
                          onClick={() => (window.location.pathname = "/login")}
                        >
                          <Typography
                            className="newlist-items1"
                            style={{ fontWeight: "bold", padding: "0px 25px" }}
                          >
                            LOGIN
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </>
                  ) : (
                    <>
                      <ListItem button className="drawer-list12">
                        <ListItemText
                          onClick={() =>
                            (window.location.href = `/account${"-profile"}`)
                          }
                        >
                          <Typography className="list-items1">
                            VIEW PROFILE
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem button className="drawer-list12">
                        <ListItemText
                          onClick={() =>
                            (window.location.href = `/account${"-wishlist"}`)
                          }
                        >
                          <Typography className="list-items1">
                            MY WHISLIST
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem button className="drawer-list12">
                        <ListItemText
                          onClick={() =>
                            (window.location.href = `/account${"-allorders"}`)
                          }
                        >
                          <Typography className="list-items1">
                            ALL ORDERS
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem button className="drawer-list12">
                        <ListItemText>
                          <Typography className="list-items1">
                            CONTACT US
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <ListItem button className="drawer-list12">
                        <ListItemText
                          onClick={() => {
                            localStorage.clear();
                            sessionStorage.clear();
                            window.location.reload();
                            window.location.pathname = "/login";
                          }}
                        >
                          <Typography className="list-items1">
                            LOGOUT
                          </Typography>
                        </ListItemText>
                      </ListItem>
                    </>
                  )}
                </List>
              </div>
            </ClickAwayListener>
          </Drawer>
        </Hidden>
      </div>
    );
  }
}
export default withStyles(styles)((props) => {
  let {
    CartCtx: {
      cartFilters,
      data: cart_count,
      loading,
      error,
      allorderdata,
      wishlistdata,
      NewUser,
    },
  } = React.useContext(CartContext);
  const { mapped } = useDummyRequest(headerDataSilver);
  if (Object.keys(mapped).length === 0) return "";

  return <Header {...props} data={mapped} cart_count={cart_count} />;
});
