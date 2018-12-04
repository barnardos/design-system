import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Link = ({ href, children }) => (
  <a className="Link" href={href}>
    {children}
  </a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
