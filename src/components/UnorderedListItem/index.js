import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const UnorderedListItem = ({ children }) => (
  <li className="UnorderedListItem">{children}</li>
);

UnorderedListItem.propTypes = {
  children: PropTypes.node.isRequired
};

export default UnorderedListItem;
