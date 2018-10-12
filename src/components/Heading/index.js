import PropTypes from "prop-types";
import React from "react";

import slugifyNode from "../../utils/slugifyNode";

import "./index.css";

const Heading = ({ children }) => (
  <h2 className="Heading" id={slugifyNode(children)}>
    {children}
  </h2>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired
};

export default Heading;
