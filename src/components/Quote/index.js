import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Quote = ({ children, colour, name, role }) => {
  const className = `Quote ${colour ? `Quote--${colour}` : ""}`;
  return (
    <blockquote className={className}>
      <div className="Quote-children">{children}</div>
      <cite className="Quote-cite">
        <p className="Quote-name">{name}</p>
        <p className="Quote-role">{role}</p>
      </cite>
    </blockquote>
  );
};

Quote.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.oneOf(["orange", "pink", "purple", "teal"]),
  name: PropTypes.string.isRequired,
  role: PropTypes.string
};

export default Quote;
