import slugify from "@sindresorhus/slugify";
import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Subheading = ({ children }) => (
  <h3 className="Subheading" id={slugify(children.toString())}>
    {children}
  </h3>
);

Subheading.propTypes = {
  children: PropTypes.node.isRequired
};

export default Subheading;
