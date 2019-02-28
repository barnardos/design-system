import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Contents = ({ children }) => <div className="Contents">{children}</div>;

Contents.propTypes = {
  children: PropTypes.node.isRequired
};

export default Contents;
