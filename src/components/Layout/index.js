import PropTypes from "prop-types";
import React from "react";

import Site from "../Site";

import "./index.css";

const Layout = ({ children }) => (
  <Site>
    <div className="Layout">{children}</div>
  </Site>
);

Layout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.node
};

export default Layout;
