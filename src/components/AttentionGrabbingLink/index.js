import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const AttentionGrabbingLink = ({ colour, href, text }) => {
  const className = `AttentionGrabbingLink AttentionGrabbingLink--${colour}`;
  return (
    <a className={className} href={href}>
      {text}
    </a>
  );
};

AttentionGrabbingLink.propTypes = {
  colour: PropTypes.oneOf(["black", "orange", "pink", "purple", "teal"]),
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default AttentionGrabbingLink;
