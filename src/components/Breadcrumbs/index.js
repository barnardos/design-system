import PropTypes from "prop-types";
import React from "react";

import Link from "../Link";

import "./index.css";

const Breadcrumbs = ({ items }) => (
  <nav className="Breadcrumbs">
    <ul className="Breadcrumbs-items">
      {items.map(({ text, href }, index) => (
        <li className="Breadcrumbs-item" key={index}>
          <Link className="Breadcrumbs-link" href={href}>
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Breadcrumbs;
