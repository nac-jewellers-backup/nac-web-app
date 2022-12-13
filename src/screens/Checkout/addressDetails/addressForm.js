import { Button, Grid } from "@material-ui/core";
import React from "react";
import SimpleSelect from "../../../components/InputComponents/Select/Select";
import { Input } from "../../../components/InputComponents/TextField/Input";
import "./address.css";
import Addressdetails from "./addressDetails";
import Addressforms from "./Addressforms";
import { MYCOUNTRIES } from "queries/cart";
import { API_URL } from "config";

const Addressform = (props) => {
  return <AddressComponent {...props} />;
};

const AddressComponent = (props) => {
  const { values, handle, setValues } = Addressforms(() =>
    props.changePanel(3, values.selest_my_address)
  );
  const [state, setState] = React.useState(null);
  const [countryCode, setCountryCode] = React.useState();
  const cl = (
    <input
      onChange={() =>
        setValues({
          values,
          ...values,
          checkValue: !values.checkValue,
        })
      }
      type="checkbox"
      checked={values.checkValue}
    />
  );
  const redirectAdd = (num) => {
   
    handle.redirectForm1();
    setState(num);
  };
  const redirectAdd2 = (num) => {
 
    handle.redirectForm1();
    setState(num);
  };


  const json = (response) => {
    return response.json();
  };

  var isedit = localStorage.getItem("isedit");
  const aa = localStorage.getItem("m")
    ? localStorage.getItem("m")
    : values.addressOne.salutation;

    const getCountries=()=>{
      fetch(`${API_URL}/graphql`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query:MYCOUNTRIES,
        }),
      })
        .then(json)
        .then((data) => {
           let main = data.data;
           let countries=[]
           main.allMasterCountries.nodes.map(_ =>{
             let obj={}
             obj.label = _.nicename
             obj.value = _.iso
             countries.push(obj)
           })
           setCountryCode(countries)
        })
        .catch(err=>{
          console.log(err,'err')
        })
    }

    React.useEffect(()=>{
       getCountries();
    },[])

  return (
    <Grid>
      <div>
        {(isedit === "1" ? true : false) && values.addrs === true ? (
          <div className="pt-sm">
            <form
              onSubmit={(e) => {
                handle.handleSubmit(e);
              }}
              action="javascript:void(0)"
            >
              {localStorage.getItem("valuessetdata") ||
              localStorage.getItem("vals") ? (
                <h5 className="title"> Edit Address</h5>
              ) : (
                ""
              )}

              <Grid container item xs={12} lg={12}>
                <Grid
                  item
                  xs={12}
                  lg={
                    window.location.pathname.split("-")[0] === "/account"
                      ? 12
                      : 12
                  }
                >
                  {state == 1 || state == null ? (
                    <h5 className="title"> Shipping Address</h5>
                  ) : (
                    <h5 className="title"> Billing Address</h5>
                  )}

                  <Grid container spacing={12}>
                   
                    <Grid item lg={6}>
                      <Input
                        name="firstname"
                        className="text-f"
                        type="text"
                        value={values.addressOne.firstname}
                        placeholder="First name"
                        required
                        onChange={(event) =>
                          handle.handleChange(
                            "addressOne",
                            "firstname",
                            event.target.value
                          )
                        }
                        helperText="First name is required"
                      />
                    </Grid>
                    <Grid item lg={6}>
                      <Input
                        className="text-f"
                        type="text"
                        name="lastname"
                        value={values.addressOne.lastname}
                        placeholder="Last name"
                        required
                        onChange={(event) =>
                          handle.handleChange(
                            "addressOne",
                            "lastname",
                            event.target.value
                          )
                        }
                        helperText="Last name is required"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={12}>
                    <Grid item xs={6} lg={6}>
                      <SimpleSelect
                        name='country'
                        selectData={countryCode ?? []}
                        onChange={(event) =>
                          handle.handleChange(
                            "addressOne",
                            "country",
                            event.target.value,
                          )
                        }
                        value={values.addressOne.country ?? ''}
                      />
                    </Grid>
                    <Grid item xs={6} lg={6}>
                      <Input
                        className="text-f"
                        type="tel"
                        name="pincode"
                        maxLength="6"
                        placeholder="Pin code/Zip code"
                        onChange={(event) =>
                          handle.handleChange(
                            "addressOne",
                            "pincode",
                            event.target.value,
                            "pincode1"
                          )
                        }
                        value={values.addressOne.pincode}
                        onKeyPress={(e) => handle.handleKeyPress(e, "pincode")}
                        // helperText="Pin Code is required"
                        // required
                      />
                      <label className="errtext">
                        {" "}
                        {values.addressOne &&
                          values.addressOne.errortext &&
                          values.addressOne.errortext.pinerr}
                      </label>
                    </Grid>
                  </Grid>
                  <Grid container spacing={12}>
                    <Grid item xs={12} lg={12}>
                      <Input
                        type="text"
                        placeholder="Address"
                        name="addressline1"
                        onChange={(event) =>
                          handle.handleChange(
                            "addressOne",
                            "addressline1",
                            event.target.value
                          )
                        }
                        value={values.addressOne.addressline1}
                        helperText="Address is required"
                        required
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={12}>
                    <Grid item xs={6} lg={6}>
                      <Input
                        style={{
                          float: "left",
                          width: "99%",
                          background: "rgba(192, 192, 192, 0.41)",
                        }}
                        type="text"
                        name="state"
                        placeholder="State"
                        onChange={(event) =>
                          handle.handleChange(
                            "addressOne",
                            "state",
                            event.target.value
                          )
                        }
                        value={values.addressOne.state}
                        helperText="State is required"
                        InputProps={{
                          readOnly: true,
                        }}
                        required
                      />
                    </Grid>
                    <Grid item xs={6} lg={6}>
                      <Input
                        className="text-f"
                        type="text"
                        name="city"
                        placeholder="City"
                        style={{ background: "rgba(192, 192, 192, 0.41)" }}
                        onChange={(event) =>
                          handle.handleChange(
                            "addressOne",
                            "city",
                            event.target.value
                          )
                        }
                        value={values.addressOne.city}
                        helperText="City is required"
                        InputProps={{
                          readOnly: true,
                        }}
                        required
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={12}>
                   
                    <Grid item xs={12} lg={12}>
                      <Input
                        className="text-f"
                        type="tel"
                        name="contactno"
                        onKeyPress={(e) =>
                          handle.handleKeyPress(e, "contactno")
                        }
                        onChange={(event) =>
                          handle.handleChange(
                            "addressOne",
                            "contactno",
                            event.target.value
                          )
                        }
                        placeholder="Mobile number"
                        value={values.addressOne.contactno}
                        helperText="Please enter yout 10 digit mobile number"
                        maxLength={10}
                        minLength={10}
                        required
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <p class="form-group tp">
                  {window.location.pathname.split("-")[0] === "/account" ||
                  values.edit_addresId === true ? (
                    ""
                  ) : (
                    <>
                      {cl}
                      <span>
                        {!values.checkValue &&
                          "If your Billing address is same as your shipping address, please check the box and fill up the shipping address in the form."}
                        {values.checkValue &&
                          "If your Billing address is different from your shipping address, please uncheck the box to the left and fill up the billing address in the form."}
                      </span>
                    </>
                  )}
                </p>{" "}
                {window.location.pathname.split("-")[0] === "/account" ||
                values.edit_addresId === true ? (
                  ""
                ) : (
                  <>
                    <Grid container item lg={1} />
                    {!values.checkValue && (
                      <Grid item xs={12} lg={12}>
                        <br />
                        <br />
                        <h5 className="title"> Billing Address</h5>
                        <Grid container spacing={12}>
                          <Grid lg={2}>
                            <SimpleSelect
                              val={"2"}
                              name={["Select"]}
                              selectData={[
                                {label:"Mr",value:"Mr"},
                                {label:"Mrs",value:"Mrs"},
                                {label:"Ms",value:"Ms"}
                              ]}
                              // selectData={["Mr", "Mrs", "Ms"]}
                            />
                          </Grid>
                          <Grid item xs={4} lg={5}>
                            <Input
                              name="firstnametwo"
                              className="text-f"
                              type="text"
                              value={values.addressTwo.firstname}
                              placeholder="First name"
                              required
                              onChange={(event) =>
                                handle.handleChange(
                                  "addressTwo",
                                  "firstname",
                                  event.target.value
                                )
                              }
                              helperText="First name is required"
                            />
                          </Grid>
                          <Grid item xs={4} lg={5}>
                            <Input
                              className="text-f"
                              type="text"
                              name="lastnametwo"
                              value={values.addressTwo.lastname}
                              placeholder="Last name"
                              required
                              onChange={(event) =>
                                handle.handleChange(
                                  "addressTwo",
                                  "lastname",
                                  event.target.value
                                )
                              }
                              helperText="Last name is required"
                            />
                          </Grid>
                        </Grid>
                        <Grid container spacing={12}>
                          <Grid item xs={6} lg={6}>
                            <SimpleSelect
                              name={
                                values.addressTwo.country
                                  ? values.addressTwo.country
                                  : ""
                              }
                              selectData={countryCode ?? []}
                            />
                          </Grid>
                          <Grid item xs={6} lg={6}>
                            <Input
                              className="text-f"
                              type="tel"
                              name="pincodetwo"
                              placeholder="Pin code/Zip code"
                              onChange={(event) =>
                                handle.handleChange(
                                  "addressTwo",
                                  "pincode",
                                  event.target.value,
                                  "pincode2"
                                )
                              }
                              value={values.addressTwo.pincode}
                              onKeyPress={(e) =>
                                handle.handleKeyPress(e, "pincode")
                              }
                              helperText="Pin code is required"
                              required
                            />
                            <label className="errtext">
                              {" "}
                              {values.addressOne &&
                                values.addressTwo.errortext &&
                                values.addressTwo.errortext.pinerr1}
                            </label>
                          </Grid>
                        </Grid>
                        <Grid container spacing={12}>
                          <Grid item xs={12} lg={12}>
                            <Input
                              type="text"
                              placeholder="Address"
                              name="addressline1two"
                              onChange={(event) =>
                                handle.handleChange(
                                  "addressTwo",
                                  "addressline1",
                                  event.target.value
                                )
                              }
                              value={values.addressTwo.addressline1}
                              helperText="Address is required"
                              required
                            />
                          </Grid>
                        </Grid>
                        <Grid container spacing={12}>
                          <Grid item xs={6} lg={6}>
                            <Input
                              style={{
                                float: "left",
                                width: "99%",
                                background: "rgba(192, 192, 192, 0.41)",
                              }}
                              type="text"
                              name="statetwo"
                              placeholder="State"
                              onChange={(event) =>
                                handle.handleChange(
                                  "addressTwo",
                                  "state",
                                  event.target.value
                                )
                              }
                              value={values.addressTwo.state}
                              helperText="State is required"
                              InputProps={{
                                readOnly: true,
                              }}
                              required
                            />
                          </Grid>
                          <Grid item xs={6} lg={6}>
                            <Input
                              className="text-f"
                              type="text"
                              name="citytwo"
                              placeholder="City"
                              style={{
                                background: "rgba(192, 192, 192, 0.41)",
                              }}
                              onChange={(event) =>
                                handle.handleChange(
                                  "addressTwo",
                                  "city",
                                  event.target.value
                                )
                              }
                              value={values.addressTwo.city}
                              helperText="City is required"
                              InputProps={{
                                readOnly: true,
                              }}
                              required
                            />
                          </Grid>
                        </Grid>

                        <Grid container spacing={12}>
                          <Grid item xs={3} lg={3}>
                            <SimpleSelect
                              name={["+91"]}
                              selectData={[
                                {label:"+91",value:"+91"},
                              ]}
                              // selectData={["+91"]}
                              disabled={"disabled"}
                            />
                          </Grid>
                          <Grid item xs={9} lg={9}>
                            <Input
                              className="text-f"
                              type="tel"
                              name="contactnotwo"
                              onChange={(event) =>
                                handle.handleChange(
                                  "addressTwo",
                                  "contactno",
                                  event.target.value
                                )
                              }
                              onKeyPress={(e) =>
                                handle.handleKeyPress(e, "contactno")
                              }
                              placeholder="Mobile number"
                              value={values.addressTwo.contactno}
                              helperText="Please enter your 10 digit mobile number"
                              isNumber
                              maxLength={10}
                              minLength={10}
                              required
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                  </>
                )}
              </Grid>

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                {values.edit_addresId === true ? (
                  <Button
                    onClick={() => handle.redirectFormss()}
                    style={{
                      borderRadius: "0px",
                      padding: "6px 8px",
                      lineHeight: "1.75",
                      border: "1px solid #394578",
                    }}
                    className=""
                  >
                    Cancel
                  </Button>
                ) : (
                  ""
                )}{" "}
                &nbsp;
                <Button type="submit" className="apply-b">
                  Add
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <Addressdetails
            open={values.open}
            setOpen={values.setOpen}
            handleClose={handle.handleClose}
            handleOpen={handle.handleOpen}
            Delete_address={handle.Delete_address}
            selectaddreses={handle.selectaddreses}
            values={values}
            setValues={setValues}
            changevalue={props.changePanel}
            redirectForm1={redirectAdd}
            redirectForm2={redirectAdd2}
            redirectForm={handle.redirectForm}
            changeaddress={props.changeaddress}
            order={props.order}
          />
        )}
      </div>
    </Grid>
  );
};
export default Addressform;
