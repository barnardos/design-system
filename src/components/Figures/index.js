import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Figures = ({ children }) => <div className="Figures">{children}</div>;

Figures.propTypes = {
  children: PropTypes.node.isRequired
};

export default Figures;
