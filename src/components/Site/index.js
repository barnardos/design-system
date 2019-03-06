import Helmet from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

import favicon from "./favicon.ico";

import "./index.css";

const Site = ({ children, description = "" }) => (
  <div className="Site">
    <Helmet titleTemplate="%s - Barnardo’s">
      <html lang="en" />
      <link rel="preconnect" href="https://p.typekit.com" />
      <link rel="stylesheet" href="https://use.typekit.net/djy7snj.css" />
      <link rel="shortcut icon" type="image/x-icon" href={favicon} />
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </div>
);

Site.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string
};

export default Site;
