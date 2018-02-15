import PropTypes from "prop-types";
import React from "react";

import Navigation from "../components/Navigation";

import "../index.css";
import "./index.css";

const Layout = ({ children }) => (
  <div className="Layout">
    <Navigation />
    <main className="Layout-main">{children()}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
