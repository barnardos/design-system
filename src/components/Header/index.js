import React from "react";

import logo from "./logo.svg";

import "./index.css";

const Header = () => (
  <header className="Header">
    <a className="Header-logo" href="http://www.barnardos.org.uk/">
      <img
        alt="Believe in children Barnardo’s"
        className="Header-logoInner"
        src={logo}
      />
    </a>
  </header>
);

export default Header;
