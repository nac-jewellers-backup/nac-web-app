import {
  AppBar,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Slide,
  TextField,
  Typography,
} from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import { withStyles } from "@material-ui/core/styles";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { FilterOptionsContext, GlobalContext } from "context";
import { NetworkContext } from "context/NetworkContext";
import PropTypes from "prop-types";
import { seoUrlResult } from "queries/productListing";
import React from "react";
import { withRouter } from "react-router-dom";
import CardRadioButton from "../InputComponents/RadioButton/index";
import ProductLayout from "../ProductCard/ProductLayout";
import "./filter.css";
import FilterHeader from "./FilterHeader";
import styles from "./styles";
import { TopFilters } from "./topFilters";
import CurrencyConversion from "utils/CurrencyConversion";
const CheckboxWithTick = withStyles({
  root: {
    cursor: "default",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
    color: "white",
    "&$checked": {
      color: "white",

      "& .MuiIconButton-label": {
        position: "relative",
        zIndex: 0,
      },
      "& .MuiIconButton-label:after": {
        content: '""',
        left: 4,
        top: 4,
        height: 15,
        width: 15,
        position: "absolute",
        backgroundColor: "#33346D",
        zIndex: -1,
      },
    },
  },
  checked: {
    border: "1px solid transparent",
  },
})(Checkbox);

const PersistentDrawerLeft = (props) => {
  const {
    setSort,
    setloadingfilters,
    setOffset,
    setPriceMax,
    setPriceMin,
    FilterOptionsCtx,
    setdelete_fil,
  } = React.useContext(FilterOptionsContext);

  const { NetworkCtx } = React.useContext(NetworkContext);
  const { Globalctx } = React.useContext(GlobalContext);

  return (
    <Component
      setSort={setSort}
      setOffset={setOffset}
      offset={FilterOptionsCtx.offset}
      setFilters={FilterOptionsCtx.setFilters}
      setloadingfilters={setloadingfilters}
      setPriceMax={setPriceMax}
      setPriceMin={setPriceMin}
      loadingfilters={FilterOptionsCtx.loadingfilters}
      sort={FilterOptionsCtx.sort}
      uri={NetworkCtx.graphqlUrl}
      globalcontext={Globalctx}
      setdelete_fil={setdelete_fil}
      {...props}
    />
  );
};

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      open: this.props.open,
      openMobile: true,
      CardRadio: false,
      checked: {
        Offers: {},
        Availability: {},
        ProductType: {},
        Style: {},
        Material: {},
        Theme: {},
        Collection: {},
        MetalColor: {},
        MetalPurity: {},
        Occasion: {},
        NoOfStones: {},
        Gender: {},
        StoneColor: {},
        StoneShape: {},
        category: {},
      },
      checkedArrayObj: {
        Offers: {},
        Availability: {},
        ProductType: {},
        Style: {},
        Material: {},
        Theme: {},
        Collection: {},
        MetalColor: {},
        MetalPurity: {},
        Occasion: {},
        NoOfStones: {},
        Gender: {},
        StoneColor: {},
        StoneShape: {},
        category: {},
      },
      selected: [],
      filtercheck: "",
      check: true,
      numOne: 0,
      numTwo: 0,
      showMore: 4,
      Price_button_click: false,
      chipData: [],
      errorPriceMessage: false,
      productDisplay: true,
    };
  }
  componentDidMount() {
    var { checked, chipData, numOne, numTwo, selected } = this.state;
    if (
      this.props.data &&
      this.props.data.length > 0 &&
      this.props.data[0] &&
      this.props.data[0].subFilter["Price Range"]
    ) {
      var price_min = Number(this.props.data[0].subFilter["Price Range"].min);
      var price_max = Number(this.props.data[0].subFilter["Price Range"].max);
      var _price_min = CurrencyConversion(Math.round(price_min));
     
      var _price_max = CurrencyConversion(Math.round(price_max));
     
      this.setState(checked);
      this.setState({ numOne: _price_min, numTwo: _price_max });
    }

    //  ****STARTS****  setting state search parameters ....

    if (window.location.search) {
      let price_one;
      let price_two;
      let splitSearchParamers = window.location.search.split("&");
      if (splitSearchParamers.length > 0) {
      
        splitSearchParamers.map((val) => {
          let equalSplit = val.split("=");
          if (splitSearchParamers.length > 2) {
            if (equalSplit[0] === "startprice") {
              price_one = Number(equalSplit[1]);
              numOne = Number(equalSplit[1]);
            }
            if (equalSplit[0] === "endprice") {
              price_two = Number(equalSplit[1]);
              numTwo = Number(equalSplit[1]);
            }
          } else {
            if (equalSplit[0] === "?startprice") {
              price_one = Number(equalSplit[1]);
              numOne = Number(equalSplit[1]);
            }
            if (equalSplit[0] === "endprice") {
              price_two = Number(equalSplit[1]);
              numTwo = Number(equalSplit[1]);
            }
          }
          return 0;
        });

        
        const price_min = Number(price_one);
        const price_max = Number(price_two);
        const _price_min = CurrencyConversion(Math.round(price_min));
       
        const _price_max = CurrencyConversion(Math.round(price_max));
        
        this.setState({ numOne: _price_min, numTwo: _price_max });
        
      }
    }

    //    ****ENDS**** setting state search parameters ....

    // This is used for checking the check boxes if we copy and pasted the url to new tab or new window
    // if (window.location.search) {

    //   let urlSearchparams = window.location.search;

    //   let urlSearchparamsDecode = decodeURI(urlSearchparams)

    //   let urlSearchparamsReplace = urlSearchparamsDecode.replace('?', '')

    //   let urlSearchparamsSplitAmpersand = urlSearchparamsReplace.split('&')

    //   let urlSplitparamsEqual = () => urlSearchparamsSplitAmpersand.map(val => { return val.split('=') })
    //   let mapUrlParamsSplitEqual = urlSplitparamsEqual();
    //   this.handleChange(() => { }, true, () => { }, mapUrlParamsSplitEqual)

    // }
    // This is used for checking the check boxes if we copy and pasted the url to new tab or new window
    // *****Ends*****
    var paramsfilter;

    const filters_checked = () => {
      const { checked } = this.state;
      if (window.location.pathname.split("/")[1] !== "jewellery") {
        function status(response) {
          if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
          } else {
            return Promise.reject(new Error(response.statusText));
          }
        }

        function json(response) {
          return response.json();
        }
        var a = {};
        let pathnameSplit = window.location.pathname.split("/");
        const splitHiphen = () => {
          if (pathnameSplit[1].indexOf("-")) {
            return pathnameSplit[1].split("-");
          }
        };

        var conditionfiltersSeo = {
          seofilter: { seoUrl: { in: splitHiphen() } },
        };
        fetch(this.props.uri, {
          method: "post",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: seoUrlResult,
            variables: { ...conditionfiltersSeo },
          }),
        })
          .then(status)
          .then(json)
          .then(async function (data) {
            paramsfilter =
              data &&
              data.data &&
              data.data.allSeoUrlPriorities &&
              data.data.allSeoUrlPriorities.nodes &&
              data.data.allSeoUrlPriorities.nodes.map((val) => {
                var attrName = val.attributeName.replace(/\s/g, "");
                var attrVal = val.attributeValue;
                if (attrName === "Category") {
                  if (attrVal === "goldcoins") {
                    a["ProductType"] = { "Gold Coins": true };
                    a["Material"] = { Gold: true };
                    a["MetalColor"] = { Yellow: true };
                  }
                }
                a[attrName] = { [attrVal]: true };

                return a;
              });

            Object.entries(paramsfilter[0]).map((val) => {
              var keys = val[0];
              var values = val[1];
              checked[keys] = values;
              if (keys !== "Category") {
                var a = values && Object.keys(values);
                if (keys === "ProductType") {
                  selected.push("Product Type", keys);
                }
                if (keys === "MetalPurity") {
                  selected.push("Metal Purity", keys);
                }
                if (keys === "MetalColor") {
                  selected.push("Metal Color", keys);
                }
                if (keys === "NoOfStones") {
                  selected.push("No Of Stones", keys);
                }
                if (keys === "StoneColor") {
                  selected.push("Stone Color", keys);
                }
                if (keys === "StoneShape") {
                  selected.push("Stone Shape", keys);
                }
                if (
                  keys !== "ProductType" &&
                  keys !== "MetalPurity" &&
                  keys !== "MetalColor" &&
                  keys !== "NoOfStones" &&
                  keys !== "StoneColor" &&
                  keys !== "StoneShape"
                ) {
                  selected.push(keys);
                }
                chipData.push({ label: a[0], title: keys });
              }
              return 0;
            });

            this.setState(chipData, selected, checked);
          })
          .catch(function (error) {});
      }
    };
    filters_checked();
    if (paramsfilter && paramsfilter.length > 0) {
      this.handleChange(
        () => {},
        true,
        () => {},
        {},
        paramsfilter
      );
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.checked !== prevState.checked) {
      // this.myRef.scrollTop()
      window.scrollTo(0, this.myRef.scrollTop);
    }
    if (
      this.props.data[0].subFilter["Price Range"] !==
      prevProps.data[0].subFilter["Price Range"]
    ) {
      var numberOne = this.props.data[0].subFilter["Price Range"][0]
        ? this.props.data[0].subFilter["Price Range"][0].min
        : 0;
      var numberTwo = this.props.data[0].subFilter["Price Range"][0]
        ? this.props.data[0].subFilter["Price Range"][0].max
        : 0;
      var numOne = CurrencyConversion(Math.round(numberOne));
    
      var numTwo = CurrencyConversion(Math.round(numberTwo));
     
      this.state.Price_button_click === false &&
        this.setState({ numOne: numOne, numTwo: numTwo });
     
    }
  }
  delete_val_chips = (value) =>
    Object.entries(this.state.checked).map((val) => {
      const { checked } = this.state;
      var mm;
      var bz;
      var valx;
      var valx2;
      if (val !== undefined && val !== null) {
        const ss = val ? val[1] : "";
        valx = ss;
        valx?.constructor === Object &&
          Object.values(valx).map((val1) => {
            var n = valx && Object.keys(valx)[0].length > 0;
            const s1s = val1 ? val1[0] : "";
            if (val1 !== undefined && val1 !== null && n) {
              valx2 = s1s;
              mm = valx ? Object.keys(valx)[0] : "";
              if (value === mm) {
                bz = mm;
                checked[val[0]] = { [mm]: false };
                this.setState(checked);
              }
              return false;
            }
            return 0;
          });
      }
      return bz;
    });
  clearSortIfFiltersIsEmpty = () => {
    var showSortFilter = false;

    if (window.location.search) {
      Object.keys(this.state.checked).map((fk) => {
        const filter = this.state.checked[fk];
        const fv = Object.keys(filter);
        if (fk !== "Category" && fk !== "category" && fk !== "filters") {
          if (fv.length > 0) {
            if (filter[fv[0]]) {
              showSortFilter = true;
              return showSortFilter;
            }
          }
        }
        return 0;
      });
      let loc = window.location.pathname.split("?")[0];
      if (!showSortFilter) {
        this.props.setSort("");
        this.props.history.push(loc);
      }
    }
  };
  handleChange = (
    value,
    BoolName,
    e,
    title,
    TargetName,
    topfilterstate,
    selectedfiltertop
  ) => {
    // window.scrollTo(0,2)

    let mystate = this.state;
    let { chipData } = this.state;
    let checked = { ...this.state.checked };
   

   

    if (TargetName === undefined) {
      this.clearSortIfFiltersIsEmpty();
      if (
        mystate?.checked?.category?.constructor === Object &&
        Object.keys(mystate?.checked?.category).length === 0
      ) {
        var _replaceCategory = JSON.parse(sessionStorage.getItem("category"));
        checked["category"] = _replaceCategory;
        this.setState(checked);
        this.forceUpdate();
      }
      this.props.setloadingfilters(true);
      let checkedvalue = {};
      checkedvalue[value] = BoolName;

      checked[e && e.target.name ? e.target.name : selectedfiltertop] =
        checkedvalue;
      this.setState(
        {
          checked,
        },
        () => this.props.setFilters(checked)
      );
    } else {
      let paramsMapUrlSetState = () =>
        TargetName.map((val) => {
          var nameFilter = val[0];
          var keyNameFilter = val[1];
          let checkedvalue = {};
          checkedvalue[keyNameFilter] = true;
          checked[nameFilter] = checkedvalue;
          this.setState(
            {
              checked,
            },
            () => this.props.setFilters(checked)
          );
          return 0;
        });
      paramsMapUrlSetState();
    }
    let arr = [];
    let checkTitle = true;
    chipData.map((val) => {
      if (val.title === title) {
        checkTitle = false;
      }
      return 0;
    });
    chipData.map((val) => {
      if (val.label === value) {
        checkTitle = false;
      }
      return 0;
    });
    if (BoolName === true) {
      // chipData.push({ key: chipData[chipData.length - 1].key, label: value });
      if (checkTitle) {
        chipData.push({ label: value, title: title });
      } else {
        arr = chipData.filter((val) => val.title !== title);
        arr.push({ label: value, title: title });
        chipData = arr;
      }
    } else {
      arr = chipData.filter((val) => val.label !== value);
      chipData = arr;
    }
    this.setState({
      chipData,
    });
  };
  handleDelete = (value) => {
    this.handlebye();
    let { chipData, checked } = this.state;

    Object.entries(checked).map((val) => {
      if (val && val[0] === "category") {
        if (val && val[1] && val[1].goldcoins === true) {
          if (value === "Gold Coins") {
            return false;
          }
          if (value === "Gold") {
            return false;
          }
          if (value === "Yellow") {
            return false;
          }
          let arr = [],
            arr1 = [];

          arr = chipData.filter((val) => val.label !== value);
          if (checked) {
            arr1 = this.delete_val_chips(value).filter((val) => {
              var dlt;
              if (val !== undefined && val !== null) {
                dlt = Object.values(val) === -1;
              }
              return dlt;
            });
            chipData = arr1;
          }
          chipData = arr;
          this.setState({
            ...chipData,
            ...checked,
          });
          this.forceUpdate();
          this.props.setFilters(checked);
          return false;
        } else {
          let arr = [],
            arr1 = [];
          arr = chipData.filter((val) => val.label !== value);
          if (checked) {
            arr1 = this.delete_val_chips(value).filter((val) => {
              var dlt;
              if (val !== undefined && val !== null) {
                dlt = Object.values(val) === -1;
              }
              return dlt;
            });
            chipData = arr1;
          }
          chipData = arr;
          this.setState({
            chipData,
            checked,
          });
          this.forceUpdate();
          this.props.setFilters(checked);
        }
      }
      return 0;
    });
  };
  handlebye = () => {};
  check_goldCoins = (values_) => {
    const Category = this.state.checked;
    var valus;
    Object.entries(Category).map((val) => {
      if (val && val[0] === "Category") {
        if (val && val[1] && val[1].goldcoins === true) {
          if (values_ === "Gold Coins") {
            return (valus = true);
          }
          if (values_ === "Gold") {
            return (valus = true);
          }
          if (values_ === "Yellow") {
            return (valus = true);
          }
        }
      }
      return 0;
    });
    return valus;
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
    document.documentElement.scrollTop = 180;
  };
  handleDrawerOpenMobile = () => {
    this.setState({ openMobile: false, productDisplay: false });
    this.setState({ CardRadio: false });
  };
  handleDrawerCloseMobile = () => {
    this.setState({ openMobile: true });
    this.setState({ productDisplay: true });
  };
  handleClearAllData = () => {
  
    this.setState({ filtercheck: "", productDisplay: true });
    return (window.location.href = "/jewellery");
  };
  handleDrawerClose = () => {
    
    this.setState({ productDisplay: true });
    return (window.location.href = "/jewellery");
  };

  selectItem = (name) => {
    var arr1;
    let { selected } = this.state;
    var map = selected.map((val) => {
      if (val !== undefined && val !== null) {
        return val;
      }
      return 0;
    });
    if (map.indexOf(name) > -1) {
      arr1 = selected.filter((val) => {
        if (val !== undefined && val !== null) {
          if (val !== name) {
            return val;
          }
        }
        return 0;
      });
      selected = arr1;
      this.setState({ selected });
    } else {
      // var same =map.indexOf(name)
      selected.push(name);
      this.setState({ selected });
    }
  };
  filterValue = (filtercheck) => {
    this.setState({ filtercheck });
  };
  handleChangeDrawer = () => {
    this.setState({ check: !this.state.check });
    this.setState({ open: !this.state.open });
  };
  onCurrencyChange_click = (e, silverPrice) => {
    const { checked } = this.state;

    var _price_min;
    var _price_max;
    if (silverPrice) {
      this.setState(checked);
      this.setState(
        { numOne: silverPrice.min, numTwo: silverPrice.max },
        () => {
          this.props.setPriceMax(silverPrice.max);
          this.props.setPriceMin(silverPrice.min);
        }
      );
    } else {
      this.setState({ Price_button_click: true });
      if (isNaN(Number(document.getElementById("num1").value.charAt(0)))) {
        _price_min = Number(
          // eslint-disable-next-line
          document.getElementById("num1").value.substr(1).replace(/,/g, "")
        );
      } else {
        _price_min = Number(
          // eslint-disable-next-line
          document.getElementById("num1").value.replace(/,/g, "")
        );
      }
      if (isNaN(Number(document.getElementById("num2").value.charAt(0)))) {
        _price_max = Number(
          // eslint-disable-next-line
          document.getElementById("num2").value.substr(1).replace(/,/g, "")
        );
      } else {
        _price_max = Number(
          // eslint-disable-next-line
          document.getElementById("num2").value.replace(/,/g, "")
        );
      }
      var price_min = CurrencyConversion(Math.round(_price_min));
    
      var price_max = CurrencyConversion(Math.round(_price_max));
     

      var pricemin =
        price_min.indexOf(",") > -1
          ? price_min.indexOf(" ") > -1
            ? Number(price_min.substr(2).replace(/\,/g, ""))
            : Number(price_min.substr(1).replace(/\,/g, ""))
          : price_min.indexOf(" ") > -1
          ? Number(price_min.substr(2))
          : Number(price_min.substr(1));
      var pricemax =
        price_max.indexOf(",") > -1
          ? price_max.indexOf(" ") > -1
             // eslint-disable-next-line
            ? Number(price_max.substr(2).replace(/\,/g, ""))
            : Number(price_max.substr(1).replace(/\,/g, ""))
          : price_max.indexOf(" ") > -1
          ? Number(price_max.substr(2))
          : Number(price_max.substr(1));

      if (pricemin > pricemax) {
        this.setState({ errorPriceMessage: true });
      } else if (pricemin === 0 && pricemax === 0) {
        return false;
      } else {
        this.setState(checked);
        this.setState({ numOne: price_min, numTwo: price_max }, () => {
          this.props.setPriceMax(pricemax);
          this.props.setPriceMin(pricemin);
        });
      }
    }
  };
  txtFieldChange(e) {
    if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();

    // this.setState({[e.target.name]:e.target.value})
  }
  handleChangesort = (event) => {
    if (this.props.offset > 0) this.props.setOffset(0);
    this.props.setSort({ values: event.target.value });
    this.setState({ CardRadio: false });
    this.setState({ productDisplay: true });
  };

  render() {
    const found = window.location.pathname
      .split(/-/g)
      .find((element) => element === "/goldcoins" || element === "goldcoins");
    const { classes} = this.props;
    const { filter, subFilter, sortOptions } = this.props.data[0];

    let { selected, check } = this.state;
    const { open, openMobile } = this.state;
    const isTopFilter = true;

    return (
      <>
        {isTopFilter && (
          <Hidden smDown>
            <TopFilters
              filter={filter}
              state={this.state}
              subFilter={subFilter}
              onchangefunc={this.handleChange}
              onpricechange={this.onCurrencyChange_click}
              filtercheck={this.state.filtercheck}
              checked={this.state.checked}
              chips={this.state.chipData}
              check={this.state.check}
              click={this.handleDelete}
              {...this.props}
            />
          </Hidden>
        )}

        {!isTopFilter && (
          <Hidden smDown>
            <FilterHeader
              click={this.handleDelete}
              handleChangeDrawer={this.handleChangeDrawer}
              chips={this.state.chipData}
              check={this.state.check}
              checked={this.state.checked}
            />
          </Hidden>
        )}
        <div className={classes.root}>
          {!isTopFilter && (
            <Hidden smDown>
              {/* <CssBaseline /> */}
              <div>
                <Slide
                  direction="right"
                  in={check}
                  mountOnEnter
                  unmountOnExit
                  style={{
                    position: "sticky",
                    top: "119px",
                    maxHeight: "80vh",
                    overflowY: "scroll",
                  }}
                  className="SliderFilter scrollBarFilter"
                  id="SliderFilter"
                >
                  <div>
                    <Paper
                      className={`${classes.drawer} ${classes.drawerPaper}`}
                      variant="persistent"
                      anchor="left"
                      open={open}
                    >
                      <Divider />
                      <List className="fil-main-list">
                        <div style={{ margin: "5px" }}>
                          <Typography
                            style={{
                              fontSize: "1.0rem !important",
                              paddingTop: "10px !important",
                              fontWeight: 600,
                            }}
                            className="fil-list-items"
                          >
                            Price
                          </Typography>
                          <Grid
                            container
                            spacing={12}
                            style={{ paddingLeft: "14px" }}
                          >
                            <Grid item xs={4}>
                              <TextField
                                error={this.state.errorPriceMessage}
                                onChange={(e) => {
                                  this.setState({
                                    numOne: e.target.value,
                                    errorPriceMessage: false,
                                  });
                                }}
                                onKeyPress={(e) => {
                                  this.txtFieldChange(e);
                                }}
                                name="numOne"
                                className="price-txt"
                                id="num1"
                                value={this.state.numOne}
                                margin="normal"
                                variant="outlined"
                              />
                            </Grid>
                            &nbsp;
                            <Grid item xs={4}>
                              <TextField
                                error={this.state.errorPriceMessage}
                                onChange={(e) => {
                                  this.setState({
                                    numTwo: e.target.value,
                                    errorPriceMessage: false,
                                  });
                                }}
                                onKeyPress={(e) => {
                                  this.txtFieldChange(e);
                                }}
                                name="numTwo"
                                className="price-txt"
                                id="num2"
                                value={this.state.numTwo}
                                margin="normal"
                                variant="outlined"
                              />
                            </Grid>
                            &nbsp;
                            <Grid item xs={3}>
                              <Button
                                variant="contained"
                                className={`price-btn ${classes.colorMainBackground}`}
                                onClick={() => this.onCurrencyChange_click()}
                              >
                                Go
                              </Button>
                            </Grid>
                          </Grid>
                          {this.state.errorPriceMessage ? (
                            <label className={`${classes.priceError}`}>
                              Max price should be greater
                            </label>
                          ) : null}
                        </div>
                        {/* filter */}
                        <div>
                          {
                            <>
                              {filter && filter.length > 0 ? (
                                filter.map((row, i) => {
                                  return (
                                    <>
                                      {subFilter &&
                                      subFilter[row] &&
                                      subFilter[row].length > 0 ? (
                                        <>
                                          {window.location.pathname ===
                                            "/goldcoins" ||
                                          found === "goldcoins" ||
                                          found === "/goldcoins" ? (
                                            row === "Offers" ? (
                                              ""
                                            ) : (
                                              <ListItem
                                                key={row}
                                                onClick={() =>
                                                  this.selectItem(row)
                                                }
                                                className={`${classes.li_item_filter}`}
                                              >
                                                <ListItemText>
                                                  <Typography
                                                    className="fil-list-items"
                                                    variant="h4"
                                                    component="h4"
                                                  >
                                                    {row}
                                                  </Typography>
                                                </ListItemText>
                                                {selected.indexOf(row) !==
                                                -1 ? (
                                                  <ExpandLess className="fil-drawer-arrow" />
                                                ) : (
                                                  <ExpandMore className="fil-drawer-arrow" />
                                                )}
                                              </ListItem>
                                            )
                                          ) : (
                                            <ListItem
                                              key={row}
                                              onClick={() =>
                                                this.selectItem(row)
                                              }
                                              className={`${classes.li_item_filter}`}
                                            >
                                              <ListItemText>
                                                <Typography
                                                  className="fil-list-items"
                                                  variant="h4"
                                                  component="h4"
                                                >
                                                  {row}
                                                </Typography>
                                              </ListItemText>
                                              {selected.indexOf(row) !== -1 ? (
                                                <ExpandLess className="fil-drawer-arrow" />
                                              ) : (
                                                <ExpandMore className="fil-drawer-arrow" />
                                              )}
                                            </ListItem>
                                          )}
                                        </>
                                      ) : (
                                        <span></span>
                                      )}

                                      <>
                                        {/* {JSON.stringify()} */}
                                        {selected.indexOf(row) !== -1 && (
                                          <>
                                            {subFilter[row]
                                              .filter(
                                                (row12, i) =>
                                                  i <
                                                  (this.state[`li_${row}`]
                                                    ? this.state[`li_${row}`]
                                                    : 4)
                                              )
                                              .map((row12) => {
                                                return (
                                                  <div
                                                    style={{
                                                      padding: "0 20px",
                                                    }}
                                                  >
                                                    <ListItem key={row12}>
                                                      {" "}
                                                      {/* button */}
                                                      <FormGroup row>
                                                        {row12.constructor ===
                                                        Object ? (
                                                          <FormControlLabel
                                                            control={
                                                              <Checkbox
                                                                disabled={
                                                                  this.check_goldCoins(
                                                                    row12
                                                                  ) === true
                                                                    ? true
                                                                    : false
                                                                }
                                                                checked={
                                                                  this.state
                                                                    .checked[
                                                                    row.replace(
                                                                      /\s/g,
                                                                      ""
                                                                    )
                                                                  ] &&
                                                                  this.state
                                                                    .checked[
                                                                    row.replace(
                                                                      /\s/g,
                                                                      ""
                                                                    )
                                                                  ][
                                                                    row12.value
                                                                  ] !==
                                                                    undefined
                                                                    ? this.state
                                                                        .checked[
                                                                        row.replace(
                                                                          /\s/g,
                                                                          ""
                                                                        )
                                                                      ] &&
                                                                      this.state
                                                                        .checked[
                                                                        row.replace(
                                                                          /\s/g,
                                                                          ""
                                                                        )
                                                                      ][
                                                                        row12
                                                                          .value
                                                                      ]
                                                                    : false
                                                                }
                                                                onChange={(e) =>
                                                                  this.handleChange(
                                                                    row12.value,
                                                                    this.state
                                                                      .checked[
                                                                      row.replace(
                                                                        /\s/g,
                                                                        ""
                                                                      )
                                                                    ] &&
                                                                      this.state
                                                                        .checked[
                                                                        row.replace(
                                                                          /\s/g,
                                                                          ""
                                                                        )
                                                                      ][
                                                                        row12
                                                                          .value
                                                                      ] !==
                                                                        undefined
                                                                      ? !this
                                                                          .state
                                                                          .checked[
                                                                          row.replace(
                                                                            /\s/g,
                                                                            ""
                                                                          )
                                                                        ][
                                                                          row12
                                                                            .value
                                                                        ]
                                                                      : true,
                                                                    e,
                                                                    row
                                                                  )
                                                                }
                                                                className="fil-submenu-icons"
                                                                value="checked"
                                                                color={
                                                                  "secondary"
                                                                }
                                                                name={row.replace(
                                                                  /\s/g,
                                                                  ""
                                                                )}
                                                              />
                                                            }
                                                            label={
                                                              <Typography
                                                                variant=""
                                                                className={`fil-submenu-list ${classes.colorMain}`}
                                                              >
                                                                {row12.title}
                                                              </Typography>
                                                            }
                                                          />
                                                        ) : (
                                                          <FormControlLabel
                                                            control={
                                                              <Checkbox
                                                                disabled={
                                                                  this.check_goldCoins(
                                                                    row12
                                                                  ) === true
                                                                    ? true
                                                                    : false
                                                                }
                                                                // disabled = {handledisabled}
                                                                checked={
                                                                  this.state
                                                                    .checked[
                                                                    row.replace(
                                                                      /\s/g,
                                                                      ""
                                                                    )
                                                                  ] &&
                                                                  this.state
                                                                    .checked[
                                                                    row.replace(
                                                                      /\s/g,
                                                                      ""
                                                                    )
                                                                  ][row12] !==
                                                                    undefined
                                                                    ? this.state
                                                                        .checked[
                                                                        row.replace(
                                                                          /\s/g,
                                                                          ""
                                                                        )
                                                                      ] &&
                                                                      this.state
                                                                        .checked[
                                                                        row.replace(
                                                                          /\s/g,
                                                                          ""
                                                                        )
                                                                      ][row12]
                                                                    : false
                                                                }
                                                                onChange={(e) =>
                                                                  this.handleChange(
                                                                    row12,
                                                                    this.state
                                                                      .checked[
                                                                      row.replace(
                                                                        /\s/g,
                                                                        ""
                                                                      )
                                                                    ] &&
                                                                      this.state
                                                                        .checked[
                                                                        row.replace(
                                                                          /\s/g,
                                                                          ""
                                                                        )
                                                                      ][
                                                                        row12
                                                                      ] !==
                                                                        undefined
                                                                      ? !this
                                                                          .state
                                                                          .checked[
                                                                          row.replace(
                                                                            /\s/g,
                                                                            ""
                                                                          )
                                                                        ][row12]
                                                                      : true,
                                                                    e,
                                                                    row
                                                                  )
                                                                }
                                                                className="fil-submenu-icons"
                                                                value="checked"
                                                                color={
                                                                  "secondary"
                                                                }
                                                                name={row.replace(
                                                                  /\s/g,
                                                                  ""
                                                                )}
                                                              />
                                                            }
                                                            label={
                                                              <Typography
                                                                variant=""
                                                                className={`fil-submenu-list ${classes.colorMain}`}
                                                              >
                                                                {row12}
                                                              </Typography>
                                                            }
                                                          />
                                                        )}
                                                      </FormGroup>
                                                    </ListItem>
                                                  </div>
                                                );
                                              })}

                                            {subFilter[row].length - 4 !== 0 &&
                                              subFilter[row].length - 4 > 0 && (
                                                <>
                                                  {this.state[`li_${row}`] ===
                                                    undefined ||
                                                  this.state[`li_${row}`] ===
                                                    4 ? (
                                                    <div
                                                      onClick={() =>
                                                        this.setState({
                                                          [`li_${row}`]:
                                                            subFilter[row]
                                                              .length,
                                                        })
                                                      }
                                                      className="fil-submenu-icons"
                                                    >
                                                      <p
                                                        style={{
                                                          fontSize: "14px",
                                                          paddingLeft: "16px",
                                                          paddingRight: "16px",
                                                          color:
                                                            "rgba(241, 72, 128, 1)",
                                                          cursor: "pointer",
                                                        }}
                                                      >
                                                        +&nbsp;
                                                        {subFilter[row].length -
                                                          4}{" "}
                                                        More
                                                      </p>
                                                    </div>
                                                  ) : (
                                                    <div
                                                      className="fil-submenu-icons"
                                                      onClick={() =>
                                                        this.setState({
                                                          [`li_${row}`]: 4,
                                                        })
                                                      }
                                                    >
                                                      <p
                                                        style={{
                                                          fontSize: "14px",
                                                          paddingLeft: "16px",
                                                          paddingRight: "16px",
                                                          color:
                                                            "rgba(241, 72, 128, 1)",
                                                          cursor: "pointer",
                                                        }}
                                                      >
                                                        Show Less
                                                      </p>
                                                    </div>
                                                  )}
                                                </>
                                              )}
                                          </>
                                        )}
                                      </>
                                    </>
                                  );
                                })
                              ) : (
                                <div class={classes.filtersLoading}>
                                  <div id="inTurnFadingTextG">
                                    <div
                                      id="inTurnFadingTextG_1"
                                      class="inTurnFadingTextG"
                                    >
                                      L
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_2"
                                      class="inTurnFadingTextG"
                                    >
                                      o
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_3"
                                      class="inTurnFadingTextG"
                                    >
                                      a
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_4"
                                      class="inTurnFadingTextG"
                                    >
                                      d
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_5"
                                      class="inTurnFadingTextG"
                                    >
                                      i
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_6"
                                      class="inTurnFadingTextG"
                                    >
                                      n
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_7"
                                      class="inTurnFadingTextG"
                                    >
                                      g
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_8"
                                      class="inTurnFadingTextG"
                                    >
                                      {" "}
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_9"
                                      class="inTurnFadingTextG"
                                    >
                                      .
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_10"
                                      class="inTurnFadingTextG"
                                    >
                                      .
                                    </div>
                                    <div
                                      id="inTurnFadingTextG_11"
                                      class="inTurnFadingTextG"
                                    >
                                      .
                                    </div>
                                  </div>
                                </div>
                              )}
                            </>
                          }
                        </div>
                        {/* filter Ends */}
                      </List>
                    </Paper>
                  </div>
                </Slide>
              </div>
            </Hidden>
          )}
          {this.state.productDisplay && (
            <>
              <Hidden smDown>
                <Container maxWidth="lg">
                  <div
                    // className="filter_page_layout"
                    className={`${
                      check
                        ? `filter_page_layout ${classes.productCardscheck}`
                        : `filter_page_layout ${classes.productCardsuncheck}`
                    } ${isTopFilter ? classes.widthFilter : ""}`}
                  >
                    <ProductLayout
                      wishlist={this.props.wishlist}
                      data={this.props.datas}
                      loading={this.props.loading}
                      style={{ backgroundColor: "whitesmoke" }}
                      ref={this.myRef}
                    />
                  </div>
                </Container>
              </Hidden>
              <Hidden mdUp>
                <div
                  // className="filter_page_layout"
                  className={`${
                    check
                      ? `filter_page_layout ${classes.productCardscheck}`
                      : `filter_page_layout ${classes.productCardsuncheck}`
                  } ${isTopFilter ? classes.widthFilter : ""}`}
                >
                  <ProductLayout
                    wishlist={this.props.wishlist}
                    data={this.props.datas}
                    loading={this.props.loading}
                    style={{ backgroundColor: "whitesmoke" }}
                    ref={this.myRef}
                  />
                </div>
              </Hidden>
            </>
          )}
        </div>

        {/* ---------------------------------------------------------------------------------------------------------------------------- */}
        <Hidden mdUp>
          <div
            style={{
              top: "90px",
              position: "absolute",
              backgroundColor: "white",
              width: "100%",
            }}
          >
            <div
              style={{
                padding: "16px 22px 10px",
                borderBottom: "1px solid #e3e3e3",
                display: openMobile ? "none" : "block",
                position: "sticky",
                top: "0px",
              }}
              className={`${classes.colorMain}`}
            >
              <button
                style={{
                  backgroundColor: "white",
                  border: "none",
                  marginTop: "10px",
                }}
                onClick={this.handleDrawerCloseMobile}
              >
                <i
                  className={`fa fa-times ${classes.colorMain}`}
                  style={{ color: "#20205A" }}
                ></i>
                <span
                  style={{
                    border: "none",
                    fontWeight: "600",
                    color: "#20205A",
                    padding: "6px 8px",
                    fontFamily: "notoSerif-regular",
                  }}
                >
                  &nbsp;FILTER BY
                </span>
              </button>

              <button
                onClick={this.handleClearAllData}
                style={{
                  float: "right",
                  border: "1px solid #c0bcbc",
                  padding: "4px 8px",
                  fontSize: "12px",
                  color: "#20205A",
                  borderRadius: "0px",
                  marginTop: "6px",
                  backgroundColor: "white",
                }}
                size="small"
                className={`${classes.colorMain}`}
              >
                &nbsp;CLEAR ALL&nbsp;
              </button>
            </div>

            <Grid
              container
              xs={12}
              className="p"
              style={{
                overflow: "scroll",
                height: "100%",
                display: openMobile ? "none" : "block",
              }}
            >
              <Grid container item xs={12}>
                <Grid item xs={6} className={classes.filterMain}>
                  <List className="mbl-filter-list" style={{ padding: "0px " }}>
                    {filter &&
                      filter.map((row) => {
                        return subFilter &&
                          subFilter[row] &&
                          subFilter[row].length > 0 &&
                          row !== "price" ? (
                          <>
                            {window.location.pathname === "/goldcoins" ||
                            found === "/goldcoins" ||
                            found === "goldcoins" ? (
                              row === "Offers" ? (
                                ""
                              ) : (
                                <ListItem
                                  key={row}
                                  className={`mbl-filter-list ${
                                    isTopFilter
                                      ? classes.colorBackgroundListSilver
                                      : classes.colorBackgroundList
                                  } ${classes.borderBottomList}`}
                                  onClick={() => this.filterValue(row)}
                                >
                                  <ListItemText className="filter-mbl-font filter-mbl-fonts">
                                    {row && row}
                                  </ListItemText>
                                </ListItem>
                              )
                            ) : (
                              <ListItem
                                key={row}
                                className={`mbl-filter-list ${
                                  isTopFilter
                                    ? classes.colorBackgroundListSilver
                                    : classes.colorBackgroundList
                                } ${classes.borderBottomList}`}
                                onClick={() => this.filterValue(row)}
                              >
                                <ListItemText className="filter-mbl-font filter-mbl-fonts">
                                  {row && row.toUpperCase()}
                                </ListItemText>
                                <ArrowRightIcon></ArrowRightIcon>
                              </ListItem>
                            )}
                          </>
                        ) : (
                          ""
                        );
                      })}
                  </List>
                </Grid>
                {this.state.filtercheck !== "" && (
                  <Grid
                    item
                    xs={6}
                    style={{ overflow: "scroll", height: "73vh" }}
                  >
                    
                    <>
                      {subFilter[
                        this.state.filtercheck && this.state.filtercheck
                      ].map((row) => {
                        return (
                          <ListItem
                            key={row}
                            style={{
                              padding: "0px",

                              width: "100%",
                              borderBottom: "1px solid #efeeee",
                            }}
                          >
                            {this.state.filtercheck &&
                            this.state.filtercheck === "Availability" &&
                            row.constructor === Object ? (
                              <>
                                <Checkbox
                                  value="checked"
                                  className={`${classes.sublistMobile}`}
                                  checked={
                                    this.state.checked &&
                                    this.state.filtercheck &&
                                    this.state.filtercheck[
                                      this.state.filtercheck
                                    ] &&
                                    this.state.filtercheck[
                                      this.state.filtercheck.replace(/\s/g, "")
                                    ][row.value]
                                      ? this.state.checked[
                                          this.state.filtercheck &&
                                            this.state.filtercheck.replace(
                                              /\s/g,
                                              ""
                                            )
                                        ][row.value]
                                      : false
                                  }
                                  onChange={(e) =>
                                    this.handleChange(
                                      row.value,
                                      this.state.checked[
                                        this.state.filtercheck &&
                                          this.state.filtercheck.replace(
                                            /\s/g,
                                            ""
                                          )
                                      ][row.value] !== undefined
                                        ? !this.state.checked[
                                            this.state.filtercheck &&
                                              this.state.filtercheck.replace(
                                                /\s/g,
                                                ""
                                              )
                                          ][row.value]
                                        : true,
                                      e
                                    )
                                  }
                                  // onChange={(e) => this.handleChange(row12, this.state.checked[row.replace(/\s/g, "")][row12] !== undefined ? !this.state.checked[row.replace(/\s/g, "")][row12] : true, e)}
                                  icon={
                                    <CheckBoxOutlineBlankIcon fontSize="small" />
                                  }
                                  checkedIcon={
                                    <CheckBoxIcon fontSize="small" />
                                  }
                                  name={
                                    this.state.filtercheck &&
                                    this.state.filtercheck.replace(/\s/g, "")
                                  }
                                  onClick={this.handleDrawerCloseMobile}
                                />
                                <ListItemText></ListItemText>
                              </>
                            ) : (
                              <>
                                <FormControlLabel
                                  style={{ paddingLeft: 4 }}
                                  label={
                                    <span
                                      style={{
                                        color: "gray",
                                        textTransform: "capitalize",
                                        fontWeight: "bold",
                                        fontSize: "12px",
                                      }}
                                    >
                                      {row}
                                    </span>
                                  }
                                  control={
                                    <div>
                                      <CheckboxWithTick
                                        color="white"
                                        value="checked"
                                        checked={
                                          this.state.checked[
                                            this.state.filtercheck &&
                                              this.state.filtercheck.replace(
                                                /\s/g,
                                                ""
                                              )
                                          ][row] !== undefined
                                            ? this.state.checked[
                                                this.state.filtercheck &&
                                                  this.state.filtercheck.replace(
                                                    /\s/g,
                                                    ""
                                                  )
                                              ][row]
                                            : false
                                        }
                                        onChange={(e) =>
                                          this.handleChange(
                                            row,
                                            this.state.checked[
                                              this.state.filtercheck &&
                                                this.state.filtercheck.replace(
                                                  /\s/g,
                                                  ""
                                                )
                                            ][row] !== undefined
                                              ? !this.state.checked[
                                                  this.state.filtercheck &&
                                                    this.state.filtercheck.replace(
                                                      /\s/g,
                                                      ""
                                                    )
                                                ][row]
                                              : true,
                                            e
                                          )
                                        }
                                        name={
                                          this.state.filtercheck &&
                                          this.state.filtercheck.replace(
                                            /\s/g,
                                            ""
                                          )
                                        }
                                        onClick={this.handleDrawerCloseMobile}
                                      />
                                    </div>
                                  }
                                  labelPlacement="end"
                                />

                                {}
                              </>
                            )}
                          </ListItem>
                        );
                      })}
                    </>
                  </Grid>
                )}
              </Grid>
             
            </Grid>
            {openMobile ? null : (
              <AppBar
                className="filter-fixed header"
                style={{ backgroundColor: "#2F348B ", minHeight: "35px" }}
              >
                <div
                  style={{
                    color: "#fff",
                    paddingTop: "12px",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  APPLY FILTERS
                </div>
              </AppBar>
            )}

            <AppBar
              color="primary"
              className="filter-fixed header"
              style={{
                display: !openMobile ? "none" : "block",
                backgroundColor: "whitesmoke",
              }}
            >
              <Container style={{ border: "1px solid #2F348B" }}>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    style={{ borderRight: "1px solid #2F348B" }}
                  >
                    <IconButton
                      edge="end"
                      color="inherit"
                      onClick={() =>
                        this.setState({
                          CardRadio: !this.state.CardRadio,
                          productDisplay: !this.state.productDisplay,
                        })
                      }
                    >
                      <Typography
                        variant=""
                        className={`filter-mbl-font ${classes.colorMainSecondary}`}
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: "bold",
                          fontFamily: "notoSerif-regular",
                        }}
                      >
                        {/* <i className="filter-icon" class="fa fa-sort"></i> */}
                        SORT BY
                      </Typography>
                    </IconButton>
                  </Grid>
                  <Grid item xs={6}>
                    <IconButton
                      edge="end"
                      color="inherit"
                      onClick={this.handleDrawerOpenMobile}
                    >
                      <Typography
                        variant=""
                        className={`filter-mbl-font ${classes.colorMainSecondary}`}
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: "bold",
                          fontFamily: "notoSerif-regular",
                        }}
                      >
                        {/* <i className="filter-icon" class="fa fa-filter"></i> */}
                        &nbsp;FILTER BY
                      </Typography>
                    </IconButton>
                  </Grid>
                </Grid>
              </Container>
            </AppBar>
          </div>

          {this.state.CardRadio ? (
            <div style={{ position: "fixed", top: "3px" }}>
              <CardRadioButton
                cardWidth="cardSortSmallScreen"
                data={sortOptions}
                onChange={this.handleChangesort}
                values={this.props.sort}
                close={this.handleDrawerClose}
                clear={this.handleClearAllData}
              />
            </div>
          ) : (
            ""
          )}
        </Hidden>
      </>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  filterdatas: PropTypes.object.isRequired,
};

export default withRouter(
  withStyles(styles, { withTheme: true })(PersistentDrawerLeft)
);
