import { useGraphql } from "hooks/GraphqlHook";
import {
  PRODUCTDETAILS,
  YouMayAlsoLike,
  youRecentlyViewed,
} from "queries/productdetail";
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const initialCtx = {
  ProductDetailCtx: {
    filters: {
      productId: "",
      defaultVariants: {
        diamondType: "",
        metalColor: "",
        purity: "",
        skuSize: "",
      },
      skuId: "",
    },
    loading: false,
    error: false,
    data: [],
    likedatas: [],
    ratingcountsclear: [],
    viewedddatas: [],
    price: 0,
    rating: [],
    ratingcounts: [],
    registerurl: "",
  },
  setFilters: () => {},
  setlikedata: () => {},
  setrating: () => {},
  setregisterurl: () => {},
  setratingcounts: () => {},
  setratingcountsclear: () => {},
};
export const ProductDetailContext = React.createContext(initialCtx);
export const ProductDetailConsumer = ProductDetailContext.Consumer;
export const TabsProvider = (props) => {  
  const [filters, setFilters] = React.useState(
    initialCtx.ProductDetailCtx.filters
  );
  const [likedatas, setlikedata] = React.useState([]);
  const [viewedddatas, setvieweddata] = React.useState();
  const [rating, setrating] = React.useState([]);
  const [ratingcountsclear, setratingcountsclear] = React.useState([]);
  const [registerurl, setregisterurl] = React.useState("");
  const [ratingcounts, setratingcounts] = React.useState([]);
  const [price, setPrice] = React.useState(0);

  const pathQueries = () => {
    setFilters(filters);
  };
  useEffect(() => {
   
    pathQueries();
  }, [filters]);
  let variables;  
  const { loading, error, data, makeRequest } = useGraphql(
    PRODUCTDETAILS,
    () => {},
    {}
  );  
  const {
    loading: likeloading,
    error: likeerror,
    data: likedata,
    makeRequest: likemakeRequest,
  } = useGraphql(YouMayAlsoLike, () => {}, {}, false);

  const {
    loading: viewedloading,
    error: viewederror,
    data: vieweddata,
    makeRequest: viewmakeRequest,
  } = useGraphql(youRecentlyViewed, () => {}, {}, false);

  var con_gust = localStorage.getItem("gut_lg")
    ? JSON.parse(localStorage.getItem("gut_lg"))
    : "";
  const myStorage = sessionStorage.getItem("user_id");
  const localvalues_check =
    JSON.parse(localStorage.getItem("gut_lg")) === true ? true : false;
  React.useEffect(() => {
    if (localvalues_check === true) {
      if (con_gust === true) {
        if (!myStorage) {
          localStorage.clear();
          sessionStorage.clear();
        }
      }
    }
  }, []);
  useEffect(() => {
    setlikedata(likedata);
  }, [likedata, likeloading, likeerror, filters, price, data]);

  useEffect(() => {
    setvieweddata(vieweddata);
  }, [vieweddata, price, data]);

  useEffect(() => {
    let localStorageQuantity = localStorage.getItem("quantity")
      ? JSON.parse(localStorage.getItem("quantity"))
      : null;

    if (localStorageQuantity) {
      filters.quantity = localStorageQuantity;
      setFilters(filters);
    }
    if (filters.productId === "") {
      if (window.location.search.length > 0) {
        let loc = window.location.search.split("=");
        let productDetailProps = loc[1];
        filters["skuId"] = productDetailProps;
        setFilters(filters);
        variables = { conditionfilter: { skuId: filters["skuId"] } };
      } else {
        var urls = window.location.href;

        var urlssplit = urls.split("/");
        var urlReplace = urlssplit[urlssplit.length - 1].replace(/-/g, " ");
        variables = {
          productnamefilter: {
            productListByProductId: { productName: { equalTo: urlReplace } },
          },
          number: 1,
        };
      }
    }

    if (window.location.search.length > 0) {
      setregisterurl({
        registerurl: window.location.pathname + window.location.search,
      });
    }
  }, []);

  useEffect(() => {
    if (Object.entries(data).length !== 0 && data.constructor === Object) {
      if (
        data.data.allTransSkuLists &&
        data.data.allTransSkuLists.nodes.length > 0
      ) {
        handleProductDetatiContext();
      }
    }
  }, [filters]);
  useEffect(() => {
    if (filters.skuId) {
      var _sessionStorage = sessionStorage.getItem("skuId");
      var arr = [];
      if (_sessionStorage && _sessionStorage.length > 0) {
        arr = _sessionStorage.split(",");
        arr.push(filters.skuId);
        var uniqueArray = [...new Set(arr)];
  
        sessionStorage.setItem("skuId", uniqueArray);
      } else {
        sessionStorage.setItem("skuId", filters.skuId);
      }
      let variablesviewed = {};
      variablesviewed["imgcondition"] = {
        imagePosition: 1,
        isdefault: true,
      };
      if (_sessionStorage && _sessionStorage.indexOf(",") > -1) {
        variablesviewed["filtersku"] = {
          skuId: {
            in: sessionStorage.getItem("skuId").split(","),
            notEqualTo: filters.skuId,
          },
        };
      } else {
        variablesviewed["filtersku"] = {
          skuId: {
            in: [sessionStorage.getItem("skuId")],
            notEqualTo: filters.skuId,
          },
        };
      }
      let variableslike = {};
      

      variableslike["imgcondition"] = {
        imagePosition: 1,
        isdefault: true,
      };

      if (
        data &&
        Object.entries(data).length > 0 &&
        data.constructor === Object &&
        data.data &&
        data.data.allTransSkuLists &&
        data.data.allTransSkuLists.nodes &&
        data.data.allTransSkuLists.nodes[0]
      ) {
        if (filters["productType"] && filters["productType"].length > 0) {
          variableslike["filterdata"] = {
            productType: { equalTo: filters["productType"] },
          };
        } else {
          var productType =
            data.data.allTransSkuLists.nodes[0].productListByProductId
              .productType;
          variableslike["filterdata"] = {
            productType: { equalTo: productType },
          };
        }
      }

      if (
        data &&
        Object.entries(data).length > 0 &&
        data.constructor === Object &&
        data.data &&
        data.data.allTransSkuLists &&
        data.data.allTransSkuLists.nodes &&
        data.data.allTransSkuLists.nodes[0]
      ) {
        var greaterthanprice = price - 5000 > 0 ? price - 5000 : 0;
        variableslike["filterdata"]["transSkuListsByProductId"] = {
          every: {
            discountPrice: {
              lessThanOrEqualTo: price + 5000,
              greaterThanOrEqualTo: greaterthanprice,
            },
          },
        };
        variableslike["filterdata"]["isactive"] = { equalTo: true };
        variableslike["Conditiondatatranssku"] = {
          isdefault: true,
        };
      }

      if (
        data &&
        Object.entries(data).length > 0 &&
        data.constructor === Object &&
        data.data &&
        data.data.allTransSkuLists &&
        data.data.allTransSkuLists.nodes &&
        data.data.allTransSkuLists.nodes[0]
      ) {
        if (filters["productType"] && filters["productType"].length > 0) {
          variableslike["filterdata2"] = {
            productType: { equalTo: filters["productType"] },
          };
        } else {
          var productType2 =
            data.data.allTransSkuLists.nodes[0].productListByProductId
              .productType;
          variableslike["filterdata2"] = {
            productType: { equalTo: productType2 },
          };
        }
      }

      if (
        data &&
        Object.entries(data).length > 0 &&
        data.constructor === Object &&
        data.data &&
        data.data.allTransSkuLists &&
        data.data.allTransSkuLists.nodes &&
        data.data.allTransSkuLists.nodes[0]
      ) {
        variableslike["filterdata2"]["isactive"] = { equalTo: true };
        variableslike["Conditiondatatranssku2"] = {
          isdefault: true,
        };
        let loc = window.location.search.split("=")[1];
        variableslike["filterdatatranssku2"] = {
          skuId: {
            notEqualTo: loc,
          },
        };
      }

      let vardata = { ...variableslike };

      if (
        data &&
        Object.entries(data).length > 0 &&
        data.constructor === Object &&
        data.data &&
        data.data.allTransSkuLists &&
        data.data.allTransSkuLists.nodes &&
        data.data.allTransSkuLists.nodes[0]
      ) {
        likemakeRequest(vardata);
      }
      setlikedata(likedata);
      if (
        data &&
        Object.entries(data).length > 0 &&
        data.constructor === Object &&
        data.data &&
        data.data.allTransSkuLists &&
        data.data.allTransSkuLists.nodes &&
        data.data.allTransSkuLists.nodes[0]
      ) {
        viewmakeRequest(variablesviewed);
      }
    }
  }, [price, filters, data]);
  useEffect(() => {
    if (
      Object.entries(data).length > 0 &&
      data.data &&
      data.data.allTransSkuLists &&
      data.data.allTransSkuLists.nodes &&
      data.data.allTransSkuLists.nodes[0]
    ) {
      setPrice(data.data.allTransSkuLists.nodes[0].markupPrice);
    }
  }, [loading, error, data, price]);
  const updateProductList = async () => {
    if (
      Object.entries(variables).length !== 0 &&
      variables.constructor === Object
    ) {
      await makeRequest(variables);
    } else {
      return {};
    }
  };
  const handleProductDetatiContext = () => {
    if (window.location.search.length > 0) {
      let loc = window.location.search.split("=");
     
      filters["productId"] =
        data.data.allTransSkuLists.nodes[0].productListByProductId.productId;
    }

    var variants = filters["defaultVariants"];
    var metalColors =
      filters &&
      filters.defaultVariants &&
      filters.defaultVariants.metalColor &&
      filters.defaultVariants.metalColor.length &&
      filters.defaultVariants.metalColor.length > 0
        ? { productColor: filters.defaultVariants.metalColor }
        : null;
    var ProductVariants = {
      conditionfilter: { productId: filters["productId"], ...variants },
    };
    var ConditionimagesMetalColor = { conditionImage: metalColors };
    variables = { ...ProductVariants, ...ConditionimagesMetalColor };
  };
  useEffect(() => {
    if (Object.entries(data).length !== 0 && data.constructor === Object) {
      if (
        data.data &&
        data.data.allTransSkuLists &&
        data.data.allTransSkuLists.nodes.length > 0
      ) {
        filters["defaultVariants"]["diamondType"] =
          data.data.allTransSkuLists.nodes[0].diamondType;
        filters["defaultVariants"]["metalColor"] =
          data.data.allTransSkuLists.nodes[0].metalColor;
        filters["defaultVariants"]["purity"] =
          data.data.allTransSkuLists.nodes[0].purity;
        filters["defaultVariants"]["skuSize"] =
          data.data.allTransSkuLists.nodes[0].skuSize;
        filters["skuId"] = data.data.allTransSkuLists.nodes[0].skuId;
        if (window.location.search.length === 0) {
          filters["productId"] =
            data.data.allTransSkuLists.nodes[0].productListByProductId.productId;
        }
        setFilters(filters);
      }
    }
  }, [loading, error, data]);
  useEffect(() => {
    if (window.location.search.length > 0) {
      let loc = window.location.search.split("=");
      let productDetailProps = loc[1];
      if (filters["skuId"] !== productDetailProps)
        props.history.push(
          `${props.location.pathname}?${`skuId=${filters["skuId"]}`}`
        );
    }
  }, [data, loading, error]);
  useEffect(() => {
    setFilters(filters);
    pathQueries();
    updateProductList();
  }, [filters]);
  useEffect(() => {
    if (window.location.search.length > 0) {
      let loc = window.location.search.split("=");
      let productDetailProps = loc[1];
      if (filters["skuId"] !== productDetailProps)
        props.history.push(
          `${props.location.pathname}?${`skuId=${filters["skuId"]}`}`
        );
    }
  }, [data, loading, error]);
  useEffect(() => {}, [
    likedata,
    likeerror,
    likeloading,
    loading,
    error,
    data,
    price,
    filters,
  ]);

  const ProductDetailCtx = {
    ratingcountsclear,
    ratingcounts,
    filters,
    loading,
    error,
    data,
    likedata,
    likeloading,
    likeerror,
    likedatas,
    vieweddata,
    viewederror,
    viewedloading,
    viewedddatas,
    rating,
    registerurl,
  };

  return (
    <ProductDetailContext.Provider
      value={{
        setratingcountsclear,
        setratingcounts,
        ProductDetailCtx,
        setFilters,
        setlikedata,
        setvieweddata,
        setrating,
        setregisterurl,
      }}
    >
      {props.children}
    </ProductDetailContext.Provider>
  );
};
export const ProductDetailProvider = withRouter(TabsProvider);
