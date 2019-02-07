import PropTypes from "prop-types";
import { Link } from "gatsby";
import React from "react";

import "./index.css";

const Menu = ({ items }) => (
  <nav className="Menu">
    <ul className="Menu-items">
      {items.map(({ isActive, text, to, items }, index) => (
        <li
          className={`Menu-item ${isActive ? "Menu-item--active" : ""}`}
          key={index}
        >
          <Link to={to} className="Menu-link">
            {text}
          </Link>
          {items && (
            <ul className="Menu-secondaryItems">
              {items.map(({ isActive, text, to }, index) => (
                <li
                  className={`Menu-secondaryItem ${
                    isActive ? "Menu-secondaryItem--active" : ""
                  }`}
                  key={index}
                >
                  <Link to={to} className="Menu-secondaryLink">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </nav>
);

Menu.propTypes = {
  items: PropTypes.array.isRequired
};

export default Menu;
