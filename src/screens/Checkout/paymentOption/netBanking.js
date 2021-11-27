import { Grid } from "@material-ui/core";
// import SimpleSelect from '../../../components/InputComponents/Select/Select';
import { CartContext } from "context";
import cart from "mappers/cart";
import React from "react";
import "./payment.css";
import PaymentHiddenForm from "./paymentHiddenForm";
class Netbanking extends React.Component {
  render() {
    let cart_id = localStorage.getItem("cart_id") ? JSON.parse(localStorage.getItem("cart_id")).cart_id : "";
    let user_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : "";
    const data = this.props.data ? this.props.data : "";
    var discounted_price = this.props.cartFilters.discounted_price ? this.props.cartFilters.discounted_price : "";

    // var { data:coddata, error, loading, makeFetch} = useNetworkRequest('/api/auth/signin', {}, false);
    var dataCard1;
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
        // discounted_price = this && this.props.cartFilters.discounted_price ? JSON.stringify(this.props.cartFilters.discounted_price) : ""
        // if (discounted_price > 0) {
        //     var a = Math.round(total + num);
        //     var cart_price = (a - discounted_price)
        // } else {
        var cart_price = Math.round(total + num);
        // }
        return cart_price;
      }
    }
    return (
      <Grid containe>
        <Grid item lg={12} xs={12}>
          <div className="credit-btn-div">
          
            <Grid item container>
              <PaymentHiddenForm data={Math.round(dataCard1 - discounted_price)}
                data1={ 
                  Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                    minimumFractionDigits: 0,
                  }).format(Math.round(dataCard1 - discounted_price))
                }/>
            </Grid>
          </div>
        </Grid>
      </Grid>
    );
  }
}
// export default Netbanking;
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
  else content = <Netbanking {...props} data={mapped} cartFilters={cartFilters} setCartFilters={setCartFilters} />;
  return content;
};
export default Components;
