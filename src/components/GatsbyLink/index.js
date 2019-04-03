import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import DesignSystemLink from "../Link";
import "../Link/index.css";

const GatsbyLink = ({
  children,
  inverted,
  href,
  activeClassName,
  ...other
}) => {
  const className = `Link ${inverted ? "Link--inverted" : ""}`;
  // Assume internal links start with exactly one slash
  if (/^\/(?!\/)/.test(href)) {
    return (
      <Link
        className={className}
        to={href}
        activeClassName={activeClassName}
        {...other}
      >
        {children}
      </Link>
    );
  }
  return (
    <DesignSystemLink inverted={inverted} href={href} {...other}>
      {children}
    </DesignSystemLink>
  );
};

GatsbyLink.propTypes = {
  activeClassName: PropTypes.string,
  href: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default GatsbyLink;
