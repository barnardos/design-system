import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const TextControl = ({ errored, hint, id, label, size, validation }) => {
  const className = `TextControl ${errored ? "TextControl--errored" : ""}`;
  return (
    <div className={className}>
      {validation && <p className="TextControl-validation">{validation}</p>}
      <label className="TextControl-label" htmlFor={id}>
        {label}
      </label>
      {hint && <p className="TextControl-hint">{hint}</p>}
      <input
        className="TextControl-element"
        name={id}
        id={id}
        type="text"
        size={size}
      />
    </div>
  );
};

TextControl.propTypes = {
  errored: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf([1, 2, 4, 8, 16, 32, 48, 64]).isRequired,
  validation: PropTypes.string
};

export default TextControl;
