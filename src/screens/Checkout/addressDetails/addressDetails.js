import { Button, Container, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CommenDialog from "components/Common/Dialogmodel";
import React from "react";
import "./address.css";
import styles from "./style";

class Addressdetails extends React.Component {
  state = {
    open: false,
    index_of_isActive: null,
    id_delete: null,
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  Addressdetails = (props, value, value2) => {
    const { setValues, values } = props;

    const _add_data_addres = () => {
      if (con_gust === true) {
        return value;
      }
      if (con_gust !== true) {
        return (
          values &&
          values.addressvalues &&
          values.addressvalues.data &&
          values.addressvalues.data.allUserAddresses &&
          values.addressvalues.data.allUserAddresses.nodes
        );
      }
    };

    const cl = (
      <input
        onChange={(e) => {
          setValues({
            values,
            ...values,
            checkValue1: !values.checkValue1,
          });
        }}
        type="checkbox"
        checked={values.checkValue1}
      />
    );

    sessionStorage.setItem("Ifcheck", false);
    const { classes } = props;
    var con_gust = localStorage.getItem("gut_lg")
      ? JSON.parse(localStorage.getItem("gut_lg"))
      : "";
    
    const delete_all_addresses = (val_addrs1, index) => {
      if (document.location.pathname === "/checkout") {
        if (
          JSON.parse(localStorage.getItem("ship_isactive")) ===
          this.state.index_of_isActive
        ) {
          alert("Sorry u con't delete this address");
          return false;
        }
        if (
          JSON.parse(localStorage.getItem("bil_isactive")) ===
          this.state.index_of_isActive
        ) {
          alert("Sorry u con't delete this address");
          return false;
        }
        if (
          (JSON.parse(localStorage.getItem("bil_isactive")) ||
            JSON.parse(localStorage.getItem("ship_isactive"))) !==
          this.state.index_of_isActive
        ) {
          this.props.Delete_address(
            this.state.id_delete,
            this.state.index_of_isActive
          );
        }
      } else {
        this.props.Delete_address(
          this.state.id_delete,
          this.state.index_of_isActive
        );
      }
    };
   

    return (
      <div className="pt-sm">
        <Grid container spacing={12}>
          {window.location.pathname.split("-")[0] === "/account" ? (
            ""
          ) : this.props.order ? (
            " "
          ) : (
            <h5 className="title"> Shipping Address</h5>
          )}
          {window.location.pathname.split("-")[0] === "/account" ? (
            <>
              {_add_data_addres() &&
                _add_data_addres().map((val_addrs1, index) => (
                  <>
                    <Grid item xs={12} lg={12} style={{ paddingRight: "15px" }}>
                      <div
                        className="card-adrs wd"
                        style={{ marginTop: "15px" }}
                      >
                        <h4 class="card-title">
                          <i
                            style={{ fontSize: "25px", color: "#394578" }}
                            className={`${classes.normalfonts}`}
                            class="fa fa-check-circle-o"
                          ></i>
                          <span class="address-name">
                            {val_addrs1 && val_addrs1.salutation}&nbsp;
                            {val_addrs1.firstname}
                            &nbsp;
                            {val_addrs1.lastname}
                          </span>
                          <i
                            onClick={() => {
                              this.props.redirectForm(
                                val_addrs1,
                                index,
                                true,
                                true,
                                index
                              );
                            }}
                            style={{
                              fontSize: "20px",
                              color: "#394578",
                              float: "right",
                              cursor: "pointer",
                            }}
                            className={`${classes.normalfonts}`}
                            class="fa fa-pencil-square-o"
                          ></i>

                          <i
                            onClick={() => {
                              this.setState({
                                index_of_isActive: index,
                                id_delete: val_addrs1.id,
                              });
                              this.handleOpen();
                            }}
                            style={{
                              fontSize: "20px",
                              color: "#394578",
                              float: "right",
                              marginRight: "10px",
                              cursor: "pointer",
                            }}
                            className={`${classes.normalfonts}`}
                            class="fa fa-trash-o"
                          ></i>
                        </h4>

                        <CommenDialog
                          isOpen={this.state.open}
                          content={`Are you sure you want to delete this Address? `}
                          handleClose={this.handleClose}
                          handleSuccess={delete_all_addresses}
                          negativeBtn="Cancel"
                          positiveBtn="Confirm delete"
                          title="Confirmation"
                        />

                        <p className={`detils-p ${classes.normalfonts}`}>
                          {val_addrs1.addressline1}
                          <br />
                          {val_addrs1.city}
                          <br />
                          {val_addrs1.state}
                          {val_addrs1.pincode}
                          <br />
                          IN
                        </p>
                        <div className="card-foo">
                          <span
                            className={`shipping-phonenumber ${classes.normalfonts}`}
                          >
                            +91 {val_addrs1.contactNumber}
                            {val_addrs1.contactno}
                          </span>
                          {window.location.pathname.split("-")[0] !==
                          "/account" ? (
                            <>
                              {JSON.parse(
                                localStorage.getItem("ship_isactive")
                              ) === index ||
                              JSON.parse(
                                localStorage.getItem("bil_isactive")
                              ) === index ? (
                                <>
                                  <Button
                                    disabled
                                    style={{ float: "right" }}
                                    className="apply-b address_card_disabled"
                                    onClick={() => {}}
                                  >
                                    {" "}
                                    <i
                                      class="fa fa-check-circle"
                                      style={{ color: "#fff" }}
                                    ></i>{" "}
                                    &nbsp;Selected
                                  </Button>
                                </>
                              ) : (
                                <>
                                  <Button
                                    style={{ float: "right" }}
                                    className="apply-b"
                                    onClick={() => {
                                      this.props.selectaddreses(
                                        val_addrs1,
                                        1,
                                        index,
                                        "yes"
                                      );
                                    }}
                                  >
                                    Select to continue{" "}
                                  </Button>
                                  <br />
                                  <br />
                                </>
                              )}
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </Grid>
                    <br />
                  </>
                ))}
            </>
          ) : (
            <>
              {_add_data_addres() &&
                _add_data_addres().map((val_addrs1, index) => {
                  console.log(val_addrs1,"lll")
                  return JSON.parse(localStorage.getItem("bil_isactive")) ===
                    index ? (
                    false
                  ) : (
                    <>
                      <Grid
                        item
                        xs={12}
                        lg={window.lo}
                        style={{ paddingRight: "15px" }}
                      >
                        <div
                          className="card-adrs wd"
                          style={{ marginTop: "5px" }}
                        >
                          <h4 class="card-title">
                            <i
                              style={{ fontSize: "25px", color: "#394578" }}
                              className={`${classes.normalfonts}`}
                              class="fa fa-check-circle-o"
                            ></i>
                            <span class="address-name">
                              {val_addrs1 && val_addrs1.salutation}&nbsp;
                              {val_addrs1.firstname}
                              &nbsp;
                              {val_addrs1.lastname}
                            </span>
                            <i
                              onClick={() => {
                                this.props.redirectForm(
                                  val_addrs1,
                                  index,
                                  true,
                                  true,
                                  index
                                );
                              }}
                              style={{
                                fontSize: "20px",
                                color: "#394578",
                                float: "right",
                                cursor: "pointer",
                              }}
                              className={`${classes.normalfonts}`}
                              class="fa fa-pencil-square-o"
                            ></i>
                            <i
                              onClick={() => {
                                this.setState({
                                  index_of_isActive: index,
                                  id_delete: val_addrs1.id,
                                });
                                this.handleOpen();
                              }}
                              style={{
                                fontSize: "20px",
                                color: "#394578",
                                float: "right",
                                marginRight: "10px",
                                cursor: "pointer",
                              }}
                              className={`${classes.normalfonts}`}
                              class="fa fa-trash-o"
                            ></i>
                          </h4>
                          <CommenDialog
                            isOpen={this.state.open}
                            content={`Are you sure you want to delete this Address? `}
                            handleClose={this.handleClose}
                            handleSuccess={delete_all_addresses}
                            negativeBtn="Cancel"
                            positiveBtn="Confirm delete"
                            title="Confirmation"
                          />

                          <p className={`detils-p ${classes.normalfonts}`}>
                            {val_addrs1.addressline1}
                            <br />
                            {val_addrs1.city}
                            <br />
                            {val_addrs1.state}
                            &nbsp;
                            {val_addrs1.pincode}
                            <br />
                            {val_addrs1.country}                            
                          </p>
                          <div className="card-foo">
                            <span
                              className={`shipping-phonenumber ${classes.normalfonts}`}
                            >
                              +91 {val_addrs1.contactNumber}
                              {val_addrs1.contactno}
                            </span>
                            {window.location.pathname.split("-")[0] !==
                            "/account" ? (
                              <>
                                {JSON.parse(
                                  localStorage.getItem("ship_isactive")
                                ) === index ||
                                JSON.parse(
                                  localStorage.getItem("bil_isactive")
                                ) === index ? (
                                  <>
                                    <Button
                                      disabled
                                      style={{
                                        float: "right",
                                        marginBottom: "18px",
                                      }}
                                      className="apply-b address_card_disabled"
                                      onClick={() => {}}
                                    >
                                      {" "}
                                      <i
                                        class="fa fa-check-circle"
                                        style={{ color: "#fff" }}
                                      ></i>{" "}
                                      &nbsp;Selected
                                    </Button>
                                  </>
                                ) : (
                                  <>
                                    <Button
                                      style={{ float: "right", marginBottom: "18px", }}
                                      className="apply-b"
                                      onClick={() => {
                                        this.props.selectaddreses(
                                          val_addrs1,
                                          1,
                                          index,
                                          "yes"
                                        );
                                      }}
                                    >
                                      Select to continue{" "}
                                    </Button>
                                  </>
                                )}
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </Grid>
                      <br />
                    </>
                  );
                })}
            </>
          )}
        </Grid>
        {value.length > 4 ||
        (values &&
          values.addressvalues &&
          values.addressvalues.data &&
          values.addressvalues.data.allUserAddresses.nodes.length > 4) ? (
          ""
        ) : (
          <Button
            onClick={() => this.props.redirectForm1(1)}
            className={`add-new-address ${classes.normalfonts}`}
          >
            <div></div> Add New Address
          </Button>
        )}
        <br />

        {window.location.pathname.split("-")[0] !== "/account" ? (
          <>
            <div class="form-group tp ts">
              {cl}
              {!values.checkValue1 &&
                "Please check the box if your Billing address is same as your shipping address."}
              {values.checkValue1 &&
                "Please uncheck the box if your Billing address is different from your shipping address."}
            </div>
            {values.checkValue1 === false ? (
              <>
                <br />
                <h5 className="title"> Billing Address</h5>
                <br />
                <Grid container spacing={12}>
                  <>
                    {_add_data_addres() &&
                      _add_data_addres().map((val_addrs2, index) => {
                        return JSON.parse(
                          localStorage.getItem("ship_isactive")
                        ) === index ? (
                          false
                        ) : (
                          <>
                            <Grid
                              item
                              xs={12}
                              lg={12}
                              style={{ paddingRight: "15px" }}
                            >
                              <div
                                className="card-adrs wd"
                                style={{ marginTop: "5px" }}
                              >
                                <h4 class="card-title">
                                  <i
                                    style={{
                                      fontSize: "25px",
                                      color: "#394578",
                                    }}
                                    className={`${classes.normalfonts}`}
                                    class="fa fa-check-circle-o"
                                  ></i>
                                  <span class="address-name">
                                    {val_addrs2 && val_addrs2.salutation}&nbsp;
                                    {val_addrs2.firstname}
                                    &nbsp;
                                    {val_addrs2.lastname}
                                  </span>
                                  <i
                                    onClick={() => {
                                      this.props.redirectForm(
                                        val_addrs2,
                                        index,
                                        true,
                                        false,
                                        index
                                      );
                                    }}
                                    style={{
                                      fontSize: "20px",
                                      color: "#394578",
                                      float: "right",
                                      cursor: "pointer",
                                    }}
                                    className={`${classes.normalfonts}`}
                                    class="fa fa-pencil-square-o"
                                  ></i>
                                  <i
                                    style={{
                                      fontSize: "20px",
                                      color: "#394578",
                                      float: "right",
                                      marginRight: "10px",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => {
                                      this.setState({
                                        index_of_isActive: index,
                                        id_delete: val_addrs2.id,
                                      });
                                      this.handleOpen();
                                    }}
                                    className={`${classes.normalfonts}`}
                                    class="fa fa-trash-o"
                                  ></i>
                                </h4>
                                <CommenDialog
                                  isOpen={this.state.open}
                                  content={`Are you sure you want to delete this Address? `}
                                  handleClose={this.handleClose}
                                  handleSuccess={delete_all_addresses}
                                  negativeBtn="Cancel"
                                  positiveBtn="Confirm delete"
                                  title="Confirmation"
                                />

                                <p
                                  className={`detils-p ${classes.normalfonts}`}
                                >
                                  {val_addrs2.addressline1}
                                  <br />
                                  {val_addrs2.city}
                                  <br />
                                  {val_addrs2.state}-{val_addrs2.pincode}
                                  <br />
                                  IN
                                </p>
                                <div className="card-foo">
                                  <span
                                    className={`shipping-phonenumber ${classes.normalfonts}`}
                                  >
                                    +91 {val_addrs2.contactNumber}
                                    {val_addrs2.contactno}
                                  </span>

                                  <>
                                    {JSON.parse(
                                      localStorage.getItem("ship_isactive")
                                    ) === index ||
                                    JSON.parse(
                                      localStorage.getItem("bil_isactive")
                                    ) === index ? (
                                      <>
                                        <Button
                                          disabled
                                          style={{ float: "right" }}
                                          className="apply-b address_card_disabled"
                                          onClick={() => {}}
                                        >
                                          {" "}
                                          <i
                                            class="fa fa-check-circle"
                                            style={{ color: "#fff" }}
                                          ></i>{" "}
                                          &nbsp;Selected
                                        </Button>
                                        <br />
                                        <br />
                                      </>
                                    ) : (
                                      <>
                                        <Button
                                          style={{
                                            float: "right",
                                            marginBottom: "18px",
                                          }}
                                          className="apply-b"
                                          onClick={() => {
                                            this.props.selectaddreses(
                                              val_addrs2,
                                              2,
                                              index,
                                              "no"
                                            );
                                          }}
                                        >
                                          Select to continue{" "}
                                        </Button>
                                        <br />
                                        <br />
                                      </>
                                    )}
                                  </>
                                </div>
                              </div>
                            </Grid>
                          </>
                        );
                      })}
                  </>
                </Grid>
                {value.length > 4 ||
                (values &&
                  values.addressvalues &&
                  values.addressvalues.data &&
                  values.addressvalues.data.allUserAddresses.nodes.length >
                    4) ? (
                  " "
                ) : (
                  <Button
                    onClick={() => this.props.redirectForm2(2)}
                    style={{
                      marginBottom: "18px",
                    }}
                    className={`add-new-address ${classes.normalfonts}`}
                  >
                    <div></div> Add New Address
                  </Button>
                )}
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
        {window.location.pathname == "/checkout" && this.props.order
          ? " "
          : _add_data_addres() &&
            _add_data_addres().map((val_addrs1, index) => {
              return JSON.parse(localStorage.getItem("bil_isactive")) ===
                index ? (
                false
              ) : JSON.parse(localStorage.getItem("ship_isactive")) === index ||
                JSON.parse(localStorage.getItem("bil_isactive")) === index ? (
                <Button
                  onClick={() => this.props.changeaddress(4)}
                  fullWidth={true}
                  color="primary"
                  variant="contained"
                >
                  Continue to Payment Method
                </Button>
              ) : (
                ""
              );
            })}
      </div>
    );
  };
  render() {
    let value = localStorage.getItem("gustaddres")
      ? JSON.parse(localStorage.getItem("gustaddres")).address
      : "";
    return <Container>{this.Addressdetails(this.props, value)}</Container>;
  }
}
export default withStyles(styles)(Addressdetails);
