import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

import favicon from "./favicon.ico";

import "./index.css";

const Site = ({ children }) => (
  <div className="Site">
    <Helmet titleTemplate="%s - Barnardo's">
      <html lang="en" />
      <link rel="shortcut icon" type="image/x-icon" href={favicon} />
    </Helmet>
    {children}
  </div>
);

Site.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.node
};

export default Site;
