import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const ListItem = ({ children }) => <li className="ListItem">{children}</li>;

ListItem.propTypes = {
  children: PropTypes.node.isRequired
};

export default ListItem;
