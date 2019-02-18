import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Layout = ({ children }) => <div className="Layout">{children}</div>;

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
