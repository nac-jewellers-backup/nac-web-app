import {
  AppBar,
  Badge,
  Chip,
  ClickAwayListener,
  Container,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
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
import { GOLD_PRICE_AND_CURRENCY_CONVO } from "../../queries/home";
import { API_URL } from "../../config";

let user_id = localStorage.getItem("user_id")
  ? localStorage.getItem("user_id")
  : {};
let selected_price = localStorage.getItem("selected_price")
  ? JSON.parse(localStorage.getItem("selected_price"))
  : null;

// const theme = createTheme({
//   overrides: {
//     MuiInputLabel: {
//       outlined: {
//         border: "none",
//         borderColor: "#fff",
//         fontSize: "14px !important",
//       },
//       option: {
//         fontSize: "14px !important",
//       },
//     },
//     MuiOutlinedInput: {
//       root: {
//         "&&& $input": {
//           padding: "0px",
//           color: "#fff !important",
//           fontSize: "14px!important",
//         },
//         option: {
//           fontSize: "14px !important",
//         },
//       },
//     },
//     MuiAutocomplete: {
//       inputRoot: {
//         '&&[class*="MuiOutlinedInput-root"] $input': {
//           padding: "0px !important",
//           fontSize: "14px !important",
//         },
//       },
//       option: {
//         fontSize: "14px !important",
//       },
//     },
//     option: {
//       fontSize: "14px !important",
//     },
//   },
// });

// const themess = createTheme({
//   overrides: {
//     MuiInputLabel: {
//       outlined: {
//         border: "none",
//         borderColor: "#fff",
//         fontSize: "16px !important",
//       },
//       option: {
//         fontSize: "16px !important",
//         padding: "4px  !important",
//       },
//     },
//     MuiOutlinedInput: {
//       root: {
//         "&&& $input": {
//           padding: "0px",
//           color: "#000 !important",
//           fontSize: "16px !important",
//         },
//         option: {
//           fontSize: "16px !important",
//           padding: "4px  !important",
//         },
//       },
//     },
//     MuiAutocomplete: {
//       inputRoot: {
//         '&&[class*="MuiOutlinedInput-root"] $input': {
//           padding: "0px  !important",
//           fontSize: "16px !important",
//         },
//       },
//       option: {
//         fontSize: "16px !important",
//         padding: "4px  !important",
//       },
//     },
//     option: {
//       fontSize: "16px !important",
//       [theme.breakpoints.up("md")]: {
//         padding: "2px !important",
//       },
//       [theme.breakpoints.down("sm")]: {
//         padding: "0px !important",
//       },
//     },
//   },
// });

// function countryToFlag(isoCode) {
//   return typeof String.fromCodePoint !== "undefined"
//     ? isoCode
//         .toUpperCase()
//         .replace(/./g, (char) =>
//           String.fromCodePoint(char.charCodeAt(0) + 127397)
//         )
//     : isoCode;
// }

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
      goldPrice: null,
      currencyConvo: null,
      selected_currency: null,
      livePrice: null,
    };
    this.topZero = React.createRef();
    this.handleCurrencyConvo = this.handleCurrencyConvo.bind(this);
  }

  componentDidMount() {
    var _pathname = window.location.pathname.split("/");
    this.getGoldPrice();
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
  }

  getGoldPrice = () => {
    fetch(`${API_URL}/graphql`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GOLD_PRICE_AND_CURRENCY_CONVO,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          goldPrice: data?.data?.allDailyMetalPrices?.nodes ?? null,
          currencyConvo: data?.data?.allMasterCountries?.nodes ?? null,
          selected_currency: selected_price
            ? selected_price
            : data?.data?.allMasterCountries?.nodes[0] ?? null,
          livePrice: `${data?.data?.allDailyMetalPrices?.nodes[0]?.displayName} - ₹${data?.data?.allDailyMetalPrices?.nodes[0]?.displayPrice}`,
        });
      });
  };
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
  handleCurrencyConvo = (e, value) => {
    localStorage.setItem("selected_price", JSON.stringify(value));
    this.setState({ selected_currency: value });
    window.location.reload();
  };
  handleLivePrice = (e, value) => {
    this.setState({
      livePrice: `${value.displayName} - ₹${value.displayPrice}`,
    });
  };

  render() {
    const styloriLogo =
      "data:image/png;base64,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";
    const {
      mainlist,
      Jewellery,

      menuListHeader,
      menuLists,
    } = this.props.data;
    const { wishlist, cartcount } = this.props;

    let { selected, selected1 } = this.state;
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const openPopover = anchorEl;

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
              style={{
                transition: "height 0.2s",
                paddingBottom:
                  window.location.pathname === "/cart" ||
                  window.location.pathname === "/checkout"
                    ? "8px"
                    : "auto",
              }}
            >
              <Container style={{ maxWidth: "90%" }} id="searchcontainer">
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
                    <Grid
                      item
                      xs={3}
                      style={{
                        marginTop:
                          window.location.pathname === "/cart" ||
                          window.location.pathname === "/checkout" ||
                          window.location.pathname === "/paymentsuccess"
                            ? "20px"
                            : "",
                      }}
                      className="logoImgHeader1"
                      alignItems="center"
                    >
                      {window.location.pathname === "/cart" ||
                      window.location.pathname === "/checkout" ? (
                        <IconButton
                          size="small"
                          onClick={() => {
                            window.history.back();
                          }}
                        >
                          <ArrowBackIcon color="secondary" />
                          &nbsp;&nbsp;
                        </IconButton>
                      ) : (
                        " "
                      )}

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
                          loading="lazy"
                          alt="..."
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
                      {/* <Grid
                        container
                        item
                        xs={12}
                        justify="flex-end"
                        className={classes.goldCurrentRate}
                      >
                        <Grid item xs={12} sm={6} md={2} lg={2}>
                          {" "}
                          <ThemeProvider theme={theme}>
                            <Autocomplete
                              id="country-select-demo"
                              size="small"
                              style={{
                                color: "#000 !important",
                                backgroundColor: "#b78231",
                                border: "0px",
                                borderColor: "#fff",

                                boxShadow: "6px 7px 6px #bebfbf",
                              }}
                              classes={{ input: classes.smallFont }}
                              options={this?.state?.goldPrice}
                              getOptionLabel={(option) =>
                                `${option.displayName} - ₹${option.displayPrice}`
                              }
                              defaultValue={this.state?.livePrice ?? null}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  placeholder="Today's Gold Rate"
                                  variant="outlined"
                                />
                              )}
                            />
                          </ThemeProvider>
                        </Grid>
                      </Grid> */}
                      <Grid item xs={12}>
                        <div className={`head-icons1 ${classes.headIcons}`}>
                          <i class={`fa fa-phone  ${classes.iconFafa}`}></i>
                          <Typography className={classes.callerNum}>
                            +91 44 4399 6666
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
                                  style={{
                                    fontSize: "20px",
                                    marginTop: "-10px",
                                  }}
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
                      {menuListHeader.map((listName) => {
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
                              });
                            }}
                            className={
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
                    </Grid>
                    <Grid
                      xs={1}
                      xl={1}
                      style={{ display: "flex" }}
                      className={classes.menustylori}
                    >
                      <div style={{ flexGrow: 1 }}></div>
                      <div className={classes.styloriEditing}>
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
                            });
                          }}
                        >
                          <img
                            src={StyloriSLogo}
                            width="30px"
                            height="30px"
                            style={{ padding: "5px 15px 0px 15px" }}
                            alt="logo"
                            loading="lazy"
                          ></img>
                        </a>
                      </div>
                    </Grid>
                  </Grid>
                )}
                {["JEWELLERY", "PURCHASEPLANS"].indexOf(
                  this.state.listHoverItem
                ) === -1 && this.state.Menuopen ? (
                  <HeaderHoversubMenu
                    opened={this.state.Menuopen}
                    scroll={this.state.scroll}
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
                      // style={{ paddingTop: "45px" }}
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
                      >
                        <img
                          className={`imgsilver`}
                          src={styloriLogo}
                          style={{
                            width: "70%",
                            height: "auto",
                            float: "left",
                          }}
                          onLoad={() => this.setState({ load: true })}
                          onLoadedData={() => this.setState({ load: false })}
                          loading="lazy"
                          alt="..."
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container item xs={12}>
                        <Grid
                          container
                          item
                          xs={12}
                          className={classes.goldCurrentRate}
                        >
                          <Grid
                            container
                            item
                            xs={12}
                            justifyContent="flex-end"
                            alignItems="center"
                          >
                            {/* <Grid
                              item
                              xs={3}
                              sm={3}
                              md={2}
                              lg={2}
                              style={{
                                position: "fixed",
                                bottom: "1%",
                                left: "1%",
                              }}
                            >
                              <Autocomplete
                                id="country-select-demo"
                                size="small"
                                style={{
                                  color: "#000 !important",
                                  backgroundColor: "#fff",
                                  border: "0px",
                                  borderColor: "#fff",
                                  boxShadow: "6px 7px 6px #bebfbf",
                                }}
                                options={this.state.currencyConvo}
                                value={this.state?.selected_currency ?? null}
                                onChange={this.handleCurrencyConvo}
                                defaultValue={selected_price ?? null}
                                getOptionLabel={(option) =>
                                  `${countryToFlag(option.iso)}  ${
                                    option.currencyAlias
                                  }`
                                }
                                renderOption={(option) => (
                                  <React.Fragment>
                                    {`${countryToFlag(option.iso)}  ${
                                      option.currencyAlias
                                    }`}
                                  </React.Fragment>
                                )}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={""}
                                    variant="outlined"
                                    style={{ color: "#000 !important" }}
                                  />
                                )}
                              />
                            </Grid> */}
                            {/* <Grid item xs={6} sm={6} md={3} lg={3}>
                              <ThemeProvider theme={theme}>
                                <Autocomplete
                                  id="country-select-demo"
                                  size="small"
                                  style={{
                                    color: "#000 !important",
                                    backgroundColor: "#b78231",
                                    border: "0px",
                                    borderColor: "#fff",
                                    boxShadow: "6px 7px 6px #bebfbf",
                                  }}
                                  classes={{ input: classes.smallFont }}
                                  options={this?.state?.goldPrice}
                                  getOptionLabel={(option) =>
                                    `${option.displayName} - ₹${option.displayPrice}`
                                  }
                                  defaultValue={this.state?.livePrice ?? null}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      placeholder="Today's Gold Rate"
                                      variant="outlined"
                                    />
                                  )}
                                />
                              </ThemeProvider>
                            </Grid> */}
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
                                  {/* <Seach className={"searchsvgmobile"} /> */}
                                  <img
                                    src="https://styloribaseimages.s3.ap-south-1.amazonaws.com/banner_images/search_icon.png"
                                    alt="searchicon"
                                  />
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
                                {this.props.wishlist &&
                                this.props.wishlist.wishlistdata &&
                                this.props.wishlist.wishlistdata.nodes &&
                                this.props.wishlist.wishlistdata.nodes.length >
                                  0 ? (
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
                                        : ""
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
                                ) : (
                                  <Badge color="secondary">
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
                                )}
                                {this.props.cart_count &&
                                this.props.cart_count.data &&
                                this.props.cart_count.data.allTransSkuLists &&
                                this.props.cart_count.data.allTransSkuLists
                                  .nodes.length > 0 ? (
                                  <Badge
                                    style={{ fontSize: "9px" }}
                                    badgeContent={
                                      this.props.cart_count &&
                                      this.props.cart_count.data &&
                                      this.props.cart_count.data
                                        .allTransSkuLists &&
                                      this.props.cart_count.data
                                        .allTransSkuLists.nodes.length > 0
                                        ? this.props.cart_count &&
                                          this.props.cart_count.data &&
                                          this.props.cart_count.data
                                            .allTransSkuLists &&
                                          this.props.cart_count.data
                                            .allTransSkuLists.nodes.length
                                        : ""
                                    }
                                    color="secondary"
                                  >
                                    <a href="/cart">
                                      <i
                                        style={{ fontSize: "15px !important" }}
                                        class={`fa fa-shopping-bag  ${classes.iconFafa}`}
                                      ></i>
                                    </a>
                                  </Badge>
                                ) : (
                                  <Badge
                                    style={{ fontSize: "9px" }}
                                    color="secondary"
                                  >
                                    <a href="/cart">
                                      <i
                                        style={{ fontSize: "15px !important" }}
                                        class={`fa fa-shopping-bag  ${classes.iconFafa}`}
                                      ></i>
                                    </a>
                                  </Badge>
                                )}
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
                        <div style={{ padding: "4px" }}>
                          {selected === row.name && (
                            <>
                              {Jewellery[selected]?.styles && (
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
                                        ]?.styles.name?.toUpperCase()}
                                      </Typography>
                                      {selected === "COLLECTIONS" ? null : (
                                        <div
                                          style={{
                                            borderBottom: "1.5px solid#2F348B",
                                          }}
                                        ></div>
                                      )}
                                    </ListItemText>
                                  </ListItem>

                                  <Grid container className={classes.imgdiv}>
                                    {Jewellery[selected]?.styles.img?.map(
                                      (val) => (
                                        <Grid
                                          item
                                          xs={6}
                                          sm={6}
                                          className={classes.griddiv}
                                          onClick={() => {
                                            window.location.href = val.url;
                                          }}
                                          key={val.content}
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
                                              alt="imag"
                                              loading="lazy"
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

                                  <Grid container className={classes.metaldiv}>
                                    {Jewellery[
                                      selected
                                    ]?.stone.stone_metal?.map((val) => (
                                      <Grid
                                        item
                                        xs={6}
                                        sm={6}
                                        className={classes.griddivstone}
                                        onClick={() => {
                                          window.location.href = val.url;
                                        }}
                                      >
                                        <div className={classes.iconstyle}>
                                          <img
                                            style={{
                                              width: "11%",
                                              marginRight: "10px",
                                            }}
                                            src={val.icon}
                                            alt="icon"
                                            loading="lazy"
                                          />
                                          <p className={classes.ptext}>
                                            {val.name}
                                          </p>
                                        </div>
                                      </Grid>
                                    ))}
                                  </Grid>
                                </>
                              )}

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
                                            onClick={() => {
                                              window.location.href = v.url;
                                            }}
                                          >
                                            {v.content}
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
                                  <Grid container className={classes.metaldiv}>
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
                            </>
                          )}
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

        {/* <Hidden smDown>
          <Grid
            sm={3}
            md={4}
            lg={4}
            style={{
              position: "fixed",
              bottom: "1%",
              left: "1%",
            }}
          >
            <ThemeProvider theme={themess}>
              <Autocomplete
                disableClearable
                size="small"
                style={{
                  color: "#000 !important",
                  backgroundColor: "#fff",
                  border: "0px",
                  borderColor: "#fff",
                  // width: "45%",
                  padding: "0px 0px 0px 0px !important",
                }}
                options={this.state.currencyConvo}
                value={this.state?.selected_currency ?? null}
                onChange={this.handleCurrencyConvo}
                defaultValue={selected_price ?? null}
                getOptionLabel={(option) =>
                  `${countryToFlag(option.iso)} ${option.currencyAlias}`
                }
                renderOption={(option) => (
                  <React.Fragment>
                    {`${countryToFlag(option.iso)} ${option.currencyAlias}`}
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    classes={{ root: classes.customTextField }}
                    {...params}
                    label={""}
                    variant="outlined"
                  />
                )}
              />
            </ThemeProvider>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid
            sm={3}
            md={4}
            lg={4}
            style={{
              position: "fixed",
              bottom: "8%",
              left: "3%",
            }}
          >
            <ThemeProvider theme={themess}>
              <Autocomplete
                disableClearable
                size="small"
                style={{
                  color: "#000 !important",
                  backgroundColor: "#fff",
                  border: "0px",
                  borderColor: "#fff",
                  // width: "30%",
                  padding: "0px 0px 0px 0px !important",
                }}
                options={this.state.currencyConvo}
                value={this.state?.selected_currency ?? null}
                onChange={this.handleCurrencyConvo}
                defaultValue={selected_price ?? null}
                getOptionLabel={(option) =>
                  `${countryToFlag(option.iso)} ${option.currencyAlias}`
                }
                renderOption={(option) => (
                  <React.Fragment>
                    {`${countryToFlag(option.iso)} ${option.currencyAlias}`}
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    classes={{ root: classes.customTextField }}
                    {...params}
                    label={""}
                    variant="outlined"
                  />
                )}
              />
            </ThemeProvider>
          </Grid>
        </Hidden> */}
      </div>
    );
  }
}
export default withStyles(styles)((props) => {
  let {
    CartCtx: { data: cart_count },
  } = React.useContext(CartContext);
  const { mapped } = useDummyRequest(headerDataSilver);
  if (Object.keys(mapped).length === 0) return "";

  return <Header {...props} data={mapped} cart_count={cart_count} />;
});
