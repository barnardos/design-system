import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Command = ({ isCompact, onClick, children }) => {
  const className = `Command ${isCompact ? "Command--compact" : ""}`;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Command.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isCompact: PropTypes.bool
};

export default Command;
