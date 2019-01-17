import { Link as GatsbyLink } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Pagination = ({ previous, next }) => (
  <ul className="Pagination">
    {previous && (
      <li className="Pagination-item">
        <GatsbyLink className="Pagination-link" to={previous.to}>
          <div className="Pagination-text">{`Previous`}</div>
          {previous.label && (
            <div className="Pagination-label">{previous.label}</div>
          )}
        </GatsbyLink>
      </li>
    )}
    {next && (
      <li className="Pagination-item">
        <GatsbyLink
          className="Pagination-link Pagination-link--next"
          to={next.to}
        >
          <div className="Pagination-text">{`Next`}</div>
          {next.label && <div className="Pagination-label">{next.label}</div>}
        </GatsbyLink>
      </li>
    )}
  </ul>
);

Pagination.propTypes = {
  previous: PropTypes.shape({
    to: PropTypes.string.isRequired,
    label: PropTypes.string
  }),
  next: PropTypes.shape({
    to: PropTypes.string.isRequired,
    label: PropTypes.string
  })
};

export default Pagination;
