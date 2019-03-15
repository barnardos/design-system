import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Trigger = ({ onClick, children }) => (
  <button className="Trigger" onClick={onClick}>
    {children}
  </button>
);

Trigger.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

export default Trigger;
