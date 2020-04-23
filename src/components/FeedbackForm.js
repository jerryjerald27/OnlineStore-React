import React, { Component } from "react";
import styles from "./ContactPage.module.css";
class FeedbackForm extends Component {
  state = {
    name: "",
    address: "",
    phone: "",
    pincode: "",
    email: "",
    errorname: false,
    erroremail: false,
    errorpincode: false,
    erroraddress: false,
    errorphone: false,
    erroremailformat: false,
    errorphoneformat: false,
    errorpincodeformat: false,
  };
  handleChange(event) {
    const { name, value } = event.target;
    let errortype = `error${name}`;
    let errorformat = `error${name}format`;
    console.log(value.length);
    this.setState({
      [name]: value,
      [errortype]: false,
      [errorformat]: false,
    });
  }

  errorCheck(event) {
    const { name, value } = event.target;
    const errortype = `error${name}`;
    if (value.length == 0) {
      this.setState({ [errortype]: true }, () => {
        console.log(this.state.errortype);
      });
    } else if (value.length != 0 && name == "email") {
      if (value.includes("@") == false) {
        this.setState({ erroremailformat: true }, () => {
          console.log(this.state.errortype);
        });
      }
    } else if (value.length != 0 && name == "pincode") {
      if (value.length < 6 || value.length > 6) {
        this.setState({ errorpincodeformat: true }, () => {
          console.log(this.state.errortype);
        });
      }
    } else if (value.length != 0 && name == "phone") {
      if (value.length < 10 || value.length > 10) {
        this.setState({ errorphoneformat: true }, () => {
          console.log(this.state.errortype);
        });
      }
    }
  }

  render() {
    const { name, address, phone, pincode, email } = this.state;
    const {
      errorname,
      errorphone,
      erroraddress,
      erroremail,
      errorpincode,
      erroremailformat,
      errorphoneformat,
      errorpincodeformat,
    } = this.state;
    return (
      <form className="m-4 p-2">
        <input
          label="name"
          name="name"
          value={name}
          className={styles.field}
          onChange={(e) => {
            this.handleChange(e);
          }}
          onBlur={(e) => {
            this.errorCheck(e);
          }}
          placeholder="Name"
        />
        <span
          hidden={errorname ? false : true}
          className="text-danger font-weight-light "
        >
          name field cant be empty
        </span>
        <br />
        <input
          name="phone"
          value={phone}
          className={styles.field}
          onChange={(e) => {
            this.handleChange(e);
          }}
          onBlur={(e) => {
            this.errorCheck(e);
          }}
          placeholder="Contact no"
        />
        <span
          hidden={errorphone ? false : true}
          className="text-danger font-weight-light "
        >
          phone field cant be empty
        </span>
        <span
          hidden={errorphoneformat ? false : true}
          className="text-danger font-weight-light "
        >
          Phone number is 10 digits
        </span>
        <br />

        <input
          name="address"
          value={address}
          className={styles.field}
          onChange={(e) => {
            this.handleChange(e);
          }}
          onBlur={(e) => {
            this.errorCheck(e);
          }}
          placeholder="Address"
        />
        <span
          hidden={erroraddress ? false : true}
          className="text-danger font-weight-light "
        >
          address cant be empty
        </span>
        <br />
        <input
          name="pincode"
          value={pincode}
          className={styles.field}
          onChange={(e) => {
            this.handleChange(e);
          }}
          onBlur={(e) => {
            this.errorCheck(e);
          }}
          placeholder="Pincode"
        />
        <span
          hidden={errorpincode ? false : true}
          className="text-danger font-weight-light "
        >
          Pincode cant be empty
        </span>
        <span
          hidden={errorpincodeformat ? false : true}
          className="text-danger font-weight-light "
        >
          Pincode has to have 6 digits
        </span>
        <br />
        <input
          name="email"
          value={email}
          className={styles.field}
          onChange={(e) => {
            this.handleChange(e);
          }}
          onBlur={(e) => {
            this.errorCheck(e);
          }}
          placeholder="Email"
        />
        <span
          hidden={erroremail ? false : true}
          className="text-danger font-weight-light "
        >
          Email cant be empty
        </span>
        <span
          hidden={erroremailformat ? false : true}
          className="text-danger font-weight-light "
        >
          Email has to have @
        </span>

        <br />

        <button className={styles.field}>Submit</button>
      </form>
    );
  }
}

export default FeedbackForm;
