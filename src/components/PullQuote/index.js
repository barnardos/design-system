import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const PullQuote = ({ children, colour, name, role }) => {
  const className = `PullQuote ${colour ? `PullQuote--${colour}` : ""}`;
  return (
    <blockquote className={className}>
      <div className="PullQuote-children">{children}</div>
      <cite className="PullQuote-cite">
        <p className="PullQuote-name">{name}</p>
        <p className="PullQuote-role">{role}</p>
      </cite>
    </blockquote>
  );
};

PullQuote.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.oneOf(["orange", "pink", "purple", "teal"]),
  name: PropTypes.string.isRequired,
  role: PropTypes.string
};

export default PullQuote;
