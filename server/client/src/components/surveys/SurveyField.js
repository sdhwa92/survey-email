// SurveyField contains logic to render a single label and text input
import React from "react";

// props passed from redux-form
const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      {touched && error}
    </div>
  );
};

export default SurveyField;
