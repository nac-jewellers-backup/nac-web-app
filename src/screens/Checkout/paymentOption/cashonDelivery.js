import { Button, Grid } from "@material-ui/core";
// import SimpleSelect from '../../../components/InputComponents/Select/Select';
import { CartContext } from "context";
import cart from "mappers/cart";
import React from "react";
import { API_URL } from "../../../config";
import "./payment.css";

var obj = {};
var obj_user = {};
// let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : ""
// const order_idx = localStorage.getItem('order_id') ? JSON.parse(localStorage.getItem('order_id')) : "yourorder"

class CashonDelivey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res_data: null,
    };
  }
  status = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  };
  json = (response) => {
    return response.json();
  };

  makeFetch = async (props) => {
    // await fetch(`${API_URL}/createorder`, {
    //     method: 'post',
    //     headers: {
    //         'Content-Type': 'application/json'
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: JSON.stringify(obj)
    // }).then(async res => {
    //     // alert(JSON.stringify(obj))
    //     return await  res.json();
    //     alert('Order Placed Successfully')

    // })
    fetch(`${API_URL}/createorder`, {
      method: "post",
      // body: {query:seoUrlResult,variables:splitHiphen()}
      // body: JSON.stringify({query:seoUrlResult}),

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then(this.status)
      .then(this.json)
      .then((resdata) => {
        // localStorage.removeItem("order_id")
        if (resdata !== null && resdata !== undefined) {
          localStorage.setItem("order_id", JSON.stringify(resdata.order.id));
        }
        localStorage.removeItem("select_addres");
        localStorage.removeItem("panel");
        localStorage.removeItem("cartDetails");
        localStorage.removeItem("ship_isactive");
        localStorage.removeItem("bil_isactive");
        localStorage.removeItem("set_check");
        localStorage.removeItem("cart_id");
        // if (localStorage.getItem('gut_lg')) localStorage.removeItem("user_id")
        sessionStorage.removeItem("updatedProduct");
        alert(resdata.message);
        window.location.pathname = `/paymentsuccess/${resdata.order.id}`;
      })
      .catch((err) => {});
    // localStorage.removeItem("cart_id")

    // }

    // obj_user["user_id"] = user_id
    // obj_user["jewellery"] = "jewellery"
    // this.props.setCartFilters(obj_user)
    // window.location.pathname = "/jewellery"
  };
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (this.state.res_data !== prevState.res_data) {
      // in 1.6.2 there will not execute
      alert(this.state.res_data);
    }
  }
  render() {
    let cart_id_lo = localStorage.getItem("cart_id") ? JSON.parse(localStorage.getItem("cart_id")).cart_id : "";
    let cart_id =
      this.props.cartFilters._cart_id && Object.keys(this.props.cartFilters._cart_id).length > 0
        ? this.props.cartFilters._cart_id.cart_id
        : "";
    var cart_ids = cart_id.length > 0 ? cart_id : cart_id_lo;
    let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : "";
    const data = this.props.data ? this.props.data : "";
    var discounted_price = this.props.cartFilters.discounted_price ? this.props.cartFilters.discounted_price : "";
    // var { data:coddata, error, loading, makeFetch} = useNetworkRequest('/api/auth/signin', {}, false);
    var dataCard1 = null;
    if (data.length > 0 && data !== undefined && data !== null) {
      dataCard1 =
        this.props.data &&
        this.props.data
          .map((val) => {
            return (
              Math.round(val.dataCard1[0].offerPrice) * (JSON.parse(localStorage.getItem("quantity"))[val.generatedSku] ?? 1)
            );
          })
          .reduce(myFunc);
      function myFunc(total, num) {
        discounted_price =
          this && this.props.cartFilters.discounted_price ? JSON.stringify(this.props.cartFilters.discounted_price) : "";
        if (discounted_price.length > 0) {
          var a = Math.round(total + num);
          var cart_price = a - discounted_price;
        } else {
          var cart_price = Math.round(total + num);
        }
        return cart_price;
      }
    }

    obj["payment_mode"] = "COD";
    obj["user_id"] = user_id;
    obj["cart_id"] = cart_ids;

    return (
      <div>
        <Grid container>
          <Grid item lg={12} xs={12}>
             
              <Button
               style={{borderRadius:"0px"}}
              type="submit"
              color="primary"
              variant="contained"
                onClick={() => this.makeFetch(this.props)}
              >
               Pay&nbsp;{Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  minimumFractionDigits: 0,
                }).format(Math.round(dataCard1 - discounted_price))}
              </Button>
          
          </Grid>
        </Grid>
      </div>
    );
  }
}
const Components = (props) => {
  let {
    CartCtx: { setCartFilters, cartFilters, data, loading, error },
  } = React.useContext(CartContext);
  let content, mapped;
  if (!loading && !error) {
    if (Object.keys(data).length !== 0) {
      mapped = cart(data);
    }
  }
  if (Object.keys(data).length === 0)
    content = (
      <div className="overall-loader">
        <div id="loading"></div>
      </div>
    );
  else content = <CashonDelivey {...props} data={mapped} cartFilters={cartFilters} setCartFilters={setCartFilters} />;
  return content;
};
export default Components;
