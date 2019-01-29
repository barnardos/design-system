import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const ProminentBlockQuote = ({ children, colour, name, role }) => {
  const className = `ProminentBlockQuote ${
    colour ? `ProminentBlockQuote--${colour}` : ""
  }`;
  return (
    <blockquote className={className}>
      <div className="ProminentBlockQuote-children">{children}</div>
      <cite className="ProminentBlockQuote-cite">
        <p className="ProminentBlockQuote-name">{name}</p>
        <p className="ProminentBlockQuote-role">{role}</p>
      </cite>
    </blockquote>
  );
};

ProminentBlockQuote.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.oneOf(["black", "orange", "pink", "purple", "teal"]),
  name: PropTypes.string.isRequired,
  role: PropTypes.string
};

export default ProminentBlockQuote;
