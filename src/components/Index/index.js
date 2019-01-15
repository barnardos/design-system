import { Link as GatsbyLink } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Link = ({ index, level, text, to }) => {
  const className = `Index-item Index-item--level${level}`;
  return (
    <li className={className} key={index}>
      <GatsbyLink className="Index-link" data-test-link={text} to={to}>
        {text}
      </GatsbyLink>
    </li>
  );
};

const Index = ({ items }) => (
  <ul className="Index">
    {items.map(({ level, text, to }, index) =>
      Link({ index, level, text, to })
    )}
  </ul>
);

Link.propTypes = {
  index: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

Index.propTypes = {
  items: PropTypes.array.isRequired
};

export default Index;
