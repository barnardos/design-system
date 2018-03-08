import GatsbyLink from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Navigation = ({ items }) => (
  <nav className="Navigation">
    <ul>
      {items.map(({ text, to }, index) => (
        <li className="Navigation-item" key={index}>
          <GatsbyLink className="Navigation-link" to={to}>
            {text}
          </GatsbyLink>
        </li>
      ))}
    </ul>
  </nav>
);

Navigation.propTypes = {
  items: PropTypes.array.isRequired
};

export default Navigation;
