import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const BulletedList = ({ children }) => (
  <ul className="BulletedList">{children}</ul>
);

BulletedList.propTypes = {
  children: PropTypes.node.isRequired
};

export default BulletedList;
