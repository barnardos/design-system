import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const ProminentLink = ({ colour, href, isFull, text }) => (
  <a
    className={`ProminentLink ProminentLink--${colour} ${
      isFull ? "ProminentLink--full" : ""
    }`}
    href={href}
  >
    {text}
  </a>
);

ProminentLink.propTypes = {
  colour: PropTypes.oneOf(["black", "orange", "pink", "purple", "teal"]),
  href: PropTypes.string.isRequired,
  isFull: PropTypes.bool,
  text: PropTypes.string.isRequired
};

export default ProminentLink;
