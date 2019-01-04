import PropTypes from "prop-types";
import React from "react";

import "./index.css";

const Main = ({ children }) => <main className="Main">{children}</main>;

Main.propTypes = {
  children: PropTypes.node.isRequired
};

export default Main;
