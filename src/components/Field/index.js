import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Field = ({ children, errored }) => (
  <div className={`Field ${errored ? "Field--errored" : ""}`}>{children}</div>
);

Field.propTypes = {
  children: PropTypes.node.isRequired,
  errored: PropTypes.bool
};

export default Field;
