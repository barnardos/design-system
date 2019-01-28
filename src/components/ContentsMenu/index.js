import { Link as GatsbyLink } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Link = ({ index, level, text, to }) => {
  const className = `ContentsMenu-item ContentsMenu-item--level${level}`;
  return (
    <li className={className} key={index}>
      <GatsbyLink className="ContentsMenu-link" data-test-link={text} to={to}>
        {text}
      </GatsbyLink>
    </li>
  );
};

const ContentsMenu = ({ items }) => (
  <nav className="ContentsMenu">
    <p className="ContentsMenu-title">{`In this section:`}</p>
    <ul className="ContentsMenu-items">
      {items.map(({ level, text, to }, index) =>
        Link({ index, level, text, to })
      )}
    </ul>
  </nav>
);

Link.propTypes = {
  index: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

ContentsMenu.propTypes = {
  items: PropTypes.array.isRequired
};

export default ContentsMenu;
