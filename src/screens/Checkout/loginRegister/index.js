import { Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import { CartContext } from "../../../context/CartContext";
import { useDummyRequest } from "../../../hooks";
import { checkoutloginRegs } from "../../../mappers";
import Continues from "./continues";
import Login from "./login";
import "./loginRegisters.css";
import Register from "./register";
import styles from "./style";

class LoginRegisterIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      Register: false,
      Continue: true,
      Login: true,
      isActive: "",
    };
  }
  toggle(name, value) {
    this.setState({
      show: !this.state.show,
      [name]: !value,
    });
  }

  render() {
    const { LogRegData } = this.props.data;
    const { classes } = this.props;
    var obj_user = {};
    let user_id = localStorage.getItem("user_id")
      ? localStorage.getItem("user_id")
      : "";
    let set_check = localStorage.getItem("set_check")
      ? localStorage.getItem("set_check")
      : "";
    const local_mail = localStorage.getItem("email")
      ? localStorage.getItem("email")
      : "";
    const local_mail_id = localStorage.getItem("_mail_")
      ? localStorage.getItem("_mail_")
      : null;
    return (
      <Grid container>
        {localStorage.getItem("_mail_") === null && local_mail ? (
          <div style={{ paddingLeft: "30px" }}>
            {" "}
            <span
              style={{
                color: "#2F348B",
                fontSize: "15px",
                fontWeight: "700",
              }}
            >
              {local_mail}
            </span>
            <br />
            <Button
              onClick={() => {
                obj_user["user_id"] = user_id;
                this.props.changePanel(2);
              }}
              style={{
                height: "42px",
                color: "#fff",
                background: "#2F348B",
                borderLeft: "none !important",
                border: "0px !important",
                borderRadius: "0px",
                marginTop: "14px",
                fontSize: "14px",
                textTransform: "none",
              }}
            >
              {" "}
              Continue To Add Gift
            </Button>
          </div>
        ) : (
          <div style={{ width: "100%" }}>
            <div
              style={{
                display: this.state.Continue === true ? "block" : "none",
              }}
            >
              <div
                style={{
                  display: this.state.Login === true ? "block" : "none",
                }}
              >
                <Login
                  changePanel={this.props.changePanel}
                  change={() => {
                    this.setState({
                      Register: this.state.Register ? false : true,
                    });
                    this.setState({
                      Login: this.state.Login ? false : true,
                    });
                  }}
                  changeRegister={() => {
                    this.setState({
                      show: true,
                      Register: false,
                    });
                  }}
                  checkoutpage="true"
                />
              </div>
              <div
                style={{
                  display: this.state.Register == true ? "block" : "none",
                }}
              >
                <Register
                  change={() => {
                    this.setState({
                      Register: this.state.Register ? false : true,
                    });
                    this.setState({
                      Login: this.state.Login ? false : true,
                    });
                  }}
                />
              </div>
              <div
                style={{
                  display: this.state.Continue === true ? "block" : "none",
                  color: "gray",
                  textAlign: "center",
                  borderTop: "1px solid #c1c1c1",
                }}
              >
                <br />
                Guest Checkout Not ready to become a member just yet?
                <br />
                <br />
                <Button
                  className="apply-b"
                  onClick={() => {
                    this.setState({
                      Continue: this.state.Continue ? false : true,
                    });
                    this.setState({
                      Login: this.state.Login ? false : true,
                    });
                  }}
                >
                  Continue As a Guest
                </Button>
              </div>
            </div>
            <div hidden={this.state.Continue}>
              <Continues
                changePanel={this.props.changePanel}
                local_mail_id={local_mail_id}
                change={() => {
                  window.location.reload();
                  // this.setState({
                  //   Continue: this.state.Continue === true ? false : true,
                  // });
                  // this.setState({
                  //   Register: this.state.Register === true ? false : true,
                  // });
                }}
              />
            </div>
          </div>
        )}
      </Grid>
    );
  }
}
export default withStyles(styles)((props) => {
  let {
    CartCtx: { setCartFilters },
  } = React.useContext(CartContext);
  const { mapped } = useDummyRequest(checkoutloginRegs);
  if (Object.keys(mapped).length === 0) return "";

  return (
    <LoginRegisterIndex
      {...props}
      data={mapped}
      setCartFilters={setCartFilters}
    />
  );
});
