import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Command = ({ onClick, children }) => (
  <button className="Command" onClick={onClick}>
    {children}
  </button>
);

Command.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

export default Command;
