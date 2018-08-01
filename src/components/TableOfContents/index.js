import { Link as GatsbyLink } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Link = ({ index, level, text, to }) => {
  const className = `TableOfContents-item TableOfContents-item--level${level}`;
  return (
    <li className={className} key={index}>
      <GatsbyLink
        className="TableOfContents-link"
        data-test-link={text}
        to={to}
      >
        {text}
      </GatsbyLink>
    </li>
  );
};

const TableOfContents = ({ items }) => (
  <div className="TableOfContents">
    <p className="TableOfContents-section">{`In this section:`}</p>
    <ul className="TableOfContents-items">
      {items.map(({ level, text, to }, index) =>
        Link({ index, level, text, to })
      )}
    </ul>
  </div>
);

Link.propTypes = {
  index: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

TableOfContents.propTypes = {
  items: PropTypes.array.isRequired
};

export default TableOfContents;
