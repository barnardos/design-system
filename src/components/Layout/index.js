import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

import Header from "../Header";

import "./index.css";

const Layout = ({ children, type }) => {
  const className = `Layout Layout--${type}`;
  return (
    <div className={className}>
      <Helmet titleTemplate="%s - Barnardo's">
        <html lang="en" />
      </Helmet>
      <Header />
      <main className="Layout-main">{children}</main>
    </div>
  );
};

Layout.propTypes = {
  type: PropTypes.oneOf(["twoThirds"]),
  children: PropTypes.any
};

export default Layout;
