import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const AttentionGrabbingQuote = ({ children, colour, name, role }) => {
  const className = `AttentionGrabbingQuote ${
    colour ? `AttentionGrabbingQuote--${colour}` : ""
  }`;
  return (
    <blockquote className={className}>
      <div className="AttentionGrabbingQuote-children">{children}</div>
      <cite className="AttentionGrabbingQuote-cite">
        <p className="AttentionGrabbingQuote-name">{name}</p>
        <p className="AttentionGrabbingQuote-role">{role}</p>
      </cite>
    </blockquote>
  );
};

AttentionGrabbingQuote.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.oneOf(["black", "orange", "pink", "purple", "teal"]),
  name: PropTypes.string.isRequired,
  role: PropTypes.string
};

export default AttentionGrabbingQuote;
