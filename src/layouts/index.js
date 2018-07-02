import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

import Header from "../components/Header";

import "../index.css";
import "./index.css";

const Layout = ({ children }) => (
  <div className="Layout">
    <Helmet titleTemplate="%s - Barnardo's">
      <html lang="en" />
    </Helmet>
    <Header />
    <main className="Layout-main">{children()}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
