import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Cite = ({ children }) => (
  <p className="Cite">
    <cite className="Cite-inner">{children}</cite>
  </p>
);

Cite.propTypes = {
  children: PropTypes.node.isRequired
};

export default Cite;
