import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const PullQuote = ({ children, colour }) => {
  const className = `PullQuote ${colour ? `PullQuote--${colour}` : ""}`;
  return <blockquote className={className}>{children}</blockquote>;
};

PullQuote.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.oneOf(["orange", "pink", "purple", "teal"])
};

export default PullQuote;
