import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const CurrencyControl = ({
  currency,
  hint,
  id,
  invalid,
  label,
  max,
  min,
  validation
}) => {
  const className = `CurrencyControl ${
    invalid ? "CurrencyControl--invalid" : ""
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
          id={id}
          max={max}
          min={min}
          name={id}
          step=".01"
          type="number"
        />
      </div>
    </div>
  );
};

CurrencyControl.propTypes = {
  currency: PropTypes.string.isRequired,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
  label: PropTypes.string.isRequired,
  max: PropTypes.number,
  min: PropTypes.number,
  validation: PropTypes.string
};

export default CurrencyControl;
