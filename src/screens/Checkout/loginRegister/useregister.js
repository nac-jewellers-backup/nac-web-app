import React, { useEffect } from "react";
import { useNetworkRequest } from "hooks/index";
import { useCheckForCod } from "hooks/CheckForCodHook";
import { ADDRESSDETAILS } from "queries/productdetail";
import { CartContext } from "context";
import { USERPROFILE } from "queries/cart";

let user_ids = localStorage.getItem("user_id")
  ? localStorage.getItem("user_id")
  : "";
const salutation = localStorage.getItem("m") ? localStorage.getItem("m") : "";
var Profile_DATAS = {};
var obj_profile = {};
const useRegister = (changePanel, props) => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    confirmpassword: "",
    roles: ["user"],
    firstname: "",
    lastname: "",
    salutation: salutation,
    errortext: {
      emerr: "",
      passerr: "",
      cnfpasserr: "",
      firstname: "",
      lastname: "",
    },
    error: {
      passerr: false,
      emerr: false,
      cnfpasserr: false,
      firstname: false,
      lastname: false,
    },
  });

  const name =
    Profile_DATAS &&
    Profile_DATAS.User_Profile &&
    Profile_DATAS.User_Profile.firstName.length > 0
      ? Profile_DATAS.User_Profile.firstName
      : "";
  const [valuesadrees, setvaluesadrees] = React.useState({
    user_id: user_ids,
    firstname: "",
    lastname: "",
    contactno: "",
    pincode: "",
    country_code: "+91",
    country: "India",
    salutation: "",
  });

  const pathnames = window.location.pathname.split("-")[0] === "/account";
  const [invalids, setInvalids] = React.useState({
    username: false,
    confirmpassword: false,
  });
  const { data: reg_update_data, makeFetch: makeFetcheditAddress } =
    useNetworkRequest("/api/updateuserprofile", {}, false);
  const { data, error, loading, makeFetch } = useNetworkRequest(
    "/api/auth/signup",
    {},
    false
  );
  const { setCartFilters } = React.useContext(CartContext);
  const {
    loading: codloading,
    error: coderror,
    data: CodData,
    makeRequestCod,
  } = useCheckForCod(ADDRESSDETAILS, () => {}, {});
  const pathnamelog = window.location.pathname === "/registers";

  const {
    loading: Profile_loading,
    error: Profile_error,
    data: Profile_Data,
    makeRequestCod: propfile_fetch,
  } = useCheckForCod(USERPROFILE, () => {}, {});
  React.useEffect(() => {
    if (user_ids && user_ids.length > 0) {
      obj_profile["id"] = user_ids;
      propfile_fetch(obj_profile);
    }
  }, []);
  React.useEffect(() => {
    Profile_Data?.data?.userProfileById?.firstName &&
      (valuesadrees["firstname"] =
        Profile_Data?.data?.userProfileById?.firstName ?? "");

    Profile_Data?.data?.userProfileById?.lastName &&
      (valuesadrees["lastname"] =
        Profile_Data?.data?.userProfileById?.lastName ?? "");
    Profile_Data?.data?.userProfileById?.mobile &&
      (valuesadrees["contactno"] =
        Profile_Data?.data?.userProfileById?.mobile ?? "");
    Profile_Data?.data?.userProfileById?.pincode &&
      (valuesadrees["pincode"] =
        Profile_Data?.data?.userProfileById?.pincode ?? "");
    Profile_Data?.data?.userProfileById?.salutation &&
      (valuesadrees["salutation"] =
        Profile_Data?.data?.userProfileById?.salutation ?? "");
    setvaluesadrees({
      ...valuesadrees,
      valuesadrees,
    });
  }, [Profile_Data]);
  const clear = () => {
    setValues({
      email: "",
      password: "",
      confirmpassword: "",
      firstname: "",
      lastname: "",
      salutation: salutation,
      errortext: {
        emerr: "",
        passerr: "",
        cnfpasserr: "",
        firstname: "",
        lastname: "",
      },
      error: {
        passerr: false,
        emerr: false,
        cnfpasserr: false,
        firstname: false,
        lastname: false,
      },
    });
  };
  useEffect(() => {
    if (reg_update_data && reg_update_data === "Profile Updated Successfully") {
      alert("Profile Updated Successfully");
    }
  }, [reg_update_data]);

  useEffect(() => {
    var ms = data && data.message;
    if (ms && values["error"] && values["errortext"]) {
      values["error"]["emerr"] = true;
      values["errortext"]["emerr"] = "Your email is already exists";
      setValues({
        ...values,
        values,
      });
    } else {
      var v = data.user_profile_id ? data.user_profile_id : "";
      if (v.length > 0 && values["error"] && values["errortext"]) {
        localStorage.setItem("true", false);
        values["error"]["emerr"] = false;
        values["errortext"]["emerr"] = "";
        var user_id = data && data.user_profile_id;
        setValues({
          ...values,
          values,
        });
        var obj = {};
        obj["userprofileId"] = bb;
        var bb = data.user_profile_id ? data.user_profile_id : "";
        localStorage.setItem("isedit", 1);
        clear();
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("user_id", data.user_profile_id);
        localStorage.setItem("accessToken", data.accessToken);

        setValues({ user_id: data.user_profile_id });
        setCartFilters({ user_id });
        makeRequestCod(obj);
        if (!pathnamelog) {
          changePanel(2);
        } else {
          if (
            localStorage.getItem("review_location") &&
            localStorage.getItem("review_location").length > 0
          ) {
            window.location.href = localStorage.getItem("review_location");
            return false;
          } else {
            window.location.href = "/";
            return false;
          }
        }
      }
    }
  }, [data]);

  const errmsg = data.message ? data.message : "";
  const handleChange = (type, value) => {
    if (
      values.email !== "" &&
      type === "email" &&
      values["error"] &&
      values["errortext"]
    ) {
      values["error"]["emerr"] = false;
      values["errortext"]["emerr"] = "";
    }
    if (values.password !== "" && values["error"] && values["errortext"]) {
      values["error"]["passerr"] = false;
      values["errortext"]["passerr"] = "";
    }
    if (values.firstname !== "" && values["error"] && values["errortext"]) {
      values["error"]["firstname"] = false;
      values["errortext"]["firstname"] = "";
    }
    if (
      values.confirmpassword !== "" &&
      values["error"] &&
      values["errortext"]
    ) {
      values["error"]["cnfpasserr"] = false;
      values["errortext"]["cnfpasserr"] = "";
    }
    if (values.lastname !== "" && values["error"] && values["errortext"]) {
      values["error"]["lastname"] = false;
      values["errortext"]["lastname"] = "";
    }
    setValues({
      ...values,
      [type]: value,
    });
  };

  const handlesetvaluesadrees = (type, value) => {
    setvaluesadrees({
      ...valuesadrees,
      [type]: value,
    });
  };
  const user = data.user_profile_id ? data.user_profile_id : "";

  const handleSubmit = (e) => {
    if (!pathnames) {
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
      }
      if (
        values.confirmpassword === "" &&
        values["error"] &&
        values["errortext"]
      ) {
        values["error"]["cnfpasserr"] = true;
        values["errortext"]["cnfpasserr"] = "Confirm password is required";
        setValues({
          ...values,
          values,
        });
      }
      if (values.firstname === "" && values["error"] && values["errortext"]) {
        values["error"]["firstname"] = true;
        values["errortext"]["firstname"] = "First Name is required";
        setValues({
          ...values,
          values,
        });
      }
      if (values.lastname === "" && values["error"] && values["errortext"]) {
        values["error"]["lastname"] = true;
        values["errortext"]["lastname"] = "Last Name is required";
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
      if (!pathnames) {
        if (
          values.password !== values.confirmpassword &&
          values["error"] &&
          values["errortext"]
        ) {
          // values['error']['passerr'] = true
          values["error"]["cnfpasserr"] = true;
          // values['errortext']['passerr'] = "password doesn't match"
          values["errortext"]["cnfpasserr"] = "Password doesn't match";
          setValues({
            ...values,
            values,
          });
          return false;
        }
      }
      var emailvld =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailvld.test(values.email)) {
        values["error"]["emerr"] = true;
        values["errortext"]["emerr"] =
          "An email address must contain a single @/.";
        setValues({
          ...values,
          values,
        });
        return false;
      }
      makeFetch(values);
      return false;
    } else {
      makeFetcheditAddress(valuesadrees);
    }
  };
  const handlers = { handleSubmit, handleChange, handlesetvaluesadrees, clear };

  return { values, setValues, handlers, data, valuesadrees };
};

export default useRegister;
