import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Callout = ({ children }) => <div className="Callout">{children}</div>;

Callout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Callout;
