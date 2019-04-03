import PropTypes from "prop-types";
import React from "react";

import Image from "../Image";

import "./index.css";

const BlockQuote = ({ children, colour, name, role, src }) => (
  <blockquote
    className={`BlockQuote ${colour ? `BlockQuote--${colour}` : ""} ${
      src ? `BlockQuote--withImage` : ""
    }`}
  >
    {src && (
      <div className="BlockQuote-media">
        <div className="BlockQuote-image">
          <Image alt="" src={src} ratio="1by1" />
        </div>
      </div>
    )}
    <div className="BlockQuote-text">
      <div className="BlockQuote-children">{children}</div>
      <cite className="BlockQuote-cite">
        <p className="BlockQuote-name">{name}</p>
        {role && <p className="BlockQuote-role">{role}</p>}
      </cite>
    </div>
  </blockquote>
);

BlockQuote.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.oneOf(["orange", "pink", "purple", "teal"]),
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  src: PropTypes.string
};

export default BlockQuote;
