import PropTypes from "prop-types";
import React from "react";

import Link from "../Link";

import "./index.css";

const TopicMenuItem = ({ items, level, text, href }) => (
  <li className="TopicMenu-item">
    <Link className="TopicMenu-link" href={href}>
      {text}
    </Link>
    {items && <TopicMenuItems items={items} level={level + 1} />}
  </li>
);

const TopicMenuItems = ({ items, level }) => (
  <ul className={`TopicMenu-items TopicMenu-items--level${level}`}>
    {items.map((item, index) => (
      <TopicMenuItem key={index} level={level} {...item} />
    ))}
  </ul>
);

const TopicMenu = ({ items }) => (
  <nav className="TopicMenu">
    <div className="TopicMenu-inner">
      <p className="TopicMenu-heading">In this topic:</p>
      <TopicMenuItems items={items} level={1} />
    </div>
  </nav>
);

TopicMenuItem.propTypes = {
  level: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  items: PropTypes.array
};

TopicMenuItems.propTypes = {
  level: PropTypes.number.isRequired,
  items: PropTypes.array
};

TopicMenu.propTypes = {
  items: PropTypes.array.isRequired
};

export default TopicMenu;
