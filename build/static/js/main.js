(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      }),
        a.d(t, "c", function () {
          return n;
        }),
        a.d(t, "b", function () {
          return i;
        });
      var s = "https://api-staging.nacjewellers.net",
        n = "",
        i = "https://assets.stylori.com/";
    },
    ,
    function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return l;
      });
      var s = a(2),
        n = a(3),
        i = a(0),
        r = a.n(i),
        o = a(26),
        c = a(15),
        l = function (e, t) {
          var a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            l = r.a.useState(!0),
            u = Object(n.a)(l, 2),
            g = u[0],
            m = u[1],
            d = r.a.useState(!1),
            M = Object(n.a)(d, 2),
            p = M[0],
            j = M[1],
            y = r.a.useState({}),
            w = Object(n.a)(y, 2),
            N = w[0],
            h = w[1],
            I = r.a.useState({}),
            z = Object(n.a)(I, 2),
            L = z[0],
            S = z[1],
            C = r.a.useContext(c.a).NetworkCtx,
            f = C.graphqlUrl,
            b = C.cdnUrl,
            T = Object(o.a)({ uri: f }),
            D = function (n) {
              T({ query: e, variables: Object(s.a)(Object(s.a)({}, a), n) })
                .then(function (e) {
                  if ((m(!1), j(!1), h(e), t && N))
                    try {
                      var a = t(N, b);
                      S(a);
                    } catch (p) {
                      console.error("MAPPER ERROR", p), j(!0), S({});
                    }
                })
                .catch(function (e) {
                  m(!1), j(!0), h([]), S([]);
                });
            };
          return (
            r.a.useEffect(function () {
              i && D();
            }, []),
            { error: p, loading: g, data: N, mappedData: L, makeRequest: D }
          );
        };
    },
    ,
    ,
    ,
    ,
    function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return c;
      }),
        a.d(t, "b", function () {
          return l;
        });
      var s = a(3),
        n = a(0),
        i = a.n(n),
        r = a(8),
        o = {
          NetworkCtx: {
            apiUrl: r.a,
            token: null,
            homePage: r.c,
            graphqlUrl: "".concat(r.a, "/graphql"),
            cdnUrl: r.b,
            LoginCtx: { email: "", password: "" },
          },
          setNetworkCtx: function () {
            return null;
          },
        },
        c = i.a.createContext(o),
        l =
          (c.Consumer,
          function (e) {
            var t = i.a.useState(o.NetworkCtx),
              a = Object(s.a)(t, 2),
              n = a[0],
              r = a[1];
            return i.a.createElement(
              c.Provider,
              { value: { NetworkCtx: n, setNetworkCtx: r } },
              e.children
            );
          });
    },
    ,
    ,
    function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return c;
      }),
        a.d(t, "b", function () {
          return l;
        });
      var s,
        n = a(3),
        i = a(0),
        r = a.n(i),
        o = a(15),
        c =
          (a(78),
          function (e) {
            var t = r.a.useState(!1),
              a = Object(n.a)(t, 2),
              s = a[0],
              i = a[1],
              o = r.a.useState(!1),
              c = Object(n.a)(o, 2),
              l = c[0],
              u = c[1],
              g = r.a.useState({}),
              m = Object(n.a)(g, 2),
              d = m[0],
              M = m[1],
              p = r.a.useState({}),
              j = Object(n.a)(p, 2),
              y = j[0],
              w = j[1],
              N = r.a.useState({ status: null, statusText: "" }),
              h = Object(n.a)(N, 2),
              I = h[0];
            h[1];
            return (
              r.a.useEffect(
                function () {
                  i(!0);
                  var t = {};
                  e()
                    .then(function (e) {
                      w(e);
                    })
                    .catch(function (e) {
                      return u(!0);
                    }),
                    i(!1),
                    w(t),
                    M(t);
                },
                [e]
              ),
              { loading: s, error: l, status: I, data: d, mapped: y }
            );
          }),
        l = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            a =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            i =
              (arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r.a.useContext(o.a).NetworkCtx.apiUrl),
            c = r.a.useState(!1),
            l = Object(n.a)(c, 2),
            u = l[0],
            g = l[1],
            m = r.a.useState(!1),
            d = Object(n.a)(m, 2),
            M = d[0],
            p = d[1],
            j = r.a.useState({}),
            y = Object(n.a)(j, 2),
            w = y[0],
            N = y[1],
            h = r.a.useState({}),
            I = Object(n.a)(h, 2),
            z = I[0],
            L = (I[1], r.a.useState({ status: null, statusText: "" })),
            S = Object(n.a)(L, 2),
            C = S[0],
            f = S[1],
            b = w ? "POST" : "GET",
            T = "".concat(i).concat(e),
            D = function (e, a) {
              s =
                a ||
                (localStorage.getItem("accessToken")
                  ? localStorage.getItem("accessToken")
                  : "");
              var n = "string" === typeof t ? t : JSON.stringify(t);
              (t = 0 === JSON.parse(n).length ? n : JSON.stringify(e)),
                g(!0),
                fetch(T, {
                  method: b,
                  headers: {
                    "Content-Type": "application/json",
                    "x-access-token": s,
                  },
                  body: t,
                })
                  .then(function (e) {
                    return (
                      f({ status: e.status, statusText: e.message }), e.json()
                    );
                  })
                  .then(function (e) {
                    N(e), g(!1);
                  })
                  .catch(function (e) {
                    p(!0), g(!1);
                  });
            };
          return (
            r.a.useEffect(function () {
              a && D();
            }, []),
            {
              loading: u,
              error: M,
              status: C,
              data: w,
              mapped: z,
              makeFetch: D,
            }
          );
        };
    },
    function (e, t, a) {
      "use strict";
      a.d(t, "d", function () {
        return c;
      }),
        a.d(t, "a", function () {
          return l;
        }),
        a.d(t, "b", function () {
          return u;
        }),
        a.d(t, "c", function () {
          return d;
        });
      var s = a(1),
        n = a.n(s),
        i = a(4),
        r = a(7),
        o = a(2),
        c = (a(0), a(24), [{ res: "1000x1000", size: "1440w" }]),
        l = function (e, t, a, s) {
          var n =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : "equalTo",
            i = Object.keys(s).filter(function (e) {
              if ("transSkuListsByProductId" === e) return !0;
            });
          return a.length > 0
            ? i[0] === a
              ? Object(r.a)({}, a, {
                  some: Object(o.a)(
                    Object(o.a)({}, s.transSkuListsByProductId.some),
                    {},
                    Object(r.a)({}, e, Object(r.a)({}, n, t))
                  ),
                })
              : Object(r.a)({}, a, {
                  some: Object(r.a)({}, e, Object(r.a)({}, n, t)),
                })
            : Object(r.a)({}, e, Object(r.a)({}, n, t));
        },
        u = function (e, t) {
          if ("price" !== e) {
            return Object(r.a)({}, e, Object(r.a)({}, "equalTo", t));
          }
        };
      function g() {
        return m.apply(this, arguments);
      }
      function m() {
        return (m = Object(i.a)(
          n.a.mark(function e() {
            var t, a;
            return n.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (window.createImageBitmap) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", !1);
                  case 2:
                    return (
                      "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
                      (e.next = 5),
                      fetch(
                        "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
                      ).then(function (e) {
                        return e.blob();
                      })
                    );
                  case 5:
                    return (
                      (t = e.sent),
                      (e.next = 8),
                      createImageBitmap(t).then(
                        function () {
                          return !0;
                        },
                        function () {
                          return !1;
                        }
                      )
                    );
                  case 8:
                    return (a = e.sent), e.abrupt("return", a);
                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var d = (function () {
        var e = Object(i.a)(
          n.a.mark(function e() {
            var t, a, s;
            return n.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      null,
                      (t = Math.max(
                        document.documentElement.clientWidth,
                        window.innerWidth || 0
                      )),
                      Math.max(
                        document.documentElement.clientHeight,
                        window.innerHeight || 0
                      ),
                      (e.next = 5),
                      g()
                    );
                  case 5:
                    (a = e.sent),
                      ((s = {}).browser_type = a ? ".webp" : ".jpg"),
                      (s.browser_width = t),
                      localStorage.setItem("browserDetails", JSON.stringify(s));
                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
    },
    ,
    ,
    ,
    function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return s;
      }),
        a.d(t, "a", function () {
          return n;
        }),
        a.d(t, "f", function () {
          return i;
        }),
        a.d(t, "b", function () {
          return r;
        }),
        a.d(t, "e", function () {
          return o;
        }),
        a.d(t, "d", function () {
          return c;
        }),
        a.d(t, "g", function () {
          return l;
        });
      var s =
          "query myquerycart($productList: [String!]) {\n  allTransSkuLists(filter: { generatedSku: { in: $productList } }) {\n    nodes {\n      generatedSku\n      purity\n      metalColor\n      discountPrice\n      skuUrl\n      markupPrice\n      skuWeight\n      diamondType\n      skuSize\n      costPrice\n      sellingPrice\n      discountPrice\n      discount\n      markupPrice\n      markupPriceTax\n      minOrderQty\n      maxOrderQty\n\n      productListByProductId {\n        productMaterialsByProductSku {\n          nodes {\n            materialName\n          }\n        }\n        productId\n        productName\n        isactive\n        productImagesByProductId(filter: { imagePosition: { equalTo: 1 } }) {\n          nodes {\n            imageUrl\n          }\n        }\n        productType\n\n        productDiamondsByProductSku {\n          nodes {\n            diamondColour\n            diamondShape\n            stoneWeight\n            diamondClarity\n            stoneCont\n            diamondType\n            stoneCount\n            description\n            stoneAmount\n            itemName\n          }\n        }\n        productGemstonesByProductSku {\n          nodes {\n            gemstoneSize\n            gemstoneType\n            stoneWeight\n            stoneCount\n            description\n            stoneRate\n            stoneAmount\n            itemName\n            gemstoneShape\n          }\n        }\n      }\n    }\n  }\n}\n\n\n",
        n =
          'query MyQuery($userProfileId: [UUID!]) {\n  allOrders(filter: {userProfileId: {in: $userProfileId}}, orderBy: CREATED_AT_DESC, condition: {paymentStatus: "Submitted"}) {\n    nodes {\n      paymentStatus\n      shoppingCartByCartId {\n        discountedPrice\n        discount\n        shoppingCartItemsByShoppingCartId {\n          nodes {\n            transSkuListByProductSku {\n              discountPrice\n              generatedSku\n              sellingPrice\n              purity\n              metalColor\n              isReadyToShip\n              vendorDeliveryTime\n              productListByProductId {\n                productImagesByProductId(filter: {isdefault: {equalTo: true}, imagePosition: {equalTo: 1}}) {\n                  nodes {\n                    imageUrl\n                  }\n                }\n                productName\n                productType\n                productDiamondsByProductSku {\n                  nodes {\n                    stoneWeight\n                  }\n                }\n              }\n              skuWeight\n              markupPrice\n              skuSize\n            }\n          }\n        }\n        cartAddressesByCartId(condition: {addressType: 1}) {\n          nodes {\n            addressline1\n            city\n            contactNumber\n            country\n            countryCode\n            firstname\n            lastname\n            pincode\n            state\n            addressType\n          }\n        }\n        giftwrapsByCartId {\n          nodes {\n            message\n            giftTo\n          }\n        }\n      }\n      createdAt\n      id\n      orderStatus\n      paymentMode\n    }\n  }\n}\n\n\n',
        i =
          "query MyQuery($orderId:  OrderCondition) {\n  allOrders(condition: $orderId) {\n    nodes {\n      paymentMode\n      shoppingCartByCartId {\n        discountedPrice\n        discount\n        shoppingCartItemsByShoppingCartId {\n          \n          nodes {\n            transSkuListByProductSku {\n              discountPrice\n              discount\n              generatedSku\n              sellingPrice\n              purity\n              metalColor\n              isReadyToShip\n              vendorDeliveryTime\n              productListByProductId {\n                productImagesByProductId(filter: {isdefault: {equalTo: true}, imagePosition: {equalTo: 1}}) {\n                  nodes {\n                    imageUrl\n                  }\n                }\n                productName\n                productType\n                productDiamondsByProductSku {\n                  nodes {\n                    stoneWeight\n                  }\n                }\n              }\n              skuWeight\n              markupPrice\n              skuSize\n            }\n          }\n        }\n        cartAddressesByCartId(condition: {addressType: 1}) {\n          nodes {\n            addressline1\n            city\n            contactNumber\n            country\n            countryCode\n            firstname\n            lastname\n            pincode\n            state\n            addressType\n          }\n        }\n        giftwrapsByCartId {\n          nodes {\n            message\n            giftTo\n          }\n        }\n      }\n      createdAt\n      id\n    }\n  }\n}\n\n",
        r =
          "query MyQuery($userprofileId: [UUID!]) {\n  allUserWhislists(filter: {userprofileId: {in: $userprofileId}, isActive: {equalTo: true}}) {\n    nodes {\n      userprofileId\n      productId\n      skuId\n      productListByProductId {\n        productName\n        productImagesByProductId(condition: {isdefault: true, imagePosition: 1}) {\n          nodes {\n            imageUrl\n          }\n        }\n        isactive\n      }\n      transSkuListBySkuId {\n        discountPrice\n        markupPrice\n        generatedSku\n      }\n    }\n  }\n}\n\n",
        o =
          "query MyQuery($CartId:ShoppingCartItemCondition) {\n  allShoppingCartItems(condition: $CartId) {\n    nodes {\n      transSkuListByProductSku {\n        generatedSku\n\n      }\n    }\n  }\n}\n\n",
        c =
          "query FetchCartId($UserId: ShoppingCartCondition) {\n  allShoppingCarts(condition: $UserId, orderBy: UPDATED_AT_DESC, first: 1) {\n    nodes {\n      userprofileId\n      id\n      status\n    }\n  }\n}\n",
        l =
          "query MyQuery($id: UUID!) {\n  userProfileById(id: $id) {\n    firstName\n    lastName\n    email\n    country\n    countryCode\n    salutation\n    city\n    mobile\n    id\n    pincode\n  }\n}\n\n";
    },
    function (e, t, a) {
      "use strict";
      var s = a(2),
        n = a(3),
        i = a(0),
        r = a.n(i),
        o = a(38),
        c = {
          GLobalCtx: {
            loggedIn: !1,
            browserType: "jpg",
            productId: [],
            pathName: !1,
            tabsChange: !1,
          },
          setGlobaCtx: function () {
            return null;
          },
        },
        l = r.a.createContext(c),
        u =
          (l.Consumer,
          function (e) {
            var t = r.a.useState(c.GLobalCtx),
              a = Object(n.a)(t, 2),
              i = a[0],
              u = a[1];
            return (
              r.a.useEffect(function () {
                var e = window.location.pathname
                    .split("/")[1]
                    .split("-")
                    .filter(function (e) {
                      if ("silver" === e) return e;
                    }),
                  t = window.location.pathname.split("/")[1];
                console.log("locsilverStaticPage", o.b.Silver, "/".concat(t));
                var a = window.location.pathname
                  .split("/")
                  .filter(function (e) {
                    if ("silverjewellery" === e) return e;
                  });
                "/".concat(t) === o.b.Silver
                  ? u(Object(s.a)(Object(s.a)({}, i), {}, { pathName: !0 }))
                  : "/".concat(t) === o.b.styloriSilverCollections
                  ? u(Object(s.a)(Object(s.a)({}, i), {}, { pathName: !0 }))
                  : a.length > 0
                  ? u(Object(s.a)(Object(s.a)({}, i), {}, { pathName: !0 }))
                  : e.length > 0
                  ? u(Object(s.a)(Object(s.a)({}, i), {}, { pathName: !0 }))
                  : u(Object(s.a)(Object(s.a)({}, i), {}, { pathName: !1 }));
              }, []),
              r.a.createElement(
                l.Provider,
                { value: { Globalctx: i, setGlobalCtx: u } },
                e.children
              )
            );
          }),
        g = a(15),
        m = a(53),
        d = a(1),
        M = a.n(d),
        p = a(7),
        j = a(4),
        y = a(20),
        w = a(10),
        N = a(18),
        h = a(25),
        I = a(6),
        z = a(34),
        L = a(8),
        S = a(26),
        C =
          (a(80),
          {
            FilterOptionsCtx: {
              filters: {
                Offers: {},
                Availability: {},
                ProductType: {},
                style: {},
                Material: {},
                Theme: {},
                Collection: {},
                MetalColor: {},
                MetalPurity: {},
                Occasion: {},
                NoOfStones: {},
                Gender: {},
                stoneColor: {},
                stoneShape: {},
                category: {},
              },
              sort: "",
              pricemax: 5e3,
              pricemin: 15e3,
              loadingfilters: !1,
              loading: !1,
              error: !1,
              data: [],
              offset: 0,
              dataArr: [],
              first: 24,
              mappedFilters: [],
              cartcount: ["1"],
            },
            setFilters: function (e) {},
            setOffset: function () {},
            setFirst: function () {},
            updateProductList: function () {},
            setSort: function () {},
            setloadingfilters: function () {},
            setcartcount: function () {},
            setPriceMax: function () {},
            setPriceMin: function () {},
          }),
        f = r.a.createContext(C),
        b =
          (f.Consumer,
          Object(I.h)(function (e) {
            var t = r.a.useState({
                Offers: {},
                Availability: {},
                ProductType: {},
                style: {},
                material: {},
                Theme: {},
                Collection: {},
                MetalColor: {},
                MetalPurity: {},
                Occasion: {},
                NoOfStones: {},
                Gender: {},
                stoneColor: {},
                stoneShape: {},
                category: {},
              }),
              a = Object(n.a)(t, 2),
              o = a[0],
              c = a[1],
              u = r.a.useState(C.FilterOptionsCtx.sort),
              m = Object(n.a)(u, 2),
              d = m[0],
              b = m[1],
              T = r.a.useState(0),
              D = Object(n.a)(T, 2),
              A = D[0],
              O = D[1],
              v = r.a.useState(24),
              k = Object(n.a)(v, 2),
              E = k[0],
              Y = k[1],
              P = r.a.useState([]),
              U = Object(n.a)(P, 2),
              x = U[0],
              B = U[1],
              G = r.a.useState([]),
              R = Object(n.a)(G, 2),
              J = R[0],
              Q = R[1],
              W = r.a.useState([]),
              Z = Object(n.a)(W, 2),
              _ = Z[0],
              V = Z[1],
              H = r.a.useState({
                filterLogic: function () {
                  return [];
                },
              }),
              F = Object(n.a)(H, 2),
              X = F[0].filterLogic,
              q = F[1],
              K = r.a.useState(!0),
              $ = Object(n.a)(K, 2),
              ee = ($[0], $[1], r.a.useState(!1)),
              te = Object(n.a)(ee, 2),
              ae = (te[0], te[1], r.a.useState([])),
              se = Object(n.a)(ae, 2),
              ne = (se[0], se[1]),
              ie = r.a.useState([]),
              re = Object(n.a)(ie, 2),
              oe = (re[0], re[1]),
              ce = r.a.useState(0),
              le = Object(n.a)(ce, 2),
              ue = le[0],
              ge = le[1],
              me = r.a.useState(0),
              de = Object(n.a)(me, 2),
              Me = de[0],
              pe = de[1],
              je = r.a.useState(!1),
              ye = Object(n.a)(je, 2),
              we = ye[0],
              Ne = ye[1],
              he = r.a.useState(!0),
              Ie = Object(n.a)(he, 2);
            Ie[0], Ie[1];
            Object(i.useEffect)(
              function () {
                q({
                  filterLogic: function (e, t) {
                    return t;
                  },
                });
              },
              [o]
            ),
              Object(i.useEffect)(
                function () {
                  q({
                    filterLogic: function (e, t) {
                      return [].concat(Object(y.a)(e), Object(y.a)(t));
                    },
                  });
                },
                [A]
              );
            var ze = r.a.useContext(g.a).NetworkCtx.graphqlUrl,
              Le = r.a.useContext(l),
              Se = Le.Globalctx,
              Ce = Le.setGlobalCtx,
              fe =
                (Object(S.a)({ uri: ze }),
                Object(N.b)("/filterlist", {}, !1, {})),
              be = fe.loading,
              Te = fe.error,
              De = fe.data,
              Ae = fe.makeFetch,
              Oe = localStorage.getItem("gut_lg")
                ? JSON.parse(localStorage.getItem("gut_lg"))
                : "",
              ve = sessionStorage.getItem("user_id"),
              ke = !0 === JSON.parse(localStorage.getItem("gut_lg"));
            r.a.useEffect(function () {
              !0 === ke &&
                !0 === Oe &&
                (ve || (localStorage.clear(), sessionStorage.clear()));
            }, []),
              Object(i.useEffect)(function () {
                !(function () {
                  var e = Object(j.a)(
                    M.a.mark(function e() {
                      var t, a, n, i;
                      return M.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = function (e) {
                                  return e.json();
                                }),
                                (n = function (e) {
                                  return e.status >= 200 && e.status < 300
                                    ? Promise.resolve(e)
                                    : Promise.reject(new Error(e.statusText));
                                }),
                                Object(I.f)(window.location.pathname, {
                                  path: ":listingpage",
                                  search: window.location.search,
                                }),
                                (t = window.location.pathname.split("/")),
                                (a = {
                                  seofilter: {
                                    seoUrl: {
                                      in: (function () {
                                        if (t[1].indexOf("-"))
                                          return t[1].split("-");
                                      })(),
                                    },
                                  },
                                }),
                                (e.next = 8),
                                fetch(ze, {
                                  method: "post",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    query: h.a,
                                    variables: Object(s.a)({}, a),
                                  }),
                                })
                                  .then(n)
                                  .then(i)
                                  .then(
                                    (function () {
                                      var e = Object(j.a)(
                                        M.a.mark(function e(t) {
                                          var a, n;
                                          return M.a.wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  t.data.allSeoUrlPriorities
                                                    .nodes.length,
                                                    (a = {}),
                                                    0 !==
                                                      Object.entries(t)
                                                        .length &&
                                                      t.constructor ===
                                                        Object &&
                                                      t.data
                                                        .allSeoUrlPriorities &&
                                                      t.data.allSeoUrlPriorities.nodes.map(
                                                        function (e) {
                                                          var t =
                                                              e.attributeName.replace(
                                                                /\s/g,
                                                                ""
                                                              ),
                                                            s =
                                                              e.attributeValue;
                                                          o[t] = Object(p.a)(
                                                            {},
                                                            s,
                                                            !0
                                                          );
                                                          var n = {};
                                                          return (
                                                            (n[
                                                              e.attributeValue
                                                            ] = !0),
                                                            (a[
                                                              e.attributeName.replace(
                                                                /\s/g,
                                                                ""
                                                              )
                                                            ] = n),
                                                            a
                                                          );
                                                        }
                                                      ),
                                                    window.location.search &&
                                                      (n =
                                                        window.location.search.split(
                                                          "&"
                                                        )).length > 0 &&
                                                      (n.length,
                                                      n.map(function (e) {
                                                        var t = e.split("=");
                                                        if ("?sort" === t[0]) {
                                                          var a = {};
                                                          (a.values =
                                                            t[1].replace(
                                                              /%20/g,
                                                              " "
                                                            )),
                                                            (d = a);
                                                        }
                                                        "startprice" === t[0] &&
                                                          (ue = Number(t[1])),
                                                          "endprice" === t[0] &&
                                                            (Me = Number(t[1]));
                                                      }),
                                                      b(d),
                                                      ge(ue),
                                                      pe(Me)),
                                                    Object.entries(a).map(
                                                      function (e) {
                                                        c(
                                                          Object(s.a)(
                                                            Object(s.a)({}, o),
                                                            {},
                                                            { a: a }
                                                          )
                                                        );
                                                      }
                                                    ),
                                                    Xe(o);
                                                case 6:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  )
                                  .catch(function (e) {})
                              );
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              }, []);
            var Ee = [],
              Ye = [],
              Pe = function (e) {
                var t = [];
                if (window.location.search)
                  t = decodeURI(window.location.search)
                    .replace("?", "")
                    .split("&")
                    .map(function (e) {
                      var t = e.split("=");
                      return Object(p.a)({}, t[0], t[1]);
                    });
                else if (void 0 !== e && "jewellery" !== e) {
                  var a = window.location.pathname,
                    s = a && a.replace("/", "");
                  return a && s.split("-");
                }
                return oe(t), t;
              },
              Ue = Object(N.b)("/fetchproducts", {}, !1, {}),
              xe = Ue.loading,
              Be = Ue.error,
              Ge = Ue.data,
              Re = Ue.makeFetch,
              Je = Object(w.a)(h.a, function () {}, {}),
              Qe = Je.loading,
              We = Je.error,
              Ze = Je.data,
              _e = Je.makeRequest;
            Object(i.useEffect)(
              function () {
                0 === A && Ne(!!xe);
              },
              [xe, Be, Ge]
            );
            Object(i.useEffect)(
              function () {
                V(De);
              },
              [De, Te, be]
            ),
              Object(i.useEffect)(
                function () {
                  ne(Ze);
                },
                [Ze, Qe, We]
              ),
              Object(i.useEffect)(
                function () {
                  if (!xe) {
                    var e = Object(z.a)(Ge, L.b),
                      t = X(x, e);
                    B(0 === A ? e : t);
                  }
                },
                [Ge, Be, xe]
              ),
              Object(i.useEffect)(function () {}, [Ge, Be, xe]);
            var Ve = (function () {
              var e = Object(j.a)(
                M.a.mark(function e() {
                  var t, a, n, i, r, l, u, g, m;
                  return M.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !o ||
                            o.constructor !== Object ||
                            0 === Object.entries(o).length ||
                            o.constructor !== Object
                          ) {
                            e.next = 40;
                            break;
                          }
                          (n = {}),
                            o.constructor !== Object && Object.assign(o, {}),
                            Object.keys(o).map(function (e) {
                              var t = o[e],
                                a = t && Object.keys(t);
                              if (a && a.length > 0 && t[a[0]]) {
                                "".concat(e, "=").concat(a[0]);
                                var s = {};
                                (s["".concat(e)] = "".concat(a[0])), Ye.push(s);
                              }
                            }),
                            (r = Ye.map(function (e) {
                              return Object.values(e);
                            })),
                            (l = Ye.map(function (e) {
                              return Object.keys(e);
                            })),
                            (i = l.length);
                        case 7:
                          if (!i--) {
                            e.next = 31;
                            break;
                          }
                          if (
                            ((u = l[i]), "offers" !== (g = u[0].toLowerCase()))
                          ) {
                            e.next = 28;
                            break;
                          }
                          (e.t0 = r[i][0]),
                            (e.next =
                              "Up to  20%" === e.t0
                                ? 14
                                : "Up to  30%" === e.t0
                                ? 17
                                : "Up to  40%" === e.t0
                                ? 20
                                : "Up to  50%" === e.t0
                                ? 23
                                : 26);
                          break;
                        case 14:
                          return (
                            (n.offer_min = 0),
                            (n.offer_max = 20),
                            e.abrupt("break", 26)
                          );
                        case 17:
                          return (
                            (n.offer_min = 0),
                            (n.offer_max = 30),
                            e.abrupt("break", 26)
                          );
                        case 20:
                          return (
                            (n.offer_min = 0),
                            (n.offer_max = 40),
                            e.abrupt("break", 26)
                          );
                        case 23:
                          return (
                            (n.offer_min = 0),
                            (n.offer_max = 50),
                            e.abrupt("break", 26)
                          );
                        case 26:
                          e.next = 29;
                          break;
                        case 28:
                          n[g] = r[i][0];
                        case 29:
                          e.next = 7;
                          break;
                        case 31:
                          return (
                            0 !== Me &&
                              (Me > ue || Me === ue) &&
                              (n.price = { min_price: ue, max_price: Me }),
                            (n.sortBy = d.values),
                            (n.offset = A),
                            (n.isJewellery = !0),
                            (null === o || void 0 === o
                              ? void 0
                              : null === (t = o.category) || void 0 === t
                              ? void 0
                              : t.constructor) === Object &&
                              0 ===
                                (null ===
                                  (a = Object.keys(
                                    null === o || void 0 === o
                                      ? void 0
                                      : o.category
                                  )) || void 0 === a
                                  ? void 0
                                  : a.length) &&
                              o.Category &&
                              Object.keys(o.Category).length > 0 &&
                              o.Category.constructor === Object &&
                              ((m = o.Category),
                              (o.category = m),
                              sessionStorage.setItem(
                                "category",
                                JSON.stringify(o.category)
                              ),
                              c(
                                Object(s.a)(
                                  Object(s.a)({}, o),
                                  {},
                                  { filters: o }
                                )
                              )),
                            o &&
                              o.category &&
                              Object.keys(o.category).length > 0 &&
                              o.category.constructor === Object &&
                              sessionStorage.setItem(
                                "category",
                                JSON.stringify(o.category)
                              ),
                            0 !==
                              Object.keys(n).filter(function (e) {
                                if ("category" === e) return e;
                              }).length &&
                              (Object.keys(n).findIndex(function (e) {
                                return "material" === e;
                              }) > -1
                                ? "Silver" !== n.material
                                  ? (n.isJewellery = !0)
                                  : (n.isJewellery = !1)
                                : (n.isJewellery = !0)),
                            (e.next = 40),
                            Re(n)
                          );
                        case 40:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            Object(i.useEffect)(
              function () {
                o &&
                  0 !== Object.entries(o).length &&
                  o.constructor === Object &&
                  0 !== Object.keys(o).length &&
                  o.constructor === Object &&
                  Object.values(o).filter(function (e) {
                    var t;
                    if (
                      (null === e || void 0 === e ? void 0 : e.constructor) ===
                        Object &&
                      (null === (t = Object.keys(e)) || void 0 === t
                        ? void 0
                        : t.length) > 0
                    )
                      return e;
                  }).length > 0 &&
                  0 ===
                    Object.keys(o).filter(function (e) {
                      if ("a" === e) return e;
                    }).length &&
                  Ve();
              },
              [o]
            ),
              Object(i.useEffect)(
                function () {
                  ue && Ve();
                },
                [ue]
              ),
              Object(i.useEffect)(
                function () {
                  Me && Ve();
                },
                [Me]
              ),
              Object(i.useEffect)(
                function () {
                  d && Ve();
                },
                [d]
              ),
              Object(i.useEffect)(
                function () {
                  A && 0 !== A && Ve();
                },
                [A]
              );
            var He = {};
            var Fe = (function () {
                var e = r.a.useState(0),
                  t = Object(n.a)(e, 2),
                  a = (t[0], t[1]);
                return function () {
                  return a(function (e) {
                    return ++e;
                  });
                };
              })(),
              Xe = (function () {
                var e = Object(j.a)(
                  M.a.mark(function e(t) {
                    var a, s, n, i, r;
                    return M.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            c(t), Fe(), O(0), Ne(!0), Pe();
                            try {
                              Object.keys(t).map(function (e) {
                                var a = t[e],
                                  s = Object.keys(a);
                                if (s.length > 0 && a[s[0]]) {
                                  "".concat(e, "=").concat(s[0]);
                                  var n = {};
                                  (n["".concat(e)] = "".concat(s[0])),
                                    Ye.push(n);
                                }
                              }),
                                encodeURI(Ee.join("&"));
                            } catch (Be) {}
                            (s = Ye.map(function (e) {
                              return Object.values(e);
                            })),
                              (n = Ye.map(function (e) {
                                return Object.keys(e);
                              })),
                              (a = n.length);
                          case 9:
                            if (!a--) {
                              e.next = 33;
                              break;
                            }
                            if (
                              ((i = n[a]),
                              "offers" !== (r = i[0].toLowerCase()))
                            ) {
                              e.next = 30;
                              break;
                            }
                            (e.t0 = s[a][0]),
                              (e.next =
                                "Up to  20%" === e.t0
                                  ? 16
                                  : "Up to  30%" === e.t0
                                  ? 19
                                  : "Up to  40%" === e.t0
                                  ? 22
                                  : "Up to  50%" === e.t0
                                  ? 25
                                  : 28);
                            break;
                          case 16:
                            return (
                              (He.offer_min = 0),
                              (He.offer_max = 20),
                              e.abrupt("break", 28)
                            );
                          case 19:
                            return (
                              (He.offer_min = 0),
                              (He.offer_max = 30),
                              e.abrupt("break", 28)
                            );
                          case 22:
                            return (
                              (He.offer_min = 0),
                              (He.offer_max = 40),
                              e.abrupt("break", 28)
                            );
                          case 25:
                            return (
                              (He.offer_min = 0),
                              (He.offer_max = 50),
                              e.abrupt("break", 28)
                            );
                          case 28:
                            e.next = 31;
                            break;
                          case 30:
                            He[r] = s[a][0];
                          case 31:
                            e.next = 9;
                            break;
                          case 33:
                            return (
                              t &&
                                0 !== Object.entries(t).length &&
                                t.constructor === Object &&
                                Object.values(t).filter(function (e) {
                                  var t;
                                  if (
                                    (null === e || void 0 === e
                                      ? void 0
                                      : e.constructor) === Object &&
                                    (null === Object || void 0 === Object
                                      ? void 0
                                      : null === (t = Object.entries(e)) ||
                                        void 0 === t
                                      ? void 0
                                      : t.length) > 0
                                  )
                                    return e;
                                }).length > 0 &&
                                0 ===
                                  Object.keys(t).filter(function (e) {
                                    if ("a" === e) return e;
                                  }).length &&
                                Ve(),
                              (e.next = 36),
                              Ae(He)
                            );
                          case 36:
                            try {
                              "jewellery" === De.seo_url && V(De);
                            } catch (Be) {}
                          case 37:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })();
            Object(i.useEffect)(
              function () {
                0 !== Object.entries(De).length &&
                  De.constructor === Object &&
                  ("jewellery" !== window.location.pathname &&
                    e.history.push({
                      pathname: "".concat(
                        _.seo_url ? "/".concat(_.seo_url) : ""
                      ),
                      search: window.location.search,
                    }),
                  Pe(_.seo_url),
                  (function () {
                    var e =
                        _.seo_url && _.seo_url.length > 0
                          ? _.seo_url
                          : window.location.pathname.split("/")[1],
                      t = { seofilter: { seoUrl: { in: Pe(e) } } };
                    _e(t);
                  })(),
                  0 ===
                  window.location.pathname
                    .split("/")[1]
                    .split("-")
                    .filter(function (e) {
                      if ("silver" === e) return e;
                    }).length
                    ? Ce(Object(s.a)(Object(s.a)({}, Se), {}, { pathName: !1 }))
                    : Ce(
                        Object(s.a)(Object(s.a)({}, Se), {}, { pathName: !0 })
                      ));
              },
              [_]
            ),
              Object(i.useEffect)(
                function () {
                  var t = function () {
                    return d &&
                      Object.entries(d).length > 0 &&
                      d.constructor === Object &&
                      null !== ue &&
                      null !== Me
                      ? d &&
                          "sort="
                            .concat(d.values, "&startprice=")
                            .concat(ue, "&endprice=")
                            .concat(Me)
                      : null !== ue && null !== Me && 0 !== ue && 0 !== Me
                      ? "startprice=".concat(ue, "&endprice=").concat(Me)
                      : d &&
                        Object.entries(d).length > 0 &&
                        d.constructor === Object
                      ? d && "sort=".concat(d.values)
                      : void 0;
                  };
                  ((d &&
                    Object.entries(d).length > 0 &&
                    d.constructor === Object) ||
                    (null !== ue && null !== Me)) &&
                    (e.history.push({
                      pathname: "".concat(
                        _.seo_url ? "/".concat(_.seo_url) : ""
                      ),
                      search: t() ? t() : window.location.search,
                    }),
                    Ve());
                },
                [d, ue, Me]
              ),
              Object(i.useEffect)(
                function () {
                  Pe(_.seo_url).length > 0 && oe(Pe(_.seo_url));
                },
                [De, o, _, Ze]
              ),
              Object(i.useEffect)(function () {
                "jewellery" !== window.location.pathname
                  ? Object(I.f)(window.location.pathname, {
                      path: ":listingpage",
                    })
                  : Object(I.f)("/".concat(_.seo_url), {
                      path: ":listingpage",
                    });
              });
            var qe = {
              cartcount: J,
              filters: o,
              sort: d,
              loading: xe,
              error: Be,
              data: Ge,
              setFilters: Xe,
              offset: A,
              setOffset: O,
              dataArr: x,
              first: E,
              setFirst: Y,
              mappedFilters: _,
              loadingfilters: we,
              pricemax: Me,
              pricemin: ue,
            };
            return r.a.createElement(
              f.Provider,
              {
                value: {
                  setcartcount: Q,
                  FilterOptionsCtx: qe,
                  setOffset: O,
                  setFirst: Y,
                  setSort: b,
                  setloadingfilters: Ne,
                  setPriceMax: pe,
                  setPriceMin: ge,
                },
              },
              e.children
            );
          })),
        T = a(57),
        D = {
          ListingPageCtx: {
            silverFilters: {
              Offers: {},
              ProductType: {},
              Material: { Silver: !0 },
              Theme: {},
              Collection: {},
              category: {},
            },
            sort: "",
            pricemax: 5e3,
            pricemin: 15e3,
            loadingfilters: !1,
            loading: !1,
            error: !1,
            data: [],
            offset: 0,
            dataArr: [],
            first: 24,
            mappedFilters: [],
            cartcount: ["1"],
          },
          setSilverFilters: function (e) {},
          setOffset: function () {},
          setFirst: function () {},
          updateProductList: function () {},
          setSort: function () {},
          setloadingfilters: function () {},
          setcartcount: function () {},
          setPriceMax: function () {},
          setPriceMin: function () {},
        },
        A = r.a.createContext(D),
        O =
          (A.Consumer,
          Object(I.h)(function (e) {
            var t = r.a.useState(D.ListingPageCtx.silverFilters),
              a = Object(n.a)(t, 2),
              o = a[0],
              c = a[1],
              u = r.a.useState(D.ListingPageCtx.sort),
              m = Object(n.a)(u, 2),
              d = m[0],
              C = m[1],
              f = r.a.useState(0),
              b = Object(n.a)(f, 2),
              T = b[0],
              O = b[1],
              v = r.a.useState(24),
              k = Object(n.a)(v, 2),
              E = k[0],
              Y = k[1],
              P = r.a.useState([]),
              U = Object(n.a)(P, 2),
              x = U[0],
              B = U[1],
              G = r.a.useState([]),
              R = Object(n.a)(G, 2),
              J = R[0],
              Q = R[1],
              W = r.a.useState([]),
              Z = Object(n.a)(W, 2),
              _ = Z[0],
              V = Z[1],
              H = r.a.useState({
                filterLogic: function () {
                  return [];
                },
              }),
              F = Object(n.a)(H, 2),
              X = F[0].filterLogic,
              q = F[1],
              K = r.a.useState(!0),
              $ = Object(n.a)(K, 2),
              ee = ($[0], $[1], r.a.useState(!1)),
              te = Object(n.a)(ee, 2),
              ae = (te[0], te[1], r.a.useState([])),
              se = Object(n.a)(ae, 2),
              ne = (se[0], se[1]),
              ie = r.a.useState([]),
              re = Object(n.a)(ie, 2),
              oe = (re[0], re[1]),
              ce = r.a.useState(0),
              le = Object(n.a)(ce, 2),
              ue = le[0],
              ge = le[1],
              me = r.a.useState(0),
              de = Object(n.a)(me, 2),
              Me = de[0],
              pe = de[1],
              je = r.a.useState(!1),
              ye = Object(n.a)(je, 2),
              we = ye[0],
              Ne = ye[1];
            Object(i.useEffect)(
              function () {
                q({
                  filterLogic: function (e, t) {
                    return t;
                  },
                });
              },
              [o]
            ),
              Object(i.useEffect)(
                function () {
                  q({
                    filterLogic: function (e, t) {
                      return [].concat(Object(y.a)(e), Object(y.a)(t));
                    },
                  });
                },
                [T]
              );
            var he = r.a.useContext(g.a).NetworkCtx.graphqlUrl,
              Ie = r.a.useContext(l),
              ze =
                (Ie.Globalctx,
                Ie.setGlobalCtx,
                Object(S.a)({ uri: he }),
                Object(N.b)("/filterlist", {}, !1, {})),
              Le = ze.loading,
              Se = ze.error,
              Ce = ze.data,
              fe = ze.makeFetch;
            Object(i.useEffect)(function () {
              !(function () {
                var e = Object(j.a)(
                  M.a.mark(function e() {
                    var t, a, n, i;
                    return M.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (i = function (e) {
                                return e.json();
                              }),
                              (n = function (e) {
                                return e.status >= 200 && e.status < 300
                                  ? Promise.resolve(e)
                                  : Promise.reject(new Error(e.statusText));
                              }),
                              Object(I.f)(window.location.pathname, {
                                path: ":listingpage",
                                search: window.location.search,
                              }),
                              (t = window.location.pathname.split("/")),
                              (a = {
                                seofilter: {
                                  seoUrl: {
                                    in: (function () {
                                      if (t[1].indexOf("-"))
                                        return t[1].split("-");
                                    })(),
                                  },
                                },
                              }),
                              (e.next = 8),
                              fetch(he, {
                                method: "post",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                  query: h.a,
                                  variables: Object(s.a)({}, a),
                                }),
                              })
                                .then(n)
                                .then(i)
                                .then(
                                  (function () {
                                    var e = Object(j.a)(
                                      M.a.mark(function e(t) {
                                        var a;
                                        return M.a.wrap(function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                (a = {}),
                                                  0 !==
                                                    Object.entries(t).length &&
                                                    t.constructor === Object &&
                                                    t.data
                                                      .allSeoUrlPriorities &&
                                                    t.data.allSeoUrlPriorities.nodes.map(
                                                      function (e) {
                                                        var t =
                                                            e.attributeName.replace(
                                                              /\s/g,
                                                              ""
                                                            ),
                                                          s = e.attributeValue;
                                                        o[t] = Object(p.a)(
                                                          {},
                                                          s,
                                                          !0
                                                        );
                                                        var n = {};
                                                        return (
                                                          (n[e.attributeValue] =
                                                            !0),
                                                          (a[
                                                            e.attributeName.replace(
                                                              /\s/g,
                                                              ""
                                                            )
                                                          ] = n),
                                                          a
                                                        );
                                                      }
                                                    ),
                                                  Object.entries(a).map(
                                                    function (e) {
                                                      c(
                                                        Object(s.a)(
                                                          Object(s.a)({}, o),
                                                          {},
                                                          { a: a }
                                                        )
                                                      );
                                                    }
                                                  ),
                                                  Je(o);
                                              case 4:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                      })
                                    );
                                    return function (t) {
                                      return e.apply(this, arguments);
                                    };
                                  })()
                                )
                                .catch(function (e) {})
                            );
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            }, []);
            var be = [],
              Te = [],
              De = function (e) {
                var t = [];
                if (window.location.search)
                  t = decodeURI(window.location.search)
                    .replace("?", "")
                    .split("&")
                    .map(function (e) {
                      var t = e.split("=");
                      return Object(p.a)({}, t[0], t[1]);
                    });
                else if (void 0 !== e && "jewellery" !== e) {
                  var a = window.location.pathname,
                    s = a && a.replace("/", "");
                  return a && s.split("-");
                }
                return oe(t), t;
              },
              Ae = Object(N.b)("/fetchproducts", {}, !1, {}),
              Oe = Ae.loading,
              ve = Ae.error,
              ke = Ae.data,
              Ee = Ae.makeFetch,
              Ye = Object(w.a)(h.a, function () {}, {}),
              Pe = Ye.loading,
              Ue = Ye.error,
              xe = Ye.data,
              Be = Ye.makeRequest;
            Object(i.useEffect)(
              function () {
                0 === T && Ne(!!Oe);
              },
              [Oe, ve, ke]
            );
            Object(i.useEffect)(
              function () {
                V(Ce);
              },
              [Ce, Se, Le]
            ),
              Object(i.useEffect)(
                function () {
                  ne(xe);
                },
                [xe, Pe, Ue]
              ),
              Object(i.useEffect)(
                function () {
                  if (!Oe) {
                    var e = Object(z.a)(ke, L.b),
                      t = X(x, e);
                    B(0 === T ? e : t);
                  }
                },
                [ke, ve, Oe]
              ),
              Object(i.useEffect)(function () {}, [ke, ve, Oe]);
            var Ge = (function () {
              var e = Object(j.a)(
                M.a.mark(function e() {
                  var t, a, s, n, i, r;
                  return M.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !o ||
                            o.constructor !== Object ||
                            0 === Object.entries(o).length ||
                            o.constructor !== Object
                          ) {
                            e.next = 13;
                            break;
                          }
                          for (
                            t = {},
                              o.constructor !== Object && Object.assign(o, {}),
                              Object.keys(o).map(function (e) {
                                var t = o[e],
                                  a = t && Object.keys(t);
                                if (a && a.length > 0 && t[a[0]]) {
                                  "".concat(e, "=").concat(a[0]);
                                  var s = {};
                                  (s["".concat(e)] = "".concat(a[0])),
                                    Te.push(s);
                                }
                              }),
                              s = Te.map(function (e) {
                                return Object.values(e);
                              }),
                              n = Te.map(function (e) {
                                return Object.keys(e);
                              }),
                              a = n.length;
                            a--;

                          )
                            (i = n[a]),
                              (r = i[0].toLowerCase()),
                              (t[r] = s[a][0]);
                          if (
                            ((t.sortBy = d.values),
                            (t.offset = T),
                            0 ===
                              Object.keys(t).filter(function (e) {
                                if ("category" === e) return e;
                              }).length)
                          ) {
                            e.next = 13;
                            break;
                          }
                          return (e.next = 13), Ee(t);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            Object(i.useEffect)(
              function () {
                o &&
                  0 !== Object.entries(o).length &&
                  o.constructor === Object &&
                  Object.values(o).filter(function (e) {
                    if (
                      Object.entries(e).length > 0 &&
                      e.constructor === Object
                    )
                      return e;
                  }).length > 0 &&
                  0 ===
                    Object.keys(o).filter(function (e) {
                      if ("a" === e) return e;
                    }).length &&
                  Ge();
              },
              [o]
            ),
              Object(i.useEffect)(
                function () {
                  ue && Ge();
                },
                [ue]
              ),
              Object(i.useEffect)(
                function () {
                  Me && Ge();
                },
                [Me]
              ),
              Object(i.useEffect)(
                function () {
                  d && Ge();
                },
                [d]
              ),
              Object(i.useEffect)(
                function () {
                  T && 0 !== T && Ge();
                },
                [T]
              );
            var Re = {},
              Je = (function () {
                var e = Object(j.a)(
                  M.a.mark(function e(t) {
                    var a, s, n, i, r;
                    return M.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            O(0), c(t), De();
                            try {
                              Object.keys(t).map(function (e) {
                                var a = t[e],
                                  s = Object.keys(a);
                                if (s.length > 0 && a[s[0]]) {
                                  "".concat(e, "=").concat(s[0]);
                                  var n = {};
                                  (n["".concat(e)] = "".concat(s[0])),
                                    Te.push(n);
                                }
                              }),
                                encodeURI(be.join("&"));
                            } catch (ve) {}
                            for (
                              s = Te.map(function (e) {
                                return Object.values(e);
                              }),
                                n = Te.map(function (e) {
                                  return Object.keys(e);
                                }),
                                a = n.length;
                              a--;

                            )
                              (i = n[a]),
                                (r = i[0].toLowerCase()),
                                (Re[r] = s[a][0]);
                            return (e.next = 10), fe(Re);
                          case 10:
                            try {
                              "jewellery" === Ce.seo_url && V(Ce);
                            } catch (ve) {}
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })();
            Object(i.useEffect)(
              function () {
                0 !== Object.entries(Ce).length &&
                  Ce.constructor === Object &&
                  ("jewellery" !== window.location.pathname &&
                    e.history.push({
                      pathname: "".concat(
                        _.seo_url ? "/".concat(_.seo_url) : ""
                      ),
                    }),
                  C(""),
                  De(_.seo_url),
                  (function () {
                    var e =
                        _.seo_url && _.seo_url.length > 0
                          ? _.seo_url
                          : window.location.pathname.split("/")[1],
                      t = { seofilter: { seoUrl: { in: De(e) } } };
                    Be(t);
                  })());
              },
              [_, T]
            ),
              Object(i.useEffect)(
                function () {
                  ((Object.entries(d).length > 0 && d.constructor === Object) ||
                    (null !== ue && null !== Me)) &&
                    (e.history.push({
                      pathname: "".concat(
                        _.seo_url ? "/".concat(_.seo_url) : ""
                      ),
                      search:
                        Object.entries(d).length > 0 &&
                        d.constructor === Object &&
                        null !== ue &&
                        null !== Me
                          ? d &&
                            "sort="
                              .concat(d.values, "&startprice=")
                              .concat(ue, "&endprice=")
                              .concat(Me)
                          : null !== ue && null !== Me && 0 !== ue && 0 !== Me
                          ? "startprice=".concat(ue, "&endprice=").concat(Me)
                          : Object.entries(d).length > 0 &&
                            d.constructor === Object
                          ? d && "sort=".concat(d.values)
                          : void 0,
                    }),
                    Ge());
                },
                [d, ue, Me]
              ),
              Object(i.useEffect)(
                function () {
                  De(_.seo_url).length > 0 && oe(De(_.seo_url));
                },
                [Ce, o, _, xe]
              ),
              Object(i.useEffect)(function () {
                "jewellery" !== window.location.pathname
                  ? Object(I.f)(window.location.pathname, {
                      path: ":listingpage",
                    })
                  : Object(I.f)("/".concat(_.seo_url), {
                      path: ":listingpage",
                    });
              });
            var Qe = {
              cartcount: J,
              silverFilters: o,
              sort: d,
              loading: Oe,
              error: ve,
              data: ke,
              setSilverFilters: Je,
              offset: T,
              setOffset: O,
              dataArr: x,
              first: E,
              setFirst: Y,
              mappedFilters: _,
              loadingfilters: we,
              pricemax: Me,
              pricemin: ue,
            };
            return r.a.createElement(
              A.Provider,
              {
                value: {
                  setcartcount: Q,
                  ListingPageCtx: Qe,
                  setOffset: O,
                  setFirst: Y,
                  setSort: C,
                  setloadingfilters: Ne,
                  setPriceMax: pe,
                  setPriceMin: ge,
                },
              },
              e.children
            );
          }));
      a.d(t, "e", function () {
        return l;
      }),
        a.d(t, "f", function () {
          return u;
        }),
        a.d(t, "i", function () {
          return g.b;
        }),
        a.d(t, "j", function () {
          return m.a;
        }),
        a.d(t, "k", function () {
          return m.b;
        }),
        a.d(t, "c", function () {
          return f;
        }),
        a.d(t, "d", function () {
          return b;
        }),
        a.d(t, "a", function () {
          return T.a;
        }),
        a.d(t, "b", function () {
          return T.b;
        }),
        a.d(t, "g", function () {
          return A;
        }),
        a.d(t, "h", function () {
          return O;
        });
    },
    function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      });
      a(2), a(19);
      var s =
        "query CheckForSeo($seofilter: SeoUrlPriorityFilter ) {\n  allSeoUrlPriorities( filter: $seofilter) {\n    nodes {\n      attributeName\n      attributeValue\n      \n    }\n  }\n}\n";
    },
    ,
    ,
    function (e, t, a) {
      e.exports = a.p + "static/media/img1ProductModal.jpg";
    },
    function (e, t, a) {
      e.exports = a.p + "static/media/img3ProductModal.jpg";
    },
    ,
    function (e, t, a) {
      "use strict";
      a.d(t, "e", function () {
        return s;
      }),
        a.d(t, "c", function () {
          return n;
        }),
        a.d(t, "b", function () {
          return i;
        }),
        a.d(t, "f", function () {
          return r;
        }),
        a.d(t, "d", function () {
          return o;
        }),
        a.d(t, "a", function () {
          return c;
        }),
        a.d(t, "g", function () {
          return l;
        }),
        a.d(t, "i", function () {
          return u;
        }),
        a.d(t, "h", function () {
          return g;
        });
      a(2), a(19);
      var s =
          "query MyQuery(\n  $conditionfilter: TransSkuListCondition\n  $conditionImage: ProductImageCondition\n  $productnamefilter: TransSkuListFilter\n  $number: Int\n) {\n  allTransSkuLists(\n    condition: $conditionfilter\n    filter: $productnamefilter\n    first: $number\n  ) {\n    nodes {\n      skuSize\n      markupPrice\n      sellingPrice\n      purity\n      discount\n      skuWeight\n      metalColor\n      discountPrice\n      generatedSku\n      skuId\n      isReadyToShip\n      vendorDeliveryTime\n      discountPriceTax\n      markupPriceTax\n      skuUrl\n     \n      \n      \n      transSkuDescriptionsBySkuId {\n        nodes {\n          skuDescription\n          ringsizeImage\n          certificate\n        }\n      }\n      diamondType\n      productListByProductId {\n        productName\n        productId\n        defaultSize\n        prodDescription\n        width\n        height\n        sizeVarient\n        colourVarient\n        defaultWeight\n        productType\n        isactive\n        productDiamondsByProductSku {\n          nodes {\n            diamondClarity\n            diamondColour\n            diamondType\n            stoneWeight\n            diamondShape\n            diamondSettings\n            stoneCount\n            description\n            itemName\n            stoneAmount\n            subItemName\n            stoneCont\n            stoneRate\n          }\n        }\n        productGemstonesByProductSku {\n          nodes {\n            gemstoneType\n            gemstoneSize\n            gemstoneShape\n            gemstoneSetting\n            productSku\n            stoneCount\n            stoneWeight\n            description\n            itemName\n            stoneAmount\n            subItemName\n            stoneAmount\n            stoneRate\n          }\n        }\n        productImagesByProductId(\n          condition: $conditionImage\n          orderBy: IMAGE_POSITION_ASC\n        ) {\n          nodes {\n            ishover\n            imageUrl\n            imagePosition\n          }\n        }\n      }\n      pricingSkuMaterialsByProductSku {\n        nodes {\n          materialName\n          component\n          discountPrice\n          sellingPrice\n          markup\n          costPrice\n          marginPercentage\n        }\n      }\n      pricingSkuMetalsByProductSku {\n        nodes {\n          materialName\n          discountPrice\n          sellingPrice\n          markup\n          costPrice\n          marginPercentage\n        }\n      }\n    }\n  }\n}\n\n",
        n =
          "query CheckForCod($pincode:String) {\n  allPincodeMasters(first: 1, condition: {pincode:$pincode}) {\n    nodes {\n      isDelivery\n      maxCartvalue\n      minCartvalue\n      isCod\n      pincode\n      state\n      country\n      district\n     }\n  }\n}\n",
        i =
          "query MyQuery($productSku: String) {\n  allCustomerReviews(condition: {productSku: $productSku}, last: 5) {\n    nodes {\n      message\n      title\n      rating\n      customerName\n    }\n  }\n}\n",
        r =
          "query MyQuery($userId: UUID) {\n  allUserProfiles(condition: {id: $userId}) {\n    nodes {\n      id\n      firstName\n      email\n    }\n  }\n}\n",
        o =
          "query MyQuery($cardId: UUID) {\n  allGiftwraps(condition: {cartId: $cardId}, orderBy: CREATED_AT_DESC) {\n    nodes {\n      giftTo\n      giftFrom\n      message\n    }\n  }\n}\n\n",
        c =
          "query MyQuery($userprofileId: String) {\n  allUserAddresses(condition: {userprofileId: $userprofileId, isActive: true}, orderBy: UPDATED_AT_ASC) {\n    nodes {\n      addressline1\n      addressline2\n      id\n      city\n      contactNumber\n      country\n      countryCode\n      defaultBilling\n      defaultShipping\n      firstname\n      lastname\n      pincode\n      state\n      isActive\n      updatedAt\n      createdAt\n      salutation\n    }\n  }\n}\n",
        l =
          "query MyQuery(\n  $filterdata: ProductListFilter\n  $filterdatatranssku: TransSkuListFilter\n  # $filterdatatranssku2: TransSkuListFilter\n  $filterdata2: ProductListFilter\n  $imgcondition: ProductImageCondition\n  $Conditiondatatranssku: TransSkuListCondition # $Conditiondatatranssku2: TransSkuListCondition\n) {\n  youMayalsolike1: allProductLists(\n    filter: $filterdata\n    orderBy: CREATED_AT_DESC\n    first: 16\n  ) {\n    nodes {\n      productImagesByProductId(condition: $imgcondition) {\n        nodes {\n          imageUrl\n        }\n      }\n      transSkuListsByProductId(\n        condition: $Conditiondatatranssku\n        filter: $filterdatatranssku\n      ) {\n        nodes {\n          discountPrice\n          generatedSku\n          skuUrl\n          sellingPrice\n          markupPrice\n          productId\n          discount\n          productListByProductId {\n            productName\n            productImagesByProductId {\n              nodes {\n                imageUrl\n                imagePosition\n                ishover\n              }\n            }\n            transSkuListsByProductId {\n              nodes {\n                skuId\n                skuUrl\n                markupPrice\n                discountPrice\n                discount\n                transSkuDescriptionsBySkuId {\n                  nodes {\n                    skuDescription\n                  }\n                }\n              }\n            }\n            productMaterialsByProductSku {\n              nodes {\n                materialName\n              }\n            }\n          }\n        }\n      }\n      productName\n      productType\n      createdAt\n    }\n    totalCount\n  }\n  youMayalsolike2: allProductLists(\n    filter: $filterdata2\n    orderBy: CREATED_AT_DESC\n    first: 8\n  ) {\n    nodes {\n      productImagesByProductId(condition: $imgcondition) {\n        nodes {\n          imageUrl\n        }\n      }\n      transSkuListsByProductId(\n        condition: $Conditiondatatranssku\n        filter: $filterdatatranssku\n      ) {\n        nodes {\n          discountPrice\n          generatedSku\n          skuUrl\n          sellingPrice\n          productId\n          discount\n          productListByProductId {\n            productName\n            productImagesByProductId {\n              nodes {\n                imageUrl\n                imagePosition\n                ishover\n              }\n            }\n            transSkuListsByProductId {\n              nodes {\n                skuId\n                skuUrl\n                markupPrice\n                discountPrice\n                discount\n                transSkuDescriptionsBySkuId {\n                  nodes {\n                    skuDescription\n                  }\n                }\n              }\n            }\n            productMaterialsByProductSku {\n              nodes {\n                materialName\n              }\n            }\n          }\n        }\n      }\n      productName\n      productType\n      createdAt\n    }\n    totalCount\n  }\n}\n\n",
        u =
          "query MyQuery {\n  allProductMaterials(\n    filter: {and: {productListByProductSku: {isactive: {equalTo: true}}}}\n    first: 13\n  ) {\n    nodes {\n      materialName\n      productSku\n      isActive\n      productListByProductSku {\n        productType\n        productName\n        productCategory\n        prodDescription\n        productImagesByProductId {\n          nodes {\n            imageUrl\n            imagePosition\n            productId\n            isActive\n            productListByProductId {\n              transSkuListsByProductId {\n                nodes {\n                  sellingPrice\n                  markupPrice\n                  discountPrice                  \n                  skuUrl\n                  transSkuDescriptionsBySkuId {\n                    nodes {\n                      skuDescription\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    totalCount\n  }\n}\n  ",
        g = function (e) {
          return ' {\n  allShoppingCartItems(condition: {productSku: "'
            .concat(e.skuId, '", shoppingCartId: "')
            .concat(
              e.cartId,
              '"}) {\n    nodes {\n      productSku\n    }\n  }\n}'
            );
        };
    },
    ,
    ,
    function (e, t, a) {
      "use strict";
      var s,
        n,
        i,
        r = null,
        o = function () {
          var e = localStorage.browserDetails
            ? JSON.parse(localStorage.getItem("browserDetails"))
            : {};
          !(function () {
            var e = window.innerWidth;
            e > 2555
              ? (r = 6)
              : e > 1440
              ? (r = 4)
              : e > 1024
              ? (r = 4)
              : e > 960
              ? (r = 3)
              : e > 760
              ? (r = 4)
              : e < 760 && (r = 2);
          })();
          n = (function () {
            var t = (e.browser_width - 0.2 * e.browser_width) / r;
            return t - 0.1 * t;
          })();
          for (
            var t = [
                60, 70, 80, 90, 100, 125, 150, 175, 200, 225, 250, 275, 300,
                325, 350, 375, 400, 425, 450, 475, 500, 525, 550, 575, 600, 625,
                650, 675, 700, 725, 750, 775, 800, 825, 850, 875, 900, 925, 950,
                975, 1e3, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900,
                2e3, 2100, 2200, 2300, 2400,
              ],
              a = 0;
            a <= t.length;
            a++
          ) {
            if (n + n === t[a] || n + n < t[a]) {
              s = t[a];
              break;
            }
            t.length - 1 === a && (s = t[a]);
          }
          return s;
        },
        c = function (e, t) {
          var a,
            s,
            n,
            r,
            c,
            l,
            u,
            g = JSON.parse(localStorage.getItem("browserDetails")),
            m = o(),
            d = "".concat(m, "X").concat(m);
          if (e && e.imageUrl.length > 0)
            (s = e.imageUrl.split("/")),
              (n = e.imageUrl.split("/")),
              (r = s[s.length - 1]),
              (l = n[n.length - 1]),
              (c = r.split(".")[0].concat("".concat(g.browser_type))),
              (u = l.split(".")[0].concat("".concat(g.browser_type))),
              (s[s.length - 1] = c),
              (n[n.length - 1] = u),
              s.splice(2, 0, d),
              (n[n.length - 1] = u),
              n.splice(2, 0, "1000X1000"),
              s.join().replace(/\,/g, "/"),
              (i = n.join().replace(/\,/g, "/"));
          else {
            (c = (r = (s = "product/productnotfound.webp".split("/"))[
              s.length - 1
            ])
              .split(".")[0]
              .concat("".concat(g.browser_type))),
              (s[s.length - 1] = c),
              s.splice(1, 0, d),
              s.join().replace(/\,/g, "/");
          }
          return {
            img:
              (null === e || void 0 === e
                ? void 0
                : null === (a = e.imageUrl) || void 0 === a
                ? void 0
                : a.length) > 0
                ? null === e || void 0 === e
                  ? void 0
                  : e.imageUrl
                : "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/StyloriSilver+nemonic.png",
          };
        },
        l = function (e) {
          return e.find(function (e) {
            return e.ishover;
          });
        };
      t.a = function (e, t) {
        var a = [];
        try {
          a = e.data.allProductLists;
        } catch (n) {
          a = [];
        }
        return a.map(function (t) {
          var a,
            r = {};
          try {
            var o, u, g, m, d, M, p, j, y, w, N, h, I, z, L, S;
            r = {
              totalCount:
                null !== (o = e.data.totalCount) && void 0 !== o ? o : " ",
              price:
                null !== (u = t.trans_sku_lists[0].markupPrice) && void 0 !== u
                  ? u
                  : " ",
              offerPrice:
                null !== (g = t.trans_sku_lists[0].discountPrice) &&
                void 0 !== g
                  ? g
                  : " ",
              title: t.productName,
              save:
                null !== (m = t.trans_sku_lists[0].discount) && void 0 !== m
                  ? m
                  : " ",
              image: {
                placeImage:
                  null !==
                    (d = c(
                      ((a = t.productImagesByProductId),
                      a.find(function (e) {
                        return !e.ishover;
                      }))
                    )) && void 0 !== d
                    ? d
                    : {
                        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/StyloriSilver+nemonic.png",
                      },
                hoverImage:
                  null !== (M = c(l(t.productImagesByProductId))) &&
                  void 0 !== M
                    ? M
                    : {
                        img: "https://styloriimages.s3.ap-south-1.amazonaws.com/Banners/Stylori+Silver/StyloriSilver+nemonic.png",
                      },
              },
              productId: null !== (p = t.productId) && void 0 !== p ? p : " ",
              diamondType:
                null !== (j = t.trans_sku_lists[0].diamondType) && void 0 !== j
                  ? j
                  : " ",
              purity:
                null !== (y = t.trans_sku_lists[0].purity) && void 0 !== y
                  ? y
                  : " ",
              skuSize:
                null !== (w = t.trans_sku_lists[0].skuSize) && void 0 !== w
                  ? w
                  : " ",
              productType:
                null !== (N = t.productType) && void 0 !== N ? N : " ",
              skuId:
                null !== (h = t.trans_sku_lists[0].generatedSku) && void 0 !== h
                  ? h
                  : " ",
              oneDayShipping:
                null !== (I = t.trans_sku_lists[0].isReadyToShip) &&
                void 0 !== I
                  ? I
                  : " ",
              imageResolution: { img_res: s, url_1000x1000: i },
              skuUrl:
                null !== (z = t.trans_sku_lists[0].skuUrl) && void 0 !== z
                  ? z
                  : " ",
              skuID:
                null !== (L = t.trans_sku_lists[0].skuID) && void 0 !== L
                  ? L
                  : " ",
              discount:
                null !== (S = t.trans_sku_lists[0].discount) && void 0 !== S
                  ? S
                  : " ",
            };
          } catch (n) {}
          return r;
        });
      };
    },
    ,
    ,
    ,
    function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return s;
      });
      var s = {
        stylori: "/stylori",
        PricingPage: "/pricingPage",
        Cart: "/cart",
        Checkout: "/Checkout",
        Register: "/register",
        UserLogin: "/login",
        UserRegister: "/registers",
        HomePageStylori: "/",
        Account: "/account".concat(
          "-" + window.location.pathname.split("-")[1]
        ),
        Silver: "/stylorisilver",
        Faqs: "/faqs",
        Stories: "/stories",
        Collection: "/collections",
        ProductCare: "/productcare",
        Shipping: "/deliveryreturns",
        PrivacyPolicy: "/privacy",
        TermsConditions: "/termsconditions",
        AboutUs: "/aboutus",
        ForgotPassword: "/forgotpassword",
        ResetPassword: "/resetpassword",
        ChangePassword: "/changepassword",
        paymentsuccess: "/paymentsuccess",
        paymentfail: "/paymentfail",
        paymenthidden: "/paymenthidden",
        Education: "/education",
        ContactUs: "/contactus",
        Careers: "/careersPage",
        HomePage: "/homes",
        SavingsPage: "/savingscheme",
        ExperiencePage: "/experiences",
        AdvertisingPage: "/advertising",
        TempleWorkPage: "/temple-work",
        NewsRoomPage: "/newsroom",
        AboutUsPage: "/aboutus",
        Return: "/return",
        Delivery: "/delivery",
        ContactPage: "/contactus",
        SiteMap: "/sitemap",
        StoreLocator: "/store",
        StoreDetail: "/loc/:id",
        CareersPage: "/careers",
        DigitalMarketing: "/careersDetail",
        Diamonds: "/solitaires-search",
        CollectionHomePage: "/collectionhome",
        rudramadeviBlog: "/rudramadeviBlog",
        Blog: "/blog",
        Solitaires: "/solitaires",
        CollectionPage: "/collectionPage",
        CollectionFullPage: "/CollectionFullPage",
        AkshyaTritiya: "/akshyaTritiya",
      };
      t.a = s;
    },
    function (e, t, a) {
      e.exports = a.p + "static/media/img2ProductModal.jpg";
    },
    function (e, t, a) {
      e.exports = a.p + "static/media/img4ProductModal.jpg";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return p;
      }),
        a.d(t, "b", function () {
          return j;
        });
      var s = a(1),
        n = a.n(s),
        i = a(4),
        r = a(2),
        o = a(20),
        c = a(3),
        l = a(10),
        u = a(31),
        g = a(0),
        m = a.n(g),
        d = a(6),
        M = {
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
            loading: !1,
            error: !1,
            data: [],
            likedatas: [],
            ratingcountsclear: [],
            viewedddatas: [],
            price: 0,
            rating: [],
            ratingcounts: [],
            registerurl: "",
          },
          setFilters: function () {},
          setlikedata: function () {},
          setrating: function () {},
          setregisterurl: function () {},
          setratingcounts: function () {},
          setratingcountsclear: function () {},
        },
        p = m.a.createContext(M),
        j =
          (p.Consumer,
          Object(d.h)(function (e) {
            var t,
              a = m.a.useState(M.ProductDetailCtx.filters),
              s = Object(c.a)(a, 2),
              d = s[0],
              j = s[1],
              y = m.a.useState([]),
              w = Object(c.a)(y, 2),
              N = w[0],
              h = w[1],
              I = m.a.useState(),
              z = Object(c.a)(I, 2),
              L = z[0],
              S = z[1],
              C = m.a.useState([]),
              f = Object(c.a)(C, 2),
              b = f[0],
              T = f[1],
              D = m.a.useState([]),
              A = Object(c.a)(D, 2),
              O = A[0],
              v = A[1],
              k = m.a.useState(""),
              E = Object(c.a)(k, 2),
              Y = E[0],
              P = E[1],
              U = m.a.useState([]),
              x = Object(c.a)(U, 2),
              B = x[0],
              G = x[1],
              R = m.a.useState(0),
              J = Object(c.a)(R, 2),
              Q = J[0],
              W = J[1],
              Z = function () {
                j(d);
              };
            Object(g.useEffect)(
              function () {
                Z();
              },
              [d]
            );
            var _ = Object(l.a)(u.e, function () {}, {}),
              V = _.loading,
              H = _.error,
              F = _.data,
              X = _.makeRequest,
              q = Object(l.a)(u.g, function () {}, {}, !1),
              K = q.loading,
              $ = q.error,
              ee = q.data,
              te = q.makeRequest,
              ae = Object(l.a)(u.i, function () {}, {}, !1),
              se = ae.loading,
              ne = ae.error,
              ie = ae.data,
              re = ae.makeRequest,
              oe = localStorage.getItem("gut_lg")
                ? JSON.parse(localStorage.getItem("gut_lg"))
                : "",
              ce = sessionStorage.getItem("user_id"),
              le = !0 === JSON.parse(localStorage.getItem("gut_lg"));
            m.a.useEffect(function () {
              !0 === le &&
                !0 === oe &&
                (ce || (localStorage.clear(), sessionStorage.clear()));
            }, []),
              Object(g.useEffect)(
                function () {
                  h(ee);
                },
                [ee, K, $, d, Q, F]
              ),
              Object(g.useEffect)(
                function () {
                  S(ie);
                },
                [ie, Q, F]
              ),
              Object(g.useEffect)(function () {
                var e = localStorage.getItem("quantity")
                  ? JSON.parse(localStorage.getItem("quantity"))
                  : null;
                if ((e && ((d.quantity = e), j(d)), "" === d.productId))
                  if (window.location.search.length > 0) {
                    var a = window.location.search.split("=")[1];
                    (d.skuId = a),
                      j(d),
                      (t = { conditionfilter: { skuId: d.skuId } });
                  } else {
                    var s = window.location.href.split("/"),
                      n = s[s.length - 1].replace(/-/g, " ");
                    t = {
                      productnamefilter: {
                        productListByProductId: { productName: { equalTo: n } },
                      },
                      number: 1,
                    };
                  }
                window.location.search.length > 0 &&
                  P({
                    registerurl:
                      window.location.pathname + window.location.search,
                  });
              }, []),
              Object(g.useEffect)(
                function () {
                  0 !== Object.entries(F).length &&
                    F.constructor === Object &&
                    F.data.allTransSkuLists &&
                    F.data.allTransSkuLists.nodes.length > 0 &&
                    ge();
                },
                [d]
              ),
              Object(g.useEffect)(
                function () {
                  if (d.skuId) {
                    var e = sessionStorage.getItem("skuId"),
                      t = [];
                    if (e && e.length > 0) {
                      (t = e.split(",")).push(d.skuId);
                      var a = Object(o.a)(new Set(t));
                      a.filter(function (e) {
                        if (window.location.search.split("=")[1] !== e)
                          return e;
                      }),
                        sessionStorage.setItem("skuId", a);
                    } else sessionStorage.setItem("skuId", d.skuId);
                    var s = {
                      imgcondition: { imagePosition: 1, isdefault: !0 },
                    };
                    e && e.indexOf(",") > -1
                      ? (s.filtersku = {
                          skuId: {
                            in: sessionStorage.getItem("skuId").split(","),
                            notEqualTo: d.skuId,
                          },
                        })
                      : (s.filtersku = {
                          skuId: {
                            in: [sessionStorage.getItem("skuId")],
                            notEqualTo: d.skuId,
                          },
                        });
                    var n = {};
                    if (
                      (window.location.pathname.split("/"),
                      (n.imgcondition = { imagePosition: 1, isdefault: !0 }),
                      F &&
                        Object.entries(F).length > 0 &&
                        F.constructor === Object &&
                        F.data &&
                        F.data.allTransSkuLists &&
                        F.data.allTransSkuLists.nodes &&
                        F.data.allTransSkuLists.nodes[0])
                    )
                      if (d.productType && d.productType.length > 0)
                        n.filterdata = {
                          productType: { equalTo: d.productType },
                        };
                      else {
                        var i =
                          F.data.allTransSkuLists.nodes[0]
                            .productListByProductId.productType;
                        n.filterdata = { productType: { equalTo: i } };
                      }
                    if (
                      F &&
                      Object.entries(F).length > 0 &&
                      F.constructor === Object &&
                      F.data &&
                      F.data.allTransSkuLists &&
                      F.data.allTransSkuLists.nodes &&
                      F.data.allTransSkuLists.nodes[0]
                    ) {
                      var c = Q - 5e3 > 0 ? Q - 5e3 : 0;
                      (n.filterdata.transSkuListsByProductId = {
                        every: {
                          discountPrice: {
                            lessThanOrEqualTo: Q + 5e3,
                            greaterThanOrEqualTo: c,
                          },
                        },
                      }),
                        (n.filterdata.isactive = { equalTo: !0 }),
                        (n.Conditiondatatranssku = { isdefault: !0 });
                    }
                    if (
                      F &&
                      Object.entries(F).length > 0 &&
                      F.constructor === Object &&
                      F.data &&
                      F.data.allTransSkuLists &&
                      F.data.allTransSkuLists.nodes &&
                      F.data.allTransSkuLists.nodes[0]
                    )
                      if (d.productType && d.productType.length > 0)
                        n.filterdata2 = {
                          productType: { equalTo: d.productType },
                        };
                      else {
                        var l =
                          F.data.allTransSkuLists.nodes[0]
                            .productListByProductId.productType;
                        n.filterdata2 = { productType: { equalTo: l } };
                      }
                    if (
                      F &&
                      Object.entries(F).length > 0 &&
                      F.constructor === Object &&
                      F.data &&
                      F.data.allTransSkuLists &&
                      F.data.allTransSkuLists.nodes &&
                      F.data.allTransSkuLists.nodes[0]
                    ) {
                      (n.filterdata2.isactive = { equalTo: !0 }),
                        (n.Conditiondatatranssku2 = { isdefault: !0 });
                      var u = window.location.search.split("=")[1];
                      n.filterdatatranssku2 = { skuId: { notEqualTo: u } };
                    }
                    var g = Object(r.a)({}, n);
                    F &&
                      Object.entries(F).length > 0 &&
                      F.constructor === Object &&
                      F.data &&
                      F.data.allTransSkuLists &&
                      F.data.allTransSkuLists.nodes &&
                      F.data.allTransSkuLists.nodes[0] &&
                      te(g),
                      h(ee),
                      F &&
                        Object.entries(F).length > 0 &&
                        F.constructor === Object &&
                        F.data &&
                        F.data.allTransSkuLists &&
                        F.data.allTransSkuLists.nodes &&
                        F.data.allTransSkuLists.nodes[0] &&
                        re(s);
                  }
                },
                [Q, d, F]
              ),
              Object(g.useEffect)(
                function () {
                  Object.entries(F).length > 0 &&
                    F.data &&
                    F.data.allTransSkuLists &&
                    F.data.allTransSkuLists.nodes &&
                    F.data.allTransSkuLists.nodes[0] &&
                    W(F.data.allTransSkuLists.nodes[0].markupPrice);
                },
                [V, H, F, Q]
              );
            var ue = (function () {
                var e = Object(i.a)(
                  n.a.mark(function e() {
                    return n.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              0 === Object.entries(t).length ||
                              t.constructor !== Object
                            ) {
                              e.next = 5;
                              break;
                            }
                            return (e.next = 3), X(t);
                          case 3:
                            e.next = 6;
                            break;
                          case 5:
                            return e.abrupt("return", {});
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              ge = function () {
                window.location.search.length > 0 &&
                  (window.location.search.split("=")[1].split("-"),
                  (d.productId =
                    F.data.allTransSkuLists.nodes[0].productListByProductId.productId));
                var e = d.defaultVariants,
                  a =
                    d &&
                    d.defaultVariants &&
                    d.defaultVariants.metalColor &&
                    d.defaultVariants.metalColor.length &&
                    d.defaultVariants.metalColor.length > 0
                      ? { productColor: d.defaultVariants.metalColor }
                      : null,
                  s = {
                    conditionfilter: Object(r.a)({ productId: d.productId }, e),
                  },
                  n = { conditionImage: a };
                t = Object(r.a)(Object(r.a)({}, s), n);
              };
            Object(g.useEffect)(
              function () {
                0 !== Object.entries(F).length &&
                  F.constructor === Object &&
                  F.data &&
                  F.data.allTransSkuLists &&
                  F.data.allTransSkuLists.nodes.length > 0 &&
                  ((d.defaultVariants.diamondType =
                    F.data.allTransSkuLists.nodes[0].diamondType),
                  (d.defaultVariants.metalColor =
                    F.data.allTransSkuLists.nodes[0].metalColor),
                  (d.defaultVariants.purity =
                    F.data.allTransSkuLists.nodes[0].purity),
                  (d.defaultVariants.skuSize =
                    F.data.allTransSkuLists.nodes[0].skuSize),
                  (d.skuId = F.data.allTransSkuLists.nodes[0].skuId),
                  0 === window.location.search.length &&
                    (d.productId =
                      F.data.allTransSkuLists.nodes[0].productListByProductId.productId),
                  j(d));
              },
              [V, H, F]
            ),
              Object(g.useEffect)(
                function () {
                  if (window.location.search.length > 0) {
                    var t = window.location.search.split("=")[1];
                    d.skuId !== t &&
                      e.history.push(
                        "".concat(
                          e.location.pathname,
                          "?",
                          "skuId=".concat(d.skuId)
                        )
                      );
                  }
                },
                [F, V, H]
              ),
              Object(g.useEffect)(
                function () {
                  j(d), Z(), ue();
                },
                [d]
              ),
              Object(g.useEffect)(
                function () {
                  if (window.location.search.length > 0) {
                    var t = window.location.search.split("=")[1];
                    d.skuId !== t &&
                      e.history.push(
                        "".concat(
                          e.location.pathname,
                          "?",
                          "skuId=".concat(d.skuId)
                        )
                      );
                  }
                },
                [F, V, H]
              ),
              Object(g.useEffect)(function () {}, [ee, $, K, V, H, F, Q, d]);
            var me = {
              ratingcountsclear: O,
              ratingcounts: B,
              filters: d,
              loading: V,
              error: H,
              data: F,
              likedata: ee,
              likeloading: K,
              likeerror: $,
              likedatas: N,
              vieweddata: ie,
              viewederror: ne,
              viewedloading: se,
              viewedddatas: L,
              rating: b,
              registerurl: Y,
            };
            return m.a.createElement(
              p.Provider,
              {
                value: {
                  setratingcountsclear: v,
                  setratingcounts: G,
                  ProductDetailCtx: me,
                  setFilters: j,
                  setlikedata: h,
                  setvieweddata: S,
                  setrating: T,
                  setregisterurl: P,
                },
              },
              e.children
            );
          }));
    },
    ,
    ,
    ,
    function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return h;
      }),
        a.d(t, "b", function () {
          return I;
        });
      var s = a(2),
        n = a(1),
        i = a.n(n),
        r = a(4),
        o = a(3),
        c = a(8),
        l = a(10),
        u = a(18),
        g = a(23),
        m = a(0),
        d = a.n(m),
        M = a(6),
        p = {},
        j = {},
        y = {},
        w = {},
        N = {
          CartCtx: {
            cartFilters: {
              skuId: "",
              qty: "",
              price: "",
              user_id: "",
              discounted_price: "",
              tax_price: "",
              reload: "",
              jewellery: "",
              _cart_id: {},
              vouchercode: null,
            },
            loading: !1,
            error: !1,
            data: [],
            allorderdata: [],
            wishlistdata: [],
            wishlist_count: [],
            noproducts: !1,
            NewUser: {},
            loadingWishlist: !1,
          },
          setCartFilters: function (e) {},
          setallorderdata: function () {},
          setwishlist_count: function () {},
          setwishlistdata: function () {},
          setNoproducts: function () {},
          setNewUser: function () {},
          setLoading: function () {},
          setLoadingWishlist: function () {},
        },
        h = d.a.createContext(N),
        I =
          (h.Consumer,
          Object(M.h)(function (e) {
            var t = d.a.useState(N.CartCtx),
              a = Object(o.a)(t, 2),
              n = a[0],
              M = a[1],
              I = d.a.useState([]),
              z = Object(o.a)(I, 2),
              L = z[0],
              S = z[1],
              C = d.a.useState([]),
              f = Object(o.a)(C, 2),
              b = f[0],
              T = f[1],
              D = d.a.useState([]),
              A = Object(o.a)(D, 2),
              O = A[0],
              v = A[1],
              k = d.a.useState(!1),
              E = Object(o.a)(k, 2),
              Y = E[0],
              P = E[1],
              U = d.a.useState({}),
              x = Object(o.a)(U, 2),
              B = x[0],
              G = x[1],
              R = d.a.useState(!1),
              J = Object(o.a)(R, 2),
              Q = J[0],
              W = J[1];
            Object(m.useEffect)(function () {
              var e,
                t =
                  null !== (e = localStorage.getItem("user_id")) && void 0 !== e
                    ? e
                    : "",
                a = { user_id: t };
              t.length > 0 &&
                (function (e) {
                  var t = localStorage.getItem("accessToken")
                    ? localStorage.getItem("accessToken")
                    : "";
                  fetch("".concat(c.a, "/updatecart_latestprice"), {
                    method: "post",
                    headers: {
                      "Content-Type": "application/json",
                      "x-access-token": t,
                    },
                    body: JSON.stringify(e),
                  })
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      return console.log(e);
                    });
                })(a);
            }, []);
            var Z = localStorage.getItem("cartDetails")
                ? JSON.parse(localStorage.getItem("cartDetails")).products
                : [],
              _ = n.user_id ? n.user_id : "",
              V = n.price ? n.price : "",
              H = Object(u.b)("/addtocart", { user_id: _, products: Z }, !1),
              F = (H.loading, H.error, H.data),
              X = H.makeFetch,
              q = localStorage.getItem("user_id")
                ? localStorage.getItem("user_id")
                : "",
              K =
                JSON.parse(localStorage.getItem("cartDetails")) &&
                JSON.parse(localStorage.getItem("cartDetails")).products
                  .length > 0 &&
                Object.keys(
                  JSON.parse(
                    localStorage.getItem("cartDetails")
                  ).products.filter(function (e) {
                    if (Object.keys(e).length > 0) return e;
                  })
                ).length > 0
                  ? JSON.parse(
                      localStorage.getItem("cartDetails")
                    ).products.filter(function (e) {
                      if (Object.keys(e).length > 0) return e;
                    })[0].sku_id
                  : {},
              $ = n.user_id ? n.user_id : "",
              ee = Object(l.a)(g.a, function () {}, {}, !1),
              te = (ee.loading, ee.error, ee.data),
              ae = ee.makeRequest,
              se = Object(l.a)(g.f, function () {}, {}, !1),
              ne = (se.loading, se.error, se.data),
              ie = se.makeRequest,
              re = Object(l.a)(g.b, function () {}, {}, !1),
              oe = (re.loading, re.error, re.data),
              ce = re.makeRequest,
              le = Object(l.a)(g.c, function () {}, {}),
              ue = le.loading,
              ge = le.error,
              me = le.data,
              de = le.makeRequest,
              Me =
                (n.discounted_price && n.discounted_price,
                n.reload ? n.reload : ""),
              pe = n.jewellery ? n.jewellery : "",
              je = localStorage.getItem("gut_lg")
                ? JSON.parse(localStorage.getItem("gut_lg"))
                : "",
              ye = sessionStorage.getItem("user_id"),
              we = !0 === JSON.parse(localStorage.getItem("gut_lg")),
              Ne = localStorage.getItem("order_id")
                ? JSON.parse(localStorage.getItem("order_id"))
                : "yourorder";
            localStorage.getItem("gut_lg") &&
              JSON.parse(localStorage.getItem("gut_lg"));
            d.a.useEffect(function () {
              !0 === we &&
                !0 === je &&
                (ye || (localStorage.clear(), sessionStorage.clear()));
            }, []),
              d.a.useEffect(
                function () {
                  var e = {},
                    t = [],
                    a = {};
                  ue ||
                    ge ||
                    (me &&
                      me.data &&
                      me.data.allTransSkuLists &&
                      me.data.allTransSkuLists.nodes &&
                      me.data.allTransSkuLists.nodes.length > 0 &&
                      (me.data.allTransSkuLists.nodes.map(function (a) {
                        (e.sku_id = a.generatedSku),
                          (e.qty = 1),
                          (e.price = a.markupPrice),
                          t.push(e);
                      }),
                      (a.cart_id = ""),
                      (a.userId = ""),
                      (a.products = t),
                      we &&
                        !1 === we &&
                        (localStorage.removeItem("bil_isactive"),
                        localStorage.removeItem("ship_isactive"),
                        localStorage.removeItem("select_addres"),
                        localStorage.setItem(
                          "cartDetails",
                          JSON.stringify(a)
                        ))));
                },
                [ue, ge, me]
              ),
              Object(m.useEffect)(
                function () {
                  pe &&
                    "jewellery" === pe &&
                    (localStorage.removeItem("panel"),
                    localStorage.removeItem("cartDetails"),
                    localStorage.removeItem("ship_isactive"),
                    localStorage.removeItem("bil_isactive"),
                    (window.location.pathname = "/paymentsuccess/".concat(Ne))),
                    F &&
                      Object.keys(F).length > 0 &&
                      F.constructor === Object &&
                      (localStorage.setItem("cart_id", JSON.stringify(F)),
                      ze(),
                      (n._cart_id = F),
                      M({ cartFilters: n })),
                    Me && Me.length > 0 && window.location.reload();
                },
                [F]
              ),
              Object(m.useEffect)(
                function () {
                  var e = te
                    ? te &&
                      te.data &&
                      te.data.allOrders &&
                      te.data.allOrders.nodes
                    : "";
                  e &&
                    e.length > 0 &&
                    ((y.allorderdata = te.data.allOrders), S(y));
                },
                [te, L]
              ),
              Object(m.useEffect)(
                function () {
                  var e = te
                    ? oe &&
                      oe.data &&
                      oe.data.allUserWhislists &&
                      oe.data.allUserWhislists.nodes
                    : "";
                  e &&
                    (0 === e.length || e.length > 0) &&
                    ((w.wishlistdata = oe.data.allUserWhislists),
                    setTimeout(function () {
                      W(!1);
                    }, 2e3),
                    T(w));
                },
                [oe, b]
              ),
              Object(m.useEffect)(
                function () {
                  (p.userProfileId = q),
                    (j.userprofileId = q),
                    q && ce(j),
                    (p.userProfileId = localStorage.getItem("user_id")),
                    ("/account-allorders" === window.location.pathname ||
                      "/account-addresses" === window.location.pathname ||
                      "/account-shoppingcart" === window.location.pathname ||
                      "/account-wishlist" === window.location.pathname ||
                      "/account-profile" === window.location.pathname) &&
                      Object.values(p).length > 0 &&
                      ae(p);
                },
                [b]
              );
            var he,
              Ie = (function () {
                var t = Object(r.a)(
                  i.a.mark(function t() {
                    var a;
                    return i.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              (((a = {}).orderId = { id: e.match.params.id }),
                              !e.match.params.id)
                            ) {
                              t.next = 5;
                              break;
                            }
                            return (t.next = 5), ie(a);
                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })();
            Object(m.useEffect)(
              function () {
                !(function () {
                  if ($.length > 0) {
                    if (
                      (localStorage.setItem("user_id", n.user_id),
                      JSON.stringify(K).length > 0)
                    ) {
                      var e = localStorage.getItem("cartDetails")
                          ? JSON.parse(localStorage.getItem("cartDetails"))
                              .products
                          : "",
                        t = n.user_id,
                        a = { products: e, user_id: t };
                      JSON.parse(
                        localStorage.getItem("cartDetails")
                      ).products.filter(function (e) {
                        if (Object.keys(e).length > 0) return e;
                      }).length > 0 && X(a),
                        (p.userProfileId = t),
                        sessionStorage.setItem("user_id", t),
                        (p.userProfileId = localStorage.getItem("user_id")),
                        ("/account-allorders" === window.location.pathname ||
                          "/account-addresses" === window.location.pathname ||
                          "/account-shoppingcart" ===
                            window.location.pathname ||
                          "/account-wishlist" === window.location.pathname ||
                          "/account-profile" === window.location.pathname) &&
                          Object.values(p).length > 0 &&
                          ae(p);
                    }
                  } else {
                    var s = JSON.parse(localStorage.getItem("cartDetails")),
                      i = [];
                    s &&
                      Object.entries(s).length > 0 &&
                      s.constructor === Object &&
                      (i = JSON.parse(
                        localStorage.getItem("cartDetails")
                      ).products.map(function (e) {
                        return e;
                      }));
                    var r = n.skuId,
                      o = ((e = []), {});
                    ((o = { sku_id: "", qty: "", price: "" }).sku_id = r),
                      (o.qty = n.qty),
                      (o.price = n.price),
                      [].push(o);
                    var c = {
                      cart_id: "",
                      user_id: "",
                      products: i.length > 0 ? (i.push(o), i) : (e.push(o), e),
                    };
                    r && localStorage.setItem("cartDetails", JSON.stringify(c));
                  }
                })();
              },
              [_, V, n]
            ),
              (he =
                localStorage.getItem("cartDetails") &&
                JSON.parse(localStorage.getItem("cartDetails")).products
                  .length > 0
                  ? JSON.parse(localStorage.getItem("cartDetails"))
                      .products.filter(function (e) {
                        if (Object.keys(e).length > 0) return e;
                      })
                      .map(function (e) {
                        return e.sku_id;
                      })
                  : "");
            var ze = function () {
              if (localStorage.getItem("user_id")) {
                var e = function (e) {
                    return e.status >= 200 && e.status < 300
                      ? Promise.resolve(e)
                      : Promise.reject(new Error(e.statusText));
                  },
                  t = function (e) {
                    return e.json();
                  },
                  a =
                    (window.location.pathname.split("/"),
                    {
                      UserId: {
                        userprofileId: localStorage.getItem("user_id"),
                      },
                    });
                fetch("".concat(c.a, "/graphql"), {
                  method: "post",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    query: g.d,
                    variables: Object(s.a)({}, a),
                  }),
                })
                  .then(e)
                  .then(t)
                  .then(
                    (function () {
                      var a = Object(r.a)(
                        i.a.mark(function a(n) {
                          var o, l, u, m, d, M, p, j, y, w, N, h, I, z, L;
                          return i.a.wrap(function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  if (
                                    ((m = Boolean(
                                      (null ===
                                        (o = n.data.allShoppingCarts.nodes) ||
                                      void 0 === o
                                        ? void 0
                                        : o.length) >
                                        (null === (l = (0)[0]) || void 0 === l
                                          ? void 0
                                          : null ===
                                              (u =
                                                l.shoppingCartItemsByShoppingCartId) ||
                                            void 0 === u
                                          ? void 0
                                          : u.nodes)
                                    )
                                      ? n.data.allShoppingCarts.nodes[0]
                                          .shoppingCartItemsByShoppingCartId
                                          .nodes
                                      : []),
                                    (d = JSON.parse(
                                      localStorage.getItem("cartDetails")
                                    )),
                                    (M = JSON.parse(
                                      localStorage.getItem("quantity")
                                    )),
                                    (p = d && d.products ? d.products : []),
                                    d
                                      ? m.map(function (e) {
                                          if (
                                            ((d = JSON.parse(
                                              localStorage.getItem(
                                                "cartDetails"
                                              )
                                            )),
                                            (M = JSON.parse(
                                              localStorage.getItem("quantity")
                                            )),
                                            p.length > 0)
                                          )
                                            p.map(function (t, a) {
                                              if (
                                                ((d = JSON.parse(
                                                  localStorage.getItem(
                                                    "cartDetails"
                                                  )
                                                )),
                                                (M = JSON.parse(
                                                  localStorage.getItem(
                                                    "quantity"
                                                  )
                                                )))
                                              ) {
                                                if (t.sku_id === e.productSku)
                                                  (d.products[a].qty = e.qty),
                                                    (M[e.productSku] = e.qty),
                                                    localStorage.setItem(
                                                      "quantity",
                                                      JSON.stringify(
                                                        Object(s.a)({}, M)
                                                      )
                                                    ),
                                                    localStorage.setItem(
                                                      "cartDetails",
                                                      JSON.stringify(
                                                        Object(s.a)({}, d)
                                                      )
                                                    );
                                                else if (
                                                  !Boolean(M[e.productSku])
                                                ) {
                                                  var n = {},
                                                    i = {};
                                                  (n[e.productSku] = e.qty),
                                                    (M = Object(s.a)(
                                                      Object(s.a)({}, M),
                                                      n
                                                    )),
                                                    (i.sku_id = e.productSku),
                                                    (i.price = e.price),
                                                    (i.qty = e.qty),
                                                    d.products.push(
                                                      Object(s.a)({}, i)
                                                    ),
                                                    localStorage.setItem(
                                                      "quantity",
                                                      JSON.stringify(
                                                        Object(s.a)({}, M)
                                                      )
                                                    ),
                                                    localStorage.setItem(
                                                      "cartDetails",
                                                      JSON.stringify(
                                                        Object(s.a)({}, d)
                                                      )
                                                    );
                                                }
                                              } else {
                                                var r = {};
                                                (r[e.productSku] = e.qty),
                                                  localStorage.setItem(
                                                    "quantity",
                                                    JSON.stringify(
                                                      Object(s.a)({}, r)
                                                    )
                                                  );
                                              }
                                            });
                                          else {
                                            var t = {},
                                              a = {};
                                            (t[e.productSku] = e.qty),
                                              (a.sku_id = e.productSku),
                                              (a.price = e.price),
                                              (a.qty = e.qty),
                                              (M = Object(s.a)({}, t)),
                                              d.products.push(
                                                Object(s.a)({}, a)
                                              );
                                          }
                                        })
                                      : ((j = {
                                          cart_id: "",
                                          user_id: "userId",
                                          products: [],
                                        }),
                                        (y = {}),
                                        (w = {}),
                                        m.map(function (e) {
                                          (y[e.productSku] = e.qty),
                                            (w.sku_id = e.productSku),
                                            (w.price = e.price),
                                            (w.qty = e.qty),
                                            j.products.push(Object(s.a)({}, w));
                                        }),
                                        localStorage.setItem(
                                          "quantity",
                                          JSON.stringify(Object(s.a)({}, y))
                                        ),
                                        localStorage.setItem(
                                          "cartDetails",
                                          JSON.stringify(Object(s.a)({}, j))
                                        )),
                                    !(
                                      n &&
                                      n.data &&
                                      n.data.allShoppingCarts &&
                                      n.data.allShoppingCarts.nodes &&
                                      n.data.allShoppingCarts.nodes.length >
                                        0 &&
                                      "pending" !==
                                        n.data.allShoppingCarts.nodes[0].status
                                    ))
                                  ) {
                                    a.next = 14;
                                    break;
                                  }
                                  (N = {
                                    user_id: localStorage.getItem("user_id"),
                                  }),
                                    (h = JSON.parse(
                                      sessionStorage.getItem("updatedProduct")
                                    )),
                                    (I = { products: [h] }),
                                    (z = Object(s.a)(Object(s.a)({}, N), I)),
                                    fetch("".concat(c.a, "/addtocart"), {
                                      method: "post",
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify(Object(s.a)({}, z)),
                                    })
                                      .then(e)
                                      .then(t)
                                      .then(
                                        (function () {
                                          var e = Object(r.a)(
                                            i.a.mark(function e(t) {
                                              var a;
                                              return i.a.wrap(function (e) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                      if (
                                                        !(
                                                          t &&
                                                          t.data &&
                                                          t.data
                                                            .allShoppingCartItems &&
                                                          t.data
                                                            .allShoppingCartItems
                                                            .nodes &&
                                                          t.data
                                                            .allShoppingCartItems
                                                            .nodes.length > 0
                                                        )
                                                      ) {
                                                        e.next = 6;
                                                        break;
                                                      }
                                                      (a =
                                                        t.data.allShoppingCartItems.nodes
                                                          .filter(function (e) {
                                                            if (
                                                              e.transSkuListByProductSku
                                                            )
                                                              return e;
                                                          })
                                                          .map(function (e) {
                                                            return e
                                                              .transSkuListByProductSku.generatedSku;
                                                          })),
                                                        de({ productList: a }),
                                                        (e.next = 7);
                                                      break;
                                                    case 6:
                                                      return e.abrupt(
                                                        "return",
                                                        []
                                                      );
                                                    case 7:
                                                    case "end":
                                                      return e.stop();
                                                  }
                                              }, e);
                                            })
                                          );
                                          return function (t) {
                                            return e.apply(this, arguments);
                                          };
                                        })()
                                      ),
                                    (a.next = 29);
                                  break;
                                case 14:
                                  if (
                                    !(
                                      n &&
                                      n.data &&
                                      n.data.allShoppingCarts &&
                                      n.data.allShoppingCarts.nodes &&
                                      n.data.allShoppingCarts.nodes.length >
                                        0 &&
                                      n.data.allShoppingCarts.nodes[0] &&
                                      n.data.allShoppingCarts.nodes[0].id
                                    )
                                  ) {
                                    a.next = 20;
                                    break;
                                  }
                                  localStorage.setItem(
                                    "cart_id",
                                    JSON.stringify({
                                      cart_id:
                                        n.data.allShoppingCarts.nodes[0].id,
                                    })
                                  ),
                                    (L = {
                                      CartId: {
                                        shoppingCartId:
                                          n.data.allShoppingCarts.nodes[0].id,
                                      },
                                    }),
                                    fetch("".concat(c.a, "/graphql"), {
                                      method: "post",
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify({
                                        query: g.e,
                                        variables: Object(s.a)({}, L),
                                      }),
                                    })
                                      .then(e)
                                      .then(t)
                                      .then(
                                        (function () {
                                          var e = Object(r.a)(
                                            i.a.mark(function e(t) {
                                              var a;
                                              return i.a.wrap(function (e) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                      (a =
                                                        t.data.allShoppingCartItems.nodes
                                                          .filter(function (e) {
                                                            if (
                                                              e.transSkuListByProductSku
                                                            )
                                                              return e;
                                                          })
                                                          .map(function (e) {
                                                            return e
                                                              .transSkuListByProductSku.generatedSku;
                                                          })),
                                                        de({ productList: a });
                                                    case 3:
                                                    case "end":
                                                      return e.stop();
                                                  }
                                              }, e);
                                            })
                                          );
                                          return function (t) {
                                            return e.apply(this, arguments);
                                          };
                                        })()
                                      ),
                                    (a.next = 29);
                                  break;
                                case 20:
                                  if (
                                    !sessionStorage.getItem("updatedProduct")
                                  ) {
                                    a.next = 27;
                                    break;
                                  }
                                  (N = {
                                    user_id: localStorage.getItem("user_id"),
                                  }),
                                    (I = {
                                      products: [
                                        JSON.parse(
                                          sessionStorage.getItem(
                                            "updatedProduct"
                                          )
                                        ),
                                      ],
                                    }),
                                    (z = Object(s.a)(Object(s.a)({}, N), I)),
                                    fetch("".concat(c.a, "/addtocart"), {
                                      method: "post",
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                      body: JSON.stringify(Object(s.a)({}, z)),
                                    })
                                      .then(e)
                                      .then(t)
                                      .then(
                                        (function () {
                                          var e = Object(r.a)(
                                            i.a.mark(function e(t) {
                                              var a;
                                              return i.a.wrap(function (e) {
                                                for (;;)
                                                  switch ((e.prev = e.next)) {
                                                    case 0:
                                                      if (
                                                        !(
                                                          t &&
                                                          t.data &&
                                                          t.data
                                                            .allShoppingCartItems &&
                                                          t.data
                                                            .allShoppingCartItems
                                                            .nodes &&
                                                          t.data
                                                            .allShoppingCartItems
                                                            .nodes.length > 0
                                                        )
                                                      ) {
                                                        e.next = 6;
                                                        break;
                                                      }
                                                      (a =
                                                        t.data.allShoppingCartItems.nodes
                                                          .filter(function (e) {
                                                            if (
                                                              e.transSkuListByProductSku
                                                            )
                                                              return e;
                                                          })
                                                          .map(function (e) {
                                                            return e
                                                              .transSkuListByProductSku.generatedSku;
                                                          })),
                                                        de({ productList: a }),
                                                        (e.next = 7);
                                                      break;
                                                    case 6:
                                                      return e.abrupt(
                                                        "return",
                                                        n
                                                      );
                                                    case 7:
                                                    case "end":
                                                      return e.stop();
                                                  }
                                              }, e);
                                            })
                                          );
                                          return function (t) {
                                            return e.apply(this, arguments);
                                          };
                                        })()
                                      ),
                                    (a.next = 29);
                                  break;
                                case 27:
                                  return G(n), a.abrupt("return", B);
                                case 29:
                                case "end":
                                  return a.stop();
                              }
                          }, a);
                        })
                      );
                      return function (e) {
                        return a.apply(this, arguments);
                      };
                    })()
                  );
              } else de({ productList: he });
            };
            Object(m.useEffect)(function () {
              M(he),
                ze(),
                Ie(),
                "/cart" === window.location.pathname &&
                  Boolean(localStorage.getItem("user_id")) &&
                  Boolean(localStorage.getItem("cartDetails")) &&
                  (function () {
                    if (null === localStorage.getItem("cart_id")) {
                      if (JSON.stringify(K).length > 0) {
                        var e = localStorage.getItem("cartDetails")
                            ? JSON.parse(localStorage.getItem("cartDetails"))
                                .products
                            : "",
                          t = n.user_id,
                          a = { products: e, user_id: t };
                        JSON.parse(
                          localStorage.getItem("cartDetails")
                        ).products.filter(function (e) {
                          if (Object.keys(e).length > 0) return e;
                        }).length > 0 && X(a),
                          (p.userProfileId = t),
                          sessionStorage.setItem("user_id", t),
                          (p.userProfileId = localStorage.getItem("user_id")),
                          ("/account-allorders" === window.location.pathname ||
                            "/account-addresses" === window.location.pathname ||
                            "/account-shoppingcart" ===
                              window.location.pathname ||
                            "/account-wishlist" === window.location.pathname ||
                            "/account-profile" === window.location.pathname) &&
                            Object.values(p).length > 0 &&
                            ae(p);
                      }
                    } else {
                      var i = JSON.parse(localStorage.getItem("cartDetails")),
                        r = {
                          cart_id: JSON.parse(localStorage.getItem("cart_id"))
                            .cart_id,
                        },
                        o = { user_id: localStorage.getItem("user_id") };
                      i &&
                        Object.entries(i).length > 0 &&
                        i.constructor === Object &&
                        JSON.parse(
                          localStorage.getItem("cartDetails")
                        ).products.map(function (e) {
                          return e;
                        });
                      var c = i.products,
                        l = n.skuId,
                        u = ((e = []), {});
                      ((u = { sku_id: "", qty: "", price: "" }).sku_id = l),
                        (u.qty = n.qty),
                        (u.price = n.price),
                        [].push(u);
                      var g = { cart_id: "", user_id: "", products: c },
                        m = {
                          products: [
                            JSON.parse(
                              sessionStorage.getItem("updatedProduct")
                            ),
                          ],
                        },
                        d = Object(s.a)(Object(s.a)(Object(s.a)({}, o), m), r);
                      JSON.parse(
                        localStorage.getItem("cartDetails")
                      ).products.filter(function (e) {
                        if (Object.keys(e).length > 0) return e;
                      }).length > 0 && X(d),
                        localStorage.setItem("cartDetails", JSON.stringify(g));
                    }
                  })();
            }, []);
            var Le = {
              cartFilters: n,
              loading: ue,
              error: ge,
              wishlist_count: O,
              data: me,
              setCartFilters: M,
              allorderdata: L,
              wishlistdata: b,
              allordersuccesful: ne,
              noproducts: Y,
              NewUser: B,
              loadingWishlist: Q,
            };
            return d.a.createElement(
              h.Provider,
              {
                value: {
                  CartCtx: Le,
                  setwishlist_count: v,
                  setCartFilters: M,
                  setallorderdata: S,
                  setwishlistdata: T,
                  setNoproducts: P,
                  setLoadingWishlist: W,
                },
              },
              e.children
            );
          }));
    },
    ,
    function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "SolitairesData", function () {
          return g;
        }),
        a.d(t, "fadeImagessublist", function () {
          return m;
        });
      var s = a(28),
        n = a.n(s),
        i = a(39),
        r = a.n(i),
        o = a(29),
        c = a.n(o),
        l = a(40),
        u = a.n(l),
        g = {
          carouselTop: {
            setting: {
              dots: !0,
              infinite: !0,
              autoplay: !0,
              speed: 2e3,
              fade: !1,
              arrows: !1,
              arrowsImg: !0,
              dotsClass: "slickdevStatic",
              accessibility: !0,
              autoplaySpeed: 4e3,
              centerMode: !1,
              focusOnSelect: !1,
              pauseOnHover: !1,
              pauseOnDotsHover: !1,
              pauseOnFocus: !0,
              swipe: !1,
            },
            data: [
              {
                img: "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori+CSK-banner-1920-X-656-px.jpg",
                mobileImg:
                  "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori+CSK-banner-mobile-805X430-px.jpg",
                navigateUrl: "#",
                imageContent:
                  "Solitaire jewellery that will take your breath away.",
              },
              {
                img: "https://assets.stylori.com/images/Static+Pages/Home+Page/banner1.jpg",
                mobileImg:
                  "https://assets.stylori.com/images/Static+Pages/Home+Page/gemstone-mob",
                navigateUrl: "#",
                imageContent:
                  "Solitaire jewellery that will take your breath away. 1",
              },
              {
                img: "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori-Valentine-banner-web.jpg",
                mobileImg:
                  "https://assets.stylori.com/images/Static+Pages/Home+Page/Stylori-Valentine-banner-mob.jpg",
                navigateUrl: "#",
                imageContent:
                  "Solitaire jewellery that will take your breath away. 2",
              },
              {
                img: "https://assets.stylori.com/images/Static+Pages/Home+Page/banner3.jpg",
                mobileImg:
                  "https://assets.stylori.com/images/Static+Pages/Home+Page/rings-collection-mob.jpg",
                navigateUrl: "#",
                imageContent:
                  "Solitaire jewellery that will take your breath away. 3",
              },
              {
                img: "https://assets.stylori.com/images/Static+Pages/Home+Page/banner4.jpg",
                mobileImg:
                  "https://assets.stylori.com/images/Static+Pages/Home+Page/Floral-collection-Mob.jpg",
                navigateUrl: "#",
                imageContent:
                  "Solitaire jewellery that will take your breath away. 4",
              },
              {
                img: " https://assets.stylori.com/images/Static+Pages/Home+Page/banner5.jpg",
                mobileImg:
                  "https://assets.stylori.com/images/Static+Pages/Home+Page/halo-collection-mob.jpg",
                navigateUrl: "#",
                imageContent:
                  "Solitaire jewellery that will take your breath away. 5",
              },
              {
                img: "https://assets.stylori.com/images/Static+Pages/Home+Page/harvest-campaign-web.png",
                mobileImg:
                  "https://assets.stylori.com/images/Static+Pages/Home+Page/harvest-campaign-mob.png",
                navigateUrl: "#",
                imageContent:
                  "Solitaire jewellery that will take your breath away. 6",
              },
            ],
          },
          heading: "The Solitaire Collection",
          bodyContent:
            "For ages, Our country has had a rich pedigree in creating and consuming fine artistic jewellery. For thousands of years, it has charmed affluent locals, rulers, traders and foreigners alike. The yesteryear generations always had a rich fascination for authentic gold and gemstones of varying natures. The artistic craftsmen of yore, gave it various renditions, that still stand testimony to a bygone era.  ",
        },
        m = [
          {
            img: "".concat(n.a),
            title: "EVERYDAY 1",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
            price: "98.89789",
          },
          {
            img: "".concat(r.a),
            title: "FOLKLORE 2",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
            price: "98.89789",
          },
          {
            img: "".concat(c.a),
            title: "CONTEMPORARY 3",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
            price: "98.89789",
          },
          {
            img: "".concat(u.a),
            title: "TRADITIONAL 4",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
            price: "98.89789",
          },
          {
            img: "".concat(c.a),
            title: "CONTEMPORARY 3",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
            price: "98.89789",
          },
          {
            img: "".concat(n.a),
            title: "TRADITIONAL 4",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
            price: "98.89789",
          },
        ];
    },
    function (e, t, a) {
      "use strict";
      var s = a(0),
        n = a.n(s),
        i =
          (a(82),
          n.a.createElement(
            "div",
            { className: "overall-loader" },
            n.a.createElement("div", { id: "loading" })
          ));
      t.a = i;
    },
    ,
    function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "filter", function () {
          return s;
        }),
        a.d(t, "subFilter", function () {
          return n;
        }),
        a.d(t, "sortOptions", function () {
          return i;
        });
      var s = [
          "Offers",
          "Availability",
          "Product Type",
          "Style",
          "Material",
          "Theme",
          "Collection",
          "Metal Color",
          "Metal Purity",
          "Occasion",
          "No Of Stones",
          "Gender",
          "Stone Color",
          "Stone Shape",
        ],
        n = {
          Offers: ["Up to  20%", "Up to  30%", "Up to  40%", "Up to  50%"],
          Availability: [
            "1 Day Shipping",
            "10 Day Shipping",
            "15 & Above Day Shipping",
            "5 Day Shipping",
            "7 Day Shipping",
          ],
          "Product Type": [
            "Bracelets",
            "Bangles",
            "Earrings",
            "GoldCoins",
            "Nosepins",
            "Pendants",
            "Rings",
          ],
          Style: [
            "Oval Bracelets",
            "Bracelets",
            "Classic",
            "Casual",
            "Studs",
            "Drops",
            "Huggies",
            "Jhumkas",
            "Palm Cuffs",
            "Fashion",
            "Cocktail",
          ],
          Material: ["Diamond", "Gemstone", "Gold", "Slitarie"],
          Theme: ["Designer", "Essentials", "Random", "Waves", "Floral"],
          Collection: [
            "Geometric",
            "Mistletoe",
            "Gold",
            "Slitarie",
            "Diamond",
            "Gemstone",
            "Gold",
            "Loops",
          ],
          "Metal Color": ["White", "Yellow_White", "Yellow"],
          "Metal Purity": ["18K", "14K"],
          Occasion: ["Workwear", "Special Occasion", "Anniversary", "Cut Out"],
          "No Of Stones": ["Fashion", "Chic", "Cluster", "Cut Out"],
          Gender: [
            "Female",
            "Male",
            "Kids, Female",
            "Unisex, Kids, Female",
            "Unisex, Female",
            "Male, Female",
            "Male, Kids, Female",
            "Unisex",
          ],
          "Stone Color": ["Fashion", "Chic", "Cluster", "Cut Out"],
          "Stone Shap": ["Fashion", "Chic", "Cluster", "Cut Out"],
        },
        i = [
          "New to Stylori",
          "Featured",
          "Price Low to High",
          "Price High to Low",
          "Ready to Ship",
          "Best Seller",
        ];
    },
    function (e, t, a) {
      "use strict";
      a.r(t);
      a(19);
      t.default = function (e) {
        var t = [];
        try {
          t = e;
        } catch (a) {
          t = [];
        }
        return t.map(function (t) {
          var s,
            n = function (e) {
              return e || [];
            };
          try {
            s = {
              filter: [
                "Offers",
                "Price",
                "Product Type",
                "Theme",
                "Collection",
              ],
              subFilter: {
                Offers: [
                  "Up to  20%",
                  "Up to  30%",
                  "Up to  40%",
                  "Up to  50%",
                ],
                Price: [
                  "Upto 999",
                  "999 - 2000",
                  "2000 - 5000",
                  "5000 - 8000",
                  "Above 8000",
                ],
                Availability: [
                  { title: "1 Day Shipping", value: "1 Day Shipping" },
                  { title: "5 Day Shipping", value: "5 Day Shipping" },
                  { title: "7 Day Shipping", value: "7 Day Shipping" },
                  { title: "10 Day Shipping", value: "10 Day Shipping" },
                  {
                    title: "15 & Above Days Shipping",
                    value: "15 & Above Days Shipping",
                  },
                ],
                "Product Type": n(e[0].master_product_type).map(function (e) {
                  return e.product_type;
                }),
                Style: n(e[0].master_styles).map(function (e) {
                  return e.style_name;
                }),
                Material: n(e[0].master_material).map(function (e) {
                  return e.material_name;
                }),
                Theme: n(e[0].master_themes).map(function (e) {
                  return e.theme_name;
                }),
                Collection: n(e[0].master_collection).map(function (e) {
                  return e.collection_name;
                }),
                "Metal Color": n(e[0].master_colors).map(function (e) {
                  return e.product_color;
                }),
                "Metal Purity": n(e[0].master_purity).map(function (e) {
                  return e.purity;
                }),
                Occasion: n(e[0].master_occassion).map(function (e) {
                  return e.occassion_name;
                }),
                "No Of Stones": n(e[0].master_stonecount).map(function (e) {
                  return e.stonecount;
                }),
                Gender: n(e[0].master_gender).map(function (e) {
                  return e.gender_name;
                }),
                "Stone Color": n(e[0].master_stonecolor).map(function (e) {
                  return e.stonecolor;
                }),
                "Stone Shape": n(e[0].gemstone_shape).map(function (e) {
                  return e.gemstone_shape;
                }),
                "Price Range": n(e[0].price_range).map(function (e) {
                  return e;
                }),
              },
              sortOptions: [
                "New To Stylori",
                "Featured",
                "Price Low to High",
                "Price High to Low",
                "Ready To Ship",
                "Best Seller",
              ],
              seoText: (function (e) {
                return e || "";
              })(e[0].seo_text),
              dataCarousel: {
                dots: !1,
                infinite: !0,
                autoplay: !0,
                speed: 1e3,
                fade: !0,
                arrows: !1,
              },
              carouselImage: [
                "https://assets-cdn.stylori.com/120x120/images/product/SR0986/SR0986-1Y.jpg",
                "https://assets-cdn.stylori.com/120x120/images/product/SE0464/SE0464-1Y.jpg",
                "https://assets-cdn.stylori.com/images/megamenu/ear-jacket.jpg",
              ],
            };
          } catch (a) {
            console.info("error", a);
          }
          return s;
        });
      };
    },
    function (e, t, a) {
      e.exports = a.p + "static/media/NotoSerif-Regular.ttf";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (e) {
      e.exports = {
        palette: {
          common: { black: "#000", white: "#fff" },
          background: {
            paper: "#fff",
            default: "#fafafa",
            fade: "#6e6d72",
            darkFade: "#515152fc",
          },
          primary: {
            light: "rgba(226, 213, 185, 1)",
            main: "rgba(218, 185, 122, 1)",
            dark: "rgba(165, 131, 79, 1)",
            contrastText: "rgba(255, 255, 255, 1)",
          },
          secondary: {
            light: "rgba(208, 210, 211, 1)",
            main: "rgba(166, 168, 171, 1)",
            dark: "rgba(218, 185, 122, 1)",
            contrastText: "rgba(255, 255, 255, 1)",
          },
          error: {
            light: "#e57373",
            main: "#f44336",
            dark: "#d32f2f",
            contrastText: "#fff",
          },
          text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)",
          },
          overallButoon: { primary: "#F36E23", contrastText: "#fff" },
        },
      };
    },
    ,
    ,
    function (e, t, a) {
      e.exports = a.p + "static/media/topPicksOne.jpg";
    },
    function (e, t, a) {
      e.exports = a.p + "static/media/topPicksTwo.jpg";
    },
    function (e, t, a) {
      e.exports = a.p + "static/media/topPicksThree.jpg";
    },
    function (e, t) {
      e.exports =
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIVFhUXGBgYGBgWGBUXFxcYGBgYGRcXGBkYHyggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi4lHyUtLS0vLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy0tLS0tL//AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYHAQj/xAA/EAABAwIFAgQEBAUCAwkAAAABAgMRACEEBRIxQVFhBhMicTKBkaEUscHwByNC0eFS8RVTYiQ0Q3KCkpOj0v/EABoBAAMBAQEBAAAAAAAAAAAAAAACAwEEBQb/xAAqEQACAgICAgAFBAMBAAAAAAAAAQIRAyESMQRBEyJRcfAyYYGRocHxBf/aAAwDAQACEQMRAD8A4iTSpUq0w8pV7SrAPKVe15QB7Sryva0BUqVKgBUqVKgBUqVKgBUqVKgBUqVKgA3LcEXD2rbYNWGaRpKZPyrK5I9aKsVIG9ed5Em5U+ju8eCqy7OBwrg+ET7UPj/BrZRqbN+1AN4iKLwuZrBsZqEcmSHTOiWCDXRlMflLrU6kmOtA12DAPtYhBbcSNRtcVhvFvhNeF9aQVNnnpXdg8hT7OHLgcDMUqVKuo5xUqVKgBUqVKgBUqVKgBUqVKgBUqVKgBUqJcYqBSCK1oxSTG0qVKsNFSpVLhm0kwtegRvpKr9IFAEVKjBh2rfzld/5Ztb/zXv8AvipE4Rr/AJ3/ANau3f3+lFA2V4FOCDVj5DQ/8Y//ABn/APVQO6QfSrUI3I03vaJPa/emSFciBLFO/DGiWL7UQ40QJIq6w2rIyytOisLBphbNHKWKmy0Nl1AcPpkTUZJJWPGbeir8s0vLPSur4rwew5ZEA72/vVW14I8wFKTpcT/q/qrlj5WJ96Or4GSrRz3yT0peUelXWZYBbCy26nSofQ9xQgIrqUU1aZyuck6aFlEhVxVzjR0qsbVBkVc4ResRFcXlYuPznf4fkK+LKguGp8I4QdqsXMEke9GjA/y5ArilmjR38uXQInFKBBTaugZMPxWFKXImCOtc8S2qrHLMY4hQAUQJuAahJfQNvTMbn2A8l5SOJtVfW28coStIWBcVia9jBPnBM8vNDjNoVKlSqxIVKlSoAVKlSoAVKlSoAVKlSoA2niPwqvCrKViOnII6is47h67D/FbGtkIRbXc9wK5S7vXp/CjLGpVTPJ8fNJ2m72Vimq88ujF+1Rn2rilBJnfGdg/lCvC2KnKe1NU0aWhuRGKSl0iwqnIy9wkDSZPY0rdDKmRtJWswhJJ6CpWMtfWrShlxSugSo10XwzlX4dAWWrkbkVrvDuftMFRU3c9N686fnbfFWdKwaMV4M8JLTKsQyoEbBQt7961OLyxpxJSpCYiNgI9qI8RfxBCVD+SUoO5N/sKz2P8AGTISS3KlHYRzX0fg+b8TAnKo1r7/ALnx3/seH5C8pPG27/pHNM4w3lPLROxIoIGrN/CPPLK9BlRmjcN4TeUJNvlXmzknJtH0+O1BKXdGu/h/4qU5qYWJWACk2i1XmZh1y86Vj4SLViMt8LvMuJcQohSdq6m00HWUqA/mCAoEwPevI8mHCaaWn/hnpeNmoz/ibIxjMLqBl1tNzzIrjjqFJUUqsRvXcMS6ptRcbEiIWOvcVhvGGSpWQtsHzFEkiLRT+NleN8JdDeRhU1ziZjIMucxLobQfc9BWzzbAJwKAFGSaE8NsqwY8yJVUeNZezB4KdMIGyRW5srnOm6giEMfFJpbYV4VZOMdhO3XpXUPE+Hw2GwXlgDVpgDknrWNyHDjCEaBt9K88VZop8iEm3NcfD4s/k6L8nGuRQoTah0E6oo/ACLKFS/g/6kinUGm1RWWRPpg2KwHmNEKO1YF3DKSSI2JrY5nm8Ao2NUKlA16XhYZKLs83y86ctFOU15FWbgFRFoV18CCyANKjDhxUZw1Y4sZTTB6VTfhVcAn2p34Jz/Qr6Glo20D0qmVg3Bu2r6GolII3BHuCKDTylSpUAanMMUTJWok9Sb1TrfvvTcW+VCZoCuvN5PJ6OTD43GOyw86vPOoCTS1VB5LLfCQf5wp6XhQCWlEgBJk7CDf2rWs+AcQjylviEOXgH1R36VOfkRh2avH5aQ/weprz0lwakg9JjvFdMeThlrlCAIHTn9ayhYRh1eWw2E6RJJEk1pstxSyNSkpJ9KriJbm5HWvI8rI8r5JndhxrEqaLJ2XGfLbaPvED3JrKY7L1tKAWL1sMf4nbwwKdMkyUgC0Hr0qgOYeedawO1orjwwldei8pasp8RgS+IUK9wHhdCTJFaJhtJ+GnqtvXr4ajGkzhy/M7aBGsrbTsKkEDYV6Xqc4BFVbJkRVRWTYhKXhrEpNiODQmiL1EDBmpZIqcXFjxbi7NFnWDgK8sTvHAjcRVTicEHGGniIIkKHcVd5Zi0uNxIJA26jlPvQLeII8xhKSRuEkfWvOUmqVHerktGOzrCGAtIlJ4qHLmViCBWrwOBUqUqQYJkdhRDuXBtURbcVfHGM9SITnKO0VuFwilXVRqMtSeKOaQIqdCK64xUVSOaUnJ2yodyVB4prGWJFotV44ioAmtoyzPZv4QaeSTAmucZ74TeYJKJKeldrbqLGYZKxBFVjNoRo+dFOKBg7963H8NfBZzBSnHVlvDt7kbqP8ApBO3vV7n3gttxUgR7V0bw/kQwmGZYQzqSr1KVuJ3v++KXNmcVS7KY4xfaBsD/DnLlBBRhCUi5K1KlXuCagxf8NsGpWtprytwUcAjaK2britSCFFKBYpAsek0YmFGfma5o5JWtlpQjXSOUq8PtNkpKBI7UQ1gGv8AQK1nifBgwse1ZlSYq6lZFxo8OAaP9AppyLDr3bH0qZtfWiG1U1mUUi/AmDJny0/SlWhApVvJhxR80lw02rfLPDzrt9h962OTeEcMB/N9R71WwOb1o/CHh78Sv1KCUgFUmOK0GaeGsJcIgGo8jw5w2pTaQowQNVwJqOaUlBuPY2OnJJmybYwjq0KQpJU02E/DHvQecZyhxCm0OHW2R9OgmgcDmgZQFO6UgXMRKpNV2NeZxDhfQ2dK1BMJOx7j715EItu5Weq1FOokbb60rAQVOaviTvHzra4d5QaaR5cuJB0yQAroJP5c1UlSGGnFNQSiAogbSJO43AvTskwzqnPNSFBvSFHzVnVwdZSSdMK6cDibPOSkr6ElH6kGYFsh1TrzfmpWEwtemesAXAEEbGrnDsJYw3muGEkJUklSYIUNj8yn1bXFqvsN4faZ0LOhaHIKiAkk6oKlFW+oXMzUWCwAcaQ+05rZKlgFUGyVFIEGwsOOtNGMlJJff+CUp42uikQDKVISQSCYF02TqIkbGAuJiQg9qMc9YnYjjY/OiG8G2066GEoS27aZ9Ic0rBHpvMuLE9J5vQDXmNYgMYzTrWJRElLqbCQs3B+cg3MimjlbdoWWJPoY9CaSVgCSbCocWkBakzIEEexAUJ7wYqj8QYwpb0A3Ndcp1GzljG3ReYjHo06tQiqTEYxxyzQgdTQOU5WrTqdNuBR2IxukaUD5ChJy7NlUXSHeHsevDYga3CdVvY10QYjS55q061OCAqwkDf2rjeOcWhWpwGf6R+tbLwznCn2wFkJWnaO9cuaKu49ezox21TOi5YpBSS3zczeD0obOWCUz0qpy3F+USblJIBHcDgVo0OpWkwQRXOnwkmjX8ypmWS5FEJdMU5xgBRTXq2bRXqJ3s42hKfp5cB2oTy5MVMloDc0wp4XKFexXSvcUUyRqAtVRjHxoPFQy51DXstiwOf2C/wDjTKVhK1C5A7CTEntXQsvBQkNIUQE3Gq4KT0PSuQ5Dk6cTiEpVNz9YvFdGyZ99RLSmygoJQgEidI57iKjzk3ci04wjUYmiLsylUQCO1qWJfSlflJILhTqCeqZjehM+xpYbUpaQoERIHHeshl/ipwHU4kEj0NrsSQaaTX9BCN7NNn+M0tlKgQTsKyx9QtUWT5u9i8S4h0EpAIuLJ6R716tvSSOhq0YuO37IuaktCSIN6m8yKh0c14vaqCBAe96VAh40qwCjZwIA0iwofMcGuB5Z96sUO71F5v0qlsX9iiOVLMHnmp8QQ2gT1vRrj0SZqmzZyUHmsl8ypmxVPRT5viEOuITAhAMHhR/WrTKMShBcSmwLaVqAvCkzJH2qsbSHkpQU3G0QDReX5YltapX6VIUFA7gRvauOSjTid0X0y3yZLrhLUJIUNcz/AFE+lJ1fFIHFbRrPmEuqCwG4QsLSqx1FKgERA3PXtWZ8N4hptg6m1KVKlSCNN73PERUPiXP04mFpbKXS2ltagbOKTYEemxIttvFRlG3SffZkpaba6PMFmi22nGFPak6fhFyJiUg7CQfzqyyvHl1sYZlXlNnSYCkrGog2JSfSqE3BG/vWSTjmWl6Ax50EBSnVOA+n0wkJI0gCwnatK9g2lsjEYUlKHAtpTaiSW3imyZ/qSoaoJ5Iqjwxrd79nLkyeTB82lx+hq8DnWCw+GDBDinUkmAkmVEkg6jAMyLipccz+MUhKkJJaAWlIVpUJCwtJtsUrEpnjtFZbL80CENOu4YrDawkgLGtKYIg6gCYWkkAgfERxW1X4nYcBxOGw70Nj+YpSAEogSEm5m+5EgUsklGpS66HxZHJKajt9/mv+GLZfOKuAUL1lsay0klZUqEmANXqGmQSRKfTBmsrjMWCuHQQQY9iODWlweDfRqS2slp1xKgUqUJlKVrQiFQCpQI4tqknaqLN8F5ilLI9RJUfcmT+dVxfMml0UzqMZJr2ObzBHUxQmZZpoTLQv96DSwpNq8cRVFjk/1MlzS/SitGPcdMuGrLLsw8tXvvQLrfShluVZwi48a0JbTs6TlOcqcAWm6hZSR/UP9UdavsJirhTapSeBvPcVyHLszWyoKSSK1eBzHWguIc0rm6ep6ivPnhcHXo6ovn12dBzN4FSVJNyL16XZ5rG4XELUoSSTzWhZSd67MaqKOXImpNEmLxmn3oJWYaqPOHCrkUlYZPQVSxKMdm+NAUNRNMRikOW8z5Vp8XlqVWKAflVFmOTBN0og1HJjUnyRbHkcVxfRZZQAFI8tWlW08g8EVbYDMXFBwIcLzyZjWIhQsRasQvErQUnYgg/Q1bYvO2zLjesOED0psAeT3qPB+zqU4UzfJxwdZQ28sa1CFCTpB53rnmcZU6w4SAtSROkJnT71oPDbilJW6mCrSAEKFvkalz/OVNNhpQUp4iAABF62KSVsWM2pfKLwbi2kMkrUfMPxH9KmdeSok96x2BlBIVYm5HT3q2bxdXhbjs58upsuSumLXQbOLFFB8RT0SbGUqdonkV7WUFlCsgiodQiDvXrrZ60MuetUFIsWogGqnGK9O9XD5PNVuIYkxFBqZQhK4UkGLiOpHajncNpTGlQJKdR1aioTwKumsnBANwAZ70WG0tp0aJHM7kdzUHCTKrIkH+E3Gk4RDod9Q1JLJPxGSPUnmd6zOb4hwqS8G2wG1iNMgagQqbnnTF+tHeGnfNeUy3CDB0z6iSCZ3/d6KzjBLWS2sqWEkBUbCQTvwY71Bri+br/eyklyuP1AM4wbSwHcMdSFXlPBUZIX/oUCYg/KRFBpzPycOpgepS1+YsSkpASkgJkTczeocV4aead0okpUkeWUmFL1atIOkmSdKtumwqPJMqeL6ENpTrIXOtSClSbg2tpESDJ36WqqlGrvrY/keTlzQ+G4perXsvfC+ZgepaQ42dAUmCNMwpaUzupJSkX363ro7WIZbAfZxSS3pA0koBSTaCkRp229+tUHhnL3kl9hbLaXEw42lxKV6kwQrTqBIHwe8kyal8SuYZlkLWylt5Ikpb0o1CDNo0hRUBeLzcWmoXK3JJU9EoQVKHvszmN8ShOIe0qX5U+WhAQVJT8Sten4YSVJBTNxNuRcO4NK7piCJgSYkTAJuRQQyzC4g+YkqUmQotmQkqV6yVid7i3fjatAwoHiOlXwLVjeTJOkuzOPZXOwqrxOXGNq3JTUDuDB3Ij7fOr2cxzbE4Miau8u8IsDR+KP81xIWEFa2wkK+AehJUpZ6Ei5AAO9E4rMyw2cUygCEq0KWpJJBhIWWin4TqT/AFW1D4tjtP4f4RWJyxovw8pwLkvJ12CylM3BPpSIv35qcpSf6S1cHU0c6xfhJgPfh0Pr89xaUtNaNekSQ55ikgbASLDvEEg5/wADeQohOJKinclooSbT6VBRBnji0TNdC8OeGcNh8WtSQrznUFKI0aW0JKQsN6QnhSOJAne5J/i3JlqQhLOjWhaCnzT6VgKCoUoAkEKRqtExSc3XK9LTMjV7/gx2BwgQkRvzRzCptNFv5SpLepZ9aY16EqCFFRPqTrOr5RFBpIF5tHSqRkmI79hKVeoA2p4cv+VQpJPbr1ryd4uaYUMSoTtuK9dYSoAmCTQyVEHaRtUwcgx7f7UAQv5A05GpMGqd3wgkKOhZSfrWrDupNxHAqFSSN+elZVjJ0ZfD5Zi2EFtpxJBsSfig9KzmYYp/CmVpUoz8avVXUUAUNj8Gl1JStIINL8NDrJJb9nHxmqlqKlKkmj2cyqv8Y5AvBr1JktHb/p7HtWfazI9aso/Qm3ZvMPmh60czmFc8TmZ60SzmqpsZoow6H/xCvapcLg1qQCVQSKVLQFmtNpF5oTTeaq8fmSkgwYvXuDxpUI3KtqegrVlgFGSN52otvBgCTPepMGwExJlXNHJbCpNgOb71hhCpO1jB270JiGLe/PejzbiRcDtSdTqCQALf25oMMHissdS7KCbkKTCimFdQY960vhl9l3W28+UuJgplUJVeFX5IEij8XgNSY3/f96x2LylaXCYlJJ9PpBvyknn6HeozhvkjohNSXGRtGR+IXpYlSmQqFiSIkEEHfVJJkdTREIL6UOqDbym1aVWhS/Sf6tlKj2JTO5vh8NjMTgilxt3QTbfVM8KoPMMYp54LdKHVmIN+OyrJ9UD51BRX03dleL9PVUdF8U5lpaR6gHmVShxtWkNyCFJ5MaYJvcgWk1kc4fdcc8wLD6TEn0idSfSSViByRbdIMyIFbhGlqeU0EnEqEJtBCCCNRgWSRChJEcczWiY8IY1SdOtDbYiUlSrkFUHSkHYKgGaI47lZrlGEf3PcodCEqtBUQSRYEgQDEkTETFrWAq9weJ7/AL70BhvDOIGkEpIE+oBdvqkVO/l+Ib3TPdJn6jeulKlRySfJ2y4afE3P+/SvMSRBA5CugmxJAnmJgVnl5poBVIkf0nmOahz3NllCGwkQtKlLUAlRgKCEpQFykkkgdfUIipznvj7KY8blsL8PYBONQ4poaGnSsFbrhJ+HT/KYb4SnSkKVBAA9QsBrspzD/hmGbQgKxGHQdDioQlaJ2UEgkKRMiCZki5m3Pf4T41zC4tWHWguMqGs6RqCAFFAc5gH7gje1dN8RYrCtaz/MItqSGVlJJsUlSgEepJ0n1Te1LOop/NTXRq5SltWVGfZkcQ5hXcCFKWlbigQhQULIsQdxAIsSKs2MY+/mKfNQtppDSwlCwoAlQAK1T8Umw7J96yOI8Qfg22/KR6X1Eq1epQYbWAAIO8yflttRWOzD8S6vCIKUp8kOa0kICVakJ+IbAocEmeB0rm4TljeW9d0dDqL4V9Vf59Dc+McWnyFrbT5hQUphs6iDJmydiOhNZPFIhRAgiY7d4PSa1fhrJ2UMJw7KgW27kpIIW4YKl6hxJj5Vms8xCC8pKFklv0KUYMrHxTG8bT2rqi23yfs5ZJVS9ETciYBt7/Op8OmSTpAnehW7CRfbsSKlW7Bge9pk+5q1kxziDMAm/T7kGimmwUiTBn3NDsKVYnbpUz60m9pSLcE9vagAhhzcK3jcU9KgSbWoFSj3j9albX1Nz0oNC9fNeByoZ5ke1NUYPzoAgzXAoeQpCxIIiuDeJ8lVhH1Nn4d0nqK+gXXO1YP+IeXh5kqj1t3Ht0p4umByQKrReDcvLz0x6U/SaqsnyteIcCEbf1KOyRXWvD2VIw6AlAt1O6jyaaToC0YwadI/tSoxBsJpVIw4tiMwChBrVeFsEUo8xfPwg8D+5rHeGstL7wkehN1d+g+f6V0pCLJEQPziqvRjfomSroP0tRRbhMAW5/fHNQMNjeR6Rc1OV87cdL8H6VgrHMp6m2/7/fFOSL77/v8AtTm1Ei3YW+/yMVK22YMf596wBjiJAE32nr+7VV5i0NN99/nVw2ZFj0vtfmqXNnhe0d/386ARi/ErxlABNgT9a98NeHF4s6nCQyDcCAXCNwI47/Smljz3o4J+w3rdZesJ9CUGExEAwmJG+wBkfWih+TSot8pwTTKNLSAlA2AF7mJPPzNXLagBINwmTcfM34t1qjwqYPmEaDIBtMxb/wBvt71aNJSSbbwCmYi3bn61lChmDdBEgm87k8D/ADNB4pski9+k8GeBU7Kt9R6CRMCdwRxuL3p+JRsREjeN7Hqdht+71lG2YnNsMlSgrmNyN09DcT9apF+cGcR56AtDY1JWPhhSkjQoA6gklKfVfT85rb5hhdaZFiQexm/b/Fu4rC5u7pS6Fp1Qj4bx6iEg2Mx6pseKnKC7LQlK6R0rwJ4ZbOFJ1hanClS3E6SHFwDCY2QgelKSBEExsaE8XZkjCsFt4a9UhDZ2JB3BEKQlNiYMSYi5rlvhV5xh9pGHxLiFLXpUlJMFIJuQpOlW0gR8+nW8Vi2FKClMEq0xrcRrJ0z/AMwaDf8A6BSShceFX7b/AD8oE+MrbMLicK4/h23gmQ0FNr40FS9SLbnVrAsLRem+E8F5CXHsSVpRiIYbgeopkLcdTqgFA0pEzEntV+cpeGIexKHnGipRSjyyEFawNIJAhPlg3Ij2veoWkHEIUrGqLjkhKFrWtC0wDISoAgXMwpKhttvXIpco8I+z1J+TeFRaWnd+9mwyDBMYRlX4dWIeNx/OUfSRzZKRHMX7VnkqMlS48xRJWNr7AX7AE8SoxarNXixrBoDCg6+VgCISNBiSVuSQJF7SYnYzVW7mHnOFZCU7DSmwEARuSTxftXTjjHTSp+zzJOW79k4Am/0tAvP3r3zRaZ2t17fLao1vEn0meCI47D9a9UALmdMTzHQ24q5IJRcSRHMzNJZBIk3uAY68HptXqFJCUlOoi24iOK9S2ki4tebfY960wkSfn+/7V72t8v0qBQFriJsJjYRTtRmxEm28D6daDUSpUBeD+dSB2L70MtRnSn3tTHHQJ0yTF+wHSgCR3FAA/uKzGZYgK1JJ3mjsfiBz0H7NZ93Fa1EdK1ILCcFlrbCEpbG4CieSTvNXTQEjrF46ie3t1oDFq9LSrAFAHuRv+dS4ZZ3E2mb88H6GhmFuHB+z/ilXiFyJlf1VxbilWAYbwtl/lMpBHqPqV1k7D6VoW7GBMiOttqHZAT35/Q7cUY5iDEAG/AEb7Dv/AJqjFPHUkKOmSI3iOBek2qAIsT14+tNeJIBk+07Dgkjn5Uxhwg8n27C/9/lWG6C2VEGTaeKscO2SmARe8+/7+1MwwlQmJi3Ud/z37UYp8GyfkbW/tz9aDGQ4xMN7AR8XHb61z/PsaQSkbz+danPscPKIklQ+Q323nn7VzTM8QSvf6VqAusiY3Nul+/Hsa1OGd30i0C5BgDcc1ksoXLfG9vcbfO1X2CdcubBIn3WNpi5i3v8AS+mMv8LfVKpG2kQOOsXtaBFlVb4UkqhQMxINo3ItBPTms9hlDTCh8RuO+kDjkX2FXGHxaUqnYmABBiAQBvaNqVgg8KSReyVAWE7mRM77AVO42kAwTbTawNuBbcgD7VVOOAAgFMm4k76hsOdhsY4p7BJ+Iwm4MSe5meNqKCwjEokymFG99xa0C29uOTWa8Q5GXCHG0AekyCLKkAFCo6ib79K0wQAAABJO5O3a/Fuf7Ux9oE6tRBgSUkEKg/UW4781jGTOUYdhLGKbxKkqCEKPmplHmBUESkCNczwK3Gf/AMVMKQny8E8SPQFOlDabRqmNc7CRbaic6yht2x0+ZMpJi53Hw3ibGubZlk/lpKXiQEbFPxXJgH0kK+JV9Q3pKrspFqX3O1ttfi8MnFqWEkSNIICEgiCLj/QTee9ZzIfHuWeett2QACPNUklK1mAVDSDFhvF965yM8d/Cfg0PK8rUVSRB2ACSRJ0wNqYykyFemSNJKQb22k3i21SUetddDJadvs13iBSXMSA26lbaUpjyxqSdz8ZgjcAiOKKwioPHc22iDxVJhUR6haIH1q1w5IOw2m0fnxTJUY23RZRYQex6xvM8bUStQO+3IM9Bt1BM0DhBaeb9r7HoKnaukk3PuLd+9ztW2L6DmXBBhP0P0PaQKTrgTcgAm29zF+N6hSsbx0sbEC0frUjiZ0zJE8xI3n89r7VqCiYugnm+1hA6xUSiOTJ29JPsaRVJMGExBB4PW+9qiUBBMkmZEGLUxg/ziTFhax2np7ULingLgzI9XbgzUYc3kDrefbYbiq/H4kAATbqDe+1aBX5vioFjAA2F5NVOWYiUkkySTTc9xI+Y6e3aq3JMTKVJ/wCo/pTpGG7wa/MYImfLMwOm5n98UzBqMem4tPQzbb5mqzKcXoWZBKFelUbxeTHNWrrGiCgyhR3G/seItSvRqJnccUkpKVGOQkEfI0q8D5N+55IvN7e9KkNtCwadImLm0/78VK8eszBPAv0txTEiwG0e5Inb9KjfJ53A7W9/n+VVJDGze4t8uN/yohhJ2AuRx9vaxqNIAJ46WNj07cdaNwyQJFxO8fu881gwYwYG4J5P79qfi3Jva28Wvcg/Omsq6R/j7dKizGAk9IB2/I+01ohkvE2L+KDa1vzH2rDBySVd6uvEr5EidyY7yaz+q1qZDo0mUOgNSTMTAG86gBHck1aYH0ErU4SIiN0gnaCLmJB2qiyRfoExGqw7ibmtA0o3I50gkGbi0/UUCsPVjwAkhCylURGkxuBubG8x3q/woSqJmAAYJVbsZN/VHa9UmGIUIAG0i3QmLbETIte1XGCtpCpAKZF5E/5A+tKzLJWYTJSmCpRSD6hz2gx8PzNFtubxItN7Ce/PCqgWgg/FCSQRPzPJ68RXqLpmbwN9r7wPtbtWBdnjmIKQBG3QRBvuOn9qnYxmxJBmREEDSesbX570KEJJiBfaFSQZ6H/1H8qTIMGCQBEqtsel5Jtt/egA1KpO5gWIMFI1WtFwNr3qrzrLUutOA3Ogwe4Fj9RRjpKYg2IAg7/feBP3FQrxMoWokBOlRgjgCfY7G/ahGN7OT4NAtv8AsVdsaYAi/wCtVOXpnf5fv6VYNLBIBEciesdPkftWNFrL/DEQOQQN/eYj50ahEDYxJnaYveq3DqslVhMj35/UUZglqkhZH2vzv86RoLDcMehJAix4iDNvepw6UzcA3i0zI2N+aHS6EzA+Vr2v+VPSrVwVCLG42tbbYdaygsJSs9DIEBUSLcTPNSIWdYj0iOOY6H3AqJIN97GLWAn/AH96YCoq3KBHaJmB3In9aKo1yskfXBmSSAAD87QO5qB106Tqk8id/bpzTEuEybgG4mBPWe1rc0O+6CLT3Edh9dqZGMbiHRpnYgzY29+25qlxeI1BVrGLfcm3tRWNgqBJ0gi8mx6UBjW2oH/aEJEbaHSQrodKTabSJp0jDO5q8SYTzAA5ubfpQ6cOvDOhLmmFDdJCgel/n96IxWFZUr/viAZsS2+B2g6f9u+9MxjTThQV45sgDT6W37WJmCkSSQQe5Hyokbqi0axUXmOP9vr96vcpzjSNC4UjYb2nf3G5rMYbyIIGKCiB/wApwTYwP31qdlcAA/nPypWjEb1GDbWApK7G4r2sYMaRaPtFKp8DeRskrIMQPfkRc/v3qJtjWY1Hb9j2vSpUwiCsIiNRMGB+YJA/fSjW2yTfcgHgd457/SlSosGSpYN+gvuAd7D7zQGaOkJUJtwD89umx+lKlWmHKM/elwDoPzNV5XSpU4yL3I0ktSN5I/P771e4LYRvNu09tj7d6VKsYjLtvYX6pFyIN/8AF6sWVlRAA4B+QE/p9valSpRQh9K41aoMCUgTMgkkknp+UU5KlbQCkE9iOOD0/OlSpGxkiB6djbaI/q4+Xz/3frKpSoCQT3uT6fqPp+SpVqBkQd4J+hJBkWmbk+8/CDbio8XYoIwzqhN/QDaSV2J+/wBqVKnQq7MHgnI3447Uel06gVG+/W0fv6UqVYyhe4Z6yegPAi4gGes1I26ZAiZuNtr80qVTYwd+KIkTItuOsbHjcdaTWII+Gwmw/MD6UqVYAUxjCUKTvPqAuLiLz9P3evRjpR8VgORf2kW5B2r2lWmIicdlN9zAT9ZEn5C/egcViQqTEnY8abXAne1KlWro0qsU/Kd7e23NZ7Gv70qVURhRPLk1FSpU5qHNrIMjerrBY+Y+kRzSpUAyw/GgWvXtKlSin//Z";
    },
    ,
    ,
    function (e, t, a) {
      "use strict";
      var s = {};
      a.r(s),
        a.d(s, "mainlist", function () {
          return p;
        }),
        a.d(s, "subheader", function () {
          return j;
        }),
        a.d(s, "Jewellery", function () {
          return y;
        }),
        a.d(s, "menuListHeader", function () {
          return w;
        }),
        a.d(s, "menuLists", function () {
          return N;
        }),
        a.d(s, "earings", function () {
          return h;
        }),
        a.d(s, "occassion", function () {
          return I;
        }),
        a.d(s, "rings", function () {
          return z;
        }),
        a.d(s, "pendants", function () {
          return L;
        }),
        a.d(s, "solitairejewellery", function () {
          return S;
        }),
        a.d(s, "nosepins", function () {
          return C;
        }),
        a.d(s, "collections", function () {
          return f;
        }),
        a.d(s, "themes", function () {
          return b;
        }),
        a.d(s, "banglesbracelets", function () {
          return T;
        }),
        a.d(s, "valayal", function () {
          return D;
        }),
        a.d(s, "kammal", function () {
          return A;
        }),
        a.d(s, "koluse", function () {
          return O;
        }),
        a.d(s, "Price", function () {
          return v;
        }),
        a.d(s, "Collection", function () {
          return k;
        }),
        a.d(s, "Material", function () {
          return E;
        });
      var n = {};
      a.r(n),
        a.d(n, "mainlist", function () {
          return P;
        }),
        a.d(n, "subheader", function () {
          return U;
        }),
        a.d(n, "Jewellery", function () {
          return x;
        }),
        a.d(n, "menuListHeader", function () {
          return B;
        }),
        a.d(n, "menuLists", function () {
          return G;
        });
      var i = {};
      a.r(i),
        a.d(i, "dataCard", function () {
          return W;
        }),
        a.d(i, "dataCard1", function () {
          return Z;
        });
      var r = {};
      a.r(r),
        a.d(r, "productsDetails", function () {
          return _;
        }),
        a.d(r, "productsPendants", function () {
          return V;
        }),
        a.d(r, "productsubHead", function () {
          return H;
        }),
        a.d(r, "productstabs", function () {
          return F;
        }),
        a.d(r, "productsbuy", function () {
          return X;
        }),
        a.d(r, "imagecertificat", function () {
          return q;
        }),
        a.d(r, "fadeImages", function () {
          return K;
        }),
        a.d(r, "fadeImagessublist", function () {
          return $;
        }),
        a.d(r, "dataCard1", function () {
          return ee;
        });
      var o = {};
      a.r(o),
        a.d(o, "productsDetails", function () {
          return te;
        }),
        a.d(o, "dataCard1", function () {
          return ae;
        }),
        a.d(o, "fadeImages", function () {
          return se;
        }),
        a.d(o, "breadcrumsdata", function () {
          return ne;
        }),
        a.d(o, "cartsubdata", function () {
          return ie;
        });
      var c = {};
      a.r(c),
        a.d(c, "LogRegData", function () {
          return re;
        });
      var l = {};
      a.r(l),
        a.d(l, "carouselTop", function () {
          return Le;
        }),
        a.d(l, "fadeImagessublist", function () {
          return Se;
        }),
        a.d(l, "titleContiner", function () {
          return Ce;
        }),
        a.d(l, "TopPicksimages", function () {
          return fe;
        }),
        a.d(l, "FeaturedCarousel", function () {
          return be;
        }),
        a.d(l, "testimonyCarousel", function () {
          return Te;
        });
      var u,
        g = a(1),
        m = a.n(g),
        d = a(4),
        M = a(62),
        p = [
          {
            name: "Whats New",
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2JmYmZiZiI+PHBhdGggZD0iTTg2LDE3LjJjLTM3Ljk5NDgsMCAtNjguOCwzMC44MDUyIC02OC44LDY4LjhjMCwzNy45OTQ4IDMwLjgwNTIsNjguOCA2OC44LDY4LjhjMzcuOTk0OCwwIDY4LjgsLTMwLjgwNTIgNjguOCwtNjguOGMwLC0zNy45OTQ4IC0zMC44MDUyLC02OC44IC02OC44LC02OC44ek0xMjAuNCw5MS43MzMzM2gtMjguNjY2Njd2MjguNjY2NjdjMCwzLjE3MDUzIC0yLjU2ODUzLDUuNzMzMzMgLTUuNzMzMzMsNS43MzMzM2MtMy4xNjQ4LDAgLTUuNzMzMzMsLTIuNTYyOCAtNS43MzMzMywtNS43MzMzM3YtMjguNjY2NjdoLTI4LjY2NjY3Yy0zLjE2NDgsMCAtNS43MzMzMywtMi41NjI4IC01LjczMzMzLC01LjczMzMzYzAsLTMuMTcwNTMgMi41Njg1MywtNS43MzMzMyA1LjczMzMzLC01LjczMzMzaDI4LjY2NjY3di0yOC42NjY2N2MwLC0zLjE3MDUzIDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM2MzLjE2NDgsMCA1LjczMzMzLDIuNTYyOCA1LjczMzMzLDUuNzMzMzN2MjguNjY2NjdoMjguNjY2NjdjMy4xNjQ4LDAgNS43MzMzMywyLjU2MjggNS43MzMzMyw1LjczMzMzYzAsMy4xNzA1MyAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=",
            url: "/#/",
          },
          {
            name: "Jewellery",
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTE1MC41LDYzLjE1NjI1bC02NC41LC0yMi44NDM3NWwtNjQuNSwyMi44NDM3NXY4MC42MjVsNjQuNSwyMi44NDM3NWw2NC41LC0yMi44NDM3NXoiIGZpbGw9IiNiZmJmYmYiPjwvcGF0aD48cGF0aCBkPSJNMTUwLjUsNjMuMTU2MjVsLTY0LjUsLTIyLjg0Mzc1bC02NC41LDIyLjg0Mzc1djgwLjYyNWw2NC41LDIyLjg0Mzc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0yMS41LDYzLjE1NjI1bC0xNi4xMjUsMjYuODc1bDY0LjUsMjIuODQzNzVsMTYuMTI1LC0yNi44NzV6TTE1MC41LDYzLjE1NjI1bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik04Niw5MC4wMzEyNWMtMS42MTI1LDAgLTMuMjI1LC0xLjA3NSAtMy43NjI1LC0yLjY4NzVjLTAuODA2MjUsLTIuMTUgMC40MDMxMywtNC40MzQzOCAyLjQxODc1LC01LjEwNjI1bDY0LjUsLTIyLjg0Mzc1YzIuMTUsLTAuODA2MjUgNC40MzQzNywwLjQwMzEyIDUuMTA2MjUsMi40MTg3NWMwLjgwNjI1LDIuMTUgLTAuNDAzMTIsNC40MzQzOCAtMi40MTg3NSw1LjEwNjI1bC02NC41LDIyLjg0Mzc1Yy0wLjQwMzEzLDAuMTM0MzggLTAuOTQwNjIsMC4yNjg3NSAtMS4zNDM3NSwwLjI2ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwxNzAuNjU2MjVjLTAuODA2MjUsMCAtMS42MTI1LC0wLjI2ODc1IC0yLjI4NDM3LC0wLjY3MTg3Yy0xLjA3NSwtMC44MDYyNSAtMS43NDY4OCwtMi4wMTU2MiAtMS43NDY4OCwtMy4zNTkzN3YtMzguMDI4MTJjMCwtMi4yODQzOCAxLjc0Njg4LC00LjAzMTI1IDQuMDMxMjUsLTQuMDMxMjVjMi4yODQzNywwIDQuMDMxMjUsMS43NDY4OCA0LjAzMTI1LDQuMDMxMjV2MzIuMzg0MzhsNTYuNDM3NSwtMjAuMDIxODh2LTc3LjgwMzEyYzAsLTIuMjg0MzggMS43NDY4NywtNC4wMzEyNSA0LjAzMTI1LC00LjAzMTI1YzIuMjg0MzgsMCA0LjAzMTI1LDEuNzQ2ODcgNC4wMzEyNSw0LjAzMTI1djgwLjYyNWMwLDEuNzQ2ODcgLTEuMDc1LDMuMjI1IC0yLjY4NzUsMy43NjI1bC02NC41LDIyLjg0Mzc1Yy0wLjQwMzEzLDAuMTM0MzggLTAuOTQwNjIsMC4yNjg3NSAtMS4zNDM3NSwwLjI2ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNTAuNSw2My4xNTYyNWwtNjQuNSwtMjIuODQzNzVNMTUwLjUsNjMuMTU2MjVsLTY0LjUsLTIyLjg0Mzc1TTg2LDg2bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNy40Njg3NSwxNDMuNzgxMjVjMCwxLjc0Njg3IDEuMDc1LDMuMjI1IDIuNjg3NSwzLjc2MjVsNjQuNSwyMi44NDM3NWMwLjQwMzEzLDAuMTM0MzggMC45NDA2MiwwLjI2ODc1IDEuMzQzNzUsMC4yNjg3NWMxLjYxMjUsMCAzLjIyNSwtMS4wNzUgMy43NjI1LC0yLjY4NzVjMC44MDYyNSwtMi4xNSAtMC40MDMxMywtNC40MzQzNyAtMi40MTg3NSwtNS4xMDYyNWwtNjEuODEyNSwtMjEuOTAzMTN2LTQzLjgwNjI1bC04LjA2MjUsLTIuODIxODh6IiBmaWxsPSIjNDQ0YjU0Ij48L3BhdGg+PHBhdGggZD0iTTE2Ni42MjUsOTAuMDMxMjVsLTY0LjUsMjIuODQzNzVsLTE2LjEyNSwtMjYuODc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNzAuMTE4NzUsODguMDE1NjNsLTE2LjEyNSwtMjYuODc1bC0wLjEzNDM4LC0wLjEzNDM3YzAsLTAuMTM0MzggLTAuMTM0MzgsLTAuMTM0MzggLTAuMTM0MzgsLTAuMjY4NzVjLTAuMTM0MzcsLTAuMTM0MzggLTAuMTM0MzcsLTAuMjY4NzUgLTAuMjY4NzUsLTAuMjY4NzVjLTAuMTM0MzgsLTAuMTM0MzggLTAuMTM0MzgsLTAuMTM0MzggLTAuMjY4NzUsLTAuMjY4NzVjLTAuMTM0MzgsLTAuMTM0MzggLTAuMjY4NzUsLTAuMTM0MzggLTAuNDAzMTIsLTAuMjY4NzVjLTAuMTM0MzgsMCAtMC4xMzQzOCwtMC4xMzQzOCAtMC4yNjg3NSwtMC4xMzQzOGMtMC4yNjg3NSwtMC4xMzQzNyAtMC40MDMxMiwtMC4yNjg3NSAtMC42NzE4NywtMC4yNjg3NXYwbC02NC41LC0yMi44NDM3NWMtMC4yNjg3NSwtMC4xMzQzNyAtMC41Mzc1LC0wLjEzNDM3IC0wLjgwNjI1LC0wLjEzNDM3aC0wLjEzNDM3Yy0wLjI2ODc1LDAgLTAuNDAzMTMsMCAtMC42NzE4NywwYy0wLjEzNDM4LDAgLTAuMTM0MzgsMCAtMC4yNjg3NSwwYy0wLjI2ODc1LDAgLTAuNTM3NSwwLjEzNDM3IC0wLjgwNjI1LDAuMTM0MzdsLTY0LjUsMjIuODQzNzV2MGMwLDAgLTAuMTM0MzgsMCAtMC4xMzQzOCwwLjEzNDM4djBjLTAuMTM0MzcsMC4xMzQzNyAtMC40MDMxMiwwLjEzNDM3IC0wLjUzNzUsMC4yNjg3NXYwdjBjLTAuMjY4NzUsMC4xMzQzNyAtMC41Mzc1LDAuNDAzMTIgLTAuODA2MjUsMC42NzE4OHYwbC0wLjEzNDM3LDAuMTM0Mzd2MGMtMC4xMzQzNywwLjEzNDM4IC0wLjEzNDM3LDAuMjY4NzUgLTAuMjY4NzUsMC4yNjg3NXYwYzAsMCAwLDAgLTAuMTM0MzgsMC4xMzQzOGwtMTYuMTI1LDI2Ljg3NWMtMC42NzE4OCwwLjk0MDYyIC0wLjgwNjI1LDIuMjg0MzcgLTAuNDAzMTMsMy4zNTkzOGMwLjQwMzEyLDEuMDc1IDEuMzQzNzUsMi4wMTU2MyAyLjQxODc1LDIuNDE4NzVsNjQuNSwyMi44NDM3NWMwLjQwMzEzLDAuMTM0MzcgMC45NDA2MiwwLjI2ODc1IDEuMzQzNzUsMC4yNjg3NWMxLjM0Mzc1LDAgMi42ODc1LC0wLjY3MTg3IDMuNDkzNzUsLTIuMDE1NjJsMTIuNjMxMjUsLTIxLjA5Njg3bDEyLjYzMTI1LDIxLjA5Njg3YzAuODA2MjUsMS4zNDM3NSAyLjE1LDIuMDE1NjMgMy40OTM3NSwyLjAxNTYzYzAuNDAzMTMsMCAwLjk0MDYyLC0wLjEzNDM3IDEuMzQzNzUsLTAuMjY4NzVsNjQuNSwtMjIuODQzNzVjMS4wNzUsLTAuNDAzMTMgMi4wMTU2MywtMS4zNDM3NSAyLjQxODc1LC0yLjQxODc1YzAuNDAzMTMsLTEuMDc1IDAuMjY4NzUsLTIuNDE4NzUgLTAuMjY4NzUsLTMuMzU5Mzd6TTkwLjAzMTI1LDQ1Ljk1NjI1bDQ4LjM3NSwxNy4ybC00OC4zNzUsMTcuMnpNNjguMTI4MTMsMTA4LjAzNzVsLTU2LjcwNjI1LC0yMC4xNTYyNWwxMS45NTkzNywtMTkuODg3NWw1Ni43MDYyNSwyMC4xNTYyNXpNMTAzLjg3MTg4LDEwOC4wMzc1bC0xMS45NTkzOCwtMTkuODg3NWw1Ni43MDYyNSwtMjAuMTU2MjVsMTEuOTU5MzcsMTkuODg3NXoiIGZpbGw9IiM0NDRiNTQiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==",
            url: "/#/",
          },
          {
            name: "Solitaires",
            url: "/#/",
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTE1MC41LDYzLjE1NjI1bC02NC41LC0yMi44NDM3NWwtNjQuNSwyMi44NDM3NXY4MC42MjVsNjQuNSwyMi44NDM3NWw2NC41LC0yMi44NDM3NXoiIGZpbGw9IiNiZmJmYmYiPjwvcGF0aD48cGF0aCBkPSJNMTUwLjUsNjMuMTU2MjVsLTY0LjUsLTIyLjg0Mzc1bC02NC41LDIyLjg0Mzc1djgwLjYyNWw2NC41LDIyLjg0Mzc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0yMS41LDYzLjE1NjI1bC0xNi4xMjUsMjYuODc1bDY0LjUsMjIuODQzNzVsMTYuMTI1LC0yNi44NzV6TTE1MC41LDYzLjE1NjI1bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik04Niw5MC4wMzEyNWMtMS42MTI1LDAgLTMuMjI1LC0xLjA3NSAtMy43NjI1LC0yLjY4NzVjLTAuODA2MjUsLTIuMTUgMC40MDMxMywtNC40MzQzOCAyLjQxODc1LC01LjEwNjI1bDY0LjUsLTIyLjg0Mzc1YzIuMTUsLTAuODA2MjUgNC40MzQzNywwLjQwMzEyIDUuMTA2MjUsMi40MTg3NWMwLjgwNjI1LDIuMTUgLTAuNDAzMTIsNC40MzQzOCAtMi40MTg3NSw1LjEwNjI1bC02NC41LDIyLjg0Mzc1Yy0wLjQwMzEzLDAuMTM0MzggLTAuOTQwNjIsMC4yNjg3NSAtMS4zNDM3NSwwLjI2ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwxNzAuNjU2MjVjLTAuODA2MjUsMCAtMS42MTI1LC0wLjI2ODc1IC0yLjI4NDM3LC0wLjY3MTg3Yy0xLjA3NSwtMC44MDYyNSAtMS43NDY4OCwtMi4wMTU2MiAtMS43NDY4OCwtMy4zNTkzN3YtMzguMDI4MTJjMCwtMi4yODQzOCAxLjc0Njg4LC00LjAzMTI1IDQuMDMxMjUsLTQuMDMxMjVjMi4yODQzNywwIDQuMDMxMjUsMS43NDY4OCA0LjAzMTI1LDQuMDMxMjV2MzIuMzg0MzhsNTYuNDM3NSwtMjAuMDIxODh2LTc3LjgwMzEyYzAsLTIuMjg0MzggMS43NDY4NywtNC4wMzEyNSA0LjAzMTI1LC00LjAzMTI1YzIuMjg0MzgsMCA0LjAzMTI1LDEuNzQ2ODcgNC4wMzEyNSw0LjAzMTI1djgwLjYyNWMwLDEuNzQ2ODcgLTEuMDc1LDMuMjI1IC0yLjY4NzUsMy43NjI1bC02NC41LDIyLjg0Mzc1Yy0wLjQwMzEzLDAuMTM0MzggLTAuOTQwNjIsMC4yNjg3NSAtMS4zNDM3NSwwLjI2ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNTAuNSw2My4xNTYyNWwtNjQuNSwtMjIuODQzNzVNMTUwLjUsNjMuMTU2MjVsLTY0LjUsLTIyLjg0Mzc1TTg2LDg2bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNy40Njg3NSwxNDMuNzgxMjVjMCwxLjc0Njg3IDEuMDc1LDMuMjI1IDIuNjg3NSwzLjc2MjVsNjQuNSwyMi44NDM3NWMwLjQwMzEzLDAuMTM0MzggMC45NDA2MiwwLjI2ODc1IDEuMzQzNzUsMC4yNjg3NWMxLjYxMjUsMCAzLjIyNSwtMS4wNzUgMy43NjI1LC0yLjY4NzVjMC44MDYyNSwtMi4xNSAtMC40MDMxMywtNC40MzQzNyAtMi40MTg3NSwtNS4xMDYyNWwtNjEuODEyNSwtMjEuOTAzMTN2LTQzLjgwNjI1bC04LjA2MjUsLTIuODIxODh6IiBmaWxsPSIjNDQ0YjU0Ij48L3BhdGg+PHBhdGggZD0iTTE2Ni42MjUsOTAuMDMxMjVsLTY0LjUsMjIuODQzNzVsLTE2LjEyNSwtMjYuODc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNzAuMTE4NzUsODguMDE1NjNsLTE2LjEyNSwtMjYuODc1bC0wLjEzNDM4LC0wLjEzNDM3YzAsLTAuMTM0MzggLTAuMTM0MzgsLTAuMTM0MzggLTAuMTM0MzgsLTAuMjY4NzVjLTAuMTM0MzcsLTAuMTM0MzggLTAuMTM0MzcsLTAuMjY4NzUgLTAuMjY4NzUsLTAuMjY4NzVjLTAuMTM0MzgsLTAuMTM0MzggLTAuMTM0MzgsLTAuMTM0MzggLTAuMjY4NzUsLTAuMjY4NzVjLTAuMTM0MzgsLTAuMTM0MzggLTAuMjY4NzUsLTAuMTM0MzggLTAuNDAzMTIsLTAuMjY4NzVjLTAuMTM0MzgsMCAtMC4xMzQzOCwtMC4xMzQzOCAtMC4yNjg3NSwtMC4xMzQzOGMtMC4yNjg3NSwtMC4xMzQzNyAtMC40MDMxMiwtMC4yNjg3NSAtMC42NzE4NywtMC4yNjg3NXYwbC02NC41LC0yMi44NDM3NWMtMC4yNjg3NSwtMC4xMzQzNyAtMC41Mzc1LC0wLjEzNDM3IC0wLjgwNjI1LC0wLjEzNDM3aC0wLjEzNDM3Yy0wLjI2ODc1LDAgLTAuNDAzMTMsMCAtMC42NzE4NywwYy0wLjEzNDM4LDAgLTAuMTM0MzgsMCAtMC4yNjg3NSwwYy0wLjI2ODc1LDAgLTAuNTM3NSwwLjEzNDM3IC0wLjgwNjI1LDAuMTM0MzdsLTY0LjUsMjIuODQzNzV2MGMwLDAgLTAuMTM0MzgsMCAtMC4xMzQzOCwwLjEzNDM4djBjLTAuMTM0MzcsMC4xMzQzNyAtMC40MDMxMiwwLjEzNDM3IC0wLjUzNzUsMC4yNjg3NXYwdjBjLTAuMjY4NzUsMC4xMzQzNyAtMC41Mzc1LDAuNDAzMTIgLTAuODA2MjUsMC42NzE4OHYwbC0wLjEzNDM3LDAuMTM0Mzd2MGMtMC4xMzQzNywwLjEzNDM4IC0wLjEzNDM3LDAuMjY4NzUgLTAuMjY4NzUsMC4yNjg3NXYwYzAsMCAwLDAgLTAuMTM0MzgsMC4xMzQzOGwtMTYuMTI1LDI2Ljg3NWMtMC42NzE4OCwwLjk0MDYyIC0wLjgwNjI1LDIuMjg0MzcgLTAuNDAzMTMsMy4zNTkzOGMwLjQwMzEyLDEuMDc1IDEuMzQzNzUsMi4wMTU2MyAyLjQxODc1LDIuNDE4NzVsNjQuNSwyMi44NDM3NWMwLjQwMzEzLDAuMTM0MzcgMC45NDA2MiwwLjI2ODc1IDEuMzQzNzUsMC4yNjg3NWMxLjM0Mzc1LDAgMi42ODc1LC0wLjY3MTg3IDMuNDkzNzUsLTIuMDE1NjJsMTIuNjMxMjUsLTIxLjA5Njg3bDEyLjYzMTI1LDIxLjA5Njg3YzAuODA2MjUsMS4zNDM3NSAyLjE1LDIuMDE1NjMgMy40OTM3NSwyLjAxNTYzYzAuNDAzMTMsMCAwLjk0MDYyLC0wLjEzNDM3IDEuMzQzNzUsLTAuMjY4NzVsNjQuNSwtMjIuODQzNzVjMS4wNzUsLTAuNDAzMTMgMi4wMTU2MywtMS4zNDM3NSAyLjQxODc1LC0yLjQxODc1YzAuNDAzMTMsLTEuMDc1IDAuMjY4NzUsLTIuNDE4NzUgLTAuMjY4NzUsLTMuMzU5Mzd6TTkwLjAzMTI1LDQ1Ljk1NjI1bDQ4LjM3NSwxNy4ybC00OC4zNzUsMTcuMnpNNjguMTI4MTMsMTA4LjAzNzVsLTU2LjcwNjI1LC0yMC4xNTYyNWwxMS45NTkzNywtMTkuODg3NWw1Ni43MDYyNSwyMC4xNTYyNXpNMTAzLjg3MTg4LDEwOC4wMzc1bC0xMS45NTkzOCwtMTkuODg3NWw1Ni43MDYyNSwtMjAuMTU2MjVsMTEuOTU5MzcsMTkuODg3NXoiIGZpbGw9IiM0NDRiNTQiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==",
          },
          {
            name: "Gold Coins",
            url: "/#/",
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2JmYmZiZiI+PHBhdGggZD0iTTg2LDE3LjJjLTM3Ljk5NDgsMCAtNjguOCwzMC44MDUyIC02OC44LDY4LjhjMCwzNy45OTQ4IDMwLjgwNTIsNjguOCA2OC44LDY4LjhjMzcuOTk0OCwwIDY4LjgsLTMwLjgwNTIgNjguOCwtNjguOGMwLC0zNy45OTQ4IC0zMC44MDUyLC02OC44IC02OC44LC02OC44ek0xMjAuNCw5MS43MzMzM2gtMjguNjY2Njd2MjguNjY2NjdjMCwzLjE3MDUzIC0yLjU2ODUzLDUuNzMzMzMgLTUuNzMzMzMsNS43MzMzM2MtMy4xNjQ4LDAgLTUuNzMzMzMsLTIuNTYyOCAtNS43MzMzMywtNS43MzMzM3YtMjguNjY2NjdoLTI4LjY2NjY3Yy0zLjE2NDgsMCAtNS43MzMzMywtMi41NjI4IC01LjczMzMzLC01LjczMzMzYzAsLTMuMTcwNTMgMi41Njg1MywtNS43MzMzMyA1LjczMzMzLC01LjczMzMzaDI4LjY2NjY3di0yOC42NjY2N2MwLC0zLjE3MDUzIDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM2MzLjE2NDgsMCA1LjczMzMzLDIuNTYyOCA1LjczMzMzLDUuNzMzMzN2MjguNjY2NjdoMjguNjY2NjdjMy4xNjQ4LDAgNS43MzMzMywyLjU2MjggNS43MzMzMyw1LjczMzMzYzAsMy4xNzA1MyAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=",
          },
          {
            name: "Gifts",
            url: "/#/",
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTE1MC41LDYzLjE1NjI1bC02NC41LC0yMi44NDM3NWwtNjQuNSwyMi44NDM3NXY4MC42MjVsNjQuNSwyMi44NDM3NWw2NC41LC0yMi44NDM3NXoiIGZpbGw9IiNiZmJmYmYiPjwvcGF0aD48cGF0aCBkPSJNMTUwLjUsNjMuMTU2MjVsLTY0LjUsLTIyLjg0Mzc1bC02NC41LDIyLjg0Mzc1djgwLjYyNWw2NC41LDIyLjg0Mzc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0yMS41LDYzLjE1NjI1bC0xNi4xMjUsMjYuODc1bDY0LjUsMjIuODQzNzVsMTYuMTI1LC0yNi44NzV6TTE1MC41LDYzLjE1NjI1bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik04Niw5MC4wMzEyNWMtMS42MTI1LDAgLTMuMjI1LC0xLjA3NSAtMy43NjI1LC0yLjY4NzVjLTAuODA2MjUsLTIuMTUgMC40MDMxMywtNC40MzQzOCAyLjQxODc1LC01LjEwNjI1bDY0LjUsLTIyLjg0Mzc1YzIuMTUsLTAuODA2MjUgNC40MzQzNywwLjQwMzEyIDUuMTA2MjUsMi40MTg3NWMwLjgwNjI1LDIuMTUgLTAuNDAzMTIsNC40MzQzOCAtMi40MTg3NSw1LjEwNjI1bC02NC41LDIyLjg0Mzc1Yy0wLjQwMzEzLDAuMTM0MzggLTAuOTQwNjIsMC4yNjg3NSAtMS4zNDM3NSwwLjI2ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwxNzAuNjU2MjVjLTAuODA2MjUsMCAtMS42MTI1LC0wLjI2ODc1IC0yLjI4NDM3LC0wLjY3MTg3Yy0xLjA3NSwtMC44MDYyNSAtMS43NDY4OCwtMi4wMTU2MiAtMS43NDY4OCwtMy4zNTkzN3YtMzguMDI4MTJjMCwtMi4yODQzOCAxLjc0Njg4LC00LjAzMTI1IDQuMDMxMjUsLTQuMDMxMjVjMi4yODQzNywwIDQuMDMxMjUsMS43NDY4OCA0LjAzMTI1LDQuMDMxMjV2MzIuMzg0MzhsNTYuNDM3NSwtMjAuMDIxODh2LTc3LjgwMzEyYzAsLTIuMjg0MzggMS43NDY4NywtNC4wMzEyNSA0LjAzMTI1LC00LjAzMTI1YzIuMjg0MzgsMCA0LjAzMTI1LDEuNzQ2ODcgNC4wMzEyNSw0LjAzMTI1djgwLjYyNWMwLDEuNzQ2ODcgLTEuMDc1LDMuMjI1IC0yLjY4NzUsMy43NjI1bC02NC41LDIyLjg0Mzc1Yy0wLjQwMzEzLDAuMTM0MzggLTAuOTQwNjIsMC4yNjg3NSAtMS4zNDM3NSwwLjI2ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNTAuNSw2My4xNTYyNWwtNjQuNSwtMjIuODQzNzVNMTUwLjUsNjMuMTU2MjVsLTY0LjUsLTIyLjg0Mzc1TTg2LDg2bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNy40Njg3NSwxNDMuNzgxMjVjMCwxLjc0Njg3IDEuMDc1LDMuMjI1IDIuNjg3NSwzLjc2MjVsNjQuNSwyMi44NDM3NWMwLjQwMzEzLDAuMTM0MzggMC45NDA2MiwwLjI2ODc1IDEuMzQzNzUsMC4yNjg3NWMxLjYxMjUsMCAzLjIyNSwtMS4wNzUgMy43NjI1LC0yLjY4NzVjMC44MDYyNSwtMi4xNSAtMC40MDMxMywtNC40MzQzNyAtMi40MTg3NSwtNS4xMDYyNWwtNjEuODEyNSwtMjEuOTAzMTN2LTQzLjgwNjI1bC04LjA2MjUsLTIuODIxODh6IiBmaWxsPSIjNDQ0YjU0Ij48L3BhdGg+PHBhdGggZD0iTTE2Ni42MjUsOTAuMDMxMjVsLTY0LjUsMjIuODQzNzVsLTE2LjEyNSwtMjYuODc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNzAuMTE4NzUsODguMDE1NjNsLTE2LjEyNSwtMjYuODc1bC0wLjEzNDM4LC0wLjEzNDM3YzAsLTAuMTM0MzggLTAuMTM0MzgsLTAuMTM0MzggLTAuMTM0MzgsLTAuMjY4NzVjLTAuMTM0MzcsLTAuMTM0MzggLTAuMTM0MzcsLTAuMjY4NzUgLTAuMjY4NzUsLTAuMjY4NzVjLTAuMTM0MzgsLTAuMTM0MzggLTAuMTM0MzgsLTAuMTM0MzggLTAuMjY4NzUsLTAuMjY4NzVjLTAuMTM0MzgsLTAuMTM0MzggLTAuMjY4NzUsLTAuMTM0MzggLTAuNDAzMTIsLTAuMjY4NzVjLTAuMTM0MzgsMCAtMC4xMzQzOCwtMC4xMzQzOCAtMC4yNjg3NSwtMC4xMzQzOGMtMC4yNjg3NSwtMC4xMzQzNyAtMC40MDMxMiwtMC4yNjg3NSAtMC42NzE4NywtMC4yNjg3NXYwbC02NC41LC0yMi44NDM3NWMtMC4yNjg3NSwtMC4xMzQzNyAtMC41Mzc1LC0wLjEzNDM3IC0wLjgwNjI1LC0wLjEzNDM3aC0wLjEzNDM3Yy0wLjI2ODc1LDAgLTAuNDAzMTMsMCAtMC42NzE4NywwYy0wLjEzNDM4LDAgLTAuMTM0MzgsMCAtMC4yNjg3NSwwYy0wLjI2ODc1LDAgLTAuNTM3NSwwLjEzNDM3IC0wLjgwNjI1LDAuMTM0MzdsLTY0LjUsMjIuODQzNzV2MGMwLDAgLTAuMTM0MzgsMCAtMC4xMzQzOCwwLjEzNDM4djBjLTAuMTM0MzcsMC4xMzQzNyAtMC40MDMxMiwwLjEzNDM3IC0wLjUzNzUsMC4yNjg3NXYwdjBjLTAuMjY4NzUsMC4xMzQzNyAtMC41Mzc1LDAuNDAzMTIgLTAuODA2MjUsMC42NzE4OHYwbC0wLjEzNDM3LDAuMTM0Mzd2MGMtMC4xMzQzNywwLjEzNDM4IC0wLjEzNDM3LDAuMjY4NzUgLTAuMjY4NzUsMC4yNjg3NXYwYzAsMCAwLDAgLTAuMTM0MzgsMC4xMzQzOGwtMTYuMTI1LDI2Ljg3NWMtMC42NzE4OCwwLjk0MDYyIC0wLjgwNjI1LDIuMjg0MzcgLTAuNDAzMTMsMy4zNTkzOGMwLjQwMzEyLDEuMDc1IDEuMzQzNzUsMi4wMTU2MyAyLjQxODc1LDIuNDE4NzVsNjQuNSwyMi44NDM3NWMwLjQwMzEzLDAuMTM0MzcgMC45NDA2MiwwLjI2ODc1IDEuMzQzNzUsMC4yNjg3NWMxLjM0Mzc1LDAgMi42ODc1LC0wLjY3MTg3IDMuNDkzNzUsLTIuMDE1NjJsMTIuNjMxMjUsLTIxLjA5Njg3bDEyLjYzMTI1LDIxLjA5Njg3YzAuODA2MjUsMS4zNDM3NSAyLjE1LDIuMDE1NjMgMy40OTM3NSwyLjAxNTYzYzAuNDAzMTMsMCAwLjk0MDYyLC0wLjEzNDM3IDEuMzQzNzUsLTAuMjY4NzVsNjQuNSwtMjIuODQzNzVjMS4wNzUsLTAuNDAzMTMgMi4wMTU2MywtMS4zNDM3NSAyLjQxODc1LC0yLjQxODc1YzAuNDAzMTMsLTEuMDc1IDAuMjY4NzUsLTIuNDE4NzUgLTAuMjY4NzUsLTMuMzU5Mzd6TTkwLjAzMTI1LDQ1Ljk1NjI1bDQ4LjM3NSwxNy4ybC00OC4zNzUsMTcuMnpNNjguMTI4MTMsMTA4LjAzNzVsLTU2LjcwNjI1LC0yMC4xNTYyNWwxMS45NTkzNywtMTkuODg3NWw1Ni43MDYyNSwyMC4xNTYyNXpNMTAzLjg3MTg4LDEwOC4wMzc1bC0xMS45NTkzOCwtMTkuODg3NWw1Ni43MDYyNSwtMjAuMTU2MjVsMTEuOTU5MzcsMTkuODg3NXoiIGZpbGw9IiM0NDRiNTQiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==",
          },
          {
            name: "Colleactions",
            url: "/#/",
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2JmYmZiZiI+PHBhdGggZD0iTTg2LDE3LjJjLTM3Ljk5NDgsMCAtNjguOCwzMC44MDUyIC02OC44LDY4LjhjMCwzNy45OTQ4IDMwLjgwNTIsNjguOCA2OC44LDY4LjhjMzcuOTk0OCwwIDY4LjgsLTMwLjgwNTIgNjguOCwtNjguOGMwLC0zNy45OTQ4IC0zMC44MDUyLC02OC44IC02OC44LC02OC44ek0xMjAuNCw5MS43MzMzM2gtMjguNjY2Njd2MjguNjY2NjdjMCwzLjE3MDUzIC0yLjU2ODUzLDUuNzMzMzMgLTUuNzMzMzMsNS43MzMzM2MtMy4xNjQ4LDAgLTUuNzMzMzMsLTIuNTYyOCAtNS43MzMzMywtNS43MzMzM3YtMjguNjY2NjdoLTI4LjY2NjY3Yy0zLjE2NDgsMCAtNS43MzMzMywtMi41NjI4IC01LjczMzMzLC01LjczMzMzYzAsLTMuMTcwNTMgMi41Njg1MywtNS43MzMzMyA1LjczMzMzLC01LjczMzMzaDI4LjY2NjY3di0yOC42NjY2N2MwLC0zLjE3MDUzIDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM2MzLjE2NDgsMCA1LjczMzMzLDIuNTYyOCA1LjczMzMzLDUuNzMzMzN2MjguNjY2NjdoMjguNjY2NjdjMy4xNjQ4LDAgNS43MzMzMywyLjU2MjggNS43MzMzMyw1LjczMzMzYzAsMy4xNzA1MyAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=",
          },
          {
            name: "One Day Shopping",
            url: "/#/",
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTE1MC41LDYzLjE1NjI1bC02NC41LC0yMi44NDM3NWwtNjQuNSwyMi44NDM3NXY4MC42MjVsNjQuNSwyMi44NDM3NWw2NC41LC0yMi44NDM3NXoiIGZpbGw9IiNiZmJmYmYiPjwvcGF0aD48cGF0aCBkPSJNMTUwLjUsNjMuMTU2MjVsLTY0LjUsLTIyLjg0Mzc1bC02NC41LDIyLjg0Mzc1djgwLjYyNWw2NC41LDIyLjg0Mzc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0yMS41LDYzLjE1NjI1bC0xNi4xMjUsMjYuODc1bDY0LjUsMjIuODQzNzVsMTYuMTI1LC0yNi44NzV6TTE1MC41LDYzLjE1NjI1bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik04Niw5MC4wMzEyNWMtMS42MTI1LDAgLTMuMjI1LC0xLjA3NSAtMy43NjI1LC0yLjY4NzVjLTAuODA2MjUsLTIuMTUgMC40MDMxMywtNC40MzQzOCAyLjQxODc1LC01LjEwNjI1bDY0LjUsLTIyLjg0Mzc1YzIuMTUsLTAuODA2MjUgNC40MzQzNywwLjQwMzEyIDUuMTA2MjUsMi40MTg3NWMwLjgwNjI1LDIuMTUgLTAuNDAzMTIsNC40MzQzOCAtMi40MTg3NSw1LjEwNjI1bC02NC41LDIyLjg0Mzc1Yy0wLjQwMzEzLDAuMTM0MzggLTAuOTQwNjIsMC4yNjg3NSAtMS4zNDM3NSwwLjI2ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwxNzAuNjU2MjVjLTAuODA2MjUsMCAtMS42MTI1LC0wLjI2ODc1IC0yLjI4NDM3LC0wLjY3MTg3Yy0xLjA3NSwtMC44MDYyNSAtMS43NDY4OCwtMi4wMTU2MiAtMS43NDY4OCwtMy4zNTkzN3YtMzguMDI4MTJjMCwtMi4yODQzOCAxLjc0Njg4LC00LjAzMTI1IDQuMDMxMjUsLTQuMDMxMjVjMi4yODQzNywwIDQuMDMxMjUsMS43NDY4OCA0LjAzMTI1LDQuMDMxMjV2MzIuMzg0MzhsNTYuNDM3NSwtMjAuMDIxODh2LTc3LjgwMzEyYzAsLTIuMjg0MzggMS43NDY4NywtNC4wMzEyNSA0LjAzMTI1LC00LjAzMTI1YzIuMjg0MzgsMCA0LjAzMTI1LDEuNzQ2ODcgNC4wMzEyNSw0LjAzMTI1djgwLjYyNWMwLDEuNzQ2ODcgLTEuMDc1LDMuMjI1IC0yLjY4NzUsMy43NjI1bC02NC41LDIyLjg0Mzc1Yy0wLjQwMzEzLDAuMTM0MzggLTAuOTQwNjIsMC4yNjg3NSAtMS4zNDM3NSwwLjI2ODc1eiIgZmlsbD0iIzQ0NGI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNTAuNSw2My4xNTYyNWwtNjQuNSwtMjIuODQzNzVNMTUwLjUsNjMuMTU2MjVsLTY0LjUsLTIyLjg0Mzc1TTg2LDg2bC02NC41LC0yMi44NDM3NSIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNy40Njg3NSwxNDMuNzgxMjVjMCwxLjc0Njg3IDEuMDc1LDMuMjI1IDIuNjg3NSwzLjc2MjVsNjQuNSwyMi44NDM3NWMwLjQwMzEzLDAuMTM0MzggMC45NDA2MiwwLjI2ODc1IDEuMzQzNzUsMC4yNjg3NWMxLjYxMjUsMCAzLjIyNSwtMS4wNzUgMy43NjI1LC0yLjY4NzVjMC44MDYyNSwtMi4xNSAtMC40MDMxMywtNC40MzQzNyAtMi40MTg3NSwtNS4xMDYyNWwtNjEuODEyNSwtMjEuOTAzMTN2LTQzLjgwNjI1bC04LjA2MjUsLTIuODIxODh6IiBmaWxsPSIjNDQ0YjU0Ij48L3BhdGg+PHBhdGggZD0iTTE2Ni42MjUsOTAuMDMxMjVsLTY0LjUsMjIuODQzNzVsLTE2LjEyNSwtMjYuODc1bDY0LjUsLTIyLjg0Mzc1eiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNzAuMTE4NzUsODguMDE1NjNsLTE2LjEyNSwtMjYuODc1bC0wLjEzNDM4LC0wLjEzNDM3YzAsLTAuMTM0MzggLTAuMTM0MzgsLTAuMTM0MzggLTAuMTM0MzgsLTAuMjY4NzVjLTAuMTM0MzcsLTAuMTM0MzggLTAuMTM0MzcsLTAuMjY4NzUgLTAuMjY4NzUsLTAuMjY4NzVjLTAuMTM0MzgsLTAuMTM0MzggLTAuMTM0MzgsLTAuMTM0MzggLTAuMjY4NzUsLTAuMjY4NzVjLTAuMTM0MzgsLTAuMTM0MzggLTAuMjY4NzUsLTAuMTM0MzggLTAuNDAzMTIsLTAuMjY4NzVjLTAuMTM0MzgsMCAtMC4xMzQzOCwtMC4xMzQzOCAtMC4yNjg3NSwtMC4xMzQzOGMtMC4yNjg3NSwtMC4xMzQzNyAtMC40MDMxMiwtMC4yNjg3NSAtMC42NzE4NywtMC4yNjg3NXYwbC02NC41LC0yMi44NDM3NWMtMC4yNjg3NSwtMC4xMzQzNyAtMC41Mzc1LC0wLjEzNDM3IC0wLjgwNjI1LC0wLjEzNDM3aC0wLjEzNDM3Yy0wLjI2ODc1LDAgLTAuNDAzMTMsMCAtMC42NzE4NywwYy0wLjEzNDM4LDAgLTAuMTM0MzgsMCAtMC4yNjg3NSwwYy0wLjI2ODc1LDAgLTAuNTM3NSwwLjEzNDM3IC0wLjgwNjI1LDAuMTM0MzdsLTY0LjUsMjIuODQzNzV2MGMwLDAgLTAuMTM0MzgsMCAtMC4xMzQzOCwwLjEzNDM4djBjLTAuMTM0MzcsMC4xMzQzNyAtMC40MDMxMiwwLjEzNDM3IC0wLjUzNzUsMC4yNjg3NXYwdjBjLTAuMjY4NzUsMC4xMzQzNyAtMC41Mzc1LDAuNDAzMTIgLTAuODA2MjUsMC42NzE4OHYwbC0wLjEzNDM3LDAuMTM0Mzd2MGMtMC4xMzQzNywwLjEzNDM4IC0wLjEzNDM3LDAuMjY4NzUgLTAuMjY4NzUsMC4yNjg3NXYwYzAsMCAwLDAgLTAuMTM0MzgsMC4xMzQzOGwtMTYuMTI1LDI2Ljg3NWMtMC42NzE4OCwwLjk0MDYyIC0wLjgwNjI1LDIuMjg0MzcgLTAuNDAzMTMsMy4zNTkzOGMwLjQwMzEyLDEuMDc1IDEuMzQzNzUsMi4wMTU2MyAyLjQxODc1LDIuNDE4NzVsNjQuNSwyMi44NDM3NWMwLjQwMzEzLDAuMTM0MzcgMC45NDA2MiwwLjI2ODc1IDEuMzQzNzUsMC4yNjg3NWMxLjM0Mzc1LDAgMi42ODc1LC0wLjY3MTg3IDMuNDkzNzUsLTIuMDE1NjJsMTIuNjMxMjUsLTIxLjA5Njg3bDEyLjYzMTI1LDIxLjA5Njg3YzAuODA2MjUsMS4zNDM3NSAyLjE1LDIuMDE1NjMgMy40OTM3NSwyLjAxNTYzYzAuNDAzMTMsMCAwLjk0MDYyLC0wLjEzNDM3IDEuMzQzNzUsLTAuMjY4NzVsNjQuNSwtMjIuODQzNzVjMS4wNzUsLTAuNDAzMTMgMi4wMTU2MywtMS4zNDM3NSAyLjQxODc1LC0yLjQxODc1YzAuNDAzMTMsLTEuMDc1IDAuMjY4NzUsLTIuNDE4NzUgLTAuMjY4NzUsLTMuMzU5Mzd6TTkwLjAzMTI1LDQ1Ljk1NjI1bDQ4LjM3NSwxNy4ybC00OC4zNzUsMTcuMnpNNjguMTI4MTMsMTA4LjAzNzVsLTU2LjcwNjI1LC0yMC4xNTYyNWwxMS45NTkzNywtMTkuODg3NWw1Ni43MDYyNSwyMC4xNTYyNXpNMTAzLjg3MTg4LDEwOC4wMzc1bC0xMS45NTkzOCwtMTkuODg3NWw1Ni43MDYyNSwtMjAuMTU2MjVsMTEuOTU5MzcsMTkuODg3NXoiIGZpbGw9IiM0NDRiNTQiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==",
          },
          {
            name: "Stories",
            url: "/#/",
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2JmYmZiZiI+PHBhdGggZD0iTTg2LDE3LjJjLTM3Ljk5NDgsMCAtNjguOCwzMC44MDUyIC02OC44LDY4LjhjMCwzNy45OTQ4IDMwLjgwNTIsNjguOCA2OC44LDY4LjhjMzcuOTk0OCwwIDY4LjgsLTMwLjgwNTIgNjguOCwtNjguOGMwLC0zNy45OTQ4IC0zMC44MDUyLC02OC44IC02OC44LC02OC44ek0xMjAuNCw5MS43MzMzM2gtMjguNjY2Njd2MjguNjY2NjdjMCwzLjE3MDUzIC0yLjU2ODUzLDUuNzMzMzMgLTUuNzMzMzMsNS43MzMzM2MtMy4xNjQ4LDAgLTUuNzMzMzMsLTIuNTYyOCAtNS43MzMzMywtNS43MzMzM3YtMjguNjY2NjdoLTI4LjY2NjY3Yy0zLjE2NDgsMCAtNS43MzMzMywtMi41NjI4IC01LjczMzMzLC01LjczMzMzYzAsLTMuMTcwNTMgMi41Njg1MywtNS43MzMzMyA1LjczMzMzLC01LjczMzMzaDI4LjY2NjY3di0yOC42NjY2N2MwLC0zLjE3MDUzIDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM2MzLjE2NDgsMCA1LjczMzMzLDIuNTYyOCA1LjczMzMzLDUuNzMzMzN2MjguNjY2NjdoMjguNjY2NjdjMy4xNjQ4LDAgNS43MzMzMywyLjU2MjggNS43MzMzMyw1LjczMzMzYzAsMy4xNzA1MyAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=",
          },
          {
            name: "My Account",
            url: "/#/",
            icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2JmYmZiZiI+PHBhdGggZD0iTTg2LDE3LjJjLTM3Ljk5NDgsMCAtNjguOCwzMC44MDUyIC02OC44LDY4LjhjMCwzNy45OTQ4IDMwLjgwNTIsNjguOCA2OC44LDY4LjhjMzcuOTk0OCwwIDY4LjgsLTMwLjgwNTIgNjguOCwtNjguOGMwLC0zNy45OTQ4IC0zMC44MDUyLC02OC44IC02OC44LC02OC44ek0xMjAuNCw5MS43MzMzM2gtMjguNjY2Njd2MjguNjY2NjdjMCwzLjE3MDUzIC0yLjU2ODUzLDUuNzMzMzMgLTUuNzMzMzMsNS43MzMzM2MtMy4xNjQ4LDAgLTUuNzMzMzMsLTIuNTYyOCAtNS43MzMzMywtNS43MzMzM3YtMjguNjY2NjdoLTI4LjY2NjY3Yy0zLjE2NDgsMCAtNS43MzMzMywtMi41NjI4IC01LjczMzMzLC01LjczMzMzYzAsLTMuMTcwNTMgMi41Njg1MywtNS43MzMzMyA1LjczMzMzLC01LjczMzMzaDI4LjY2NjY3di0yOC42NjY2N2MwLC0zLjE3MDUzIDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM2MzLjE2NDgsMCA1LjczMzMzLDIuNTYyOCA1LjczMzMzLDUuNzMzMzN2MjguNjY2NjdoMjguNjY2NjdjMy4xNjQ4LDAgNS43MzMzMywyLjU2MjggNS43MzMzMyw1LjczMzMzYzAsMy4xNzA1MyAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=",
          },
        ],
        j = {
          Earrings: {
            header: "Earrings",
            name: ["Studs", "Drop", "Ear Cuffs", "Huggies"],
          },
          Pendants: {
            header: "Pendants",
            name: ["Studs", "Drop", "Ear Cuffs", "Huggies"],
          },
          Rings: {
            header: "Rings",
            name: ["Studs", "Drop", "Ear Cuffs", "Huggies"],
          },
          "Nose Pins": {
            header: "Nose Pins",
            name: ["Studs", "Drop", "Ear Cuffs", "Huggies"],
          },
          "Banles Bracelets": {
            header: "Banles Bracelets",
            name: ["Studs", "Drop", "Ear Cuffs", "Huggies"],
          },
          "Solitaire Jewellery": {
            header: "Solitaire Jewellery",
            name: ["Studs", "Drop", "Ear Cuffs", "Huggies"],
          },
          "Gold Coins": {
            header: "Gold Coins",
            name: ["Studs", "Drop", "Ear Cuffs", "Huggies"],
          },
          Gifts: {
            header: "Gifts",
            name: ["Studs", "Drop", "Ear Cuffs", "Huggies"],
          },
          "By Colleactions": {
            header: "Under Rs 5000",
            name: ["Studs", "Drop", "Ear Cuffs", "Huggies"],
          },
          "By Price": {
            header: "Under Rs 5000",
            name: ["Pendants", "Earrings", "Rings", "Bracelets", "Nosepins"],
          },
          "By Themes ": {
            header: "By Themes ",
            name: ["Pendants", "Earrings", "Rings", "Bracelets", "Nosepins"],
          },
          "My Materials": {
            header: "Rs 5000 - Rs 10000 ",
            name: ["Pendants", "Earrings", "Rings", "Bracelets", "Nosepins"],
          },
        },
        y = {
          Jewellery: {
            Earrings: {
              name: "Earrings",
              url: "/earrings-jewellery",
              icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2JmYmZiZiI+PHBhdGggZD0iTTg2LDE3LjJjLTM3Ljk5NDgsMCAtNjguOCwzMC44MDUyIC02OC44LDY4LjhjMCwzNy45OTQ4IDMwLjgwNTIsNjguOCA2OC44LDY4LjhjMzcuOTk0OCwwIDY4LjgsLTMwLjgwNTIgNjguOCwtNjguOGMwLC0zNy45OTQ4IC0zMC44MDUyLC02OC44IC02OC44LC02OC44ek0xMjAuNCw5MS43MzMzM2gtMjguNjY2Njd2MjguNjY2NjdjMCwzLjE3MDUzIC0yLjU2ODUzLDUuNzMzMzMgLTUuNzMzMzMsNS43MzMzM2MtMy4xNjQ4LDAgLTUuNzMzMzMsLTIuNTYyOCAtNS43MzMzMywtNS43MzMzM3YtMjguNjY2NjdoLTI4LjY2NjY3Yy0zLjE2NDgsMCAtNS43MzMzMywtMi41NjI4IC01LjczMzMzLC01LjczMzMzYzAsLTMuMTcwNTMgMi41Njg1MywtNS43MzMzMyA1LjczMzMzLC01LjczMzMzaDI4LjY2NjY3di0yOC42NjY2N2MwLC0zLjE3MDUzIDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM2MzLjE2NDgsMCA1LjczMzMzLDIuNTYyOCA1LjczMzMzLDUuNzMzMzN2MjguNjY2NjdoMjguNjY2NjdjMy4xNjQ4LDAgNS43MzMzMywyLjU2MjggNS43MzMzMyw1LjczMzMzYzAsMy4xNzA1MyAtMi41Njg1Myw1LjczMzMzIC01LjczMzMzLDUuNzMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=",
            },
            Pendants: {
              name: "Pendants",
              url: "/pendants-jewellery",
              icon: "",
            },
            Rings: { name: "Rings", url: "/rings-jewellery", icon: "" },
            NosePins: {
              name: "Nose Pins",
              url: "/nose+pin+online-jewellery",
              icon: "",
            },
            BanlesBracelets: {
              name: "Bangles & Bracelets",
              url: "/bangles-jewellery",
              icon: "",
            },
            ByPrice: { name: "By Price", url: "/#/", icon: "" },
            ByCollections: { name: "By Collections", url: "/#/", icon: "" },
            MyMaterials: { name: "My Materials", url: "/#/", icon: "" },
          },
          Solitaires: {
            SolitaireJewellery: {
              name: "Solitaire Jewellery",
              url: "/solitaire-jewellery",
              icon: "",
            },
          },
          GoldCoins: { GoldCoin: { name: "Gold Coins", url: "/#/", icon: "" } },
          Gifts: {
            Gifts: { name: "Gifts", url: "/#/", icon: "" },
            ByPrice: { name: "By Price", url: "/#/", icon: "" },
          },
          Colleactions: {
            ByColleactions: { name: "By Colleactions", url: "/#/", icon: "" },
            ByThemes: { name: "By Themes", url: "/#/", icon: "" },
          },
          "My Account": {
            Login: { name: "Login", url: "/#/", icon: "" },
            Register: { name: "Register", url: "/#/", icon: "" },
          },
        },
        w = [
          { title: "Whats New", url: "" },
          { title: "Jewellery", url: "/jewellery" },
          { title: "Solitaires", url: "/solitaire-jewellery" },
          { title: "Gold Coins", url: "/jewellery" },
          { title: "Gifts", url: "" },
          { title: "Collections", url: "" },
          { title: "One Day Sipping", url: "" },
          { title: "Stories", url: "" },
        ],
        N = {
          Jewellery: {
            menuOne: [
              {
                value: "earings",
                title: "Earrings",
                url: "/earrings-jewellery",
              },
              {
                value: "pendants",
                title: "Pendants",
                url: "/pendants-jewellery",
              },
              { value: "rings", title: "Rings", url: "/rings-jewellery" },
              {
                value: "nosepins",
                title: "Nose pins",
                url: "/nose+pin+online-jewellery",
              },
              {
                value: "banglesbracelets",
                title: "Bangles & Bracelets",
                url: "/bangles-jewellery",
              },
            ],
            menuTwo: [
              { value: "Price", title: "By Price", url: "#Price" },
              { value: "Collection", title: "By Collection", url: "#" },
              { value: "Material", title: "By Material", url: "#" },
            ],
          },
          Solitaires: {
            menuOne: [
              {
                value: "solitairejewellery",
                title: " Solitaire Jewellery",
                url: "/solitaire-jewellery",
              },
            ],
          },
          Gifts: {
            menuOne: [
              { value: "occassion", title: "By Occassion", url: "#" },
              { value: "Price", title: "By Price", url: "#" },
            ],
          },
          Collections: {
            menuOne: [
              { value: "collections", title: "By Collections", url: "#" },
              { value: "themes", title: "By Themes", url: "" },
            ],
          },
        },
        h = {
          images: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/studs.jpg",
              title: "Breakfast",
              author: "jill111",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/drops.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/ear-cuffs.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/huggies.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/jhumkas.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/ear-jacket.jpg",
              title: "Tasty burger",
              author: "director90",
            },
          ],
          sideBanner: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/stylori_menu_banner01.jpg",
              title: "Breakfast",
              author: "jill111",
            },
          ],
        },
        I = {
          images: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/casual-rings.jpg",
              title: "Breakfast",
              author: "jill111",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/classic-rings.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/cocktail-rings.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/engagement-rings.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/fashion-rings.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/mens-rings.jpg",
              title: "Tasty burger",
              author: "director90",
            },
          ],
          sideBanner: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/stylori_menu_banner01.jpg",
              title: "Breakfast",
              author: "jill111",
            },
          ],
        },
        z = {
          images: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/casual-rings.jpg",
              title: "Breakfast",
              author: "jill111",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/classic-rings.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/cocktail-rings.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/engagement-rings.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/fashion-rings.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/mens-rings.jpg",
              title: "Tasty burger",
              author: "director90",
            },
          ],
          sideBanner: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/stylori_menu_banner01.jpg",
              title: "Breakfast",
              author: "jill111",
            },
          ],
        },
        L = {
          images: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/classic-pendants.jpg",
              title: "Breakfast",
              author: "jill111",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/casual-pendants.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/fashion-pendants.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/religious-pendants.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/tanmaniya-pendants.jpg",
              title: "Tasty burger",
              author: "director90",
            },
          ],
          sideBanner: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/stylori_butterfly_new_campaign_megamenu.png",
              title: "Breakfast",
              author: "jill111",
            },
          ],
        },
        S = {
          images: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/classic-nosepins.jpg",
              title: "Place your title of the image to display",
              url: "#",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/fashion-nosepins.jpg",
              title: "Place your title of the image to display",
              url: "#",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/stud-nosepins.jpg",
              title: "Place your title of the image to display",
              url: "#",
            },
          ],
          sideBanner: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/stylori_menu_banner01.jpg",
              title: "Place your title of the image to display",
              url: "#",
            },
          ],
        },
        C = {
          images: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/classic-nosepins.jpg",
              title: "Breakfast",
              author: "jill111",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/fashion-nosepins.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/stud-nosepins.jpg",
              title: "Tasty burger",
              author: "director90",
            },
          ],
          sideBanner: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/stylori_menu_banner01.jpg",
              title: "Breakfast",
              author: "jill111",
            },
          ],
        },
        f = {
          images: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/classic-nosepins.jpg",
              title: "Breakfast",
              author: "jill111",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/fashion-nosepins.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/stud-nosepins.jpg",
              title: "Tasty burger",
              author: "director90",
            },
          ],
          sideBanner: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/stylori_menu_banner01.jpg",
              title: "Breakfast",
              author: "jill111",
            },
          ],
        },
        b = {
          images: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/classic-pendants.jpg",
              title: "Breakfast",
              author: "jill111",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/casual-pendants.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/fashion-pendants.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/religious-pendants.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/tanmaniya-pendants.jpg",
              title: "Tasty burger",
              author: "director90",
            },
          ],
          sideBanner: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/stylori_butterfly_new_campaign_megamenu.png",
              title: "Breakfast",
              author: "jill111",
            },
          ],
        },
        T = {
          images: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/round-bangles.jpg",
              title: "Breakfast",
              author: "jill111",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/line-bracelets.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/oval-bangles.jpg",
              title: "Tasty burger",
              author: "director90",
            },
          ],
          sideBanner: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/stylori_menu_banner01.jpg",
              title: "Breakfast",
              author: "jill111",
            },
          ],
        },
        D = {
          images: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/round-bangles.jpg",
              title: "Breakfast",
              author: "jill111",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/line-bracelets.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/oval-bangles.jpg",
              title: "Tasty burger",
              author: "director90",
            },
          ],
          sideBanner: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/stylori_menu_banner01.jpg",
              title: "Breakfast",
              author: "jill111",
            },
          ],
        },
        A = {
          images: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/round-bangles.jpg",
              title: "Breakfast",
              author: "jill111",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/line-bracelets.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/oval-bangles.jpg",
              title: "Tasty burger",
              author: "director90",
            },
          ],
          sideBanner: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/stylori_menu_banner01.jpg",
              title: "Breakfast",
              author: "jill111",
            },
          ],
        },
        O = {
          images: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/round-bangles.jpg",
              title: "Breakfast",
              author: "jill111",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/line-bracelets.jpg",
              title: "Tasty burger",
              author: "director90",
            },
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/oval-bangles.jpg",
              title: "Tasty burger",
              author: "director90",
            },
          ],
          sideBanner: [
            {
              img: "https://assets-cdn.stylori.com/images/megamenu/stylori_menu_banner01.jpg",
              title: "Breakfast",
              author: "jill111",
            },
          ],
        },
        v = [
          {
            headers: "Under Rs 5000",
            view: "view all",
            items: ["Pendants", "Earrings", "Rings", "Bracelets", "Nosepins"],
          },
          {
            headers: "Rs 5000 - Rs 10000",
            view: "view all",
            items: ["Pendants", "Earrings", "Rings", "Bracelets", "Nosepins"],
          },
          {
            headers: "Rs 10000 to Rs 20000",
            view: "view all",
            items: ["Pendants", "Earrings", "Rings", "Bracelets", "Nosepins"],
          },
          {
            headers: "Above Rs 20000",
            view: "view all",
            items: ["Pendants", "Earrings", "Rings", "Bracelets", "Nosepins"],
          },
        ],
        k = [
          {
            img: "https://assets-cdn.stylori.com/223x132/images/megamenu/Carve.jpg",
            title: "Breakfast",
            author: "jill111",
          },
          {
            img: "https://assets-cdn.stylori.com/images/megamenu/stylori-blush-collection--collection-tab-223x132.jpg",
            title: "Tasty burger",
            author: "director90",
          },
          {
            img: "https://assets-cdn.stylori.com/images/megamenu/stylori-molecute-collections-tab-223x132.jpg",
            title: "Tasty burger",
            author: "director90",
          },
          {
            img: "https://assets-cdn.stylori.com/images/megamenu/stylori-gemstone-collections-tab-223x132-08.jpg",
            title: "Tasty burger",
            author: "director90",
          },
          {
            img: "https://assets-cdn.stylori.com/images/megamenu/stylori_mistletoe.jpg",
            title: "Tasty burger",
            author: "director90",
          },
          {
            img: "https://assets-cdn.stylori.com/images/megamenu/stylori_renaissance.jpg",
            title: "Tasty burger",
            author: "director90",
          },
          {
            img: "https://assets-cdn.stylori.com/images/megamenu/stylori_monsoon.jpg",
            title: "Tasty burger",
            author: "director90",
          },
          {
            img: "https://assets-cdn.stylori.com/images/megamenu/stylori_collection_summer.jpg",
            title: "Tasty burger",
            author: "director90",
          },
        ],
        E = [
          {
            headers: "Diamond",
            view: "view all",
            items: ["Pendants", "Earrings", "Rings", "Bracelets", "Nosepins"],
          },
          {
            headers: "Gold",
            view: "view all",
            items: ["Pendants", "Earrings", "Rings", "Bracelets", "Nosepins"],
          },
          {
            headers: "Gemstone",
            view: "view all",
            items: ["Pendants", "Earrings", "Rings", "Bracelets", "Nosepins"],
          },
          {
            headers: "Solitarie",
            view: "view all",
            items: ["Pendants", "Earrings", "Rings", "Bracelets", "Nosepins"],
          },
        ],
        Y = a(7),
        P = [
          { name: "Earrings", url: "/jewellery" },
          { name: "NECKLACE", url: "/goldcoins" },
          { name: "RINGS", url: "/collections" },
          { name: "BANGLES & BRACELETS", url: "/jewellery-shipping+in+1+day" },
          {
            name: "OTHER JEWELLERY",
            url: "/jewellery/kada/csk_kada?sku_id=1000000",
          },
          { name: "SOLITAIRE", url: "/jewellery/kada/csk_kada?sku_id=1000000" },
          { name: "SILVER", url: "/jewellery/kada/csk_kada?sku_id=1000000" },
          {
            name: "COLLECTIONS",
            url: "/jewellery/kada/csk_kada?sku_id=1000000",
          },
          {
            name: "SAVING SCHEME",
            url: "/jewellery/kada/csk_kada?sku_id=1000000",
          },
          { name: "STYLORI", url: "/jewellery/kada/csk_kada?sku_id=1000000" },
        ],
        U =
          ((u = {
            Earrings: {
              header: "Earrings",
              name: [
                { name: "Studs", url: "/studs+and+tops-jewellery" },
                { name: "Drop", url: "/drops-earrings-jewellery" },
                { name: "Ear Cuffs", url: "/ear+cuffs-earrings-jewellery" },
                { name: "Huggies", url: "/huggies-earrings-jewellery" },
                { name: "Jhumkas", url: "/jhumkas+online-earrings-jewellery" },
                { name: "Ear Jacket", url: "/ear+jacket-earrings-jewellery" },
              ],
            },
            Pendants: {
              header: "Pendants",
              name: [
                { name: "Classic", url: "/classic-pendants-jewellery" },
                { name: "Casual", url: "/casual-pendants-jewellery" },
                { name: "Fashion", url: "/fashion-pendants-jewellery" },
                { name: "Religious", url: "/religious-pendants-jewellery" },
                { name: "Tanmaniya", url: "/tanmaniya-pendants-jewellery" },
              ],
            },
            Rings: {
              header: "Rings",
              name: [
                { name: "Classic", url: "/classic-rings-jewellery" },
                { name: "Casual", url: "/casual-rings-jewellery" },
                { name: "Cocktail", url: "/cocktail-rings-jewellery" },
                { name: "Engagement", url: "/rings-jewellery-for+engagement" },
                { name: "Fashion", url: "/fashion-rings-jewellery" },
                { name: "Men's Ring", url: "/rings-jewellery-for+men" },
              ],
            },
            "Nose Pins": {
              header: "Nose Pins",
              name: [
                { name: "Classic", url: "/classic-nose+pin+online-jewellery" },
                { name: "Fashion", url: "/fashion-nose+pin+online-jewellery" },
                { name: "Stud Nose Pin", url: "/nose+studs+online-jewellery" },
              ],
            },
            "Bangles & Bracelets": {
              header: "Bangles Bracelets",
              name: [
                { name: "Bangles", url: "/bangles-jewellery" },
                { name: "Bracelets", url: "/bracelets-jewellery" },
                { name: "Oval Bracelets", url: "/oval+bracelets-jewellery" },
              ],
            },
            "By Price": {
              header: "By Price",
              name: [
                {
                  name: "Under Rs 5000",
                  url: "/jewellery?startprice=1000&endprice=5000",
                },
                {
                  name: "Rs 5000 - Rs 10000",
                  url: "/jewellery?startprice=5000&endprice=10000",
                },
                {
                  name: "Rs 10000 - Rs 20000",
                  url: "/jewellery?startprice=10000&endprice=20000",
                },
                {
                  name: "Above Rs 20000",
                  url: "/jewellery?startprice=10000&endprice=20000",
                },
              ],
            },
            "By Collections": {
              header: "By Collections",
              name: [
                {
                  name: "Carve",
                  url: "/jewellery-from+the+carve+collection?sort=latest",
                },
                { name: "Blush", url: "/jewellery-blush" },
                { name: "Molecute", url: "/jewellery-molecute+collection" },
                { name: "Gemstone", url: "/gemstone-jewellery?sort=latest" },
                {
                  name: "Mistletoe",
                  url: "/jewellery-from+mistletoe+collection",
                },
                {
                  name: "The Renaissance",
                  url: "/jewellery-from+the+renaissance+collection",
                },
                { name: "Monsoon", url: "/jewellery-from+monsoon+collection" },
                {
                  name: "Summer",
                  url: "/jewellery-from+the+summer+collection",
                },
              ],
            },
            "My Material": {
              header: "By Material",
              name: [
                { name: "Diamond", url: "/diamond-jewellery" },
                { name: "Gemstone", url: "/gemstone-jewellery" },
                { name: "Solitaire", url: "/solitaire-jewellery" },
              ],
            },
            "Silver Jewellery": {
              header: "Silver Jewellery",
              name: [
                {
                  name: "Earrings",
                  url: "stylori.net/silver-earrings-jewellery",
                },
                { name: "Rings", url: "stylori.net/silver-rings-jewellery" },
                {
                  name: "Pendants",
                  url: "stylori.net/silver-pendants-jewellery",
                },
              ],
            },
            "By design": {
              header: "By design",
              name: [
                { name: "Plain", url: "/plain-goldcoins" },
                { name: "Lakshmi", url: "/lakshmi-goldcoins" },
                { name: "Jesus", url: "/jesus-goldcoins" },
                { name: "Ganesh", url: "/ganesha-goldcoins" },
                { name: "Balaji ", url: "/balaji-goldcoins" },
              ],
            },
            "By Weight": {
              header: "By Weight",
              name: [
                { name: "1 Gram", url: "/1gm-goldcoins" },
                { name: "4 Grams", url: "/4gms-goldcoins" },
                { name: "8 Grams", url: "/8gms-goldcoins" },
                { name: "10 Grams", url: "/10gms-goldcoins" },
                { name: "20 Grams", url: "/20gms-goldcoins" },
                { name: "50 Grams", url: "/50gms-goldcoins" },
              ],
            },
            "By Purity": {
              header: "By Purity",
              name: [
                { name: "24 KT", url: "/24kt-goldcoins" },
                { name: "22 KT", url: "/22kt-goldcoins" },
              ],
            },
          }),
          Object(Y.a)(u, "By Collections", {
            header: "By Collections",
            name: [
              { name: "Halo", url: "/jewellery-from+halo+collection" },
              {
                name: "Daisy Days",
                url: "/jewellery-from+daisy+days+collection",
              },
              { name: "Monsoon", url: "/jewellery-from+monsoon+collection" },
              { name: "Mango", url: "/jewellery-from+the+summer+collection" },
              { name: "Blush", url: "/jewellery-blush" },
              { name: "Molecute", url: "/jewellery-molecute+collection" },
              { name: "Gemstone", url: "/gemstone-jewellery?sort=latest" },
              { name: "Butterfly", url: "/jewellery-butterfly?sort=latest" },
            ],
          }),
          Object(Y.a)(u, "By Theme", {
            header: "By Theme",
            name: [
              {
                name: "Carve",
                url: "/jewellery-from+the+carve+collection?sort=latest",
              },
              { name: "Cluster", url: "/cluster-jewellery" },
              { name: "Droplets", url: "/droplets-jewellery" },
              { name: "Waves", url: "/waves-jewellery" },
              { name: "Floral", url: "/floral-jewellery" },
              { name: "Hearts", url: "/hearts-jewellery" },
              { name: "Tiara", url: "/tiara-jewellery" },
              { name: "Hoops", url: "/hoops-jewellery" },
            ],
          }),
          u),
        x = {
          Earrings: {
            styles: {
              name: "SHOPS BY STYLE",
              img: [
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+330%402x.png",
                  content: "Studs",
                  url: "/studs-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/PRPpoy%402x.png",
                  content: "Drops",
                  url: "/drops-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/qyLKdg%402x.png",
                  content: "Jhumkas",
                  url: "/jhumkas+online-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/NDUTnF%402x.png",
                  content: "Earcuffs",
                  url: "/ear+cuffs-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/1SevWE%402x.png",
                  content: "Hoops & Huggies",
                  url: "/huggies-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/nkQJnj%402x.png",
                  content: "Kids Earrings",
                  url: "/ear+jacket-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/ZZJVeH%402x.png",
                  content: "Pearl earring",
                  url: "/ear+jacket-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/INe8h1%402x.png",
                  content: "LightWeight by Stylori",
                  url: "/ear+jacket-earrings-jewellery",
                },
              ],
            },
            stone: {
              name2: "SHOP BY STONE AND METAL",
              stone_metal: [
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+319.svg",
                  name: "Gemstone",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+321.svg",
                  name: "Diamond",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+325.svg",
                  name: "Solitaire",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Ellipse+3.svg",
                  name: "Platinum",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/BXoGgN.svg",
                  name: "Yellow Gold",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/BXoGgN.svg",
                  name: "White Gold",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/BXoGgN.svg",
                  name: "Rose Gold",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Path+423.svg",
                  name: "Silver by STYLORI",
                },
              ],
            },
            price: {
              name3: "SHOP BY PRICE",
              price: [
                { price: "Below -$1000" },
                { price: "$10000 -$250000" },
                { price: "$250000 - &50000" },
                { price: "Above -$1000" },
              ],
            },
          },
          SILVER: {
            styles: {
              name: "SILVER ARTICLES",
              img: [
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
                  content: "Kumkum Bharani",
                  url: "/jewellery-from+the+carve+collection?sort=latest",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
                  content: "Plates",
                  url: "/jewellery-blush",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
                  content: "Bowls",
                  url: "/jewellery-molecute+collection",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
                  content: "Kuthu Vilaku",
                  url: "/gemstone-jewellery?sort=latest",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
                  content: "Vilaku",
                  url: "/jewellery-from+mistletoe+collection",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
                  content: "Jothi",
                  url: "/jewellery-from+the+renaissance+collection",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
                  content: "Idols",
                  url: "/jewellery-from+monsoon+collection",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
                  content: "Coins",
                  url: "/jewellery-from+the+summer+collection",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
                  content: "Timblers",
                  url: "/jewellery-from+monsoon+collection",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/silver/yPTMge%402x.png",
                  content: "Young Ones",
                  url: "/jewellery-from+the+summer+collection",
                },
              ],
            },
            price: {
              name3: "CORPORATE GIFITNG",
              price: [
                { price: "Below -$1000" },
                { price: "$10000 -$250000" },
                { price: "$250000 - &50000" },
                { price: "Above -$1000" },
              ],
            },
            feature: {
              extrafeature: [
                {
                  name: "LEG CHAIN",
                  feature: [
                    "anglets",
                    "Metti",
                    "Velli pavai Set",
                    "Antique",
                    "others",
                  ],
                },
                {
                  name: "Furniture",
                  feature: [
                    "Chairs",
                    "Tables",
                    "center Tables",
                    "Sofa Sets",
                    "Others",
                  ],
                },
                { name: "TANJORE", feature: ["Photos", "others"] },
                {
                  name: "COLLECTIONS",
                  feature: [
                    "Dinner",
                    "Wedding",
                    "Grahapravesham",
                    "Recptions",
                    "Panchapatram",
                    "New Born",
                    "Pooja",
                    "Vattil",
                    "Tea/Coffe",
                  ],
                },
              ],
            },
          },
          "BANGLES & BRACELETS": {
            styles: {
              name: "SHOPS BY STYLE",
              img: [
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/bangles%26bracelets/5Zna1n%402x.png",
                  content: "Oval bracelts",
                  url: "/studs-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/bangles%26bracelets/6afKPj%402x.png",
                  content: "Tennies bracelets",
                  url: "/drops-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/bangles%26bracelets/GTmGEC%402x.png",
                  content: "LightWeight bangles",
                  url: "/ear+cuffs-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/bangles%26bracelets/yGnqN0%402x.png",
                  content: "Platinum Bracelets",
                  url: "/huggies-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/bangles%26bracelets/iYTHDb%402x.png",
                  content: "Mens bracelets",
                  url: "/jhumkas+online-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/bangles%26bracelets/MN2iaL%402x.png",
                  content: "Kids bangles",
                  url: "/ear+jacket-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/bangles%26bracelets/2wA3vs%402x.png",
                  content: "Lightweight by stylori",
                  url: "/ear+jacket-earrings-jewellery",
                },
              ],
            },
            stone: {
              name2: "SHOP BY STONE AND METAL",
              stone_metal: [
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+319.svg",
                  name: "Gemstone",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+321.svg",
                  name: "Diamond",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+325.svg",
                  name: "Solitaire",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Ellipse+3.svg",
                  name: "Platinum",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/BXoGgN.svg",
                  name: "Yellow Gold",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/BXoGgN.svg",
                  name: "White Gold",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/BXoGgN.svg",
                  name: "Rose Gold",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Path+423.svg",
                  name: "Silver by STYLORI",
                },
              ],
            },
            price: {
              name3: "SHOP BY PRICE",
              price: [
                { price: "Below -$1000" },
                { price: "$10000 -$250000" },
                { price: "$250000 - &50000" },
                { price: "Above -$1000" },
              ],
            },
          },
          RINGS: {
            styles: {
              name: "SHOPS BY STYLE",
              img: [
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/rings/hBk9ve%402x.png",
                  content: "Casual",
                  url: "/studs-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/rings/DzDcBv%402x.png",
                  content: "Cocktail",
                  url: "/drops-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/rings/Ul3xhG%402x.png",
                  content: "Fashion",
                  url: "/ear+cuffs-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/rings/xJu4r9%402x.png",
                  content: "Bridal",
                  url: "/huggies-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/rings/C1IQGq%402x.png",
                  content: "Platinum rings",
                  url: "/jhumkas+online-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/rings/YE4CnD%402x.png",
                  content: "Men's Rings",
                  url: "/ear+jacket-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/rings/JfQ2Pg%402x.png",
                  content: "Light weightby STYLORI",
                  url: "/ear+jacket-earrings-jewellery",
                },
              ],
            },
            stone: {
              name2: "SHOP BY STONE AND METAL",
              stone_metal: [
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+319.svg",
                  name: "Gemstone",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+321.svg",
                  name: "Diamond",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+325.svg",
                  name: "Solitaire",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Ellipse+3.svg",
                  name: "Platinum",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/BXoGgN.svg",
                  name: "Yellow Gold",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/BXoGgN.svg",
                  name: "White Gold",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/BXoGgN.svg",
                  name: "Rose Gold",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Path+423.svg",
                  name: "Silver by STYLORI",
                },
              ],
            },
            price: {
              name3: "SHOP BY PRICE",
              price: [
                { price: "Below -$1000" },
                { price: "$10000 -$250000" },
                { price: "$250000 - &50000" },
                { price: "Above -$1000" },
              ],
            },
          },
          COLLECTIONS: {
            styles: {
              name: "",
              img: [
                {
                  content: "Traditional Setting",
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/SqY6sJ%402x.png",
                },
                {
                  content: "Young Ones",
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/bvtACp%402x.png",
                },
                {
                  content: "Mens",
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/3keZ23%402x.png",
                },
                {
                  content: "Mayura",
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/XEwpui%402x.png",
                },
                {
                  content: "Fabula",
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/26P38o%402x.png",
                },
                {
                  content: "Muhurtham",
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/lMysCt%402x.png",
                },
                {
                  content: "Uncut",
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/z5pju4%402x.png",
                },
                { content: "Jadau", image: "" },
                {
                  content: "Nagas",
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/2FXfOD%402x.png",
                },
                {
                  content: "Rewind",
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/UmsWiC%402x.png",
                },
                {
                  content: "Strings",
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/xMJ8PJ%402x.png",
                },
                {
                  content: "Forevermark",
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/collecions/z6JNI6%402x.png",
                },
              ],
            },
          },
          GIFITING: {
            option: {
              option: [
                "Gifts for men",
                "Gifts for women",
                "Gifts for kids",
                "Gifts for wife",
                "Lightweight by STYLORI",
                "Silver by STYLORI",
              ],
            },
            price: {
              name3: "SHOP BY PRICE",
              price: [
                { price: "Below -$1000" },
                { price: "$10000 -$250000" },
                { price: "$250000 - &50000" },
                { price: "Above -$1000" },
              ],
            },
          },
          STYLORI: {
            option: {
              hr: "",
              option: ["STYLORI GOLDs", "STYLORI SILVER", "CSK MERCHANDISE"],
            },
          },
          SOLITAIRE: {
            styles: {
              name: "SHOPS BY STYLE",
              img: [
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/solitaire/Ul3xhG%402x.png",
                  content: "Rings",
                  url: "/studs-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/solitaire/Ul3xhG%402x.png",
                  content: "Earrings",
                  url: "/drops-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/solitaire/OxwFfP%402x.png",
                  content: "Necklace",
                  url: "/ear+cuffs-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/solitaire/MN2iaL%402x.png",
                  content: "Bangles & bracelets",
                  url: "/huggies-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/solitaire/1SevWE%402x.png",
                  content: "pendants",
                  url: "/jhumkas+online-earrings-jewellery",
                },
                {
                  img: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/solitaire/YE4CnD%402x.png",
                  content: "Men's Ring",
                  url: "/ear+jacket-earrings-jewellery",
                },
              ],
            },
            stone: {
              name2: "LOOSE DIAMONDS",
              stone_metal: [
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+319.svg",
                  name: "Gemstone",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+321.svg",
                  name: "Diamond",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Group+325.svg",
                  name: "Solitaire",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Ellipse+3.svg",
                  name: "Platinum",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/BXoGgN.svg",
                  name: "Yellow Gold",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/BXoGgN.svg",
                  name: "White Gold",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/BXoGgN.svg",
                  name: "Rose Gold",
                },
                {
                  icon: "https://s3-ap-southeast-1.amazonaws.com/media.nacjewellers.com/resources/static+page+images/home_web_header/earrings/Path+423.svg",
                  name: "Silver by STYLORI",
                },
              ],
            },
            price: {
              name3: "SHOP BY PRICE",
              price: [
                { price: "Below -$1000" },
                { price: "$10000 -$250000" },
                { price: "$250000 - &50000" },
                { price: "Above -$1000" },
              ],
            },
            option: {
              option: [
                "SOLITAIRE GUIDE",
                "DESIGN YOUR OWN",
                "KNOW YOUR SIZE",
                "SHOP ALL DESIGN",
              ],
            },
          },
          "SAVING SCHEME": {
            option: {
              hr: "",
              option: [
                "PAY NOW",
                "JOIN NOW",
                "NEW QUICK GOLD",
                "SUPER QUICK DIAMOND",
                "SUPER QUICK SILVER",
              ],
            },
          },
          "OTHER JEWELLERY": {
            price: {
              name3: "SHOP BY PRICE",
              price: [
                { price: "Below -$1000" },
                { price: "$10000 -$250000" },
                { price: "$250000 - &50000" },
                { price: "Above -$1000" },
              ],
            },
            feature: {
              extrafeature: [
                {
                  name: "NECKLACE",
                  feature: ["Short", "Long", "Layered", "Bridal"],
                },
                {
                  name: "PENDANTS",
                  feature: ["Casual", "Bridal", "Religious"],
                },
                {
                  name: "SHOP MORE",
                  feature: [
                    "Nose Pin",
                    "Chain",
                    "Platinum Brands",
                    "Bridal Accessories",
                    "Odiyanam",
                    "Anklets",
                  ],
                },
                { name: "STYLORI", feature: ["Gold & Diamonds", "Silver"] },
                { name: "GOLD COINS", feature: ["22ct", "24ct"] },
                {
                  name: "SHOP ALL JEWELLERY",
                  feature: ["For Men", "For Women", "For Kids"],
                },
              ],
            },
          },
        },
        B = [
          { title: "Earrings".toUpperCase(), url: "/earrings-jewellery" },
          { title: "Necklace".toUpperCase(), url: "/necklaces-jewellery" },
          { title: "Rings".toUpperCase(), url: "/rings-jewellery" },
          {
            title: "Bangles & Bracelets".toUpperCase(),
            url: "bangles-jewellery",
          },
          { title: "Other jewellery".toUpperCase(), url: "#" },
          { title: "Solitaire".toUpperCase(), url: "/solitaire-jewellery" },
          { title: "Silver".toUpperCase(), url: "#" },
          { title: "Collections".toUpperCase(), url: "/CollectionFullPage" },
          { title: "Saving scheme".toUpperCase(), url: "#" },
        ],
        G = {
          JEWELLERY: {
            menuOne: [
              {
                value: "earrings",
                title: "Earrings",
                url: "/earrings-jewellery",
                imgContainer: {
                  imageContainer: [
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Studs+Earrings+Stylori-01.png",
                      content: "Studs",
                      url: "/studs-earrings-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Drops+Earrings+Stylori-02.png",
                      content: "Drops",
                      url: "/drops-earrings-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Earcuffs+Earrings+Stylori-03.png",
                      content: "Earcuffs",
                      url: "/ear+cuffs-earrings-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Huggies+Earrings+Stylori-04.png",
                      content: "Huggies",
                      url: "/huggies-earrings-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Jhumkas+Earrings+Stylori-05.png",
                      content: "Jhumkas",
                      url: "/jhumkas+online-earrings-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Earrings/Ear+Jackets+Earrings+Stylori-06.png",
                      content: "Ear Jacket",
                      url: "/ear+jacket-earrings-jewellery",
                    },
                  ],
                },
              },
              {
                value: "pendants",
                title: "Pendants",
                url: "/pendants-jewellery",
                imgContainer: {
                  imageContainer: [
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Pendants/Classic+Pendants+Stylori-02.png",
                      content: "Classic",
                      url: "/classic-pendants-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Pendants/Casual+Pendants+Stylori-01.png",
                      content: "Casual",
                      url: "/casual-pendants-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Pendants/Fashion+Pendants+Stylori-03.png",
                      content: "Fashion",
                      url: "/fashion-pendants-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Pendants/Religious+Pendants+Stylori-04.png",
                      content: "Religious",
                      url: "/religious-pendants-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Pendants/Tanmaniya+Pendants+Stylori-05.png",
                      content: "Tanmaniya",
                      url: "/tanmaniya-pendants-jewellery",
                    },
                  ],
                },
              },
              {
                value: "rings",
                title: "Rings",
                url: "/rings-jewellery",
                imgContainer: {
                  imageContainer: [
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Rings/Classic+stylori+Rings-01.png",
                      content: "Classic",
                      url: "/classic-rings-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Rings/Casual+stylori+Rings-02.png",
                      content: "Casual",
                      url: "/casual-rings-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Rings/Cocktail+stylori+Rings-03.png",
                      content: "Cocktail",
                      url: "/cocktail-rings-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Rings/Engagement+stylori+Rings-04.png",
                      content: "Engagement",
                      url: "/rings-jewellery-for+engagement",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Rings/Fashion+stylori+Rings-05.png",
                      content: "Fashion",
                      url: "/fashion-rings-jewellery",
                    },
                  ],
                },
              },
              {
                value: "nosepins",
                title: "Nose pins",
                url: "/nose+pin+online-jewellery",
              },
              {
                value: "banglesbracelets",
                title: "Bangles & Bracelets",
                url: "/bangles-jewellery",
                imgContainer: {
                  imageContainer: [
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Bangles+and+Bracelets/Bangle+stylori+-02.png",
                      content: "Bangles",
                      url: "/bangles-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Bangles+and+Bracelets/Bracelet+stylori+Bracelets-01.png",
                      content: "Bracelets",
                      url: "/bracelets-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Bangles+and+Bracelets/Oval+Bracelet+stylori+-03.png",
                      content: "Oval Bracelets",
                      url: "/oval+bracelets-jewellery",
                    },
                  ],
                },
              },
            ],
            menuTwo: [
              {
                value: "Price",
                title: "By Price",
                url: "#Price",
                imgContainer: {
                  onlyText: [
                    {
                      content: "under 5000",
                      url: "/jewellery?startprice=1000&endprice=5000",
                    },
                    {
                      content: "5000-10000",
                      url: "/jewellery?startprice=5000&endprice=10000",
                    },
                    {
                      content: "10000-20000",
                      url: "/jewellery?startprice=10000&endprice=20000",
                    },
                    {
                      content: "above 20000",
                      url: "/jewellery?startprice=20000&endprice=500000",
                    },
                  ],
                },
              },
              {
                value: "Collection",
                title: "By Collection",
                url: "/collections",
                imgContainer: {
                  imageContainer: [
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Jewellery+by+Collections/Carve+Collection+Stylori-08.png",
                      content: "Carve",
                      url: "/jewellery-from+the+carve+collection?sort=latest",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Jewellery+by+Collections/Blush+Collection+Stylori+-.png",
                      content: "Blush",
                      url: "/jewellery-blush",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Jewellery+by+Collections/Molecute+Collection+Stylori+-01.png",
                      content: "Molecute",
                      url: "/jewellery-molecute+collection",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Jewellery+by+Collections/Gemstone+Collection+Stylori+-02.png",
                      content: "Gemstone",
                      url: "/gemstone-jewellery?sort=latest",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Jewellery+by+Collections/Mistletoe+Collection+Stylori-01.png",
                      content: "Mistletoe",
                      url: "/jewellery-from+mistletoe+collection",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Jewellery+by+Collections/Renaissance+Collection+Stylori+-04.png",
                      content: "The Renaissance",
                      url: "/jewellery-from+the+renaissance+collection",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Jewellery+by+Collections/Monsoon+Collection+Stylori-02.png",
                      content: "Monsoon",
                      url: "/jewellery-from+monsoon+collection",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Jewellery/Jewellery+by+Collections/Summer+Collection+Stylori-06.png",
                      content: "Summer",
                      url: "/jewellery-from+the+summer+collection",
                    },
                  ],
                },
              },
              {
                value: "Material",
                title: "By Material",
                url: "#",
                imgContainer: {
                  onlyText: [
                    { content: "Diamond", url: "/diamond-jewellery" },
                    { content: "Gemstone", url: "/gemstone-jewellery" },
                    { content: "Solitaire", url: "/solitaire-jewellery" },
                  ],
                },
              },
            ],
          },
          SILVER: {
            menuOne: [
              {
                value: "silverjewellery",
                title: "Silver Jewellery",
                url: "/silver-jewellery",
                imgContainer: {
                  imageContainer: [
                    {
                      img: "https://assets-cdn.stylori.com/276x276/images/product/SE0889/SE0889-1Y.jpg",
                      content: "Earrings",
                      url: "/silver-earrings-jewellery",
                    },
                    {
                      img: "https://assets-cdn.stylori.com/296x296/images/product/SR0201/SR0201-1YW.jpg",
                      content: "Rings",
                      url: "/silver-rings-jewellery",
                    },
                    {
                      img: "https://assets-cdn.stylori.com/276x276/images/product/SE1025/SE1025-1Y.jpg",
                      content: "Pendants",
                      url: "/silver-pendants-jewellery",
                    },
                  ],
                },
              },
            ],
          },
          GOLDCOINS: {
            menuOne: [
              {
                value: "bydesign",
                title: "By design",
                url: "#Bydesign",
                imgContainer: {
                  imageContainer: [
                    {
                      img: "https://assets.stylori.com/images/Menu/Gold+Coins/By+Design/Plain+Gold+Coins-01.png",
                      content: "Plain",
                      url: "/plain-goldcoins",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Gold+Coins/By+Design/Lakshmi+Gold+Coins-03.png",
                      content: "Lakshmi",
                      url: "/lakshmi-goldcoins",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Gold+Coins/By+Design/Jesus+Gold+Coins-07.png",
                      content: "Jesus",
                      url: "/jesus-goldcoins",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Gold+Coins/By+Design/Ganesha+Gold+Coins-04.png",
                      content: "Ganesh",
                      url: "/ganesha-goldcoins",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Gold+Coins/By+Design/Balaji+Gold+Coins-08.png",
                      content: "Balaji",
                      url: "/balaji-goldcoins",
                    },
                  ],
                },
              },
              {
                value: "byweight",
                title: "By Weight",
                url: "#",
                imgContainer: {
                  imageContainer: [
                    {
                      img: "https://assets.stylori.com/images/Menu/Gold+Coins/By+Weight/1+gm+Gold+Coins-07.png",
                      content: "1 Gram",
                      url: "/1gm-goldcoins",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Gold+Coins/By+Weight/4gm+Gold+Coins-04.png",
                      content: "4 Grams",
                      url: "/4gms-goldcoins",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Gold+Coins/By+Weight/8+gm+Gold+Coins-01.png",
                      content: "8 Grams",
                      url: "/8gms-goldcoins",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Gold+Coins/By+Weight/10+gm+Gold+Coins-03.png",
                      content: "10 Grams",
                      url: "/10gms-goldcoins",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Gold+Coins/By+Weight/20+gm+Gold+Coins-08.png",
                      content: "20 Grams",
                      url: "/20gms-goldcoins",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Gold+Coins/By+Weight/50gm+Gold+Coins-01.png",
                      content: "50 Grams",
                      url: "/50gms-goldcoins",
                    },
                  ],
                },
              },
              {
                value: "bypurity",
                title: "By Purity",
                url: "#",
                imgContainer: {
                  imageContainer: [
                    {
                      img: "https://assets.stylori.com/images/Menu/Gold+Coins/By+Purity/24kt+Gold+Coins-03.png",
                      content: "24 KT",
                      url: "/24kt-goldcoins",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Gold+Coins/By+Purity/22kt+Gold+Coins-04.png",
                      content: "22 KT",
                      url: "/22kt-goldcoins",
                    },
                  ],
                },
              },
            ],
          },
          COLLECTIONS: {
            menuOne: [
              {
                value: "bycollections",
                title: "By Collections",
                url: "/CollectionFullPage",
                imgContainer: {
                  imageContainer: [
                    {
                      img: "https://assets.stylori.com/images/Menu/Collections/By+Collections/Halo+Collection+Stylori+-06.png",
                      content: "Halo",
                      url: "/jewellery-from+halo+collection",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Collections/By+Collections/Daisy+Days++Collection+Stylori+-05.png",
                      content: "Daisy Days",
                      url: "/jewellery-from+daisy+days+collection",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Collections/By+Collections/Monsoon+Collection+Stylori-02.png",
                      content: "Monsoon",
                      url: "/jewellery-from+monsoon+collection",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Collections/By+Collections/Mango+Collection+Stylori-01.png",
                      content: "Mango",
                      url: "/jewellery-from+the+summer+collection",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Collections/By+Collections/Blush+Collection+Stylori+-03.png",
                      content: "Blush",
                      url: "/jewellery-blush",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Collections/By+Collections/Molecute+Collection+Stylori+-01.png",
                      content: "Molecute",
                      url: "/jewellery-molecute+collection",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Collections/By+Collections/Gemstone+Collection+Stylori+-02.png",
                      content: "Gemstone",
                      url: "/gemstone-jewellery?sort=latest",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Collections/By+Collections/Butterfly+Collection+Stylori.png",
                      content: "Butterfly",
                      url: "/jewellery-butterfly?sort=latest",
                    },
                  ],
                },
              },
              {
                value: "bytheme",
                title: "By Theme",
                url: "#",
                imgContainer: {
                  imageContainer: [
                    {
                      img: "https://assets.stylori.com/images/Menu/Collections/By+Themes/Carve+Theme+Stylori-08.png",
                      content: "Carve",
                      url: "/jewellery-from+the+carve+collection?sort=latest",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Collections/By+Themes/Cluster+Theme+Stylori-06.png",
                      content: "Cluster",
                      url: "/cluster-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Collections/By+Themes/Droplets+Theme+Stylori-02.png",
                      content: "Droplets",
                      url: "/droplets-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Collections/By+Themes/Waves+Theme+Stylori-05.png",
                      content: "Waves",
                      url: "/waves-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Collections/By+Themes/Floral+Theme+Stylori-07.png",
                      content: "Floral",
                      url: "/floral-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Collections/By+Themes/Hearts+Theme+Stylori-03.png",
                      content: "Hearts",
                      url: "/hearts-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Collections/By+Themes/Tiara+Theme+Stylori-04.png",
                      content: "Tiara",
                      url: "/tiara-jewellery",
                    },
                    {
                      img: "https://assets.stylori.com/images/Menu/Collections/By+Themes/Hoops+Theme+Stylori-01.png",
                      content: "Hoops",
                      url: "/hoops-jewellery",
                    },
                  ],
                },
              },
            ],
          },
        },
        R = a(2),
        J = [
          { res: "318x318", size: "375w" },
          { res: "372x372", size: "500w" },
          { res: "276x276", size: "1440w" },
          { res: "422x422", size: "600w" },
          { res: "247x247", size: "768w" },
          { res: "204x204", size: "1024w" },
          { res: "543x543", size: "2560w" },
        ],
        Q = function (e) {
          return J.map(function (t) {
            return Object(R.a)(
              Object(R.a)({}, t),
              {},
              {
                img: ""
                  .concat("https://assets-cdn.stylori.com/")
                  .concat(t.res)
                  .concat(e),
              }
            );
          });
        },
        W = [
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE0262/SE0262-1Y.jpg"),
              hoverImage: Q("/images/product/SE0262/HOVER-SE0262-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE0262/SE0262-1Y.jpg"),
              hoverImage: Q("/images/product/SE0262/HOVER-SE0262-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE1610/SE1610-1Y.jpg"),
              hoverImage: Q("/images/product/SE1610/SE1610-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SR0864/SR0864-1Y.jpg"),
              hoverImage: Q("/images/product/SR0864/HOVER-SR0864-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE0904/SE0904-1Y.jpg"),
              hoverImage: Q("/images/product/SE0904/HOVER-SE0904-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE1596/SE1596-1W.jpg"),
              hoverImage: Q("/images/product/SE1596/SE1596-2W.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE0262/SE0262-1Y.jpg"),
              hoverImage: Q("/images/product/SE0262/HOVER-SE0262-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE1616/SE1616-1Y.jpg"),
              hoverImage: Q("/images/product/SE1616/SE1616-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE0262/SE0262-1Y.jpg"),
              hoverImage: Q("/images/product/SE0262/HOVER-SE0262-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE0262/SE0262-1Y.jpg"),
              hoverImage: Q("/images/product/SE0262/HOVER-SE0262-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SR0320/SR0320-1YW.jpg"),
              hoverImage: Q("/images/product/SR0320/HOVER-SR0320-2YW.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE0262/SE0262-1Y.jpg"),
              hoverImage: Q("/images/product/SE0262/HOVER-SE0262-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE0262/SE0262-1Y.jpg"),
              hoverImage: Q("/images/product/SE0262/HOVER-SE0262-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE0262/SE0262-1Y.jpg"),
              hoverImage: Q("/images/product/SE0262/HOVER-SE0262-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE0262/SE0262-1Y.jpg"),
              hoverImage: Q("/images/product/SE0262/HOVER-SE0262-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE0262/SE0262-1Y.jpg"),
              hoverImage: Q("/images/product/SE0262/HOVER-SE0262-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE0262/SE0262-1Y.jpg"),
              hoverImage: Q("/images/product/SE0262/HOVER-SE0262-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE0262/SE0262-1Y.jpg"),
              hoverImage: Q("/images/product/SE0262/HOVER-SE0262-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE0262/SE0262-1Y.jpg"),
              hoverImage: Q("/images/product/SE0262/HOVER-SE0262-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE0262/SE0262-1Y.jpg"),
              hoverImage: Q("/images/product/SE0262/HOVER-SE0262-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE0262/SE0262-1Y.jpg"),
              hoverImage: Q("/images/product/SE0262/HOVER-SE0262-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE0262/SE0262-1Y.jpg"),
              hoverImage: Q("/images/product/SE0262/HOVER-SE0262-2Y.jpg"),
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            save: "5999.9",
            image: {
              placeImage: Q("/images/product/SE0262/SE0262-1Y.jpg"),
              hoverImage: Q("/images/product/SE0262/HOVER-SE0262-2Y.jpg"),
            },
          },
        ],
        Z = [
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            dis: "Pendants set in 18 Kt Yellow Gold 3.95 gm with Diamonds (0.52 ct, GH - SI )",
            save: "5999.9",
            image: {
              placeImage:
                "https://assets-cdn.stylori.com/313x313/images/product/SE0176/SE0176-1R.jpg",
              hoverImage:
                "https://assets-cdn.stylori.com/313x313/images/product/SE0176/HOVER-SE0176-2R.jpg",
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Gold Jewellery, Diamond Bracelets, Gold Bracelets",
            dis: "Pendants set in 18 Kt Yellow Gold 3.95 gm with Diamonds (0.52 ct, GH - SI )",
            save: "5999.9",
            image: {
              placeImage:
                "https://assets-cdn.stylori.com/313x313/images/product/SE0176/SE0176-1R.jpg",
              hoverImage:
                "https://assets-cdn.stylori.com/313x313/images/product/SE0176/HOVER-SE0176-2R.jpg",
            },
          },
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            dis: "Pendants set in 18 Kt Yellow Gold 3.95 gm with Diamonds (0.52 ct, GH - SI )",
            save: "5999.9",
            image: {
              placeImage:
                "https://assets-cdn.stylori.com/313x313/images/product/SE0176/SE0176-1R.jpg",
              hoverImage:
                "https://assets-cdn.stylori.com/313x313/images/product/SE0176/HOVER-SE0176-2R.jpg",
            },
          },
        ],
        _ = [
          {
            header: "Product Details",
            namedetail: [
              { name: "Product Code", details: "SP0-110000" },
              { name: "Metal Type", details: "18K Yellow Gold" },
              { name: "Approximate", details: "1.463" },
            ],
          },
          {
            header: "Diamond Details ",
            namedetail: [
              { name: "Total No of " },
              { name: "Diamonds", details: "35" },
              { name: "Color", details: "IF" },
              { name: "Clarity", details: "SI" },
            ],
          },
          {
            header: "Price Breakup",
            namedetail: [
              { name: "Metal", details: "SP0679-18110000" },
              { name: "Diamond", details: "18K Yellow Gold" },
              { name: "Making Charges", details: "1.463" },
              { name: "GST", details: "1.463" },
            ],
          },
        ],
        V = [
          {
            header:
              "Pendants set in 18 Kt Gold 1.46 gm with Diamonds (0.04 ct, IJ - SI ) ",
            name: [
              "#EveryDay",
              "#Female",
              "#THree Stone",
              "#Spots",
              "#Special Occasion",
              "#Designer",
              "#Essentails",
              "#EveryDay",
              "#Female",
              "#THree Stone",
              "#Spots",
              "#Special Occasion",
              "#Designer",
              "#Essentails",
            ],
          },
        ],
        H = [
          {
            name: "From the House of NAC",
            icon: "https://img.icons8.com/wired/64/000000/diamond.png",
            url: "/#/",
          },
          {
            name: "Quality Assurance",
            icon: "https://img.icons8.com/wired/64/000000/diamond.png",
            url: "/#/",
          },
          {
            name: "Easy Returns",
            url: "/#/",
            icon: "https://img.icons8.com/wired/64/000000/diamond.png",
          },
          {
            name: "Diverse Styles",
            url: "/#/",
            icon: "https://img.icons8.com/wired/64/000000/diamond.png",
          },
          {
            name: "Secure Payments",
            url: "/#/",
            icon: "https://img.icons8.com/wired/64/000000/diamond.png",
          },
          {
            name: "Gold Coins",
            url: "/#/",
            icon: "https://img.icons8.com/wired/64/000000/diamond.png",
          },
        ],
        F = [
          {
            tab1: {
              header: "Ring Size",
              headerBangle: "Bangle Size",
              Children: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
              ],
            },
            tab2: {
              header: "Metal Purity",
              Children: [
                {
                  name: "18k Yellow",
                  icon: "https://img.icons8.com/color/48/000000/gold-bars.png",
                },
                {
                  name: "18k Yellow",
                  icon: "https://img.icons8.com/color/48/000000/gold-bars.png",
                },
                {
                  name: "18k Yellow",
                  icon: "https://img.icons8.com/color/48/000000/gold-bars.png",
                },
              ],
            },
            tab3: {
              header: "Diamond Clarity",
              Children: [
                {
                  name: "SU 9IM",
                  icon: "https://img.icons8.com/color/48/000000/gold-bars.png",
                },
                {
                  name: "SU 9IM",
                  icon: "https://img.icons8.com/color/48/000000/gold-bars.png",
                },
              ],
            },
          },
        ],
        X = [
          {
            telephone: "98-554-54-54554",
            phonenum: "+91 7864697459",
            chat: "Chat",
            shipby: "SHIPS BY 31 Jul 2019",
          },
        ],
        q = [
          {
            header: "Certification",
            img1: "https://assets.stylori.com/images/static/Logo1.png",
            img2: "https://assets.stylori.com/images/static/Logo3.png",
            img3: "https://assets.stylori.com/images/static/Logo2.png",
            img4: "https://assets.stylori.com/images/static/Logo4.png",
            img5: "https://assets.stylori.com/images/static/certificate4.jpg",
          },
        ],
        K = [
          "https://images7.alphacoders.com/421/421542.jpg ",
          "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
          "https://assets-cdn.stylori.com/500x500/images/product/SR0911/SR0911-1Y.jpg",
          "https://assets-cdn.stylori.com/500x500/images/product/SR0832/SR0832-1Y.jpg ",
          "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
          "https://images7.alphacoders.com/421/421542.jpg ",
        ],
        $ = [
          {
            img: "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
            title: "Diamond And Gold Floral Ring",
            price: "98.89789",
          },
          {
            img: "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
            title: "You recently viewed",
            price: "98.89789",
          },
          {
            img: "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
            title: "You recently viewed",
            price: "98.89789",
          },
          {
            img: "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
            title: "You recently viewed",
            price: "98.89789",
          },
          {
            img: "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
            title: "You recently viewed",
            price: "98.89789",
          },
          {
            img: "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
            title: "You recently viewed",
            price: "98.89789",
          },
          {
            img: "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
            title: "You recently viewed",
            price: "98.89789",
          },
          {
            img: "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
            title: "You recently viewed",
            price: "98.89789",
          },
        ],
        ee = [
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            dis: "Pendants set in 18 Kt Yellow Gold 3.95 gm with Diamonds (0.52 ct, GH - SI )",
            save: "5999.9",
            image: {
              placeImage:
                "https://assets-cdn.stylori.com/313x313/images/product/SE0176/SE0176-1R.jpg",
              hoverImage:
                "https://assets-cdn.stylori.com/313x313/images/product/SE0176/HOVER-SE0176-2R.jpg",
            },
          },
        ],
        te = [
          {
            header: "Product Details",
            namedetail: [
              { name: "Product Code", details: "SP0-110000" },
              { name: "Metal Type", details: "18K Yellow Gold" },
              { name: "Approximate", details: "1.463" },
            ],
          },
          {
            header: "Diamond Details ",
            namedetail: [
              { name: "Total No of " },
              { name: "Diamonds", details: "35" },
              { name: "Color", details: "IF" },
              { name: "Clarity", details: "SI" },
            ],
          },
          {
            header: "Price Breakup",
            namedetail: [
              { name: "Metal", details: "SP0679-18110000" },
              { name: "Diamond", details: "18K Yellow Gold" },
              { name: "Making Charges", details: "1.463" },
              { name: "GST", details: "1.463" },
            ],
          },
        ],
        ae = [
          {
            offerPrice: "23000.10",
            price: "29000.0",
            title: "Diamond Pendant Ring",
            dis: "Pendants set in 18 Kt Yellow Gold 3.95 gm with Diamonds (0.52 ct, GH - SI )",
            save: "5999.9",
            image: {
              placeImage:
                "https://assets-cdn.stylori.com/313x313/images/product/SE0176/SE0176-1R.jpg",
              hoverImage:
                "https://assets-cdn.stylori.com/313x313/images/product/SE0176/HOVER-SE0176-2R.jpg",
            },
          },
        ],
        se = [
          "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
          "https://images7.alphacoders.com/421/421542.jpg ",
          "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
          "https://images7.alphacoders.com/421/421542.jpg ",
          "http://www.voguediamond.co.uk/uploads/voguediamond/product_168_3657550958c487cc8.jpg",
          "https://images7.alphacoders.com/421/421542.jpg ",
        ],
        ne = [
          "Shopping Bag",
          "Login/ Register",
          "Address Detail",
          "Payment Options",
          "Order Confirmation",
        ],
        ie = [
          {
            name: "100% Certified   Jewellery  ",
            icon: "https://assets.stylori.com/images/static/icon-star.png",
          },
          {
            name: " Secure  Payments   ",
            icon: "https://assets.stylori.com/images/static/icon-lock.png",
          },
          {
            name: "  Free Insured    Shipping   ",
            icon: "https://assets.stylori.com/images/static/icon-van.png",
          },
          {
            name: "  25 - Day   Returns   ",
            icon: "https://assets.stylori.com/images/static/icon-return.png",
          },
        ],
        re = [
          {
            title: "New to Stylori?",
            dis: "Register now",
            button: "Register",
            buttonval: "Register",
          },
          {
            title: "Already Registered? ",
            dis: "Login now",
            buttonval: "Login",
            button: "Login",
          },
          {
            title: "Skip Password and continue as Guest ",
            dis: "(You will need to be logged in to use Promo code)",
            button: "Continue",
            buttonval: "Continue as a Guest ",
          },
        ],
        oe = a(28),
        ce = a.n(oe),
        le = a(39),
        ue = a.n(le),
        ge = a(29),
        me = a.n(ge),
        de = a(40),
        Me = a.n(de),
        pe = a(74),
        je = a.n(pe),
        ye = a(75),
        we = a.n(ye),
        Ne = a(76),
        he = a.n(Ne),
        Ie = a(77),
        ze = a.n(Ie),
        Le = [
          {
            settings: {
              dots: !1,
              infinite: !1,
              autoplay: !1,
              speed: !1,
              fade: !1,
              arrows: !1,
              arrowsImg: !1,
              dotsClass: "slickdev",
              accessibility: !1,
              centerMode: !1,
              focusOnSelect: !1,
              pauseOnHover: !1,
              pauseOnDotsHover: !1,
              pauseOnFocus: !1,
              swipe: !1,
            },
            images: [
              "https://assets-cdn.stylori.com/images/banners/stylori---rings-collection-promo-web.jpg",
              "https://assets-cdn.stylori.com/images/banners/pendent-banner-stylori-web.jpg",
            ],
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic .",
          },
        ],
        Se = [
          {
            img: "".concat(ce.a),
            title: "EVERYDAY",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
            price: "98.89789",
          },
          {
            img: "".concat(ue.a),
            title: "FOLKLORE",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
            price: "98.89789",
          },
          {
            img: "".concat(me.a),
            title: "CONTEMPORARY",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
            price: "98.89789",
          },
          {
            img: "".concat(Me.a),
            title: "TRADITIONAL",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
            price: "98.89789",
          },
        ],
        Ce = ["TOP PICKS", "FEATURED", "TESTIMONIALS"],
        fe = [
          {
            img: je.a,
            title: "Pretty Adonments Silver Pendant",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
            price: "5800",
          },
          {
            img: we.a,
            title: "FOLKLORE",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
            price: "3200",
          },
          {
            img: he.a,
            title: "CONTEMPORARY",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
            price: "2000",
          },
          {
            img: ze.a,
            title: "TRADITIONAL",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
            price: "800",
          },
          {
            img: "https://assets-cdn.stylori.com/552x276/images/homepage/Stylori_ Daisy Days.jpg",
            title: "TRADITIONAL",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
            price: "900",
          },
        ],
        be = [
          {
            settings: {
              dots: !0,
              infinite: !0,
              autoplay: !1,
              speed: 2e3,
              fade: !1,
              arrows: !1,
              dotsClass: "featureCarousel",
            },
            images: [
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGz1FUstJfK3dnfx9FyuLVnGMBLIuP49KwoYzp6DOuJZNzlAWr",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGz1FUstJfK3dnfx9FyuLVnGMBLIuP49KwoYzp6DOuJZNzlAWr",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGz1FUstJfK3dnfx9FyuLVnGMBLIuP49KwoYzp6DOuJZNzlAWr",
            ],
          },
        ],
        Te = [
          {
            settings: {
              dots: !0,
              infinite: !0,
              autoplay: !1,
              speed: 1e3,
              fade: !1,
              arrows: !1,
              dotsClass: "featureCarousel",
            },
            images: [
              {
                Content:
                  "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
                name: "Selvan",
                location: "Chennai",
              },
              {
                Content:
                  "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ",
                name: "Baskar",
                location: "Chennai",
              },
              {
                Content:
                  "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ",
                name: "Avinash avi",
                location: "Chennai",
              },
            ],
          },
        ],
        De = (a(63), a(59));
      a.d(t, "c", function () {
        return Ae;
      }),
        a.d(t, "d", function () {
          return Oe;
        }),
        a.d(t, "b", function () {
          return ve;
        }),
        a.d(t, "e", function () {
          return ke;
        }),
        a.d(t, "a", function () {
          return Ee;
        }),
        a.d(t, "f", function () {
          return Ye;
        });
      var Ae = (function () {
          var e = Object(d.a)(
            m.a.mark(function e(t) {
              return m.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt("return", JSON.parse(JSON.stringify(M)));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Oe = (function () {
          var e = Object(d.a)(
            m.a.mark(function e(t) {
              return m.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt("return", JSON.parse(JSON.stringify(s)));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        ve = (function () {
          var e = Object(d.a)(
            m.a.mark(function e(t) {
              return m.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt("return", JSON.parse(JSON.stringify(c)));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        ke = (function () {
          var e = Object(d.a)(
            m.a.mark(function e(t) {
              return m.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt("return", JSON.parse(JSON.stringify(n)));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Ee = (function () {
          var e = Object(d.a)(
            m.a.mark(function e(t) {
              return m.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt("return", JSON.parse(JSON.stringify(l)));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Ye = (function () {
          var e = Object(d.a)(
            m.a.mark(function e(t) {
              return m.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt("return", JSON.parse(JSON.stringify(De)));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
    },
    function (e, t, a) {},
    function (e, t, a) {},
    ,
    function (e, t, a) {
      e.exports = a(97);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a(0),
        n = a.n(s),
        i = a(49),
        r = a.n(i),
        o = a(14),
        c = a(1),
        l = a.n(c),
        u = a(4),
        g = a(45),
        m = a(46),
        d = a(48),
        M = a(47),
        p = a(24),
        j = (a(81), a(60)),
        y = a(105),
        w = a(108),
        N = a(19),
        h = a(107),
        I =
          (a(64),
          {
            palette: {
              common: { black: "#000", white: "#fff" },
              background: {
                paper: "#fff",
                default: "#FAFAFA",
                fade: "#6e6d72",
                darkFade: "#59595b",
              },
              badgeColor: { background: "#2F348B" },
              primary: {
                light: "#03b362",
                main: "#F37536",
                dark: "#027741",
                contrastText: "#fff",
              },
              secondary: {
                light: "#4949d8",
                main: "#33346d",
                dark: "#2F348B",
                lightFirst: "rgba(246, 153, 163, 1)",
                mainFirst: "rgba(241, 72, 128, 1)",
                darkFirst: "rgba(234, 83, 129, 1)",
                contrastText: "#fff",
              },
              gold: { main: "#b78231" },
              darkGray: { main: "#6e6d72" },
              stylori: { pinkMain: "#ed1165" },
              typography: { fontFamily: "notoSerif-regular, Arial" },
              overrides: {
                MuiCssBaseline: {
                  "@global": {
                    "@font-face": [
                      {
                        fontFamily: "notoSerif-regular",
                        fontStyle: "normal",
                        fontDisplay: "swap",
                        fontWeight: 400,
                        src: "\n    local('notoSerif-regular'),\n    local('notoSerif-regular'),\n    url('https://styloriimages-staging.s3.ap-south-1.amazonaws.com/nac_fonts/NotoSerif-Regular.ttf') format('ttf')\n  ",
                        unicodeRange:
                          "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
                      },
                    ],
                  },
                },
              },
              error: {
                light: "rgba(199, 110, 108, 1)",
                main: "rgba(185, 74, 72, 1)",
                dark: "rgba(129, 51, 50, 1)",
                contrastText: "#fff",
              },
              text: {
                primary: "#2F348B",
                secondary: "rgba(0, 0, 0, 0.54)",
                disabled: "#7B7B7B",
                hint: "rgba(0, 0, 0, 0.38)",
              },
              overallButoon: { primary: "#F36E23", contrastText: "#fff" },
            },
          }),
        z = Object(y.a)(I),
        L = Object(y.a)(a(71)),
        S = Object(w.a)(z),
        C = Object(w.a)(L),
        f = function (e) {
          var t = n.a.useContext(p.e).Globalctx;
          return n.a.createElement(
            h.a,
            { theme: t && !0 === t.pathName ? C : S },
            e.children
          );
        },
        b = a(6),
        T = Object(y.a)(I),
        D = Object(y.a)(a(71)),
        A =
          (Object(w.a)(T),
          Object(w.a)(D),
          n.a.lazy(function () {
            return Promise.all([a.e(2), a.e(3)]).then(a.bind(null, 661));
          })),
        O = (function (e) {
          Object(d.a)(a, e);
          var t = Object(M.a)(a);
          function a(e) {
            return Object(g.a)(this, a), t.call(this, e);
          }
          return (
            Object(m.a)(a, [
              {
                key: "componentDidMount",
                value: (function () {
                  var e = Object(u.a)(
                    l.a.mark(function e() {
                      return l.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              Object(N.c)();
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  return n.a.createElement(
                    p.f,
                    null,
                    n.a.createElement(
                      f,
                      null,
                      n.a.createElement(
                        p.i,
                        null,
                        n.a.createElement(
                          o.a,
                          null,
                          n.a.createElement(
                            n.a.Suspense,
                            { fallback: j.a },
                            n.a.createElement(A, null)
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.a.Component),
        v = Object(b.h)(O);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      function k(e) {
        return E.apply(this, arguments);
      }
      function E() {
        return (E = Object(u.a)(
          l.a.mark(function e(t) {
            return l.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt("return", !1);
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      window.addEventListener("online", function (e) {
        k("Network connection restored !");
      }),
        window.addEventListener("offline", function (e) {
          k("Lost internet connection ! ");
        }),
        r.a.render(
          n.a.createElement(o.a, null, n.a.createElement(v, null)),
          document.getElementById("root")
        );
    },
  ],
  [[84, 1, 4]],
]);
//# sourceMappingURL=main.js.map
