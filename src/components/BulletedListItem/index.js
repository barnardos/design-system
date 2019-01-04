import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const BulletedListItem = ({ children }) => (
  <li className="BulletedListItem">{children}</li>
);

BulletedListItem.propTypes = {
  children: PropTypes.node.isRequired
};

export default BulletedListItem;
