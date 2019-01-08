import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Example = ({ children }) => <div className="Example">{children}</div>;

Example.propTypes = {
  children: PropTypes.node.isRequired
};

export default Example;
