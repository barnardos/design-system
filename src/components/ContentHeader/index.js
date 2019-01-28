import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const ContentHeader = ({ children }) => (
  <div className="ContentHeader">{children}</div>
);

ContentHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default ContentHeader;
