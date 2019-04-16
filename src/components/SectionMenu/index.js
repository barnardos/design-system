import PropTypes from "prop-types";
import React from "react";

import Link from "../Link";

import "./index.css";

const SectionMenuItem = ({ current, text, href }) => (
  <li className="SectionMenu-item">
    {current !== text && (
      <Link className="SectionMenu-link" href={href}>
        {text}
      </Link>
    )}
    {current === text && <span className="SectionMenu-text">{text}</span>}
  </li>
);

const SectionMenuItems = ({ current, items }) => (
  <ul className="SectionMenu-items">
    {items.map((item, index) => (
      <SectionMenuItem current={current} key={index} {...item} />
    ))}
  </ul>
);

const SectionMenu = ({ current, items }) => (
  <nav className="SectionMenu">
    <div className="SectionMenu-inner">
      <p className="SectionMenu-heading">In this section:</p>
      <SectionMenuItems items={items} current={current} />
    </div>
  </nav>
);

SectionMenuItem.propTypes = {
  current: PropTypes.string,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

SectionMenuItems.propTypes = {
  current: PropTypes.string,
  items: PropTypes.array
};

SectionMenu.propTypes = {
  current: PropTypes.string,
  items: PropTypes.array.isRequired
};

export default SectionMenu;
