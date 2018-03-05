import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const AttentionGrabbingLink = ({ color, href, text }) => {
  const className = `AttentionGrabbingLink AttentionGrabbingLink--${color}`;
  return (
    <a className={className} href={href}>
      {text}
    </a>
  );
};

AttentionGrabbingLink.propTypes = {
  color: PropTypes.oneOf(["black", "orange", "pink", "purple", "teal"]),
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default AttentionGrabbingLink;
