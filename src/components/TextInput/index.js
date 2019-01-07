import PropTypes from "prop-types";
import React from "react";

import Error from "../Error";
import Field from "../Field";
import Hint from "../Hint";
import Label from "../Label";

import "./index.css";

const TextInput = ({ hint, id, label, size, error }) => (
  <Field errored={error}>
    <Label id={id}>{label}</Label>
    {hint && <Hint>{hint}</Hint>}
    {error && <Error>{error}</Error>}
    <input
      className={`TextInput-input ${error ? "TextInput-input--errored" : ""}`}
      id={id}
      name={id}
      size={size}
      type="text"
    />
  </Field>
);

TextInput.propTypes = {
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf([1, 2, 4, 8, 16, 32, 48, 64]).isRequired,
  error: PropTypes.string
};

export default TextInput;
