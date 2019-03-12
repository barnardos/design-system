import { Link as GatsbyLink } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Link = ({ children, inverted, href, activeClassName, ...other }) => {
  const className = `Link ${inverted ? "Link--inverted" : ""}`;
  // Assume internal links start with exactly one slash
  if (/^\/(?!\/)/.test(href)) {
    return (
      <GatsbyLink
        className={className}
        to={href}
        activeClassName={activeClassName}
        {...other}
      >
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a className={className} href={href} {...other}>
      {children}
    </a>
  );
};

Link.propTypes = {
  activeClassName: PropTypes.string,
  href: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Link;
