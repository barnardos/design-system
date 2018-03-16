import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const MultilineTextControl = ({
  errored,
  hint,
  id,
  label,
  size,
  validation,
  verticalSize
}) => {
  const className = `MultilineTextControl ${
    errored ? "MultilineTextControl--errored" : ""
  }`;
  return (
    <div className={className}>
      {validation && (
        <p className="MultilineTextControl-validation">{validation}</p>
      )}
      <label className="MultilineTextControl-label" htmlFor={id}>
        {label}
      </label>
      {hint && <p className="MultilineTextControl-hint">{hint}</p>}
      <textarea
        className="MultilineTextControl-element"
        name={id}
        id={id}
        cols={size}
        rows={verticalSize}
      />
    </div>
  );
};

MultilineTextControl.propTypes = {
  errored: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf([1, 2, 4, 8, 16, 32, 48, 64]).isRequired,
  validation: PropTypes.string,
  verticalSize: PropTypes.oneOf([1, 2, 4, 8, 16, 32, 48, 64]).isRequired
};

export default MultilineTextControl;
