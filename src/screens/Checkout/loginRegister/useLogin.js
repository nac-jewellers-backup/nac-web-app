import React from "react";
import { useNetworkRequest } from "hooks/index";
import { useCheckForCod } from "hooks/CheckForCodHook";
import { ADDRESSDETAILS } from "queries/productdetail";
import { CartContext } from "context";
import Addressforms from "screens/Checkout/addressDetails/addressForm";

var obj = {};
var obj1 = {};
var val = {};
var _history;
const useLogin = (changePanel, props) => {
  const [values, setValues] = React.useState({
    password: "",
    email: "",
    roles: ["user"],
    errortext: {
      emerr: "",
      passerr: "",
    },
    error: {
      passerr: false,
      emerr: false,
    },
  });
  const [invalids, setInvalids] = React.useState({
    username: false,
    password: false,
  });
  const [history, setHistory] = React.useState({});

  const { data, error, loading, makeFetch, mapped, status } = useNetworkRequest(
    "/api/auth/signin",
    {},
    []
  );
  const { setCartFilters } = React.useContext(CartContext);
  const { setValues: addressetValues } = Addressforms();
  const pathnames = window.location.pathname === "/login";

  const {
    loading: codloading,
    error: coderror,
    data: addresData,
    makeRequestCod,
  } = useCheckForCod(ADDRESSDETAILS, () => {}, {});
  React.useEffect(() => {
    var ms = data && data.message;

    if (ms && data.auth === false) {
      values["error"]["passerr"] = true;
      values["errortext"]["passerr"] = ms;
      setValues({
        ...values,
        values,
      });

      // return false
    } else if (ms && data.auth === undefined) {
      values["error"]["emerr"] = true;
      values["errortext"]["emerr"] = ms;
      setValues({
        ...values,
        values,
      });
      // return false
    } else {
      var a = data.userprofile ? data.userprofile : "";
      if (values.error.emerr) {
        values["error"]["emerr"] = false;
        values["errortext"]["emerr"] = "";
        setValues({
          ...values,
          values,
        });
      }

      if (
        JSON.stringify(a).length > 10 &&
        values["error"] &&
        values["errortext"]
      ) {
        values["error"]["passerr"] = false;
        values["errortext"]["passerr"] = "";

        var bbn =
          data && data.userprofile && data.userprofile.id
            ? data.userprofile.id
            : "";
        if (bbn.length > 0 || bbn !== undefined) {
          localStorage.setItem("email", data.userprofile.email);
          var bb = data.userprofile.id ? data.userprofile.id : "";
          obj["userprofileId"] = bb;
          obj1["user_id"] = bb;
          obj1["reload"] = "loading";
          makeRequestCod(obj);
          localStorage.setItem("user_id", bb);
          sessionStorage.setItem("user_id", bb);
          localStorage.setItem("accessToken", data.accessToken);
          // setValues({user_id:data.userprofile.id})
          // changePanel(3)
        }
      }
    }
  }, [data]);
  React.useEffect(() => {
  
    var a = addresData ? addresData : "";
    if (JSON.stringify(a).length > 10) {
      setCartFilters(obj1);
      localStorage.setItem("true", false);
      localStorage.setItem("check_dlt", false);
      val["addressvalues"] = addresData;
      val["addrs"] = false;
      localStorage.setItem("isedit", 1);
      addressetValues && addressetValues(val);

      if (!pathnames) {
        changePanel(3);
      } else {
        if (
          localStorage.getItem("review_location") &&
          localStorage.getItem("review_location").length > 0
        ) {
          window.location.href = localStorage.getItem("review_location");
          return false;
        } else {
          console.clear();
          window.location.href = "/";
          return false;
        }
      }
    }
  }, [addresData]);

  const handleChange = (type, value) => {
    if (values.email !== "" && values["error"] && values["errortext"]) {
      values["error"]["emerr"] = false;
      values["errortext"]["emerr"] = "";
    }
    if (values.password !== "" && values["error"] && values["errortext"]) {
      values["error"]["passerr"] = false;
      values["errortext"]["passerr"] = "";
    }
    setValues({
      ...values,
      [type]: value,
    });
  };

  const handleInvalid = (type, status) => {
    setInvalids({
      ...invalids,
      [type]: status,
    });
  };
  const clear = () => {
    setValues({
      password: "",
      email: "",
      errortext: {
        emerr: "",
        passerr: "",
      },
      error: {
        passerr: false,
        emerr: false,
      },
    });
  };
  const errmsg = data.message ? data.message : "";
  const auth = data.userprofile ? data.userprofile.id : "";
  const handelSubmit = (e, history) => {
   
    console.log(values);
    if (values.email === "" && values["error"] && values["errortext"]) {
      values["error"]["emerr"] = true;
      values["errortext"]["emerr"] = "Email is required";

      setValues({
        ...values,
        values,
      });
    }
    if (values.password === "" && values["error"] && values["errortext"]) {
      values["error"]["passerr"] = true;
      values["errortext"]["passerr"] = "Password is required";
      setValues({
        ...values,
        values,
      });
      return false;
    }
    if (values.email === "" && values["error"] && values["errortext"]) {
      values["error"]["emerr"] = true;
      values["errortext"]["emerr"] = "Email is required";

      setValues({
        ...values,
        values,
      });
      return false;
    }
    var emailvld =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailvld.test(values.email)) {
      values["error"]["emerr"] = true;
      values["errortext"]["emerr"] = `Please enter a valid email address.`;
      setValues({
        ...values,
        values,
      });

      return false;
    }
    let obj_values = {};
    let _password = values.password;
    let _email = values.email;
    let _roles = values.roles;
    obj_values = { password: _password, email: _email, roles: _roles };
    makeFetch(obj_values);
  };

  const VerifyOTP = (data) => {
 

    localStorage.setItem("email", data.userprofile.email);
    var bb = data.userprofile.id ? data.userprofile.id : "";
    obj["userprofileId"] = bb;
    obj1["user_id"] = bb;
    obj1["reload"] = "loading";
    makeRequestCod(obj);
    localStorage.setItem("user_id", bb);
    sessionStorage.setItem("user_id", bb);
    localStorage.setItem("accessToken", data.accessToken);

    // val["addrs"] = true;
    // makeRequestCod(obj);
  };
  const FacebookLogin = (data) => {
  
    localStorage.setItem("email", data.userprofile.email);
    var bb = data.userprofile.id ? data.userprofile.id : "";
    obj["userprofileId"] = bb;
    obj1["user_id"] = bb;
    obj1["reload"] = "loading";
    makeRequestCod(obj);
    localStorage.setItem("user_id", bb);
    sessionStorage.setItem("user_id", bb);
    localStorage.setItem("accessToken", data.accessToken);
  };

  const handlers = {
    handleChange,
    handleInvalid,
    handelSubmit,
    clear,
    VerifyOTP,
    FacebookLogin,
  };

  return { values, handlers, setValues, data };
};

export default useLogin;
