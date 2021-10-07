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
                color: "#394578",
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
                background: "#394578",
                borderLeft: "none !important",
                border: "0px !important",
                borderRadius: "0px",
                fontSize: "12px",
                textTransform: "none",
              }}
            >
              {" "}
              Continue
            </Button>
          </div>
        ) : (
          <div style={{ width: "100%" }}>
            {/* <div
              className="pt-sm"
              style={{ display: this.state.show == true ? "block" : "none" }}
            >
              <>
                <h5 className={`title ${classes.loginheaders}`}>
                  {" "}
                  Please click to choose an action
                </h5>
                <Grid container spacing={12}>
                  {LogRegData.map((val) => (
                    <Grid item xs={12} lg={4}>
                      <Card className="form-card">
                        <CardContent style={{ height: "70px" }}>
                          <div>
                            <p className={`card-reg ${classes.dis}`}>
                              {" "}
                              {val.title}
                            </p>
                            <b className={`card-reg blt ${classes.dis}`}>
                              {val.dis}
                            </b>
                          </div>
                        </CardContent>
                        <div className="login-butn">
                          <Button
                            className="apply-b"
                            onClick={() => {
                              this.toggle(val.button);
                            }}
                          >
                            {val.buttonval}
                          </Button>
                        </div>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </>
            </div>*/}
            <div>
              <div
                style={{
                  display: this.state.Continue === true ? "block" : "none",
                }}
              >
                <Login
                  changePanel={this.props.changePanel}
                  change={() => {
                    this.setState({
                      show: true,
                      Login: false,
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
                  }}
                >
                  Continue As a Guest
                </Button>
              </div>
              <div hidden={this.state.Continue}>
                <Continues
                  changePanel={this.props.changePanel}
                  local_mail_id={local_mail_id}
                  change={() => {
                    // this.setState({
                    //   Continue: this.state.Continue === true ? false : true,
                    // });
                    window.location.reload();
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: this.state.Register == true ? "block" : "none",
              }}
            >
              <Register
                changePanel={this.props.changePanel}
                change={() => {
                  this.setState({
                    show: true,
                    Register: false,
                  });
                }}
              />
            </div>
            {/* <div
              style={{
                display: this.state.Continue == true ? "block" : "none",
              }}
            >
              <Continues
                changePanel={this.props.changePanel}
                local_mail_id={local_mail_id}
                change={() => {
                  this.setState({
                    show: true,
                    Continue: false,
                  });
                }}
              />
            </div> */}
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
