import React, { useEffect } from 'react';
import { useNetworkRequest } from 'hooks/index';
import { useCheckForCod } from 'hooks/CheckForCodHook';
import { CheckForCod } from 'queries/productdetail';
import { ADDRESSDETAILS } from 'queries/productdetail';
// window.cache = {}
var obj = {}
var delet = {}
var addObjall = {}

const Addressforms = (changePanel) => {
    // var regid = localStorage.getItem('regid') ? localStorage.getItem('regid') : ""
    const valuegust = localStorage.getItem("gustaddres") ? JSON.parse(localStorage.getItem("gustaddres")).address : ""
    let value11 = localStorage.getItem("valuessetdata") ? JSON.parse(localStorage.getItem("valuessetdata")).addressOne : {}
    var cont = localStorage.getItem('true') ? localStorage.getItem('true') : ""
    var con_gust = localStorage.getItem('gut_lg') ? JSON.parse(localStorage.getItem('gut_lg')) : ""
    let cart_id = localStorage.getItem("cart_id") ? JSON.parse(localStorage.getItem("cart_id")).cart_id : ""
    let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : ""
    let check_dlt = localStorage.getItem("check_dlt") ? localStorage.getItem("check_dlt") : ""
    const [address, setAddress] = React.useState({})
    const [pincods, setpincod] = React.useState({ pincod: "" })
    const { loading: userloading, error: usererror, data: userdata, makeFetch: makeFetch } = useNetworkRequest('/adduseraddress', {}, false);
    const { loading: addresloading, error: addreserror, data: addresData, makeRequestCod: addresmakeRequestCod } = useCheckForCod(ADDRESSDETAILS, () => { }, {});
    const [values, setValues] = React.useState({
        addressOne: {
            firstname: "",
            lastname: "",
            addressline1: "",
            addressline2: "",
            pincode: "",
            city: "",
            state: "",
            country: "",
            country_code: "",
            contactno: "",
            addresstype: 1,
            errortext: {
                pinerr: "", pinerr1: "",
            },
        },
        addressTwo: {
            firstname: "",
            lastname: "",
            addressline1: "",
            addressline2: "",
            pincode: "",
            city: "",
            state: "",
            country: "",
            country_code: "",
            contactno: "",
            addresstype: 2,
            errortext: { pinerr: "", pinerr1: "" },
        },
        addrs: valuegust && valuegust.length > 0 ? false : true,
        // addrs: true,
        checkValue: true,
        checkValue1: true,
        addressvalues: null,
        edit_addresId: false,
        Id: "",
        Id2: "",
        addres_id: null,
    });
    var addObj = {};
    var adars1 = {}
    var adars2 = {}
    var addObjgust = {};
    addObjall["isguestlogin"] = cont ? false : true
    const { data, error, loading, makeFetch: makeFetchall, mapped, status } = useNetworkRequest('/addaddress', {}, false);
    const { error: remee, loading: remlod, data: removedata, makeFetch: deleteaddress, } = useNetworkRequest('/removeaddress', {}, false);
    const { loading: codloading, error: coderror, data: CodData, makeRequestCod } = useCheckForCod(CheckForCod, () => { }, {});
    const pathnames = window.location.pathname === "/account"
    // var stst = values.ref ? values.ref : ""
    
    const addressva = values && values.addressvalues && values.addressvalues.length > 0
    useEffect(() => {
        
        // var alladrs = addresData ? addresData && addresData.data && addresData.data.allUserAddresses && addresData.data.allUserAddresses.nodes && addresData.data.allUserAddresses.nodes[0] && addresData.data.allUserAddresses.nodes[0].firstname : ""
        var adrs = addresData ? addresData && addresData.data && addresData.data.allUserAddresses && addresData.data.allUserAddresses.nodes : null
        if (adrs !== undefined && adrs.length > 0) {
            values["addressvalues"] = addresData
            values["addrs"] = false
            setValues({
                values,
                ...values
            })
        } else {
            // if (con_gust !== true) { localStorage.setItem("select_addres", JSON.stringify("")) }
        }
    }, [addresData, userdata, addressva, removedata])
    React.useEffect(() => {
        
        if (user_id.length > 0) {
            obj['userprofileId'] = user_id
            addresmakeRequestCod(obj);
        }
    }, [userdata, addressva])
    React.useEffect(() => {

        if (user_id.length > 0) {
            obj['userprofileId'] = user_id
            addresmakeRequestCod(obj);
        }
    }, [])
    useEffect((event) => {
        const a = CodData.data ? CodData.data.allPincodeMasters : "";
        // alert(JSON.stringify(CodData))
        if (a) {
            var res = CodData && CodData.data && CodData.data.allPincodeMasters && CodData.data.allPincodeMasters.nodes && CodData.data.allPincodeMasters.nodes[0] ? CodData.data.allPincodeMasters.nodes[0].state : ''
            var res1 = CodData && CodData.data && CodData.data.allPincodeMasters && CodData.data.allPincodeMasters.nodes && CodData.data.allPincodeMasters.nodes[0] ? CodData.data.allPincodeMasters.nodes[0].country : ''
            var res2 = CodData && CodData.data && CodData.data.allPincodeMasters && CodData.data.allPincodeMasters.nodes && CodData.data.allPincodeMasters.nodes[0] ? CodData.data.allPincodeMasters.nodes[0].district : ''
            if (res2.length > 0) {
                if (pincods.pincod === "pincode1") {
                    values['addressOne']['state'] = res
                    values['addressOne']['country'] = res1
                    values['addressOne']['city'] = res2

                } if (pincods.pincod === "pincode2") {
                    values['addressTwo']['state'] = res
                    values['addressTwo']['country'] = res1
                    values['addressTwo']['city'] = res2
                }
                if (pincods.pincod === "pincode1") {
                    if (res2 === "" || values["addressOne"] && values["addressOne"]['errortext']) {
                        values["addressOne"]['errortext']['pinerr'] = ""
                    }
                } else {
                    if (res2 === "" || values["addressOne"] && values["addressOne"]['errortext']) {
                        values["addressTwo"]['errortext']['pinerr1'] = ""
                    }
                }
            } else {
                if (pincods.pincod === "pincode1") {
                    if (res2.length < 0 || res2 === "" || values["addressOne"] && values["addressOne"]['errortext']) {
                        values["addressOne"]['errortext']['pinerr'] = "Your pincode is !Invalid"
                    }
                } else {
                    if (res2.length < 0 || res2 === "" || values["addressOne"] && values["addressOne"]['errortext']) {
                        values["addressTwo"]['errortext']['pinerr1'] = "Your pincode is !Invalid"
                    }
                }
            }
            setValues({ ...values, values })
        }
    }, [CodData])
    const handleChange = (type, field, value, pincod) => {
        values[type][field] = value;
        if (field === 'pincode') {
            values[type]['pincode'] = value;
            const val = values.addressOne.pincode || values.addressTwo.pincode
            var variab = {}
            variab["pincode"] = value
            if (value.length > 5) {
                // alert(JSON.stringify(value))
                if (Object.entries(variab).length !== 0 && variab.constructor === Object) {
                    makeRequestCod(variab);
                }
            }
        }
        pincods["pincod"] = pincod
        setpincod({ ...pincods, pincods })
        setValues({ ...values, values })
    }
    const handleSubmit = (e) => {
        
        var addObjgust_local = localStorage.getItem('gustaddres') ? JSON.parse(localStorage.getItem('gustaddres')) : "";
        if (con_gust !== true) {
            var addressOne = values.addressOne
            var addressTwo = values.addressTwo
            if (addressOne.addressline1 === addressTwo.addressline1 && addressOne.firstname === addressTwo.firstname && addressOne.pincode === addressTwo.pincode) {
                values["addressOne"]["addresstype"] = 3
                setValues({
                    values,
                    ...values,
                })
                addObj['address'] = [addressOne];
                // addresmakeRequestCod(obj);
            } else {
                if (values.checkValue === true) {
                    addObj['address'] = [addressOne];
                } if (values.checkValue === false) {
                    if (values.edit_addresId === true) {
                        addObj['address'] = [addressOne];
                    } if (values.edit_addresId === false) {
                        addObj['address'] = [addressOne, addressTwo];
                    }
                }
            }
            if (values.edit_addresId === true) {
                addObj["id"] = values && values.addres_id
                delet["id"] = values && values.addres_id
            } else {
                addObj["id"] = ""
            }
            // addObj["cart_id"] = ""
            addObj["user_id"] = user_id
            obj['userprofileId'] = user_id
            if (values.checkValue === true) {
                if (values && values.addressOne && values.addressOne.firstname.length > 0) {
                    makeFetch(addObj);
                }
            }
            if (values.checkValue === false) {
                if ((values && values.addressOne && values.addressOne.firstname.length > 0) && (values && values.addressTwo && values.addressTwo.firstname.length > 0)) {
                    makeFetch(addObj);
                }
            }
            return false
        } else {
            if (values.checkValue == true) {
                // addObjgust['address'] = [a1];
                if ( values.addressOne && addObjgust_local.length > 0) {
                    addObjgust && addObjgust.address.push(values.addressOne);
                } else if (values && values.addressOne) {
                    addObjgust["address"] = [values.addressOne]
                }

            } if (values.checkValue == false) {
                // setAddress({ a1, a2 })
                // addObjgust['address'] = [a1, a2];
                if (values.addressTwo && addObjgust_local.length > 0) {
                    addObjgust.address.push(values.addressOne, values.addressTwo);
                } else if (values.addressTwo) {
                    addObjgust["address"] = [values.addressOne, values.addressTwo]
                }
            }
            // makeFetch(addObj);
            // localStorage.getItem("gustaddres", JSON.stringify(addObjgust))

            localStorage.setItem("gustaddres", JSON.stringify(addObjgust))
            window.location.reload()
        }
        values['checkValue1'] = true
        setValues({
            values,
            ...values,
        })   // }
        // else {
        //     if (values.edit_addresId === false) {
        //         alert("allowed the five address only")
        //     }
        //     // window.location.reload(); 
        // } 
        // window.location.reload();
        // values["edit_ref"] = true
        // window.location.reload(); 
    }
    const selectaddreses = (val_addrs, num) => {
        
        localStorage.setItem("select_addres", JSON.stringify(val_addrs))
        addObjall['address_id'] = val_addrs && val_addrs.id ? val_addrs.id : ""
        if (values.checkValue1 === true) {
            values["Id2"] = val_addrs && val_addrs.id
            setValues({
                values,
                ...values,
            })
            addObjall["user_id"] = user_id
            addObjall["cart_id"] = cart_id
            if (val_addrs && val_addrs.firstname.length > 0) {
                adars1['addressOne'] = val_addrs
                addObjall['address'] = [adars1.addressOne];
                makeFetchall(addObjall);
            }
            alert("your address send on succesfully")
            if (!pathnames) {
                changePanel(3)
            }
            return false
        }
        if (values.checkValue1 === false) {
            
            if (num === 2) {
                values["Id"] = val_addrs && val_addrs.id
                if (val_addrs && val_addrs.firstname.length > 0) {
                    adars2['addressTwo'] = val_addrs
                }
                setValues({
                    values,
                    ...values,
                })
                alert("please select your shipping address")
            } else {

                if (num === 1) {
                    values["Id2"] = val_addrs && val_addrs.id
                    if (val_addrs && val_addrs.firstname && val_addrs.firstname.length > 0) {
                        adars1['addressOne'] = val_addrs
                    }
                    setValues({
                        values,
                        ...values,
                    })
                    alert("please select your billing address")
                }
            }
            if ((values && values.Id && values.Id.length > 0) && (values && values.Id2 && values.Id2.length > 0)) {
                addObjall["user_id"] = user_id
                addObjall["cart_id"] = cart_id
                addObjall['address'] = [adars1.addressOne, adars2.addressTwo];
                alert("your address send on succesfully")
                if (val_addrs && val_addrs.firstname && val_addrs.firstname.length > 0) {
                    makeFetchall(addObjall);
                }
                if (!pathnames) {
                    changePanel(3)
                }
            }
            // if (values.checkValue1 === true) {

            // }

        }
    }
    const Delete_address = (val_addrs, index) => {
        
        if (con_gust !== true) {
            if (check_dlt === false) {
                if (values && values.addressvalues && values.addressvalues.data && values.addressvalues.data.allUserAddresses.nodes.length > 1) {
                    delet["address_id"] = val_addrs && val_addrs.id
                    deleteaddress(delet)
                    window.location.reload();
                } else {
                    alert('Address already in use')
                }
                return false
            } else {
                delet["address_id"] = val_addrs && val_addrs.id
                deleteaddress(delet)
                // window.location.reload();
            }
        } else {
            var local_storage = JSON.parse(localStorage.getItem('gustaddres'))
            local_storage["address"].pop(index);
            window.localStorage.removeItem('gustaddres');
            window.localStorage.setItem('gustaddres', JSON.stringify(local_storage));
            if (valuegust.length < 0) {
                values["addrs"] = true
                setValues({
                    values,
                    ...values,
                })
            }

        }

        // const DeleteLocalStorage_address = (e, num, isAdressOne) => {
        //     
        //     var local_storage = JSON.parse(localStorage.getItem('valuessetdata'))
        //     local_storage[isAdressOne ? 'addressOne' : 'addressTwo'].pop(num);
        //     window.localStorage.removeItem('valuessetdata');
        //     window.localStorage.setItem('valuessetdata', JSON.stringify(local_storage));
        // }


        window.location.reload();
    }
    const handleKeyPress = (e, isNumber) => {
        if (isNumber) {
            if (!(e.which >= 48 && e.which <= 57)) e.preventDefault();
        }
    };
    const redirectForm1 = (event) => {
        values["addressOne"] = ""
        values["addressTwo"] = ""
        value11 = {
            addressOne: {
                firstname: "",
                lastname: "",
                addressline1: "",
                addressline2: "",
                pincode: "",
                city: "",
                state: "",
                country: "",
                country_code: "",
                contactno: "",
                addresstype: "",
                errortext: {
                    pinerr: "",
                    pinerr1: "",
                },
            },
            addressTwo: {
                firstname: "",
                lastname: "",
                addressline1: "",
                addressline2: "",
                pincode: "",
                city: "",
                state: "",
                country: "",
                country_code: "",
                contactno: "",
                addresstype: "",
                errortext: {
                    pinerr: "",
                    pinerr1: "",
                },
            },
        }
        values["addrs"] = true
        setValues({
            values,
            ...values,
            ...value11,
            // addrs: !values.addrs
        })
    }
    const redirectFormss = () => {
        
        values["addrs"] = false
        setValues({
            values,
            ...values,
        })
    }
    const redirectForm = (val_addrs, num, isAdressOne, isAdressTwo, index) => {
        
        if (con_gust !== true) {
            if (val_addrs && val_addrs.id && val_addrs.id.length > 0) {
                values["addres_id"] = val_addrs && val_addrs.id
                setValues({
                    values,
                    ...values,
                })
            }
            values["addressOne"] = val_addrs
            values["addressTwo"] = ""
            values["checkValue"] = isAdressTwo
            values["number"] = num
            values["edit_addresId"] = isAdressOne
            if (values && values["addressOne"]) {
                values["addressOne"]["contactno"] = val_addrs && val_addrs.contactNumber && val_addrs.contactNumber
            }
        } if (con_gust === true) {
            values["edit_addresId"] = true
            values["addressOne"] = val_addrs
            values["addressTwo"] = ""
            // valuegust
            var local_storage = JSON.parse(localStorage.getItem('gustaddres'))
            local_storage["address"].pop(index);
            window.localStorage.removeItem('gustaddres');
            window.localStorage.setItem('gustaddres', JSON.stringify(local_storage));
        }
        setValues({
            values,
            ...values,
            addrs: !values.addrs,
        })
        localStorage.setItem("isedit", !values.addrs ? 1 : 0)
        // localStorage.setItem('vale', JSON.stringify(values))
    }
    const handle = { redirectFormss, Delete_address, handleChange, handleSubmit, handleKeyPress, redirectForm1, redirectForm, selectaddreses };
    return { values, setValues, handle }
}
export default Addressforms;