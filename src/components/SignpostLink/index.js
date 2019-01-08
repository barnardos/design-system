import { Link as GatsbyLink } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const SignpostLink = ({ children, inverted, to }) => (
  <GatsbyLink
    className={`SignpostLink ${inverted ? "SignpostLink--inverted" : ""}`}
    to={to}
  >
    {children}
  </GatsbyLink>
);

SignpostLink.propTypes = {
  children: PropTypes.node.isRequired,
  inverted: PropTypes.bool,
  to: PropTypes.string.isRequired
};

export default SignpostLink;
