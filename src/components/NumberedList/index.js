import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const NumberedList = ({ children }) => (
  <ol className="NumberedList">{children}</ol>
);

NumberedList.propTypes = {
  children: PropTypes.node.isRequired
};

export default NumberedList;
