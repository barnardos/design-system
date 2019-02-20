import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Details = ({ children, summary }) => (
  <details className="Details">
    <summary className="Details-summary">{summary}</summary>
    <div className="Details-children">{children}</div>
  </details>
);

Details.propTypes = {
  children: PropTypes.node.isRequired,
  summary: PropTypes.string.isRequired
};

export default Details;
