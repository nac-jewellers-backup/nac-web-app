import { Button, Grid } from "@material-ui/core";
import { CartContext } from "context";
import cart from "mappers/cart";
import React, { useEffect } from "react";
import { API_URL } from "../../../config";
import "./payment.css";
import CurrencyConversion from "utils/CurrencyConversion";
var obj = {};

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
    fetch(`${API_URL}/createorder`, {
      method: "post",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then(this.status)
      .then(this.json)
      .then((resdata) => {
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
        sessionStorage.removeItem("updatedProduct");

        window.location.pathname = `/paymentsuccess/${resdata.order.id}`;
      })
      .catch((err) => {});
  };
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (this.state.res_data !== prevState.res_data) {
      alert(this.state.res_data);
    }
  }
  render() {
    let cart_id_lo = localStorage.getItem("cart_id")
      ? JSON.parse(localStorage.getItem("cart_id")).cart_id
      : "";
    let cart_id =
      this.props.cartFilters._cart_id &&
      Object.keys(this.props.cartFilters._cart_id).length > 0
        ? this.props.cartFilters._cart_id.cart_id
        : "";
    var cart_ids = cart_id.length > 0 ? cart_id : cart_id_lo;
    let user_id = localStorage.getItem("user_id")
      ? localStorage.getItem("user_id")
      : "";
    const data = this.props.data ? this.props.data : "";
    var discounted_price = this.props.cartFilters.discounted_price
      ? this.props.cartFilters.discounted_price
      : "";
    var dataCard1 = null;
    if (data.length > 0 && data !== undefined && data !== null) {
      dataCard1 =
        this.props.data &&
        this.props.data
          .map((val) => {
            return (
              Math.round(val.dataCard1[0].offerPrice) *
              (JSON.parse(localStorage.getItem("quantity"))[val.generatedSku] ??
                1)
            );
          })
          .reduce(myFunc);
      function myFunc(total, num) {
        discounted_price =
          this && this.props.cartFilters.discounted_price
            ? JSON.stringify(this.props.cartFilters.discounted_price)
            : "";
        if (discounted_price.length > 0) {
          var a = Math.round(total + num);
          var cart_price = a - discounted_price;
        } else {
          var cart_price = Math.round(total + num);
        }
        return cart_price;
      }
    }

    obj["payment_mode"] = this?.props?.type ?? "COD";
    obj["user_id"] = user_id;
    obj["cart_id"] = cart_ids;

    return (
      <div>
        <Grid container>
          <Grid item lg={12} xs={12}>
            <Button
              style={{ borderRadius: "0px" }}
              type="submit"
              color="secondary"
              variant="contained"
              onClick={() => this.makeFetch(this.props)}
            >
              PAY&nbsp;
              {CurrencyConversion(
                Math.round(
                  this.props.ShippingCharge === "Free"
                    ? dataCard1 - discounted_price + 0
                    : dataCard1 - discounted_price + this.props.ShippingCharge
                )
              )}
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
  const [ShippingCharge, setShippingCharge] = React.useState(0);

  useEffect(() => {
    fetch(`${API_URL}/getshippingcharge`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: localStorage.getItem("cart_id"),
      method: "POST",
    })
      .then(async (response) => response.json())
      .then((val) => {
        if (val) setShippingCharge(val.shipping_charge);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
  else
    content = (
      <CashonDelivey
        {...props}
        data={mapped}
        ShippingCharge={ShippingCharge ?? 0}
        cartFilters={cartFilters}
        setCartFilters={setCartFilters}
      />
    );
  return content;
};
export default Components;
