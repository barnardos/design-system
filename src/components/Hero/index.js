import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Hero = ({ children }) => (
  <h1 className="Hero" data-test-title="">
    <span className="Hero-inner">{children}</span>
  </h1>
);

Hero.propTypes = {
  children: PropTypes.node.isRequired
};

export default Hero;
