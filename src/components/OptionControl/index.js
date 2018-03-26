import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const OptionControl = ({ checked, id, label, name, type = "multi" }) => (
  <div className="OptionControl">
    <input
      checked={checked}
      className="OptionControl-element"
      id={id}
      name={name}
      type={type === "multi" ? "checkbox" : "radio"}
    />
    <label htmlFor={id} className="OptionControl-label">
      {label}
    </label>
  </div>
);

OptionControl.propTypes = {
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["multi", "single"])
};

export default OptionControl;
