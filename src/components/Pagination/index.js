import PropTypes from "prop-types";
import React from "react";

import Link from "../GatsbyLink";

import "./index.css";

const PaginationItem = ({ direction, href, label }) => (
  <li className="Pagination-item">
    <Link
      className={`Pagination-link Pagination-link--${direction}`}
      href={href}
    >
      <span className="Pagination-text">{`${direction[0].toUpperCase()}${direction.slice(
        1
      )}`}</span>
      {label && <span className="Pagination-label"> {label}</span>}
    </Link>
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
  href: PropTypes.string.isRequired
};

Pagination.propTypes = {
  previous: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string.isRequired
  }),
  next: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string.isRequired
  })
};

export default Pagination;
