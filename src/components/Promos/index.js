import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Promos = ({ children }) => <div className="Promos">{children}</div>;

Promos.propTypes = {
  children: PropTypes.node.isRequired
};

export default Promos;
