import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const ComponentIndexes = ({ children }) => (
  <div className="ComponentIndexes">{children}</div>
);

ComponentIndexes.propTypes = {
  children: PropTypes.node.isRequired
};

export default ComponentIndexes;
