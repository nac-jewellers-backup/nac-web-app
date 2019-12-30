import React, { useEffect } from 'react';
import { useGraphql } from 'hooks/GraphqlHook';
import { useNetworkRequest } from 'hooks/NetworkHooks'
import { PRODUCTLIST, conditions, seoUrlResult } from 'queries/productListing';
import { withRouter } from 'react-router-dom';
import productlist from 'mappers/productlist';
import { CDN_URL } from 'config';
import { matchPath } from "react-router";
import { createApolloFetch } from 'apollo-fetch';
import { NetworkContext } from 'context/NetworkContext';
import { GlobalContext } from 'context/GlobalContext';
import { bool } from 'prop-types';
import { filterParams } from 'mappers';

const initialCtx = {
    FilterOptionsCtx: {
        filters: {
            Offers: null, Availability: null, ProductType: null, style: null, Material: null, Theme: null, Collection: null, MetalColor: null,
            MetalPurity: null, Occasion: null, NoOfStones: null, Gender: null, stoneColor: null, stoneShape: null, category:null
        },
        sort: '',
        pricemax: 5000, pricemin: 15000,
        loadingfilters: false,
        loading: false, error: false, data: [], offset: 0, dataArr: [], first: 24, mappedFilters: [], cartcount: ['1']
    },
    setFilters: (filterData) => { },
    setOffset: () => { },
    setFirst: () => { },
    updateProductList: () => { },
    setSort: () => { },
    setloadingfilters: () => { },
    setcartcount: () => { },
    setPriceMax: () => { },
    setPriceMin: () => { }
}

export const FilterOptionsContext = React.createContext(initialCtx);
export const FilterOptionsConsumer = FilterOptionsContext.Consumer;

const Provider = (props) => {

    const [filters, setFilters] = React.useState({
        Offers: {}, Availability: {}, ProductType: {}, style: {}, material: {}, Theme: {}, Collection: {}, MetalColor: {},
        MetalPurity: {}, Occasion: {}, NoOfStones: {}, Gender: {}, stoneColor: {}, stoneShape: {}, category:{}
    });
    const [sort, setSort] = React.useState(initialCtx.FilterOptionsCtx.sort)
    const [offset, setOffset] = React.useState(0)
    const [first, setFirst] = React.useState(24)
    const [dataArr, setDataArr] = React.useState([])
    const [cartcount, setcartcount] = React.useState([])
    const [mappedFilters, setMappedFilters] = React.useState([])
    const [{ filterLogic }, setFilterLogic] = React.useState({ filterLogic: () => [] });
    const [LoadingSeoQuery, setLoadingSeoQurey] = React.useState(true)
    const [ErrorSeoQuery, setErrorSeoQuery] = React.useState(false)
    const [DataSeoQuery, setDataSeoQuery] = React.useState([])
    const [paramsAo, setParamsAo] = React.useState([])
    const [pricemin, setPriceMin] = React.useState(0)
    const [pricemax, setPriceMax] = React.useState(0)
    const [loadingfilters, setloadingfilters] = React.useState(false)
    useEffect(() => { setFilterLogic({ filterLogic: (d, t) => t }) }, [filters])
    useEffect(() => { setFilterLogic({ filterLogic: (d, t) => [...d, ...t] }) }, [offset])
    const { NetworkCtx: { graphqlUrl: uri } } = React.useContext(NetworkContext);
    const { Globalctx, setGlobalCtx } = React.useContext(GlobalContext);

    const client = createApolloFetch({ uri });


    useEffect(() => { console.log('_filters_filters', filters) }, [filters])
    const { loading: ntx, error: ntxerr, data: ntxdata, makeFetch } = useNetworkRequest('/filterlist', {}, false, {})
    useEffect(() => {

        const fetch_data = async () => {
            var len;
            //    if(window.location.pathname === "/jewellery"){


            // props.location.push(window.location.pathname)
            matchPath(window.location.pathname, {
                path: ":listingpage",
                search: window.location.search

            })
            let pathnameSplit = window.location.pathname.split('/')
            const splitHiphen = () => {
                if (pathnameSplit[1].indexOf('-')) {
                    return pathnameSplit[1].split('-')
                }
            }

            debugger

            console.log('splitHiphen()', splitHiphen())
            const conditionfiltersSeo = { seofilter: { seoUrl: { in: splitHiphen() } } }
            // makeRequestSeo(conditionfiltersSeo)
            function status(response) {

                if (response.status >= 200 && response.status < 300) {
                    return Promise.resolve(response)
                } else {
                    return Promise.reject(new Error(response.statusText))
                }
            }

            function json(response) {

                return response.json()
            }



            await fetch(uri, {

                method: 'post',
                // body: {query:seoUrlResult,variables:splitHiphen()}
                // body: JSON.stringify({query:seoUrlResult}),

                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: seoUrlResult,
                    variables: { ...conditionfiltersSeo },
                }),


            })
                .then(status)
                .then(json)
                .then(async function (data) {


                    //   window.location.pathname="/gemstone-pendants-jewellery-for+women-from+gemstone+collection"
                    var a = {};

                    var paramsfilter = (Object.entries(data).length !== 0 && data.constructor === Object && data.data.allSeoUrlPriorities) && data.data.allSeoUrlPriorities.nodes.map(val => {

                        let attrName = val.attributeName.replace(/\s/g, '')
                        let attrVal = val.attributeValue
                        filters[attrName] = { [attrVal]: true }

                        // setFilters(filters)
                        var obj = {}
                        debugger
                        obj[val.attributeValue] = true
                        
                        a[val.attributeName.replace(/\s/g, '')] = obj
                        return a

                    })

                    Object.entries(a).map(val => {

                        setFilters({ ...filters, a })
                    })
                    updateFilters(filters)
                    // alert(JSON.stringify(filters))
                }).catch(function (error) {

                    console.log('Request failed', error, uri, status.code);
                    //  setSeoComponentMount(data)
                });

            //  alert(JSON.stringify(test))


            // }
        }
        fetch_data()
    }, [])



    var queries = []
    const qtfArr = []
    const pathQueries = () => {

        // var queries = []
        if (window.location.search) {
            Object.keys(filters).map(fk => {
                const filter = filters[fk];
                const fv = Object.keys(filter);
                if (fv.length > 0) {
                    if (filter[fv[0]]) {
                        const qt = `${fk}=${fv[0]}`;
                        const qtf = {}
                        qtf[`${fk}`] = `${fv[0]}`
                        queries.push(qt);
                        // qtfArr.push(qtf);
                    }
                }
            })
            // const query = encodeURI(queries.join("&"));
            // props.history.push({
            //     pathname: ntxdata.seo_url,
            //     search: query,
            // })
        }
    }

    const paramObjects = (filtersparms) => {
        // Destructuring the query parameters from the URL
        let paramsAo = [];
        if (window.location.search) {

            let urlSearchparamsDecode = decodeURI(window.location.search);
            let urlParams = urlSearchparamsDecode.replace('?', '').split('&');
            let urlSplitparamsEqual = urlParams.map(val => {
                let splitval = val.split('=');
                return { [splitval[0]]: splitval[1] }
            })
            paramsAo = urlSplitparamsEqual;
        }
        else if (filtersparms !== undefined && filtersparms !== "jewellery") {

            const filterdata = window.location.pathname
            const splitslash = filterdata && filterdata.replace('/', '')
            const splitNtxData = filterdata && splitslash.split('-')
            // const a = filterdata && splitNtxData.map(val => {
            //     const valPlusSplit = val.replace(/[+]/g, " ")
            //     return valPlusSplit
            // })

            return paramsAo = splitNtxData
        }
        setParamsAo(paramsAo)
        return paramsAo;

    }




    // {transSkuListsByProductId: {some: {discountPrice: {greaterThan: 1.5}}}}
    // const { loading, error, data, makeRequest } = useGraphql(PRODUCTLIST, () => { }, {})
    const { loading, error, data, makeFetch: fetchproducts } = useNetworkRequest('/fetchproducts', {}, false, {})
    // fetchproducts



    // {filter:{transSkuListsByProductId:{every:{markupPrice:{  "greaterThanOrEqualTo":   20000,
    // "lessThanOrEqualTo":70000}}}}}
    const { loading: seoloading, error: seoError, data: seoData, makeRequest: makeRequestSeo } = useGraphql(seoUrlResult, () => { }, {});

    useEffect(() => {
        if (offset === 0) {

            if (loading) setloadingfilters(true)
            else setloadingfilters(false)
        }

    }, [loading, error, data])
    const seoUrlFetch = () => {

        var path_name = mappedFilters.seo_url && mappedFilters.seo_url.length > 0 ? mappedFilters.seo_url : window.location.pathname.split('/')[1]
        const conditionfiltersSeo = { seofilter: { seoUrl: { in: paramObjects(path_name) } } }

        makeRequestSeo(conditionfiltersSeo)


    }
    // useEffect(()=>{
    //     setloadingfilters(true)
    // },[data])
    // const updateProductList = async() => {

    //     // console.info('objecobjecobject',mappedFilters.seo_url !== "jewellery")
    //     if (window.location.search) {
    //         var newObj = {}
    //         var len;
    //         var k = qtfArr.map(val => Object.values(val));
    //         var keyy = qtfArr.map(val => Object.keys(val))
    //         len = keyy.length
    //         while (len--) {
    //             var key = keyy[len]
    //             var toLowerCase = key[0].toLowerCase()
    //             newObj[toLowerCase] = k[len][0]
    //         }
    //         newObj['sortBy'] = sort.values
    //         // newObj['price'] = {'min_price':pricemin,'max_price':pricemax} 

    //       await fetchproducts(newObj)
    //       //variables


    //     }


    // }


    useEffect(() => { setMappedFilters(ntxdata) }, [ntxdata, ntxerr, ntx]);
    useEffect(() => {
        setDataSeoQuery(seoData)

    }, [seoData, seoloading, seoError])
    useEffect(() => {
        debugger
        if (!loading) {
            const mapped = productlist(data, CDN_URL);
            const newUpdatedList = filterLogic(dataArr, mapped);
            if (offset === 0) setDataArr(mapped);
            else setDataArr(newUpdatedList);


        }
    }, [data, error, loading]);



    useEffect(() => {
    }, [data, error, loading])
    const updatefiltersSort = async () => {

        if (filters && filters.constructor === Object && (Object.entries(filters).length !== 0 && filters.constructor === Object)) {
            var newObj = {}
            var len;
            if (filters.constructor !== Object) {
                Object.assign(filters, {})
            }
            debugger
            Object.keys(filters).map(fk => {
                const filter = filters[fk];
                const fv = filter && Object.keys(filter);
                if (fv && fv.length > 0) {
                    if (filter[fv[0]]) {
                        const qt = `${fk}=${fv[0]}`;
                        const qtf = {}
                        qtf[`${fk}`] = `${fv[0]}`
                        // queries.push(qt);
                        qtfArr.push(qtf);
                    }
                }
            })
            var k = qtfArr.map(val => Object.values(val));
            var keyy = qtfArr.map(val => Object.keys(val))
            len = keyy.length
            while (len--) {
                var key = keyy[len]
                var toLowerCase = key[0].toLowerCase()
                newObj[toLowerCase] = k[len][0]
            }
            newObj['sortBy'] = sort.values
            newObj['offset'] = offset

            // alert(JSON.stringify('filters',filters))
            // alert(JSON.stringify(newObj))
            // newObj['price'] = {'min_price':pricemin,'max_price':pricemax}
            console.log('newObj', Object.keys(newObj).filter(val => { if (val === 'category') return val }).length > 1)
            if (Object.keys(newObj).filter(val => { if (val === 'category') return val }).length !== 0) await fetchproducts(newObj)

        }
    }

    useEffect(() => {
debugger
        //    alert("filters")
        if (filters && (Object.entries(filters).length !== 0 && filters.constructor === Object)) {
            updatefiltersSort()
        }

    }, [filters])
    useEffect(() => {

        // alert("pricemin")
        if (pricemin) {
            updatefiltersSort()
        }

    }, [pricemin])
    useEffect(() => {

        // alert("pricemax")
        if (pricemax) {
            updatefiltersSort()
        }

    }, [pricemax])
    useEffect(() => {

        // alert("sort")
        if (sort) {
            updatefiltersSort()
        }

    }, [sort])

    useEffect(() => {

        // alert("sort")
        if (offset &&offset !== 0 ) {
            updatefiltersSort()
        }

    }, [offset])
    // useEffect(() => {

    //     //    alert("gdys")
    //     if (filters && (Object.entries(filters).length !== 0 && filters.constructor === Object)) {
    //         updatefiltersSort()
    //     }

    // }, [offset])
    var newObj = {}
    const updateFilters = async (filters) => {
        // alert('update filters')
        setOffset(0)
        setFilters(filters);

        setloadingfilters(true)

        // setloadingfilters(true)
        var len;
        let bodyvar;
        bodyvar = paramObjects();
        // else {
        try {
            Object.keys(filters).map(fk => {
                const filter = filters[fk];
                const fv = Object.keys(filter);
                if (fv.length > 0) {
                    if (filter[fv[0]]) {
                        const qt = `${fk}=${fv[0]}`;
                        const qtf = {}
                        qtf[`${fk}`] = `${fv[0]}`
                        // queries.push(qt);
                        qtfArr.push(qtf);

                    }

                }
            })
            const query = encodeURI(queries.join("&"));


            // bodyvar = paramObjects();
        } catch (error) {
            console.log(error)
        }
        var k = qtfArr.map(val => Object.values(val));
        var keyy = qtfArr.map(val => Object.keys(val))
        len = keyy.length
        while (len--) {
            var key = keyy[len]
            var toLowerCase = key[0].toLowerCase()
            newObj[toLowerCase] = k[len][0]
        }
        console.log('i came in as update filters function', "123123")
        await makeFetch(newObj);
        //    props.history.push({
        //     pathname: `/stylori${mappedFilters.seo_url   ?`/${mappedFilters.seo_url}` : '' }`,

        // })
        try {


            if (ntxdata.seo_url === "jewellery") {
                setMappedFilters(ntxdata)
            }

        } catch (error) {
            console.log(error)
        }
        // }

    }

    useEffect(() => {
        if ((Object.entries(ntxdata).length !== 0 && ntxdata.constructor === Object)) {
            // if(ntxdata.seo_url !=="jewellery" ){
            if (window.location.pathname !== "jewellery") {
                props.history.push({
                    pathname: `${mappedFilters.seo_url ? `/${mappedFilters.seo_url}` : ''}`,
                })
            }
            setSort('')
            paramObjects(mappedFilters.seo_url)


            seoUrlFetch()
            var loc = window.location.pathname.split('/')[1].split('-').filter(val => { if (val === 'silver') return val })
            if (loc.length === 0) setGlobalCtx({ ...Globalctx, pathName: false })
            else setGlobalCtx({ ...Globalctx, pathName: true })

            // }
        }
    }, [mappedFilters])

    useEffect(() => {
        const filters_seo_condition = () => {
            if ((Object.entries(sort).length > 0 && sort.constructor === Object) && (pricemin !== null && pricemax !== null)) {
                return sort && `sort=${sort.values}&startprice=${pricemin}&endprice=${pricemax}`
            }
            else if (pricemin !== null && pricemax !== null && pricemin !== 0 && pricemax !== 0) {
                return `startprice=${pricemin}&endprice=${pricemax}`
            }
            else if (Object.entries(sort).length > 0 && sort.constructor === Object) {
                return sort && `sort=${sort.values}`
            }
        }
        if ((Object.entries(sort).length > 0 && sort.constructor === Object) || (pricemin !== null && pricemax !== null)) {
            props.history.push({
                pathname: `${mappedFilters.seo_url ? `/${mappedFilters.seo_url}` : ''}`,
                search: filters_seo_condition()
            })

            updatefiltersSort()
        }
    }, [sort, pricemin, pricemax])
    useEffect(() => {

        if (paramObjects(mappedFilters.seo_url).length > 0) {
            setParamsAo(paramObjects(mappedFilters.seo_url))
        }
    }, [ntxdata, filters, mappedFilters, seoData])
    useEffect(() => {
        if (window.location.pathname !== "jewellery") {
            matchPath(window.location.pathname, {
                path: ":listingpage",

            });
        }
        else {
            matchPath(`/${mappedFilters.seo_url}`, {
                path: ":listingpage",

            });
        }

    })
    const FilterOptionsCtx = {
        cartcount, filters, sort, loading, error, data, setFilters: updateFilters, offset, setOffset, dataArr, first, setFirst, mappedFilters, loadingfilters, pricemax, pricemin
    }
    return (
        <FilterOptionsContext.Provider value={{ setcartcount, FilterOptionsCtx, setOffset, setFirst, setSort, setloadingfilters, setPriceMax, setPriceMin }} >
            {props.children}
        </FilterOptionsContext.Provider>
    )
};
// updateProductList
export const FilterOptionsProvider = withRouter(Provider);