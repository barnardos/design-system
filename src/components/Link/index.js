import PropTypes from "prop-types";
import React from "react";
import { Link as GatsbyLink } from "gatsby";

import "./index.css";

const Link = ({ children, href, activeClassName, ...other }) => {
  // Assume internal links start with exactly one slash
  if (/^\/(?!\/)/.test(href)) {
    return (
      <GatsbyLink
        className="Link"
        to={href}
        activeClassName={activeClassName}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a className="Link" href={href} {...other}>
      {children}
    </a>
  );
};

Link.propTypes = {
  activeClassName: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Link;
