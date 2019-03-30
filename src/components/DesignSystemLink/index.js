import { Link as GatsbyLink } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Link from "../Link";
import "../Link/index.css";

const DesignSystemLink = ({
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
    <Link inverted={inverted} href={href} {...other}>
      {children}
    </Link>
  );
};

DesignSystemLink.propTypes = {
  activeClassName: PropTypes.string,
  href: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default DesignSystemLink;
