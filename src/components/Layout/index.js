import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";

import favicon from "./favicon.ico";

import "./index.css";

const Layout = ({ children, footer }) => (
  <div className="Layout">
    <Helmet titleTemplate="%s - Barnardo's">
      <html lang="en" />
      <link rel="shortcut icon" type="image/x-icon" href={favicon} />
    </Helmet>
    <Header />
    <Main>{children}</Main>
    <Footer>{footer}</Footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.node
};

export default Layout;
