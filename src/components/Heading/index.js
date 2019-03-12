import slugify from "@sindresorhus/slugify";
import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Heading = ({ children }) => (
  <h2 className="Heading" id={slugify(children.toString())}>
    {children}
  </h2>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired
};

export default Heading;
