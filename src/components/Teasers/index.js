import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Teasers = ({ children }) => <div className="Teasers">{children}</div>;

Teasers.propTypes = {
  children: PropTypes.node.isRequired
};

export default Teasers;
