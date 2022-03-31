// SurveyFormReview shows users their form inputs for review
import React from "react";
import { connect } from "react-redux";
import FIELDS from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const renderFormValues = () => {
    return FIELDS.map(({ label, name }) => (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    ));
  };

  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>{renderFormValues()}</div>
      <button
        className="yellow darken-2 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
