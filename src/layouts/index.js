import PropTypes from "prop-types";
import React from "react";

import "../index.css";
import "./index.css";

const Layout = ({ children }) => (
  <div className="Layout">
    <main className="Layout-main">{children()}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
