import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const SinglelineTextControl = ({
  errored,
  hint,
  id,
  label,
  size,
  validation
}) => {
  const className = `SinglelineTextControl ${
    errored ? "SinglelineTextControl--errored" : ""
  }`;
  return (
    <div className={className}>
      <label className="SinglelineTextControl-label" htmlFor={id}>
        {label}
      </label>
      {hint && <p className="SinglelineTextControl-hint">{hint}</p>}
      {validation && (
        <p className="SinglelineTextControl-validation">{validation}</p>
      )}
      <input
        className="SinglelineTextControl-element"
        name={id}
        id={id}
        type="text"
        size={size}
      />
    </div>
  );
};

SinglelineTextControl.propTypes = {
  errored: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf([1, 2, 4, 8, 16, 32, 48, 64]).isRequired,
  validation: PropTypes.string
};

export default SinglelineTextControl;
