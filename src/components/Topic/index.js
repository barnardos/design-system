import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Topic = ({ children }) => <p className="Topic">{children}</p>;

Topic.propTypes = {
  children: PropTypes.node.isRequired
};

export default Topic;
