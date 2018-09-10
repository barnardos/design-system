import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

import Footer from "../Footer";
import Header from "../Header";

import "./index.css";

const Layout = ({ children }) => (
  <div className="Layout">
    <Helmet titleTemplate="%s - Barnardo's">
      <html lang="en" />
    </Helmet>
    <div className="Layout-header">
      <Header />
    </div>
    <main className="Layout-main">{children}</main>
    <div className="Layout-footer">
      <Footer>{`© Barnardo's 2018`}</Footer>
    </div>
  </div>
);
Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
