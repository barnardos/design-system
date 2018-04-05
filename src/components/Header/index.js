import React from "react";
import PropTypes from "prop-types";

import Navigation from "../Navigation";
import SubmitSearchControl from "../SubmitSearchControl";

import logo from "./logo.svg";

import "./index.css";

const Header = ({ links, navigation }) => {
  return (
    <header className="Header">
      <a className="Header-logo" href="http://www.barnardos.org.uk/">
        <img
          alt="Believe in children Barnardo’s"
          className="Header-logoInner"
          src={logo}
        />
      </a>
      {navigation && (
        <div className="Header-navigation">
          <Navigation {...navigation} />
        </div>
      )}
      <div className="Header-submitSearchControl">
        <SubmitSearchControl />
      </div>
      {links && (
        <ul className="Header-linkItems">
          {links.map(({ href, text }, index) => (
            <li className="Header-linkItem" key={index}>
              <a className="Header-link" href={href}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

Header.propTypes = {
  links: PropTypes.array,
  navigation: PropTypes.object
};

export default Header;
