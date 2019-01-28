import PropTypes from "prop-types";
import React from "react";

import Error from "../Error";
import Field from "../Field";
import Hint from "../Hint";
import Label from "../Label";

import "./index.css";

const TextArea = ({ error, hint, id, label, size, verticalSize }) => (
  <Field errored={error}>
    <Label htmlFor={id}>{label}</Label>
    {hint && <Hint>{hint}</Hint>}
    {error && <Error>{error}</Error>}
    <textarea
      className={`TextArea-textarea ${
        error ? "TextArea-textarea--errored" : ""
      }`}
      cols={size}
      id={id}
      name={id}
      rows={verticalSize}
    />
  </Field>
);

TextArea.propTypes = {
  error: PropTypes.string,
  hint: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf([1, 2, 4, 8, 16, 32, 48, 64]).isRequired,
  verticalSize: PropTypes.oneOf([1, 2, 4, 8, 16, 32, 48, 64]).isRequired
};

export default TextArea;
