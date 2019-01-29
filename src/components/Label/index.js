import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Label = ({ children, htmlFor, inlined }) => (
  <label
    className={`Label ${inlined ? "Label--inlined" : ""}`}
    htmlFor={htmlFor}
  >
    {children}
  </label>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string.isRequired,
  inlined: PropTypes.bool
};

export default Label;
