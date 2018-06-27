import PropTypes from "prop-types";
import React from "react";

import Controls from "../Controls";
import Submit from "../Submit";

import "./index.css";

const renderValidationItems = controls => {
  const invalidControls = controls.filter(control => control.invalid);
  return (
    <ul className="SubmitControls-validationItems">
      {invalidControls.map((control, index) => (
        <li className="SubmitControls-validationItem" key={index}>
          <a
            className="SubmitControls-validationItemLink"
            href={`#${control.id}`}
          >
            {control.validation}
          </a>
        </li>
      ))}
    </ul>
  );
};

const SubmitControls = ({ controls, invalid, submit, validation }) => {
  return (
    <form className="SubmitControls">
      {invalid && (
        <div className="SubmitControls-summary">
          <p className="SubmitControls-validation">{validation}</p>
          {renderValidationItems(controls)}
        </div>
      )}
      <div className="SubmitControls-controls">
        <Controls controls={controls} />
      </div>
      <div className="SubmitControls-submit">
        <Submit {...submit} />
      </div>
    </form>
  );
};

SubmitControls.propTypes = {
  controls: PropTypes.array.isRequired,
  invalid: PropTypes.bool,
  submit: PropTypes.object.isRequired,
  validation: PropTypes.string
};

export default SubmitControls;
