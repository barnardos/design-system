import { Link as GatsbyLink } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const ComponentsIndex = ({ items, title, to }) => (
  <div className="ComponentsIndex">
    <p className="ComponentsIndex-title">
      <GatsbyLink className="ComponentsIndex-titleLink" to={to}>
        {title}
      </GatsbyLink>
    </p>
    <ul className="ComponentsIndex-items">
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
  </div>
);

ComponentsIndex.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default ComponentsIndex;
