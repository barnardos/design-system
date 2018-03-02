import PropTypes from "prop-types";
import React from "react";

const Link = ({ href, children }) => <a href={href}>{children}</a>;

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
