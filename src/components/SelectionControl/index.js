import PropTypes from "prop-types";
import React from "react";

import OptionControl from "../OptionControl/index";

import "./index.css";

const SelectionControl = ({
  errored,
  hint,
  id,
  legend,
  options,
  name,
  type,
  validation
}) => {
  const className = `SelectionControl ${
    errored ? "SelectionControl--errored" : ""
  }`;
  return (
    <div className={className}>
      <fieldset className="SelectionControl-fieldset" id={id}>
        <legend className="SelectionControl-legend">{legend}</legend>
        {hint && <p className="SelectionControl-hint">{hint}</p>}
        {validation && (
          <p className="SelectionControl-validation">{validation}</p>
        )}
        <div className="SelectionControl-optionsControls">
          {options.map((option, index) => (
            <div className="SelectionControl-optionControl" key={index}>
              <OptionControl name={name} type={type} {...option} />
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

SelectionControl.propTypes = {
  errored: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  type: PropTypes.oneOf(["single", "multi"]).isRequired,
  validation: PropTypes.string
};

export default SelectionControl;
