import PropTypes from "prop-types";
import React from "react";

import Link from "../Link";

import "./index.css";

const ContentsMenuItem = ({ level, text, href }) => (
  <li className={`ContentsMenu-item ContentsMenu-item--level${level}`}>
    <Link className="ContentsMenu-link" data-test-link={text} href={href}>
      {text}
    </Link>
  </li>
);

const ContentsMenu = ({ items }) => (
  <nav className="ContentsMenu">
    <div className="ContentsMenu-inner">
      <p className="ContentsMenu-title">In this section:</p>
      <ul className="ContentsMenu-items">
        {items.map((item, index) => (
          <ContentsMenuItem key={index} {...item} />
        ))}
      </ul>
    </div>
  </nav>
);

ContentsMenuItem.propTypes = {
  level: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

ContentsMenu.propTypes = {
  items: PropTypes.array.isRequired
};

export default ContentsMenu;
