import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const BlockQuote = ({ children, colour, name, role, src }) => (
  <blockquote className={`BlockQuote ${colour ? `BlockQuote--${colour}` : ""}`}>
    {src && (
      <div className="BlockQuote-media">
        <img alt="" className="BlockQuote-image" src={src} />
      </div>
    )}
    <div className="BlockQuote-text">
      <div className="BlockQuote-children">
        <span className="BlockQuote-childrenInner">{children}</span>
      </div>
      <cite className="BlockQuote-cite">
        <p className="BlockQuote-name">{name}</p>
        <p className="BlockQuote-role">{role}</p>
      </cite>
    </div>
  </blockquote>
);

BlockQuote.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.oneOf(["orange", "pink", "purple", "teal"]),
  name: PropTypes.string,
  role: PropTypes.string,
  src: PropTypes.string
};

export default BlockQuote;
