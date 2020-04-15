import React, { Component } from "react";

class Default extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h1 className="display-3">404</h1>
            <h1>error</h1>

            <h3>
              Requested URL:{" "}
              <span className="text-danger">
                {this.props.location.pathname}
                {/* prop given by react router */}
              </span>
              : does not exist
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Default;
