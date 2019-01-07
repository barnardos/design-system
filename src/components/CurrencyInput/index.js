import PropTypes from "prop-types";
import React from "react";

import Error from "../Error";
import Field from "../Field";
import Hint from "../Hint";
import Label from "../Label";

import "./index.css";

const CurrencyInput = ({ currency, error, hint, id, label, max, min }) => (
  <Field errored={error}>
    <Label id={id}>{label}</Label>
    {hint && <Hint>{hint}</Hint>}
    {error && <Error>{error}</Error>}
    <div className="CurrencyInput-prefixAndInput">
      <p className="CurrencyInput-prefix">{currency}</p>
      <input
        className={`CurrencyInput-input ${
          error ? "CurrencyInput-input--errored" : ""
        }`}
        id={id}
        max={max}
        min={min}
        name={id}
        step=".01"
        type="number"
      />
    </div>
  </Field>
);

CurrencyInput.propTypes = {
  currency: PropTypes.string.isRequired,
  error: PropTypes.string,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  max: PropTypes.number,
  min: PropTypes.number
};

export default CurrencyInput;
