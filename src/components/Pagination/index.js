import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Pagination = ({ previous, next }) => (
  <ul className="Pagination">
    {previous && (
      <li className="Pagination-item">
        <a className="Pagination-link" href={previous.href}>
          <div className="Pagination-text">{`Previous`}</div>
          {previous.label && (
            <div className="Pagination-label">{previous.label}</div>
          )}
        </a>
      </li>
    )}
    {next && (
      <li className="Pagination-item">
        <a className="Pagination-link Pagination-link--next" href={next.href}>
          <div className="Pagination-text">{`Next`}</div>
          {next.label && <div className="Pagination-label">{next.label}</div>}
        </a>
      </li>
    )}
  </ul>
);

Pagination.propTypes = {
  previous: PropTypes.shape({
    href: PropTypes.string.isRequired,
    label: PropTypes.string
  }),
  next: PropTypes.shape({
    href: PropTypes.string.isRequired,
    label: PropTypes.string
  })
};

export default Pagination;
