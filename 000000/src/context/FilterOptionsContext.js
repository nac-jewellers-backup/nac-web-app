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
import { bool } from 'prop-types';
import { filterParams } from 'mappers';

const initialCtx = {
    FilterOptionsCtx: {
        filters: {
            Offers: null, Availability: null, ProductType: null, style: null, Material: null, Theme: null, Collection: null, metalColor: null,
            MetalPurity: null, Occasion: null, NoOfStones: null, Gender: null, stoneColor: null, stoneShape: null, pricemax: 0, pricemin: 0
        },
        sort: '',
        loadingfilters: false,
        loading: false, error: false, data: [], offset: 0, dataArr: [], first: 24, mappedFilters: [], cartcount: ['1']
    },
    setFilters: (filterData) => { },
    setOffset: () => { },
    setFirst: () => { },
    updateProductList: () => { },
    setSort: () => { },
    setloadingfilters: () => { },
    setcartcount: () => { }
}

export const FilterOptionsContext = React.createContext(initialCtx);
export const FilterOptionsConsumer = FilterOptionsContext.Consumer;

const Provider = (props) => {

    const [filters, setFilters] = React.useState({
        Offers: {}, Availability: {}, ProductType: {}, style: {}, material: {}, Theme: {}, Collection: {}, metalColor: {},
        MetalPurity: {}, Occasion: {}, NoOfStones: {}, Gender: {}, stoneColor: {}, stoneShape: {}, pricemax: 0, pricemin: 0
    });
    console.log('Price max min', filters.pricemax, filters.pricemin)
    const [sort, setSort] = React.useState(initialCtx.FilterOptionsCtx.sort)
    const [offset, setOffset] = React.useState(0)
    const [first, setFirst] = React.useState(24)
    const [dataArr, setDataArr] = React.useState([])
    const [cartcount, setcartcount] = React.useState([])
    debugger
    const [mappedFilters, setMappedFilters] = React.useState([])
    const [{ filterLogic }, setFilterLogic] = React.useState({ filterLogic: () => [] });
    const [LoadingSeoQuery, setLoadingSeoQurey] = React.useState(true)
    const [ErrorSeoQuery, setErrorSeoQuery] = React.useState(false)
    const [DataSeoQuery, setDataSeoQuery] = React.useState([])
    const [paramsAo, setParamsAo] = React.useState([])
    const [loadingfilters, setloadingfilters] = React.useState(false)
    useEffect(() => { setFilterLogic({ filterLogic: (d, t) => t }) }, [filters, sort])
    useEffect(() => { setFilterLogic({ filterLogic: (d, t) => [...d, ...t] }) }, [offset])
    const { NetworkCtx: { graphqlUrl: uri } } = React.useContext(NetworkContext);
    const client = createApolloFetch({ uri });

    // useEffect(() => {
    //     console.log('sort', sort)
    //     if (sort) window.location.search = `sort=${sort.values}`
    // }, [sort])

    useEffect(() => {
        if (window.location.search) {

            let urlSearchparams = window.location.search;

            let urlSearchparamsDecode = decodeURI(urlSearchparams)

            let urlSearchparamsReplace = urlSearchparamsDecode.replace('?', '')

            let urlSearchparamsSplitAmpersand = urlSearchparamsReplace.split('&')

            let urlSplitparamsEqual = () => urlSearchparamsSplitAmpersand.map(val => { return val.split('=') })
            // let 
            let mapUrlParamsSplitEqual = urlSplitparamsEqual();

            mapUrlParamsSplitEqual.map(val => {

                let obj = {}
                obj[val[1]] = true
                let value = val[0]
                filters[value] = obj
                console.log('{[val[0]]:obj}', { value: obj })
                setFilters(filters)
            })


            //   this.handleChange(()=>{} ,true, ()=>{}, mapUrlParamsSplitEqual)

        }
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
            const query = encodeURI(queries.join("&"));
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
            console.log('val', paramsAo)
        }
        else if (filtersparms !== undefined && filtersparms !== "jewellery") {

            const filterdata = window.location.pathname
            const splitslash = filterdata && filterdata.replace('/', '')
            const splitNtxData = filterdata && splitslash.split('-')
            // const a = filterdata && splitNtxData.map(val => {
            //     const valPlusSplit = val.replace(/[+]/g, " ")
            //     return valPlusSplit
            // })

            console.log('hey man cool... :)', splitNtxData)
            return paramsAo = splitNtxData
        }
        console.log('paramsAo', paramsAo)
        setParamsAo(paramsAo)
        return paramsAo;

    }



    const { loading: ntx, error: ntxerr, data: ntxdata, makeFetch } = useNetworkRequest('/filterlist', {}, {})
    // {transSkuListsByProductId: {some: {discountPrice: {greaterThan: 1.5}}}}
    const { loading, error, data, makeRequest } = useGraphql(PRODUCTLIST, () => { }, {})
    // {filter:{transSkuListsByProductId:{every:{markupPrice:{  "greaterThanOrEqualTo":   20000,
    // "lessThanOrEqualTo":70000}}}}}
    const { loading: seoloading, error: seoError, data: seoData, makeRequest: makeRequestSeo } = useGraphql(seoUrlResult, () => { }, {});

    console.info('dataResponsed', ntxdata)
    const seoUrlFetch = () => {

        const conditionfiltersSeo = { seofilter: { seoUrl: { in: paramObjects(mappedFilters.seo_url) } } }
        makeRequestSeo(conditionfiltersSeo)
        console.log('paramObjects', paramObjects(mappedFilters.seo_url), DataSeoQuery, conditionfiltersSeo)

        console.log('DataSeoQuery', DataSeoQuery)
    }
    // useEffect(()=>{
    //     setloadingfilters(true)
    // },[data])
    const updateProductList = () => {
        // console.info('objecobjecobject',mappedFilters.seo_url !== "jewellery")
        if (window.location.search || window.location.pathname.replace('/', '') === "jewellery") {
            const conditionFilters = conditions.generateFilters(paramObjects())
            const conditionImageColor = {}
            var a = filters && filters.length === 0 ? Object.keys(filters.MetalColor) : ''
            // var a = filters.metalColor ? filters.metalColor : null;
            console.log(a, filters, 'filters metal color')
            conditionImageColor["productColor"] = a[0]
            conditionImageColor['isdefault'] = true
            // conditionImageColor["isdefault"]=true
            const pricerange = {
                transSkuListsByProductId: {
                    every: {
                        markupPrice: {
                            "greaterThanOrEqualTo": 20000,
                            "lessThanOrEqualTo": 70000
                        }
                    }
                }
            }
            var variables;
            if (window.location.search) {
                const orderbyvarCondition = () => {
                    console.info('orderby', 'hey i have came in... orderbyvarCondition', sort)
                    switch (sort.values) {
                        case 'New To Stylori': {
                            return "CREATED_AT_DESC"
                            break;
                        }

                        case 'Featured': {
                            return "IS_FEATURED_ASC"
                            break;
                        }

                        case 'Best Seller': {
                            return "SELLING_QTY_DESC"
                            break;
                        }
                        default:
                    }

                }
                if (Object.keys(conditionFilters.filter) > 0) {
                    variables = { ...conditionFilters, orderbyvar: orderbyvarCondition(), offsetvar: offset, firstvar: first, 'conditionImage': { ...conditionImageColor } }
                }
                else {
                    variables = { orderbyvar: orderbyvarCondition(), offsetvar: offset, firstvar: first, 'conditionImage': { ...conditionImageColor } }
                }
            }
            else {
                variables = { ...conditionFilters, orderbyvar: 'ID_DESC', offsetvar: offset, firstvar: first, 'conditionImage': { ...conditionImageColor } }
            }

            makeRequest(variables)
            console.log('came inside view moreproducts', filters)

        }

        else {
            // ////////////////////////////////////////////////////////////////////////////////////////////////
            console.log('vanakkamNanba', window.location.pathname.replace('/', ''), window.location.pathname, paramObjects(mappedFilters.seo_url), seoData)
            console.info('i have came in brother', 'else()')
            seoUrlFetch()

        }


    }
    useEffect(() => { setMappedFilters(ntxdata) }, [ntxdata]);

    useEffect(() => {
        pathQueries();
        updateProductList();

    }, [filters, offset]);
    useEffect(() => {
        setDataSeoQuery(seoData)
        console.log(seoData, 'vaadaa')

    }, [seoData, seoloading, seoError])
    useEffect(() => {
        const mapped = productlist(data, CDN_URL);
        const newUpdatedList = filterLogic(dataArr, mapped);
        setDataArr(newUpdatedList);
    }, [data]);

    const updatefiltersSort = () => {
        if ((Object.entries(DataSeoQuery).length !== 0 && DataSeoQuery.constructor === Object)) {
            var paramsfilter = (Object.entries(DataSeoQuery).length !== 0 && DataSeoQuery.constructor === Object && DataSeoQuery.data.allSeoUrlPriorities) && DataSeoQuery.data.allSeoUrlPriorities.nodes.map(val => {
                var a = {}

                a[val.attributeName.replace(/\s/g, '')] = val.attributeValue
                return a

            })
            console.info('muthaakannasekuramvaadaa', paramsfilter)
            if ((Object.entries(seoData).length !== 0 && DataSeoQuery.constructor === Object)) {
                const conditionFilters = conditions.generateFilters(paramsfilter.splice(1))

                console.info('objectparamsfilterconditionFilters', conditionFilters)
                const conditionImageColor = {}
                var a = filters && filters.length === 0 ? Object.keys(filters.MetalColor) : ''
                console.log(a, filters, 'filters metal color')
                var variables = {}
                // var a = filters.metalColor ? filters.metalColor : null;
                conditionImageColor["productColor"] = a[0]
                conditionImageColor['isdefault'] = true

                // conditionImageColor["isdefault"]=true
                if (window.location.search) {
                    const orderbyvarCondition = () => {
                        console.info('orderby', 'hey i have came in... orderbyvarCondition', sort)
                        switch (sort.values) {
                            case 'New To Stylori': {
                                return "CREATED_AT_DESC"
                                break;
                            }

                            case 'Featured': {
                                return "IS_FEATURED_ASC"
                                break;
                            }

                            case 'Best Seller': {
                                return "SELLING_QTY_DESC"
                                break;
                            }
                            default:
                        }

                    }
                    variables = { ...conditionFilters, orderbyvar: orderbyvarCondition(), offsetvar: offset, firstvar: first, 'conditionImage': { ...conditionImageColor } }
                }
                else {
                    variables = { ...conditionFilters, orderbyvar: 'ID_DESC', offsetvar: offset, firstvar: first, 'conditionImage': { ...conditionImageColor } }
                }

                makeRequest(variables)
            }
        }
    }
    useEffect(() => {
        updatefiltersSort()
    }, [seoData])
    var newObj = {}
    const updateFilters = async (filters) => {
        setFilters(filters);
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
        console.log('qtf', qtfArr)
        var k = qtfArr.map(val => Object.values(val));
        var keyy = qtfArr.map(val => Object.keys(val))
        console.log(filters)
        len = keyy.length
        while (len--) {
            var key = keyy[len]
            var toLowerCase = key[0].toLowerCase()
            newObj[toLowerCase] = k[len][0]
        }
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
        console.log('ntxdataresdata1', ntxdata.seo_url, mappedFilters.seo_url, ntxdata)
        // }

        console.log('newObj', filters)
    }

    useEffect(() => {
        console.info('i have came in brother', 'seoUrlFetch()')
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
            console.info('object', DataSeoQuery, 'pazahakkam')

            // }
        }
    }, [mappedFilters])
    useEffect(() => {
        if (Object.entries(sort).length > 0 && sort.constructor === Object) {
            props.history.push({
                pathname: `${mappedFilters.seo_url ? `/${mappedFilters.seo_url}` : ''}`,
                search: sort && `sort=${sort.values}`
            })
            updatefiltersSort()
        }
    }, [sort])
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
    console.log('ntxdataresdata', ntxdata.seo_url, mappedFilters.seo_url)
    const FilterOptionsCtx = {
        cartcount, filters, sort, loading, error, data, setFilters: updateFilters, offset, setOffset, dataArr, first, setFirst, mappedFilters, loadingfilters
    }
    return (
        <FilterOptionsContext.Provider value={{setcartcount, FilterOptionsCtx, setFilters: updateFilters, setOffset, setFirst, updateProductList, setSort, setloadingfilters }} >
            {props.children}
        </FilterOptionsContext.Provider>
    )
};

export const FilterOptionsProvider = withRouter(Provider);