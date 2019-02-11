import PropTypes from "prop-types";
import React from "react";

import Link from "../Link";

import "./index.css";

const SignpostLink = ({ children, href, inverted }) => (
  <Link
    className={`SignpostLink ${inverted ? "SignpostLink--inverted" : ""}`}
    href={href}
  >
    {children}
  </Link>
);

SignpostLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  inverted: PropTypes.bool
};

export default SignpostLink;
