import { Link as GatsbyLink } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const DesignSystemNavigation = ({ description, items, title, isFlex }) => {
  const className = `DesignSystemNavigation ${
    isFlex ? "DesignSystemNavigation--flex" : ""
  }`;

  return (
    <nav className={className}>
      {title && <p className="DesignSystemNavigation-title">{title}</p>}
      {description && (
        <p className="DesignSystemNavigation-description">{description}</p>
      )}
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
};

DesignSystemNavigation.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  isFlex: PropTypes.bool
};

export default DesignSystemNavigation;
