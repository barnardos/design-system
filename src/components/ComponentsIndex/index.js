import PropTypes from "prop-types";
import React from "react";

import Link from "../Link";

import "./index.css";

const ComponentsIndex = ({ href, items, title }) => (
  <div className="ComponentsIndex">
    <p className="ComponentsIndex-title">
      <Link className="ComponentsIndex-titleLink" href={href}>
        {title}
      </Link>
    </p>
    <ul className="ComponentsIndex-items">
      {items
        .filter(item => item.level === 1)
        .map(({ href, text }, index) => (
          <li className="ComponentsIndex-item" key={index}>
            <Link className="ComponentsIndex-link" href={href}>
              {text}
            </Link>
          </li>
        ))}
    </ul>
  </div>
);

ComponentsIndex.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default ComponentsIndex;
