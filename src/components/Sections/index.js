import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Sections = ({ children }) => <div className="Sections">{children}</div>;

Sections.propTypes = {
  children: PropTypes.node.isRequired
};

export default Sections;
