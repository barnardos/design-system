import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Switch = ({ checked, id, label, name, type = "checkbox" }) => (
  <div className={`Switch Switch--${type}`}>
    <input
      checked={checked}
      className="Switch-input"
      id={id}
      name={name}
      type={type}
    />
    <label className={`Switch-label`} htmlFor={id}>
      {label}
    </label>
  </div>
);

Switch.propTypes = {
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["checkbox", "radio"])
};

export default Switch;
