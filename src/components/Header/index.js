import PropTypes from "prop-types";
import React from "react";

import logo from "./logo.svg";

import "./index.css";

const Header = ({ href = "/", title = "Go to the homepage" }) => (
  <header className="Header">
    <a className="Header-logo" href={href} title={title}>
      <img
        alt="Believe in children Barnardo’s"
        className="Header-logoInner"
        src={logo}
      />
    </a>
  </header>
);

Header.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string
};

export default Header;
