import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const MultilineTextControl = ({
  invalid,
  hint,
  id,
  label,
  size,
  validation,
  verticalSize
}) => {
  const className = `MultilineTextControl ${
    invalid ? "MultilineTextControl--invalid" : ""
  }`;
  return (
    <div className={className}>
      <label className="MultilineTextControl-label" htmlFor={id}>
        {label}
      </label>
      {hint && <p className="MultilineTextControl-hint">{hint}</p>}
      {validation && (
        <p className="MultilineTextControl-validation">
          <strong className="MultilineTextControl-validationInner">
            {validation}
          </strong>
        </p>
      )}
      <textarea
        className="MultilineTextControl-element"
        cols={size}
        id={id}
        name={id}
        rows={verticalSize}
      />
    </div>
  );
};

MultilineTextControl.propTypes = {
  invalid: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf([1, 2, 4, 8, 16, 32, 48, 64]).isRequired,
  validation: PropTypes.string,
  verticalSize: PropTypes.oneOf([1, 2, 4, 8, 16, 32, 48, 64]).isRequired
};

export default MultilineTextControl;
