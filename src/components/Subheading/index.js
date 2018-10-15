import PropTypes from "prop-types";
import React from "react";

import slugifyNode from "../../utils/slugifyNode";

import "./index.css";

const Subheading = ({ children }) => (
  <h3 className="Subheading" id={slugifyNode(children)}>
    {children}
  </h3>
);

Subheading.propTypes = {
  children: PropTypes.node.isRequired
};

export default Subheading;
