import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const ContentWithMenu = ({ children }) => (
  <div className="ContentWithMenu">{children}</div>
);

ContentWithMenu.propTypes = {
  children: PropTypes.node.isRequired
};

export default ContentWithMenu;
