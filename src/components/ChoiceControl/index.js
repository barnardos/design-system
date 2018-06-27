import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const ChoiceControl = ({ checked, id, label, name, type = "any" }) => (
  <div className="ChoiceControl">
    <input
      checked={checked}
      className="ChoiceControl-element"
      id={id}
      name={name}
      type={type === "any" ? "checkbox" : "radio"}
    />
    <label className="ChoiceControl-label" htmlFor={id}>
      {label}
    </label>
  </div>
);

ChoiceControl.propTypes = {
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["any", "one"])
};

export default ChoiceControl;
