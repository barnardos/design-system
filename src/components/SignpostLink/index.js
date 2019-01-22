import { Link as GatsbyLink } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const SignpostLink = ({ children, href, inverted, to }) => {
  const Component = to ? GatsbyLink : "a";
  return (
    <div className="SignpostLink">
      <Component
        className={`SignpostLink-link ${
          inverted ? "SignpostLink-link--inverted" : ""
        }`}
        to={to}
        href={href}
      >
        {children}
      </Component>
    </div>
  );
};

SignpostLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  inverted: PropTypes.bool,
  to: PropTypes.string
};

export default SignpostLink;
