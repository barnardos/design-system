import PropTypes from "prop-types";
import React from "react";

import Label from "../Label";

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
    <div className="Switch-label">
      <Label id={id} inlined positioned>
        {label}
      </Label>
    </div>
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
