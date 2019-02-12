import PropTypes from "prop-types";
import React from "react";

import Link from "../Link";

import "./index.css";

const DesignSystemNavigation = ({ description, items, title, isFlex }) => (
  <nav
    className={`DesignSystemNavigation ${
      isFlex ? "DesignSystemNavigation--flex" : ""
    }`}
  >
    {title && <h3 className="DesignSystemNavigation-title">{title}</h3>}
    {description && (
      <p className="DesignSystemNavigation-description">{description}</p>
    )}
    <ul className="DesignSystemNavigation-items">
      {items.map(({ href, text }, index) => (
        <li className="DesignSystemNavigation-item" key={index}>
          <Link
            className="DesignSystemNavigation-link"
            data-test-link={text}
            href={href}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

DesignSystemNavigation.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  isFlex: PropTypes.bool
};

export default DesignSystemNavigation;
