import { Checkbox, FormControlLabel, Hidden } from "@material-ui/core";
import { API_URL } from "config";
import { CartContext } from "context";
import cart from "mappers/cart";
import { cartCodPincode } from "queries/pincode";
import { CheckForCod } from "queries/productdetail";
import React from "react";
import CashonDelivey from "./cashonDelivery";
import Netbanking from "./netBanking";
import "./payment.css";

class PaymentIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: "CashonDelivey",
      disabledCOD: false,
      cod: false,
      payonline: false,
      payment: null,
      show: false,
    };
  }

  toggleCollapsed = (name) => {
    if (name == "CashonDelivey" && this.state.disabledCOD) {
      return false;
    } else this.setState({ isActive: [name] });
  };
  componentDidMount() {
    if (!this.props.isCodAvailable) {
      this.setState({ isActive: "Netbanking", disabledCOD: true });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isCodAvailable !== this.props.isCodAvailable)
      if (!this.props.isCodAvailable) {
        this.setState({ isActive: "Netbanking", disabledCOD: true });
      }
  }
  render() {
    var a = 1;

    const dataCard1 = this.props.data ? this.props.data : [];
    const datacheck = [
      {
        id: 1,
        title: "Credit card",
        value: "Netbanking",
      },
      {
        id: 2,
        title: "Debit card",
        value: "Netbanking",
      },
      {
        id: 3,
        title: "Net Banking",
        value: "Netbanking",
      },
      {
        id: 4,
        title: "Cash on Delivery",
        value: "CashonDelivey",
      },
      {
        id: 5,
        title: "Offline Payment",
        value: "CashonDelivey",
      },
    ];

    const checked = (checked, id) => {
      this.setState({ payment: checked ? id : null });
    };

    return (
      <div>
        <Hidden smDown>
          {datacheck.map((val) => {
            return (
              <>
                <div key={val.id}>
                  <FormControlLabel
                    onChange={(e) => {
                      checked(e.target.checked, val.id);
                      this.toggleCollapsed(val.value);
                    }}
                    control={
                      <Checkbox checked={this.state.payment === val.id} />
                    }
                    label={
                      <span
                        style={{
                          color: "gray",
                          whiteSpace: "nowrap",
                          fontSize: "14px",
                        }}
                      >
                        {val.title}
                      </span>
                    }
                  />
                  <br />
                </div>
              </>
            );
          })}
          <div>
            {this.state.payment == 1 && <Netbanking />}
            {this.state.payment == 2 && <Netbanking />}
            {this.state.payment == 3 && <Netbanking />}
            {this.state.payment == 4 && <CashonDelivey type="COD" />}
            {this.state.payment == 5 && <CashonDelivey type="Offline" />}
          </div>
        </Hidden>

        <Hidden mdUp>
          {datacheck.map((val) => {
            return (
              <>
                <div key={val.id}>
                  <FormControlLabel
                    onChange={(e) => {
                      checked(e.target.checked, val.id);
                      this.toggleCollapsed(val.value);
                    }}
                    control={
                      <Checkbox checked={this.state.payment === val.id} />
                    }
                    label={
                      <span
                        style={{
                          color: "gray",
                          whiteSpace: "nowrap",
                          fontSize: "12px",
                        }}
                      >
                        {val.title}
                      </span>
                    }
                  />
                  <br />
                </div>
              </>
            );
          })}
          <div>
            {this.state.payment == 1 && <Netbanking />}
            {this.state.payment == 2 && <Netbanking />}
            {this.state.payment == 3 && <Netbanking />}
            {this.state.payment == 4 && <CashonDelivey type="COD" />}
            {this.state.payment == 5 && <CashonDelivey type="Offline" />}
          </div>
        </Hidden>
      </div>
    );
  }
}
const Components = (props) => {
  const [codAvailability, setCodAvailability] = React.useState({});
  let {
    CartCtx: { cartFilters, data, loading, error },
  } = React.useContext(CartContext);

  var cartId = cartFilters._cart_id
    ? cartFilters._cart_id
    : JSON.parse(localStorage.getItem("cart_id"))
    ? JSON.parse(localStorage.getItem("cart_id")).cart_id
    : null;
  const status = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  };

  const json = (response) => {
    return response.json();
  };
  let content, mapped;
  if (!loading && !error) {
    if (Object.keys(data).length !== 0) {
      mapped = cart(data);
    }
  }
  if (cartId) {
    if (
      data.data.allTransSkuLists.nodes
        .map((val) => {
          return val.productListByProductId.productMaterialsByProductSku.nodes;
        })
        .flat()
        .findIndex((val) => Boolean(val.materialName === "Silver")) > -1
    ) {
      if (codAvailability !== false) {
        setCodAvailability(false);
      }
    } else {
      fetch(`${API_URL}/graphql`, {
        method: "post",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: cartCodPincode,
          variables: { cartId: cartId },
        }),
      })
        .then(status)
        .then(json)
        .then((val) => {
          if (val.data.allCartAddresses.nodes.length > 0) {
            var pincode = val.data.allCartAddresses.nodes[0].pincode;
            fetch(`${API_URL}/graphql`, {
              method: "post",

              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                query: CheckForCod,
                variables: { pincode: pincode },
              }),
            })
              .then(status)
              .then(json)
              .then((val) => {
                if (mapped && mapped.length > 0 && val) {
                  const min_cart_value = 5000;
                  const max_cart_value = val.data
                    ? val.data.allPincodeMasters.nodes[0].maxCartvalue
                    : null;
                  const data = mapped ? mapped : [];
                  var dataCard1;
                  var cart_price;

                  if (data.length > 0) {
                    function myFunc(total, num, discounted_price) {
                      discounted_price =
                        this && this.props.cartFilters.discounted_price
                          ? JSON.stringify(
                              this.props.cartFilters.discounted_price
                            )
                          : "";
                      if (discounted_price.length > 0) {
                        var a = Math.round(total + num);
                        cart_price = a - discounted_price;
                      } else {
                        cart_price = Math.round(total + num);
                      }

                      return cart_price;
                    }
                    dataCard1 =
                      data &&
                      data
                        .map((val) => {
                          return val.dataCard1[0].offerPrice;
                        })
                        .reduce(myFunc);

                    if (min_cart_value && max_cart_value) {
                      if (
                        dataCard1 >= min_cart_value &&
                        dataCard1 <= max_cart_value
                      ) {
                        setCodAvailability(true);
                        return false;
                      } else {
                        setCodAvailability(false);
                      }
                    }
                  }
                }
              });
          }
        });
    }
  }

  //  stopped

  if (Object.keys(data).length === 0)
    content = (
      <div className="overall-loader">
        <div id="loading"></div>
      </div>
    );
  else
    content = (
      <PaymentIndex
        {...props}
        data={mapped}
        cartFilters={cartFilters}
        isCodAvailable={codAvailability}
      />
    );
  return content;
};
export default Components;
