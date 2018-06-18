import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const CurrencyControl = ({
  currency,
  errored,
  hint,
  id,
  label,
  max,
  min,
  validation
}) => {
  const className = `CurrencyControl ${
    errored ? "CurrencyControl--errored" : ""
  }`;
  return (
    <div className={className}>
      <label className="CurrencyControl-label" htmlFor={id}>
        {label}
      </label>
      {hint && <p className="CurrencyControl-hint">{hint}</p>}
      {validation && (
        <p className="CurrencyControl-validation">
          <strong className="CurrencyControl-validationInner">
            {validation}
          </strong>
        </p>
      )}
      <div className="CurrencyControl-prefixAndElement">
        <p className="CurrencyControl-prefix">{currency}</p>
        <input
          className="CurrencyControl-element"
          name={id}
          id={id}
          type="number"
          min={min}
          max={max}
          step=".01"
        />
      </div>
    </div>
  );
};

CurrencyControl.propTypes = {
  currency: PropTypes.string.isRequired,
  errored: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  validation: PropTypes.string
};

export default CurrencyControl;
