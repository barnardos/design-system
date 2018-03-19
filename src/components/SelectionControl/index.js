import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const SelectionControl = ({ checked, id, label, name, type = "multi" }) => (
  <div className="SelectionControl">
    <input
      checked={checked}
      className="SelectionControl-element"
      id={id}
      name={name}
      type={type === "multi" ? "checkbox" : "radio"}
    />
    <label htmlFor={id} className="SelectionControl-label">
      {label}
    </label>
  </div>
);

SelectionControl.propTypes = {
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["multi", "single"])
};

export default SelectionControl;
