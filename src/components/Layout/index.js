import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

import Feedback from "../Feedback";
import Footer from "../Footer";
import Header from "../Header";

import favicon from "./favicon.ico";

import "./index.css";

const Layout = ({ children }) => (
  <div className="Layout">
    <Helmet titleTemplate="%s - Barnardo's">
      <html lang="en" />
      <link rel="shortcut icon" type="image/x-icon" href={favicon} />
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand:400,700"
        rel="stylesheet"
      />
    </Helmet>
    <div className="Layout-header">
      <Header />
    </div>
    <main className="Layout-main">{children}</main>
    <div className="Layout-feedback">
      <Feedback title="Give feedback">
        {`Email the Design System team on `}
        <a href="mailto:designsystem@barnardos.org.uk">
          {`designsystem@barnardos.org.uk`}
        </a>
        {`.`}
      </Feedback>
    </div>
    <div className="Layout-footer">
      <Footer>{`© Barnardo's 2018`}</Footer>
    </div>
  </div>
);
Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
