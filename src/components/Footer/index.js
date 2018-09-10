import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Footer = ({ children }) => <footer className="Footer">{children}</footer>;

Footer.propTypes = {
  children: PropTypes.node.isRequired
};

export default Footer;
