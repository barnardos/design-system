import { Link as GatsbyLink } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const PaginationItem = ({ direction, to, label }) => (
  <li className="Pagination-item">
    <GatsbyLink
      className={`Pagination-link Pagination-link--${direction}`}
      to={to}
    >
      <div className="Pagination-text">{`${direction[0].toUpperCase()}${direction.slice(
        1
      )}`}</div>
      {label && <div className="Pagination-label">{label}</div>}
    </GatsbyLink>
  </li>
);

const Pagination = ({ previous, next }) => (
  <ul className="Pagination">
    {previous && <PaginationItem direction="previous" {...previous} />}
    {next && <PaginationItem direction="next" {...next} />}
  </ul>
);

PaginationItem.propTypes = {
  direction: PropTypes.string.isRequired,
  label: PropTypes.string,
  to: PropTypes.string.isRequired
};

Pagination.propTypes = {
  previous: PropTypes.shape({
    label: PropTypes.string,
    to: PropTypes.string.isRequired
  }),
  next: PropTypes.shape({
    label: PropTypes.string,
    to: PropTypes.string.isRequired
  })
};

export default Pagination;
