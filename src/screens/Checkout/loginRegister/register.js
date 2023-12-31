import { Button, Grid } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import SimpleSelect from "../../../components/InputComponents/Select/Select";
import { Input } from "../../../components/InputComponents/TextField/Input";
import "./loginRegisters.css";
import useRegister from "./useregister";
import { MYCOUNTRIES } from "queries/cart";
import { API_URL } from "config";

const Register = (props) => {
  return <RegisterComponent {...props} />;
};

const RegisterComponent = (props) => {
  let email = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "";
  const { values, setValues, handlers, data, valuesadrees } = useRegister(() =>
    props.changePanel(2)
  );

  const paths = window.location.pathname.split("-")[0] === "/account";
  const pathreg = window.location.pathname === "/registers";
  const salutation = localStorage.getItem("m") ? localStorage.getItem("m") : "";
  let user_ids = localStorage.getItem("user_id")
    ? localStorage.getItem("user_id")
    : "";
    const [countryCode, setCountryCode] = React.useState();
    const [countryNum,setCountryNum] = React.useState();
    const json = (response) => {
      return response.json();
    };
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
           let country_code =[]
           main.allMasterCountries.nodes.map(_ =>{
             let obj={}
             let obj2={}
             obj.label = _.nicename
             obj.value = _.iso
             obj2.label =  _.phonecode
             obj2.value = _.phonecode
             countries.push(obj)
             country_code.push(obj2)
           })
           setCountryCode(countries)
           setCountryNum(country_code)
        })
        .catch(err=>{
          console.log(err,'err')
        })
    }

    React.useEffect(()=>{
       getCountries();
    },[])

  return (
    <div className="pt-sm">
      <form
        onSubmit={(e) => {
          handlers.handleSubmit(e);
        }}
        action="javascript:void(0)"
      >
        <Grid container>
          <Grid
            item
            xs={12}
            lg={window.location.pathname === "/registers" || paths ? 12 : 12}
          >
            <Grid class="topPaddingwish">
              {window.location.pathname.split("-")[0] !== "/account" && (
                <>
                  <br />
                  <h5 className="title">
                    {window.location.pathname.split("-")[0] === "/account" ? (
                      ""
                    ) : (
                      <>
                        {window.location.pathname === "/registers" ? (
                          <h2>Register</h2>
                        ) : (
                          <h5 style={{ color: "gray" }}>Register New Users</h5>
                        )}
                      </>
                    )}
                  </h5>
                </>
              )}
              <Grid container spacing={12}>
                {paths && (
                  <Grid item lg={2} xs={4}>
                    <SimpleSelect
                      val={"1"}
                      name={
                        salutation && salutation.length > 0
                          ? salutation
                          : valuesadrees.salutation
                      }
                      selectData={[
                        {label:"Mr",value:"Mr"},
                        {label:"Mrs",value:"Mrs"},
                        {label:"Ms",value:"Ms"}
                      ]}
                    required/>
                  </Grid>
                )}
                {paths && (
                  <>
                    <Grid item lg={5} xs={4}>
                      <Input
                        margin="normal"
                        // variant="outlined"
                        type="text"
                        name="firstname"
                        value={valuesadrees.firstname}
                        placeholder="First name*"
                        onChange={(e) =>
                          handlers.handlesetvaluesadrees(
                            "firstname",
                            e.target.value
                          )
                        }
                        className="text-f"
                        helperText="First name is required"
                        required
                      />
                    </Grid>
                    <Grid item lg={5} xs={4}>
                      <Input
                        margin="normal"
                        // variant="outlined"
                        type="text"
                        name="lastname"
                        value={valuesadrees.lastname}
                        placeholder="Last name*"
                        onChange={(e) =>
                          handlers.handlesetvaluesadrees(
                            "lastname",
                            e.target.value
                          )
                        }
                        className="text-f"
                        helperText="Last name is required"
                        required
                      />
                    </Grid>
                  </>
                )}
              </Grid>
              {/* <h5>Personal Information</h5> */}
              {paths ? (
                <Input
                  style={{
                    background: "rgba(192, 192, 192, 0.41)",
                    width: "100%",
                  }}
                  value={email}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              ) : (
                <>
                  <Input
                    margin="normal"
                    // variant="outlined"
                    // type="email"
                    name="email"
                    value={values.email}
                    error={values.error && values.error.emerr ? true : false}
                    // helperText={values.errortext && values.errortext.emerr}
                    placeholder="Email address"
                    onChange={(e) =>
                      handlers.handleChange("email", e.target.value)
                    }
                  />
                  <label className="errtext">
                    {" "}
                    {values.errortext && values.errortext.emerr}
                  </label>
                </>
              )}
              {paths ? (
                <Grid container spacing={12}>
                  <Grid item xs={6} sm={4} lg={4}>
                    <Input
                      margin="normal"
                      // variant="outlined"
                      type="password"
                      name="password"
                      value={"........"}
                      // helperText={values.errortext && values.errortext.passerr}
                      placeholder="Password"
                      onChange={(e) =>
                        handlers.handleChange("password", e.target.value)
                      }
                      style={{
                        background: "rgba(192, 192, 192, 0.41)",
                        marginRight: "10px",
                      }}
                      InputProps={{
                        readOnly: true,
                      }}
                    />{" "}
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    class="leftPad"
                    style={{
                      textAlign: "center",
                      lineHeight: "66px",
                      color: "#337ab7",
                    }}
                  >
                    <NavLink to="/changepassword"> Change password </NavLink>{" "}
                  </Grid>
                </Grid>
              ) : (
                <>
                  <Input
                    margin="normal"
                    // variant="outlined"
                    type="password"
                    name="password"
                    value={values.password}
                    error={values.error && values.error.passerr ? true : false}
                    // helperText={values.errortext && values.errortext.passerr}
                    placeholder="Password"
                    onChange={(e) =>
                      handlers.handleChange("password", e.target.value)
                    }
                  />
                  <label className="errtext">
                    {" "}
                    {values.errortext && values.errortext.passerr}
                  </label>
                </>
              )}
              {paths ? (
                ""
              ) : (
                <>
                  <Input
                    margin="normal"
                    // variant="outlined"
                    type="password"
                    name="confirmpassword"
                    value={values.confirmpassword}
                    error={
                      values.error && values.error.cnfpasserr ? true : false
                    }
                    // helperText={values.errortext && values.errortext.cnfpasserr}
                    placeholder=" Confirm Password"
                    onChange={(e) =>
                      handlers.handleChange("confirmpassword", e.target.value)
                    }
                  />
                  <label className="errtext">
                    {" "}
                    {values.errortext && values.errortext.cnfpasserr}
                  </label>
                </>
              )}
              <Grid container spacing={12}>
                {!paths && (
                  <Grid item lg={2} xs={4}>
                    <SimpleSelect
                      val={"1"}
                      name={["Select"]}
                      selectData={[
                        {label:"Mr",value:"Mr"},
                        {label:"Mrs",value:"Mrs"},
                        {label:"Ms",value:"Ms"}
                      ]}
                    />
                  </Grid>
                )}
                {!paths && (
                  <>
                    <Grid item lg={5} xs={4}>
                      <Input
                        margin="normal"
                        // variant="outlined"
                        type="text"
                        name="firstname"
                        value={values.firstname}
                        error={
                          values.error && values.error.firstname ? true : false
                        }
                        // helperText={values.errortext && values.errortext.firstname}
                        placeholder="First name*"
                        onChange={(e) =>
                          handlers.handleChange("firstname", e.target.value)
                        }
                        className="text-f"
                        // helperText=""
                      />
                      <label className="errtext">
                        {" "}
                        {values.errortext && values.errortext.firstname}
                      </label>
                    </Grid>
                    <Grid item lg={5} xs={4}>
                      <Input
                        margin="normal"
                        // variant="outlined"
                        type="text"
                        name="lastname"
                        value={values.lastname}
                        error={
                          values.error && values.error.lastname ? true : false
                        }
                        // helperText={values.errortext && values.errortext.lastname}
                        placeholder="Last name*"
                        onChange={(e) =>
                          handlers.handleChange("lastname", e.target.value)
                        }
                        className="text-f"
                        // helperText=""
                      />
                      <label className="errtext">
                        {" "}
                        {values.errortext && values.errortext.lastname}
                      </label>
                    </Grid>
                  </>
                )}
              </Grid>

              {paths && (
                <Grid item xs={12} lg={12}>
                  <Grid container spacing={12}>
                    <Grid item xs={6} lg={6}>
                      <SimpleSelect
                         name='country'
                         selectData={countryCode ?? []}    
                         onChange={(event) =>
                           handlers.handlesetvaluesadrees('country', event.target.value)
                         }
                         value={valuesadrees.country ?? ''}
                      />
                    </Grid>
                    <Grid item xs={6} lg={6}>
                      <Input
                        className="text-f"
                        type="tel"
                        name="pincode"
                        placeholder="Pin Code/Zip Code"
                        onChange={(e) =>
                          handlers.handlesetvaluesadrees(
                            "pincode",
                            e.target.value
                          )
                        }
                        value={valuesadrees.pincode}
                        // onKeyPress={(e) => handle.handleKeyPress(e, "pincode")}
                        helperText="Enter valid pincode"
                        // maxLength={6}
                        required
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={12}>
                    <Grid item xs={3} lg={3}>
                      <SimpleSelect
                         name={'country_code'}
                         selectData={countryNum ?? []}
                         onChange={(event) =>
                            handlers.handlesetvaluesadrees('country_code', event.target.value)
                          }
                         value={valuesadrees.country_code ?? ""}  
                      />
                    </Grid>
                    <Grid item xs={9} lg={9}>
                      <Input
                        className="text-f"
                        type="tel"
                        name="contactno"
                        onChange={(event) =>
                          handlers.handlesetvaluesadrees(
                            "contactno",
                            event.target.value
                          )
                        }
                        // onKeyPress={(e) => handle.handleKeyPress(e, "contactno")}
                        placeholder="Phone*"
                        value={valuesadrees.contactno}
                        helperText="Enter your 10 digit mobile number"
                        isNumber
                        maxLength={10}
                        // minLength={10}
                        required
                      />
                    </Grid>
                  </Grid>
                </Grid>
              )}

              <div className="login-butn">
                {paths || pathreg ? (
                  ""
                ) : (
                  <>
                    <Button
                      className="back-b"
                      onClick={() => {
                        props.change();
                      }}
                    >
                      Back
                    </Button>
                    <br />
                  </>
                )}
                <br />
                <Button className="apply-b" type="submit">
                  {paths ? "Save" : "Register"}
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
export default Register;
