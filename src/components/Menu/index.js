import PropTypes from "prop-types";
import React from "react";

import Link from "../GatsbyLink";

import "./index.css";

const Menu = ({ items }) => (
  <nav className="Menu">
    <ul className="Menu-items">
      {items.map(({ active, text, href, items }, index) => (
        <li
          className={`Menu-item ${active ? "Menu-item--active" : ""}`}
          key={index}
        >
          <Link href={href} className="Menu-link">
            {text}
          </Link>
          {items && (
            <ul className="Menu-secondaryItems">
              {items.map(({ active, text, href }, index) => (
                <li
                  className={`Menu-secondaryItem ${
                    active ? "Menu-secondaryItem--active" : ""
                  }`}
                  key={index}
                >
                  <Link href={href} className="Menu-secondaryLink">
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          active: PropTypes.bool,
          href: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired
        })
      )
    })
  ).isRequired
};

export default Menu;
