import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Quote = ({ children, colour, name, role, src }) => {
  const className = `Quote ${colour ? `Quote--${colour}` : ""}`;
  return (
    <blockquote className={className}>
      {src && (
        <div className="Quote-media">
          <img alt="" className="Quote-image" src={src} />
        </div>
      )}
      <div className="Quote-text">
        <div className="Quote-children">{children}</div>
        <cite className="Quote-cite">
          <p className="Quote-name">{name}</p>
          <p className="Quote-role">{role}</p>
        </cite>
      </div>
    </blockquote>
  );
};

Quote.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.oneOf(["orange", "pink", "purple", "teal"]),
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  src: PropTypes.string
};

export default Quote;
