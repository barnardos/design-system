import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const SignpostLinks = ({ children }) => (
  <div className="SignpostLinks">{children}</div>
);

SignpostLinks.propTypes = {
  children: PropTypes.node.isRequired
};

export default SignpostLinks;
