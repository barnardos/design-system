import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Label = ({ children, id, inlined }) => (
  <label className={`Label ${inlined ? "Label--inlined" : ""}`} htmlFor={id}>
    {children}
  </label>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  inlined: PropTypes.string.isRequired
};

export default Label;
