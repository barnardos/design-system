import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Error = ({ children }) => (
  <p className="Error">
    <strong className="Error-inner">{children}</strong>
  </p>
);

Error.propTypes = {
  children: PropTypes.node.isRequired
};

export default Error;
