import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

import "../index.css";
import "./index.css";

const Layout = ({ children }) => (
  <div className="Layout">
    <Helmet titleTemplate="%s - Barnardo's">
      <html lang="en" />
    </Helmet>
    <main className="Layout-main">{children()}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
