import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Demo = ({ children, type }) => (
  <div className={`Demo Demo--${type}`}>{children}</div>
);

Demo.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["thirds", "constrained"])
};

export default Demo;
