import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Callouts = ({ children }) => <div className="Callouts">{children}</div>;

Callouts.propTypes = {
  children: PropTypes.node.isRequired
};

export default Callouts;
