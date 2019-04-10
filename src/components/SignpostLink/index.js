import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const SignpostLink = ({ children, href, inverted, LinkComponent }) => (
  <LinkComponent
    className={`SignpostLink ${inverted ? "SignpostLink--inverted" : ""}`}
    href={href}
  >
    {children}
  </LinkComponent>
);

SignpostLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  LinkComponent: PropTypes.func.isRequired
};

export default SignpostLink;
