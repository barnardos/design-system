import PropTypes from "prop-types";
import React from "react";

import "../index.css";
import "./index.css";

const Layout = ({ children }) => <main className="Layout">{children()}</main>;

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
