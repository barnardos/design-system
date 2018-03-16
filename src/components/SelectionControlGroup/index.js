import PropTypes from "prop-types";
import React from "react";

import SelectionControl from "../SelectionControl/index";

import "./index.css";

const SelectionControlGroup = ({
  errored,
  hint,
  legend,
  selectionControls,
  name,
  type,
  validation
}) => {
  const className = `SelectionControlGroup ${
    errored ? "SelectionControlGroup--errored" : ""
  }`;
  return (
    <div className={className}>
      {validation && (
        <p className="SelectionControlGroup-validation">{validation}</p>
      )}
      <fieldset className="SelectionControlGroup-fieldset">
        <legend className="SelectionControlGroup-legend">{legend}</legend>
        {hint && <p className="SelectionControlGroup-hint">{hint}</p>}
        <div className="SelectionControlGroup-selectionControls">
          {selectionControls.map((selectionControl, index) => (
            <div className="SelectionControlGroup-selectionControl" key={index}>
              <SelectionControl name={name} type={type} {...selectionControl} />
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

SelectionControlGroup.propTypes = {
  errored: PropTypes.bool,
  hint: PropTypes.string,
  legend: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selectionControls: PropTypes.array.isRequired,
  type: PropTypes.oneOf(["single", "multi"]).isRequired,
  validation: PropTypes.string
};

export default SelectionControlGroup;
