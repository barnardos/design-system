import GatsbyLink from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const DesignSystemNavigation = ({ items }) => (
  <nav className="DesignSystemNavigation">
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
  items: PropTypes.array.isRequired
};

export default DesignSystemNavigation;
