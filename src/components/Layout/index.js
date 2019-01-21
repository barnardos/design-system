import PropTypes from "prop-types";
import React from "react";

import App from "../App";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";

import "./index.css";

const Layout = ({ children, footer }) => (
  <App>
    <div className="Layout">
      <Header />
      <Main>{children}</Main>
      <Footer>{footer}</Footer>
    </div>
  </App>
);

Layout.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.node
};

export default Layout;
