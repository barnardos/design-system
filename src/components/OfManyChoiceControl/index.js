import PropTypes from "prop-types";
import React from "react";

import ChoiceControl from "../ChoiceControl";

import "./index.css";

const OfManyChoiceControl = ({
  choices,
  errored,
  hint,
  id,
  legend,
  name,
  type,
  validation
}) => {
  const className = `OfManyChoiceControl ${
    errored ? "OfManyChoiceControl--errored" : ""
  }`;
  return (
    <div className={className}>
      <fieldset className="OfManyChoiceControl-fieldset" id={id}>
        <legend className="OfManyChoiceControl-legend">{legend}</legend>
        {hint && <p className="OfManyChoiceControl-hint">{hint}</p>}
        {validation && (
          <p className="OfManyChoiceControl-validation">
            <strong className="OfManyChoiceControl-validationInner">
              {validation}
            </strong>
          </p>
        )}
        <div className="OfManyChoiceControl-choiceControls">
          {choices.map((option, index) => (
            <div className="OfManyChoiceControl-choiceControl" key={index}>
              <ChoiceControl name={name} type={type} {...option} />
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

OfManyChoiceControl.propTypes = {
  choices: PropTypes.array.isRequired,
  errored: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["single", "multi"]).isRequired,
  validation: PropTypes.string
};

export default OfManyChoiceControl;
