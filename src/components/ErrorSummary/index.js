import PropTypes from "prop-types";
import React from "react";
import "./index.css";

const ErrorSummary = ({ items }) => {
  return (
    <div className="ErrorSummary">
      <p className="ErrorSummary-title">{`There is a problem`}</p>
      <ul className="ErrorSummary-items">
        {items.map(({ id, error }, index) => (
          <li className="ErrorSummary-item" key={index}>
            <a className="ErrorSummary-link" href={`#${id}`}>
              {error}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

ErrorSummary.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      error: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ErrorSummary;
