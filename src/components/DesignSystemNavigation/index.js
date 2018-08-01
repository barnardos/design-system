import { Link as GatsbyLink } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const DesignSystemNavigation = ({ items, title }) => (
  <nav className="DesignSystemNavigation">
    {title && <p className="DesignSystemNavigation-title">{title}</p>}
    <ul className="DesignSystemNavigation-items">
      {items.map(({ text, to }, index) => (
        <li className="DesignSystemNavigation-item" key={index}>
          <GatsbyLink
            className="DesignSystemNavigation-link"
            data-test-link={text}
            to={to}
          >
            {text}
          </GatsbyLink>
        </li>
      ))}
    </ul>
  </nav>
);

DesignSystemNavigation.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string
};

export default DesignSystemNavigation;
