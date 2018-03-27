import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const ChoiceControl = ({ checked, id, label, name, type = "multi" }) => (
  <div className="ChoiceControl">
    <input
      checked={checked}
      className="ChoiceControl-element"
      id={id}
      name={name}
      type={type === "multi" ? "checkbox" : "radio"}
    />
    <label htmlFor={id} className="ChoiceControl-label">
      {label}
    </label>
  </div>
);

ChoiceControl.propTypes = {
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["multi", "single"])
};

export default ChoiceControl;
