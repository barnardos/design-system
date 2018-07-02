import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const SinglelineTextControl = ({
  invalid,
  hint,
  id,
  label,
  size,
  validation
}) => {
  const className = `SinglelineTextControl ${
    invalid ? "SinglelineTextControl--invalid" : ""
  }`;
  return (
    <div className={className}>
      <label className="SinglelineTextControl-label" htmlFor={id}>
        {label}
      </label>
      {hint && <p className="SinglelineTextControl-hint">{hint}</p>}
      {validation && (
        <p className="SinglelineTextControl-validation">
          <strong className="SinglelineTextControl-validationInner">
            {validation}
          </strong>
        </p>
      )}
      <input
        className="SinglelineTextControl-element"
        id={id}
        name={id}
        size={size}
        type="text"
      />
    </div>
  );
};

SinglelineTextControl.propTypes = {
  invalid: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf([1, 2, 4, 8, 16, 32, 48, 64]).isRequired,
  validation: PropTypes.string
};

export default SinglelineTextControl;
