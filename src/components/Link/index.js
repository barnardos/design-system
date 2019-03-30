import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Link = ({ children, inverted, href, ...other }) => {
  const className = `Link ${inverted ? "Link--inverted" : ""}`;
  return (
    <a className={className} href={href} {...other}>
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Link;
