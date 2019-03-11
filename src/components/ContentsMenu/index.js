import PropTypes from "prop-types";
import React from "react";

import Link from "../Link";

import "./index.css";

const ContentsMenuItem = ({ items, level, text, href }) => (
  <li className="ContentsMenu-item">
    <Link className="ContentsMenu-link" href={href}>
      {text}
    </Link>
    {items && <ContentsMenuItems items={items} level={level + 1} />}
  </li>
);

const ContentsMenuItems = ({ items, level }) => (
  <ul className={`ContentsMenu-items ContentsMenu-items--level${level}`}>
    {items.map((item, index) => (
      <ContentsMenuItem key={index} level={level} {...item} />
    ))}
  </ul>
);

const ContentsMenu = ({ items }) => (
  <nav className="ContentsMenu">
    <div className="ContentsMenu-inner">
      <p className="ContentsMenu-heading">In this section:</p>
      <ContentsMenuItems items={items} level={1} />
    </div>
  </nav>
);

ContentsMenuItem.propTypes = {
  level: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  items: PropTypes.array
};

ContentsMenuItems.propTypes = {
  level: PropTypes.number.isRequired,
  items: PropTypes.array
};

ContentsMenu.propTypes = {
  items: PropTypes.array.isRequired
};

export default ContentsMenu;
