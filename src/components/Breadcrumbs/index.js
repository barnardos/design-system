import { Link as GatsbyLink } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Breadcrumbs = ({ items }) => (
  <nav className="Breadcrumbs">
    <ul className="Breadcrumbs-items">
      {items.map(({ text, to }, index) => (
        <li className="Breadcrumbs-item" key={index}>
          <GatsbyLink className="Breadcrumbs-link" to={to}>
            {text}
          </GatsbyLink>
        </li>
      ))}
    </ul>
  </nav>
);

Breadcrumbs.propTypes = {
  items: PropTypes.array.isRequired
};

export default Breadcrumbs;
