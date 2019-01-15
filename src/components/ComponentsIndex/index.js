import { Link as GatsbyLink } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const ComponentsIndex = ({ items }) => (
  <ul className="ComponentsIndex">
    {items
      .filter(item => item.level === 1)
      .map(({ text, to }, index) => (
        <li className="ComponentsIndex-item" key={index}>
          <GatsbyLink className="ComponentsIndex-link" to={to}>
            {text}
          </GatsbyLink>
        </li>
      ))}
  </ul>
);

ComponentsIndex.propTypes = {
  items: PropTypes.array.isRequired
};

export default ComponentsIndex;
