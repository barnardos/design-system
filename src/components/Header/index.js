import PropTypes from "prop-types";
import React, { useState } from "react";

import burger from "./burger.svg";
import cross from "./cross.svg";
import glass from "./glass.svg";
import logo from "./logo.svg";

import "./index.css";

const Header = ({ href = "/", menu, search, title = "Go to the homepage" }) => {
  const [isActive, setActive] = useState(false);
  const ref = React.createRef();

  function handleClick() {
    setActive(!isActive);
    if (!isActive) ref.current.focus();
  }

  return (
    <header className="Header">
      <div className="Header-actions">
        <a className="Header-logoLink" href={href} title={title}>
          <img
            alt="Believe in children Barnardo’s"
            className="Header-logo"
            src={logo}
          />
        </a>
        {(menu || search) && (
          <button
            className="Header-trigger"
            onClick={handleClick}
            tabIndex="-1"
          >
            <img
              alt="Open"
              className="Header-triggerIcon"
              src={isActive ? cross : menu ? burger : glass}
            />
            {menu && <span className="Header-triggerText">Menu</span>}
          </button>
        )}
      </div>
      <div
        className={`Header-target ${isActive ? "Header-target--active" : ""}`}
      >
        {search && (
          <div className="Header-search">
            {React.cloneElement(search, { ref: ref })}
          </div>
        )}
        {menu && <div className="Header-menu">{menu}</div>}
      </div>
    </header>
  );
};

Header.propTypes = {
  href: PropTypes.string,
  menu: PropTypes.node,
  search: PropTypes.node,
  title: PropTypes.string
};

export default Header;
