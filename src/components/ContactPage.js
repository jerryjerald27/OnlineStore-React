import React from "react";
import FeedbackForm from "./FeedbackForm";

const ContactPage = () => {
  return (
    <React.Fragment>
      <h1 className="text-center m-4">Contact us</h1>

      <div className="row">
        <div className="col-md-3 col-xs-3">
          <span>
            <i className=" fa fa-clock" />
          </span>
          Timings:
        </div>
        <div className="col-md-3 col-xs-3">
          <p>
            {" "}
            Monday - Friday <br />
            10 am - 5 pm
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-xs-3">
          <i className="fa fa-envelope" style={{ float: "left" }}></i>
          Email :
        </div>
        <div className="col-md-3 col-xs-3">
          <p>info@pentateuchconstruction.com</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-xs-3">
          <i className="fa fa-phone" style={{ float: "left" }}></i>
          Phone:
        </div>
        <div className="col-md-3 col-xs-3">
          <p> +91 9606 597888</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-xs-3">
          <i className="fa fa-map-marker-alt" style={{ float: "left" }}></i>
          Address:
        </div>
        <div className="col-md-3 col-xs-3">
          <p>
            1186, Cashier Layout <br />
            8th main, BTM First stage
            <br />
            Bengaluru, India
            <br />
          </p>
        </div>
      </div>

      {/* Feedbackarea */}

      <h1 className="text-center m-4">Give us a feedback</h1>

      <FeedbackForm />
    </React.Fragment>
  );
};

export default ContactPage;
