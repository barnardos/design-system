import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const PullQuote = ({ children, colour }) => (
  <blockquote className={`PullQuote ${colour ? `PullQuote--${colour}` : ""}`}>
    {children}
  </blockquote>
);

PullQuote.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.oneOf(["orange", "pink", "purple", "teal"])
};

export default PullQuote;
