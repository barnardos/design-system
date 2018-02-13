import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const UnorderedList = ({ children }) => (
  <ul className="UnorderedList">{children}</ul>
);

UnorderedList.propTypes = {
  children: PropTypes.node.isRequired
};

export default UnorderedList;
