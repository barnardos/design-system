import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const ProgressLink = ({ children, href }) => (
  <a className="ProgressLink" href={href}>
    {children}
  </a>
);

ProgressLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
};

export default ProgressLink;
